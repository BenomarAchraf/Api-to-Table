import React , {useEffect , useState} from 'react'
import "./Details.css"
import { Data } from './Data'
import Details1 from './Details1/Details1'
import { Link } from "react-router-dom";
import Details2 from './Details2/Details2';
const Details = ({Données, setD}) => {
    const [data, setdata]=useState(Data);


  return (
    <div className='Grid-1'>
        <div className='Grid-Header'>
            <span>Id</span>
            <span>Ip</span>
            <span>Distino</span>
            <span>Last Collection Date</span>
            <span>Details</span>

            {data.map((item,i)=>{
                const {id,ip,distino ,Lst,details}=item;
                return(
                    <>
                        <span>{id}</span>
                        <span>{ip}</span>
                        <span>{distino[0]},{distino[1]},{distino[2]}</span>
                        <span>{Lst}</span>
                        <div className='details'>
                            <p>
                            <Link className='' onClick={()=>{setD(details[0])}} to={`/Details1/${id}`} children={<Details1/>} >Details1</Link>
                            </p>
                            <p>
                            <Link className='' onClick={()=>{setD(details[0])}} to={`/Details2/${id}`} children={<Details2/>} >Details2</Link>  
                            </p>
                        </div>
                    </>
                )
            })}
        </div>
        
    </div>
  )
}

export default Details