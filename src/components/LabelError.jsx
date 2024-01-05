import React from "react";

const LabelError = (props) => {
  const {title} = props;
  return <div className="text-red-600 h-4 font-light">
      {title}
  </div>;
};

export default LabelError;
