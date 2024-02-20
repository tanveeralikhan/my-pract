import { useState } from "react";
import  "./addEmployee.css";
import { useLocation, useNavigate } from "react-router-dom";

const AddEmployee=()=>{
    const [formData, setFormData] = useState({
        firstname: "",
        lastName:"",
        phone:"",
        email: "",
      });
      const navigate = useNavigate();
    
      const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
      };
    
      const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        navigate("/employeeDetails",{state:{...formData}})
        
      };
    return (
    <form onSubmit={handleSubmit}>
        <div className="form-wrapper">
            <div className="label-wrapper">
                <label htmlFor="firstname" className="label-field">First Name:</label>
                <input  
                className="input-field"
                type="text"
                id="firstname"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                />
            </div>
        
            <div className="label-wrapper" >
                <label htmlFor="lastName" className="label-field">Last Name:</label>
                <input
                className="input-field"
                type="email"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                />
            </div>
        </div>
        <div className="form-wrapper">
            <div className="label-wrapper">
                <label htmlFor="phone" className="label-field">Phone:</label>
                <input
                className="input-field"
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                />
            </div>
        
            <div className="label-wrapper">
                <label htmlFor="email" className="label-field">Email:</label>
                <input
                className="input-field"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                />
            </div>
        </div>
        <div className="button-wrapper"><button className="employee-button-class" type="submit">Submit</button></div>
       
      </form>)
}
export default AddEmployee