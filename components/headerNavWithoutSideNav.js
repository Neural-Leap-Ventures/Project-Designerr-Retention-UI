import Link from 'next/link';
import { useEffect } from 'react';
import logout from '../utils/logout';

export default function HeaderNavWithoutSideNav() {

    // Function to handle click outside dropdown
    const handleClickOutside = (event) => {
        const dropdown = document.getElementById("userDropdownContainer");
        if (dropdown && !dropdown.contains(event.target)) {
            document.getElementById("userDropdownList").classList.remove("w--open");
        }
    };

    useEffect(() => {
        // Add event listener when component mounts
        document.addEventListener('click', handleClickOutside);

        // Remove event listener when component unmounts
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []); // Empty dependency array ensures the effect runs only once when the component mounts

    // Function to toggle dropdown
    const userDropdownToggle = () => {
        document.getElementById("userDropdownList").classList.toggle("w--open");
    };


    return (
        <div className="header-strip">
            <div className="_w-90">
                <div data-animation="default" data-collapse="none" data-duration={400} data-easing="ease" data-easing2="ease" role="banner" className="navbar w-nav">
                    <div className="nav-container w-container">
                        <div className="nav-flex">
                            <div className="d-flex-gap-20">
                                <a href="#" className="brand w-nav-brand"><img src="images/logo1.png" loading="lazy" alt="" /></a>
                            </div>
                            <nav role="navigation" className="nav-menu w-nav-menu">
                                <div data-hover="false" data-delay={0} className="w-dropdown" id="userDropdownContainer">
                                    <div className="dropdown-toggle w-dropdown-toggle" id='userDropdown' onClick={userDropdownToggle}>
                                        <div className="w-icon-dropdown-toggle" />
                                        <div className="user-dropdown-text-wrapper"><img src="images/user-dp.png" loading="lazy" alt="" className="user-dp" />
                                            <div>John Doe</div>
                                        </div>
                                    </div>
                                    <nav className="w-dropdown-list" id='userDropdownList'>
                                        <a href="#" onClick={logout} className="w-dropdown-link">Logout</a>
                                    </nav>
                                </div>
                            </nav>
                            <div className="w-nav-button">
                                <div className="w-icon-nav-menu" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}