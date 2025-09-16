import React, { FC, memo, useCallback } from 'react';
import { useIntl } from 'react-intl';
import { useDispatch } from 'react-redux';
import { loginService } from 'features/Authorization';
import { AuthData } from '../../model/types/loginSchema';
import { getDefaultInitialValues, getValidationSchema } from './utils/utils';
import LoginFormComponent from './LoginFormComponent';

interface LoginContainerFormProps {
    className?: string;
}
const LoginFormContainer:FC<LoginContainerFormProps> = memo(() => {
    const intl = useIntl();
    const dispatch = useDispatch();
    const defaultInitialValues = getDefaultInitialValues();
    const validationSchema = getValidationSchema();

    const handleSubmit = useCallback(async (values: AuthData) => {
        await dispatch(loginService(values));
    }, [dispatch]);

    return (
        <LoginFormComponent
            validationSchema={validationSchema}
            initialValues={defaultInitialValues}
            handleSubmit={handleSubmit}
        />
    );
});

export default LoginFormContainer;
