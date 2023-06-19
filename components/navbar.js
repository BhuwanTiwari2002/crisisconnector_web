import Link from 'next/link';
import '../styles/navbar.css';
import Image from 'next/image'
import HotlineLogo from '../public/assets/crisisconnector_logo.png';

function navbar() {
  return (
    <nav role="navigation">
        <div id="menuToggle">
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <ul id="menu">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/hotlines">Hotlines</Link></li>
                <li><Link href="/resources">Resources</Link></li>
            </ul>
        </div>
        <div class="logo-container">
                <Image src={HotlineLogo} alt="Hotline Logo" width={75} height={75} />
        </div>
    </nav>
    
  );
}

export default navbar;


