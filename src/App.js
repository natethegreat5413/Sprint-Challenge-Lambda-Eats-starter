import React, {useState, useEffect} from "react";
// import { Route, Switch } from "react-router-dom";
// import { Link } from "react-router-dom";
import axios from "axios";
import * as yup from "yup"
import Home from "./components/Home";
import Pizza from './components/Pizza';
import PizzaForm from './components/PizzaForm'

const url = 'https://reqres.in/api/users'

const initialFormValues = {
  name: '',
  size: '',
  toppings: {
    pepporoni: false,
    olives: false,
    chicken: false,
    peppers: false,
  },
  instructions: '',
}


const initialFormErrors = {
  name: '',
}

const formSchema = yup.object().shape({
  name: yup
  .string()
  .min(2, 'name must have at lease 2 characters!')
  .required('name is required!'),
})



export default function App() {
  const [users, setUsers] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formDisabled, setFormDisabled] = useState(true)
  const [formErrors, setFormErrors] = useState(initialFormErrors)

  const postUsers = user => {
    axios.post(url, user)
    .then(res => {
      setUsers([...users, res.data])
    })
    .catch(error => {

    })
  }

useEffect(() => {
  formSchema.isValid(formValues)
  .then(valid => {
    setFormDisabled(!valid)
  })
}, [formValues])


const onSubmit = evt => {
  evt.preventDefault()

  const newPizza = {
    name: formValues.name,
    size: formValues.size === 'small' ? false : true,
    toppings: Object.keys(formValues.toppings)
      .filter(topping => formValues.toppings[topping] === true)
  }
  postUsers(newPizza)
  setFormValues(initialFormValues)
  debugger
}

const onInputChange = evt => {
  const name = evt.target.name
  const value = evt.target.value
  yup.reach(formSchema, name)
  .validate(value)
  .then(valid => {

    setFormErrors({
      ...formErrors,
      [name]: '',
    })
  })
  .catch(error => {
    setFormErrors({
      ...formErrors,
      [name]: error.errors[0]
    })
  })
  setFormValues({
    ...formValues,
    [name]: value,
  })
}

const onCheckboxChange = evt => {
  const { name } = evt.target
  const isChecked = evt.target.isChecked

  setFormValues({
    ...formValues,

    [name]: isChecked,
  })
}


  
  return (
   
   <div className='container'>
     <Home />
    
    <div>
      
      <Pizza />
        

        
      <PizzaForm 
      values={formValues}
      onInputChange={onInputChange}
      onCheckboxChagne={onCheckboxChange}
      onSubmit={onSubmit}
      disabled={formDisabled}
      errors={formErrors}/>
         
    </div>
    
   </div>

  );
};

