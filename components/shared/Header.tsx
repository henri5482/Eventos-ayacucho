import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import MobileNav from "./MobileNav"
import NavItems from "./NavItems"


const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36">
          <Image  src="/assets/images/eventosayacucho.webp" width={128} height={38} alt="evento"/>
        </Link>
        <SignedIn>
          <nav className="md:flex-between  hidden w-full max-w-sm">
            <NavItems/>
          </nav>
        </SignedIn>
      
      <div className="flex  w-80 justify-end">
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
          <MobileNav />
        </SignedIn>
          <SignedOut>
            <Button asChild className="rounded-full" size="lg">
              <Link href="/sign-in">Iniciar sesión</Link>
            </Button>
          </SignedOut>
      </div>
      </div>
    </header>
  )
}

export default Header
