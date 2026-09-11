

import type { Itechnology } from "../../types/technology";




const YourStack = () => {


  return (
    <div className="sticky top-24 rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm">
      <h3 className="text-lg font-bold">Your Stack</h3>


      <div className="mt-4 flex flex-col gap-3">

        <div className="rounded-xl border border-dashed border-base-300 py-8 text-center text-sm text-base-content/40">
          Your stack is empty.
        </div>

      </div>


    </div>
  );
};

export default YourStack;
