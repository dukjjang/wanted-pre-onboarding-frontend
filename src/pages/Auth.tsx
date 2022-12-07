import React, { useRef, useState } from 'react';
import { validate } from '../hooks/useValidation';

const Auth = () => {
  const [signFormStatus, setSignFormStatus] = useState(true);
  const [userValue, setUserValue] = useState({
    email: '',
    password: '',
  });

  const handleToggle = () => {
    setSignFormStatus((prev) => !prev);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    validate(userValue);
  };

  return (
    <main className='w-full px-6 flex justify-center h-screen bg-#ebebeb'>
      <form
        onSubmit={handleSubmit}
        className=' w-[350px] h-[500px] border rounded-lg mt-6 py-10 px-10'
      >
        <h1 className=' text-center text-[50px] mb-5'>
          {signFormStatus ? 'Login' : 'Sign Up'}
        </h1>
        <div className='flex flex-col justify-center items-start mb-5'>
          <label className='mb-3' htmlFor='email'>
            Email
          </label>
          <input
            placeholder='email'
            className='font-light outline-0 pl-3 w-full shadow-md h-10 rounded border-b-2'
            id='email'
          />
        </div>
        <div className='flex flex-col justify-center items-start mb-5'>
          <label className='mb-3' htmlFor='password'>
            Password
          </label>
          <input
            placeholder='password'
            type='password'
            className='font-light outline-0 pl-3 w-full shadow-md h-10 rounded border-b-2'
            id='password'
          />
        </div>
        <button className='w-full text-white text-xl rounded bg-[#C762F1] p-4 text-center'>
          {signFormStatus ? 'Login' : 'Sign Up'}
        </button>
        <div className='flex justify-center p-5'>
          <p className='mr-3 text-gray-500'>
            {signFormStatus ? '계정이 없으신가요?' : '계정이 있으신가요?'}{' '}
          </p>
          <button onClick={handleToggle} className='font-bold'>
            {signFormStatus ? 'Sign Up' : 'Login'}
          </button>
        </div>
      </form>
    </main>
  );
};

export default Auth;
