'use client';

import { NoAvailable } from '@/shared/ui/components/atoms/no-available';

import type { Document } from '../model/types';
import { TableLink } from './table-link';

export const DocumentLinks = ({ values }: { values: Document['docs'] }) => {
  return !values || Object.values(values).every((v) => !v) ? (
    <NoAvailable offAlign />
  ) : (
    <div className="flex flex-col gap-2.5">
      {values.summaryUrl && <TableLink href={values.summaryUrl}>Summary</TableLink>}
      {values.planUrl && <TableLink href={values.planUrl}>Plan</TableLink>}
      {values.reportUrl && <TableLink href={values.reportUrl}>Report</TableLink>}
      {values.roadmapUrl && <TableLink href={values.roadmapUrl}>Roadmap</TableLink>}
    </div>
  );
};
