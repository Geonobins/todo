import React, {useState} from 'react'
import './Model.css'

export const Model = ({ closeModel, onSubmit,defaultValue}) => {
    const [formState, setFormState] = useState(defaultValue || {
        task: "",
        date: ""
    });
    
    const [errors,setErrors] = useState("");


    const validateForm = () => {
        if(formState.task && formState.date){
            setErrors("");
            return true;   
        }
        else{
            let errorfields = [];
            for(const [key,value] of Object.entries(formState)){
                if(!value){
                    errorfields.push(key )
                }
            }
            setErrors(errorfields.join(", "));
            return false;
        }
    };

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!validateForm()) return;
            onSubmit(formState);
            closeModel();

        
    }

  return (
    <div className="model-container" 
    onClick={ (e)=> {
        if(e.target.className == "model-container")
            closeModel();
        }}>
        <div className='model'>
           <form>
                <div className='form-group'>    
                    <label htmlFor='task'>Task</label>
                    <textarea name='task' value={formState.task} onChange={handleChange}/>
                </div>
                <div className='form-group'>    
                    <label htmlFor='date'>Date</label>
                    <input type='date' name='date' value={formState.date} onChange={handleChange}/>
                </div>
                {errors && <div className='errors'>Please include the feilds: {errors}</div>}
                <button type='submit' className='btn' onClick={handleSubmit}>Submit</button>
           </form>
        </div>
    </div>
  )
}
