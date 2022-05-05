import React, { useEffect } from "react";
import { useForm, Form } from "../components/use-form/use-form";
import Controls from "../components/controls/Controls";
import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, TextField } from "@mui/material";
import { DesktopDatePicker, LocalizationProvider } from '@mui/lab';
import DateAdapter from '@mui/lab/AdapterMoment';
import MomentUtils from "@date-io/moment";
import * as filterData from '../helpers/filter';

const options = [
    { id: 0, value: 'Yes' },
    { id: 1, value: 'No' },
]
const genderItems = [
    { id: "Male", value: "Male" },
    { id: "Female", value: "Female" },
    { id: "Other", value: "Other" },
];
const Alcoholoptions = [
    { id: 0, value: 'Daily' },
    { id: 1, value: 'Weekly' },
    { id: 2, value: 'Monthly' },
    { id: 3, value: 'Occasionally' },
    { id: 4, value: 'Never' },
]
const Diseases = [
    { id: 0, value: 'Asthma' },
    { id: 1, value: 'Cancer' },
    { id: 2, value: 'Cardiac disease' },
    { id: 3, value: 'Diabetes' },
    { id: 4, value: 'Hypertension' },
    { id: 5, value: 'Psychiatric disorder' },
    { id: 6, value: 'Epilepsy' },
]
const Allergies = [
    { id: 0, value: 'Asthma' },
    { id: 1, value: 'Cancer' },
    { id: 2, value: 'Cardiac disease' },
    { id: 3, value: 'Diabetes' },
    { id: 4, value: 'Hypertension' },
    { id: 5, value: 'Psychiatric disorder' },
    { id: 6, value: 'Epilepsy' },
]
const Symptoms = [
    { id: 0, value: 'Chest pain' },
    { id: 1, value: 'Respiratory' },
    { id: 2, value: 'Weight gain' },
    { id: 3, value: 'Weight loss' },
    { id: 4, value: 'Cardiovascular' },
    { id: 5, value: 'Hematological' },
    { id: 6, value: 'Lymphatic' },
    { id: 7, value: 'Gastrointestinal' },
    { id: 8, value: 'Genitourinary' },
    { id: 9, value: 'Neurological' },
    { id: 10, value: 'Psychiatric' },
    { id: 11, value: 'Musculoskeletal' },
]
const initialFValues = {
    id: "0",
    familyId: "",
    pinCode: "",
    fullName: "",
    email: "",
    mobile: "",
    city: "",
    gender: "Male",
    societyName: "",
    vaccinated: false,
    address: "",
    age: 0,
    dob: "",
    covid: "",
    medication: "",
    tobacco: "",
    alcohol: "",
    guardianName: "",
    guardianAddress: "",
    guardianNo: "",
    medicalCareProvider: "",
    medicalCareProviderAdress: "",
    insuranceCompany: "",
    insuranceCompanyAddress: "",
    policyNo: "",
    policyExpiryDate: "",
    diseases: [],
    symptoms: [],
    allergies: [],
    medicines: [],
};

function UserForm(props) {
    const { addOrEdit, recordForEdit } = props;

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('fullName' in fieldValues)
            temp.fullName = fieldValues.fullName ? "" : "This field is required."
        if ('email' in fieldValues)
            temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid."
        if ('mobile' in fieldValues)
            temp.mobile = fieldValues.mobile.length > 9 ? "" : "Minimum 10 numbers required."
        if ('SocietyName' in fieldValues)
            temp.societyName = fieldValues.societyName ? "" : "This field is required."

        setErrors({
            ...temp
        })

        if (fieldValues === values)
            return Object.values(temp).every(x => x === "") //every() methods tests whether all the array passes the test

    }

    const { values, setValues, handleInputChange, handleChange, handleDateChange1, handleDateChange2, errors, setErrors, resetForm } = useForm(initialFValues, true, validate);
    console.log(values);

    const handleSubmit = event => {
        event.preventDefault()
        if (validate()) {
            addOrEdit(values, resetForm);
        }
    }
    useEffect(() => {
        if (recordForEdit !== null)
            setValues({
                ...recordForEdit
            })
    }, [recordForEdit]);

    return (
        <Form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item lg={6} xs={12}>
                    <Controls.Input
                        name="pinCode"
                        label="Pincode"
                        value={values.pinCode}
                        onChange={handleInputChange}
                        error={errors.fullName}
                    />
                    <Controls.Select
                        name="societyName"
                        label="Society"
                        value={values.societyName}
                        onChange={handleInputChange}
                        options={filterData.GetSocietyCollection()}
                        error={errors.societyName}
                    />
                    <Controls.RadioGroup
                        name="gender"
                        label="Gender"
                        value={values.gender}
                        onChange={handleInputChange}
                        items={genderItems}
                    />
                    <Controls.Input
                        name="fullName"
                        label="Full Name"
                        value={values.fullName}
                        onChange={handleInputChange}
                        error={errors.fullName}
                    />
                    <Controls.Input
                        label="Age"
                        name="age"
                        onChange={handleInputChange}
                        error={errors.Age}
                        type="number"
                    />
                    <LocalizationProvider dateAdapter={DateAdapter} utils={MomentUtils}>
                        <DesktopDatePicker
                            label="Date of Birth"
                            naem='dob'
                            format='MMMM D, YYYY'
                            inputFormat="MMMM D, YYYY"
                            value={values.dob}
                            onChange={handleDateChange1}
                            renderInput={(params) => <TextField {...params} />}
                            disableMaskedInput={true}
                        />
                    </LocalizationProvider>
                    <Controls.Input
                        label="Email"
                        name="email"
                        value={values.email}
                        onChange={handleInputChange}
                        error={errors.email}
                    />
                    <Controls.Input
                        label="Mobile"
                        name="mobile"
                        value={values.mobile}
                        onChange={handleInputChange}
                        error={errors.mobile}
                    />
                    <Controls.Input
                        label="City"
                        name="city"
                        value={values.city}
                        onChange={handleInputChange}
                        error={errors.city}
                    />
                    <Controls.Input
                        label="Address"
                        name="address"
                        value={values.address}
                        onChange={handleInputChange}
                        error={errors.address}
                        multiline
                        rows={2}
                    />
                    <h3 style={{ paddingLeft: '7px' }}>MEDICAL INSURANCE</h3>
                    <Controls.Input
                        label="Name of Insurance Company"
                        name="insuranceCompany"
                        value={values.insuranceCompany}
                        onChange={handleInputChange}
                        error={errors.insuranceCompany}
                    />
                    <Controls.Input
                        label="Policy Number"
                        name="policyNo"
                        value={values.policyNo}
                        onChange={handleInputChange}
                        error={errors.policyNo}
                    />
                    <LocalizationProvider dateAdapter={DateAdapter} utils={MomentUtils}>
                        <DesktopDatePicker
                            label="Expiry Date"
                            name='policyExpiryDate'
                            format='MMMM D, YYYY'
                            inputFormat="MMMM D, YYYY"
                            value={values.policyExpiryDate}
                            onChange={handleDateChange2}
                            renderInput={(params) => <TextField {...params} />}
                            disableMaskedInput={true}
                        />
                    </LocalizationProvider>
                    <Controls.Input
                        label="Address"
                        name="medicalCareProviderAdress"
                        value={values.medicalCareProviderAdress}
                        onChange={handleInputChange}
                        error={errors.medicalCareProviderAdress}
                        multiline
                        rows={2}
                    />

                    <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
                        <FormLabel component="legend">Check the Allergies that you currently have</FormLabel>
                        <FormGroup>
                            {
                                Allergies.map((item) => (
                                    <FormControlLabel key={item.id}
                                        control={
                                            <Checkbox value={item.value} onChange={handleChange} name="diseases" />
                                        }
                                        label={item.value}
                                    />
                                ))
                            }
                            <TextField label='Any Other' name="diseases" variant="standard" />
                        </FormGroup>
                    </FormControl>

                    <Controls.RadioGroup
                        name="vaccinated"
                        label="Vaccinated"
                        value={values.vaccinated}
                        onChange={handleInputChange}
                        items={options}
                    />
                    <Controls.RadioGroup
                        name="covid"
                        label="Covid"
                        value={values.covid}
                        onChange={handleInputChange}
                        items={options}
                    />
                    <Controls.RadioGroup
                        name="medication"
                        label="Are you currently taking any medication?"
                        value={values.medication}
                        onChange={handleInputChange}
                        items={options}
                    />
                    <Controls.RadioGroup
                        name="tobacco"
                        label="Do you use or do you have history of using tobacco"
                        value={values.tobacco}
                        onChange={handleInputChange}
                        items={options}
                    />
                    <Controls.RadioGroup
                        name="alcohol"
                        label="How often do you consume alcohol?"
                        value={values.alcohol}
                        onChange={handleInputChange}
                        items={Alcoholoptions}
                    />
                </Grid>
                <Grid item lg={6} xs={12}>
                    <h3 style={{ paddingLeft: '7px' }}>IN CASE OF EMERGENCY</h3>
                    <Controls.Input
                        label="Your Guardian Name"
                        name="guardianName"
                        value={values.guardianName}
                        onChange={handleInputChange}
                        error={errors.guardianName}
                    />
                    <Controls.Input
                        label="Guardian Address"
                        name="guardianAddress"
                        value={values.guardianAddress}
                        onChange={handleInputChange}
                        error={errors.guardianAddress}
                        multiline
                        rows={2}
                    />
                    <Controls.Input
                        label="Your Guardian Phone No"
                        name="guardianNo"
                        value={values.guardianNo}
                        onChange={handleInputChange}
                        error={errors.guardianNo}
                    />
                    <Controls.Input
                        label="Medical Provider"
                        name="medicalCareProvider"
                        value={values.medicalCareProvider}
                        onChange={handleInputChange}
                        error={errors.medicalCareProvider}
                    />
                    <Controls.Input
                        label="Medical Provider Address"
                        name="medicalCareProviderAdress"
                        value={values.medicalCareProviderAdress}
                        onChange={handleInputChange}
                        error={errors.medicalCareProviderAdress}
                    />
                    <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
                        <FormLabel component="legend">Check the conditions that apply to you or to any members of your immediate relatives:</FormLabel>
                        <FormGroup>
                            {
                                Diseases.map((item) => (
                                    <FormControlLabel key={item.id}
                                        control={
                                            <Checkbox value={item.value} onChange={handleChange} name="diseases" />
                                        }
                                        label={item.value}
                                    />
                                ))
                            }
                            <TextField label='Any Other' name="diseases" variant="standard" />
                        </FormGroup>
                    </FormControl>
                    <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
                        <FormLabel component="legend">Check the symptoms that you're currently experiencing:</FormLabel>
                        <FormGroup>
                            {
                                Symptoms.map((item) => (
                                    <FormControlLabel key={item.id}
                                        control={
                                            <Checkbox value={item.value} onChange={handleChange} name="symptoms" />
                                        }
                                        label={item.value}
                                    />
                                ))
                            }
                            <TextField label='Any Other' name="symptoms" variant="standard" />
                        </FormGroup>
                    </FormControl>
                    <div>
                        <Controls.Button
                            type="submit"
                            text="Submit"
                        />
                        <Controls.Button
                            text="Reset"
                            color="error"
                            onClick={resetForm}
                        />
                    </div>
                </Grid>
            </Grid>
        </Form>
    );
}

export default UserForm;
