import { FaFacebook, FaTwitterSquare, FaInstagram } from "react-icons/fa";
// import { IoLogoGithub } from "react-icons/io";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-[#F8FAFC] text-white pt-10 mt-40 overflow-x-hidden">
            {/* Newsletter  -- will be implemented later */}

            {/* <div className="max-w-6xl mx-auto py-14 px-20 mt-20 w-[80%] bg-[var(--primary-color)] rounded-xl">
                <h2 className="text-2xl font-semibold text-center mb-6">
                    Subscribe to our newsletter
                </h2>
                <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                    <input
                        type="text"
                        placeholder="First name"
                        className="px-4 py-2 rounded md:w-60 text-black bg-amber-50 w-[12rem] lg:w-60 xl:w-60"
                    />
                    <input
                        type="email"
                        placeholder="Email address"
                        className="px-4 py-2 rounded md:w-60 text-black bg-amber-50 w-[12rem] lg:w-60 xl:w-60"
                    />
                    <button className="bg-[var(--dark-primary)] hover:bg-gray-800 text-white px-6 py-2 rounded cursor-pointer w-[12rem] lg:w-60 xl:w-60">
                        Subscribe Us
                    </button>
                </div>
            </div> */}

            {/* Footer Bottom */}
            <div className="bg-[#F8FAFC] text-[#52525B] pb-6 mt-10 md:text-lg">
                <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-center">
                    {/* Logo */}
                    <div className="flex flex-col items-center md:items-start">
                        <div className="flex justify-center md:justify-start items-center space-x-2 mb-2">
                            <img src="/logo.svg" alt="Accurack Logo" className="w-12" />
                            <img src="/logoName.svg" alt="Accurack Logo" className="w-32" />
                        </div>
                        <p className="text-sm md:text-lg md:text-left">Accurack gives you the best inventory software solutions</p>
                        <div className="flex justify-center md:justify-start space-x-3 mt-10 cursor-pointer">
                            <FaFacebook size={32} />
                            <FaTwitterSquare size={32} />
                            <Link to="https://www.instagram.com/accurackai?igsh=MW9lc2x4MWgxZmY5NA=="><FaInstagram size={32} /></Link>
                        </div>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="font-semibold mb-7 text-[var(--primary-color)] text-center md:text-left">Company</h3>
                        <ul className="space-y-2">
                            <li className="flex flex-col items-center md:items-start"><Link to="#">About</Link></li>
                            <li className="flex flex-col items-center md:items-start"><Link to="#">Features</Link></li>
                            <li className="flex flex-col items-center md:items-start"><Link to="#">Works</Link></li>
                            <li className="flex flex-col items-center md:items-start"><Link to="#">Career</Link></li>
                        </ul>
                    </div>

                    {/* Help */}
                    <div>
                        <h3 className="font-semibold mb-7 text-[var(--primary-color)] text-center md:text-left">Help</h3>
                        <ul className="space-y-2">
                            <li className="flex flex-col items-center md:items-start"><Link to="#">Customer Support</Link></li>
                            <li className="flex flex-col items-center md:items-start"><a href="/terms" target="_blank">Terms & Conditions</a></li>
                            <li className="flex flex-col items-center md:items-start"><a href="/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="text-center md:text-left">
                        <h3 className="font-semibold mb-7 text-[var(--primary-color)]">Contact</h3>
                        <ul className="space-y-2">
                            <li className="flex flex-col items-center md:items-start">
                                2055 Craigshire Rd,<br />Suite 410, St. Louis, MO 63146
                            </li>
                            <li className="flex flex-col items-center md:items-start">
                                314-970-2115
                            </li>
                            <li className="flex flex-col items-center md:items-start">
                                info@accurack.ai
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom copyright */}
                <div className="text-center text-sm border-t border-gray-200 pt-4 mt-24 flex flex-col gap-1.5">
                    <span>© Copyright 2022, All Rights Reserved by Accurack</span>
                    <div className="flex justify-center items-center gap-7">
                        <a href="/terms" target="_blank">Terms & Conditions</a>
                        <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
