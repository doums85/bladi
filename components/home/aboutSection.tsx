import React from 'react';

export default function aboutSection() {
  return (
    <section className='mt-4'>
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light sm:text-lg text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white text-center lg:text-left">
            Passé, Présent et Futur
          </h2>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            asperiores officia deleniti at possimus illum, nam sed praesentium
            fugit ipsam corrupti itaque soluta fuga in cupiditate? Nostrum, eum
            dicta. Iste?
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo
            corporis ducimus rerum, numquam at molestias sint sapiente
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <img
            className="w-full rounded-lg"
            src="https://images.unsplash.com/photo-1608198093029-395e34909bb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
            alt="food"
          />
          <img
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src="https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
            alt="food 2"
          />
        </div>
      </div>
    </section>
  );
}
