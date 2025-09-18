import { lazy } from 'react';

export const RegistrationFormLazy = lazy(async () => await import('./RegistrationFormContainer'));
