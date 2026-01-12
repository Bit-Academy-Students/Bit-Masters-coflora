<<<<<<< HEAD
import Banner from "../components/Banner";
import Hero from "../components/Hero";
import HomePageCard from "../components/HomePageCard";
import { builder, designer } from "../assets/images";
import { HomePageBuilderText, HomePageDesignerText } from "../constant";

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
        </div>
    );
=======
import Footer from '../components/Footer.tsx';

function HomePage() {
    return (
        <>
            <Footer></Footer>
        </>
    )
>>>>>>> ce32a2daa411a347224ac0761d2abcb2a6201d1e
}

export default HomePage;
