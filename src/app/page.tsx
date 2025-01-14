import Image from "next/image";
import Footer from "./components/Footer";
import Head from "next/head";
import FirstHeader from "./components/FirstHeader"
import SecondHeader from "./components/SecondHeader";
import HeroSection from "./components/HeroSection";
import EditorPick from "./components/Editor";
import Vite from "./components/Vite";
import PartNeuralPage from "./components/PartNeuralPage";
import BestProducts from "./components/BestProducts";
import FeaturedPosts from "./components/FeaturedPost";
export default function Home() {
  return (
    <div>
      <HeroSection/>
      <EditorPick/>
      <BestProducts/>
      <Vite/>
      <PartNeuralPage/>
      <FeaturedPosts/>
      <Footer/>
    </div>
  );
}
