import LogoHeader from'../assets/images/LogoHeader.png'

import { CiSearch } from "react-icons/ci";
import { BiMenu } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { IoBagHandle } from "react-icons/io5";
function Header() {
  return (
    <div className="bg-[#212121] flex justify-between">
      <div className='flex md:hidden'>
        <BiMenu color='White' size='1.875rem' className=' cursor-pointer mt-2 ml-2'/>
        <CiSearch color='white' size='1.875rem' className='cursor-pointer mt-2 ml-2'/>  
      </div>
        <img src={LogoHeader} className='w-[10%]' />
        
        <ul className='hidden md:flex items-center justify-between text-white text-xs uppercase font-bold'>
            <li className='px-3 py-12 cursor-pointer hover:bg-[#3c3c3c] left-0'>Sale</li>
            <li className='px-3 py-12 cursor-pointer hover:bg-[#3c3c3c]'>sản phẩm</li>
            <li className='px-3 py-12 cursor-pointer  hover:bg-[#3c3c3c]'>đồ thể thao</li>
            <li className='px-3 py-12 cursor-pointer  hover:bg-[#3c3c3c]'>mặc hằng ngày</li>
            <li className='px-3 py-12 cursor-pointer  hover:bg-[#3c3c3c]'>nước hoa</li>
            <li className='px-3 py-12 cursor-pointer  hover:bg-[#3c3c3c]'>đồ lót</li>
            <li className='px-3 py-12 cursor-pointer  hover:bg-[#3c3c3c]'>sản xuất riêng</li>
            <li className='px-3 py-12 cursor-pointer  hover:bg-[#3c3c3c]'>take care</li>
        </ul>
        <div className='flex justify-between items-center mr-2'>
            <div className='hidden md:flex items-center relative'>
                <CiSearch color='gray' size='1.875rem' className='absolute ml-2'/>  
                <input icon={<CiSearch/>} type="text" className='pr-2 pl-10 py-2 m-2 border-none rounded-2xl'/>
            </div>
            <FaUser color='white' size='1.875rem' className='mx-2'/>
            <IoBagHandle color='white' size='1.875rem' className='mx-3'/>
        </div>
    </div>
  )
}

export default Header