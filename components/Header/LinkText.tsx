import Link from "next/link";
import { usePathname } from "next/navigation";

interface LinkTextProps {
    href: string;
    text: string;
    setOpen?: (open: boolean) => void;
}


const LinkText = ({ href, text, setOpen }: LinkTextProps) => {
    const pathname = usePathname();
    const isActive = pathname === `/${href}` || (pathname === "/" && href === "");

    const navLinkClass = () =>
        `py-2 px-3 rounded transition-colors ${isActive
            ? "text-orange-600 font-semibold"
            : "hover:bg-gray-100 text-gray-700"
        }`;


    return (
        <Link
            href={`/${href}`}
            className={navLinkClass()}
            scroll={false}
            onClick={() => {
                if (setOpen) setOpen(false); // Close mobile menu if setOpen is provided
            }}
            aria-current={isActive ? "page" : undefined}
        >
            {text}
        </Link>
    )
}

export default LinkText