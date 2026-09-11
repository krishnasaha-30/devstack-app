import type { Dispatch, SetStateAction } from "react";
import type { Itechnology } from "../../types/technology";
import TechCard from "./TechCard";

interface ITechGridProps {
  technologies: Itechnology[];
  selectedStack: Itechnology[];
  setSelectedStack: Dispatch<SetStateAction<Itechnology[]>>;
}

const TechGrid = ({
  technologies,
  selectedStack,
  setSelectedStack,
}: ITechGridProps) => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {technologies.map((tech) => (
        <TechCard
          key={tech.id}
          tech={tech}
          selectedStack={selectedStack}
          setSelectedStack={setSelectedStack}
        />
      ))}
    </div>
  );
};

export default TechGrid;
