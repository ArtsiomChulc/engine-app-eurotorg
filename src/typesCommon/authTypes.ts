export interface User {
    name: string;
    last_name: string;
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
    token: string
}