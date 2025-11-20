export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col justify-start items-center m-0 p-0 w-[100vw] min-h-screen">
            {children}
        </div>
    );
}
