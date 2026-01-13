<<<<<<< HEAD
import Banner from "../components/Banner";
import Carousel from "../components/Carousel";
import HomePageCard from "../components/HomePageCard";
import Explainer from "../components/Explainer";
import CallToArms from "../components/CTA";
import { builder, designer, people } from "../assets/images";
import { HomePageBuilderText, HomePageDesignerText } from "../constants";
import Features from "../components/Features";
=======
// import Banner from "../components/Banner";
// import Hero from "../components/Hero";
// import HomePageCard from "../components/HomePageCard";
import Footer from "../components/Footer";
// import { builder, designer } from "../assets/images";
// import { HomePageBuilderText, HomePageDesignerText } from "../constant";
>>>>>>> About

export default function HomePage() {
    return (
<<<<<<< HEAD
        <div className="flex flex-col w-full h-full">
            <Carousel />
            <Banner />
            <Explainer />
            <Banner reverse={true} />

            <div
                id="CustomerCards"
                className="flex flex-row items-stretch gap-12 grid grid-cols-1 lg:grid-cols-3 px-12"
            >
                <HomePageCard
                    name={"Contractors"}
                    img={builder}
                    text={HomePageBuilderText}
                />
                <HomePageCard
                    name={"Designers"}
                    img={designer}
                    text={HomePageDesignerText}
                />
                <HomePageCard
                    name={"Everyone"}
                    img={people}
                    text={HomePageBuilderText}
                />
            </div>
            <Features />
            <CallToArms />
=======
        <div className="w-full h-full">
            {/* <Hero />
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
            /> */}
            <Footer></Footer>
>>>>>>> About
        </div>
    );
}