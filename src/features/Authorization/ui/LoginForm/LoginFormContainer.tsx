import React, {
    FC, memo, useCallback, useEffect,
} from 'react';
import { useIntl } from 'react-intl';
import { useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { loginService, loginBySecretKeyService } from 'features/Authorization';
import { RoutePath, Routes } from 'shared/config/routeConfig';
import { getUserAuthError } from 'entities/User/model/selectors/getUserAuthError/getUserAuthError';
import { useAppDispatch } from 'shared/hooks';
import { getUserIsLoading } from 'entities/User';
import { AuthData } from '../../model/types/loginSchema';
import { getDefaultInitialValues, getValidationSchema } from './utils/utils';
import LoginFormComponent from './LoginFormComponent';

interface LoginContainerFormProps {
    className?: string;
}
const LoginFormContainer:FC<LoginContainerFormProps> = memo(() => {
    const intl = useIntl();
    const dispatch = useAppDispatch();
    const loginErrorMessage = useSelector(getUserAuthError);
    const isLoading = useSelector(getUserIsLoading);
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const defaultInitialValues = getDefaultInitialValues();
    const validationSchema = getValidationSchema();

    useEffect(() => {
        const secretKey = searchParams.get('key');
        if (secretKey) {
            dispatch(loginBySecretKeyService(secretKey))
                .unwrap()
                .then(() => {
                    navigate(RoutePath[Routes.STATISTIC]);
                })
                .catch(() => {
                    navigate(RoutePath[Routes.LOGIN]);
                });
        }
    }, [searchParams, dispatch, navigate]);

    const handleSubmit = useCallback(async (values: AuthData) => {
        try {
            await dispatch(loginService(values)).unwrap();
            navigate(RoutePath[Routes.STATISTIC]);
        } catch (error) {
            console.error('Login failed:', error);
        }
    }, [dispatch, navigate]);

    return (
        <LoginFormComponent
            validationSchema={validationSchema}
            initialValues={defaultInitialValues}
            handleSubmit={handleSubmit}
            loginErrorMessage={loginErrorMessage}
            isLoading={isLoading}
        />
    );
});

export default LoginFormContainer;
