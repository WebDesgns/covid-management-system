import React, { useContext, useEffect, useState } from "react";
import PageHeader from "../../components/page-header/page-header";
import UserForm from "../user-form";
import SideBar from "../../components/sidebar/side-bar";
import TopNav from "../../components/top-nav/top-nav";
import Controls from "../../components/controls/Controls";
import Popup from "../../components/popup/Popup";
import UserDeatilForm from "../user-details-form";
import Prescription from "../../pages/Prescription";
import * as filterData from "../../helpers/filter";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import { makeStyles } from "@mui/styles";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Toolbar,
  TableHead,
} from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import AddIcon from "@mui/icons-material/Add";
import HomeIcon from "@mui/icons-material/Home";
import CloseIcon from "@mui/icons-material/Close";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import Notification from "../../components/notification/Notification";
import ConfirmDialog from "../../components/confirmationDialog/ConfirmDialog";
import { useAuth } from "../../context/auth";

const useStyles = makeStyles({
  table: {
    marginTop: "24px",
    maxWidth: "1000px",
    margin: "auto",
    border: "1px solid whitesmoke",
    "& thead th": {
      fontWeight: "500",
      color: "white",
      backgroundColor: "#3b3b3b",
    },
    "& tbody td": {
      fontWeight: "300",
    },
    "& tbody tr:hover": {
      backgroundColor: "white",
      cursor: "pointer",
    },
  },
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
  { id: "fullName", label: "Members", align: "" },
  { id: "gender", label: "Gender", align: "" },
  { id: "actions", label: "Actions", align: "center" },
];


function UserPage() {
  const { user } = useAuth();
  const classes = useStyles();
  const [recordForEdit, setRecordForEdit] = useState(null);
  const { members } = filterData.GetMembers(user?.uid);
  const [openPopup, setOpenPopup] = useState(false);
  const [openPopupDetails, setOpenPopupDetails] = useState(false);

  function save(){
    const input = document.getElementById('save');
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png')
      const pdf = new jsPDF('portrait', "mm", 'a4')
      pdf.addImage(imgData, 'JPEG', 0, 0)
      pdf.save('download.pdf')
    })
  }

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

  const addOrEdit = (memberdata, resetForm) => {
    if (memberdata.id === "0")
      filterData.insertMember(memberdata, user?.uid);
    else filterData.updateMember(memberdata);
    resetForm();
    setRecordForEdit(null);
    setOpenPopup(false);
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
    setNotify({
      isOpen: true,
      message: "Deleted Successfully",
      type: "success",
    });
  };

  return (
    <>
      <SideBar menuItems={menuItems} />
      <div className="main">
        <div className="main__content">
          <PageHeader
            title="Last Name"
            subTitle="Aparment No: 110 Member: 4"
            icon={<PeopleIcon />}
          />
          <Paper className={classes.pageContent} elevation={6}>
            <Toolbar>
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
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  {headCells.map((headCell) => (
                    <TableCell key={headCell.id}>
                      {headCell.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {members.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell
                      onClick={() => {
                        openInPopupDetails(item);
                      }}
                    >
                      {item.fullName}
                    </TableCell>
                    <TableCell>{item.gender}</TableCell>
                    <TableCell align="center">
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
                              onDelete(
                                item.docId
                              );
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
            </Table>
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
            <UserDeatilForm item={recordForEdit} />
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
