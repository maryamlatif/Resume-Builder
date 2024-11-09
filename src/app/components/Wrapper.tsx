import { FC } from "react";

const Wrapper: FC<{children: React.ReactNode, className?: string}> = ({children, className = ''}) => {
  return (
    <div className={`max-w-screen-xl sm:max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl mx-auto py-4 ${className}`}>
      {children}
    </div>
  );
}

export default Wrapper;
