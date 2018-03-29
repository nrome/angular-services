export interface User {
    firstName: string,
    lastName: string,
    age?: number,
    email: string,
    isActive?: boolean,
    registered?: any, 
    hide?: boolean
}

/* '?' flag renders attributes optional rather than required */