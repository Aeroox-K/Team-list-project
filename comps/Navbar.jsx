import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return (  
        <nav>
            <div className="logo">
            <Image src="/dojo-logo.png" width={128} height={77} />
        
        
        </div>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/exclusives">Exclusives Listing</Link>
        </nav>
    );
}
 
export default Navbar;