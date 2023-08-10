import { Button } from 'flowbite-react';
import React from 'react';

export default function ctaSection() {
  return (
    <section className="">
      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <img
          className="w-80 md:w-full block mx-auto"
          src="/images/product.png"
          alt="dashboard image"
        />
        <div className="mt-4 md:mt-0 items-start">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">
            Let's create more tools and ideas that brings us together.
          </h2>
          <p className="mb-6 font-light md:text-lg text-gray-400">
            Flowbite helps you connect with friends and communities of people
            who share your interests. Connecting with your friends and family as
            well as discovering new ones is easy with features like Groups.
          </p>
          <Button color="primary">
            <div className="inline-flex items-center">
              Explorer le catalogue
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"></path>
              </svg>
            </div>
          </Button>
        </div>
      </div>
    </section>
  );
}
