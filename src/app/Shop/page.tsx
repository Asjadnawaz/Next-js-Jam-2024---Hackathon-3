import Image from "next/image";
import Footer from "../components/Footer1";
import SecondHeader from "../components/SecondHeader";
import NavBar from "../components/NavBar";
import ShopCard from "../components/ShopCard";
import ResultsHeader from "../components/ResultsHeader";
import Logo from "../components/Logo";
import BestProduct from "../components/BestProducts";
export default function Home() {
  return (
    <div>
    <NavBar/>
    <SecondHeader/>
    <ShopCard/>
    <ResultsHeader/>
    <Logo/>
    <Footer/>
    <BestProduct/>
    </div>
  );
}
