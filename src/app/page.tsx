import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import Slider from '@/components/slider'
import { getCurrentUser } from '@/lib/session'
import { products } from "../../utils/products";

interface IPrams {
  productId?: string
}

const Home = async ({ params }: { params: IPrams }) => {
  const user = await getCurrentUser();

  const product = products.find((item) => item.id === params.productId)

  return (
    <>
      <Header />
      <main className='flex items-center justify-center'>
        <section className='w-full max-w-46xl flex items-center justify-center py-[70px]'>
            <Slider />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Home;