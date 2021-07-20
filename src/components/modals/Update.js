import { Button, Container, Grid, Modal, TextField } from "@material-ui/core"
import React, { useContext, useEffect, useState } from "react"
import { empContext } from "../context/empContext"
import "./form.css"

export default function Update(props) {
  const context = useContext(empContext)
  const [designation, setDesignation] = useState("")
  const [company, setCompany] = useState("")
  const [from, setFrom] = useState("")
  const [to, setTo] = useState("")
  const [city, setCity] = useState("")

  const changeValue = (e, type) => {
    if (type === "desig") setDesignation(e.target.value)
    else if (type === "company") setCompany(e.target.value)
    else if (type === "from") setFrom(e.target.value)
    else if (type === "to") setTo(e.target.value)
    else setCity(e.target.value)
  }

  const submit = () => {
    context.update({ designation, company, from, to, city })
    props.close()
  }
  useEffect(() => {
    setDesignation(props.emp.designation)
    setCompany(props.emp.company)
    setFrom(props.emp.from)
    setTo(props.emp.to)
    setCity(props.emp.city)
  }, [props])
  return (
    <div>
      <Modal
        open={props.show}
        onClose={props.close}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <form>
          <Container>
            <Grid container spacing={2}>
              <Grid item xs={12} align="center">
                <h1 style={{ color: "royalblue" }}>Update</h1>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  label="Designation"
                  fullWidth
                  value={designation}
                  onChange={(e) => changeValue(e, "desig")}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  label="Company"
                  fullWidth
                  value={company}
                  onChange={(e) => changeValue(e, "company")}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  variant="outlined"
                  label="Working Since"
                  fullWidth
                  value={from}
                  onChange={(e) => changeValue(e, "from")}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  variant="outlined"
                  label="Working Till"
                  fullWidth
                  value={to}
                  onChange={(e) => changeValue(e, "to")}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  label=" City"
                  fullWidth
                  value={city}
                  onChange={(e) => changeValue(e, "city")}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  align="right"
                  onClick={submit}
                >
                  Update
                </Button>
              </Grid>
            </Grid>
          </Container>
        </form>
      </Modal>
    </div>
  )
}
