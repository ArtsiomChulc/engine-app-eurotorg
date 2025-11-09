export interface User {
    name: string;
    lastName: string;
    region: string;
    email: string;
    password: string;
}

export interface LoginCredentials {
    email: string;
    password: string;
}

export interface UserResponse {
    user: User
    accessToken: string
}