'use client';

import Image from 'next/image';
import image from '../../public/wallet.svg';
import photo from '../../public/photo_2022-02-11 10.38.20.jpeg';

export default function Home() {
  const ArrowRightSmall = (color: any) => {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.2"
          d="M3.125 15C3.125 15.3315 3.2567 15.6495 3.49112 15.8839C3.72554 16.1183 4.04348 16.25 4.375 16.25H16.875C17.0408 16.25 17.1997 16.1842 17.3169 16.0669C17.4342 15.9497 17.5 15.7908 17.5 15.625V6.875C17.5 6.70924 17.4342 6.55027 17.3169 6.43306C17.1997 6.31585 17.0408 6.25 16.875 6.25H4.375C4.04348 6.25 3.72554 6.1183 3.49112 5.88388C3.2567 5.64946 3.125 5.33152 3.125 5V15Z"
          fill="#58667E"
        />
        <path
          d="M3.125 5V15C3.125 15.3315 3.2567 15.6495 3.49112 15.8839C3.72554 16.1183 4.04348 16.25 4.375 16.25H16.875C17.0408 16.25 17.1997 16.1842 17.3169 16.0669C17.4342 15.9497 17.5 15.7908 17.5 15.625V6.875C17.5 6.70924 17.4342 6.55027 17.3169 6.43306C17.1997 6.31585 17.0408 6.25 16.875 6.25H4.375C4.04348 6.25 3.72554 6.1183 3.49112 5.88388C3.2567 5.64946 3.125 5.33152 3.125 5ZM3.125 5C3.125 4.66848 3.2567 4.35054 3.49112 4.11612C3.72554 3.8817 4.04348 3.75 4.375 3.75H15"
          //  stroke="#58667E"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.0625 12.1875C14.5803 12.1875 15 11.7678 15 11.25C15 10.7322 14.5803 10.3125 14.0625 10.3125C13.5447 10.3125 13.125 10.7322 13.125 11.25C13.125 11.7678 13.5447 12.1875 14.0625 12.1875Z"
          fill={color}
        />
      </svg>
    );
  };

  //   console.log('ArrowRightSmall', ArrowRightSmall('#ffff'));

  return (
    <div className="w-full h-full bg-slate-500 mx-auto relative py-16">
      <div className="absolute inset-x-0 top-0 h-[40px]  bg-orange-500 w-full shadow-2xl"></div>
      <div className="py-8 px-8 max-w-sm mx-auto bg-white dark:bg-slate-900 rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
        <Image
          className="block mx-auto rounded-full sm:mx-0 sm:shrink-0"
          src={photo}
          width="150"
          alt="Volodymyr Udovychenko"
        />

        <div className="text-center space-y-2 sm:text-left">
          <div className="space-y-0.5">
            <p className="text-lg text-black font-semibold">
              Volodymyr Udovychenko
            </p>
            <span className="relative">
              <span className="block absolute -inset-1 -skew-y-3 bg-pink-500"></span>
              <span className="relative text-white">IT Engineer</span>
            </span>
          </div>
          <button
            className="disabled:opacity-50 px-4 py-1 text-sm text-white font-semibold rounded-full border bg-violet-500 hover:bg-violet-600 disabled:bg-violet-500 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 shadow-2xl"
            disabled={false}
            onClick={() => {
              console.log('Click!!!');
            }}
          >
            Send SMS
          </button>
          <input
            className="valid:border-green-400 border-orange-500 invalid:border-red-500 "
            placeholder="you@example.com"
            type="email"
          />
          <button
            disabled={false}
            className="py-2 px-4 bg-[--placeholder]  text-[--red] text-[16px] font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >
            Click me!
          </button>
          <button className="group transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded-lg p-3 flex gap-2 justify-center items-center ">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.2"
                d="M3.125 15C3.125 15.3315 3.2567 15.6495 3.49112 15.8839C3.72554 16.1183 4.04348 16.25 4.375 16.25H16.875C17.0408 16.25 17.1997 16.1842 17.3169 16.0669C17.4342 15.9497 17.5 15.7908 17.5 15.625V6.875C17.5 6.70924 17.4342 6.55027 17.3169 6.43306C17.1997 6.31585 17.0408 6.25 16.875 6.25H4.375C4.04348 6.25 3.72554 6.1183 3.49112 5.88388C3.2567 5.64946 3.125 5.33152 3.125 5V15Z"
                fill="#58667E"
              />
              <path
                d="M3.125 5V15C3.125 15.3315 3.2567 15.6495 3.49112 15.8839C3.72554 16.1183 4.04348 16.25 4.375 16.25H16.875C17.0408 16.25 17.1997 16.1842 17.3169 16.0669C17.4342 15.9497 17.5 15.7908 17.5 15.625V6.875C17.5 6.70924 17.4342 6.55027 17.3169 6.43306C17.1997 6.31585 17.0408 6.25 16.875 6.25H4.375C4.04348 6.25 3.72554 6.1183 3.49112 5.88388C3.2567 5.64946 3.125 5.33152 3.125 5ZM3.125 5C3.125 4.66848 3.2567 4.35054 3.49112 4.11612C3.72554 3.8817 4.04348 3.75 4.375 3.75H15"
                className=" stroke-white group-hover:stroke-black transition ease-in-out delay-150"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.0625 12.1875C14.5803 12.1875 15 11.7678 15 11.25C15 10.7322 14.5803 10.3125 14.0625 10.3125C13.5447 10.3125 13.125 10.7322 13.125 11.25C13.125 11.7678 13.5447 12.1875 14.0625 12.1875Z"
                className="fill-white group-hover:fill-black transition ease-in-out delay-150"
              />
            </svg>
            Click me!
          </button>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-16  bg-orange-500 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 stroke-1 hover:stroke-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3"
          />
        </svg>
      </div>
      <div className="border-4 border-solid border-indigo-500 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 hover:stroke-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </div>
    </div>
  );
}
