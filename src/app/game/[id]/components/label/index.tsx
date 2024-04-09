import React from "react";

interface LabelProps {
  name: string;
}

function Label({ name }: LabelProps) {
  return (
    <div className="cursor-pointer bg-slate-200 flex-grow sm:flex-grow-0 py-1 px-3 bg-slate text-black text-center rounded-lg hover:font-bold duration-200">
      {name}
    </div>
  );
}

export default Label;
