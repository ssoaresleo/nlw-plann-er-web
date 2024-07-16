import { ReactNode } from "react";

interface ModalHeaderProps {
  children: ReactNode;
}

export function ModalTitle({ children }: ModalHeaderProps) {
  return <h2 className="text-lg font-semibold">{children}</h2>;
}
