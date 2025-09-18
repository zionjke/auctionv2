import * as Yup from 'yup';

export const getValidationSchema = () => Yup.object({
    email: Yup.string()
        .email('Введите корректный email')
        .required('Обязательное поле'),
    siteUrl: Yup.string()
        .url('Введите корректный URL')
        .required('Обязательное поле'),
    password: Yup.string()
        .min(6, 'Пароль должен содержать минимум 6 символов')
        .max(50, 'Пароль не может быть длиннее 50 символов')
        .required('Обязательное поле'),
});
