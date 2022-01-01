import './bootstrap-5.0.2-dist/css/bootstrap.min.css'

const ListStudent = ({listStudent, handleDelete, handleEdit}) => {

    const onHanldeDelete = (student) => {
        if(handleDelete){
            handleDelete(student)
        }
    }

    const onHandleEdit = (student) => {
        if(handleEdit){
            handleEdit(student)
        }
    }

    return (
        <div>
            <p className="fs-3">List Student</p>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Username</th>
                        <th scope="col">Sex</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Email</th>
                        <th scope="col">Major</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {listStudent && listStudent.map((student, index) => (
                        <tr key={index}>
                            <td>{student.id}</td>
                            <td>{student.userName}</td>
                            <td>{student.sex}</td>
                            <td>{student.phoneNumber}</td>
                            <td>{student.email}</td>
                            <td>{student.major}</td>
                            <td>
                                <button className="btn btn-outline-success" onClick={() => onHandleEdit(student)}>Edit</button>
                                <button className="btn btn-outline-danger" onClick={() => onHanldeDelete(student)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ListStudent
