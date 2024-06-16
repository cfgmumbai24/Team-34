import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";

const Form = ({props}) => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m="20px">
      <Header title="USER" subtitle="Profile" />

            <div>
              Name :
              <TextField
                fullWidth
                variant="filled"
                type="text"
                value={props.name}
                name="firstName"
                sx={{ gridColumn: "span 2" }}
              />
              </div>
             
              <div>
              Email :
              <TextField
                fullWidth
                variant="filled"
                type="text"
                value = {props.email}
                sx={{ gridColumn: "span 4" }}
              />
              </div>
              <div>
              Contact Number :
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label={props.mentor_phone}
                sx={{ gridColumn: "span 4" }}
              />
              </div>
             
          
            
        
    </Box>
  );
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  address1: yup.string().required("required"),
  address2: yup.string().required("required"),
});
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
};

export default Form;