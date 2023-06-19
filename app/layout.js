/* Entry point of the project */
import '../styles/globals.css';
import { Inter } from 'next/font/google'
import Navbar from '../components/navbar'; // adjust the path as necessary


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hotline Connector',
  description: 'An webapp made for the community',
}

export default function RootLayout({ children }) {
  return (
    <div>
      <Navbar />
      <div className={inter.className}>{children}</div>
    </div>
  )
}
