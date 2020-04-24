import React from "react"

function PizzaForm(props){
    const {
        values,
        onInputChange,
        onCheckboxChange,
        onSubmit,
        disabled,
        errors,
    } = props

    return (
        <form className='Form Container'>
            <h2>Build Your Own Pizza</h2>

            <div className='errors'>
                {errors.name}
                {errors.size}
            </div>
            
            <br />
            
            <label>Name: &nbsp;
                
                <input
                    value={values.name}
                    onChange={onInputChange}
                    name='name'
                    type='text'
                /></label>
            <br />
            
                {/* ///////////DROPDOWN////////// */}

            <label>Size: &nbsp;
                <select
                
                    value={values.size}
                    onChange={onInputChange}
                    name='size'
                    >
                        <option defaultValue=''>Please Choose</option>
                        <option value='pepporoni'>pepporoni</option>
                        <option value='olives'>olives</option>
                        <option value='chicken'>chicken</option>
                        <option value='peppers'>peppers</option>

                </select></label>
                <br />
                {/* /////////CHECKBOXES/////////// */}

                <label>Toppings: <input
                checked={values.toppings.pepperoni}
                onChange={onCheckboxChange}
                name='pepperoni'
                type='checkbox' />pepperoni</label>

                <label><input
                checked={values.toppings.olives}
                onChange={onCheckboxChange}
                name='olives'
                type='checkbox' />olives</label>

                <label><input
                checked={values.toppings.chicken}
                onChange={onCheckboxChange}
                name='chicken'
                type='checkbox' />chicken</label>

                <label><input
                checked={values.toppings.peppers}
                onChange={onCheckboxChange}
                name='peppers'
                type='checkbox' />peppers</label>

                <br />
                <label>Special Instructions: &nbsp;
                
                <input
                    value={values.name}
                    onChange={onInputChange}
                    name='name'
                    type='text'
                /></label>
                
                <br />
                <button onClick={onSubmit} disabled={disabled}>submit</button>           
        </form>
    )

}


export default PizzaForm