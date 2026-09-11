import { FaStar } from "react-icons/fa";
import type { Itechnology } from "../../types/technology";

interface ITechCardProps {
  tech: Itechnology;
}

const TechCard = ({ tech}: ITechCardProps) => {
 
  return (
    <div className="flex flex-col rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
     
      <div className="flex items-start justify-between">
        <img src={tech.icon} alt={tech.name} className="h-10 w-10 object-contain" />
        <span className="badge badge-ghost badge-sm font-medium">
          {tech.badge}
        </span>
      </div>

      <h3 className="mt-4 text-lg font-bold">{tech.name}</h3>

      
      <p className="mt-1 text-sm leading-relaxed text-base-content/60">
        {tech.description}
      </p>

    
      <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-base-content/60">
        <span className="badge badge-outline badge-sm">{tech.category}</span>
        <span>{tech.difficulty}</span>
        <span className="ml-auto flex items-center gap-1 font-semibold text-base-content">
          <FaStar className="text-amber-400" />
          {tech.rating}
        </span>
      </div>

      <div className="my-4 border-t border-base-300" />


      <button>
        Add to Stack
      </button>
    </div>
  );
};

export default TechCard;
