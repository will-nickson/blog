export default function NotFound() {
    return (
        <main className="h-screen flex items-center justify-center">
            <h2 className="flex items-center">
                <span className="text-2xl tracking-wide">404</span>{" "}
                <div className="mx-4 h-14 w-px bg-gray-300"></div>
                <span className="text-sm">This page could not be found.</span>
            </h2>
        </main>
    );
}
