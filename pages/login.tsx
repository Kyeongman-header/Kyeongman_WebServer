import { useRouter } from "next/router";
import { useState } from "react";

export interface LoginProperty{
    login: boolean,
    handlelogin: (islogin:boolean)=>void,
}

export default function Login({login,handlelogin}:LoginProperty){
    const router=useRouter();
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [disabled,setDisabled]=useState<boolean>(false);

    const [wrong, setWrong]=useState<boolean>(false);

    const handleChangeId=(e: React.ChangeEvent<HTMLInputElement>)=>setId(e.target.value);
    const handleChangePassword=(e: React.ChangeEvent<HTMLInputElement>)=>setPassword(e.target.value);
    const handleSubmit=async (e: React.SyntheticEvent) => {
      
      e.preventDefault();
      setDisabled(true);
      

      setDisabled(false);
    };
    return (
      //   <div className="flex flex-col justify-start items-center w-screen h-[800px]">
      //     <div className="flex w-full bg-white h-[800px] justify-center items-center  ">
      //       <div className="w-[500px] h-[500px] flex flex-col justify-evenly items-center border border-purple-700">
      <div className="flex flex-col justify-center items-center h-screen content-center bg-white">
        <form
          className="flex flex-col justify-evenly h-[400px] w-[300px] border-4 rounded-lg p-5"
          action="submit"
          method="get"
          onSubmit={handleSubmit}
        >
          <p className=" font-bold">당신의 계정에 로그인!</p>
          <input
            type="text"
            className="border border-black rounded p-1"
            placeholder="email"
            value={id}
            onChange={handleChangeId}
          />
          <input
            type="text"
            className="border border-black rounded p-1"
            placeholder="password"
            value={password}
            onChange={handleChangePassword}
          />
          <button
            type="submit"
            disabled={disabled}
            className="h-[50px] bg-purple-800 duration-300 hover:bg-purple-500 rounded-lg text-white"
            onClick={() => {
              router.push("/");
              handlelogin(true);
            }}
          >
            로그인!
          </button>
        </form>
      </div>

      //       </div>
      //     </div>
      //   </div>
    );
    
}