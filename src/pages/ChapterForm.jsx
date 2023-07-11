import React from 'react'
import { useRef } from "react";
import { api, apiUrl, endpoints } from "../utils/api";
import { useParams, useNavigate} from 'react-router-dom'
import axios from 'axios';
import Swal from 'sweetalert2';


export default function ChapterForm () {

  let id = useParams()
    console.log(id.manga_id);
    let title = useRef()
    let order = useRef()
    let pages = useRef()
    let navigate = useNavigate()

    function handleForm(element) {
      element.preventDefault()
      let array = pages.current.value
      let listpage = array.split(",")
      let data = {
        manga_id: id.manga_id,
        title: title.current.value,
        order: order.current.value,
        pages: listpage
      }
      console.log(listpage);
      
      let token = localStorage.getItem('token')
      let headers = {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      };
      
      axios.post("http://localhost:8080/api/chapters/", data, headers)
        .then(res => {
          console.log(res)
          navigate('/')
          Swal.fire({
            icon: 'success',
            title: 'Chapter uploaded successfully!',
          })
        })
        .catch(error => {
          const err = error.response.data.message
          Swal.fire({
            icon: 'error',
            title: err,
          })
      })       
    }

  
  /*
  let user = JSON.parse(localStorage.getItem('user1'))
  let role = user.role;
  let online = user.online
  */
  /*
  let role = 1;
  let online = true;
  */

    return (
        <div className="flex h-[100vh] ">
          <div className="w-[45vw] bg-[url('/src/assets/images/background-chapterform.png')] bg-cover hidden md:block">
          </div>
          <section className="flex flex-col w-[100vw] md:w-[55vw] justify-center items-center text-white">
            <div className="flex justify-center items-center mb-10 text-center text-black">
              <h1 className="text-3xl -tracking-tight font-sans">New Chapter</h1>
            </div>
            <form onSubmit={(e) => handleForm(e)} className="flex flex-col items-center justify-center space-y-6 pt-14">
              <input type="text" placeholder="Insert title" className="w-80 appearance-none border-0  p-2 px-4 text-black border-b border-gray-500 bg-transparent focus:outline-none text-center" ref={title} />
              <div>
                <input type="text" placeholder="Insert order" className="w-80 appearance-none text-black border-0  p-2 px-4  border-b border-gray-500 bg-transparent focus:outline-none focus:ring-0 text-center" ref={order} />
              </div>
              <div>
                <input type="text" placeholder="Insert pages" className="w-80 appearance-none  border-0  p-2 px-4 text-black border-b border-gray-500 bg-transparent focus:outline-none focus:ring-0 mb-20 text-center" ref={pages} />
              </div>
              <button className="rounded-full bg-gradient-to-r from-[#4338CA] to-[#5E52F3]  p-2 px-36 py-4 text-white t-10 font-bold text-lg"> Send</button>
            </form>              
          </section>
        </div>
    )        
}


/*
                  /*<Alert messages={} show={} setShow={}/>*/

                  /*
      <div>
        <div className="flex h-[100vh] ">
          <div className="flex w-[50vw] bg-[url('/src/assets/images/background-chapterform.png')] bg-cover">
          </div>
            <div className="flex justify-center items-center w-[50vw]">
              <h1 className="text-[40px] md:text-[40px] [font-family:Roboto] font-bold">New Chapter</h1>
                
              <Alert messages={[
                'The manga ID is required',
                'The manga ID must have a minimun of 3 characters',
                'Manga ID must be an alphanumeric character'
                ]} 
                how={show} setShow={setShow}/>
            </div>
          </div>
        </div>*/
        
