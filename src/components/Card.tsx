import { ReactNode } from "react";

type Props = {
  children: ReactNode; //Children puede ser cualquier nodo de React
};

function Card({ children }: Props) {
  return (
    <div className="bg-slate-200 shadow-lg rounded-lg p-6 max-w-md mx-auto">
      {children}
    </div>
  );
}

export default Card;
