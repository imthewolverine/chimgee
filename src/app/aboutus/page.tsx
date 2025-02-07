import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react';

const AboutUs: React.FC = () => {
    return (
        <div className='bg-gray-100'>
            <div><Navbar/></div>
            <div className='text-black'>
                <div>
                    <img src="https://scontent.fuln4-3.fna.fbcdn.net/v/t39.30808-6/343737449_252323217197425_2678195194227375843_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=pz1I8fx4UScQ7kNvgFSkLxP&_nc_zt=23&_nc_ht=scontent.fuln4-3.fna&_nc_gid=A6ZRzcIkbysfRYWj5io3dxo&oh=00_AYA0ibVhWzIAms9Zf1qffyHGIO7TDRUpnhPKMA9qVNCwyQ&oe=67AAE087" className='w-full h-auto' alt="" /> </div>
                <div className='text-[18px] md:text-[24px] mt-5 text-center text-bold'>Бидний үйлчилгээний онцлог
                </div>
                <div className=' text-center text-[14px] md:text-[18px] md:px-36 lg:px-36 m-5'> Уламжлалт эмчилгээ, тэр дундаа бариа засал нь эртнээс уламжлагдан ирсэн, бие махбодын эрүүл мэндийг дэмжих үр дүнтэй арга хэлбэрийн нэг юм. </div>
            </div>
                <div className='bg-gray-100 w-full px-6 sm:px-10 md:px-10 lg:px-40 xl:px-72 flex-col flex md:flex-row'>
                    <div className='text-black text-[25px] text-bold  sm:mx-6 text-center'>
                        <div>Хүүхдэд бариа хийхийн ашиг тус</div>
                        <div className='text-[18px] text-justify'>📌 
                            <div>✅ Хоол боловсруулалтыг сайжруулна – Гэдэсний түгжрэл, хийг арилгаж, өтгөн хаталтыг багасгана.</div>
                            <div>✅ Дархлааг дэмжинэ – Цусны эргэлтийг идэвхжүүлж, дархлааны системийг сайжруулдаг.</div>
                            <div>✅ Нойрыг сайжруулна – Гүн нойртой, тайван унтахад тусална.</div>
                            <div>✅ Стресс, түгшүүрийг багасгана – Хүүхдийг тайвшруулж, аюулгүй мэдрэмж төрүүлнэ.</div>
                            <div>✅ Булчин, ясны хөгжлийг дэмжинэ – Биеийн хөдөлгөөн, уян хатан байдлыг нэмэгдүүлнэ.</div>
                            </div>
                    </div>
                    <div className='w-14 flex-none'></div>
                    
                    <div className='w-full h-auto flex-auto'>
                        <img src="https://medanta.s3.ap-south-1.amazonaws.com/blogs/April2024/mETKTsBDcLOFvnAEuDKqBSZ4W7IjbS-metaMTFhLmpwZw==-.jpg" className='w-full h-auto' alt="" />
                    </div>
                </div>
                <div className='bg-gray-100 w-full p-6 sm:px-10 md:px-10 lg:px-40 xl:px-72 flex flex-col md:flex-row  '>
                <div className=''>
                        <img src='https://images.ctfassets.net/yixw23k2v6vo/ppm_patient_article_fid5983_asset/36850f9d9c16e1ffc1f7c0b798268299/iStock-1283338311.jpg?fm=webp&fit=thumb&q=65&w=864&h=576' className='w-full flex  w-[1000px] md:h-[500px]'></img> 
                    </div>
                    <div className=' flex-none w-14'></div>
                    <div className='text-black  flex-auto '>
                        <p className='text-bold text-[25px] w-full items-center'>Танилцуулга.</p>
                        <p className='text-justify'>Голомт банк нь 1995 оны гуравдугаар сарын 6-ны өдөр Монгол Улсын нийгэм, эдийн засгийн салбарт томоохон байр суурийг эзэлдэг “Бодь интернэшнл” ХХК-ийн охин компани болон үүсгэн байгуулагдсан </p> 
                    </div>
                </div>
                
            <div><Footer/></div>
        </div>
    );
};

export default AboutUs;