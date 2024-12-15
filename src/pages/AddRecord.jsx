import { useForm } from 'react-hook-form'
import './Style.css'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
export default function AddRecord(){
    const branches=['computer','IT','AIDS','Mechanical','Other']
    const {register,handleSubmit,formState:{errors},reset}=useForm()
    const [record,setRecord]=useState
    (localStorage.getItem('record')!=null ? JSON.parse(localStorage.getItem('record')):[])
    useEffect(()=>{localStorage.setItem('record',JSON.stringify(record))},[record])
    const addStudent=(data)=>{
        setRecord([
            ...record,
            data
        ])
        reset()
        toast.success('Student Added Successfully..!!')
    }
    return(
        <>
        <div className='add-container'>
            <form onSubmit={handleSubmit(addStudent)}>
                <div className='title'>
                <h2>Add Student Record..!!</h2>
                </div>
                <div  className='input-field'>
                    <label>Roll NO</label>
                    <input type='number'{...register('roll',{
                        required:'Roll no is required'
                    })}></input>
                    {errors.roll && <p>{errors.roll.message}</p>}
                </div>
                <div className='input-field'>
                <label>Student Email Address</label>
                <input type='email'{...register('emailAdress',{
                    required:'username is required',
                    pattern:{
                        value:/^\S+@\S+$/i,
                        message:'Invalid Username'
                    }
                })}></input>
                {errors.emailAdress && <p>{errors.emailAdress.message}</p>}
            </div>
                <div  className='input-field'>
                    <label>Student Name</label>
                    <input type='text'{...register('name',{
                        required:'Student Name  is required'
                    })}></input>
                    {errors.name && <p>{errors.name.message}</p>}
                </div>
                
                
                <div  className='input-field'>
                    <label>Branch Name</label>
                   <select {...register('branch',{
                    required:'Branch name is required..!!'
                   })}>
                    <option value='' selected>Select Your Branch</option>
                    {
                        branches.map((item,key)=>{
                            return(
                                <option value={item} key={key}>{item}</option>
                            )
                        })
                    }
                   </select>
                   {errors.branch && <p>{errors.branch.message}</p>}
                </div>
                <div className='input-field'>
                <label>Percentage</label>
                <input type='number'{...register('percent',{
                    required:'Percentage is required',
                   
                })}></input>
                {errors.percent && <p>{errors.percent.message}</p>}
            </div>
               <button type='submit'>Submit</button>
            </form>
        </div>
        </>
    )
}