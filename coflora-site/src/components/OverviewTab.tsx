// OverviewTab.tsx
import React from "react";

interface OverviewTabProps {
    title: string;
    icon: React.ReactNode;
    content: string;
}

function OverviewTab({ title, icon, content }: OverviewTabProps) {
    return (
        <div className="bg-gray-50 p-6 border rounded-xl">
            <div className="flex items-center mb-4">
                <div className="bg-gray-200 mr-3 p-2 rounded-full">{icon}</div>
                <h3 className="font-bold text-gray-800 text-xl">{title}</h3>
            </div>
            <p className="text-gray-700 text-base leading-relaxed">{content}</p>
        </div>
    );
}

export default OverviewTab;
