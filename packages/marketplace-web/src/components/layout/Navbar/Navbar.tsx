'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { BiSolidUser } from 'react-icons/bi';

import { LinkType } from '@/types/links.type';
import logo from '@/assets/logo.svg';

type NavbarProps = {
	links: LinkType[];
};

const Navbar = ({ links }: NavbarProps) => {
	const pathname = usePathname();

	return (
		<nav className="flex items-center justify-between bg-light-color px-8 py-2">
			<Image src={logo} width={70} height={70} alt="logo" />

			<div>
				<ul className="flex gap-6 text-primary-color font-bold">
					{links &&
						links.map((link, index) => (
							<li key={`menu-link-${index}`}>
								<Link
									href={link.href}
									className={`p-2 w-full flex ${pathname === link.href ? 'border-b-2 border-primary-color' : ''}`}
								>
									{link.title}
								</Link>
							</li>
						))}
				</ul>
			</div>

			<div>
				<Link
					href="/auth/login"
					className="flex items-center gap-1 bg-secondary-color font-semibold px-4 py-2 rounded-2xl"
				>
					<BiSolidUser /> Iniciar sesión
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
