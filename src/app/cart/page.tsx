import Container from "@/components/Container";
import CartClient from "./CartClient";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import Menuzinho from "@/components/menu";

const Cart = () => {
    return (
        <div className="w-full h-full bg-stylish bg-brickwall">
            <div className="pt-8">
                <div className='flex justify-center items-center translate-[50%] text-[4rem] w-[100%]'>
                    <div className='relative left-[40dvw] text-white'>
                        {/*@ts-ignore*/}
                        <Menuzinho />
                    </div>
                </div>
                <Container>
                    <CartClient />
                </Container>
            </div>
        </div>
    )
}

export default Cart;