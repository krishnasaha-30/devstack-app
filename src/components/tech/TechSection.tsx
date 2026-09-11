import { use, useState } from "react";
import type { Itechnology } from "../../types/technology";


interface ITechSectionProps {
  techPromise: Promise<Itechnology[]>;
}

const TechSection = ({ techPromise }: ITechSectionProps) => {
  const technologies = use(techPromise);
 

  return (
    <section id="technologies" className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-extrabold">
        Explore the <span className="text-brand-gradient">Technologies</span>
      </h2>
      <p className="mt-2 text-base-content/60">
        Pick one technology per category to build your ideal stack.
      </p>

      
      
    </section>
  );
};

export default TechSection;
