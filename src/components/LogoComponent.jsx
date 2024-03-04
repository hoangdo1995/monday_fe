import React from "react";

const LogoComponent = (props) => {
    const {customStyle} = props;
  return (
      <div className="logo flex items-baseline" >
          <img
              src="/images/icons/monday-logo.png"
              alt=""
              className="w-lg h-3 me-2"
          />
          <div className="branch flex items-baseline">
              <div
                  className="name text-2xl font-extrabold text-slate-900"
                  style={customStyle?customStyle:{ color: "#333333" }}
              >
                  monday
              </div>
              <div className="com text-base" style={customStyle?customStyle:{ color: "#333333" }}>
                  .com
              </div>
          </div>
      </div>
  );

};

export default LogoComponent;
