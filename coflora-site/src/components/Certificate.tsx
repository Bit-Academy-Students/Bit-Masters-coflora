import React from "react";
const Certificate: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto p-6 bg-yellow-700 shadow-md rounded-md">
            <h1 className="text-3xl font-bold mb-4">Certificate of Authenticity</h1>
            <p className="mb-2">This is to certify that the product you have purchased is authentic and meets our quality standards.</p>
            <p className="mb-2">Product Name: CoFlora Premium Cork</p>
            <p className="mb-2">Batch Number: CF-2024-001</p>
            <p className="mb-2">Date of Manufacture: June 15, 2024</p>
            <p className="mb-4">We guarantee that this product has been sourced and manufactured with the utmost care and attention to detail.</p>
            <p className="italic">Thank you for choosing CoFlora!</p>
        </div>
    );
};

export default Certificate;