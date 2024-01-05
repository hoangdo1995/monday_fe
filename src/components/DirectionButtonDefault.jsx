import React from "react";

const DirectionButtonDefault = (props) => {
    const {title} = props;
  return <button className="rounded text-white px-4 py-2 text-base bg-blue-600 hover:bg-blue-700">
            {title}
  </button>;
};

export default DirectionButtonDefault;
