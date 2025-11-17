export interface User {
    name: string;
    lastName: string;
    region: string;
    email: string;
    role: UserRole;
    password?: string;
}

export type RolesType = "ADMIN" | "ENGINEER" | "USER" | null;

export interface LoginCredentials {
    email: string;
    password: string;
}

export interface UserResponse {
    user: User;
    accessToken: string;
}

export enum UserRole {
    USER = "USER",
    ENGINEER = "ENGINEER",
    ADMIN = "ADMIN",
}
