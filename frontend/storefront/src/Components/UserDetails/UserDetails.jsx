import React from 'react';  
import { Formik, Field, Form, ErrorMessage } from 'formik';  
import {  
Row,  
Col,  
Container,  
Table  
} from 'react-bootstrap';  
import Axios from 'axios';  
import { toast } from 'react-toastify';  
import 'react-toastify/dist/ReactToastify.css';  
import 'bootstrap/dist/css/bootstrap.css';  
import { UserValidationSchema } from "../../Components/library/UserValdationSchema";  
  
toast.configure()  
toast.configure({  
   autoClose: 8000,  
   draggable: false,  
});  
const apiUrl = "http://localhost:4000/register";  
  
function validateMobile(value) {  
   let error = '';  
   const mob = /^[1-9]{1}[0-9]{9}$/;  
   if (value === '') {  
      error = 'Required';  
   } else if (!mob.test(value)) {  
      error = 'Invalid mobile number';  
      }  
   return error;  
}  
  
class UserDetails extends React.Component {  
state = {  
   userData: {},  
   userList: [],  
}  
  
componentDidMount() {  
   this.bindUserData();  
}  
bindUserData() {  
   Axios.get(`${apiUrl}`).then(  
   (result) => {  
      this.setState({  
      userList: result.data,  
      });  
   },  
(error) => {  
   this.setState({  
   error  
   });  
})  
}  
  
render() {  
   const txtAlign = {  
   'textAlign': 'left'  
}  
  
const colStyle = {  
   backgroundColor: '#002b48',  
   color: "#ffffff",  
   width: '60px'  
}  
return (  
  
   <Formik  
      validationSchema={UserValidationSchema}  
      initialValues={{  
      firstName: '',  
      lastName: '',  
      emailId: '',  
      password: '',  
      confirmPassword: '',  
      mobileNo: '',  
      address: '',  
      pinCode: '',  
      companyName: '',  
   }}  
  
onSubmit={async (input, { resetForm }) => {  
   await Axios.post(`${apiUrl}`, input).then(res => {  
      toast.success(res.data)  
      this.bindUserData();  
      resetForm({})  
   })  
.catch(err => {  
   toast.error('Something went wrong.');  
});  
}  
}  
render={({ errors, touched }) => (  
  
    <Container>  
        <Form>  
            <Row>  
                <Col>  
                    <h2>Registration Page uisng Formik</h2>  
                    <hr />  
                </Col>  
            </Row>  
            <Row>  
                <Col className="form-group" md={4} sm={4} xs={4} style={txtAlign}>  
                    <label htmlFor="firstName">First Name</label>  
                    <Field name="firstName" type="text" className={'form-control' + (errors.firstName && touched.firstName ? ' is-invalid' : '')} />  
                    <ErrorMessage name="firstName" component="div" className="invalid-feedback" />  
                </Col>  
                <Col className="form-group" md={4} sm={4} xs={4} style={txtAlign}>  
                    <label htmlFor="lastName">Last Name</label>  
                    <Field name="lastName" type="text" className={'form-control' + (errors.lastName && touched.lastName ? ' is-invalid' : '')} />  
                    <ErrorMessage name="lastName" component="div" className="invalid-feedback" />  
                </Col>  
                <Col md={4} className="form-group" sm={4} xs={4} style={txtAlign}>  
                    <label htmlFor="emailId">Email Name</label>  
                    <Field name="emailId" type="text" className={'form-control' + (errors.emailId && touched.emailId ? ' is-invalid' : '')} />  
                    <ErrorMessage name="emailId" component="div" className="invalid-feedback" />  
                </Col>  
            </Row>  
            <Row>  
                <Col className="form-group" md={4} sm={4} xs={4} style={txtAlign}>  
                    <label htmlFor="password">Password</label>  
                    <Field name="password" type="text" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />  
                    <ErrorMessage name="password" component="div" className="invalid-feedback" />  
                </Col>  
                <Col className="form-group" md={4} sm={4} xs={4} style={txtAlign}>  
                    <label htmlFor="confirmPassword">Confirm Password</label>  
                    <Field name="confirmPassword" type="text" className={'form-control' + (errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : '')} />  
                    <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback" />  
                </Col>  
                <Col className="form-group" md={4} sm={4} xs={4} style={txtAlign}>  
                    <label htmlFor="address">Address</label>  
                    <Field name="address" type="text" className={'form-control' + (errors.address && touched.address ? ' is-invalid' : '')} />  
                    <ErrorMessage name="address" component="div" className="invalid-feedback" />  
                </Col>  
            </Row>  
            <Row>  
                <Col md={8} sm={8} xs={8}>  
                    <Row>  
                        <Col className="form-group" md={6} sm={6} xs={6} style={txtAlign}>  
                            <label htmlFor="pinCode">Pin Code</label>  
                            <Field name="pinCode" type="text" className={'form-control' + (errors.pinCode && touched.pinCode ? ' is-invalid' : '')} />  
                            <ErrorMessage name="pinCode" component="div" className="invalid-feedback" />  
                        </Col>  
                        <Col className="form-group" md={6} sm={6} xs={6} style={txtAlign}>  
                            <label htmlFor="companyName">Company Name</label>  
                            <Field name="companyName" type="text" className={'form-control' + (errors.companyName && touched.companyName ? ' is-invalid' : '')} />  
                            <ErrorMessage name="companyName" component="div" className="invalid-feedback" />  
                        </Col>  
                    </Row>  
                </Col>  
                <Col className="form-group" md={4} sm={4} xs={4} style={txtAlign}>  
                    <label htmlFor="mobileNo">Mobile No</label>  
                    <Field validate={validateMobile} name="mobileNo" type="text" size={'sm'} className={'form-control' + (errors.mobileNo && touched.mobileNo ? ' is-invalid' : '')} />  
                    <ErrorMessage name="mobileNo" component="div" className="invalid-feedback" />  
                </Col>  
            </Row>  
            <Row>  
                <Col>  
                    <button type="submit" className="btn btn-primary mr-2">Register</button>  
                    <button type="reset" className="btn btn-secondary">Reset</button>  
                </Col>  
            </Row>  
        </Form>  
        <hr/>  
        <Row>  
            <Col>  
                <Table striped bordered hover size="sm">  
                    <thead style={colStyle}>  
                        <tr>  
                            <th>Sr.No</th>  
                            <th>First Name</th>  
                            <th>Last Name</th>  
                            <th>Email Id</th>  
                            <th>Mobile No</th>  
                            <th>Address</th>  
                            <th>Pine Code</th>  
                            <th>Company Name</th>  
                        </tr>  
                    </thead>  
                    <tbody>  
{this.state.userList.map((user, i) => (  
  
                        <tr key={user.UserId}>  
                            <td>{i + 1}</td>  
                            <td>{user.FirstName}</td>  
                            <td>{user.LastName}</td>  
                            <td>{user.EmailId}</td>  
                            <td>{user.MobileNo}</td>  
                            <td>{user.Address}</td>  
                            <td>{user.PinCode}</td>  
                            <td>{user.CompanyName}</td>  
                        </tr>  
))}  
  
  
                    </tbody>  
                </Table>  
            </Col>  
        </Row>  
    </Container>  
)}  
/>  
)  
}  
}  
  
export default UserDetails; 