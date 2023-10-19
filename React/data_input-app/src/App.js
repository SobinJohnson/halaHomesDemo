import React, {useState, useEffect} from "react"
import api from './api'

const App = () => {
  const [users,setUsers] =  useState([]);
  const [formData, setFormData] = useState({
    name: "",
    profile: "",
    category: "",
    description: ""
  });

const fetchUser = async () => {
  const response = await api.get('/userdata/');
  setUsers(response.data)
};

useEffect(() => {
  fetchUser();
}, []);

const handleInputChange = (event) => {
  const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
  setFormData({
    ...formData,
    [event.target.name]: value
  });
};
const handleFormSubmit = async (event) => {
  event.preventDefault();
  await api.post('/userdata/', formData);
  fetchUser();
  setFormData({
    name: "",
    profile: "",
    category: "",
    description: ""
  });
};

 return (
  <div>
    <nav className="navbar navbar-dark bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
        HalaHomes
        </a>
      </div>
    </nav>
    <div className="container">
      <form onSubmit={handleFormSubmit}>
        <div className="mb-3 mt-3">
          <label htmlFor= 'name' className="form-label">
            Name:
          </label>
          <input type='text' className="form-control" id='name' name="name" onChange={handleInputChange} value={formData.name}></input>
        </div>

        <div className="mb-3">
          <label htmlFor= 'profile' className="form-label">
            Profile:
          </label>
          <input type='text' className="form-control" id='profile' name="profile" onChange={handleInputChange} value={formData.profile}></input>
        </div>

        <div className="mb-3">
          <label htmlFor= 'category' className="form-label">
          Category:
          </label>
          <input type='text' className="form-control" id='category' name="category" onChange={handleInputChange} value={formData.category}></input>
        </div>

        <div className="mb-3">
          <label htmlFor= 'description' className="form-label">
            Description:
          </label> 
          <input type='text' className="form-control" id='description' name="description" onChange={handleInputChange} value={formData.description}></input>
        </div>
        <button type="submit" className="btn btn-primary mb-3">Submit</button>
      </form>

      <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Profile</th>
            <th>Category</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user)=> (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.profile}</td>
              <td>{user.category}</td>
              <td>{user.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  </div>
 )
}
export default App;
