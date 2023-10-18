import Posts from "./components/Posts";

export default function Home() {
    return (
        <main className="px-6 mx-auto">
            <p className="mt-12 mb-12 text-3xl text-center">Hello and Welcome 👋</p>
            <p className="mt-12 mb-12 text-2xl text-center">{"I'm Will"}</p>
            <Posts />
        </main>
    );
}
