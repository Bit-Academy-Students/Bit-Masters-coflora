// import Banner from "../components/Banner";
// import Hero from "../components/Hero";
// import HomePageCard from "../components/HomePageCard";
import Footer from "../components/Footer";
// import { builder, designer } from "../assets/images";
// import { HomePageBuilderText, HomePageDesignerText } from "../constant";

export default function HomePage() {
    return (
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
        </div>
    );
}