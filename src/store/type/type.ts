export type LoginRequest = {
    email_or_phone: string;
    password: string;
}

export type LoginResponse = {
    access: string;
    refresh: string;
};
export type UserResponse = {
    id:number;
    email:string;
    is_active:boolean;
}
export type UserProfilesResponse = {

    id: number;
    gender: number;
    clothing_size:number;
    user:UserResponse;
    first_name: string;
    last_name: string;
    surname: string;
    shoe_size: number;
    birthday: string;
    phone: string;

}

export type AuthState = {
    isAuth: boolean;
    user: UserProfilesResponse | null;
};