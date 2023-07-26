import Section from "../section";

import { IoLogoLinkedin, IoLogoFacebook } from "react-icons/io";

const people = [
  {
    name: "Michal Špitálský",
    role: "Režisér",
    desc: "Michal je studentem oboru Film and TV Production na Northumbrijské univerzitě a s příběhem byl od samého začátku a měl šanci pozorovat Imricha v dobrém i zlém. Michal je v týmu ten 'kreativní'.",
    imageUrl: "https://www.zahrada-bozi.cz/img/avatars/michal.webp",
  },

  {
    name: "Jakub Tesařík",
    role: "Producent",
    desc: "Jakub studuje Management v kreativním průmyslu na VŠKK a s Michalem pracuje už nějaký ten pátek. Jeho profesní zaměření mu umožňuje být komunikační a organizační složkou týmu.",
    imageUrl: "https://www.zahrada-bozi.cz/img/avatars/jakub.webp",
  },

  {
    name: "Sam Enticknap",
    role: "Skladatel",
    desc: "Sam je mladý skladatel z Yorku, který vystudoval filmovou hudbu na konzervatoři v Leedsu. Rád pracuje s lidmi, aby dodal jejich příbehům život, a proto se stal nedílnou součástí našeho týmu!",
    imageUrl: "https://www.zahrada-bozi.cz/img/avatars/sam.webp",
  },
];

const TeamSection = () => {
  return (
    <Section>
      <div className="mx-auto w-full max-w-sm sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Náš filmový štáb
        </h2>

        <ul
          role="list"
          className="grid gap-x-12 gap-y-12 sm:grid-cols-2 md:grid-cols-3 sm:gap-y-16"
        >
          {people.map((person) => (
            <li key={person.name}>
              <img
                className="h-60 sm:h-40 lg:h-60 w-full rounded-xl my-6 object-cover "
                src={person.imageUrl}
                alt=""
              />
              <div>
                <h3 className="text-lg font-semibold leading-7 tracking-tight text-gray-900">
                  {person.name}
                </h3>
                <p className="text-md leading-6 text-gray-600 mb-3">
                  {person.role}
                </p>
                <p className="text-sm leading-6 text-gray-600 mb-6">
                  {person.desc}
                </p>
                <ul role="list" className="flex flex-1">
                  <li className="text-gray-400 text-2xl hover:text-green-600">
                    <IoLogoFacebook />
                  </li>
                  <li className="text-gray-400 text-2xl hover:text-green-600">
                    <IoLogoLinkedin />
                  </li>
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default TeamSection;
