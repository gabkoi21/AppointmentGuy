import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";

type GlobalSearchBarProps = {
  children: React.ReactNode;
  className?: string;
};

const GlobalSearchBar = ({ children, className }: GlobalSearchBarProps) => {
  return (
    <div className="relative mt-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <Icon path={mdiMagnify} size={0.8} className="text-gray-500" />
      </div>
      <div className={className}>{children}</div>
    </div>
  );
};

export default GlobalSearchBar;
