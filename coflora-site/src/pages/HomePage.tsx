import Banner from "../components/Banner";
import Hero from "../components/Hero";
import HomePageCard from "../components/HomePageCard";
import { builder, designer } from "../assets/images";
import { HomePageBuilderText, HomePageDesignerText } from "../constant";

function HomePage() {
    return (
        <div className="flex flex-col w-full h-full">
            <Hero />
            <div className="flex flex-row items-stretch gap-12 grid grid-cols-1 lg:grid-cols-2 px-12">
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
            <Banner />
        </div>
    );
}

export default HomePage;
