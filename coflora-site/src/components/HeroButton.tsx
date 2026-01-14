import { scrollToElement } from "../utilities";

function HeroButton({ scrollTo, text }: HeroButtonProps) {
    return (
        <button
            onClick={() => scrollToElement(scrollTo)}
            className="group inline-flex z-50 relative justify-center items-center bg-neutral-100 mt-8 sm:mt-4 mr-0 sm:mr-12 py-1 pr-14 pl-6 rounded-full w-50 h-[calc(48px+8px)] font-medium hover:cursor-pointer pointer-events-auto"
        >
            <span className="z-20 pr-2">{text}</span>
            <div className="inline-flex right-1 absolute justify-end items-center bg-neutral-300 rounded-full w-12 group-hover:w-[calc(100%-8px)] h-12 transition-[width]">
                <div className="flex justify-center items-center mt-1 mr-3.5 text-black">
                    <svg
                        className="w-5 h-5 animate-bounce"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </div>
            </div>
        </button>
    );
}

export default HeroButton;
