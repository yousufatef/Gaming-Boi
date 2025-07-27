import { GoHomeFill } from "react-icons/go";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { MdGames } from "react-icons/md";
import { MdOutlineFavorite } from "react-icons/md";
import { BsPeopleFill } from "react-icons/bs";
import Link from "next/link";
import NavLink from "./NavLink";

const SideBar = () => {
    const NAV_LINKS = [
        {
            href: "/",
            label: "Home",
            icon: <GoHomeFill />
        },
        {
            href: "/category",
            label: "Category",
            icon: <BiSolidCategoryAlt />
        },
        {
            href: "/games",
            label: "Games",
            icon: <MdGames />

        },
        {
            href: "/wishlist",
            label: "Wishlist",
            icon: <MdOutlineFavorite />

        },
        {
            href: "/friends",
            label: "Friends",
            icon: <BsPeopleFill />

        },

    ]
    return (
        <div className="hidden lg:flex col-span-2 bg-green-500">
            <nav className="flex flex-col gap-4 p-4">
                {NAV_LINKS.map((link) => (
                    <NavLink key={link.href} href={link.href} icon={link.icon} label={link.label} />
                ))}
            </nav>
        </div>
    )
}

export default SideBar