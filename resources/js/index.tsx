import axios, { AxiosError } from 'axios'
import React, { useEffect } from 'react'
import { Link, Routes,Route, useNavigate } from 'react-router-dom'
import { First, Login } from './Pages'


const Index  = () => {

    // const location = useNavigate()

    //  useEffect(()=>{
    //      const res =  async () => {
    //         debugger
    //         const _res = await axios.get('http://localhost:8000/api/post').then(response => response).catch( (error:AxiosError) => error.response?.status);
    //         if(_res === 401){
    //             location('/login')
    //         }
    //      }
    //      res()
    //  },[])

    return (
        <div>
            <Routes>
                {/* <Route path='/' element={<Index/>}/> */}
                <Route path='/first' element={<First/>}/>
                <Route path='/login' element={<Login/>}/>
            </Routes>
        </div>
    )
}

export { Index }
