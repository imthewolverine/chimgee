import React from 'react';

const Appointment: React.FC = () => {
    return (
        <div className="lg:min-h-screen flex flex-col lg:flex-row">
      {/* Left Side: Form */}
      <div className="flex lg:w-2/5 justify-center items-center bg-gray-200 min-h-screen relative z-10">
        <div className="bg-white shadow-md p-8 md:w-2/3 lg:w-full xl:w-2/3 z-100 lg:-mr-56 xl:-mr-96">
          <h1 className="text-[30px] md:text-[36px] lg:text-[30px] xl:text-[36px] text-[#272343] font-bold mb-6 text-gray-800">Цаг авах</h1>
          <form className="space-y-5">
            <div className='flex justify-between items-center'>
                <label className="text-[#6D7280] md:text-[20px] text-[16px] lg:text-[16px] xl:text-[20px]">Он, сар өдөр</label>
                    <input
                        type="date"
                        className="w-1/2 px-4 py-3 bg-gray-100 text-[#6D7280] md:text-[20px] text-[16px] lg:text-[16px] xl:text-[20px] shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
            </div>
            <div className='flex justify-between items-center'>
                <label className="text-[#6D7280] md:text-[20px] text-[16px] lg:text-[16px] xl:text-[20px] Poppins">Овог</label>
                    <input
                        type="text"
                        placeholder='Овог'
                        className="w-3/4 px-4 py-3 bg-gray-100 text-[#6D7280] md:text-[20px] text-[16px] lg:text-[16px] xl:text-[20px] shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
            </div>
            <div className='flex justify-between items-center'>
                <label className="text-[#6D7280] md:text-[20px] text-[16px] lg:text-[16px] xl:text-[20px] Poppins">Нэр</label>
                    <input
                        type="text"
                        placeholder='Нэр'
                        className="w-3/4 px-4 py-3 bg-gray-100 text-[#6D7280] md:text-[20px] text-[16px] lg:text-[16px] xl:text-[20px] shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
            </div>
            <div className='flex justify-between items-center'>
                <label className="text-[#6D7280] md:text-[20px] text-[16px] lg:text-[16px] xl:text-[20px] Poppins">Регистр</label>
                    <input
                        type="text"
                        placeholder='Регистр'
                        className="w-3/4 px-4 py-3 bg-gray-100 text-[#6D7280] md:text-[20px] text-[16px] lg:text-[16px] xl:text-[20px] shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
            </div>
            <div className='flex justify-between items-center'>
                <label className="text-[#6D7280] md:text-[20px] text-[16px] lg:text-[16px] xl:text-[20px] Poppins">Утас</label>
                    <input
                        type="text"
                        placeholder='Утас'
                        className="w-3/4 px-4 py-3 bg-gray-100 text-[#6D7280] md:text-[20px] text-[16px] lg:text-[16px] xl:text-[20px] shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white md:text-[20px] text-[16px] lg:text-[16px] xl:text-[20px] text-lg py-3 rounded hover:bg-blue-600"
            >
              Захиалах
            </button>
          </form>
        </div>
      </div>

      {/* Right Side: Title and Background */}
      <div className="lg:flex lg:w-3/5 bg-gray-300 min-h-screen relative z-0">
        <div className="absolute inset-0 flex justify-center items-center">
          <h1 className="text-4xl font-bold text-blue-700">Chimgee</h1>
        </div>
      </div>
    </div>
    );
};

export default Appointment;