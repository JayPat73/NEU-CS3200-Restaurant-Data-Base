import userService from "./user-service"
const {useState, useEffect} = React;
const {useParams, useHistory} = window.ReactRouterDOM;
const UserFormEditor = () => {
        const{id} = useParams()
        const [user, setUser] = useState({})
        useEffect(() => {
                if(id !== "new"){
                        findUserById(id)
                }
        }, []);
        const findUserById = (id) =>
            userService.findUserById(id).then(user => setUser(user))
        const deleteUser = (id) =>
            userService.deleteUser(id).then(() => history.back())
        const createUser = (user) =>
            userService.createUser(user).then(() => history.back())
        const updateUser = (id, newUser) =>
            userService.updateUser(id, newUser).then(() => history.back())
        return (
            <div>
                    <h2>User Editor</h2>
                    <label>Id</label>
                    <input value={user.id}/>
                    <input className="form-control"/>
                    <label>First Name</label>
                    <input
                        onChange={(e) =>
                            setUser(user =>
                                ({...user, firstName: e.target.value}))}
                        value={user.firstName}/>
                    <input className="form-control"/>
                    <label>Last Name</label>
                    <input
                        onChange={(e) =>
                            setUser(user =>
                                ({...user, lastName: e.target.value}))}
                        value={user.lastName}/>
                    <input className="form-control"/>
                    <label>Username</label>
                    <input
                        onChange={(e) =>
                            setUser(user =>
                                ({...user, username: e.target.value}))}
                        value={user.username}/>
                    <input className="form-control"/>
                    <label>Password</label>
                    <input
                        onChange={(e) =>
                            setUser(user =>
                                ({...user, password: e.target.value}))}
                        value={user.password}/>
                    <input className="form-control"/>
                    <label>Email</label>
                    <input
                        onChange={(e) =>
                            setUser(user =>
                                ({...user, email: e.target.value}))}
                        value={user.email}/>
                    <input className="form-control"/>
                    <label>Date of Birth</label>
                    <input
                        onChange={(e) =>
                            setUser(user =>
                                ({...user, dateOfBirth: e.target.value}))}
                        value={user.dateOfBirth}/>
                    <input className="form-control"/>
                    <br/>
                    <button className="btn btn-warning"
                            onClick={() => {history.back()}}>
                            Cancel
                    </button>
                    <button className="btn btn-danger"
                            onClick={() => deleteUser(user.id)}>
                            Delete
                    </button>
                    <button className="btn btn-primary"
                            onClick={() => updateUser(user.id, user)}>
                            Save
                    </button>
                    <button className="btn btn-success"
                            onClick={() => createUser(user)}>
                            Create
                    </button>
            </div>
        )
}

export default UserFormEditor