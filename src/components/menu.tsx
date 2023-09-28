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

import { SessionProvider, useSession } from "next-auth/react"
import { Button } from "./ui/button";
import { Link } from "lucide-react";

export default async function Menu() {

    const user = await getCurrentUser();
    const nome = user?.name;

    if (user?.email) {
        var isAuthenticated = true;
    } else {
        var isAuthenticated = false;
    }

    return (
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <i className="fa-solid fa-bars text-black text-[2.5rem] hover:text-red-500 cursor-pointer dark:text-DarkTextColor"></i>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-gradient-to-t from-cianinho to-rosinha border-[6px] dark:from-DarkMenuColor dark:to-DarkMenuColor px-2 pb-6">
                    <button>
                        {isAuthenticated ? (
                            <div className="flex items-center">
                                <Avatar>
                                    <AvatarImage src="" alt="@shadcn" />
                                    <AvatarFallback>ᕕ(ᐛ)ᕗ</AvatarFallback>
                                </Avatar>
                                <DropdownMenuLabel className="text-[2rem]">{user?.name}</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                            </div>
                        ) : (
                            <div />
                        )}
                    </button>
                    <a href="/config"><DropdownMenuItem className="text-[2rem] hover:bg-[#ffffff70]">Configurações</DropdownMenuItem></a>
                    <DropdownMenuItem className="text-[2rem] hover:bg-[#ffffff70]">Historico de compras</DropdownMenuItem>
                    <DropdownMenuItem className="text-[2rem] hover:bg-[#ffffff70]">Carrinho</DropdownMenuItem>
                    <a href="https://instagram.com/lg_trufadasso"><DropdownMenuItem className="flex md:hidden text-[2rem] hover:bg-[#ffffff70]">Contato</DropdownMenuItem></a>
                    <a href="/about"><DropdownMenuItem className="flex md:hidden text-[2rem] hover:bg-[#ffffff70]">Sobre</DropdownMenuItem></a>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-[2rem] hover:bg-[#ffffff70]">
                        <AuthButton page="login" />
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div >
    )
}