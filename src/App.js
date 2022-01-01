import './bootstrap-5.0.2-dist/css/bootstrap.min.css';
import StudentForm from "./StudentForm";
import ListStudent from './ListStudent'
import { useState } from 'react'


function App() {

  const [listStudent, setListStudent] = useState([])
  const [updatedStudent, setUpdateStudent] = useState(undefined)
  //const [isEditUser, setisEditUser] = useState(false)


  const handleSubmit = (user) => {
    //console.log(user)
    setListStudent(preStudent => {
      const currentStudent = [...preStudent, {...user, id: Date.now()}]
      return currentStudent
    })
  }

  const handleDelete = student => {
    //console.log(student)
    const currentStudent = [...listStudent]
    const deleteUser = currentStudent.filter(_user => _user.id !== student.id)
    setListStudent(deleteUser)
    //setisEditUser(false)//hide button edit
    setUpdateStudent(undefined)
  }

  const handleEdit = (student) => {
    //console.log(student)
    setUpdateStudent(student)// get current user
    //setisEditUser(true)//display button edit
  }

  const handleSubmitEdit = (user) => {
    //console.log(user) // because it get from form
    const curentStudent = [...listStudent]
    const index = curentStudent.findIndex(student => student.id === updatedStudent.id)
    //console.log(index)
    if(index >= 0){
      const getUpdateStudent = {...user}
      curentStudent[index] = getUpdateStudent
      setListStudent(curentStudent)
    }
    //setisEditUser(false)
    setUpdateStudent(undefined)
  }



  return (
    <div className="App">
      <div className="container" style={{width: 1000}}>
        <StudentForm 
          handleSubmit={handleSubmit}
          //isEditUser={isEditUser}
          handleSubmitEdit={handleSubmitEdit}
          updatedStudent={updatedStudent}
        />
        <br/>
        <ListStudent 
          listStudent={listStudent}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      </div>
    </div>
  );
}

export default App;
