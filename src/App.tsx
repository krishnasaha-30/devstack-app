import './App.css'
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import type { Itechnology } from "./types/technology";
import { Suspense, useState } from "react";
import TechSection from "./components/tech/TechSection";

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
  )
}

export default App


// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/krishnasaha-30/devstack-app.git
// git push -u origin main