import { Dropdown, Tooltip } from "antd";
import React from "react";

const AddWorkSpaceDropdown = () => {
    const items = [
    {
        key:'1',
        label:<div>
            <i className="fa fa-columns"></i>
            <span>New Board</span>
        </div>
    },
    {
        key:'2',
        label:<div>
            <i className="fa fa-file-alt"></i>
            <span>New Doc</span>
        </div>
    },
    {
        key:'3',
        label:<div>
            <i className="fa fa-table"></i>
            <span>New Dashboard</span>
        </div>
    },
    {
        key:'4',
        label:<div>
            <i className="fa fa-solar-panel"></i>
            <span>Choose from template</span>
        </div>
    },
    {
        key:'5',
        label:<div className="break-line-bottom">
                <div className="flex justify-between">
                    <div>
                        <i className="fa fa-file-import"></i>
                        <span>Import data</span>
                    </div>
                    <div className="text-right">
                        <i className="fa fa-chevron-right"></i>
                    </div>
                </div>
        </div>
    },
    {
        key:'6',
        label:<div className="!mt-1">
            <i className="fa fa-edit"></i>
            <span>New Form</span>
        </div>
    },
    {
        key:'7',
        label:<div className="break-line-bottom">
                <div className="flex justify-between">
                    <div>
                    <i className="fab fa-app-store"></i>
                        <span>Apps</span>
                    </div>
                    <div className="text-right">
                        <i className="fa fa-chevron-right"></i>
                    </div>
                </div>
        </div>
    },
    {
        key:'6',
        label:<div className="!mt-1">
            <i className="fa fa-folder"></i>
            <span>New Folder</span>
        </div>
    }
];
  return <Dropdown menu={{items}} placement="bottomRight" trigger={['click']} overlayClassName="add-workspace-dropdown">
  <Tooltip placement="top" title={'Add items to workspace'}>
      <div className="workspace-add  ms-2 cursor-pointer">
          <i className="fa fa-plus py-2 px-2 rounded"></i>
      </div>
  </Tooltip>
</Dropdown>;
};

export default AddWorkSpaceDropdown;
