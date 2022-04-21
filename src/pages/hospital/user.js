import React, { useState } from 'react';
import { firebase } from '../../firebase';
import MUIDataTable from "mui-datatables";
import * as filterData from "../../helpers/filter";
import { Tooltip } from '@mui/material';
import { Done, Error } from '@mui/icons-material';
import Popup from '../../components/popup/Popup';
import UserDeatilForm from '../user-details-form';
import Controls from "../../components/controls/Controls";


import DeleteIcon from "@mui/icons-material/Delete";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Notification from '../../components/notification/Notification';
import ConfirmDialog from '../../components/confirmationDialog/ConfirmDialog';
import UserForm from '../user-form';
import { useAuth } from '../../context/auth';


function HospitalUser() {
    const { user } = useAuth();
    const { allMember } = filterData.GetAllMembers();
    const [record, setRecord] = useState();
    const [recordForEdit, setRecordForEdit] = useState(null);
    const [notify, setNotify] = useState({ isOpen: false, message: "", type: "" });
    const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: "", subTitle: "" });
    const [openMedicalRecordPopup, setOpenMedicalRecordPopup] = useState(false);
    const [openFormPopup, setFromPopup] = useState(false);

    const openInPopup = async (id) => {
        const doc = await firebase.firestore().collection('members').doc(id).get();
        setRecord(doc.data())
        setOpenMedicalRecordPopup(true);
    };
    const openPopup = async (id) => {
        const doc = await firebase.firestore().collection('members').doc(id).get();
        setRecordForEdit(doc.data());
        setFromPopup(true);
    };

    const onDelete = (id) => {
        setConfirmDialog({
            ...confirmDialog,
            isOpen: false,
        });

        filterData.deleteMember(id);
        setNotify({
            isOpen: true,
            message: "Deleted Successfully",
            type: "success",
        });
    };

    const addOrEdit = (memberdata, resetForm) => {
        if (memberdata.id === "0")
            filterData.insertMember(memberdata, user?.uid);
        else filterData.updateMember(memberdata);
        resetForm();
        setRecordForEdit(null);
        setFromPopup(false);
        setNotify({
            isOpen: true,
            message: "Submitted Successfully",
            type: "success",
        });
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
                    <>
                        <Controls.ActionButton
                            color="primary"
                            onClick={() => {
                                openPopup(value);
                            }}
                        >
                            <EditOutlinedIcon />
                        </Controls.ActionButton>
                        <Controls.ActionButton
                            onClick={() => {
                                openInPopup(value);
                            }}
                        >
                            <VisibilityIcon />
                        </Controls.ActionButton>
                        <Controls.ActionButton
                            color="secondary"
                            onClick={() => {
                                setConfirmDialog({
                                    isOpen: true,
                                    title: "Are you sure to delete this record?",
                                    subTitle:
                                        "You can't undo this operation",
                                    onConfirm: () => {
                                        onDelete(value);
                                    },
                                });
                            }}
                        >
                            <DeleteIcon />
                        </Controls.ActionButton>
                    </>

                );
            }
        }
    }
    ];

    const options = {
        filter: true,
        filterType: "dropdown",
        responsive: "stacked",
        tableBodyHeight: "550px",
        tableBodyMaxHeight: "600px",
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
                title="Member Form"
                openPopup={openFormPopup}
                setOpenPopup={setFromPopup}
            >
                <UserForm
                    recordForEdit={recordForEdit}
                    addOrEdit={addOrEdit}
                />
            </Popup>
            <Popup
                title="Medical Record"
                openPopup={openMedicalRecordPopup}
                setOpenPopup={setOpenMedicalRecordPopup}
                display="inline-block"
            >
                <UserDeatilForm item={record} />
            </Popup>
            <Notification notify={notify} setNotify={setNotify} />
            <ConfirmDialog confirmDialog={confirmDialog} setConfirmDialog={setConfirmDialog} />
        </>
    );
}

export default HospitalUser;
