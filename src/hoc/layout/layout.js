import React from 'react'
import Navbar from '../../components/Nabbar/Navbar'
import Footer from '../../components/Footer/Footer'

function layout({ children }) {
    return (
        <div>
            <Navbar />
            <main style={{ width: '90%', margin: '0 auto' }}>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default layout
