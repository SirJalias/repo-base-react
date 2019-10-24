import React, { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import Spinner from "./Spinner";

const LazyLoading = ({ children }) => {
  const [isVisibleComponent, setIsVisible] = useState(false);

  return (
    <VisibilitySensor
      partialVisibility
      active={!isVisibleComponent}
      onChange={isVisible => {
        setIsVisible(isVisible);
      }}
    >
      <div
        style={{
          minHeight: "200px",
          opacity: isVisibleComponent ? 1 : 0,
          transition: "opacity 500ms linear"
        }}
      >
        {isVisibleComponent ? children : <div style={{ height: "1000px" }} />}
      </div>
    </VisibilitySensor>
  );
};

LazyLoading.displayName = "LazyLoading";

export default LazyLoading;
