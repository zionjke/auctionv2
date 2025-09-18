import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import { RoutePath, Routes } from 'shared/config/routeConfig';
import { Button, TextField } from '@mui/material';
import { RegistrationData } from '../model/types/registrationSchema';
import cls from './Registration.module.scss';

interface RegistrationProps {
    className?: string;
    error:string;
    isLoading: boolean,
    validationSchema: Yup.ObjectSchema<any>;
    initialValues: RegistrationData;
    handleRegistration: (values: RegistrationData) => void;
}
const RegistrationFormComponent:FC<RegistrationProps> = ({
    className, validationSchema, initialValues, handleRegistration, isLoading, error,
}) => {
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: async (values) => {
            await handleRegistration(values);
        },
        validateOnChange: true,
        validateOnBlur: true,
    });
    return (
        <form className={cls.form} onSubmit={formik.handleSubmit}>
            <div className={cls.formHeader}>
                <h3 className={cls.formHeader_title}>Registration</h3>
                <Link className={cls.formHeader_link} to={RoutePath[Routes.LOGIN]}>Already have an account?</Link>
            </div>
            <div className={cls.field}>
                <TextField
                    required
                    id="email"
                    name="email"
                    label="Email"
                    fullWidth
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    value={formik.values.email}
                />
            </div>
            <div className={cls.field}>
                <TextField
                    required
                    id="siteUrl"
                    name="siteUrl"
                    label="Site Url"
                    fullWidth
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.siteUrl && Boolean(formik.errors.siteUrl)}
                    helperText={formik.touched.siteUrl && formik.errors.siteUrl}
                    value={formik.values.siteUrl}
                />
            </div>
            <div className={cls.field}>
                <TextField
                    required
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                    value={formik.values.password}
                    fullWidth
                />
            </div>
            <div className={cls.error}>
                {!!error && (
                    <span className={cls.error_text}>{error}</span>
                )}
            </div>
            <Button
                type="submit"
                className={cls.formButton}
                size="large"
                fullWidth
                variant="contained"
                disabled={isLoading}
            >
                Create Account
            </Button>
        </form>
    );
};

export default RegistrationFormComponent;
