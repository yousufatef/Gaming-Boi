'use client'

import { usePathname } from 'next/navigation'
import Link from "next/link"
import React, { ReactElement } from 'react';

interface NavLinkProps {
    href: string;
    icon: ReactElement;
    label: string;
}

const NavLink = ({ href, icon, label }: NavLinkProps) => {
    const pathname = usePathname();
    const isActive = pathname === href;
    const activeClass = isActive ? 'text-rose-400' : 'text-white';

    return (
        <Link
            href={href}
            className={`flex items-center gap-2 ${activeClass} duration-150 hover:text-rose-400 p-2`}
        >
            {React.cloneElement(icon, { className: "w-6 h-6" })}
            <span>{label}</span>
        </Link>
    )
}

export default NavLink