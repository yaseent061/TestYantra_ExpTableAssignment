import ExpTable from "./components/table/ExpTable"
import "./App.css"
import { useEffect, useState } from "react"
import EmpModal from "./components/modals/EmpModal"
import { Container, TextField } from "@material-ui/core"
import { Pagination } from "./components/table/Pagination"

let sort = (list) => {
  let sortedList = list.sort(function (a, b) {
    let x = a.designation.toUpperCase(),
      y = b.designation.toUpperCase()
    return x === y ? 0 : x > y ? 1 : -1
  })
  return sortedList
}

function App() {
  const [emp, setEmp] = useState([
    {
      id: 0,
      designation: "Software Architect",
      company: "TY",
      from: "May 2021",
      to: "May 2021",
      city: "Bengaluru",
    },
    {
      id: 1,
      designation: "Software Dev",
      company: "TY",
      from: "Jan 2021",
      to: "Jun 2021",
      city: "Mumbai",
    },
    {
      id: 2,
      designation: "Software Architect",
      company: "TY",
      from: "Feb 2021",
      to: "Sep 2021",
      city: "Delhi",
    },
    {
      id: 3,
      designation: "Software Architect",
      company: "TY",
      from: "May 2021",
      to: "May 2021",
      city: "Bengaluru",
    },
    {
      id: 4,
      designation: "Software Dev",
      company: "TY",
      from: "Jan 2021",
      to: "Jun 2021",
      city: "Mumbai",
    },
    {
      id: 5,
      designation: "Software Architect",
      company: "TY",
      from: "Feb 2021",
      to: "Sep 2021",
      city: "Delhi",
    },

    {
      id: 6,
      designation: "Software Architect",
      company: "TY",
      from: "May 2021",
      to: "May 2021",
      city: "Bengaluru",
    },
    {
      id: 7,
      designation: "Software Dev",
      company: "TY",
      from: "Jan 2021",
      to: "Jun 2021",
      city: "Mumbai",
    },
    {
      id: 8,
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
  const [list, setList] = useState([...emp])
  const close = () => {
    setShow(false)
  }

  //function to open modal
  const open = (type, i) => {
    setShow(true)
    setModal(type)
    setCurIndex(i)
  }

  //function to add new object to emp state
  const add = (data) => {
    let sortedById = emp.sort((el1, el2) => {
      return el1.id - el2.id
    })
    //adding id to new object
    let id =
      sortedById.length > 0 ? sortedById[sortedById.length - 1].id + 1 : 0
    const temp = [...emp, { id, ...data }]
    setEmp(temp)
  }

  //function to update the emp state
  const update = (data) => {
    const temp = [...emp]
    const index = emp.findIndex((el) => el.id === data.id)
    temp.splice(index, 1, data)
    setEmp(temp)
  }

  //function to remove an object from emp state
  const remove = (index) => {
    const temp = [...emp]
    const ind = emp.findIndex((el) => el.id === list[index].id)
    temp.splice(ind, 1)
    setEmp(temp)
    setCurIndex(0)
  }

  const empty = {}

  //function to search employee by designation
  function search(e) {
    const temp = emp.filter((emp) => {
      let desig = emp.designation.toUpperCase()
      return desig.includes(e.target.value.toUpperCase())
    })
    let sortedList = sort(temp)

    setList(sortedList)
    setCurrPage(1)
  }

  //setting list everytime emp state is modified
  useEffect(() => {
    const temp = [...emp]
    let sortedList = sort(temp)

    setList(sortedList)
  }, [emp])

  //Pagination
  const [currPage, setCurrPage] = useState(1)
  const [rowsPerPage] = useState(5)
  const indexOfLastRow = currPage * rowsPerPage
  const indexOfFirstRow = indexOfLastRow - rowsPerPage
  const currRows = list.slice(indexOfFirstRow, indexOfLastRow)
  console.log(currRows)

  const paginate = (pageNum) => {
    setCurrPage(pageNum)
  }

  return (
    <Container>
      <div className="App">
        <h1>Experience</h1>
        <TextField
          id="filled-basic"
          label="Search"
          variant="filled"
          style={{
            marginLeft: "auto",
            borderRadius: "10px",
            marginBottom: "5px",
          }}
          onChange={search}
        />
        <ExpTable empDetails={currRows} open={open} remove={remove} />

        {show === true ? (
          <EmpModal
            show={show}
            close={close}
            emp={
              modal === "new" ? empty : list.length > 0 ? list[curIndex] : empty
            }
            type={modal}
            update={update}
            add={add}
          />
        ) : null}
        <Pagination
          rowsPerPage={rowsPerPage}
          totalRows={list.length}
          paginate={paginate}
        />
      </div>
    </Container>
  )
}

export default App
