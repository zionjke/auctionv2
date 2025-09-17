import React, {
    FC, memo, useCallback, useEffect,
} from 'react';
import { useIntl } from 'react-intl';
import { useDispatch } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { loginService, loginBySecretKeyService } from 'features/Authorization';
import { RoutePath, Routes } from 'shared/config/routeConfig';
import { AuthData } from '../../model/types/loginSchema';
import { getDefaultInitialValues, getValidationSchema } from './utils/utils';
import LoginFormComponent from './LoginFormComponent';

interface LoginContainerFormProps {
    className?: string;
}
const LoginFormContainer:FC<LoginContainerFormProps> = memo(() => {
    const intl = useIntl();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const defaultInitialValues = getDefaultInitialValues();
    const validationSchema = getValidationSchema();

    useEffect(() => {
        const secretKey = searchParams.get('key');
        if (secretKey) {
            dispatch(loginBySecretKeyService(secretKey));
            navigate(RoutePath[Routes.STATISTIC]);
        }
    }, [searchParams, dispatch, navigate]);

    const handleSubmit = useCallback(async (values: AuthData) => {
        await dispatch(loginService(values));
        navigate(RoutePath[Routes.STATISTIC]);
    }, [dispatch, navigate]);

    return (
        <LoginFormComponent
            validationSchema={validationSchema}
            initialValues={defaultInitialValues}
            handleSubmit={handleSubmit}
        />
    );
});

export default LoginFormContainer;
