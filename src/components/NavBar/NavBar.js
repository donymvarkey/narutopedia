import React from 'react'
import Logo from '../../images/naruto_logo.png'

export default function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src={Logo} alt="Naruto" style={{width: "120px", height: "60px"}} />
                    </a>
                </div>
            </nav>
        </div>
    )
}
