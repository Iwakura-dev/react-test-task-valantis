import type { ReactNode } from "react";

type BodyProps = {
  children: ReactNode;
};
export const Body: React.FC<BodyProps> = ({ children }) => {
  return (
    // This component is neccesery for the change theme in background color
    <div className="h-full bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-300 break-words leading-5 transition-colors duration-500">
      {children}
    </div>
  );
};
