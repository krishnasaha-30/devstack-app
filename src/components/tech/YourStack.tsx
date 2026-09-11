import type { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";
import type { Itechnology } from "../../types/technology";
import StackItemCard from "./StackItemCard";

interface IYourStackProps {
  selectedStack: Itechnology[];
  setSelectedStack: Dispatch<SetStateAction<Itechnology[]>>;
}

const YourStack = ({ selectedStack, setSelectedStack }: IYourStackProps) => {
  const handleRemoveAll = () => {
    setSelectedStack([]);
    toast.info("Removed all technologies from your stack", {
      position: "bottom-right",
      autoClose: 3000,
      theme: "light",
    });
  };

  return (
    <div className="sticky top-24 rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm">
      <h3 className="text-lg font-bold">Your Stack</h3>
      <p className="mt-1 text-sm text-base-content/50">
        {selectedStack.length === 0
          ? "No technologies selected yet."
          : `${selectedStack.length} Technology Selected`}
      </p>

      <div className="mt-4 flex flex-col gap-3">
        {selectedStack.length === 0 ? (
          <div className="rounded-xl border border-dashed border-base-300 py-8 text-center text-sm text-base-content/40">
            Your stack is empty.
          </div>
        ) : (
          selectedStack.map((tech) => (
            <StackItemCard
              key={tech.id}
              tech={tech}
              selectedStack={selectedStack}
              setSelectedStack={setSelectedStack}
            />
          ))
        )}
      </div>

      {selectedStack.length > 0 && (
        <button
          onClick={() => handleRemoveAll()}
          className="btn btn-outline btn-error mt-5 w-full rounded-xl"
        >
          Remove All
        </button>
      )}
    </div>
  );
};

export default YourStack;
