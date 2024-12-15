 import { useForm } from 'react-hook-form'
import './Style.css'
import axios from 'axios'
import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';


export default  function Posts(){

    const {register,handleSubmit,formState:
        {errors},reset}=useForm()
    const [isLoading,setLoading]=useState()
    const onFormSubmit=(data)=>{
        setLoading(true)
        console.log(data)
        setTimeout( async()=>{
            const res=await  axios.post('https://jsonplaceholder.typicode.com/posts',
               {
                title:data.title,
                userId:data.uid,
                body:data.body
               },{
                headers:{
                    'Content-Type':'application/json'
                }
               }
            )
            console.log(res)
            setLoading(false)

            if(res){
               toast.success('Records added successfully')
            }else{
                toast.error('Something went wrong')
            }
            reset()
        },1200)
    }
    return(
        <>
        <div className='post-container'>
            <form onSubmit={handleSubmit(onFormSubmit)}>
                <div className='title'>
                    <h2>Add Posts</h2>
                </div>
                <div className='input-field'>
                    <label>Title</label>
                    <input type='text'{...register('title',{
                        required:'title is required'
                    })}></input>
                    {errors.title && <p>{errors.title.message}</p>}
                </div>
                <div className='input-field'>
                    <label>User ID</label>
                    <input type='text'{...register('uid',{
                        required:'User Id is required'
                    })}></input>
                    {errors.uid && <p>{errors.uid.message}</p>}
                </div>
                <div className='input-field'>
                    <label>Description</label>
                    <textarea type='text'{...register('body',{
                        required:'Body is required'
                    })}></textarea>
                    {errors.body && <p>{errors.body.message}</p>}
                </div>
                <button type='submit'>Add Post</button>
            </form>
        </div>{
            isLoading && 
            <div className='loader'>
             <div className='box'>

             </div>
            </div>
        }
        <Toaster
  position="top-center"
  reverseOrder={false}
  gutter={8}
  containerClassName=""
  containerStyle={{}}
  toastOptions={{
    // Define default options
    className: '',
    duration: 5000,
    style: {
      background: '#363636',
      color: '#fff',
    },

    // Default options for specific types
    success: {
      duration: 3000,
      theme: {
        primary: 'green',
        secondary: 'black',
      },
    },
  }}
/>
        </>
    )
}