import './Table.css'
import dummyData from './DATA.json';
import * as React from 'react';
import { useTable } from 'react-table';

export default function Table() {
  console.log(dummyData);
  const data = React.useMemo(()=> dummyData, []);
  const columns = React.useMemo(() => [
    {
    Header:'ID',
    accessor: 'id',
    },
    {
    Header:'First Name',
    accessor: 'first_name',
    },
    {
    Header: 'Last Name',
    accessor: 'last_name',
    },
    {
    Header:'Email',
    accessor: 'email',
    },
    {
    Header:'Gender',
    accessor: 'gender',
    },
    {
    Header:'University',
    accessor: 'university',
    },
  ], []);

  const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = useTable({ columns, data });

  return (
      <div className='container'>
        <table {...getTableProps}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column)=> (
                  <th {...column.getHeaderProps}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  ))}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
  )
}
