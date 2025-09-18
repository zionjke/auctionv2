import { RegistrationFormLazy as RegistrationForm } from './ui/RegistrationFormContainer.lazy';
import { registrationReducer, registrationActions } from './model/slice/registrationSlice/registrationSlice';

export { RegistrationForm, registrationReducer, registrationActions };
export type { RegistrationSchema } from './model/types/registrationSchema';
