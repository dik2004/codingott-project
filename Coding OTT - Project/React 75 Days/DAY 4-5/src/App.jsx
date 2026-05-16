const App = () => {

  return (

    <div style={{
      minHeight: "100vh",
      backgroundColor: "#EEEEEE"
    }}>

      <nav style={{
        backgroundColor: "#FFFFFF",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "5px 30px",
        borderBottom: "1px solid #EEEEEE",
        overflow: "hidden",
        height: "60px"
      }}>

        <div className="logo">

          <img src="https://t4.ftcdn.net/jpg/00/24/48/79/360_F_24487944_nxBNrSS0tJjzuCOF4gaULZ3xdR0ef5tJ.jpg" alt="Logo" loading="lazy" width={"150px"} />

        </div>

        <div className="menu-con">

          <ul style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            listStyle: "none",
            gap: "25px",
            fontSize: "16px",
            color: "#323232"
          }}>
            <li style={{cursor: "pointer"}}>Home</li>
            <li style={{cursor: "pointer"}}>Services</li>
            <li style={{cursor: "pointer"}}>About</li>
            <li style={{cursor: "pointer"}}>Contact</li>
          </ul>

        </div>

      </nav>

    </div>

  )

};

export default App