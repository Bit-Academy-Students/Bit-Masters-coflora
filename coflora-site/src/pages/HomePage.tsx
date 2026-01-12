<<<<<<< HEAD
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
=======
import Footer from '../components/Footer.tsx';

function HomePage() {
    return (
        <>
            <Footer></Footer>
        </>
    )
>>>>>>> 1777beb8a4c964651547cecf9467e776a8c163c9
}

export default HomePage;
