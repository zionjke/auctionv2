import React, {
    FC, memo, useCallback, useEffect,
} from 'react';
import { useAppDispatch, useAppSelector, useAsyncReducers } from 'shared/hooks';
import { useNavigate } from 'react-router-dom';
import { RoutePath, Routes } from 'shared/config/routeConfig';
import { Modal } from 'shared/ui/Modal';
import { useStore } from 'react-redux';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { registrationService } from '../model/services/registrationService/registrationService';
import { registrationActions, registrationReducer } from '../model/slice/registrationSlice/registrationSlice';
import { RegistrationData } from '../model/types/registrationSchema';
import RegistrationFormComponent from './RegistrationFormComponent';
import { getDefaultInitialValues } from './utils/getDefaultInitialValues';
import { getValidationSchema } from './utils/getValidationSchema';
import {
    getRegistrationError,
    getRegistrationIsLoading, getRegistrationIsSuccess, getRegistrationMessage,
} from '../model/selectors/getRegistrationState/getRegistrationState';
import { SuccessRegistration } from './SuccessRegistration/SuccessRegistration';

export interface RegistrationContainerProps {
    className?: string;
}

const RegistrationFormContainer:FC<RegistrationContainerProps> = memo(({ className }) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    useAsyncReducers([{ key: 'registration', reducer: registrationReducer }]);

    const initialValues = getDefaultInitialValues();
    const validationSchema = getValidationSchema();

    const isLoading = useAppSelector(getRegistrationIsLoading);
    const isSuccess = useAppSelector(getRegistrationIsSuccess);
    const message = useAppSelector(getRegistrationMessage);
    const error = useAppSelector(getRegistrationError);

    const handleRegistration = useCallback((values:RegistrationData) => {
        dispatch(registrationService(values));
    }, [dispatch]);

    const handleCloseSuccessModal = useCallback(() => {
        dispatch(registrationActions.clearRegistrationState());
        navigate(RoutePath[Routes.LOGIN]);
    }, [dispatch, navigate]);

    return (
        <>
            <RegistrationFormComponent
                initialValues={initialValues}
                validationSchema={validationSchema}
                handleRegistration={handleRegistration}
                isLoading={isLoading}
                error={error}
            />

            <Modal isOpen={isSuccess} onClose={handleCloseSuccessModal}>
                <SuccessRegistration
                    handleCloseSuccessModal={handleCloseSuccessModal}
                    message={message}
                />
            </Modal>
        </>
    );
});
export default RegistrationFormContainer;
