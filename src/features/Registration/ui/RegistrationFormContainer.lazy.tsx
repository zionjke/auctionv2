import { FC, lazy } from 'react';
import { RegistrationContainerProps } from './RegistrationFormContainer';

export const RegistrationFormLazy = lazy < FC<RegistrationContainerProps>>(async () => await import('./RegistrationFormContainer'));
