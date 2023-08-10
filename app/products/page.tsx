'use client';

import { CardProduct, IntroSection, SelectInput } from '@/components/products';
import theme from '@/theme';
import { Button, Flowbite } from 'flowbite-react';
import React from 'react';

export default function Products() {
  return (
    <Flowbite theme={{theme}}>
      <main className="container mx-auto px-8">
        <IntroSection />
        <section className="flex flex-col gap-6">
          <SelectInput />

          {/* Cards */}
          <div className="grid grid-layout gap-6 ">
            <div>
              <CardProduct />
            </div>

            <div>
              <CardProduct />
            </div>

            <div>
              <CardProduct />
            </div>

            <div>
              <CardProduct />
            </div>

            <div>
              <CardProduct />
            </div>

            <div>
              <CardProduct />
            </div>

            <div>
              <CardProduct />
            </div>

            <div>
              <CardProduct />
            </div>
          </div>
        </section>

        <section className="bg-gray-900 my-16 rounded-md">
          <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 ">
            <div className="mx-auto max-w-screen-sm text-center">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-white">
                Besoin d'Aide ?
              </h2>
              <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <Button className="mx-auto" color="primary">Nous contacter</Button>
            </div>
          </div>
        </section>
      </main>
    </Flowbite>
  );
}
