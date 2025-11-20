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
    href: string;
    text: string;
    classes?: string;
};

export interface Product {
    id: string;
    title: string;
    description: string;
    link: string;
    img: string;
    category: "furniture" | "light" | "grid" | "hero";
    chips: string[];
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
    products: Product[];
    delay: number;
};