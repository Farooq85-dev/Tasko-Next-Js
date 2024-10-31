import { ButtonHTMLAttributes } from "react";

interface BtnProps {
  BtnTitle: string;
  BtnType?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
}

export default function ButtonComp({ BtnTitle, BtnType }: BtnProps) {
  return (
    <button
      type={BtnType}
      className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
    >
      {BtnTitle}
    </button>
  );
}
