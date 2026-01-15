import Banner from "../components/Banner";
import Carousel from "../components/Carousel";
import HomePageCard from "../components/HomePageCard";
import Explainer from "../components/Explainer";
import CallToAction from "../components/CTA";
import { builder, designer, trees0 } from "../assets/images";
import {
    HomePageBuilderText,
    HomePageDesignerText,
    HomePageAllProductsText,
} from "../constants";
import Features from "../components/Features";
import { img, img1, img2, img3, img4 } from "../assets/images";
import { HeroTitle } from "../constants";
import HeroButton from "../components/HeroButton";

function HomePage() {
    const heroImages = [img, img1, img2, img3, img4];

    return (
        <div className="flex flex-col w-full h-full overflow-x-hidden">
            <Carousel
                title={HeroTitle}
                element={
                    <HeroButton
                        text={"Explore solutions"}
                        scrollTo={"CustomerCards"}
                    />
                }
                images={heroImages}
                classesOuterDiv="w-full"
            />
            <Banner />
            <Explainer />

            <div
                id="CustomerCards"
                className="flex flex-row items-stretch gap-12 grid grid-cols-1 xl:grid-cols-3 px-12"
            >
                <HomePageCard
                    name={"All Products"}
                    img={trees0}
                    text={HomePageAllProductsText}
                />
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
            <CallToAction />
        </div>
    );
}

export default HomePage;
