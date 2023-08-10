import React from 'react';
import Haagen from '../icons/haagen';
import Findus from '../icons/findus';
import HMarket from '../icons/h-market';
import OrientalViande from '../icons/oriental-viande';
import WaoMochi from '../icons/wao-mochi';
import Khadispal from '../icons/khadispal';
import partners from '../icons/partners';

export default function PartnerSection() {
  return (
    <section>
      <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
        <h2 className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-white md:text-4xl">
          Vous serez en bonne compagnie.
        </h2>
        <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
          {partners.map(({ icon: Icon, url }) => (
            <a href={url} className="flex justify-center items-center">
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
