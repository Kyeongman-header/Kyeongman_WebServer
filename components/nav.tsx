import { useRouter } from "next/router";

export interface NavigationProperty{
  login:boolean,
  handlelogin: (islogin:boolean)=>void,
}

export default function Navigation({login,handlelogin} : NavigationProperty)
{ 
  const router=useRouter();
  

  return (
    <div className="flex flex-col flex-between w-full h-fit gap-5 bg-white">
      {/* <Image src={logo} className="scale-x-75 h-fit" alt="logo.png"></Image> */}
      
      {
      login && 
      <div className="flex justify-end">
      <button
                title="로그아웃"
                className=" duration-300 rounded-lg hover:font-bold p-1 text-xs"
                onClick={() => {
                  router.push("/");
                  handlelogin(false);
                }}
              >
                로그아웃
              </button>
      </div>
}
      <div
        title="홈으로"
        className="mt-2 text-center text-black cursor-pointer duration-300 hover:scale-105 font-light text-5xl"
        onClick={() => {
          router.push("/");
        }}
      >
        당신의 선택.
      </div>
      <div className="justify-self-center flex flex-col justify-center w-full">
        <div className="flex justify-center items-center gap-5">
          {login ? (
            <>
              <div className="flex flex-col items-center">
                <p>반가워요, ooo 님!</p>
                <p
                  title="내 정보 보기"
                  className=" duration-300 rounded-lg hover:font-bold cursor-pointer "
                  onClick={()=>{router.push("/information")}}
                >
                  내 정보 보기
                </p>
              </div>
              
            </>
          ) : (
            <button
              className="duration-300 hover:font-bold rounded-lg p-1 "
              onClick={() => {
                router.push("/login");
              }}
            >
              로그인하러 가기!
            </button>
          )}
        </div>
      </div>
    </div>
  );
}