import ExpTable from "./components/table/ExpTable"
import "./App.css"
import { useState } from "react"
import { empContext } from "./components/context/empContext"
import Update from "./components/modals/Update"
import Create from "./components/modals/Create"

function App() {
  const [emp, setEmp] = useState([
    {
      designation: "Software Architect",
      company: "TY",
      from: "May 2021",
      to: "May 2021",
      city: "Bengaluru",
    },
    {
      designation: "Software Dev",
      company: "TY",
      from: "Jan 2021",
      to: "Jun 2021",
      city: "Mumbai",
    },
    {
      designation: "Software Architect",
      company: "TY",
      from: "Feb 2021",
      to: "Sep 2021",
      city: "Delhi",
    },
  ])

  const [show, setShow] = useState(false)
  const [modal, setModal] = useState("")
  const [curIndex, setCurIndex] = useState(0)
  const close = () => {
    setShow(false)
  }
  const open = (type, i) => {
    setShow(true)
    setModal(type)
    setCurIndex(i)
  }

  const add = (data) => {
    const temp = [...emp, data]
    setEmp(temp)
  }
  const update = (data) => {
    const temp = [...emp]
    temp.splice(curIndex, 1, data)
    setEmp(temp)
  }
  const remove = (index) => {
    const temp = [...emp]
    temp.splice(index, 1)
    setEmp(temp)
    setCurIndex(0)
  }
  const data = { emp, update, add }

  return (
    <empContext.Provider value={data}>
      <div className="App">
        <h1>Experience</h1>
        <ExpTable empDetails={emp} open={open} remove={remove} />
        {modal === "new" ? (
          <Create show={show} close={close} />
        ) : (
          <Update show={show} close={close} emp={emp[curIndex]} />
        )}
      </div>
    </empContext.Provider>
  )
}

export default App
