import React, { FC } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import {
    Button, Checkbox, FormControlLabel, TextField,
} from '@mui/material';
import { AuthData } from 'features/Authorization/model/types/loginSchema';
import cls from './LoginForm.module.scss';

interface LoginFormComponentProps {
    className?: string;
    loginErrorMessage?: string;
    isLoading: boolean;
    initialValues?: AuthData;
    validationSchema?: Yup.ObjectSchema<any>;
    handleSubmit: (values: AuthData) => Promise<void>;
}
const LoginFormComponent:FC<LoginFormComponentProps> = ({
    className, initialValues, validationSchema, handleSubmit, loginErrorMessage, isLoading,
}) => {
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: async (values) => {
            await handleSubmit(values);
        },
        validateOnChange: true,
        validateOnBlur: true,
    });

    return (
        <form onSubmit={formik.handleSubmit} className={cls.form}>
            <div className={cls.formHeader}>
                <h3 className={cls.formHeader_title}>Login</h3>
                <Link className={cls.formHeader_link} to="/">Dont have an account?</Link>
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
                {!!loginErrorMessage && (
                    <span className={cls.error_text}>{loginErrorMessage}</span>
                )}
            </div>
            <div className={cls.formBottom}>
                <FormControlLabel
                    control={(
                        <Checkbox
                            id="rememberMe"
                            name="rememberMe"
                            onChange={formik.handleChange}
                            checked={formik.values.rememberMe}
                        />
                    )}
                    label="Keep me sign in"
                />
                <Link className={cls.formHeader_link} to="/">Forgot Password?</Link>
            </div>
            <Button
                type="submit"
                className={cls.formButton}
                size="large"
                fullWidth
                variant="contained"
                disabled={isLoading}
            >
                Login
            </Button>
        </form>
    );
};

export default LoginFormComponent;
