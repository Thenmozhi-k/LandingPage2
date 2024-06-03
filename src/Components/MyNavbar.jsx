// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-scroll';
// import { FaBars, FaTimes } from 'react-icons/fa';

// const MyNavbar = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const [isSticky, setIsSticky] = useState(false);
//     const [activeMenu, setActiveMenu] = useState(null);

//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//     };

//     useEffect(() => {
//         const handleScroll = () => {
//             if (window.scrollY > 100) {
//                 setIsSticky(true);
//             } else {
//                 setIsSticky(false);
//             }
//         };

//         window.addEventListener('scroll', handleScroll);
//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);

//     const navItems = [
//         { link: "Home", path: "home" },
//         { link: "Menu", path: "service" },
//         { link: "Mobile-app", path: "about" },
//         { link: "Contact us", path: "product" },
//     ];

//     return (
//         <header className='w-full bg-white md:bg-transparent fixed top-0 left-0 right-0'>
//             <nav className={`py-4 lg:px-14 px-4 ${isSticky ? "sticky top-0 right-0 border-b bg-white duration-300" : ""}`}>
//                 <div className='flex justify-between items-center text-base gap-8'>
//                     {/* <a href="/" ><img className='h-16 w-48' src={assets.logo} alt="Logo" /></a> */}
//                     <ul className='md:flex space-x-12 hidden'>
//                         {navItems.map(({ link, path }) =>
//                             <li key={path}>
//                                 <Link
//                                     to={path}
//                                     spy={true}
//                                     smooth={true}
//                                     offset={-100}
//                                     className={`block text-gray-900 hover:text-amber-500 font-medium text-xl cursor-pointer ${activeMenu === path ? 'text-amber-500 font-bold' : ''}`}
//                                     onClick={() => { setIsMenuOpen(false); setActiveMenu(path); }}
//                                 >
//                                     {link}
//                                 </Link>
//                             </li>
//                         )}
//                     </ul>
//                     <div className='space-x-12 hidden lg:flex items-center'>
//                         <a href=""><img src={search} alt="" /></a>
//                         <a href=""><img src={basket} alt="" /></a>
//                         <button className='border border-rose-700 text-black font-semibold hover:bg-rose-700 py-2 px-4 rounded hover:text-white'>Sign in</button>
//                     </div>
//                     <div className='md:hidden'>
//                         <button className='text-neutralDGray focus:outline-none focus:text-gray-500' onClick={toggleMenu}>
//                             {isMenuOpen ? <FaTimes className='h-6 w-6' /> : <FaBars className='h-6 w-6' />}
//                         </button>
//                     </div>
//                 </div>

//                 <div className={`space-y-4 px-4 mt-16 py-7 bg-green-400 list-none ${isMenuOpen ? "block" : "hidden"}`}>
//                     {navItems.map(({ link, path }) =>
//                         <li key={path}>
//                             <Link
//                                 to={path}
//                                 spy={true}
//                                 smooth={true}
//                                 offset={-100}
//                                 className={`block text-base font-medium cursor-pointer text-white ${activeMenu === path ? 'text-amber-500 font-bold' : ''}`}
//                                 onClick={() => { setIsMenuOpen(false); setActiveMenu(path); }}
//                             >
//                                 {link}
//                             </Link>
//                         </li>
//                     )}
//                 </div>
//             </nav>
//         </header>
//     );
// }

// export default MyNavbar;
