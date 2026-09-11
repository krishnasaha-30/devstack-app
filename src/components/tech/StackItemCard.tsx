import type { Dispatch, SetStateAction } from "react";
import { HiX } from "react-icons/hi";
import { toast } from "react-toastify";
import type { Itechnology } from "../../types/technology";

interface IStackItemCardProps {
  tech: Itechnology;
  selectedStack: Itechnology[];
  setSelectedStack: Dispatch<SetStateAction<Itechnology[]>>;
}

const StackItemCard = ({
  tech,
  selectedStack,
  setSelectedStack,
}: IStackItemCardProps) => {
  const handleRemoveTech = () => {
    const restStack = selectedStack.filter((item) => item.id !== tech.id);
    setSelectedStack(restStack);

    toast.info(`${tech.name} removed from your stack`, {
      position: "bottom-right",
      autoClose: 3000,
      theme: "light",
    });
  };

  return (
    <div className="flex items-center justify-between gap-3 rounded-xl border border-base-300 px-3 py-2">
      <div className="flex items-center gap-3">
        <img src={tech.icon} alt={tech.name} className="h-8 w-8 object-contain" />
        <div>
          <p className="text-sm font-semibold">{tech.name}</p>
          <p className="text-xs text-base-content/50">{tech.category}</p>
        </div>
      </div>

      <button
        onClick={() => handleRemoveTech()}
        aria-label={`Remove ${tech.name}`}
        className="text-base-content/40 hover:text-error"
      >
        <HiX size={18} />
      </button>
    </div>
  );
};

export default StackItemCard;
