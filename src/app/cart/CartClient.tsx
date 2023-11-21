'use client'

import { useCart } from "../../../hooks/useCart";
import Link from "next/link";
import Heading from "@/components/Heading";
import Button from "@/components/Button";
import ItemContent from "./ItemContent";
import { formatPrice } from "../../../utils/formatPrice";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const CartClient = () => {
    const { cartProducts, handleClearCart, cartTotalAmount } = useCart();

    if (!cartProducts || cartProducts.length === 0) {
        return (
            <div className="flex flex-col items-center bg-slate-200 p-2 rounded-xl">
                <div className="text-2xl">Não tem nada aqui...</div>
                <div>
                    <Link href={"/"} className="text-green-500 flex items-center gap-1 mt-2">
                        <span>Compre algo</span>
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <>
            <div className="bg-slate-200 p-4 rounded-lg  border-2 border-black">
                <Heading title="Carrinho de compras" center />
                <div className="grid grid-cols-5 text-[25px] gap-4 pb-2 items-center mt-8 border-2 border-black p-2 rounded-xl mb-4">
                    <div className="col-span-2 justify-self-start border-r-2 border-black pr-[18vw]">Produto</div>
                    <div className="justify-self-center border-r-2 border-black px-[18vw]">Preço</div>
                    <div className="justify-self-center"></div>
                    <div className="justify-self-end">Total</div>
                </div>
                <div>
                    {cartProducts && cartProducts.map((item) => {
                        return <ItemContent key={item.id} item={item} />
                    })}
                </div>
                <div className="border-t-[1.5px] border-slate-200 py-4 flex justify-between gap-4">
                    <div className="text-sm flex flex-col gap-1 items-start bg-slate-400 p-4 rounded-xl">
                        <Button label="Fazer o pagamento" onClick={() => { }} />
                        <div className="flex font-semibold w-[15dvw] text-2xl">
                            <span>Total:</span>
                            <span className="text-teal-400">{formatPrice(cartTotalAmount)}</span>
                        </div>
                    </div>
                    <div className="w-[180px]">
                        <Button label="Remover todos os items do carrinho" onClick={() => { handleClearCart() }}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartClient;