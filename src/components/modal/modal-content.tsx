import { ReactNode } from "react";

interface ModalContent {
  children: ReactNode;
}

export function ModalContent({ children }: ModalContent) {
  return (
    <div className="space-y-5">
      {children}
    </div>
  );
}
