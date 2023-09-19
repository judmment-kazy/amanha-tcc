import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

import { getCurrentUser } from "@/lib/session"
import AuthButton from "@/components/exit-button"

import { SessionProvider, signOut, useSession } from "next-auth/react"
import { Button } from "./ui/button";
import { Link } from "lucide-react";

export default async function Menu() {

    const user = await getCurrentUser();

    return (
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger>
                        <i className="fa-solid fa-bars text-black text-[2.5rem] hover:text-red-500 cursor-pointer dark:text-DarkTextColor"></i>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-gradient-to-t from-cianinho to-rosinha border-[6px] dark:from-DarkMenuColor dark:to-DarkMenuColor">
                    <button className="flex items-center">
                    <Avatar>
                        <AvatarImage src="fr.jpg" alt="@shadcn"/>
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <DropdownMenuLabel className="text-[2rem]">Flash reverso</DropdownMenuLabel>
                    </button>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-[2rem]"><a href="/config">Configurações</a></DropdownMenuItem>
                    <DropdownMenuItem className="text-[2rem]">Historico de compra</DropdownMenuItem>
                    <DropdownMenuItem className="text-[2rem]">Carrinho</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-[2rem]">
                        <AuthButton page="login"/>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}