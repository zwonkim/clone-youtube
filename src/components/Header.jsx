import React from "react";
import { Link } from 'react-router-dom'
import { AiFillYoutube, AiOutlineSearch } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { login, logout } from '../firebase';
import AuthenticationBtn from './ui/AuthenticationBtn';


const Header = () => {
  //로그인 정보 로컬스토리지에 저장
  //로컬스토리지에 사용자 정보가 존재할 경우, 로그인 상태를 유지하기 위해
  const initialYoutubeUserData = localStorage.getItem('youtubeUserData')
  ? JSON.parse(localStorage.getItem('youtubeUserData'))
  : null
  const [text, setText] = useState('')
  const [userData, setUserData] = useState(initialYoutubeUserData)
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/videos/${text}`)
    setText('')
  }

  const handleLogin = () => {
    login()
      .then((result) => {
        const user = result.user;
        setUserData(user);
        localStorage.setItem("youtubeUserData", JSON.stringify(user));
      })
      .catch((error) => console.log(error));
  };
  
  const handleLogOut = () => {
    logout()
    setUserData()
  };
  
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
      {/* {
        userData && 
        <div>
          <img src={userData.photoURL} alt='user profile' className='rounded-full w-9 shrink-0'/>
        </div>
      }
      {!userData && 
        <AuthenticationBtn handleClick = {handleLogin} text={'로그인'}/>
      }
      {userData && 
       <AuthenticationBtn handleClick = {handleLogOut} text={'로그아웃'}/>
      } */}
    </nav>
  )
}

export default Header
