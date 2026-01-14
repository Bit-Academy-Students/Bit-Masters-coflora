import React from "react";

interface TabContentProps {
    title: string;
    icon: React.ReactNode;
    items: any[];
    layout: "grid" | "steps" | "faq";
    cardClasses?: string;
    itemClasses?: string;
}

function TabContent({
    title,
    icon,
    items,
    layout,
    cardClasses = "",
    itemClasses = "",
}: TabContentProps) {
    const getContainerLayout = () => {
        switch (layout) {
            case "grid":
                return "gap-4 grid grid-cols-1 md:grid-cols-2";
            case "steps":
            case "faq":
                return "space-y-4";
            default:
                return "space-y-4";
        }
    };

    const getCardClasses = () => {
        const baseClasses =
            "bg-white shadow-md p-4 rounded-lg transition-shadow duration-300";
        const layoutClasses = {
            grid: "hover:shadow-lg border-gray-300 border-l-4",
            steps: "border-gray-400 border-l-4",
            faq: "hover:shadow-lg border",
        };
        return `${baseClasses} ${layoutClasses[layout]} ${cardClasses}`;
    };

    return (
        <div className="bg-gray-50 p-6 border rounded-xl">
            {/* Header */}
            <div className="flex items-center mb-6">
                <div className="bg-gray-200 mr-3 p-2 rounded-full">{icon}</div>
                <h3 className="font-bold text-gray-800 text-xl">{title}</h3>
            </div>

            {/* Unified content layout */}
            <div className={getContainerLayout()}>
                {items.map((item, index) => (
                    <div key={index} className={getCardClasses()}>
                        {/* Title/Header section */}
                        <div className="flex items-center mb-3">
                            {/* Conditional prefix based on layout */}
                            {layout === "steps" && (
                                <div className="flex justify-center items-center bg-gray-200 mr-3 rounded-full w-6 h-6 font-bold text-gray-800 text-sm">
                                    {index + 1}
                                </div>
                            )}
                            {layout === "faq" && (
                                <span className="flex justify-center items-center bg-gray-200 mr-2 rounded-full w-5 h-5 text-gray-800 text-xs">
                                    Q
                                </span>
                            )}

                            {/* Title */}
                            <h4
                                className={`font-bold text-gray-800 text-base ${itemClasses}`}
                            >
                                {layout === "grid"
                                    ? item.title
                                    : layout === "steps"
                                    ? item.title
                                    : layout === "faq"
                                    ? item.question
                                    : item.title}
                            </h4>
                        </div>

                        {/* Content section */}
                        <div className={layout === "faq" ? "ml-7" : ""}>
                            {layout === "grid" && (
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            )}

                            {layout === "steps" && (
                                <ul className="space-y-2">
                                    {item.steps.map(
                                        (step: string, stepIndex: number) => (
                                            <li
                                                key={stepIndex}
                                                className="flex items-start"
                                            >
                                                <span className="mr-2 text-gray-500 text-sm">
                                                    •
                                                </span>
                                                <span className="text-gray-700 text-sm">
                                                    {step}
                                                </span>
                                            </li>
                                        )
                                    )}
                                </ul>
                            )}

                            {layout === "faq" && (
                                <p className="text-gray-700 text-sm leading-relaxed">
                                    {item.answer}
                                </p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TabContent;
