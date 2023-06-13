/* Homepage */

import Image from 'next/image'
import '../styles/homepage.css';
export const metadata = {
    title: 'Hotline Connector',
};
export default function Home() {
  return (
      <main>
        <section className="hero">
          <h1>
            Welcome to <span className="gradient-text">Hotline Connector</span>
          </h1>
          <p>We provide top-notch resources to help you in times of crisis.</p>
          <section className="top-resources" id="top-resources">
            <ul>
              <li>
                <a href="#">National Suicide Prevention Lifeline</a>
              </li>
              <li>
                <a href="#">Crisis Text Line</a>
              </li>
              <li>
                <a href="#">Domestic Violence Hotline</a>
              </li>
            </ul>
          </section>
        </section>
        <section className="testimonials">
          <h2>What People Are Saying</h2>
          <ul>
            <li>
              <p>
                "HotlineConnector saved my life. I was in a dark place and didn't know where to turn, but their resources
                helped me get the help I needed."
              </p>
              <p className="author">- Jane Doe</p>
            </li>
            <li>
              <p>
                "I can't thank HotlineConnector enough for the support they provided during a difficult time. Their website
                is easy to use and the resources are incredibly helpful."
              </p>
              <p className="author">- John Smith</p>
            </li>
          </ul>
        </section>
    </main>
  )
}
