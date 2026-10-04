export type LoginRequest = {
    phone: string;
    password: string;
}

export type TokenResponse = {
    accessToken: string;
    refreshToken: string;
};
export type Registration = {
    "name": string;
    "phone": string;
    "password": string;
}

export type OrderList = {
    id: number;
    phone: string;
    message: string;
    url_photo: string;
    user: {
        id: number;
        name: string;

    }
}

