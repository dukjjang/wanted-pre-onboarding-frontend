import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import FormInput from 'components/FormInput';
import { UserValues } from 'types';
import { postSignUp } from 'apis';
import { inputs } from '../constants/Inputs';

const Auth = () => {
  const [signFormStatus, setSignFormStatus] = useState<'signin' | 'signup'>(
    'signin'
  );
  const [focused, setFocused] = useState(false);
  const [userValues, setUserValues] = useState<UserValues>({
    email: '',
    password: '',
  });
  const title = signFormStatus === `signin` ? 'Login' : 'SignUp';
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await postSignUp(signFormStatus, userValues);
      const token = res.access_token;
      localStorage.setItem('token', JSON.stringify(token));
      if (signFormStatus === 'signin') navigate('/todo');
      if (signFormStatus === 'signup') handleChangeForm();
      window.location.reload();
    } catch (err) {
      alert(`${title} 요청이 실패하였습니다.`);
    }
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserValues((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleChangeForm = () => {
    setSignFormStatus(signFormStatus === 'signin' ? 'signup' : 'signin');
    setFocused(false);
    setUserValues({ email: '', password: '' });
  };

  return (
    <main className='w-full sm:px-6 flex justify-center h-screen bg-#ebebeb'>
      <form
        onSubmit={handleSubmit}
        className='w-full h-full flex-col flex justify-center sm:justify-start items-center sm:w-[400px] sm:h-[550px] border rounded-lg sm:mt-20 py-10 px-10'
      >
        <h1 className=' text-center text-[50px] mb-5'>{title}</h1>
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
          {title}
        </button>
        <div className='flex justify-center p-5'>
          <p className='mr-3 text-gray-500'>
            {signFormStatus === 'signin'
              ? '계정이 없으신가요?'
              : '계정이 있으신가요?'}
          </p>
          <span onClick={handleChangeForm} className='font-bold cursor-pointer'>
            {signFormStatus === 'signin' ? 'SignUp' : 'Login'}
          </span>
        </div>
      </form>
    </main>
  );
};

export default Auth;
