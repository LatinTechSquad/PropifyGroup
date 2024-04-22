import Link from "next/link";
import Image from "next/image"

import { LinkType } from "@/types/links.type"

import logo from "@/assets/logo.svg"
import ProfileCicle from "@/assets/icons/Atomo-icono_profile_circle.png"


type NavbarProps = {
  links: LinkType[]
}

const Navbar = ({ links }: NavbarProps) => {
  return <>
    <nav className="flex mx-6	my-9 items-center justify-between bg-light-color px-8 py-2">
      <Image
        src={logo}
        width={162}
        height={116}
        alt="logo"
      />

      <div>
        <ul className="flex gap-6 text-primary-color font-bold">
          {links && links.map((link, index) =>
            <li className="text-xl" key={`menu-link-${index}`}>
              <Link href={link.href} className="p-2 w-full flex">{link.title}</Link>
            </li>
          )}
        </ul>
      </div>

      <div className="flex w-48 h-14 text-2xl">
        <Link href="/auth/login" className="flex items-center gap-1 bg-secondary-color font-semibold px-4 py-2 rounded-full">
        <Image src={ProfileCicle} width={44} height={44} alt="profile" /> Acceder
        </Link>
      </div>

    </nav>
  </>
}

export default Navbar