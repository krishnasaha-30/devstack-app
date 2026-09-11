import { Suspense, useState } from "react";
import Banner from "./components/Banner";

import Nav from "./components/Nav";
import TechSection from "./components/tech/TechSection";
import type { Itechnology } from "./types/technology";

const technologiesFetch = async (): Promise<Itechnology[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {
  const [technologiesPromise] = useState(() => technologiesFetch());

  return (
    <>
      <Nav />
      <Banner />
      <Suspense
        fallback={
          <h2 className="py-24 text-center text-xl font-semibold">
            Loading technologies.......
          </h2>
        }
      >
        <TechSection techPromise={technologiesPromise} />
      </Suspense>
      
    </>
  );
}

export default App;
