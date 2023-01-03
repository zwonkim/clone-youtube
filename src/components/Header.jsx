import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillYoutube } from 'react-icons/ai';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsPersonCircle } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';



const Header = () => {
  const [text, setText] = useState('')
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/videos/${text}`)
    setText('')
  }
  return (
    <nav className='w-full flex p-4 items-center justify-between border-b border-zinc-300'>
      <Link to='/' className='flex items-center px-4'>
        <AiFillYoutube className='text-4xl text-brand'/>
        <h1 className='ml-2 font-bold'>YouTube</h1>
      </Link>
      <form onSubmit={handleSubmit} className='w-3/4 h-10 border rounded-3xl flex justify-between md:w-6/12'>
        <input type="text" placeholder='검색' value={text} onChange={(event)=> {setText(event.target.value)}}className='w-7/12 pl-4 outline-none'/>
        <button className='bg-zinc-200 pr-3 pl-3 rounded-r-3xl'><AiOutlineSearch/></button>
      </form>
      <p className='flex items-center px-4 h-9 mr-4 border border-sky-700 text-sky-700'>
        <BsPersonCircle className='mr-2 '/>
        <span>로그인</span>
      </p>
    </nav>
  )
}

export default Header
