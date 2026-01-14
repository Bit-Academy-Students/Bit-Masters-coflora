import { coating, wallpaper, leather, panels, units } from "./assets/images";
import * as corkWallpaperImages from "./assets/images/products/cork-wallpaper";
import * as corkCoatingImages from "./assets/images/products/cork-coating";
import * as corkLeatherImages from "./assets/images/products/cork-leather";
import * as corkPanelImages from "./assets/images/products/cork-panels";
import * as corkUnitImages from "./assets/images/products/cork-units";

import type { Product } from "./types";

export const PRODUCTS: Product[] = [
    {
        id: "cork-coating",
        title: "Cork Coating",
        link: "/products/cork-coating",
        short: "Multi-purpose coating for insulation, soundproofing & waterproofing.",
        long: "Our cork coating is a fully biobased, zero-synthetic solution developed with a certified partner facility in Spain. It is supplied as a paste/emulsion for spray or trowel application and cures to a flexible, durable membrane. Works on wood, concrete, metal, plastic and composite substrates. Ideal for façades, roofs, ceilings, interior walls, and technical applications in high-humidity environments.",
        audience: "both",
        category: "hero",
        chips: ["Acoustic", "Thermal Insulation", "Waterproof", "Mould-Free"],
        img: `${coating}`,
        images: [
            `${corkCoatingImages.coating1}`,
            `${corkCoatingImages.coating2}`,
            `${corkCoatingImages.coating3}`,
            `${corkCoatingImages.coating4}`,
            `${corkCoatingImages.coating5}`,
        ],
        downloads: {
            catalog: "/cork-coating-catalog.pdf",
            specsheet: "/cork-coating-info-sheet.pdf",
        },

        specs: {
            thickness: {
                label: "Typical applied thickness",
                value: "2–3",
                unit: "mm",
            },
            coverage: { label: "Coverage @ 0.5mm", value: "6–8", unit: "m²/L" },
            lambda: {
                label: "Thermal conductivity λ",
                value: "0.045–0.059",
                unit: "W/m·K",
            },
            acoustic: { label: "Sound reduction", value: "8–12", unit: "dB" },
            curing: { label: "Curing time", value: "24–72", unit: "hours" },
        },

        technicalSpecs: [
            {
                category: "Physical Properties",
                items: [
                    {
                        key: "Material",
                        value: "Acrylic-bound sprayable cork granulate",
                    },
                    { key: "Granule size", value: "0.5–1.0 mm" },
                    { key: "Finish", value: "Matte cork texture" },
                    { key: "Density (wet)", value: "0.55–0.70 g/cm³" },
                    { key: "Density (dry)", value: "0.45–0.55 g/cm³" },
                    { key: "Drying time (touch)", value: "2–6 hours" },
                    { key: "Full curing time", value: "24–72 hours" },
                ],
            },
            {
                category: "Thermal Performance",
                items: [
                    {
                        key: "Thermal conductivity λ",
                        value: "0.040–0.055 W/m·K",
                        standard: "EN 12667",
                    },
                    {
                        key: "Thermal resistance (1mm layer)",
                        value: "0.018–0.022 m²K/W",
                    },
                    {
                        key: "Heat absorption",
                        value: "Low — surface remains cool",
                    },
                ],
            },
            {
                category: "Acoustic Performance",
                items: [
                    {
                        key: "Sound reduction",
                        value: "6–12 dB depending on substrate",
                        standard: "ISO 10140",
                    },
                    {
                        key: "Acoustic behaviour",
                        value: "Dampens mid/high-frequency noise",
                    },
                ],
            },
            {
                category: "Application Properties",
                items: [
                    {
                        key: "Application method",
                        value: "Spray gun (hopper gun or pro)",
                    },
                    { key: "Optimal viscosity", value: "120–160 KU" },
                    { key: "Recoating interval", value: "4–12 hours" },
                    { key: "Max layer per coat", value: "1.0 mm" },
                    { key: "Typical total thickness", value: "0.5–2.0 mm" },
                ],
            },
            {
                category: "Environmental",
                items: [
                    { key: "VOC", value: "< 0.3 mg/m³ (ultra-low)" },
                    { key: "Renewable content", value: "60–80% cork granules" },
                    {
                        key: "Recyclability",
                        value: "Fully recyclable as inert filler",
                    },
                    { key: "Fire rating", value: "Euroclass E (typical)" },
                ],
            },
            {
                category: "Compatibility",
                items: [
                    {
                        key: "Suitable surfaces",
                        value: "Plaster, cement, wood, MDF, brick, primed drywall",
                    },
                    {
                        key: "Not ideal for",
                        value: "Smooth plastics, oily metals",
                    },
                    {
                        key: "Primers",
                        value: "Acrylic universal primer recommended",
                    },
                    { key: "Topcoat", value: "Optional acrylic sealant" },
                ],
            },
        ],

        applications: [
            {
                title: "Interior Walls",
                description:
                    "Improves thermal comfort and reduces reverberation in living rooms, bedrooms, offices, and studios.",
            },
            {
                title: "Ceilings",
                description:
                    "Significant acoustic dampening for echo-prone spaces. Lightweight and easy to spray overhead.",
            },
            {
                title: "Bathrooms",
                description:
                    "Moisture resistant with anti-mould behaviour. Ideal for humid domestic environments.",
            },
            {
                title: "Facades (non-direct rain)",
                description:
                    "Adds insulation and micro-crack bridging on sheltered exterior walls.",
            },
            {
                title: "Retail & Hospitality",
                description:
                    "Visually warm material with functional acoustic performance for restaurants, lobbies, and cafés.",
            },
            {
                title: "Furniture Panels",
                description:
                    "Spray-on cork texture is commonly used on MDF or plywood decorative elements.",
            },
        ],

        installation: {
            phases: [
                {
                    title: "1. Surface Preparation",
                    steps: [
                        "Ensure substrate is clean, dry, and dust-free.",
                        "Repair cracks or holes with filler.",
                        "Prime surface with acrylic primer for best adhesion.",
                        "Mask edges, floors, and fixtures.",
                    ],
                },
                {
                    title: "2. Application",
                    steps: [
                        "Mix the coating thoroughly for 2–3 minutes.",
                        "Use hopper gun or pressure sprayer at medium pressure.",
                        "Apply in thin, even passes (max 1 mm per coat).",
                        "Allow 4–12 hours between coats depending on humidity.",
                        "Typical thickness achieved in 1–3 coats.",
                    ],
                },
                {
                    title: "3. Finishing",
                    steps: [
                        "Let surface dry 24–72 hours.",
                        "Optional: seal with clear acrylic matte topcoat.",
                        "Remove masking tape after touch-dry stage.",
                    ],
                },
                {
                    title: "4. Maintenance",
                    steps: [
                        "Clean with mild soap and water.",
                        "Spot repair by lightly sanding and respraying.",
                        "Recoat every 7–15 years depending on use.",
                    ],
                },
            ],
        },

        faq: [
            {
                question: "Can cork coating be used in bathrooms?",
                answer: "Yes. It is moisture-resistant and naturally mould-resistant, but direct water exposure (e.g. shower walls) is not recommended without sealing.",
            },
            {
                question: "Can I apply it on ceilings?",
                answer: "Yes. The product is lightweight and adheres well overhead when applied in thin coats.",
            },
            {
                question: "How durable is the finish?",
                answer: "Very durable for interior use. It resists micro-cracking and impacts better than paint due to the elastic cork structure.",
            },
            {
                question: "Does it smell?",
                answer: "Only a mild natural cork scent during application. VOC is extremely low (<0.3 mg/m³).",
            },
            {
                question: "Can I paint over it?",
                answer: "Yes, with acrylic paints. However, painting may reduce acoustic absorption slightly.",
            },
            {
                question: "Is it safe for kids' rooms?",
                answer: "Yes, it is non-toxic, low-VOC, and contains mostly natural cork.",
            },
            {
                question: "How thick should I apply it?",
                answer: "0.5–2.0 mm depending on acoustic/thermal needs. Most interiors use 1.0 mm.",
            },
        ],

        keyBenefits: [
            {
                title: "Acoustic Dampening",
                description:
                    "Reduces sound transmission using cork’s natural cellular structure.",
            },
            {
                title: "Thermal Insulation",
                description:
                    "Improves indoor comfort by lowering heat transfer.",
            },
            {
                title: "Water-Resistant",
                description: "Naturally hydrophobic thanks to suberin.",
            },
            {
                title: "Mould-Resistant",
                description:
                    "Antimicrobial and breathable to prevent mould growth.",
            },
            {
                title: "Flexible Surface",
                description: "Expands and compresses without cracking.",
            },
            {
                title: "Eco-Based Material",
                description: "Made from renewable, recyclable cork granules.",
            },
        ],
    },

    {
        id: "cork-wallpaper",
        title: "Cork Wallpaper",
        link: "/products/cork-wallpaper",
        short: "Eco-friendly wallpaper made from real cork slices with acoustic and thermal benefits.",
        long: "Cork Wallpaper is formed from micro-slices of cork bark pressed onto FSC-certified paper backing. Each roll features a unique natural pattern (not printed), adding warmth, texture, and subtle acoustic comfort to interiors. Handmade in rural Portugal with low-waste production methods.",
        audience: "designer",
        category: "hero",
        chips: ["Acoustic", "Water-Repellent", "Sustainable", "Mould-Free"],
        img: `${wallpaper}`,
        images: [
            `${corkWallpaperImages.wallpaper0}`,
            `${corkWallpaperImages.wallpaper1}`,
            `${corkWallpaperImages.wallpaper2}`,
            `${corkWallpaperImages.wallpaper3}`,
        ],

        downloads: {
            catalog: "/cork-wallpaper-catalog.pdf",
            specsheet: "/cork-wallpaper-info-sheet.pdf",
        },

        specs: {
            thickness: {
                label: "Overall thickness",
                value: "0.40 ±0.10",
                unit: "mm",
            },
            weight: {
                label: "Mass per unit area",
                value: "180 ±40",
                unit: "g/m²",
            },
            width: { label: "Roll widths", value: "50 / 100", unit: "cm" },
            length: { label: "Roll lengths", value: "5 / 10", unit: "m" },
        },

        technicalSpecs: [
            {
                category: "Material",
                items: [
                    { key: "Surface", value: "Natural cork micro-slices" },
                    { key: "Backing", value: "FSC-certified paper" },
                    { key: "Finish", value: "Natural matte texture" },
                ],
            },
            {
                category: "Performance",
                items: [
                    {
                        key: "Acoustic behaviour",
                        value: "Softens room reverberation",
                    },
                    { key: "Thermal feel", value: "Warm to the touch" },
                    {
                        key: "Moisture behaviour",
                        value: "Naturally water-repellent",
                    },
                ],
            },
        ],

        applications: [
            {
                title: "Living Spaces",
                description: "Creates warm, tactile wall finishes.",
            },
            {
                title: "Bedrooms",
                description: "Improves comfort and acoustic softness.",
            },
            {
                title: "Retail & Hospitality",
                description: "Natural premium visual identity.",
            },
            {
                title: "Studios & Offices",
                description: "Reduces echo and improves ambience.",
            },
        ],

        installation: {
            phases: [
                {
                    title: "Preparation",
                    steps: [
                        "Ensure walls are clean, smooth and dry.",
                        "Apply primer for better adhesion.",
                    ],
                },
                {
                    title: "Application",
                    steps: [
                        "Apply standard wallpaper adhesive.",
                        "Install like conventional wallpaper.",
                        "Trim edges carefully with sharp blade.",
                    ],
                },
            ],
        },

        faq: [
            {
                question: "Is every roll identical?",
                answer: "No. Each roll is unique due to natural cork variation — this is a design feature.",
            },
            {
                question: "Can it be used in bathrooms?",
                answer: "Yes in well-ventilated areas, but not recommended for direct water zones.",
            },
        ],

        keyBenefits: [
            {
                title: "Natural Texture",
                description: "Each surface is visually unique.",
            },
            {
                title: "Acoustic Comfort",
                description: "Reduces sharp room reverberation.",
            },
            {
                title: "Thermal Feel",
                description: "Walls feel warmer than painted surfaces.",
            },
            {
                title: "Eco-Friendly",
                description: "Made from renewable cork bark.",
            },
            {
                title: "Easy to Apply",
                description: "Installs like traditional wallpaper.",
            },
            {
                title: "Mould-Resistant",
                description:
                    "Antimicrobial and breathable to prevent mould growth.",
            },
        ],
    },

    {
        id: "cork-leather",
        title: "Cork Leather",
        link: "/products/cork-leather",
        short: "Vegan, flexible cork leather for upholstery, fashion, and product design.",
        long: "Cork Leather is a sustainable alternative to animal leather, combining natural cork with textile backing for strength and flexibility. It is soft, durable, lightweight, and available in multiple colours and finishes, ideal for furniture, accessories, and design applications.",
        audience: "designer",
        category: "hero",
        chips: ["Durable", "Flexible", "Sustainable", "Water-Repellent"],
        img: `${leather}`,
        images: [
            `${corkLeatherImages.corkleather1}`,
            `${corkLeatherImages.corkleather2}`,
            `${corkLeatherImages.corkleather3}`,
        ],
        downloads: {
            catalog: "/cork-leather-catalog.pdf",
            specsheet: "/cork-leather-info-sheet.pdf",
        },

        specs: {
            thickness: {
                label: "Typical thickness",
                value: "0.8–1.2",
                unit: "mm",
            },
            backing: { label: "Backings", value: "Denim / Hemp / Bamboo" },
        },

        technicalSpecs: [
            {
                category: "Material",
                items: [
                    { key: "Surface", value: "Natural cork veneer" },
                    {
                        key: "Backing fabrics",
                        value: "Denim, hemp, bamboo textiles",
                    },
                    { key: "Touch", value: "Soft, warm, leather-like feel" },
                ],
            },
            {
                category: "Performance",
                items: [
                    { key: "Durability", value: "Resistant to daily wear" },
                    {
                        key: "Water behaviour",
                        value: "Naturally water-repellent",
                    },
                    { key: "Weight", value: "Lighter than animal leather" },
                ],
            },
        ],

        applications: [
            {
                title: "Furniture Upholstery",
                description: "Sofas, chairs, headboards.",
            },
            { title: "Fashion", description: "Bags, shoes, accessories." },
            {
                title: "Product Design",
                description: "Laptop sleeves, notebooks, decor.",
            },
        ],

        installation: {
            phases: [
                {
                    title: "Working with Cork Leather",
                    steps: [
                        "Can be cut with scissors or blade.",
                        "Can be stitched on domestic sewing machines.",
                        "Glue or staple like textile upholstery.",
                    ],
                },
            ],
        },

        faq: [
            {
                question: "Is it real leather?",
                answer: "No — it is a vegan alternative made from cork and textile backing.",
            },
            {
                question: "Can it be sewn?",
                answer: "Yes, it works with standard sewing machines and upholstery tools.",
            },
        ],

        keyBenefits: [
            {
                title: "Vegan Alternative",
                description: "No animal products involved.",
            },
            {
                title: "Soft & Flexible",
                description: "Comfortable tactile surface.",
            },
            {
                title: "Lightweight",
                description: "Easier handling than leather.",
            },
            { title: "Durable", description: "Withstands everyday use well." },
            {
                title: "Sustainable",
                description: "Renewable cork-based material.",
            },
            {
                title: "Water-Resistant",
                description: "Naturally hydrophobic thanks to suberin.",
            },
        ],
    },

    {
        id: "cork-panels",
        title: "Cork Panels",
        short: "Decorative wall and ceiling panels with acoustic comfort, thermal support, and natural aesthetics.",
        long: "Cork Panels are decorative and functional wall and ceiling elements made from natural cork granules or cork veneer layers. They improve acoustic comfort, add subtle thermal insulation, and bring a warm, organic materiality to interiors. Suitable for residential, commercial, hospitality, and public spaces where atmosphere and comfort matter as much as performance.",
        audience: "both",
        category: "grid",
        chips: [
            "Acoustic",
            "Thermal Comfort",
            "Natural Texture",
            "Sustainable",
        ],
        img: `${panels}`,
        link: "/products/cork-panels",
        images: [
            `${corkPanelImages.corkpanel1}`,
            `${corkPanelImages.corkpanel2}`,
            `${corkPanelImages.corkpanel3}`,
            `${corkPanelImages.corkpanel4}`,
        ],
        downloads: {
            catalog: "/cork-panels-catalog.pdf",
            specsheet: "/cork-panels-info-sheet.pdf",
        },

        specs: {
            thickness: {
                label: "Typical thickness",
                value: "6–20",
                unit: "mm",
            },
            formats: { label: "Formats", value: "Tiles / Panels" },
            install: {
                label: "Installation",
                value: "Glue or mechanical fixing",
            },
            use: { label: "Use", value: "Walls & ceilings" },
        },

        technicalSpecs: [
            {
                category: "Material",
                items: [
                    {
                        key: "Composition",
                        value: "Natural cork granules or veneer layers",
                    },
                    {
                        key: "Finish",
                        value: "Natural cork texture (varies by panel)",
                    },
                    {
                        key: "Weight",
                        value: "Lightweight compared to wood panels",
                    },
                ],
            },
            {
                category: "Performance",
                items: [
                    {
                        key: "Acoustic behaviour",
                        value: "Reduces echo and improves room acoustics",
                    },
                    {
                        key: "Thermal behaviour",
                        value: "Adds minor insulation to wall/ceiling build-up",
                    },
                    {
                        key: "Durability",
                        value: "Resistant to minor impacts and surface wear",
                    },
                ],
            },
            {
                category: "Environmental",
                items: [
                    { key: "Material origin", value: "Renewable cork bark" },
                    { key: "Recyclability", value: "Reusable and recyclable" },
                    { key: "VOC", value: "Naturally low emission material" },
                ],
            },
        ],

        keyBenefits: [
            {
                title: "Acoustic Comfort",
                description:
                    "Softens echo and improves sound quality in shared and open spaces.",
            },
            {
                title: "Thermal Support",
                description:
                    "Adds an extra comfort layer that supports stable indoor temperatures.",
            },
            {
                title: "Natural Aesthetic",
                description:
                    "Organic texture and tone create warm, authentic interiors.",
            },
            {
                title: "Lightweight Material",
                description:
                    "Easy to transport, handle, and install compared to heavy panels.",
            },
            {
                title: "Durable Surface",
                description:
                    "Withstands daily use in both residential and commercial environments.",
            },
            {
                title: "Sustainable Choice",
                description:
                    "Made from renewable cork with low environmental impact.",
            },
        ],

        applications: [
            {
                title: "Offices & Meeting Rooms",
                description:
                    "Improves acoustics while creating calm work environments.",
            },
            {
                title: "Hospitality Spaces",
                description:
                    "Adds warmth to hotels, cafés, restaurants, and lounges.",
            },
            {
                title: "Residential Interiors",
                description: "Ideal for feature walls, hallways, and bedrooms.",
            },
            {
                title: "Public Buildings",
                description:
                    "Suitable for schools, libraries, and cultural spaces.",
            },
        ],

        installation: {
            phases: [
                {
                    title: "1. Surface Preparation",
                    steps: [
                        "Ensure wall or ceiling is clean, dry, and dust-free.",
                        "Repair uneven areas if necessary.",
                        "Mark layout lines before installation.",
                    ],
                },
                {
                    title: "2. Installation",
                    steps: [
                        "Apply strong mounting adhesive or construction glue.",
                        "Press panels firmly into position.",
                        "Use mechanical fixing for larger or ceiling installations.",
                    ],
                },
                {
                    title: "3. Finishing",
                    steps: [
                        "Trim edges if required.",
                        "Panels can remain untreated or optionally sealed.",
                    ],
                },
                {
                    title: "4. Maintenance",
                    steps: [
                        "Clean gently using dry or slightly damp cloth.",
                        "Avoid aggressive cleaning products.",
                    ],
                },
            ],
        },

        faq: [
            {
                question: "Are cork panels suitable for offices?",
                answer: "Yes. They are commonly used in offices to improve acoustics and create warmer atmospheres.",
            },
            {
                question: "Can they be used on ceilings?",
                answer: "Yes, provided appropriate adhesive or mechanical fixing is used.",
            },
            {
                question: "Do they require sealing?",
                answer: "No, sealing is optional depending on aesthetic preference and use case.",
            },
            {
                question: "Are they safe for children’s spaces?",
                answer: "Yes, cork is naturally low-emission and suitable for sensitive environments.",
            },
        ],
    },

    {
        id: "dynamic-cork-units",
        title: "Dynamic Cork Units",
        short: "Modular cork elements adaptable to walls, ceilings, and spatial design applications.",
        long: "Dynamic Cork Units are modular cork components designed for flexible architectural and interior applications. They can be arranged in multiple configurations to create textured surfaces, acoustic features, and spatial compositions. Their adaptability makes them ideal for designers and architects seeking expressive yet functional natural materials.",
        audience: "designer",
        category: "grid",
        chips: ["Modular", "Acoustic", "Customisable", "Sustainable"],
        img: `${units}`,
        link: "/products/dynamic-cork-units",
        images: [
            `${corkUnitImages.corkunit1}`,
            `${corkUnitImages.corkunit2}`,
            `${corkUnitImages.corkunit3}`,
            `${corkUnitImages.corkunit4}`,
        ],
        downloads: {
            catalog: "/cork-units-catalog.pdf",
            specsheet: "/cork-units-info-sheet.pdf",
        },

        specs: {
            system: { label: "System type", value: "Modular units" },
            application: {
                label: "Application",
                value: "Wall / Ceiling / Feature",
            },
            flexibility: { label: "Configuration", value: "Highly adaptable" },
            install: {
                label: "Installation",
                value: "Adhesive or mounting system",
            },
        },

        technicalSpecs: [
            {
                category: "Material",
                items: [
                    { key: "Composition", value: "Natural cork-based units" },
                    { key: "Finish", value: "Textured cork surface" },
                    { key: "Weight", value: "Lightweight and easy to handle" },
                ],
            },
            {
                category: "Performance",
                items: [
                    {
                        key: "Acoustic behaviour",
                        value: "Helps soften echo and improve room acoustics",
                    },
                    {
                        key: "Flexibility of use",
                        value: "Adaptable layouts for different projects",
                    },
                    {
                        key: "Durability",
                        value: "Suitable for long-term interior use",
                    },
                ],
            },
            {
                category: "Environmental",
                items: [
                    { key: "Material origin", value: "Renewable cork" },
                    {
                        key: "Reusability",
                        value: "Units can be removed and reused",
                    },
                    {
                        key: "Sustainability",
                        value: "Low-impact natural material",
                    },
                ],
            },
        ],

        keyBenefits: [
            {
                title: "Modular Design",
                description:
                    "Units can be rearranged to suit changing spatial needs.",
            },
            {
                title: "Acoustic Improvement",
                description:
                    "Helps reduce echo and improve sound comfort in interiors.",
            },
            {
                title: "Creative Freedom",
                description:
                    "Supports expressive surfaces, patterns, and architectural features.",
            },
            {
                title: "Lightweight System",
                description:
                    "Easy to install and adaptable to different environments.",
            },
            {
                title: "Natural Materiality",
                description:
                    "Brings warmth and tactile character through real cork texture.",
            },
            {
                title: "Sustainable Choice",
                description:
                    "Made from renewable cork with low environmental impact.",
            },
        ],

        applications: [
            {
                title: "Feature Walls",
                description: "Creates visually expressive interior surfaces.",
            },
            {
                title: "Acoustic Installations",
                description:
                    "Ideal for studios, collaboration zones, and learning spaces.",
            },
            {
                title: "Retail & Exhibitions",
                description:
                    "Suitable for branded environments and display concepts.",
            },
            {
                title: "Hospitality Interiors",
                description:
                    "Adds identity and warmth to public-facing spaces.",
            },
        ],

        installation: {
            phases: [
                {
                    title: "1. Planning",
                    steps: [
                        "Define layout and configuration before installation.",
                        "Dry-fit units to test visual composition.",
                    ],
                },
                {
                    title: "2. Installation",
                    steps: [
                        "Fix units using adhesive or mounting system depending on substrate.",
                        "Ensure consistent spacing and alignment.",
                    ],
                },
                {
                    title: "3. Adjustment",
                    steps: [
                        "Units can be repositioned during installation for visual refinement.",
                    ],
                },
                {
                    title: "4. Maintenance",
                    steps: [
                        "Clean gently using dry cloth.",
                        "Individual units can be replaced if damaged.",
                    ],
                },
            ],
        },

        faq: [
            {
                question: "Can the units be reconfigured later?",
                answer: "Yes. One of the key advantages is that layouts can be adapted over time.",
            },
            {
                question: "Are they suitable for commercial use?",
                answer: "Yes, they are appropriate for offices, hospitality, retail, and public interiors.",
            },
            {
                question: "Do they provide real acoustic benefit?",
                answer: "They help soften echo and improve perceived acoustic comfort, especially in reflective spaces.",
            },
            {
                question: "Are they difficult to install?",
                answer: "No. Installation is straightforward with proper planning and suitable adhesive or mounting system.",
            },
        ],
    },
];
