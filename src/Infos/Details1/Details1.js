import React, {useState, useEffect} from 'react'
import "./Details1.css"
const Details1 = ({Données, setD}) => {
    const [data,setData]=useState(Données);

    useEffect(()=>{
        console.log(Données)
    },[Données])
  return (
    <div className='Grid-1-details1'>
        <div className='Grid-Header-details1'>
            <span>Id</span>
            <span>Ip</span>
            <span>Distino</span>
            {Données.map((item,i)=>{
                const {id,ip,distino }=item;
                return(
                    <>
                        <span>{id}</span>
                        <span>{ip}</span>
                        <span>{distino[0]},{distino[1]},{distino[2]}</span>
                       
                    </>
                )
            })}
        </div>
        
    </div>
  )
}

export default Details1