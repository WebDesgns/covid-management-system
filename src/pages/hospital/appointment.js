import React, { useState } from "react";
import MaterialTable from "material-table";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

const Society = [
  { id: 1, society: "aissms ioit comp bbbbbb  bbbbbbbbb bbbbbbbbbbbbbb" },
  { id: 2, society: "coe" }
];

const Gender = [
  { id: 1, gender: "male" },
  { id: 2, gender: "female" },
  { id: 3, gender: "other" }
];

const Doctor = [
  { id: 1, doctor: "sadaphule" },
  { id: 2, doctor: "chetan" },
  { id: 3, doctor: "navle" }
];

function Beds() {
  var obj = Doctor.reduce(function (acc, cur, i) {
    acc[cur.id] = cur.doctor;
    return acc;
  }, {});
  var obj2 = Society.reduce(function (acc, cur, i) {
    acc[cur.id] = cur.society;
    return acc;
  }, {});
 

  const [Data, setData] = useState([
    {
      name: "rohit divekar",
      date: "2/2/2022",
      time: "12pm",
      society: 1,
      phone: 1234567890,
      doctor: 1
    },
    {
      name: "prasun ",
      time: "2pm",
      date: "2/2/2022",
      society: 2,
      phone: 123456745,
      doctor: 2
    },
    {
      name: "manish ",
      time: "6pm",
      date: "2/2/2022",
      society: 1,
      phone: 123656890,
      doctor: 3
    }
  ]);
  const columns = [
    { title: "Patient Name", field: "name", defaultSort: "asc" },
    { title: "Doctor", field: "doctor", lookup: obj },
    { title: "Date", field: "date", type: "date" },
    { title: "time", field: "time", type: "time", hour12: true },
    { title: "society", field: "society", align: "center", lookup: obj2 },
    {
      title: "Phone Number",
      field: "phone",
      align: "center",
      sorting: false,
      type: "numeric"
    }
  ];

  return (
    <div className="Table-Container">
      <MaterialTable
        columns={columns}
        data={Data}
        editable={{
          onRowAdd: (newData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                setData([...Data, newData]);
                resolve();
              }, 10);
            }),
          onRowUpdate: (newRow, oldRow) =>
            new Promise((resolve, reject) => {
              const updatedData = [...Data];
              updatedData[oldRow.Data.id] = newRow;
              setData(updatedData);
              setTimeout(() => resolve(), 500);
            }),
          onRowDelete: (selectedRow) =>
            new Promise((resolve, reject) => {
              const updatedData = [...Data];
              updatedData.splice(selectedRow.Data.id, 1);
              setData();
            })
        }}
        title="Appointments"
        options={{
          pageSizeOptions: [5, 10, 20, 50, 100],
          paginationType: "stepped",
          showFirstLastPageButtons: false,
          exportButton: true,
          exportAllData: true,
          addRowPosition: "first",
          actionsColumnIndex: -1,
          rowStyle: (data, index) =>
            index % 2 == 0 ? { background: "#f5f5f5" } : null,
          headerStyle: { background: "lightblue" }
        }}
        icons={{
          Edit: () => <EditIcon style={{ color: "grey" }} />,
          Delete: () => <DeleteIcon style={{ color: "#bf3d69" }} />,
          Add: () => <AddIcon style={{ color: "green" }} />
        }}
      />
    </div>
  );
}
export default Beds;
