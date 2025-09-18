import { RegistrationData } from '../../model/types/registrationSchema';

export const getDefaultInitialValues = ():RegistrationData => ({
    email: '',
    password: '',
    siteUrl: '',
});
