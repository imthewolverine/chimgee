import React from 'react';

const Footer: React.FC = () => {
    return (
        <div>
        <div className='bg-gray-800 text-white p-6 sm:px-10 md:px-10  lg:px-40 xl:px-72flex flex-col py-10 text-[14px] mt-5'>
            <div className='py-1'>Утас: 12345678</div>
            <div className='py-1'>Хаяг: Улаанбаатар</div>
            <div className='py-1'>email хаяг: chimgee@gmail  </div>
            <div className='flex flex-row items-center pr-10'><svg xmlns="http://www.w3.org/2000/svg" className=" w-8 h-8" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H15V13.9999H17.0762C17.5066 13.9999 17.8887 13.7245 18.0249 13.3161L18.4679 11.9871C18.6298 11.5014 18.2683 10.9999 17.7564 10.9999H15V8.99992C15 8.49992 15.5 7.99992 16 7.99992H18C18.5523 7.99992 19 7.5522 19 6.99992V6.31393C19 5.99091 18.7937 5.7013 18.4813 5.61887C17.1705 5.27295 16 5.27295 16 5.27295C13.5 5.27295 12 6.99992 12 8.49992V10.9999H10C9.44772 10.9999 9 11.4476 9 11.9999V12.9999C9 13.5522 9.44771 13.9999 10 13.9999H12V21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z" fill="#ffffff"></path></svg>chimgee
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