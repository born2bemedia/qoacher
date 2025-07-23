import { getTranslations } from 'next-intl/server';

export const InterviewPositioningCoachingProducts = async () => {
  const t = await getTranslations('careerCoachingProducts');

  return [
    {
      id: 'mock-interview-feedback',
      title: t('mockInterviewFeedback', { fallback: 'Mock Interview + Feedback' }),
      description: t('mockInterviewFeedbackDescription', {
        fallback: 'Realistic roleplay and tailored feedback to improve your performance.',
      }),
      price: 5200,
    },
    {
      id: 'salary-negotiation-coaching',
      title: t('salaryNegotiationCoaching', { fallback: 'Salary Negotiation Coaching' }),
      description: t('salaryNegotiationCoachingDescription', {
        fallback: 'Prepare for salary and offer discussions confidently and professionally.',
      }),
      price: 5800,
    },
    {
      id: 'interview-confidence-building',
      title: t('interviewConfidenceBuilding', { fallback: 'Interview Confidence Building' }),
      description: t('interviewConfidenceBuildingDescription', {
        fallback: 'Coaching for anxiety reduction, mindset, and presentation under pressure.',
      }),
      price: 4900,
    },
    {
      id: 'executive-interview-prep',
      title: t('executiveInterviewPrep', { fallback: 'Executive Interview Prep' }),
      description: t('executiveInterviewPrepDescription', {
        fallback: 'High-level preparation for senior roles or board positions.',
      }),
      price: 6300,
    },
    {
      id: 'positioning-statement-development',
      title: t('positioningStatementDevelopment', {
        fallback: 'Positioning Statement Development',
      }),
      description: t('positioningStatementDevelopmentDescription', {
        fallback: 'Craft a clear, confident career summary for interviews and networking.',
      }),
      price: 4700,
    },
    {
      id: 'offer-evaluation-session',
      title: t('offerEvaluationSession', { fallback: 'Offer Evaluation Session' }),
      description: t('offerEvaluationSessionDescription', {
        fallback: 'Review job offers and assess fit, terms, and negotiation points.',
      }),
      price: 5100,
    },
  ];
};
