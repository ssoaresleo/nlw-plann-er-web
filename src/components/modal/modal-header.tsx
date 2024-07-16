import { X } from "lucide-react";
import { ReactNode } from "react";

interface ModalHeaderProps {
  children: ReactNode;
  setIsOpen: () => void;
}

export function ModalHeader({ children, setIsOpen }: ModalHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col items-start justify-start space-y-2">
        {children}
      </div>
      <button onClick={setIsOpen}>
        <X className="size-5 text-zinc-400" />
      </button>
    </div>
  );
}
