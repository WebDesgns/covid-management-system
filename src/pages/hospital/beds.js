import React, { useState } from "react";
import MaterialTable from "material-table";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import VisibilityIcon from "@mui/icons-material/Visibility";

import { green } from "@mui/material/colors";

const BloodGroop = [
  { id: 1, blood: "A+" },
  { id: 2, blood: "Ab+" },
  { id: 3, blood: "Ab-" }
];

const Society = [
  { id: 1, society: "ioit" },
  { id: 2, society: "coe" }
];

const Gender = [
  { id: 1, gender: "male" },
  { id: 2, gender: "female" },
  { id: 3, gender: "other" }
];

const bedType = [
  { id: 1, bedType: "normal" },
  { id: 2, bedType: "oxygen" },
  { id: 3, bedType: "icu" }
];

function Beds() {
  var obj = BloodGroop.reduce(function (acc, cur, i) {
    acc[cur.id] = cur.blood;
    return acc;
  }, {});

  var bed = bedType.reduce(function (acc, cur, i) {
    acc[cur.id] = cur.bedType;
    return acc;
  }, {});

  var obj2 = Society.reduce(function (acc, cur, i) {
    acc[cur.id] = cur.society;
    return acc;
  }, {});

  var obj3 = Gender.reduce(function (acc, cur) {
    acc[cur.id] = cur.gender;
    return acc;
  }, {});

  const [Data, setData] = useState([
    {
      bedNumber: 3,
      bedType: 1,
      name: "rohit divekar",
      blood: 1,
      gender: 1,
      society: 1,
      startDate: "02/02/2022",
      endDate: "12/02/2022"
    },
    {
      bedNumber: 3,
      bedType: 1,
      name: "prasun ",
      blood: 3,
      gender: 1,
      society: 2,
      startDate: "02/02/2022",
      endDate: "12/02/2022"
    },
    {
      bedNumber: 3,
      bedType: 1,
      name: "manish ",
      blood: 3,
      gender: 1,
      startDate: "02/02/2022",
      endDate: "12/02/2022",
      society: 1
    }
  ]);
  const columns = [
    { title: "Bed Number", field: "bedNumber", type: "numeric", align: "left" },
    { title: "Bed Type", field: "bedType", lookup: bed },
    { title: "Patient Name", field: "name" },
    { title: "Blood Group", field: "blood", lookup: obj },
    { title: "Gender", field: "gender", lookup: obj3 },
    { title: "society", field: "society", lookup: obj2 },
    { title: "Start date", field: "startDate", type: "date" },
    { title: "End Date", field: "endDate", type: "date" }
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
              }, 100);
            }),
          onRowUpdate: (newRow, oldRow) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const updatedData = [...Data];
                updatedData[oldRow.Data.id] = newRow;
                setData(updatedData);
                resolve();
              }, 500);
            }),
          onRowDelete: (selectedRow) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataDelete = [...Data];
                dataDelete.splice(selectedRow.Data.id, 1);
                setData([...dataDelete]);
                resolve();
              }, 500);
            })
        }}
        actions={[
          {
            icon: () => <VisibilityIcon sx={{ color: green[500] }} />,
            tooltip: "View Presciption",
            onClick: (data) => console.log(data)
          }
        ]}
        title="Bed Information"
        options={{
          pageSizeOptions: [5, 10, 20, 50, 100],
          paginationType: "stepped",
          showFirstLastPageButtons: false,
          exportButton: true,
          exportAllData: true,
          addRowPosition: "first",
          actionsColumnIndex: -1,
          rowStyle: (data, index) =>
            index % 2 ===0 ? { background: "#f5f5f5" } : null,
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
