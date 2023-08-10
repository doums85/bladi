'use client';
import { Button } from 'flowbite-react';
import React from 'react';

const MoveRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    className="lucide lucide-move-right">
    <path d="M18 8L22 12L18 16" />
    <path d="M2 12H22" />
  </svg>
);

export default function HeroSection() {
  return (
    <section>
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto xl:gap-0 md:py-16 md:grid-cols-12 gap-4 md:gap-20">
        <div className="mr-auto place-self-center md:col-span-7 order-1 sm:order-0 flex flex-col justify-between items-start h-full">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
            Lorem ipsum dolor sit amet consectetur.
          </h1>
          <p className="max-w-2xl mb-6 font-light md:mb-8 md:text-md md:text-xl text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
            repudiandae expedita aspernatur voluptatem rerum esse ducimus
            provident! Fugit, debitis magni.
          </p>

          <Button color="primary">
            <p className='mr-2'>Découvrir</p>
            <MoveRight />
          </Button>
        </div>
        <div className=" md:mt-0 md:col-span-5 flex  md:mr-10">
          <img src="/hero.jpg" alt="mockup" className="object-cover rounded" />
        </div>
      </div>
    </section>
  );
}
