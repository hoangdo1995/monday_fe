import { createSlice } from "@reduxjs/toolkit";

const initialState = {
        tableViewSizes:[200,200,200,200],
        tableColumnTitle:[
          {
            id:'title_1',
            columnTitleID:'name',
            title:'Name'
          },
          {
            id:'title_2',
            columnTitleID:'',
            title:'Owner'
          },
          {
            id:'title_3',
            columnTitleID:'status',
            title:'Status'
          },
          {
            id:'title_4',
            columnTitleID:'dateline',
            title:'Dateline'
          },
        ]
};

const TableViewReducer = createSlice({
  name: 'tableView',
  initialState,
  reducers: {
    setTableViewSize(state,{payload}){
        state.tableViewSizes = payload;
    }
  },
});

export const {setTableViewSize} = TableViewReducer.actions;

export default TableViewReducer.reducer;
