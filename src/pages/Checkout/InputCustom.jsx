
import { useField } from 'formik'



const InputCustom = ({ label, ...props }) => {
  const [ field, meta ] = useField(props);

  return (
    <>
      
      <label htmlFor={label} className='col'> {label} </label>
      {/* classes change style if there is error */}
      <input {...field} {...props} className={meta.touched && meta.error ? 'input-error form-control col' : ' form-control col'} />
      {/* if field has been left and there is error, error div appears */}    
      {meta.touched && meta.error && <div className='input-error__msg'>{meta.error}</div>}
    
   
    </>
  )
}


export default InputCustom;