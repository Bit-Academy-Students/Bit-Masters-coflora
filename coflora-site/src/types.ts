export type HomePageCardProps = {
    name: string;
    img: string;
    text: string;
};

export type IconProps = {
    size: number;
    classes?: string;
};

export type BannerProps = {
    reverse?: boolean;
};

export type ButtonProps = {
    href?: string;
    text: string;
    buttonClasses?: string;
    height: string;
};

export type ProductAudience = "designer" | "contractor" | "both";

export interface SpecItem {
    label: string;
    value: string | number;
    unit?: string;
    testStandard?: string;
}

export interface ProductSpec {
    thickness?: SpecItem;
    coverage?: SpecItem;
    lambda?: SpecItem;
    acoustic?: SpecItem;
    curing?: SpecItem;
    density?: SpecItem;
    fireRating?: SpecItem;
    rollSize?: SpecItem;
    weight?: SpecItem;
    durability?: SpecItem;
    material?: SpecItem;
    indoorOutdoor?: SpecItem;
    width?: SpecItem;
    length?: SpecItem;
    backing?: SpecItem;
    use?: SpecItem;
    benefit?: SpecItem;
    format?: SpecItem;
    install?: {
        label: string;
        value: string;
    };
    formats?: {
        label: string;
        value: string;
    };
    system?: {
        label: string;
        value: string;
    };
    application?: {
        label: string;
        value: string;
    };
    flexibility?: {
        label: string;
        value: string;
    };
}

export interface Product {
    id: string;
    sku?: string;
    title: string;
    short: string;
    long?: string;
    audience: ProductAudience;
    category: "hero" | "support" | "gallery" | "grid";
    chips: string[];
    img: string;
    images?: string[];
    gallery?: string[];
    colors?: { id: string; name: string; hex?: string; sampleImg?: string }[];
    specs?: ProductSpec;
    technicalSpecs: {
        category: string;
        items: {
            key: string;
            value: string;
            standard?: string;
        }[];
    }[];
    applications?: { title: string; description: string }[];
    packaging?: { unit: string; quantity: number; note?: string }[];
    leadTime?: string;
    downloads?: {
        title: string;
        url: string;
        size?: string;
        gated?: boolean;
    }[];
    related?: string[]; // related product ids
    price?: { currency: string; range?: string }; // optional
    link: string; // product page url
    keyBenefits: { title: string; description: string }[];
    installation: {
        phases: {
            title: string;
            steps: string[];
        }[];
    };
    faq: {
        question: string;
        answer: string;
    }[];
}

export type ProductCardProps = {
    link: string;
    img: string;
    title: string;
    description: string;
    chips: string[];
    outerDivClass?: string;
    imgClass?: string;
    linkClass?: string;
};

export type ProductCarouselProps = {
    products: Product[] | string[];
    delay: number;
    outerDivClass: string;
    slidesPerView: number;
    rounded?: string;
};

export type CarouselProps = {
    title?: string;
    element?: React.ReactNode;
    images: string[];
    classesOuterDiv?: string;
};

export type HeroButtonProps = {
    scrollTo: string;
    text: string;
};