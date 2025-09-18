export interface RegistrationData {
    email: string;
    siteUrl: string;
    password: string;
}

export interface RegistrationSchema {
    isLoading: boolean;
    error?: string;
    isSuccess: boolean;
    message?: string;
}
