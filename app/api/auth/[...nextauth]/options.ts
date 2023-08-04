import type {NextAuthOptions} from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

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

            if (user) {
                token.access_token = user.access_token;
                token.role = user.role;
                token.id = user.id;
            }
            return token;
        },
        session: (params) => {
            const {session, token, user} = params;

            if (token) {
                session.user.access_token = token.access_token;
                session.user.id = token.user_id;
                session.user.role = token.role;
            }
            return session;
        },
    },
    pages: {
        signIn: "/auth/login"
    }
}