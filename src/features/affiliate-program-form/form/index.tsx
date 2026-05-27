'use client';

import { type FormEvent, useState } from 'react';
import { useTranslations } from 'next-intl';

import { sendAffiliateForm } from '@/features/affiliate-program-form/api/send-affiliate-form';
import { Modal } from '@/features/modal';

import { cn } from '@/shared/lib/utils';
import { notifyWarning } from '@/shared/lib/utils/notify';
import { Button } from '@/shared/ui/components/atoms/button';
import { Text } from '@/shared/ui/components/atoms/text';
import { TextArea } from '@/shared/ui/components/atoms/text-area';
import { TextField } from '@/shared/ui/components/atoms/text-field';
import { Title } from '@/shared/ui/components/atoms/title';

type AffiliateFormValues = {
  name: string;
  audienceCount: string;
  mediaLink1: string;
  mediaLink2: string;
  mediaLink3: string;
  geo: string;
  aboutMedia: string;
};

type AffiliateFormErrors = Partial<Record<keyof AffiliateFormValues, string>>;

const initialValues: AffiliateFormValues = {
  name: '',
  audienceCount: '',
  mediaLink1: '',
  mediaLink2: '',
  mediaLink3: '',
  geo: '',
  aboutMedia: '',
};

const fieldClassName = (hasError: boolean) =>
  cn('py-5.75 px-6 leading-[1.2857] placeholder:text-[#6B6B6B]', hasError && '!border-[#FF4141]');

const isValidUrl = (value: string) => {
  try {
    const url = new URL(value);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch {
    return false;
  }
};

const normalizeLink = (value: string) => {
  try {
    return new URL(value.trim()).href.toLowerCase();
  } catch {
    return value.trim().toLowerCase();
  }
};

type AffiliateFormTranslate = (key: string, options?: { fallback: string }) => string;

const validateForm = (
  values: AffiliateFormValues,
  t: AffiliateFormTranslate
): AffiliateFormErrors => {
  const errors: AffiliateFormErrors = {};
  const trimmedName = values.name.trim();
  const trimmedAudience = values.audienceCount.trim();
  const trimmedGeo = values.geo.trim();
  const trimmedAbout = values.aboutMedia.trim();
  const audience = Number(trimmedAudience);

  const links = {
    mediaLink1: values.mediaLink1.trim(),
    mediaLink2: values.mediaLink2.trim(),
    mediaLink3: values.mediaLink3.trim(),
  };

  if (!trimmedName) {
    errors.name = t('errors.nameEmpty', { fallback: 'Please enter your name.' });
  } else if (trimmedName.length < 3) {
    errors.name = t('errors.nameShort', { fallback: 'Please enter your full name.' });
  } else if (!/^[\p{L}\s.'-]+$/u.test(trimmedName)) {
    errors.name = t('errors.nameInvalid', { fallback: 'Please enter a valid name.' });
  }

  if (!trimmedAudience) {
    errors.audienceCount = t('errors.audienceEmpty', {
      fallback: 'Please provide your audience count.',
    });
  } else if (!Number.isFinite(audience) || audience < 0) {
    errors.audienceCount = t('errors.audienceInvalidNumber', {
      fallback: 'Please enter a valid number.',
    });
  }

  const hasAnyLink = Object.values(links).some(Boolean);

  if (!hasAnyLink) {
    errors.mediaLink1 = t('errors.mediaLinksEmpty', {
      fallback: 'Please provide at least one media link.',
    });
  } else {
    (['mediaLink1', 'mediaLink2', 'mediaLink3'] as const).forEach((key) => {
      const link = links[key];
      if (link && !isValidUrl(link)) {
        errors[key] = t('errors.mediaLinkInvalidUrl', { fallback: 'Please enter a valid URL.' });
      }
    });

    const filledLinks = (['mediaLink1', 'mediaLink2', 'mediaLink3'] as const).filter(
      (key) => links[key]
    );
    const allLinksValid = filledLinks.every((key) => isValidUrl(links[key]));
    const normalized = filledLinks.map((key) => normalizeLink(links[key]));
    const hasDuplicates = normalized.length !== new Set(normalized).size;

    if (allLinksValid && hasDuplicates) {
      filledLinks.forEach((key) => {
        errors[key] = t('errors.mediaLinksDuplicate', {
          fallback: 'Please provide different media links.',
        });
      });
    }
  }

  if (!trimmedGeo) {
    errors.geo = t('errors.geoEmpty', { fallback: 'Please specify your audience GEO.' });
  } else if (trimmedGeo.length < 2) {
    errors.geo = t('errors.geoShort', { fallback: 'Please provide a valid GEO.' });
  }

  if (!trimmedAbout) {
    errors.aboutMedia = t('errors.aboutEmpty', {
      fallback: 'Please provide short information about your media.',
    });
  } else if (trimmedAbout.length < 20) {
    errors.aboutMedia = t('errors.aboutShort', {
      fallback: 'Please provide more details about your media platform.',
    });
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

type AffiliateProgramFormProps = {
  isOpen: boolean;
  onCloseAction: () => void;
};

export const AffiliateProgramForm = ({ isOpen, onCloseAction }: AffiliateProgramFormProps) => {
  const t = useTranslations('affiliateProgramForm');
  const [values, setValues] = useState<AffiliateFormValues>(initialValues);
  const [errors, setErrors] = useState<AffiliateFormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateValue = (field: keyof AffiliateFormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setIsSubmitted(false);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validateForm(values, t);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    setIsSubmitting(true);

    const result = await sendAffiliateForm({
      name: values.name.trim(),
      audienceCount: values.audienceCount.trim(),
      mediaLink1: values.mediaLink1.trim(),
      mediaLink2: values.mediaLink2.trim(),
      mediaLink3: values.mediaLink3.trim(),
      geo: values.geo.trim(),
      aboutMedia: values.aboutMedia.trim(),
    });

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
            {t('successDescription', {
              fallback: 'Your affiliate application has been submitted.',
            })}
          </Text>
          <Text className="mb-6">
            {t('successFollowUp', {
              fallback: 'Our team will review your information and contact you shortly.',
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
          <Title as="h2" size="3xl" className="text-center leading-[1.4063]">
            {t('title', { fallback: 'Qoacher Affiliate Program Application' })}
          </Title>

          <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
            <div className="flex flex-col gap-2">
              <TextField
                name="name"
                placeholder={t('placeholderName', { fallback: 'Name' })}
                value={values.name}
                onChange={(event) => updateValue('name', event.target.value)}
                aria-invalid={!!errors.name}
                className={fieldClassName(!!errors.name)}
              />
              <ErrorMessage message={errors.name} />
            </div>

            <div className="flex flex-col gap-2">
              <TextField
                name="audienceCount"
                placeholder={t('placeholderAudienceCount', { fallback: 'Audience Count' })}
                inputMode="numeric"
                value={values.audienceCount}
                onChange={(event) => updateValue('audienceCount', event.target.value)}
                aria-invalid={!!errors.audienceCount}
                className={fieldClassName(!!errors.audienceCount)}
              />
              <ErrorMessage message={errors.audienceCount} />
            </div>

            <div className="col-span-2 flex flex-col gap-2 max-md:col-span-1">
              <TextField
                name="mediaLink1"
                type="url"
                placeholder={t('placeholderMediaLink1', { fallback: 'Your Media Link 1' })}
                value={values.mediaLink1}
                onChange={(event) => updateValue('mediaLink1', event.target.value)}
                aria-invalid={!!errors.mediaLink1}
                className={fieldClassName(!!errors.mediaLink1)}
              />
              <ErrorMessage message={errors.mediaLink1} />
            </div>

            <div className="col-span-2 flex flex-col gap-2 max-md:col-span-1">
              <TextField
                name="mediaLink2"
                type="url"
                placeholder={t('placeholderMediaLink2', { fallback: 'Your Media Link 2' })}
                value={values.mediaLink2}
                onChange={(event) => updateValue('mediaLink2', event.target.value)}
                aria-invalid={!!errors.mediaLink2}
                className={fieldClassName(!!errors.mediaLink2)}
              />
              <ErrorMessage message={errors.mediaLink2} />
            </div>

            <div className="col-span-2 flex flex-col gap-2 max-md:col-span-1">
              <TextField
                name="mediaLink3"
                type="url"
                placeholder={t('placeholderMediaLink3', { fallback: 'Your Media Link 3' })}
                value={values.mediaLink3}
                onChange={(event) => updateValue('mediaLink3', event.target.value)}
                aria-invalid={!!errors.mediaLink3}
                className={fieldClassName(!!errors.mediaLink3)}
              />
              <ErrorMessage message={errors.mediaLink3} />
            </div>

            <div className="flex flex-col gap-2">
              <TextField
                name="geo"
                placeholder={t('placeholderGeo', { fallback: 'GEO' })}
                value={values.geo}
                onChange={(event) => updateValue('geo', event.target.value)}
                aria-invalid={!!errors.geo}
                className={fieldClassName(!!errors.geo)}
              />
              <ErrorMessage message={errors.geo} />
            </div>

            <div className="flex flex-col gap-2">
              <TextArea
                name="aboutMedia"
                placeholder={t('placeholderAboutMedia', { fallback: 'About your media' })}
                value={values.aboutMedia}
                onChange={(event) => updateValue('aboutMedia', event.target.value)}
                aria-invalid={!!errors.aboutMedia}
                className={cn(fieldClassName(!!errors.aboutMedia), 'h-47')}
              />
              <ErrorMessage message={errors.aboutMedia} />
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
