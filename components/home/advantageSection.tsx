interface PropsType {
  title: string;
  description: string;
  icon: any;
}

function Advantage({ title, description, icon }: PropsType) {
  return (
    <div>
      <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full lg:h-12 lg:w-12 bg-gradient-to-r from-yellow-500 to-yellow-300 hover:bg-gradient-to-br text-white font-semibold rounded-full shadow-md">
        {icon}
      </div>
      <h3 className="mb-4 text-xl font-bold text-white ">{title}</h3>
      <p className="font-light sm:text-lg text-gray-400">{description}</p>
    </div>
  );
}

export default function AdvantageSection() {
  return (
    <section className="mt-4 font-light sm:text-lg text-gray-400">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">
            De la Conception à la Satisfaction
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
            aliquam debitis aperiam aspernatur quia possimus maiores perferendis
            impedit rerum! Corporis vitae sunt sequi vero cum.
          </p>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <Advantage
            title="De la Conception à la Satisfaction"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
            aliquam debitis aperiam aspernatur quia possimus maiores perferendis
            impedit rerum! Corporis vitae sunt sequi vero cum."
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-heart-handshake">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66" />
                <path d="m18 15-2-2" />
                <path d="m15 18-2-2" />
              </svg>
            }
          />

          <Advantage
            title="Ingrédients frais "
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
            aliquam debitis aperiam aspernatur quia possimus maiores perferendis
            impedit rerum! Corporis vitae sunt sequi vero cum."
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-wheat">
                <path d="M2 22 16 8" />
                <path d="M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" />
                <path d="M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" />
                <path d="M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" />
                <path d="M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z" />
                <path d="M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z" />
                <path d="M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z" />
                <path d="M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z" />
              </svg>
            }
          />

          <Advantage
            title="Cuisson traditionnelle"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
            aliquam debitis aperiam aspernatur quia possimus maiores perferendis
            impedit rerum! Corporis vitae sunt sequi vero cum."
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-microwave">
                <rect width="20" height="15" x="2" y="4" rx="2" />
                <rect width="8" height="7" x="6" y="8" rx="1" />
                <path d="M18 8v7" />
                <path d="M6 19v2" />
                <path d="M18 19v2" />
              </svg>
            }
          />

          <Advantage
            title="Plaisir de partager"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
            aliquam debitis aperiam aspernatur quia possimus maiores perferendis
            impedit rerum! Corporis vitae sunt sequi vero cum."
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-share-2">
                <circle cx="18" cy="5" r="3" />
                <circle cx="6" cy="12" r="3" />
                <circle cx="18" cy="19" r="3" />
                <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
                <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
              </svg>
            }
          />

          <Advantage
            title="Expertise et Conseils"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
            aliquam debitis aperiam aspernatur quia possimus maiores perferendis
            impedit rerum! Corporis vitae sunt sequi vero cum."
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-user">
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            }
          />

          <Advantage
            title="Livraison et Logistique"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
            aliquam debitis aperiam aspernatur quia possimus maiores perferendis
            impedit rerum! Corporis vitae sunt sequi vero cum."
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-truck">
                <path d="M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11" />
                <path d="M14 9h4l4 4v4c0 .6-.4 1-1 1h-2" />
                <circle cx="7" cy="18" r="2" />
                <path d="M15 18H9" />
                <circle cx="17" cy="18" r="2" />
              </svg>
            }
          />
        </div>
      </div>
    </section>
  );
}
