import React from "react";
import { useForm, Form } from "../../components/use-form/use-form";
import Controls from "../../components/controls/Controls";
import { Grid } from "@mui/material";
import * as filterData from '../../utils/filter';

const genderItems = [
    { id: "male", title: "Male" },
    { id: "female", title: "Female" },
    { id: "other", title: "Other" },
];

const initialFValues = {
    id: 0,
    pinCode: "",
    fullName: "",
    email: "",
    mobile: "",
    city: "",
    gender: "male",
    SocietyName: "",
    Vaccinated: false,
};

function UserForm(props) {
    
    const validate = (fieldValues = values) => {
        let temp = {...errors}
        if ('fullName' in fieldValues)
            temp.fullName = fieldValues.fullName ? "" : "This field is required."
        if ('email' in fieldValues)
            temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid."
        if ('mobile' in fieldValues)
            temp.mobile = fieldValues.mobile.length > 9 ? "" : "Minimum 10 numbers required."
        if ('SocietyName' in fieldValues)
            temp.SocietyName = fieldValues.SocietyName ? "" : "This field is required."
        setErrors({
            ...temp
        })
        console.log(errors);
        if (fieldValues === values)
            return Object.values(temp).every(x => x === "") //every() methods tests whether all the array passes the test
    
    }
    
    const { values, setValues, handleInputChange, errors, setErrors, resetForm } = useForm(initialFValues, true, validate);
    
    const handleSubmit = event => {
        event.preventDefault()
        if (validate()) {
            //addOrEdit(values, resetForm);
        }
    }

    return (
        <Form  onSubmit={handleSubmit}>
            <Grid container>
                <Grid item lg={6} xs={12}>
                    <Controls.Input
                        name="pinCode"
                        label="Pincode"
                        value={values.pinCode}
                        onChange={handleInputChange}
                        error={errors.fullName}
                    />
                    <Controls.Input
                        name="fullName"
                        label="Full Name"
                        value={values.fullName}
                        onChange={handleInputChange}
                        error={errors.fullName}
                    />
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
                </Grid>
                <Grid item lg={6} xs={12}>
                    <Controls.RadioGroup
                        name="gender"
                        label="Gender"
                        value={values.gender}
                        onChange={handleInputChange}
                        items={genderItems}
                    />
                    <Controls.Select
                        name="SocietyName"
                        label="Society"
                        value={values.SocietyName}
                        onChange={handleInputChange}
                        options={filterData.getSocietyCollection(values.pinCode)}
                        error={errors.SocietyName}
                    />
                    <Controls.Checkbox
                        name="Vaccinated"
                        label="Vaccinated"
                        value={values.Vaccinated}
                        onChange={handleInputChange}
                    />
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
