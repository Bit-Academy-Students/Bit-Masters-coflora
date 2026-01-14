// TechnicalSpecsTab.tsx
import React from "react";

interface TechnicalSpec {
    key: string;
    value: string;
    standard?: string;
}

interface SpecCategory {
    category: string;
    items: TechnicalSpec[];
}

interface TechnicalSpecsTabProps {
    title: string;
    icon: React.ReactNode;
    specifications: SpecCategory[];
}

function TechnicalSpecsTab({
    title,
    icon,
    specifications,
}: TechnicalSpecsTabProps) {
    return (
        <div className="bg-gray-50 p-6 border rounded-xl">
            <div className="flex items-center mb-6">
                <div className="bg-gray-200 mr-3 p-2 rounded-full">{icon}</div>
                <h3 className="font-bold text-gray-800 text-xl">{title}</h3>
            </div>

            <div className="space-y-6">
                {specifications.map((category, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-md p-4 border rounded-lg"
                    >
                        <h4 className="mb-4 pb-2 border-gray-200 border-b-2 font-bold text-gray-800 text-base">
                            {category.category}
                        </h4>
                        <div className="gap-3 grid grid-cols-1">
                            {category.items.map((item, itemIndex) => (
                                <div
                                    key={itemIndex}
                                    className="flex justify-between items-center bg-gray-50 hover:bg-gray-100 px-3 py-2 rounded-md transition-colors"
                                >
                                    <span className="font-semibold text-gray-700 text-sm">
                                        {item.key}
                                    </span>
                                    <div className="text-right">
                                        <span className="font-bold text-gray-800">
                                            {item.value}
                                        </span>
                                        {item.standard && (
                                            <div className="text-gray-500 text-xs">
                                                {item.standard}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TechnicalSpecsTab;
