export interface AuthData {
    email: string;
    password: string;
    rememberMe: boolean;
}

export interface LoginSchema {
    authData: AuthData;
    error?: string;
    isLoading: boolean;
}
