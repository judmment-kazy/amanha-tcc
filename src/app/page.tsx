import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import Slider from '@/components/slider'
import { getCurrentUser } from '@/lib/session'

export default async function Home() {
  const user = await getCurrentUser();
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