import Link from 'next/link';
import '../styles/navbar.css';

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
    </nav>
    
  );
}

export default navbar;


