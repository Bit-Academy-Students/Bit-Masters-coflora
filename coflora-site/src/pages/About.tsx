export default function About() {
    return (
        <section className="w-screen overflow-x-hidden h-screen text-white">
            <div className="relative flex w-full justify-evenly flex-wrap">
                <img className="h-screen w-[200%] brightness-50 object-left object-cover" src="\src\assets\images\img.webp" alt="image" />

                <div className="flex flex-wrap flex-col absolute w-[50vw]">
                    <h2 className="text-2xl">Who and Why</h2>
                    <p className="text-[12px]">WHO?
                        We are a team of like minded nature & art appreciators, that united to offer unique products to the world.

                        We have expertise in Environmental Sciences, Sustainability, Climatology as well as fashion, design and arts. Here, Co-creating with nature, with its Flora, becomes possible, and brings all our knowledge and creativity in harmony, for the good of all.

                        CoFlora brings together the care for nature and innovative design and art.
                    </p>
                </div>
            </div>
        </section>
    )
}