import { ReactNode } from "react";

interface ModalHeaderProps {
  children: ReactNode;
}

export function ModalDescription({ children }: ModalHeaderProps) {
  return <p className="text-sm text-zinc-400">{children}</p>;
}
