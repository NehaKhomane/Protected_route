import { NavLink } from 'react-router-dom'
import './Style.css'
export default function ViewRecord(){
    const record =localStorage.getItem('record')? JSON.parse(localStorage.getItem('record')):[]
    
    return(
        <>
        <div className=' view-container'>
            <div className='title'>
                <h2>View  Students</h2>
            </div>
            <table>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Fullname</th>
                    <th>Percentage</th>
                    <th>Branch</th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                   {
                    record.length===0 ?(
                        <tr>
                            <td colSpan='3'> No Records Available</td>
                        </tr>
                    ):(
                    record.map((item,index)=>{
                        return(
                            <tr key={index}>
                                <td>{item.roll}</td>
                                <td>{item.name}</td>
                                <td>{item.percent}</td>
                                <td>{item.branch}</td>
                                <td><NavLink to={"/view"+"/"+ item.roll}>View Record</NavLink></td>
                            </tr>
                        )
                    })
                )
                   }
                </tbody>
            </table>
        </div>
        </>
    )
}