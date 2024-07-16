import { Fragment, ReactNode } from "react";

interface ModalRootProps {
  isOpen: boolean;
  children: ReactNode;
}

export function ModalRoot({ children, isOpen }: ModalRootProps) {
  return (
    <Fragment>
      {isOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          {children}
        </div>
      )}
    </Fragment>
  );
}
