'use client'

import { usePathname } from 'next/navigation'
import Link from "next/link"

interface NavLinkProps {
    href: string;
    icon: React.ReactNode;
    label: string;
}

const NavLink = ({ href, icon, label }: NavLinkProps) => {
    const pathname = usePathname();
    const isActive = pathname === href;
    const activeClass = isActive ? 'text-yellow-300' : 'text-white';

    return (
        <Link
            href={href}
            className={`flex items-center gap-2 ${activeClass} hover:text-yellow-300`}
        >
            {icon}
            <span>{label}</span>
        </Link>
    )
}

export default NavLink