import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function Sobre() {
    return (
        <div className="w-screen h-screen">
            <Header />

            <div className="w-screen flex flex-col items-center">
                <div className="md:w-[620px] md:mx-[85px] mt-[30px] p-[50px] py-[50px] mb-[130px] bg-gradient-aah border-white border-4 rounded-3xl dark:bg-none">
                    <h1 className="text-2xl font-bold sm:font-medium sm:text-5xl">Sobre o nosso projeto...</h1>
                    <Accordion type="single" collapsible className="w-[full] pt-8">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-xl sm:text-2xl font-extrabold">
                                Oque é isso?
                            </AccordionTrigger>
                            <AccordionContent className="text-md sm:text-xl font-semibold md:text-justify">
                                Comércio eletrônico tem crescido exponencialmente nos últimos anos, e a venda de produtos alimentícios online não é exceção. Este projeto de TCC se propõe a explorar as estratégias necessárias para o sucesso de uma loja de cones trufados online. Os cones trufados são uma sobremesa deliciosa e popular, e o mercado online oferece uma oportunidade única para empreendedores entrarem nesse setor em crescimento.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger className="text-xl sm:text-2xl font-extrabold">
                                Nossos objetivos...
                            </AccordionTrigger>
                            <AccordionContent className="text-xl font-semibold break-normal">
                                1) Analisar o mercado de cones trufados online, identificando tendências e oportunidades.<br /><br />
                                2) Investigar as melhores práticas de marketing digital e estratégias de venda online para atrair clientes e aumentar as vendas.<br /><br />
                                3) Realizar um estudo de caso em uma loja de cones trufados online, analisando sua estratégia de negócios, desafios enfrentados e resultados alcançados.<br /><br />
                                4) Propor recomendações específicas para melhorar a presença online e o desempenho de uma loja de cones trufados na web.<br /><br />
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger className="text-xl sm:text-2xl font-extrabold">
                                A nossa equipe...
                            </AccordionTrigger>
                            <AccordionContent className="text-md sm:text-xl">
                                <div className="bg-gray-200 p-2 rounded-xl h-fit pt-6 mb-6 font-semibold dark:bg-DarkMenuColor"><span className="font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">João Paulo de Carvalho Guimarães</span> <br /> Programador BackEnd e FrontEnd<br /><br /></div>
                                <div className="bg-gray-200 p-2 rounded-xl h-fit pt-6 mb-6 font-semibold dark:bg-DarkMenuColor"><span className="font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Gabriel Florentino Cardoso</span> <br /> Programador FrontEnd<br /><br /> </div>
                                <div className="bg-gray-200 p-2 rounded-xl h-fit pt-6 mb-6 font-semibold dark:bg-DarkMenuColor"><span className="font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Letycia Helena Hoepers</span> <br /> Gerente de Projetos<br /><br /> </div>
                                <div className="bg-gray-200 p-2 rounded-xl h-fit pt-6 mb-6 font-semibold dark:bg-DarkMenuColor"><span className="font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Caique Esteves de Jesus</span> <br /> Designer<br /><br /> </div>
                                <div className="bg-gray-200 p-2 rounded-xl h-fit pt-6 mb-6 font-semibold dark:bg-DarkMenuColor"><span className="font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Lucas Alves Pereira</span> <br /> Beta Tester<br /><br /> </div>
                                <div className="bg-gray-200 p-2 rounded-xl h-fit pt-6 mb-6 font-semibold dark:bg-DarkMenuColor"><span className="font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Fernando Alves Pereira</span> <br /> Beta Tester </div>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger className="text-xl sm:text-2xl font-extrabold">
                                Duvidas Frequentes...
                            </AccordionTrigger>
                            <AccordionContent className="text-xl font-semibold">
                                <Accordion type="single" collapsible className="w-[full] pl-2">
                                    <AccordionItem value="item-5">
                                        <AccordionTrigger>Pergunta 1</AccordionTrigger>
                                        <AccordionContent>Resposta da primeira pergunta</AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-6">
                                        <AccordionTrigger>Pergunta 2</AccordionTrigger>
                                        <AccordionContent>Resposta da segunda pergunta</AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-7">
                                        <AccordionTrigger>Pergunta 3</AccordionTrigger>
                                        <AccordionContent>Resposta da terceira pergunta</AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>

            <Footer />
        </div>
    )
}