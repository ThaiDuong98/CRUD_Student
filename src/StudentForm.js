import { useState, useEffect } from 'react'
import './bootstrap-5.0.2-dist/css/bootstrap.min.css'

const StudentForm = ({handleSubmit, handleSubmitEdit, updatedStudent}) => {
    
    const [user, setUser] = useState({
        id: '',
        userName: '',
        studentCode: '',
        phoneNumber: '',
        address: '',
        email: '',
        sex: 'none',
        major: ""
    })

    const [errors, setErrors] = useState({
        userName: '',
        studentCode: '',
        phoneNumber: '',
        address: '',
        email: '',
        sex: '',
        major: ""
    })

    
    const resetUser = () => {
        setUser({
            id: '',
            userName: '',
            studentCode: '',
            phoneNumber: '',
            address: '',
            email: '',
            sex: '',
            major: ""
        })
    }

    const resetError = () => {
        setErrors({
            userName: '',
            studentCode: '',
            phoneNumber: '',
            address: '',
            email: '',
            sex: '',
            major: ""
        })
    }

    const isEnableButtonSubmit = () => {
        for(let key in errors){
            if(errors[key] !== '' || user[key] === '') return false
        }
        return true
    }

    const onHandleChange = e => {
        const name = e.target.name
        const value = e.target.value
        setUser({
          ...user,
          [name]: value
        })
        //console.log(user)
        //validate here check empty value, when typing, error text will disable
        resetError()
      }

    // const handleOnSubmitEdit = () => {
    //     if(handleSubmitEdit){
    //         handleSubmitEdit(user)
    //     }
    //     resetUser()
    // }

    const onHandleSubmit = (e) => {
        e.preventDefault()

        // for(let key in errors){
        //     if(errors[key] !== '' || user[key] === ''){
        //         return 
        //     }
        // }

        if(updatedStudent){
            if(handleSubmitEdit){
                handleSubmitEdit(user)
            }
            resetUser()
        }else{
            if(handleSubmit){
                handleSubmit(user)
            }
            resetUser()
        }
    }

    useEffect(() => {
        if(updatedStudent){
            setUser(updatedStudent)
        }else{
            resetUser()
        }
    }, [updatedStudent])

    const checkValidate = (e) => {
        const {name, value} = e.target
        const newErrors = {...errors}
        //console.log(name, value)
        if(value.trim() === ""){
            //console.log(`${name} is required`)
            newErrors[name] = `${name} is require` // or newErrors.name
            //console.log(newErrors)
            setErrors(newErrors)
        }else{
            resetError()
        }

        if(name ==='userName'){
            if(value.split('').length < 2){
                newErrors[name] = `${name} must be at least 2 characters`
            }else{
                newErrors[name] = ''
            }
        }

        if(name === 'studentCode'){
            if(value.split('').length > 6 || value.split('').length < 6){
                newErrors[name] = `${name} is 6 characters`
            }else{
                newErrors[name] = ''
            }
        }

        if(name ==='phoneNumber'){
            if(isNaN(value) || value.split('').length > 10 || value.split('').length < 10){
                newErrors[name] = `${name} is invalid`
            }else{
                newErrors[name] = ''
            }
        }

        if(name === 'email'){
            const regex =
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(!regex.test(value)){
                newErrors[name] = `${name} is invalid`
            }else{
                newErrors[name] = ''
            }
        }
        setErrors(newErrors)
    }


    return (
        <div>
            <form className="row g-3" onSubmit={onHandleSubmit}>
                <div className="col-md-6">
                    <label className="form-label">Username</label>
                    <input 
                        type="text" 
                        className="form-control"  
                        name="userName"
                        value={user.userName}
                        onChange={onHandleChange}
                        onBlur={checkValidate}
                    />
                    <small className="text-danger">{errors.userName}</small>
                </div>
                <div className="col-md-6">
                    <label className="form-label">student code</label>
                    <input 
                        type="text" 
                        className="form-control"
                        name="studentCode" 
                        value={user.studentCode}
                        onChange={onHandleChange}
                        onBlur={checkValidate}
                    />
                    <small className="text-danger">{errors.studentCode}</small>
                </div>
                <div className="col-md-6">
                    <label className="form-label">Phone Number</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="phoneNumber" 
                        value={user.phoneNumber}
                        onChange={onHandleChange}
                        onBlur={checkValidate}
                    />
                    <small className="text-danger">{errors.phoneNumber}</small>
                </div>
                <div className="col-md-6">
                    <label f className="form-label">Major</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="major" 
                        value={user.major}
                        onChange={onHandleChange}
                        onBlur={checkValidate}
                    />
                    <small className="text-danger">{errors.major}</small>
                </div>
                <div className="col-12">
                    <label className="form-label">Address</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="address"
                        value={user.address}
                        onChange={onHandleChange}
                        onBlur={checkValidate}
                    />
                    <small className="text-danger">{errors.address}</small>
                </div>
                <div className="col-md-6">
                    <label className="form-label">Email</label>
                    <input 
                        type="text" 
                        className="form-control"
                        name="email"
                        value={user.email}
                        onChange={onHandleChange}
                        onBlur={checkValidate}
                    />
                    <small className="text-danger">{errors.email}</small>
                </div>
                <div className="col-md-6">
                    <label className="form-label">Sex</label>
                    <select 
                        className="form-select" 
                        name="sex"
                        value={user.sex}
                        onChange={onHandleChange}
                        onBlur={checkValidate}
                    >
                        <option value='' >Please select your gender</option>
                        <option value='Male'>Male</option>
                        <option value='Femle'>Femle</option>
                        <option value='Other'>Other</option>
                    </select>
                    <small className="text-danger">{errors.sex}</small>
                </div>
                <div className="col-12">
                     <button 
                        type='submit'
                        className="btn btn-primary"
                        disabled={!isEnableButtonSubmit()}
                    >{updatedStudent ? "Edit" : "Submit"}</button>
                </div>
            </form>
        </div>
    )
}

export default StudentForm
