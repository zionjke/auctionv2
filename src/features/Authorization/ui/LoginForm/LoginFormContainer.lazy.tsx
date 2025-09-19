import { FC, lazy } from 'react';
import { LoginContainerFormProps } from './LoginFormContainer';

export const LoginFormLazy = lazy<FC<LoginContainerFormProps>>(async () => await import('./LoginFormContainer'));
