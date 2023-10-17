"use client"

import Button from "@/components/Button";
import SetQuantity from "@/components/products/SetQuantity";
import { useCart } from "../../../../hooks/useCart";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { MdCheckCircle } from "react-icons/md";
import Image from 'next/image'
import ProductImage from "@/components/products/ProductImage";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

interface ProductDetailsProps {
    product: any
}

export type CartProductType = {
    id: string,
    name: string,
    description: string,
    image: string,
    quantity: number,
    price: number
}

const Horizontal = () => {
    return <hr className="w-[30%] my-2" />
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
    const { handleAddProductToCart, cartProducts } = useCart();
    const [isProductInCart, setIsProductInCart] = useState(false);

    useEffect(() => {
        setIsProductInCart(false)

        if (cartProducts) {
            const existingIndex = cartProducts.findIndex((item) => item.id === product.id)
            if (existingIndex > -1) {
                setIsProductInCart(true);
            }
        }
    }, [cartProducts])

    const [CartProduct, setCartProduct] = useState<CartProductType>(
        {
            id: product.id,
            name: product.name,
            description: product.description,
            image: product.image,
            quantity: 1,
            price: product.price
        })
    const router = useRouter();

    const handleQtyIncrease = useCallback(() => { setCartProduct((prev) => { return { ...prev, quantity: prev.quantity + 1 } }); }, [CartProduct]);
    const handleQtyDecrease = useCallback(() => { setCartProduct((prev) => { return { ...prev, quantity: prev.quantity - 1 } }); }, [CartProduct]);

    return (
        <>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ProductImage cartProduct={CartProduct} product={product} />
            <div className="flex flex-col gap-1 text-slate-500 text-sm">
                <h2 className="text-3xl font-medium text-slate-700">{product.name}</h2>
                <div className="flex items-center gap-2"></div>
                <Horizontal />
                <div className="text-justify">{product.description}</div>
                <Horizontal />
                <div><span className="font-semibold">CATEGORY: </span>{product.category}</div>
                <div><span className="font-semibold">BRAND: </span>{product.brand}</div>
                <div className={product.inStock ? 'text-teal-400' : "text-rose-400"}>{product.inStock ? "In stock" : "Out of stock"}</div>
                <Horizontal />
                {isProductInCart ? <>
                    <p className="mb-2 text-slate-500 flex items-center gap-1">
                        <MdCheckCircle size={20} className="text-teal-400" />
                        <span>Product added to cart</span>
                    </p>
                    <div className="max-w-[300px]">
                        <Button label="View Cart" outline onClick={() => { router.push("/cart") }} />
                    </div>
                </> : <>
                    <Horizontal />
                    <SetQuantity cartProduct={CartProduct} handleQtyIncrease={handleQtyIncrease} handleQtyDecrease={handleQtyDecrease} />
                    <Horizontal />
                    <div className="max-w-[300px]">
                        <Button label="Add To Cart" onClick={() => handleAddProductToCart(CartProduct)} />
                    </div>
                </>}
            </div>
        </div>
    
    <Footer />
        </>
    )
}

export default ProductDetails;