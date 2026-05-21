import "./App.css";
import { useState } from "react";
import { data } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  const [handleForm, setHandleForm] = useState("-100%");

  const [students, setStudents] = useState([]);
  const [studentsForm, setStudentsForm] = useState({

    name: "",
    class: "",
    number: "",
    dob: ""

  });

  const [saveBtn, setSaveBtn] = useState(true);
  const [updateBtn, setUpdateBtn] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  const formToggle = () => {

    if (handleForm === "-100%") {

      setHandleForm("0px")

    } else {

      setHandleForm("-100%")

    }

  }

  const handleChange = (event) => {

    const { name, value } = event.target;

    if (name === "number") {

      const onlyNumbers = value.replace(/\D/g, "");

      setStudentsForm({

        ...studentsForm,
        [name]: onlyNumbers

      });

      return;

    }

    setStudentsForm({

      ...studentsForm,
      [name]: value

    });

  }

  const addStudents = () => {

    if (!studentsForm.name.trim()) {

      alert("Enter Student Name");
      return;

    }

    if (!studentsForm.class.trim()) {

      alert("Enter Student Class");
      return;

    }

    if (!studentsForm.number.trim()) {

      alert("Enter Mobile Number");
      return;

    }

    if (!studentsForm.dob) {

      alert("Select DOB");
      return;

    }

    if (studentsForm.number.length !== 10) {

      alert("Mobile Number Must Be 10 Digits");
      return;

    }

    if (!studentsForm.number[0].match(/[7-9]/)) {

      alert("Only Indian Number Allowed");
      return;

    }

    const isNumberExist = students.some((data) => (

      data.number === studentsForm.number

    ));

    if (isNumberExist) {

      alert("Mobile Number Already Exists");
      return;

    }

    setStudents([

      ...students,
      studentsForm

    ]);

    setStudentsForm({

      name: "",
      class: "",
      number: "",
      dob: ""

    });

  }

  const deleteStudent = (index) => {

    let message = confirm("Are You Want To Sure To Delete This Students Details?");

    if (message) {

      const allData = [...students];

      allData.splice(index, 1);

      setStudents(allData);

    }

  }

  const editStudent = (index) => {

    const allData = [...students];

    setStudentsForm({

      name: allData[index].name,
      class: allData[index].class,
      number: allData[index].number,
      dob: allData[index].dob

    });

    setCurrentIndex(index);

    setSaveBtn(false);
    setUpdateBtn(true);

    setHandleForm("0px");

  }

  const updateStudent = () => {

    const allData = [...students];

    if (currentIndex !== null) {

      const numberExist = allData.some((data, index) => {

        return data.number === studentsForm.number && currentIndex !== index

      })

      if (numberExist) {

        alert("Mobile Number Already Exist");
        return;

      }

      allData[currentIndex] = studentsForm;
      setStudents(allData);

      setSaveBtn(true);
      setUpdateBtn(false);

      setHandleForm("-100%");

      setStudentsForm({

        name: "",
        class: "",
        number: "",
        dob: ""

      });

      setCurrentIndex(null)

    }

  }

  return (

    <div className="container">

      {/* Left Section */}

      <div className="left-section">

        <div className="top-bar">

          <div>
            <h1>Student Management System</h1>
            <p>
              Manage student data with Add, Edit and Delete features.
            </p>
          </div>

          <button className="add-student-btn" onClick={formToggle}>
            Add Student
          </button>

        </div>

        {/* Table */}

        <div className="table-container">

          <table>

            <thead>

              <tr>
                <th>Sr No</th>
                <th>Name</th>
                <th>Class</th>
                <th>Number</th>
                <th>DOB</th>
                <th>Action</th>
              </tr>

            </thead>

            <tbody>

              {students.map((data, index) => (

                <tr key={index}>

                  <td>{index + 1}</td>
                  <td>{data.name}</td>
                  <td>{data.class}</td>
                  <td>{data.number}</td>
                  <td>{data.dob}</td>

                  <td>

                    <div className="action-btns">

                      <button className="edit-btn" onClick={() => { editStudent(index) }}>
                        Edit
                      </button>

                      <button className="delete-btn" onClick={() => { deleteStudent(index) }}>
                        Delete
                      </button>

                    </div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

      {/* Right Side Form */}

      <div className="right-section" style={{

        right: handleForm

      }}>

        {/* Form Header */}

        <div className="form-header">

          <h2>Student Form</h2>

          <button className="close-btn" onClick={formToggle}>

            <i className="ri-close-large-line"></i>

          </button>

        </div>

        <div className="form-group">

          <label>Name</label>

          <input
            type="text"
            placeholder="Enter Student Name"
            name="name"
            value={studentsForm.name}
            onChange={handleChange}
          />

        </div>

        <div className="form-group">

          <label>Class</label>

          <input
            type="text"
            placeholder="Enter Class"
            name="class"
            value={studentsForm.class}
            onChange={handleChange}
          />

        </div>

        <div className="form-group">

          <label>Number</label>

          <input
            type="number"
            placeholder="Enter Mobile Number"
            name="number"
            value={studentsForm.number}
            onChange={handleChange}
          />

        </div>

        <div className="form-group">

          <label>DOB</label>

          <input
            type="date"
            name="dob"
            value={studentsForm.dob}
            onChange={handleChange}
          />

        </div>

        <div className="form-buttons">

          {saveBtn && <button className="save-btn" onClick={addStudents}>
            Save
          </button>}

          {updateBtn && <button className="update-btn" onClick={updateStudent}>
            Update
          </button>}

        </div>

      </div>

    </div>

  );
}

export default App;