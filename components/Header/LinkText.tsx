import { openLink } from "@/utils/links";
import Link from "next/link";

interface LinkTextProps {
    href: string;
    text: string;
    isActive: boolean;
    setOpen?: (open: boolean) => void;
}


const LinkText = ({ href, text, isActive, setOpen }: LinkTextProps) => {

    const navLinkClass = () =>
        `py-2 px-3 rounded transition-colors ${isActive
            ? "text-blue-600 font-semibold"
            : "hover:bg-gray-100 text-gray-700"
        }`;


    return (
        <Link
            href={href}
            className={navLinkClass()}
            scroll={false}
            onClick={(e) => {
                openLink(e, "bedzevi")
                if (setOpen) {
                    setOpen(false);
                }
            }}
        >
            {text}
        </Link>
    )
}

export default LinkText