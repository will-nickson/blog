import Navbar from "./Navbar";
import Logo from "./logo";

export default function Header() {
    return (
        <header className="flex mb-5 md:mb-10 items-center">
            <Logo />
            <Navbar />
        </header>
    );
}
