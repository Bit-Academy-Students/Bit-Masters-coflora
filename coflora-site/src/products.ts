import { coating, wallpaper, leather, panels, units } from "./assets/images";
import {
    ypsilonArmChair,
    ypsilonCoffeeTable,
    ypsilonSofa,
    omegaArmChair,
    omegaChair,
    booleanFloorLamp,
    booleanLedTableLamp,
    booleanTableLamp,
    hoopFloorLamp,
    hoopTableLamp,
} from "./assets/images/furniture";

import type { Product } from "./types";

export const PRODUCTS: Product[] = [
    {
        id: "cork-coating",
        title: "Cork Coating",
        description:
            "Multi-purpose coating for insulation, soundproofing & waterproofing.",
        link: "/products/cork-coating",
        img: `${coating}`,
        category: "hero",
        chips: ["Acoustic", "Thermal Insulation", "Waterproof", "Mould-Free"],
    },
    {
        id: "cork-wallpaper",
        title: "Cork Wallpaper",
        description:
            "Eco-friendly wallpaper made from cork slices on FSC paper, hypoallergenic & sound-absorbing.",
        link: "/products/cork-wallpaper",
        img: `${wallpaper}`,
        category: "hero",
        chips: ["Acoustic", "Water-Repellent", "Sustainable", "Mould-Free"],
    },
    {
        id: "cork-leather",
        title: "Cork Leather",
        description:
            "Vegan, durable cork leather for furniture, fashion & upholstery applications.",
        link: "/products/cork-leather",
        img: `${leather}`,
        category: "hero",
        chips: ["Durable", "Flexible", "Sustainable", "Water-Repellent"],
    },
    {
        id: "cork-panels",
        title: "Cork Panels",
        description:
            "Decorative wall and ceiling panels with acoustic properties and thermal insulation.",
        link: "/products/cork-panels",
        img: `${panels}`,
        category: "grid",
        chips: ["Acoustic", "Thermal Insulation", "Sustainable", "Durable"],
    },
    {
        id: "dynamic-cork-units",
        title: "Dynamic Cork Units",
        description:
            "Modular cork pieces adaptable to walls, ceilings, or other surfaces for design and insulation.",
        link: "/products/dynamic-cork-units",
        img: `${units}`,
        category: "grid",
        chips: ["Modular", "Acoustic", "Thermal Insulation", "Sustainable"],
    },
];

export const FURNITURE: Product[] = [
    {
        id: "ypsilon-sofa",
        title: "YPSILON Sofa",
        description:
            "Handmade black cork & ash-back sofa. Cork color may shift with sunlight; water & fire resistant.",
        link: "/products/furniture-other/ypsilon-sofa",
        img: `${ypsilonSofa}`,
        category: "furniture",
        chips: ["Handmade", "Sustainable", "Cork", "Water-resistant"],
    },
    {
        id: "ypsilon-coffee-table",
        title: "YPSILON Coffee Table",
        description:
            "Handmade black cork coffee table with glass top. Cork color may shift with sunlight; water & fire resistant.",
        link: "/products/furniture-other/ypsilon-coffee-table",
        img: `${ypsilonCoffeeTable}`,
        category: "furniture",
        chips: ["Handmade", "Sustainable", "Cork", "Water-resistant"],
    },
    {
        id: "ypsilon-armchair",
        title: "YPSILON Armchair / Easy Chair",
        description:
            "Handmade black cork & ash-back armchair. Cork color may shift with sunlight; water & fire resistant.",
        link: "/products/furniture-other/ypsilon-armchair",
        img: `${ypsilonArmChair}`,
        category: "furniture",
        chips: ["Handmade", "Sustainable", "Cork", "Water-resistant"],
    },
    {
        id: "omega-chair-with-armrests",
        title: "OMEGA Chair with Armrests",
        description:
            "Handmade black cork chair. Cork color may shift with sunlight; water & fire resistant.",
        link: "/products/furniture-other/omega-chair-with-armrests",
        img: `${omegaArmChair}`,
        category: "furniture",
        chips: ["Handmade", "Sustainable", "Cork", "Water-resistant"],
    },
    {
        id: "omega-chair",
        title: "OMEGA Chair",
        description:
            "Handmade black cork chair. Cork color may shift with sunlight; water & fire resistant.",
        link: "/products/furniture-other/omega-chair",
        img: `${omegaChair}`,
        category: "furniture",
        chips: ["Handmade", "Sustainable", "Cork", "Water-resistant"],
    },
];

export const LIGHTS: Product[] = [
    {
        id: "boolean-table-lamp",
        title: "BOOLEAN Table Lamp",
        description:
            "Black cork table lamp with a globe fluorescent bulb (Ø 120 mm). Cork color may shift with sunlight; water & fire resistant.",
        link: "/products/furniture-other/boolean-table-lamp",
        img: `${booleanTableLamp}`,
        category: "light",
        chips: ["Handmade", "Sustainable", "Cork", "Lighting"],
    },
    {
        id: "boolean-led-table-lamp",
        title: "BOOLEAN LED Table Lamp",
        description:
            "Black cork table lamp with LED tube bulb (9 W, 50 cm). Cork color may shift with sunlight; water & fire resistant.",
        link: "/products/furniture-other/boolean-led-table-lamp",
        img: `${booleanLedTableLamp}`,
        category: "light",
        chips: ["Handmade", "Sustainable", "Cork", "Lighting"],
    },
    {
        id: "boolean-floor-lamp",
        title: "BOOLEAN Floor Lamp",
        description:
            "Black cork floor lamp with two globe bulbs (Ø 120 mm). Cork color may shift with sunlight; water & fire resistant.",
        link: "/products/furniture-other/boolean-floor-lamp",
        img: `${booleanFloorLamp}`,
        category: "light",
        chips: ["Handmade", "Sustainable", "Cork", "Lighting"],
    },
    {
        id: "hoop-table-lamp",
        title: "HOOP Table Lamp",
        description:
            "Black cork table lamp with circular LED tube lamp (9 W, Ø 205 mm). Cork color may shift with sunlight; water & fire resistant.",
        link: "/products/furniture-other/hoop-table-lamp",
        img: `${hoopTableLamp}`,
        category: "light",
        chips: ["Handmade", "Sustainable", "Cork", "Lighting"],
    },
    {
        id: "hoop-pendant-lamp",
        title: "HOOP Pendant Lamp",
        description:
            "Handmade black cork suspension lamp with circular LED tube (9 W, Ø 205 mm). Cork color may shift with sunlight; water & fire resistant.",
        link: "/products/furniture-other/hoop-pendant-lamp",
        img: `${hoopFloorLamp}`,
        category: "light",
        chips: ["Handmade", "Sustainable", "Cork", "Lighting"],
    },
];
