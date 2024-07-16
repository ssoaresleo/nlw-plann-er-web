import { ReactNode } from "react";

interface ModalContent {
  children: ReactNode;
}

export function ModalContent({ children }: ModalContent) {
  return (
    <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
      {children}
    </div>
  );
}
