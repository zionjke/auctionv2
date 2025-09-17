import * as Yup from 'yup';
import { AuthData } from '../../../model/types/loginSchema';

export const getDefaultInitialValues = ():AuthData => ({
    email: '',
    password: '',
    rememberMe: false,
});

export const getValidationSchema = () => Yup.object({
    email: Yup.string()
        .email('Введите корректный email')
        .required('Обязательное поле'),
    password: Yup.string()
        .min(6, 'Пароль должен содержать минимум 6 символов')
        .required('Обязательное поле'),
});
