import React from 'react'
import "./List.css"
import { BsFillTrashFill, BsFillPencilFill } from 'react-icons/bs'

export const List = ({ rows, deleteRow, editRow, checkRow }) => {
  return (
    <div className='list-wrapper'>
      <table className='list'>
        <thead>
          <tr>
            <th>Id</th>
            <th className='expand'>Task</th>
            <th>Status</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            rows.map((row, idx) => {
              return (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td className={`expand ${row.checked ? 'checked' : ''}`}>
                    
                    {row.task}
                  </td>
                  <td>
                  <input 
                      type="checkbox" 
                      checked={row.checked} 
                      onChange={() => checkRow(idx)} 
                    />
                  </td>
                  <td className={`expand ${row.checked ? 'checked' : ''}`}>
                     {row.date}</td>
                  <td>
                    <span className='actions'>
                      <BsFillTrashFill className='dlt-btn' onClick={() => deleteRow(idx)} />
                      <BsFillPencilFill onClick={() => editRow(idx)} />
                    </span>
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  )
}
