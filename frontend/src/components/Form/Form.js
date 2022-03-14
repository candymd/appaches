import React from 'react';
import './Form.css'

function Form() {
return (
    <>
    <h1>AÑADIR</h1>
    <div className="input-group-row-3">
        <div>
            <label htmlFor="">Fecha</label>
            <input  type="date" id="date"  name="experience_date" className=""/>
        </div>
    </div>
    </>
)
}
export default Form


