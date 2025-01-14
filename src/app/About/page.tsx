import Image from "next/image";
import Footer from "../components/Footer1";
import SecondHeader from "../components/SecondHeader";
import About from "../components/about";
import Logo from "../components/Logo";
import About1 from "../components/about1";
export default function Home() {
  return (
    <div>
    <About1/>
    <About/>
    <Logo/>
    <Footer/>
    </div>
  );
}
