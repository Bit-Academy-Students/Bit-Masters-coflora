import Banner from "../components/Banner";
import Carousel from "../components/Carousel";
import HomePageCard from "../components/HomePageCard";
import Explainer from "../components/Explainer";
import CallToAction from "../components/CTA";
import { builder, designer, people } from "../assets/images";
import { HomePageBuilderText, HomePageDesignerText } from "../constants";
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
            <CallToAction />
        </div>
    );
}

export default HomePage;
