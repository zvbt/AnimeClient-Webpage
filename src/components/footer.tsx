{/* <img src="/assets/svg/vim.svg" className='absolute top-1/2 mr-16 right-0 transform -translate-y-1/2 h-4 w-4'/>
<Icons.heart className='fill-current text-ctp-red absolute top-1/2 mr-28 right-0 transform -translate-y-1/2 h-4 w-4'/> */}
import Image from 'next/image';
import { Icons } from "@/components/ui/icons";
import Link from 'next/link';


const Footer = () => {
    return (
        <nav className='flex justify-center items-center fixed bottom-0 mb-5 w-full h-11 bg-ctp-crust z-50 text-ctp-text'>
            Made with <Icons.heart className='fill-current text-ctp-red h-5 w-5 mx-1'/>and<img src="/assets/svg/vim.svg" className='h-5 w-5 mx-1'/>by <a href="https://github.com/zvbt" className='mx-1 text-ctp-blue'>zvbt</a>
        </nav>

    );
};


export default Footer;
