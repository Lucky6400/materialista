import { ThemeProvider } from '../tailwindComp/TailwindComponents'
import { HeroCarousel } from '@/components/home/HeroCarousel'
import Categories from '@/components/home/Categories'
import ProductList from '@/components/home/ProductList'

export default function Home() {
  return (
    <ThemeProvider>
      <Categories />
      <HeroCarousel />
      <ProductList title={"Featured Products"} />
      <ProductList title={"Electronics"} category={"electronics"} />
    </ThemeProvider>
  )
}
