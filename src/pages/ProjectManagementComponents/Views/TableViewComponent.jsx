import React from "react";
import AdaptiveInputComponent from "../GlobalComponents/AdaptiveInputComponent";
import NewTaskButtonComponent from "../GlobalComponents/NewTaskButtonComponent";
import PersonButtonComponent from "../GlobalComponents/PersonButtonComponent";
import FilterButtonComponent from "../GlobalComponents/FilterButtonComponent";
import SortButtonComponent from "../GlobalComponents/SortButtonComponent";

const TableViewComponent = () => {
  return (
    <div>
      {/* menu */}
      <div className="mt-4">
        <div className="flex items-center" style={{fontSize:14}}>
          <div className="me-4">
            <NewTaskButtonComponent/>
          </div>
          <div className="me-2">
            <AdaptiveInputComponent/>
          </div>
          <div className="me-2">
            <PersonButtonComponent/>
          </div>
          <div className="me-2">
            <FilterButtonComponent/>
          </div>
          <div className="me-2">
            <SortButtonComponent/>
          </div>
        </div>
      </div>
      {/* view */}
      <div></div>
    </div>
  )
};

export default TableViewComponent;
