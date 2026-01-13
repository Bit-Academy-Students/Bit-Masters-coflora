import Banner from "../components/Banner";
import Carousel from "../components/Carousel";
import HomePageCard from "../components/HomePageCard";
import Explainer from "../components/Explainer";
import CallToArms from "../components/CTA";
import { builder, designer, people } from "../assets/images";
import { HomePageBuilderText, HomePageDesignerText } from "../constants";
import Features from "../components/Features";

export default function HomePage() {
    return (
        <div className="flex flex-col w-full h-full">
            <Carousel />
            <Banner />
            <Explainer />
            <Banner reverse={true} />

            <div
                id="CustomerCards"
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
        </div>
    );
}