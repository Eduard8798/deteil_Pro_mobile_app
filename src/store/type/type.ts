export type LoginRequest = {
    phone: string;
    password: string;
}

export type LoginResponse = {
    accessToken: string;
    refreshToken: string;
};

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

