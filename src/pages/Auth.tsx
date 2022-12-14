import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import FormInput from "components/FormInput";
import { UserValues } from "types";
import { postSignUp } from "apis/request";
import { inputs } from "../constants/Inputs";

const Auth = () => {
  const navigate = useNavigate();
  const [signFormStatus, setSignFormStatus] = useState<"signin" | "signup">(
    "signin"
  );
  const [focused, setFocused] = useState(false);
  const [userValues, setUserValues] = useState<UserValues>({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await postSignUp(signFormStatus, userValues);
      const token = res.access_token;
      localStorage.setItem("token", token);

      if (signFormStatus === "signin") navigate("/todo");
      if (signFormStatus === "signup") handleChangeFormStatus();
    } catch (err) {
      alert(`${currentSignFormTitle} 요청이 실패하였습니다.`);
    }
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleChangeFormStatus = () => {
    setSignFormStatus(signFormStatus === "signin" ? "signup" : "signin");
    setFocused(false);
    setUserValues({ email: "", password: "" });
  };

  const currentSignFormTitle = signFormStatus === `signin` ? "Login" : "SignUp";

  const changeFormMessage =
    signFormStatus === "signin" ? "계정이 없으신가요?" : "계정이 있으신가요?";

  const nextSignFormTitle = signFormStatus === "signin" ? "SignUp" : "Login";

  return (
    <main className="w-full sm:px-6 flex justify-center h-screen bg-#ebebeb">
      <form
        onSubmit={handleSubmit}
        className="w-full h-full flex-col flex justify-center sm:justify-start items-center sm:w-[400px] sm:h-[550px] border rounded-lg sm:mt-20 py-10 px-10"
      >
        <h1 className=" text-center text-[50px] mb-5">
          {currentSignFormTitle}
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

        <button className="w-full text-white text-xl rounded bg-[#C762F1] p-4 text-center">
          {currentSignFormTitle}
        </button>
        <div className="flex justify-center p-5">
          <p className="mr-3 text-gray-500">{changeFormMessage}</p>
          <span
            onClick={handleChangeFormStatus}
            className="font-bold cursor-pointer"
          >
            {nextSignFormTitle}
          </span>
        </div>
      </form>
    </main>
  );
};

export default Auth;
