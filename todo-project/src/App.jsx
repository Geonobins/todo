import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { List } from './components/List/List'
import { Model } from './components/Model/Model'


function App() {
  const [modelOpen, setModelOpen] = useState(false);

  const [rowToEdit, setRowEdit] = useState(null);

  
  const [rows,setRows] = useState([
    {id:"1",task:"Task 1",date:"2010-10-10"},
    {id:"2",task:"Task 2",date:"2011-10-20"},
    {id:"3",task:"Task 3",date:"2011-02-20"}
  ]);

  

  const handleDelete  = (targetIndex) => {
    setRows(rows.filter((_,idx) => idx !== targetIndex));
  };

  const handleSubmit = (newRow) => {
    rowToEdit === null ?
    setRows([...rows, newRow]):
    setRows(rows.map((currRow,idx) => {
      if (idx !== rowToEdit) return currRow;
      return newRow;
    }))
  };

  const handleEditRow = (idx) => {
    setRowEdit(idx);
    setModelOpen(true);
    
  };

  return (
    <div className='App'>
      <List rows={rows} deleteRow={handleDelete} editRow={handleEditRow}/>
      <button className='btn' onClick={()=>{setModelOpen(true)}}>Add Task</button>
      {modelOpen && (
        <Model
          closeModel={() => {
            setModelOpen(false);
            setRowEdit(null);
          }}
          onSubmit={handleSubmit}
          defaultValue={rowToEdit !== null && rows[rowToEdit]}
        />
      )}
    </div>
    
  );
}

export default App
