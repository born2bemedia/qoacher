'use client';

import { type ChangeEvent, type FormEvent, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';

import { Modal } from '@/features/modal';
import { sendCoacherForm } from '@/features/сoacher-form/api/send-coacher-form';

import { isPhoneValid } from '@/shared/lib/forms';
import { cn } from '@/shared/lib/utils';
import { notifyWarning } from '@/shared/lib/utils/notify';
import { Button } from '@/shared/ui/components/atoms/button';
import { PhoneField } from '@/shared/ui/components/atoms/phone-field';
import { Text } from '@/shared/ui/components/atoms/text';
import { TextArea } from '@/shared/ui/components/atoms/text-area';
import { TextField } from '@/shared/ui/components/atoms/text-field';
import { Title } from '@/shared/ui/components/atoms/title';

type CoacherFormValues = {
  name: string;

  yearsOfExperience: string;
  email: string;
  phone: string;
  areaOfExpertise: string;
  cvLink: string;
};

type CoacherFormErrors = Partial<Record<keyof CoacherFormValues | 'cvFile', string>>;

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const SUPPORTED_FILE_EXTENSIONS = ['pdf', 'doc', 'docx'];
const SUPPORTED_FILE_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
];

const initialValues: CoacherFormValues = {
  name: '',
  yearsOfExperience: '',
  email: '',
  phone: '',
  areaOfExpertise: '',
  cvLink: '',
};

const getFileExtension = (fileName: string) => fileName.split('.').pop()?.toLowerCase() ?? '';

const isSupportedFile = (file: File) => {
  const extension = getFileExtension(file.name);

  return (
    SUPPORTED_FILE_EXTENSIONS.includes(extension) &&
    (SUPPORTED_FILE_TYPES.includes(file.type) || file.type === '')
  );
};

const isValidUrl = (value: string) => {
  try {
    const url = new URL(value);

    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch {
    return false;
  }
};

type CoacherFormTranslate = (key: string, options?: { fallback: string }) => string;

const validateForm = (
  values: CoacherFormValues,
  cvFile: File | null,
  t: CoacherFormTranslate
): CoacherFormErrors => {
  const errors: CoacherFormErrors = {};
  const trimmedName = values.name.trim();
  const trimmedYears = values.yearsOfExperience.trim();
  const trimmedEmail = values.email.trim();
  const trimmedPhone = values.phone.trim();
  const trimmedExpertise = values.areaOfExpertise.trim();
  const trimmedLink = values.cvLink.trim();
  const years = Number(trimmedYears);
  const phoneDigits = trimmedPhone.replace(/\D/g, '');

  if (!trimmedName) {
    errors.name = t('errors.nameEmpty', { fallback: 'Please enter your name.' });
  } else if (trimmedName.length < 3) {
    errors.name = t('errors.nameShort', { fallback: 'Please enter your full name.' });
  } else if (!/^[\p{L}\s.'-]+$/u.test(trimmedName)) {
    errors.name = t('errors.nameInvalid', { fallback: 'Please enter a valid name.' });
  }

  if (!trimmedYears) {
    errors.yearsOfExperience = t('errors.yearsEmpty', {
      fallback: 'Please specify your years of experience.',
    });
  } else if (!Number.isFinite(years) || years < 0) {
    errors.yearsOfExperience = t('errors.yearsInvalid', {
      fallback: 'Please enter a valid number.',
    });
  } else if (years > 80) {
    errors.yearsOfExperience = t('errors.yearsUnrealistic', {
      fallback: 'Please enter a realistic number of years.',
    });
  }

  if (!trimmedEmail) {
    errors.email = t('errors.emailEmpty', { fallback: 'Please provide your email address.' });
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
    errors.email = t('errors.emailInvalid', { fallback: 'Please enter a valid email address.' });
  }

  if (!trimmedPhone) {
    errors.phone = t('errors.phoneEmpty', { fallback: 'Please provide your phone number.' });
  } else if (phoneDigits.length < 7) {
    errors.phone = t('errors.phoneTooShort', { fallback: 'Phone number is too short.' });
  } else if (!isPhoneValid(trimmedPhone)) {
    errors.phone = t('errors.phoneInvalid', { fallback: 'Please enter a valid phone number.' });
  }

  if (!trimmedExpertise) {
    errors.areaOfExpertise = t('errors.expertiseEmpty', {
      fallback: 'Please specify your area of expertise.',
    });
  }

  if (!cvFile && !trimmedLink) {
    const msg = t('errors.cvOrLinkRequired', {
      fallback: 'Please upload your CV or provide a link.',
    });
    errors.cvFile = msg;
    errors.cvLink = msg;
  }

  if (cvFile && !isSupportedFile(cvFile)) {
    errors.cvFile = t('errors.cvUnsupportedFormat', {
      fallback: 'Unsupported file format. Please upload PDF, DOC, or DOCX files only.',
    });
  } else if (cvFile && cvFile.size > MAX_FILE_SIZE) {
    errors.cvFile = t('errors.cvTooLarge', {
      fallback: 'The file is too large. Please upload a smaller file.',
    });
  }

  if (trimmedLink && !isValidUrl(trimmedLink)) {
    errors.cvLink = t('errors.cvLinkInvalidUrl', { fallback: 'Please enter a valid URL.' });
  }

  return errors;
};

const ErrorMessage = ({ message }: { message?: string }) => {
  if (!message) return null;

  return (
    <Text color="danger" size="sm">
      {message}
    </Text>
  );
};

type CoacherFormProps = {
  isOpen: boolean;
  onCloseAction: () => void;
};

export const CoacherForm = ({ isOpen, onCloseAction }: CoacherFormProps) => {
  const t = useTranslations('coacherForm');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [values, setValues] = useState<CoacherFormValues>(initialValues);
  const [errors, setErrors] = useState<CoacherFormErrors>({});
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateValue = (field: keyof CoacherFormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setIsSubmitted(false);
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] ?? null;

    setCvFile(file);
    setErrors((current) => ({ ...current, cvFile: undefined, cvLink: undefined }));
    setIsSubmitted(false);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validateForm(values, cvFile, t);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    setIsSubmitting(true);

    const formData = new FormData();
    formData.set('name', values.name.trim());
    formData.set('yearsOfExperience', values.yearsOfExperience.trim());
    formData.set('email', values.email.trim());
    formData.set('phone', values.phone.trim());
    formData.set('areaOfExpertise', values.areaOfExpertise.trim());
    formData.set('cvLink', values.cvLink.trim());
    if (cvFile) {
      formData.set('cvFile', cvFile);
    }

    const result = await sendCoacherForm(formData);

    setIsSubmitting(false);

    if (!result.success) {
      notifyWarning(
        t('submitError', { fallback: 'Something went wrong. Please try again later.' })
      );
      return;
    }

    setIsSubmitted(true);
  };

  return (
    <Modal isOpen={isOpen} onCloseAction={onCloseAction}>
      {isSubmitted ? (
        <div className="bg-white p-6 lg:w-100 text-center">
          <Title as="h2" size="3xl" className="leading-[1.4063] mb-3">
            {t('successTitle', { fallback: 'Success!' })}
          </Title>
          <Text>
            {t('successDescription', { fallback: 'Your application has been submitted.' })}
          </Text>
          <Text className="mb-6">
            {t('successFollowUp', {
              fallback: 'Our team will review your profile and contact you shortly.',
            })}
          </Text>
          <Button
            type="button"
            fullWidth
            className="text-sm leading-[1.286] border-none"
            onClick={onCloseAction}
          >
            {t('continue', { fallback: 'Continue' })}
          </Button>
        </div>
      ) : (
        <form
          className="flex flex-col gap-6 bg-white p-6 lg:w-200"
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="flex flex-col gap-2">
            <Title as="h2" size="3xl" className="text-center leading-[1.4063]">
              {t('title', { fallback: 'Join Qoacher' })}
            </Title>
          </div>

          <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
            <div className="flex flex-col gap-2">
              <TextField
                name="name"
                placeholder={t('placeholderName', { fallback: 'Name' })}
                value={values.name}
                onChange={(event) => updateValue('name', event.target.value)}
                aria-invalid={!!errors.name}
                className={cn(
                  'py-5.75 px-6 leading-[1.2857] placeholder:text-[#6B6B6B]',
                  errors.name && '!border-[#FF4141]'
                )}
              />
              <ErrorMessage message={errors.name} />
            </div>

            <div className="flex flex-col gap-2">
              <TextField
                name="yearsOfExperience"
                placeholder={t('placeholderYearsOfExperience', {
                  fallback: 'Years of experience',
                })}
                inputMode="numeric"
                value={values.yearsOfExperience}
                onChange={(event) => updateValue('yearsOfExperience', event.target.value)}
                aria-invalid={!!errors.yearsOfExperience}
                className={cn(
                  'py-5.75 px-6 leading-[1.2857] placeholder:text-[#6B6B6B]',
                  errors.yearsOfExperience && '!border-[#FF4141]'
                )}
              />
              <ErrorMessage message={errors.yearsOfExperience} />
            </div>

            <div className="flex flex-col gap-2">
              <PhoneField
                name="phone"
                placeholder={t('placeholderPhone', { fallback: 'Phone' })}
                value={values.phone}
                onChange={(value) => updateValue('phone', value)}
                aria-invalid={!!errors.phone}
                intent={errors.phone ? 'danger' : 'primary'}
                size="lg"
              />
              <ErrorMessage message={errors.phone} />
            </div>

            <div className="flex flex-col gap-2">
              <TextField
                name="email"
                type="email"
                placeholder={t('placeholderEmail', { fallback: 'Email' })}
                value={values.email}
                onChange={(event) => updateValue('email', event.target.value)}
                aria-invalid={!!errors.email}
                className={cn(
                  'py-5.75 px-6 leading-[1.2857] placeholder:text-[#6B6B6B]',
                  errors.email && '!border-[#FF4141]'
                )}
              />
              <ErrorMessage message={errors.email} />
            </div>

            <div className="flex flex-col gap-2 max-md:col-span-1">
              <TextArea
                name="areaOfExpertise"
                placeholder={t('placeholderAreaOfExpertise', {
                  fallback: 'Area of expertise',
                })}
                value={values.areaOfExpertise}
                onChange={(event) => updateValue('areaOfExpertise', event.target.value)}
                aria-invalid={!!errors.areaOfExpertise}
                className={cn(
                  'py-5.75 px-6 leading-[1.2857] placeholder:text-[#6B6B6B] h-47',
                  errors.areaOfExpertise && '!border-[#FF4141]'
                )}
              />
              <ErrorMessage message={errors.areaOfExpertise} />
            </div>

            <div className="py-5.75 px-6 leading-[1.2857] placeholder:text-[#6B6B6B] min-h-47 border border-dashed border-[#808080] bg-[rgba(128,128,128,0.10)]">
              <div className="flex flex-col gap-2 mb-6">
                <input
                  ref={fileInputRef}
                  type="file"
                  className="hidden"
                  accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  onChange={handleFileChange}
                />
                <div className="flex flex-col gap-2">
                  <div className="flex flex-wrap items-center gap-6">
                    <Text color="gray">{t('cvLabel', { fallback: 'Your CV' })}</Text>
                    <Button
                      type="button"
                      className="bg-transparent text-sm text-sm leading-[1.286] text-black py-3.75"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      {t('upload', { fallback: 'Upload' })}
                    </Button>
                    <Text color="gray">{t('or', { fallback: 'Or' })}</Text>
                  </div>
                  {cvFile ? (
                    <Text color="gray" className="break-all">
                      {cvFile.name}
                    </Text>
                  ) : null}
                </div>
                <ErrorMessage message={errors.cvFile} />
              </div>

              <div className="flex flex-col gap-2">
                <TextField
                  name="cvLink"
                  type="url"
                  placeholder={t('placeholderLink', { fallback: 'Link' })}
                  value={values.cvLink}
                  onChange={(event) => updateValue('cvLink', event.target.value)}
                  aria-invalid={!!errors.cvLink}
                  className={cn(
                    'py-5.75 px-6 leading-[1.2857] placeholder:text-[#6B6B6B]',
                    errors.cvLink && '!border-[#FF4141]'
                  )}
                />
                <ErrorMessage message={errors.cvLink} />
              </div>
            </div>

            <div className="col-span-2 max-md:col-span-1">
              <Button
                type="submit"
                fullWidth
                disabled={isSubmitting}
                className="text-sm leading-[1.286] border-none"
              >
                {isSubmitting
                  ? t('sending', { fallback: 'Sending...' })
                  : t('apply', { fallback: 'Apply' })}
              </Button>
            </div>
          </div>
        </form>
      )}
    </Modal>
  );
};
