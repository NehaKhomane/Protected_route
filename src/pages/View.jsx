import { useEffect, useState } from 'react'
import './Style.css'
import { useParams } from 'react-router-dom'

export default function View(){
    const record =JSON .parse(localStorage.getItem('record'))
    const [student,setStudent]=useState({})

    const params =useParams()
    const rollno = params.rollno
    useEffect(()=>{
        for (let i=0; i<record.length;i++){
            if(record[i].roll===rollno){
                setStudent(record[i])
            }
        }
    })
    return(
        <>
        <div className='view-student-container'>
            <div className='title'>
                <h2>View Student</h2>
            </div>
            <div className='flex-container'>
                <div className='field'>
                    <label>Roll No :</label>
                    <p>{student.roll}</p>
                </div>
               
                <div className='field'>
                    <label>Student Name</label>
                    <p>{student.name}</p>
                </div>
                <div className='field'>
                    <label>student Branch</label>
                    <p>{student.branch}</p>
                </div>
                <div className='field'>
                    <label>Percentage</label>
                    <p>{student.percent}</p>
                </div>
            </div>
        </div>
        </>
    )
}