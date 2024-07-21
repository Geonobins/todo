import { useState } from 'react'
import './App.css'
import { List } from './components/List/List'
import { Model } from './components/Model/Model'

function App() {
  const [modelOpen, setModelOpen] = useState(false);
  const [rowToEdit, setRowToEdit] = useState(null);

  const [rows, setRows] = useState([
    { id: "1", task: "Task 1", date: "2010-10-10", checked: false },
    { id: "2", task: "Task 2", date: "2011-10-20", checked: false },
    { id: "3", task: "Task 3", date: "2011-02-20", checked: false }
  ]);

  const handleDelete = (targetIndex) => {
    setRows(rows.filter((_, idx) => idx !== targetIndex));
  };

  const handleSubmit = (newRow) => {
    rowToEdit === null ?
      setRows([...rows, { ...newRow, checked: false }]) :
      setRows(rows.map((currRow, idx) => {
        if (idx !== rowToEdit) return currRow;
        return { ...newRow, checked: currRow.checked };
      }));
  };

  const handleEditRow = (idx) => {
    setRowToEdit(idx);
    setModelOpen(true);
  };

  const handleCheckRow = (idx) => {
    setRows(rows.map((row, i) => {
      if (i === idx) {
        return { ...row, checked: !row.checked };
      }
      return row;
    }));
  };

  return (
    <div className='App'>
      <List rows={rows} deleteRow={handleDelete} editRow={handleEditRow} checkRow={handleCheckRow} />
      <button className='btn' onClick={() => { setModelOpen(true) }}>Add Task</button>
      {modelOpen && (
        <Model
          closeModel={() => {
            setModelOpen(false);
            setRowToEdit(null);
          }}
          onSubmit={handleSubmit}
          defaultValue={rowToEdit !== null && rows[rowToEdit]}
        />
      )}
    </div>
  );
}

export default App;
