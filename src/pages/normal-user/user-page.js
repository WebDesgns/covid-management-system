import React, { useState } from "react";
import PageHeader from "../../components/page-header/page-header";
import UserForm from "./user-form";
import SideBar from "../../components/sidebar/side-bar";
import TopNav from "../../components/top-nav/top-nav";
import Controls from "../../components/controls/Controls";
import useTable from "../../components/useTable/useTable";
import Popup from "../../components/popup/Popup";
import UserDeatilForm from "./user-details-form";
import Prescription from "../../pages/Prescription";
import * as filterData from "../../utils/filter";

import { makeStyles } from "@mui/styles";
import { Paper, TableBody, TableCell, TableRow, Toolbar } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import AddIcon from "@mui/icons-material/Add";
import HomeIcon from "@mui/icons-material/Home";
import CloseIcon from "@mui/icons-material/Close";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import Notification from "../../components/notification/Notification";
import ConfirmDialog from "../../components/confirmationDialog/ConfirmDialog";

const useStyles = makeStyles({
    pageContent: {
        margin: "auto",
        marginBottom: "24px",
        padding: "24px",
        maxWidth: "1100px",
        backgroundColor: "whitesmoke !important",
    },
    newButton: {
        position: "absolute",
        right: "100px",
    },
});

const menuItems = [
    {
        link: "/userpage",
        section: "home",
        icon: <HomeIcon />,
        text: "Home",
    },
];

const headCells = [
    { id: "fullName", label: "Members" },
    { id: "gender", label: "Gender", disableSorting: true },
    { id: "actions", label: "Actions", disableSorting: true },
];

function UserPage() {
  const classes = useStyles();

    const [recordForEdit, setRecordForEdit] = useState(null);
    const [records, setRecords] = useState(filterData.getAllMembers());
    const [openPopup, setOpenPopup] = useState(false);
    const [openPopupDetails, setOpenPopupDetails] = useState(false);
    const [notify, setNotify] = useState({
        isOpen: false,
        message: "",
        type: "",
    });
    const [confirmDialog, setConfirmDialog] = useState({
        isOpen: false,
        title: "",
        subTitle: "",
    });

  const { TblContainer, TblHead } = useTable(records, headCells);

    const addOrEdit = (employee, resetForm) => {
        if (employee.id === 0) filterData.insertMember(employee);
        else filterData.updateMember(employee);
        resetForm();
        setRecordForEdit(null);
        setOpenPopup(false);
        setRecords(filterData.getAllMembers());
        setNotify({
            isOpen: true,
            message: "Submitted Successfully",
            type: "success",
        });
    };
    const openInPopup = (item) => {
        setRecordForEdit(item);
        setOpenPopup(true);
    };
    const openInPopupDetails = (item) => {
        setRecordForEdit(item);
        setOpenPopupDetails(true);
    };

    const onDelete = (id) => {
        setConfirmDialog({
            ...confirmDialog,
            isOpen: false,
        });
        filterData.deleteMember(id);
        setRecords(filterData.getAllMembers());
        setNotify({
            isOpen: true,
            message: "Deleted Successfully",
            type: "error",
        });
    };

    return (
        <>
        <SideBar menuItems={menuItems} />
        <div className="main">
            <div className="main__content">
                <TopNav />
                <PageHeader
                    title="Last Name"
                    subTitle="Aparment No: 110 Member: 4"
                    icon={<PeopleIcon />}
                />
                <Paper className={classes.pageContent} elevation={6}>
                    <Toolbar right>
                        <Controls.Button
                            text="Member"
                            startIcon={<AddIcon />}
                            className={classes.newButton}
                            onClick={() => {
                                setOpenPopup(true);
                                setRecordForEdit(null);
                            }}
                        />
                    </Toolbar>
                    <TblContainer>
                        <TblHead />
                        <TableBody>
                            {records.map((item) => (
                                <TableRow key={item.id}>
                                    <TableCell
                                        onClick={() => {
                                            openInPopupDetails(item);
                                        }}
                                    >
                                        {item.fullName}
                                    </TableCell>
                                    <TableCell>
                                        {item.gender}
                                    </TableCell>
                                    <TableCell>
                                        <Controls.ActionButton
                                            color="primary"
                                            onClick={() => {
                                                openInPopup(item);
                                            }}
                                        >
                                            <EditOutlinedIcon fontSize="small" />
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
                                                        onDelete(item.id);
                                                    },
                                                });
                                            }}
                                        >
                                            <CloseIcon fontSize="small" />
                                        </Controls.ActionButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </TblContainer>
                </Paper>
                <Popup
                    title="Member Form"
                    openPopup={openPopup}
                    setOpenPopup={setOpenPopup}
                >
                    <UserForm
                        recordForEdit={recordForEdit}
                        addOrEdit={addOrEdit}
                    />
                </Popup>
                <Popup
                    title="Prescription List"
                    openPopup={openPopupDetails}
                    setOpenPopup={setOpenPopupDetails}
                    display="inline-block"
                >
                    {/* <UserDeatilForm item={recordForEdit} /> */}
                    <Prescription />
                </Popup>
                <Notification notify={notify} setNotify={setNotify} />
                <ConfirmDialog
                    confirmDialog={confirmDialog}
                    setConfirmDialog={setConfirmDialog}
                />
            </div>
        </div>
        </>
    );
}

export default UserPage;
