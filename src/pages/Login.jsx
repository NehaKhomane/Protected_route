import { useForm } from 'react-hook-form'
import './Style.css'
import { useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';
export default function Login(){
    const navigate=useNavigate();
    const {
        register,handleSubmit,formState:{errors},reset}=useForm()
    
    const onLogin=(data)=>{
       
        if(data.username==='admin@gmail.com' && data.pwd==='Admin@123'){
            localStorage.setItem('isLogin',true)
            navigate('/add_record')
        }else{
            toast.error('Invalid credentials..!!')
            reset()
        }
    }
    return(
        <>
                <div className='login-container'>
        <form onSubmit={handleSubmit(onLogin)}>
            <div className='title'>
                <h2>Login Form</h2>
            </div>
            <div className='input-field'>
                <label>Username</label>
                <input type='text'{...register('username',{
                    required:'username is required',
                    pattern:{
                        value:/^\S+@\S+$/i,
                        message:'Invalid Username'
                    }
                })}></input>
                {errors.username && <p>{errors.username.message}</p>}
            </div>
            <div className='input-field'>
                <label>Password</label>
                <input type='password'{...register('pwd',{
                    required:'Password is required',
                   
                })}></input>
                {errors.pwd && <p>{errors.pwd.message}</p>}
            </div>
            <button type='submit'>Submit</button>
        </form>
        </div>
        <Toaster
  position="top-left"
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
      duration: 5000,
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