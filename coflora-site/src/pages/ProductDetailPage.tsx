import { useParams } from "react-router-dom";
import { PRODUCTS } from "../products";
import ProductCarousel from "../components/ProductCarousel";
import Button from "../components/Button";
import TabContent from "../components/TabContent";
import OverviewTab from "../components/OverviewTab";
import TechnicalSpecsTab from "../components/TechnicalSpecsTab";
import { Tab, Tabs, Box } from "@mui/material";
import { useState } from "react";

const BootstrapIcons = {
    FileText: ({ size = 16 }: { size?: number }) => (
        <svg width={size} height={size} fill="currentColor" viewBox="0 0 16 16">
            <path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z" />
            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />
        </svg>
    ),
    Building: ({ size = 16 }: { size?: number }) => (
        <svg width={size} height={size} fill="currentColor" viewBox="0 0 16 16">
            <path d="M4 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1ZM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Z" />
            <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V1Zm11 0H3v14h3v-2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V15h3V1Z" />
        </svg>
    ),
    Gear: ({ size = 16 }: { size?: number }) => (
        <svg width={size} height={size} fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
            <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
        </svg>
    ),
    Tools: ({ size = 16 }: { size?: number }) => (
        <svg width={size} height={size} fill="currentColor" viewBox="0 0 16 16">
            <path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293L2.616 6.5l-.708-.708a1 1 0 0 0-.707-.293H.643a1 1 0 0 0-.815.419L0 7.5l1 1 .471-.471.845.845.471.471 1-1L1.529 5.987a1 1 0 0 0 .293-.707l1.177-1.177a1 1 0 0 0 .293-.707V.643a1 1 0 0 0-.419-.815L1 0Zm9.646.293a1 1 0 0 1 .707.293l1.293 1.293a1 1 0 0 1 .293.707V3a1 1 0 0 1-.293.707L10.5 5.854 8.646 4l2.146-2.147A1 1 0 0 1 11.5 1.5V1a1 1 0 0 1 .146-.707ZM5.293 6.793a1 1 0 0 1 1.414 0L8 8.086l1.293-1.293a1 1 0 1 1 1.414 1.414L9.414 9.5l1.293 1.293a1 1 0 0 1-1.414 1.414L8 10.914l-1.293 1.293a1 1 0 1 1-1.414-1.414L6.586 9.5 5.293 8.207a1 1 0 0 1 0-1.414Z" />
        </svg>
    ),
    QuestionCircle: ({ size = 16 }: { size?: number }) => (
        <svg width={size} height={size} fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
        </svg>
    ),
};

function ProductDetailpage() {
    const { productId } = useParams<{ productId: string }>();

    const allProducts = [...PRODUCTS];
    const product = allProducts.find((product) => product.id === productId);

    const [value, setValue] = useState(0);
    const handleChange = (_: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const getTabsConfig = () => {
        const tabs = [
            {
                label: "Overview",
                show: !!product?.long,
                icon: <BootstrapIcons.FileText size={18} />,
                content: () => (
                    <OverviewTab
                        title="Product Overview"
                        icon={<BootstrapIcons.FileText size={20} />}
                        content={product?.long || ""}
                    />
                ),
            },
            {
                label: "Applications",
                show: !!product?.applications,
                icon: <BootstrapIcons.Building size={18} />,
                content: () => (
                    <TabContent
                        title="Applications"
                        icon={<BootstrapIcons.Building size={20} />}
                        items={product?.applications || []}
                        layout="grid"
                    />
                ),
            },
            {
                label: "Technical Specs",
                show: !!product?.technicalSpecs,
                icon: <BootstrapIcons.Gear size={18} />,
                content: () => (
                    <TechnicalSpecsTab
                        title="Technical Specifications"
                        icon={<BootstrapIcons.Gear size={20} />}
                        specifications={product?.technicalSpecs || []}
                    />
                ),
            },
            {
                label: "Installation",
                show: !!product?.installation,
                icon: <BootstrapIcons.Tools size={18} />,
                content: () => (
                    <TabContent
                        title="Installation Guide"
                        icon={<BootstrapIcons.Tools size={20} />}
                        items={product?.installation?.phases || []}
                        layout="steps"
                    />
                ),
            },
            {
                label: "FAQ",
                show: !!product?.faq,
                icon: <BootstrapIcons.QuestionCircle size={18} />,
                content: () => (
                    <TabContent
                        title="Frequently Asked Questions"
                        icon={<BootstrapIcons.QuestionCircle size={20} />}
                        items={product?.faq || []}
                        layout="faq"
                    />
                ),
            },
        ];

        return tabs.filter((tab) => tab.show);
    };

    const visibleTabs = getTabsConfig();

    if (!product) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="text-center">
                    <h1 className="mb-4 font-bold text-gray-800 text-4xl">
                        Product Not Found
                    </h1>
                    <p className="text-gray-600">
                        The product you're looking for doesn't exist.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col justify-center items-center px-8 sm:px-8 xl:px-12 py-8 sm:py-8 xl:py-12 w-full h-auto">
            <div className="flex xl:flex-row flex-col gap-8 mb-12 w-full text-center">
                <ProductCarousel
                    products={product.images ?? []}
                    delay={3000}
                    outerDivClass="xl:h-[60vh] xl:w-[60%] w-full"
                    slidesPerView={1}
                    rounded={"rounded-xl"}
                />

                <div className="flex flex-col card-border rounded-2xl w-full xl:w-[40%] h-auto xl:h-[60vh]">
                    <div className="flex flex-col justify-center rounded-2xl w-full h-full card-bg">
                        <div className="flex flex-col justify-center bg-neutral-100 p-4 border-b rounded-t-2xl h-full">
                            <h2 className="mb-2 font-bold text-3xl">
                                {product.title}
                            </h2>
                            <p className="text-gray-700">{product.short}</p>
                        </div>

                        <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 mt-6 px-6">
                            {product.keyBenefits.map((benefit, index) => (
                                <div
                                    className="flex flex-col bg-neutral-100 p-2 card-border rounded-xl w-full"
                                    key={index}
                                >
                                    <p className="font-medium">
                                        {benefit.title}
                                    </p>
                                    <p className="text-gray-600 text-sm">
                                        {benefit.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 px-6 py-2 border-t">
                            {product.specs && (
                                <>
                                    {Object.entries(product.specs).map(
                                        ([key, spec]) => (
                                            <div
                                                key={key}
                                                className="flex justify-between py-1 text-sm"
                                            >
                                                <span className="text-gray-600">
                                                    {spec.label}
                                                </span>
                                                <span className="font-medium">
                                                    {spec.value} {spec.unit}
                                                </span>
                                            </div>
                                        ),
                                    )}
                                </>
                            )}
                        </div>

                        <div className="flex sm:flex-row flex-col justify-around items-center gap-3 sm:gap-0 px-6 py-3 border-t">
                            <Button
                                text="Download Catalog"
                                buttonClasses="sm:h-[32px] h-[48px] min-w-[220px]"
                                height="sm:h-auto h-12"
                                href={product.downloads?.catalog}
                            />

                            <Button
                                text="Download Specsheet"
                                buttonClasses="sm:h-[32px] h-[48px] min-w-[220px]"
                                height="sm:h-auto h-12"
                                href={product.downloads?.specsheet}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="mb-8 sm:mb-24 w-full h-full">
                {visibleTabs.length > 0 && (
                    <div className="bg-white shadow-xl border rounded-xl w-full h-full overflow-hidden">
                        <Box sx={{ width: "100%" }}>
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                variant="scrollable"
                                scrollButtons="auto"
                                sx={{
                                    background:
                                        "linear-gradient(135deg, #f8fafc, #f1f5f9)",
                                    borderBottom: "1px solid #e2e8f0",
                                    "& .MuiTab-root": {
                                        fontWeight: "600",
                                        fontSize: "0.9rem",
                                        color: "#475569",
                                        textTransform: "none",
                                        "&.Mui-selected": {
                                            color: "#1e293b",
                                        },
                                        "&:hover": {
                                            color: "#334155",
                                        },
                                    },
                                    "& .MuiTabs-indicator": {
                                        backgroundColor: "#64748b",
                                        height: 3,
                                    },
                                }}
                            >
                                {visibleTabs.map((tab, index) => (
                                    <Tab
                                        key={index}
                                        label={
                                            <div className="flex items-center gap-2">
                                                {tab.icon}
                                                <span>{tab.label}</span>
                                            </div>
                                        }
                                    />
                                ))}
                            </Tabs>

                            <Box sx={{ p: 3 }}>
                                {visibleTabs[value]?.content()}
                            </Box>
                        </Box>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProductDetailpage;
