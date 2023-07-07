import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-[#df6f63]">
      <Hero />
      <About />
      <Products pizzaNum={3} prod={false} />
      <Contact />
    </main>
  );
}
