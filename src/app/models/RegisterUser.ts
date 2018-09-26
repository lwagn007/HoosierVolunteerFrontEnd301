export interface RegisterUser {
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    IsOrganization: boolean;
    address: string;
    zip: string;
    city: string;
    state: string;
    password: string;
    confirmPassword: string;
}