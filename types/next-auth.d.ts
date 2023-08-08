import {DefaultSession, DefaultUser} from 'next-auth';
import {DefaultJWT} from "next-auth/jwt";

declare module "next-auth" {
    interface Session {
        user: {
            id: string;
            role: string;
            access_token: string;
            balance: number;
            name: string;
        } & DefaultSession
    }

    interface User extends DefaultUser {
        role: string;
        access_token: string;
        user_id: string;
        balance: number;
        name: string;
    }
}

declare module "next-auth/jwt" {
    interface JWT extends DefaultJWT {
        role: string,
        access_token: string;
        user_id: string;
        balance: number;
        name: string;
    }
}