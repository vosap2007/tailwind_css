'use client';

import Image from 'next/image';
import photo from '../../public/photo_2022-02-11 10.38.20.jpeg';

export default function Home() {
  return (
    <div className="container bg-slate-500 mx-auto relative">
      <div className="absolute left-0 top-0  bg-orange-500 w-container"></div>
    </div>
    //  <div className="py-8 px-8 max-w-sm mx-auto bg-white dark:bg-slate-900 rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
    //    <Image
    //      className="block mx-auto rounded-full sm:mx-0 sm:shrink-0"
    //      src={photo}
    //      width="150"
    //      alt="Volodymyr Udovychenko"
    //    />

    //    <div className="text-center space-y-2 sm:text-left">
    //      <div className="space-y-0.5">
    //        <p className="text-lg text-black font-semibold">
    //          Volodymyr Udovychenko
    //        </p>
    //        <span className="relative">
    //          <span className="block absolute -inset-1 -skew-y-3 bg-pink-500"></span>
    //          <span className="relative text-white">IT Engineer</span>
    //        </span>
    //      </div>
    //      <button
    //        className="disabled:opacity-50 px-4 py-1 text-sm text-white font-semibold rounded-full border bg-violet-500 hover:bg-violet-600 disabled:bg-violet-500 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
    //        disabled={false}
    //        onClick={() => {
    //          console.log('Click!!!');
    //        }}
    //      >
    //        Send SMS
    //      </button>
    //      <input
    //        className="valid:border-green-400 border-orange-500 invalid:border-red-500 "
    //        placeholder="you@example.com"
    //        type="email"
    //      />
    //      <button
    //        disabled={false}
    //        //  className="btn-blue"
    //        className="py-2 px-4 bg-[--placeholder]  text-[--red] text-[16px] font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
    //      >
    //        Click me!
    //      </button>
    //    </div>
    //  </div>
  );
}
