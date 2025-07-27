import { GoHomeFill } from "react-icons/go";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { MdGames } from "react-icons/md";
import { MdOutlineFavorite } from "react-icons/md";
import { BsPeopleFill } from "react-icons/bs";
import NavLink from "./NavLink";
import Logo from "../default/Logo";

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
        <div className="col-span-2">
            <nav className="py-5 px-10  h-screen sticky inset-0 flex flex-col gap-4 items-start bg-black/30 text-gray-50">
                <Logo />
                {NAV_LINKS.map((link) => (
                    <NavLink key={link.href} href={link.href} icon={link.icon} label={link.label} />
                ))}
            </nav>
        </div>
    )
}

export default SideBar