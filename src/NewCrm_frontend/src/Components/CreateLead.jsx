import React, { useState } from "react"
import cl from "../Styles/CreateLead.module.css"
import { Link, useNavigate } from "react-router-dom"
import { Loader } from "./Loader"
import { NewCrm_backend } from "../../../declarations/NewCrm_backend";

const CreateLead = () => {
  const [loader, setLoader] = useState()
  const nav = useNavigate()

  const onSave = async () => {
    let a = document.getElementById("TaskName")
    let b = document.getElementById("fullName")
    let c = document.getElementById("Category")
    let d = document.getElementById("Time")
    let e = document.getElementById("Date")
    let f = document.getElementById("Priority")

    const lead = a.value
    const userNm = b.value
    const phNo = c.value
    const addr = d.value
    const com = e.value
    const source = f.value

    console.log(lead, userNm, phNo, addr, com, source)

    setLoader(<Loader />)

    await NewCrm_backend.addUser(lead, userNm, phNo, addr, com, source)
    nav("/dashboard")
  }

  return (
    <>
      <div className={cl.container}>
        {loader}
        <div className={cl.heading}>Add a new to-do:</div>
        <div className={cl.wrapper}>
          <div className={cl.one}>
            Name:
            <input className={cl.custom}  id="TaskName" placeholder="name for the task you’re going to do" type="text" />
          </div>
          <div className={cl.one}>
          Description:
            <input className={cl.custom} id="fullName" placeholder="a short description of the task - can be omitted" type="text" />
          </div>
          <div className={cl.one}>
          Category:
            <input className={cl.custom} id="Category" placeholder="e.g. household, school, work" type="text" />
          </div>
          <div className={cl.one}>
          Date:
            <input className={cl.custom} id="Time" placeholder="dd/mm/yyyy  - can be omitted" type="date" />
          </div>
          <div className={cl.one}>
          Time:
            <input className={cl.custom} id="Date" placeholder="hh:mm - can be omitted" type="time" />
          </div>
          <div className={cl.one}>
            Priority
            <select id="Priority" placeholder="select from dropdown">
              <option value="">select from dropdown</option>
              <option value="HIGH">HIGH</option>
              <option value="MEDIUM">MEDIUM</option>
              <option value="LOW">LOW</option>
            </select>
          </div>
          <div className={cl.btns}>
            <Link to="/dashboard">
              <div className={cl.nine}>
                <button className={cl.cancel}>Cancel</button>
              </div>
            </Link>
            <div className={cl.ten}>
              <button onClick={onSave} className={cl.save}>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export { CreateLead }
