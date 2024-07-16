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
          <div className="bg-zinc-900 w-[640px] rounded-xl py-5 px-6 shadow-shape">{children}</div>
        </div>
      )}
    </Fragment>
  );
}
