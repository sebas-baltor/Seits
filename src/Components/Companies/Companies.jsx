
import { GoArrowRight } from "react-icons/go";
import "./Companies.css"

const Companies = () => {
  return (
    <div id="Companies" className="h-dvh bg-black flex ">
      <div className="flex gap-20 m-auto relative items-center justify-end carrousel object-cover">
        <div className="glass h-40 w-60 rounded-3xl border border-slate-600"></div>
        <div className="glass h-40 w-60 rounded-3xl border border-slate-600"></div>
        <div className="glass h-40 w-60 rounded-3xl border border-slate-600"></div>
        <div className="glass h-40 w-60 rounded-3xl border border-slate-600"></div>
        <div className="absolute bg-white w-20 px-3 py-2 flex justify-center arrow rounded-full">
          <span className="text-lg">
            <GoArrowRight />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Companies;
