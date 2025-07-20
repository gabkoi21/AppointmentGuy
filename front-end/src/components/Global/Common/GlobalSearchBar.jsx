import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";
import PropTypes from "prop-types";

const GlobalSearchBar = ({ children, className }) => {
  return (
    <div className="relative mt-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <Icon path={mdiMagnify} size={0.8} className="text-gray-500" />
      </div>
      <div className={className}>{children}</div>
    </div>
  );
};

GlobalSearchBar.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default GlobalSearchBar;
