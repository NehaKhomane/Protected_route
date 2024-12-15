import { useEffect,useState } from "react"
import axios from 'axios'
import './Style.css'
export default function Fetch(){
    const [isLoading,setLoading]=useState(false)
    const [data,setData]=useState([])
    const itemsPerPage=10
    const [currentPage,setcurrentPage]=useState(1)
    const currentPageData=data.slice((currentPage-1)*itemsPerPage,currentPage*itemsPerPage)
    const totalPages=Math.ceil(data.length/itemsPerPage)
    useEffect(()=>{
        setTimeout(async()=>{
            const res=await axios.get('https://jsonplaceholder.typicode.com/posts');
            console.log(res)
            setLoading(false)
            setData(res.data)
            
        },1200)
    },[])
    return(
        <>
        <div className="fetch-container">
           
            <table>
                <thead>
                    <tr>
                        <th>Sr No</th>
                        <th>user ID</th>
                        <th>Title</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        data.length===0 ?
                        (
                        <tr>
                            <td colspan ='3'>Loading Data</td>
                        </tr>
                        ):(
                            currentPageData.map((item,index)=>{
                                return(
                                    <tr key={index}>
                                        <td>{item.id}</td>
                                        <td>{item.userid}</td>
                                        <td>{item.title}</td>
                                    </tr>
                                )
                            })
                        )
                    }
                </tbody>
            </table>
            <div className="pagination">
                {
                    Array.from({length:totalPages},(_,i)=>i+1).map((page)=>{
                        return(
                            <button className={page===currentPage ? 'active_btns':''}
                            onClick={()=>setcurrentPage(page)}
                            key={page}>
                           {page}
                            </button>
                        )
                    })
                }
            </div>
        </div>
            {
                isLoading && <div className="loader">
                    <div className="box">

                    </div>
                </div>
            }
        </>
    )
}