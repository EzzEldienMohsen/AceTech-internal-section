import { logo } from './../assets/index';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React from 'react';

const Header = () => {
    React.useEffect(() => {
     AOS.init();
     AOS.refresh();},[])
  return (
    <div
      data-aos="fade-down"
      data-aos-duration="2000"
      className="w-ful flex justify-center items-center motion py-4 px-6 shadow-inner rounded-md"
    >
      <img src={logo} alt="logo" className="w-20 h-20 mr-10" />
      <h1 className="text-4xl">AceTech</h1>
    </div>
  );
}

export default Header