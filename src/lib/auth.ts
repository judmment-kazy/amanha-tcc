import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "@/lib/db";
import { db as prisma } from "@/lib/db";
import bcrypt from "bcrypt";

export const authOptions : NextAuthOptions = {
    adapter: PrismaAdapter(db as any),
    providers:[
        CredentialsProvider({
            name:"credentials",
            credentials:{
                    email: {label: "Email", type: "text"},
                    password: {label: "Password", type: "password"},
                    username: {label: "Name", type: "text"},
            },
            async authorize(credentials, req) : Promise<any>{

                console.log("Authorize method", credentials)
                
                if(!credentials?.email || !credentials?.password) throw new Error("Dados de login necessarios!");

                const user = await prisma.user.findUnique({
                    where:{
                        email: credentials.email
                    }
                })

                if(!user || !user.hashedPassword){
                    throw new Error("Usuário não registrado através de credenciais")
                }

                const matchPassword = await bcrypt.compare(credentials.password, user.hashedPassword);
                if(!matchPassword) throw new Error("Dados de login incorretos!")

                return user;
            }
        })
    ],
    session: {
        strategy: "jwt"
    },
    secret: process.env.SECRET,
    debug: process.env.NODE_ENV === "development",
    pages:{
        signIn: "/login"
    }
}