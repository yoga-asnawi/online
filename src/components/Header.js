    import React from "react";
    import Typed from "react-typed";
    
    const Header = () => {
        return (
            <div className="header-wraper">
                <div className="main-info">
                    <h1> I Am interested In Work</h1>
                    <Typed 
                        className="typed-text"
                        strings={["Web Development", "IT Support", "Administrator", "CyberSecurity", "Penetration Testing"]}
                        typeSpeed={30}
                        backSpeed={60}
                        loop
                    />
                    <a href="./Navbar" className="btn-main-offer"> Contact Me</a>
                </div>
            </div>
        )
    }
    
    export default Header
    