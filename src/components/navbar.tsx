import { useState } from 'react';
import Image from 'next/image';
import { Icons } from "@/components/ui/icons";
import Link from 'next/link';

const darkmode = () => {
    const body = document.body;
    
    if (body.classList.contains("ctp-mocha")) {
        body.classList.remove("ctp-mocha");
        body.classList.add("ctp-latte");
    } else if (body.classList.contains("ctp-latte")) {
        body.classList.remove("ctp-latte");
        body.classList.add("ctp-mocha");
    } else {
        body.classList.add("ctp-mocha");
    }
};


const Navbar = () => {
    return (
        <nav className='flex justify-center items-center fixed top-10 w-full h-11 mb-10 bg-ctp-crust shadow-md z-50 shadow-ctp-base'>
            <Image src={"/assets/logo.png"} width={100} height={100} alt='logo' quality={100} className='flex-shrink-0 rounded-full'></Image>
            <Link href={"https://github.com/zvbt/animeclient"} target='_blank' className='absolute top-1/2 mr-10 right-0 transform -translate-y-1/2 h-4 w-4'><Icons.github className='fill-current text-ctp-text'/></Link>
            <Link href={""} className='absolute top-1/2 mr-5 right-0 transform -translate-y-1/2 h-4 w-4' onClick={darkmode}><Icons.moon className='fill-current text-ctp-text'/></Link>
        </nav>

    );
};


export default Navbar;
