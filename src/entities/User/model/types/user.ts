export enum UserRole {
    User = 'User',
    Manager = 'Manager',
}

export interface User {
    email: string,
    userId: number,
    isAuthenticated: boolean,
    role: UserRole,
}

export interface UserSchema {
    authData?: User;
}
