import Banner from "../components/Banner";
import Hero from "../components/Hero";
import HomePageCard from "../components/HomePageCard";
import Explainer from "../components/Explainer";
import CallToArms from "../components/CTA";
import { builder, designer } from "../assets/images";
import { HomePageBuilderText, HomePageDesignerText } from "../constants";
import Features from "../components/Features";

function HomePage() {
    return (
        <div className="flex flex-col w-full h-full">
            <Hero />
            <Banner />
            <Explainer />
            <Banner reverse={true} />

            <div
                id="CustomerCards"
                className="flex flex-row items-stretch gap-12 grid grid-cols-1 lg:grid-cols-2 px-12"
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
            </div>
            <Features />
            <CallToArms />
        </div>
    );
}

export default HomePage;
