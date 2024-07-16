import { ReactNode } from "react";

interface ModalActionProps {
  children: ReactNode;
}

export function ModalAction({ children }: ModalActionProps) {
  return <div className="w-full">{children}</div>;
}
