export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col justify-start items-center min-h-screen">
            {children}
        </div>
    );
}
