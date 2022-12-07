import React, { useState } from 'react';
import FormInput from 'components/FormInput';

import { inputs } from '../constants/Inputs';

interface UserValues {
  [key: string]: string;
  email: string;
  password: string;
}

const Auth = () => {
  const [signFormStatus, setSignFormStatus] = useState('signin');
  const [focused, setFocused] = useState(false);
  const [userValues, setUserValues] = useState<UserValues>({
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserValues((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  return (
    <main className='w-full px-6 flex justify-center h-screen bg-#ebebeb'>
      <form
        onSubmit={handleSubmit}
        className='w-full sm:w-[400px] h-[550px] border rounded-lg mt-16 py-10 px-10'
      >
        <h1 className=' text-center text-[50px] mb-5'>
          {signFormStatus === 'signin' ? 'Login' : 'Sign Up'}
        </h1>

        {inputs.map((input) => {
          return (
            <FormInput
              key={input.id}
              {...input}
              value={userValues[input.name]}
              onChange={handleOnChange}
              setFocused={setFocused}
              focused={focused}
            />
          );
        })}

        <button className='w-full text-white text-xl rounded bg-[#C762F1] p-4 text-center'>
          {signFormStatus === 'signin' ? 'Login' : 'Sign Up'}
        </button>
        <div className='flex justify-center p-5'>
          <p className='mr-3 text-gray-500'>
            {signFormStatus === 'signin'
              ? '계정이 없으신가요?'
              : '계정이 있으신가요?'}{' '}
          </p>
          <button
            onClick={() =>
              setSignFormStatus(
                signFormStatus === 'signin' ? 'signup' : 'signin'
              )
            }
            className='font-bold'
          >
            {signFormStatus}
          </button>
        </div>
      </form>
    </main>
  );
};

export default Auth;
