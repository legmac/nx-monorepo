export enum UserRole{
    Teacher = 'Teche',
    Student= 'Student'
}


export interface IUsers {
    _id?: string;
    displayName?: string;
    email: string;
    passwordHash: string;
    role: UserRole;
}