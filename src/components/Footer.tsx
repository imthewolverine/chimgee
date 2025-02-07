import React from 'react';
import Link from 'next/link'

const Footer: React.FC = () => {
    return (
        <div id='contactus ' className='helvetica'>
            <div className='bg-gray-800 text-white p-6 sm:px-10 md:px-10  lg:px-40 xl:px-72  py-10 text-[14px] mt-5 flex flex-col md:flex-row justify-between'>
                <div className=''>
                    <div className='py-1 flex flex-row pl-4'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>
                        <div className='pl-4'>Утас: 99112233</div>
                    </div>
                    <div className='py-5 flex flex-row pl-4'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                        <div className='pl-4'>Хаяг: Улаанбаатар хот, Баянгол дүүрэг, 1-р хороо, 1-р байр</div>
                    </div>
                    <div className='py-1 flex flex-row pl-4' ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>
                        <div className='pl-4'> chimgee@gmail.com</div>
                    </div>
                    
                </div>
                <div className='w-18'></div>

                <div className='flex flex-col w-1/2'>
                    <div className='text-[18px] text-gray-200 sm:pt-10 md:pt-0 '>Бидний тухай </div>
                    <div className='py-[10px] pl-5 text-gray-400 sm:justify-center'>Хүүхдийн бариа засал хийдэг эмнэлэг нь хүүхдийн булчингийн чангарал, хөдөлгөөний хөгжлийг дэмжих зорилгоор зөөлөн, аюулгүй бариа хийдэг. 
                    </div>
                    <Link href="https://www.facebook.com/ChimegVoodooHand" className='flex flex-row items-center pr-10 py-[10px]'><svg xmlns="http://www.w3.org/2000/svg" className=" size-8" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H15V13.9999H17.0762C17.5066 13.9999 17.8887 13.7245 18.0249 13.3161L18.4679 11.9871C18.6298 11.5014 18.2683 10.9999 17.7564 10.9999H15V8.99992C15 8.49992 15.5 7.99992 16 7.99992H18C18.5523 7.99992 19 7.5522 19 6.99992V6.31393C19 5.99091 18.7937 5.7013 18.4813 5.61887C17.1705 5.27295 16 5.27295 16 5.27295C13.5 5.27295 12 6.99992 12 8.49992V10.9999H10C9.44772 10.9999 9 11.4476 9 11.9999V12.9999C9 13.5522 9.44771 13.9999 10 13.9999H12V21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z" fill="#ffffff"></path></svg>
                        </Link>
                </div>
        </div>
        <div className='bg-sky-500 text-white w-full flex flex-row justify-between sm:text-1xl'> 
            <div>© Created by Chimgee 2025он </div>
            <div>Зохиогчийн эрх хуулиар хамгаалагдсан</div>
        </div>
        </div>
    );
};

export default Footer;