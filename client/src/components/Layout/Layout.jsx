import React from 'react'
import Footer from './Footer';
import Header from './Header';
import Top from './Top';
import '../../index.css'


const Layout = ({ children }) => {
    return (
        <div>
            <Top/>
            <Header/>
            <div className='feedback'>FEEDBACK</div>
            <main style={{ minHeight: "80vh" }}>
                {children}
            </main>
            <Footer />
        </div>
    )
}

Layout.defaultProps = {
  title: "PISTONs",
  description: "Front End App",
  keywords: "vite, react, node, express",
  author: "Roshan"
}

export default Layout