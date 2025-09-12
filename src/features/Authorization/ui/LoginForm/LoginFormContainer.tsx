import React, { FC } from 'react';
import { useIntl } from 'react-intl';
import { getDefaultInitialValues, getValidationSchema } from './utils/utils';
import LoginFormComponent from './LoginFormComponent';

interface LoginContainerFormProps {
    className?: string;
}
const LoginFormContainer:FC<LoginContainerFormProps> = ({ className }) => {
    const intl = useIntl();
    const defaultInitialValues = getDefaultInitialValues();
    const validationSchema = getValidationSchema();

    const handleSubmit = async (values: Record<string, any>) => {
        console.log(values);
    };

    return (
        <LoginFormComponent
            validationSchema={validationSchema}
            initialValues={defaultInitialValues}
            handleSubmit={handleSubmit}
        />
    );
};

export default LoginFormContainer;
