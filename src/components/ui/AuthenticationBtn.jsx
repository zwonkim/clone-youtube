import React from 'react'
import { AiOutlineLogout } from 'react-icons/ai';
import { BsPersonCircle } from 'react-icons/bs';

const AuthenticationBtn = ({handleClick, text}) => {
  return (
    <button onClick={handleClick} className='flex items-center px-4 h-9 mr-4 border border-sky-700 text-sky-700'>
      {
        text === '로그아웃' ? <AiOutlineLogout className='mr-2 '/> : <BsPersonCircle/>
      }
      <span>{text}</span>
    </button>
  )
}

export default AuthenticationBtn
