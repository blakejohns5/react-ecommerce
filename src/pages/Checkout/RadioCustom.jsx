
import { useField } from 'formik'



const InputCustom = ({ label, ...props }) => {

  const [ field, meta ] = useField(props);

  return (
    <>
      
    
      
        <input {...field} {...props} className={meta.touched && meta.error ? 'input-error form-check-input' : 'form-check-input'} />
        <label htmlFor={label} className='form-check-label'>{label}</label>
      {meta.touched && meta.error && <div className='input-error__msg'>{meta.error}</div>}
    
   
    </>
  )
}


export default InputCustom;