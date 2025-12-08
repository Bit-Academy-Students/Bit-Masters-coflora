<<<<<<< HEAD
import Footer from '../components/Footer.tsx';

function HomePage() {
    return (
        <>
            <Footer></Footer>
        </>
    )
=======
import Banner from "../components/Banner";
import Hero from "../components/Hero";
import HomePageCard from "../components/HomePageCard";
import { builder, designer } from "../assets/images";
import { HomePageBuilderText, HomePageDesignerText } from "../constant";
import Footer from "../components/Footer";

function HomePage() {
    return (
        <div className="w-full h-full">
            <Hero />
            <HomePageCard
                name={"Builders"}
                img={builder}
                text={HomePageBuilderText}
            />
            <Banner />
            <HomePageCard
                name={"Designers"}
                img={designer}
                text={HomePageDesignerText}
            />
            <Footer></Footer>
        </div>
    );
>>>>>>> 6480b3609c6a5177b56e480cd908a47f5d1e23f0
}

export default HomePage;
