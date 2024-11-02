import { arrayMove } from "@dnd-kit/sortable";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
        tableViewSizes:[300,200,200,200],
        tableColumnTitle:[
          {
            id:'title_1',
            columnTitleID:'name',
            title:'Name'
          },
          {
            id:'title_2',
            columnTitleID:'owner',
            title:'Owner'
          },
          {
            id:'title_4',
            columnTitleID:'dueDate',
            title:'Dateline'
          },
          {
            id:'title_3',
            columnTitleID:'status',
            title:'Status'
          },
        ],
        data:[
          {
              id:'table_1',
              tableThemeColor:'#ffcb02',
              tableName:'table 1',
              tableData:[
                      {
                          id:'table_2_1',
                          table_id:'table_1',
                          name:'task 6',
                          owner: [
                            {
                              name:'Hoàng Đỗ',
                              email:'dohaonf@gmail.com'
                            }
                          ],
                          status: 'stuck',
                          dueDate:''
                      },
                      {
                          id:'table_2_2',
                          table_id:'table_1',
                          name:'task 7',
                          owner:[
                            {
                              name:'Hoàng Đỗ',
                              email:'dohaonf@gmail.com'
                            }
                          ],
                          status: 'working',
                          dueDate:'13 Jan 2024'
                      },
                      {
                          id:'table_2_3',
                          table_id:'table_1',
                          name:'task 8',
                          owner:[
                            {
                              name:'Hoàng Đỗ',
                              email:'dohaonf@gmail.com'
                            }
                          ],
                          status: 'done',
                          dueDate:'16 May 2024'
                      },
                      {
                          id:'table_2_4',
                          table_id:'table_1',
                          name:'task 9',
                          owner:[
                            {
                              name:'Hoàng Đỗ',
                              email:'dohaonf@gmail.com'
                            }
                          ],
                          status: 'waiting',
                          dueDate:'07 Sep 2024'
                      }
                  
                    ]
          },
          {
              id:'table_2',
              tableThemeColor:'#027f4b',
              tableName:'table 2',
              tableData:[
                      {
                          id:'1',
                          table_id:'table_2',
                          name:'task 1',
                          owner:[
                            {
                              name:'Hoàng Đỗ',
                              email:'dohaonf@gmail.com'
                            }
                          ],
                          status: 'stuck',
                          dueDate:'11 Jun 2024'
                      },
                      {
                          id:'2',
                          table_id:'table_2',
                          name:'task 2',
                          owner:[
                            {
                              name:'Hoàng Đỗ',
                              email:'dohaonf@gmail.com'
                            }
                          ],
                          status: 'complete',
                          dueDate:'11 Jun 2024'
                      },
                      {
                          id:'3',
                          table_id:'table_2',
                          name:'task 3',
                          owner:[
                            {
                              name:'Hoàng Đỗ',
                              email:'dohaonf@gmail.com'
                            }
                          ],
                          status: 'done',
                          dueDate:'11 Jun 2024'
                      },
                      {
                          id:'4',
                          table_id:'table_2',
                          name:'task 4',
                          owner:[
                            {
                              name:'Hoàng Đỗ',
                              email:'dohaonf@gmail.com'
                            }
                          ],
                          status: 'waiting',
                          dueDate:'11 Jun 2024'
                      }
                  
                    ]
          }
      ]
};

const TableViewReducer = createSlice({
  name: 'tableView',
  initialState,
  reducers: {
    setTableViewSize(state,{payload}){
        state.tableViewSizes = payload;
    },
    removeColumnById(state,{payload}){
        state.tableColumnTitle = state.tableColumnTitle.filter(item => item.id !== payload);
    },
    replaceRowTable(state, { payload }) {
      const { activeTable, overTable, rowId } = payload;
    
      // Find index of active and over tables
      const activeTableIndex = state.data.findIndex(item => item.id === activeTable);
      const overTableIndex = state.data.findIndex(item => item.id === overTable);
    
      if (activeTableIndex === -1 || overTableIndex === -1) {
        // console.error("Table not found");
        return;
      }
    
      // Find the row to move in the active table
      const rowToMoveIndex = state.data[activeTableIndex].tableData.findIndex(row => row.id === rowId);
    
      if (rowToMoveIndex === -1) {
        // console.error("Row not found");
        return;
      }
    
      // Extract the row data to move
      let [rowToMove] = state.data[activeTableIndex].tableData.splice(rowToMoveIndex, 1);

      rowToMove.table_id = overTable;
    
      // Add the row to the overTable
      state.data[overTableIndex].tableData.push(rowToMove);

    },
    replaceRowPosition(state,{payload}){
      const {tableId,startId,overId} = payload;
      const activeTableIndex = state.data.findIndex(item => item.id === tableId);
      
      const currentTable = state.data[activeTableIndex].tableData;
      const activeIndex = currentTable.findIndex(row=>row.id == startId);
      const overIndex = currentTable.findIndex(row=>row.id == overId);
      state.data[activeTableIndex].tableData = arrayMove(state.data[activeTableIndex].tableData,activeIndex,overIndex);
    },
    replaceTableTitlePosition(state,{payload}){
      const {activeColumn, overColumn} = payload;
      const activeColumnIndex = state.tableColumnTitle.findIndex(column=>column.id===activeColumn);
      const overColumnIndex = state.tableColumnTitle.findIndex(column=>column.id===overColumn);
      state.tableColumnTitle = arrayMove(state.tableColumnTitle,activeColumnIndex,overColumnIndex);
    },
    renameColumnTitle(state,{payload}){
      const {columnId,newTitle}= payload;
      const activeColumnTitle = state.tableColumnTitle.findIndex(column=>column.id===columnId);
      activeColumnTitle&&(state.tableColumnTitle[activeColumnTitle].title = newTitle);
    },
    renameTable(state,{payload}){
      const {tableId,newName} = payload;
      
      const activeTableIndex = state.data.findIndex(item => item.id === tableId);
      try {
        state.data[activeTableIndex].tableName = newName;
      } catch (error) {
        console.log(error);
        
      }
    },
    // set các giá trị cho một task
    setValueByFieldName(state,{payload}){
      const {fieldName,value,taskId, tableId}= payload;
      const currentTable = state.data.findIndex(table=>table.id==tableId);
      const currentTask = state.data[currentTable].tableData.findIndex(task=>task.id==taskId);
      (state.data[currentTable].tableData[currentTask][`${fieldName}`]=value);
    },
  },
});

export const {setTableViewSize,removeColumnById,replaceRowTable,replaceRowPosition,replaceTableTitlePosition,renameTable,renameColumnTitle,setValueByFieldName} = TableViewReducer.actions;

export default TableViewReducer.reducer;
