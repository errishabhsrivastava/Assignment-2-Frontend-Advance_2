import React, { useState, useEffect } from 'react';
import './App.css';
// import './ap.js';

function UserCard({ user }) {
  const [avatarUrl, setAvatarUrl] = useState('');

  useEffect(() => {
    async function fetchAvatar() {
      const response = await fetch(`https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`);
      setAvatarUrl(response.url);
    }

    fetchAvatar();
  }, [user]);

  return (
    <>
        <div className='cd'>
          <div className="card">
              <div className="images">
                <img src={avatarUrl} className="card-img-top" alt="Avatar" />
              </div>
                <div className="card-content">
                  <h5 className="card-title"><b></b>{user.name}</h5>
                  <h6 className="card-subtitle"><i className="fa fa-solid fa-envelope"></i>  {user.email}</h6>
                  <h6 className="card-subtitle"><i className="fa fa-regular fa-phone"></i>  {user.phone}</h6>
                  {/* <h6 className="card-subtitle"><b>Company: </b>{user.company.name}</h6> */}
                  <a href={user.website}><h6 className="card-subtitle" ><i className="fa fa-regular fa-globe"></i>  http://{user.website}</h6></a>
                  {/* <h6 className="card-subtitle"><b>Address: </b>{user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</h6> */}
                </div>
                <ul className='row'>
                  <li className='col-4' onClick={'onSelect()'}><i className="fa fa-regular fa-heart"></i></li>
                  <li className='col-4' type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i className="fa fa-regular fa-edit"></i></li>
                  <li className='col-4' id='trash' onClick={'onDelete()'}><i className="fa fa-regular fa-trash"></i></li>
                </ul>
          </div>
      <div class="ant-card modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">Edit Modal</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="mb-3">
              <label htmlFor="">Name :</label>
              <input type={Text} className='form-control' value={user.name} contentEditable='true'></input>
              </div>
              <div class="mb-3">
              <label htmlFor="">Email :</label>
              <input type={Text} className='form-control' value={user.email} contentEditable='true'></input>
              </div>
              <div class="mb-3">
              <label htmlFor="">Phone :</label>
              <input type={Number} className='form-control' value={user.phone} contentEditable='true'></input>
              </div>
              <div class="mb-3">
              <label htmlFor="">Website :</label>
              <input type={Text} className='form-control' value={user.website} contentEditable='true'></input>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
              <button type="button" class="btn btn-primary">Ok</button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setUsers(data);
    }

    fetchData();
  }, []);

  return (
    <>
    <h1 className='text-center'>User data</h1>
      <div className="container-fluid">
      <div className="row">
        {users.map(user => (
          <div className="col-lg-3" key={user.id}>
            <UserCard user={user} />
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default App;