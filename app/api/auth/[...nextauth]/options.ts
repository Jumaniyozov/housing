import type {NextAuthOptions, User} from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';


interface CustomUser extends User {
    access_token: string;
    access_token_expires_at: string;
    user_id: number;
}

export const options: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                login: {
                    label: "Username:",
                    type: "text",
                    placeholder: "Login",
                },
                password: {
                    label: "Password:",
                    type: "password",
                    placeholder: "Parol"
                }
            },
            async authorize(credentials, req) {
                const res = await fetch("http://localhost:1324/api/users/login", {
                    method: "POST",
                    body: JSON.stringify(credentials),
                    headers: {"Content-Type": "application/json"}
                });

                const user = await res.json();

                if (res.ok && user) {
                    return user
                } else {
                    return null
                }
            },
        })
    ],
    session: {
        strategy: "jwt",
        maxAge: 1 * 24 * 60 * 60, // 1 day
    },
    callbacks: {
        jwt: async (params) => {
            const {token, user} = params;
            const customUser = user as CustomUser;

            if (user) {
                token.access_token = customUser.access_token;
                token.user_id = customUser.user_id;
            }
            return token;
        },
        session: (params) => {
            const {session, token, user} = params;

            if (token) {
                // @ts-ignore
                session.user.access_token = token.access_token;
                // @ts-ignore
                session.user.user_id = token.user_id;
            }
            return session;
        },
    },
    pages: {
        signIn: "/auth/login"
    }
}