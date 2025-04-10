import React from "react";
// components/Footer.tsx

const Footer = () =>
{
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
                <p>&copy; {currentYear} Tuition Center. All rights reserved.</p>
                <p>Designed by Your Name</p>
            </div>
        </footer>
    );
}

export default Footer;