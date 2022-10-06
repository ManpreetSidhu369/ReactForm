import React from 'react'
import { useState , useEffect} from 'react'
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';

export default function Formdesign() {
    const [Form, setForm] = useState({
        Name: '',
        DateBirth: '',
        HealthCard:'',
        Address:'',
        PhoneNumber:'',
        ChooseDoctor:'',
        DescribeAilment:''
    });
    const [FormErrors, setFormErrors] = useState({});
    const [isSubmit,setIsSubmit] = useState(false);
    const onChangeName = (e) =>{
        setForm({...Form,[e.target.name]:e.target.value});
        
    }
    
      const SubmitData = ()=>{
        console.log("Form:",Form); 
      
    } 
    const onSubmit = (e)=>{
        e.preventDefault();
        
        setFormErrors(validate(Form));
        setIsSubmit(true);
        
      
        
        
        
        
    };
    useEffect(() =>{
      console.log(FormErrors);
      if (Object.keys(FormErrors).length === 0 && isSubmit){
        console.log(Form);
        
      }
      

    }, [FormErrors]);

    const validate = (values) =>{
      const errors = {};
      
      if(!values.Name){
        errors.Name="Name is required";
      }
      if(!values.DateBirth){
        errors.DateBirth="DateOfBirth is required";
      }
      if(!values.HealthCard){
        errors.HealthCard="HealthCard is required";
      }else if(values.HealthCard.length === 8){
        errors.HealthCard ="Health Card  should be 9 digits";
      }
      if(!values.Address){
        errors.Address="Address is required";
      }
      if(!values.PhoneNumber){
        errors.PhoneNumber="PhoneNumber is required";
      }else if(values.PhoneNumber.length === 9){
        errors.HealthCard ="Phone Number  should be 10 digits";
      }
      if(!values.ChooseDoctor){
        errors.ChooseDoctor="Please Choose a Doctor";
      }
      if(!values.DescribeAilment){
        errors.DescribeAilment="DescribeAilment is required";
      }
      return errors;

    };
  return (
    <div className='container'>
      {Object.keys(FormErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Signed in successfully</div>
) : <pre>{JSON.stringify(Form, undefined, 2)}</pre> }
      <form onSubmit={onSubmit}>
  <div className="form-row">
    <div className="col-md-6">
      <label htmlfor="Name"  className='form-label'>Name</label>
      <input type="text" name="Name" className="form-control"  value={Form.Name} onChange={onChangeName} />
    </div>
    <p>{FormErrors.Name}</p>
    
  </div>
 
    <div className="col-md-6">
      <label htmlfor="date" className="form-label">Date Of Birth</label>
      <input type="date" className="form-control" name="DateBirth"  value={Form.DateBirth} onChange={onChangeName} id="date" />
    </div>
    <p>{FormErrors.DateBirth}</p>
    <div className="col-md-10">
      <label htmlfor="text" className="htmlform-label">Health Card Number</label>
      <input type="text" className="htmlform-control" id="inputPassword4" name="HealthCard"value={Form.HealthCard} onChange={onChangeName}/>
    </div>
    <p>{FormErrors.HealthCard}</p>
    <div className="col-12">
      <label htmlfor="inputAddress" className="form-label">Address</label>
      <input type="text" className="form-control" id="inputAddress" name="Address" value={Form.Address} onChange={onChangeName} />
    </div>
    <p>{FormErrors.Address}</p>
    
    <div className="col-md-6">
      <label htmlfor="inputPhone" className="form-label">Phone Number</label>
      <input type="text" className="form-control" id="inputPhone" name="PhoneNumber" value={Form.PhoneNumber} onChange={onChangeName}/>
    </div>
    <p>{FormErrors.PhoneNumber}</p>
    <div className="col-md-4">
      <label htmlfor="inputState" className="form-label">Choose Doctor</label>
      <select id="inputState" className="form-select" name="ChooseDoctor" onChange={onChangeName}>
        <option selected>Choose...</option>
        <option id='1' value="Dr Aman">Dr Aman</option>
        <option id='2' value="Dr Arsh">Dr Arsh</option>
        <option id='3' value="Dr Raman">Dr Raman</option>
        <option id='4' value="Dr Daman">Dr Daman</option>
      </select>
    </div>
    <p>{FormErrors.ChooseDoctor}</p>
    <div className="form-group">
    <label htmlfor="exampleFormControlTextarea1">Describe Ailment</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" name="DescribeAilment" rows="3" value={Form.DescribeAilment} onChange={onChangeName}></textarea>
  </div>
  <p>{FormErrors.DescribeAilment}</p>
    
  <div className="form-group">
    <div className="form-check">
      
      <label className="form-check-label" htmlfor="gridCheck">
        
      </label>
    </div>
  </div>
    
      
      <button type="submit" className="btn btn-primary" onClick={SubmitData}>Submit</button>
    
    </form>
    
  
  </div>
  )
}
