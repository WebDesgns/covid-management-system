import React, { useState } from 'react';
import { firebase } from '../../firebase';
import MUIDataTable from "mui-datatables";

import * as filterData from "../../helpers/filter";
import { Tooltip } from '@mui/material';
import { Done, Error } from '@mui/icons-material';
import Popup from '../../components/popup/Popup';
import UserDeatilForm from '../user-details-form';
import Controls from "../../components/controls/Controls";

import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import FolderSharedIcon from '@mui/icons-material/FolderShared';



function AdminUser() {
    const { allMember } = filterData.GetAllMembers();
    const [record, setRecord] = useState();
    const [openMedicalRecordPopup, setOpenMedicalRecordPopup] = useState(false);

    const openInPopup = async (id) => {
        const doc = await firebase.firestore().collection('members').doc(id).get();
        setRecord(doc.data())
        setOpenMedicalRecordPopup(true);
    };

    const columns = [{
        name: "fullName",
        label: "Name",
    }, {
        name: "societyName",
        label: "Society Name",
    }, {
        name: "gender",
        label: 'Gender'
    }, {
        name: "age",
        label: "Age"
    }, {
        name: "address",
        label: "Address"
    }, {
        name: "vaccinated",
        label: "Vaccinated",
        options: {
            customBodyRender: (value, tableMeta, updateValue) => {
                if (value === true)
                    return (
                        <Tooltip title="Vaccinated">
                            <Done color="primary" />
                        </Tooltip>
                    );
                else
                    return (
                        <Tooltip title="Not Vaccinated">
                            <Error color="error" />
                        </Tooltip>
                    );
            }
        }
    }, {
        name: "docId",
        label: "Action",
        options: {
            customBodyRender: (value, tableMeta, updateValue) => {
                return (
                    <Controls.ActionButton
                        color="primary"
                        onClick={() => {
                            openInPopup(value);
                        }}
                    >
                        Records
                    </Controls.ActionButton>
                );
            }
        }
    }
    ];

    const options = {
        filter: true,
        filterType: "dropdown",
        responsive: "stacked",
        tableBodyHeight: "400px",
        tableBodyMaxHeight: "400px",
        selectableRows: false
    };


    return (
        <>
            <MUIDataTable
                title={"ACME Employee list"}
                data={allMember}
                columns={columns}
                options={options}
            />
            <Popup
                title="Medical Record"
                openPopup={openMedicalRecordPopup}
                setOpenPopup={setOpenMedicalRecordPopup}
                display="inline-block"
            >
                <UserDeatilForm item={record} />
            </Popup>
        </>
    )
}

export default AdminUser