import React, { useState } from "react";
import MaterialTable from "material-table";

import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import VisibilityIcon from "@mui/icons-material/Visibility";

import { green } from "@mui/material/colors";


const BloodGroup = [
    { id: 1, blood: "A+" },
    { id: 2, blood: "Ab+" },
    { id: 3, blood: "Ab-" }
];

const Society = [
    { id: 1, society: "ioit" },
    { id: 2, society: "co bbbb chgdgtfh h vy tyf b bbbbbbbbbbb bbbbbe" }
];

const Gender = [
    { id: 1, gender: "male" },
    { id: 2, gender: "female" },
    { id: 3, gender: "other" }
];

function HospitalSociety() {
    var obj = BloodGroup.reduce(function (acc, cur, i) {
        acc[cur.id] = cur.blood;
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
            flatNo: "102",
            name: "rohit divekar",
            age: 21,
            blood: 1,
            time: "12pm",
            society: 1,
            phone: 1234567890,
            gender: 1
        },
        {
            flatNo: "102",
            name: "rohit divekar",
            age: 21,
            blood: 1,
            time: "12pm",
            society: 1,
            phone: 1234567890,
            gender: 1
        },
        {
            flatNo: "102",
            name: "rohit divekar",
            age: 21,
            blood: 1,
            time: "12pm",
            society: 1,
            phone: 1234567890,
            gender: 1
        },
        {
            flatNo: "172",
            name: "rohit divekar",
            age: 21,
            blood: 1,
            time: "12pm",
            society: 1,
            phone: 1234567890,
            gender: 1
        },
        {
            flatNo: "112",
            name: "rohit divekar",
            age: 21,
            blood: 1,
            time: "12pm",
            society: 1,
            phone: 1234567890,
            gender: 1
        },
        {
            flatNo: "12",
            name: "rohit divekar",
            age: 21,
            blood: 1,
            time: "12pm",
            society: 1,
            phone: 1234567890,
            gender: 1
        },
        {
            flatNo: "A-101",
            name: "prasun ",
            age: 22,
            blood: 1,
            time: "2pm",
            society: 2,
            phone: 123456745,
            gender: 1
        },
        {
            flatNo: "101",
            name: "manish ",
            age: 20,
            blood: 1,
            time: "6pm",
            society: 1,
            phone: 123656890,
            gender: 1
        }
    ]);
    const columns = [
        { title: "Flat", field: "flatNo", align: 'center', type: "numeric" },
        { title: "Name", field: "name", defaultSort: "asc" },
        { title: "Blood Group", field: "blood", align: 'center', lookup: obj },
        { title: "Gender", field: "gender", align: 'center', lookup: obj3 },
        { title: "Age", field: "age", align: 'center', type: "numeric" },
        { title: "Society", field: "society", align: 'center', lookup: obj2 },
        { title: "Phone", field: "phone", sorting: false, type: "numeric", align: 'center', grouping: false }
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

                    onRowDelete: (selectedRow) =>
                        new Promise((resolve, reject) => {
                            const updatedData = [...Data];
                            updatedData.splice(selectedRow.Data.id, 1);
                            setData();
                            resolve();
                        })
                }}
                actions={[
                    {
                        icon: () => <VisibilityIcon sx={{ color: green[500] }} size="small" />,
                        tooltip: "View Medical Record",
                        onClick: (data) => console.log(data)
                    }
                ]}
                title="All Users"
                options={{
                    pageSizeOptions: [5, 10, 20, 50, 100],
                    paginationType: "stepped",
                    showFirstLastPageButtons: false,
                    exportButton: true,
                    exportAllData: true,
                    addRowPosition: "first",
                    actionsColumnIndex: -1,
                    rowStyle: (data, index) =>
                        index % 2 === 0 ? { background: "#f5f5f5" } : null,
                    headerStyle: { background: "lightblue" }
                }}
                icons={{
                    Delete: () => <DeleteIcon style={{ color: "#bf3d69" }} />,
                    Add: () => <AddIcon style={{ color: "green" }} />
                }}
            />
        </div>
    );
}

export default HospitalSociety;
