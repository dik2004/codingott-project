import "./App.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");
  const [allUser, setAllUser] = useState([]);

  const [updateBtn, setUpdateBtn] = useState(false);
  const [addBtn, setAddBtn] = useState(true);

  const [currentIndex, setCurrentIndex] = useState(null);

  const addUser = () => {

    if (!Number(userId)) {

      alert("Enter User ID");
      return;

    }
    else if (!userName) {

      alert("Enter User Name");
      return;

    }

    const isUserExist = allUser.some((data) => {

      return data.userId === userId;

    });

    if (isUserExist) {

      alert("User ID Already Exists");
      return;

    }

    let currentDate = new Date();

    setAllUser([...allUser, {

      userId: userId,
      userName: userName,
      createdAt: currentDate.toLocaleDateString() + " at " + currentDate.toLocaleTimeString()

    }])

    setUserId("");
    setUserName("");

  };

  const deleteUser = (index) => {

    let message = confirm("Are You Want To Sure To Delete This User?");

    if (message) {

      const userBackup = [...allUser];
      userBackup.splice(index, 1);
      setAllUser(userBackup);

    }

  }

  const editUser = (index) => {

    const currentData = [...allUser];

    setUserId(currentData[index].userId);
    setUserName(currentData[index].userName);
    setUpdateBtn(true);
    setAddBtn(false);
    setCurrentIndex(index);

  }

  const updateUser = () => {

    if (currentIndex !== null) {

      const isUserExist = allUser.some((data, index) => {

        return data.userId === userId && index !== currentIndex

      });

      if (isUserExist) {

        alert("User ID Already Exists");
        return;

      }

    }

    const currentData = [...allUser];

    currentData[currentIndex].userId = userId;
    currentData[currentIndex].userName = userName;

    setAllUser(currentData);
    setUpdateBtn(false);
    setAddBtn(true);

    setUserId("");
    setUserName("");

  }

  return (

    <div className="container">

      <div className="card">

        <div className="heading">
          <h1>React 75 Days Challenge</h1>
          <p>DAY 16 - CRUD Operations using useState</p>
        </div>

        {/* Form Section */}

        <div className="user-form">

          <div className="input-group">
            <label>User ID</label>

            <input
              type="number"
              placeholder="Enter User ID"
              value={userId}
              onChange={(e) => { setUserId(e.target.value.trim()) }}
            />
          </div>

          <div className="input-group">
            <label>User Name</label>

            <input
              type="text"
              placeholder="Enter User Name"
              value={userName}
              onChange={(e) => { setUserName(e.target.value.trim()) }}
            />
          </div>

          {addBtn && <button className="add-btn" onClick={addUser}>
            Add User
          </button>}

          {updateBtn && <button className="add-btn" onClick={updateUser}>
            Update User
          </button>}

        </div>

        {/* Table Section */}

        <div className="table-section">

          <div className="table-header">
            <span>ID</span>
            <span>Name</span>
            <span>createdAt</span>
            <span>Actions</span>
          </div>

          {allUser.map((data, index) => (

            <div className="table-row" key={index}>

              <span>{data.userId}</span>
              <span>{data.userName}</span>
              <span>{data.createdAt}</span>

              <div className="actions">

                <button className="edit-btn" onClick={() => { editUser(index) }}>
                  Edit
                </button>

                <button className="delete-btn" onClick={() => { deleteUser(index) }}>
                  Delete
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>

  );
}

export default App;