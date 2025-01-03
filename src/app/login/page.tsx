"use client"

import { LoginState  } from "@wix/sdk";
import React, { useState , useContext } from 'react'
import { usePathname, useSearchParams ,useRouter } from 'next/navigation'
import { WixClientContext } from "../context/wixContext"
import Cookies from "js-cookie";

const options = {
  LOGIN:"login",
  REGISTER:"register",
  RESET_PASSWORD :"reset-password",
  VERIFICATION: "verification"
}

const Login = () => {

  const wixClient= useContext(WixClientContext)
  const router = useRouter()
  const isLogged = wixClient.auth.loggedIn()
  if(isLogged){
    router.push("/")
  }
  
  const [mode , setMode] = useState(options.LOGIN)
  const [email , setEmail] = useState("")
  const [userName , setUserName] = useState("")
  const [password , setPassword] = useState("")
  const [emailVerify , setEmailVerify] = useState("")
  const [loading , setLoading] = useState(false)
  const [error , setError] = useState("")
  const [message , setMessage] = useState("")
  
  const formTitle =
    mode === options.LOGIN
      ? "Log in"
      : mode === options.REGISTER
      ? "Register"
      : mode === options.RESET_PASSWORD
      ? "Reset Your Password"
      : "Verify Your Email";

      const buttonTitle =
    mode === options.LOGIN
      ? "Login"
      : mode === options.REGISTER
      ? "Register"
      : mode === options.RESET_PASSWORD
      ? "Reset"
      : "Verify";

      const handleSubmit = async(e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        console.log(e)
        try {
          let response;
          
          switch (mode) {
            case options.LOGIN:
              response = await wixClient.auth.login({
                email,
                password,
              });
              break;
            case options.REGISTER:
              response = await wixClient.auth.register({
                email,
                password,
                profile: { nickname: userName },
                
              });
              console.log(response)
              break;
            case options.RESET_PASSWORD:
                response = await wixClient.auth.sendPasswordResetEmail(
                  email,
                  window.location.href
                );
                setMessage("Password reset email sent. Please check your e-mail.");
                break;
            case options.EMAIL_VERIFICATION:
                  response = await wixClient.auth.processVerification({
                    verificationCode: emailVerify,
                  });
                  break;
              default:
                    break;
                    }
        switch (response?.loginState) {
          case LoginState.SUCCESS:
            setMessage("Successful! You are being redirected.");
            const tokens = await wixClient.auth.getMemberTokensForDirectLogin(
              response.data.sessionToken!
            );
            Cookies.set("refreshToken", JSON.stringify(tokens.refreshToken), {
              expires: 2,
            });
            wixClient.auth.setTokens(tokens);
            router.push("/");
            break;
          case LoginState.FAILURE:
            if (
              response.errorCode === "invalidEmail" ||
              response.errorCode === "invalidPassword"
            ) {
              setError("Invalid email or password!");
            } else if (response.errorCode === "emailAlreadyExists") {
              setError("Email already exists!");
            } else if (response.errorCode === "resetPassword") {
              setError("You need to reset your password!");
            } else {
              setError("Something went wrong!");
            }
          case LoginState.EMAIL_VERIFICATION_REQUIRED:
            setMode(mode.EMAIL_VERIFICATION);
          case LoginState.OWNER_APPROVAL_REQUIRED:
            setMessage("Your account is pending approval");
          default:
            break;
        }
      } catch (err) {
        console.log(err);
        setError("Something went wrong!");
      } finally {
        setLoading(false);
      }
    }

  return (
    <div className="h-[calc(100vh-80px)] px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex items-center justify-center" >
      <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-semibold">{formTitle}</h1>
        {mode === options.REGISTER ? (
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-700">Username</label>
            <input
              type="text"
              name="username"
              placeholder="john"
              className="ring-2 ring-[#f35c7a] outline-[#eb657f] rounded-md p-4"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
        ) : null}
        {mode !== options.VERIFICATION ? (
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-700">E-mail</label>
            <input
              type="email"
              name="email"
              placeholder="john@gmail.com"
              className="ring-2 ring-[#f35c7a] rounded-md p-4 outline-[#eb657f] "
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-700">Verification Code</label>
            <input
              type="text"
              name="emailCode"
              placeholder="Code"
              className="ring-2 ring-[#f35c7a] rounded-md p-4 outline-[#eb657f]"
              onChange={(e) => setEmailVerify(e.target.value)}
            />
          </div>
        )}
        {mode === options.LOGIN || mode === options.REGISTER ? (
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="ring-2 ring-[#f35c7a] outline-[#eb657f] rounded-md p-4"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        ) : null}
        {mode === options.LOGIN && (
          <div
            className="text-sm underline cursor-pointer"
            onClick={() => setMode(options.RESET_PASSWORD)}
          >
            Forgot Password?
          </div>
        )}
        <button
          className="bg-[#f35c7a] text-white p-2 rounded-md disabled:bg-pink-200 disabled:cursor-not-allowed"
          disabled={loading}
        >
          {loading ? "Loading..." : buttonTitle}
        </button>
        {error && <div className="text-red-600">{error}</div>}
        {mode === options.LOGIN && (
          <div
            className="text-sm underline cursor-pointer"
            onClick={() => setMode(options.REGISTER)}
          >
            {"Don't"} have an account?
          </div>
        )}
        {mode === options.REGISTER && (
          <div
            className="text-sm underline cursor-pointer"
            onClick={() => setMode(options.LOGIN)}
          >
            Have and account?
          </div>
        )}
        {mode === options.RESET_PASSWORD && (
          <div
            className="text-sm underline cursor-pointer"
            onClick={() => setMode(options.LOGIN)}
          >
            Go back to Login
          </div>
        )}
        {message && <div className="text-green-600 text-sm">{message}</div>}
      </form>
    </div>
  )
}
// fixing not navigating to home page when logging in or registering
export default Login
