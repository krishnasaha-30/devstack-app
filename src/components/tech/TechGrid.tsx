import type { Dispatch, SetStateAction } from "react";
import type { Itechnology } from "../../types/technology";
import TechCard from "./TechCard";

interface ITechGridProps {
  technologies: Itechnology[];
}

const TechGrid = ({
  technologies
}: ITechGridProps) => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {technologies.map((tech) => (
        <TechCard
          key={tech.id}
          tech={tech}
          
        />
      ))}
    </div>
  );
};

export default TechGrid;
