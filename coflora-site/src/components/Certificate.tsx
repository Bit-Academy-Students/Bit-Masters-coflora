import React, { type FC } from "react";

interface CertificateItem {
    id: number;
    title: string;
    issuingOrganization: string;
    credentialUrl?: string;
}

const mockCertificates: CertificateItem[] = [
    {
        id: 1,
        title: 'Forest Stewardship Council (FSC) Certified',
        issuingOrganization: 'FSC International',
        credentialUrl: 'https://cert.link/fsc-cork',
    },
    {
        id: 2,
        title: 'ISO 14001 Environmental Management',
        issuingOrganization: 'International Organization for Standardization',
    },
    {
        id: 3,
        title: 'PEFC Sustainable Forest Management',
        issuingOrganization: 'Programme for the Endorsement of Forest Certification',
        credentialUrl: 'https://cert.link/pefc-cork',
    },
];

const Certificate: React.FC = () => {
    const CertificateCard: FC<CertificateItem> = ({
        title,
        issuingOrganization,
        credentialUrl,
    }) => (
        <div className="bg-amber-50 p-6 rounded-lg shadow-md border-l-3 border-yellow-700 hover:shadow-xl transition duration-300">

            <h3 className="text-lg font-bold text-stone-800 mb-1 leading-snug">
                {title}
            </h3>

            <p className="text-sm text-lime-700 font-medium mb-2">
                {issuingOrganization}
            </p>

            {credentialUrl && (
                <a
                    href={credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-stone-700 hover:text-stone-900 hover:underline transition duration-200 flex items-center"
                >
                    View Certificate
                </a>
            )}
        </div>
    );


    return (
        <div className="bg-[url('./assets/images/img.webp')] max-w-6xl mx-auto p-10 bg-stone-100 rounded-2xl shadow-lg border border-stone-300">

            <div className="text-center mb-12">
                <svg className="w-12 h-12 text-yellow-800 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>

                <h2 className="text-3xl font-extrabold text-white">
                    Certified Sustainability
                </h2>
                <p className="text-white mt-2 text-lg font-bold">
                    Our cork products meet the highest standards for ecological management and quality.
                </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {mockCertificates.map((cert) => (
                    <CertificateCard key={cert.id} {...cert} />
                ))}
            </div>
        </div>
    );
};

export default Certificate;