export interface Product {
    id: string;
    name: string;
    type: "contractor" | "designer"; // main filter
    shortDescription: string;
    longDescription?: string;
    specs?: {
        waterproof?: boolean;
        acoustic?: boolean;
        thermal?: boolean;
        fireResistant?: boolean;
        chemicalFree?: boolean;
        hypoallergenic?: boolean;
        carbonNegative?: boolean;
        [key: string]: boolean | string | number | undefined;
    };
    applications?: string[];
    images: string[];
    colors?: string[];
    width?: string;
    length?: string;
    links?: {
        productPage?: string;
    };
}

export const PRODUCTS: Product[] = [
    {
        id: "cork-paint",
        name: "Cork Paint",
        type: "contractor",
        shortDescription:
            "Multifunctional biobased coating for indoor & outdoor use.",
        longDescription:
            "A natural coating based on cork oak granules and water-based emulsion. Waterproof, acoustic, and thermal insulation properties. Can be applied on wood, metal, cement, bricks, etc.",
        specs: {
            waterproof: true,
            acoustic: true,
            thermal: true,
            chemicalFree: true,
            carbonNegative: true,
            scratchResistant: true,
        },
        applications: [
            "Roofs",
            "Facades",
            "Interior walls",
            "Furniture",
            "Handles",
            "Outdoor objects",
        ],
        images: ["/images/cork-paint-1.jpg", "/images/cork-paint-2.jpg"],
        colors: ["Natural", "Beige", "Terracotta"],
        links: { productPage: "/products/cork-paint" },
    },
    {
        id: "cork-wallpaper",
        name: "Cork Wallpaper",
        type: "designer",
        shortDescription:
            "Fully biobased, hypoallergenic, and acoustic wall covering.",
        longDescription:
            "Made from thin slices of cork bark adhered to FSC-certified paper. Water/dust/fire resistant, improves acoustics, safe for children, zero waste production.",
        specs: {
            hypoallergenic: true,
            chemicalFree: true,
            carbonNegative: true,
            dustResistant: true,
            waterResistant: true,
            fireResistant: true,
        },
        applications: [
            "Homes",
            "Hotels",
            "Public spaces",
            "Children's institutions",
        ],
        images: [
            "/images/cork-wallpaper-1.jpg",
            "/images/cork-wallpaper-2.jpg",
        ],
        colors: ["Natural", "Pastel Pink", "Terracotta", "Olive"],
        width: "50cm / 100cm",
        length: "5m / 10m",
        links: { productPage: "/products/cork-wallpaper" },
    },
    {
        id: "cork-leather",
        name: "Cork Leather",
        type: "designer",
        shortDescription:
            "Vegan, flexible, durable cork leather for furniture and fashion.",
        longDescription:
            "Made from cork with textile backing (organic denim, hemp, or bamboo). Durable, flexible, sustainable, and cruelty-free.",
        specs: {
            chemicalFree: true,
            vegan: true,
            carbonNegative: true,
            hypoallergenic: true,
        },
        applications: ["Furniture", "Fashion", "Lighting", "Upholstery"],
        images: ["/images/cork-leather-1.jpg", "/images/cork-leather-2.jpg"],
        colors: ["Natural", "Brown", "Black", "Pastel shades"],
        links: { productPage: "/products/cork-leather" },
    },
];
