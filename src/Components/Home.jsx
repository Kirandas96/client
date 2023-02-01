import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const Home = () => {
    const[employee,setEmployee]=useState([])
    const[a,setA]=useState(false)

    const getData=()=>{
        axios.get("http://localhost:5000/data/employees")
        .then((res)=>{
          setEmployee(res.data)
        })
    }
    const handleClick=()=>{
        setA(true)
        getData()
    }
  return (
    <div>Home
        <div>
            <button onClick={()=>handleClick()}>Details</button>
        </div>
        <div>
            {a?<div>
            <table>
                <thead>
                    <tr>
                        <th>
                            no
                        </th>
                        <th>
                            Name
                        </th>
                        <th>
                            Email
                        </th>
                        <th>
                            Age
                        </th>
                        <th>
                            Position
                        </th>
                        <th>
                            Salary
                        </th>
                    
                    </tr>
                </thead>
                <tbody>
{employee.map((el,index)=>{return(
    <tr key={index}>
        <th>
            {el.id}
        </th>
        <th>
                            {el.name}
                        </th>
                        <th>
                        {el.email}
                        </th>
                        <th>
                        {el.age}
                        </th>
                        <th>
                        {el.position}
                        </th>
                        <th>
                        {el.salary}
                        </th>
    </tr>
)})}
</tbody>
</table>
        </div>:<></>}
        </div>
    </div>
  )
}
