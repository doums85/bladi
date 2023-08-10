'use client';

import { Card } from 'flowbite-react';
import Image from 'next/image';

export default function CardProduct() {
  return (
    <Card
      renderImage={(): any => (
        <Image
          width={400}
          height={300}
          src="/images/product.png"
          className="mx-auto w-80 md:w-3/4 lg:w-/5"
          alt="image product"
        />
      )}>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Bladi - Elmsamen
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400 line-clamp-3">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi
        consequatur similique, iusto labore ducimus atque sint minima corporis
        accusamus! Fugit!
      </p>
    </Card>
  );
}
