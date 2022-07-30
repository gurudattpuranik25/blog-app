import React from "react";
import { FcGoogle } from "react-icons/fc";

function Login({ signInWithGoogle }) {
  return (
    <div className=" flex justify-center items-center w-screen h-screen ">
      <button
        className="flex gap-2 text-2xl bg-white px-4 py-2 rounded-lg font-semibold items-center drop-shadow-xl"
        onClick={signInWithGoogle}
      >
        <FcGoogle />
        Sign in With Google
      </button>
    </div>
  );
}

export default Login;
