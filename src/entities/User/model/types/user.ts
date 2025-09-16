export enum UserRole {
    User = 'User',
    Manager = 'Manager',
}

export interface User {
    email: string,
    userId: number,
    isAuthenticated: boolean,
    role: UserRole,
    message: string;
}

export interface UserSchema {
    authData?: User;
    isLoading: boolean;
    error?: string;
    _inited: boolean; // Флаг завершения инициализации
}
