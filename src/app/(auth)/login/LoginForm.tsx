'use client'

import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Input from "@/components/inputs/input";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AiOutlineGoogle } from "react-icons/ai"
import { SafeUser } from "../../../../types";

interface LoginFormProps{
    currentUser: SafeUser | null
}

const LoginForm: React.FC<LoginFormProps> = ({currentUser}) => {

    const [isLoading, setIsLoading] = useState(false)
    const {register, handleSubmit, formState:{errors}} = useForm<FieldValues>(
        {defaultValues:{
            email:'',
            password:'',
        }
    })

    const router = useRouter()

    useEffect(() => {
        if(currentUser){
            router.push('/cart')
            router.refresh();
        }
    }, [])

    const onSubmit:SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true)
        signIn('credentials', {
            ...data,
            redirect: false
        }).then((callback) => {
            setIsLoading(false)

            if (callback?.ok) {
                router.push('/cart')
                router.refresh()
                toast.success('Logged In')
            }

            if (callback?.error) {
                toast.error(callback.error)
            }
        })
    }

    if(currentUser){
        return <p className="text-center text-[30px] font-semibold">Redirecionando para sua conta...</p>
    }

    return ( 
        <>
        <Heading title="Entre em sua conta aqui!" />
        <Button outline label="Continue usando Google" icon={AiOutlineGoogle} onClick={() => {signIn('google')}} />
        <hr className="bg-slate-300 w-full h-px" />
        <Input id="email" label="Email" disabled={isLoading} register={register} errors={errors} required />
        <Input id="password" label="Senha" disabled={isLoading} register={register} errors={errors} required type="password" />
        <Button label={isLoading ? "Carregando" : "Entrar"} onClick={handleSubmit(onSubmit)} />
        <p className="text-sm">Não possui uma conta?{" "} <Link href='/register' className="underline">Registre-se</Link></p>
        </>
    );
}
 
export default LoginForm;