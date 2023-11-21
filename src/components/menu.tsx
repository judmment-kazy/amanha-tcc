import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { SafeUser } from "../../types"
import AuthButton from "./exit-button"

const Menuzinho = () => {
    return (
        <Sheet>
            <SheetTrigger><i className="fa-solid fa-bars"></i></SheetTrigger>
            <SheetContent className="p-0 border-black border-l-4 text-black">
                <div className="h-full w-full bg-stylish bg-brickwall">
                    <SheetHeader>
                        <SheetTitle className="text-center pt-[30px] text-[2rem] text-black"><a href="/">Cardapio</a></SheetTitle>
                        <SheetTitle className="text-center pt-[30px] text-[2rem] text-black"><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Configurações</a></SheetTitle>
                        <SheetTitle className="text-center pt-[30px] text-[2rem] text-black"><a href="/cart">Carrinho</a></SheetTitle>
                        <SheetTitle className="text-center pt-[30px] text-[2rem] text-black"><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Sobre</a></SheetTitle>
                        <SheetTitle className="text-center pt-[30px] text-[2rem] text-black"><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Contato</a></SheetTitle>
                        <AuthButton page="login" />
                    </SheetHeader>
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default Menuzinho;