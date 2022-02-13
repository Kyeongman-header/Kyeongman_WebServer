import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router';
export interface HomeProperty{
  login: boolean,
  handlelogin: (islogin:boolean)=>void,
}

export default function Home({login,handlelogin}:HomeProperty) {
  const router=useRouter();
  return (
    <div className="flex flex-col h-fit w-full justify-center items-center bg-purple-700 gap-5">
      <div className="mt-1 h-[600px] w-[90vw] border bg-white text-center">
        hero image region
      </div>
      <div className="w-[800px] h-[100px] border bg-white flex justify-center items-center">
        {login ? (
          <button
            className=" border-2 rounded-lg bg-purple-800 text-white p-1 mr-1 duration-300 hover:bg-purple-500 animate-pulse"
            onClick={() => {
              router.push("/writer/");
            }}
          >
            나도 만들어 보기!
          </button>
        ) : (
          <button
            className=" border-2 rounded-lg bg-purple-800 text-white p-1 mr-1 duration-300 hover:bg-purple-500 animate-pulse"
            onClick={() => {
              router.push("/login");
            }}
          >
            나도 만들어 보기!
          </button>
        )}
      </div>
      <div className="w-[900px] h-fit bg-white flex-col border">
        <div
          className="flex flex-row h-[800px] items-center  justify-between border cursor-pointer duration-500 hover:bg-purple-300"
          onClick={() => {
            router.push("/reader/");
          }}
        >
          <div className="w-[200px] h-[200px] border border-black">썸네일</div>
          <div className="w-[300px] h-[200px]">작가 설명</div>
          <div className="grow w-[200px] h-[200px]">게임 설명</div>
        </div>
        <div className="flex flex-row h-[800px] items-center justify-between border cursor-pointer duration-500 hover:bg-purple-300"
        onClick={() => {
          router.push("/reader/");
        }}>
          <div className="w-[200px] h-[200px] border border-black">썸네일</div>
          <div className="w-[300px] h-[200px]">작가 설명</div>
          <div className="grow w-[200px] h-[200px]">게임 설명</div>
        </div>
        <div className="flex flex-row h-[800px] items-center justify-between border cursor-pointer duration-500 hover:bg-purple-300"
        onClick={() => {
          router.push("/reader/");
        }}>
          <div className="w-[200px] h-[200px] border border-black">썸네일</div>
          <div className="w-[300px] h-[200px]">작가 설명</div>
          <div className="grow w-[200px] h-[200px]">게임 설명</div>
        </div>
        <div className="flex flex-row h-[800px] items-center justify-between border cursor-pointer duration-500 hover:bg-purple-300"
        onClick={() => {
          router.push("/reader/");
        }}>
          <div className="w-[200px] h-[200px] border border-black">썸네일</div>
          <div className="w-[300px] h-[200px]">작가 설명</div>
          <div className="grow w-[200px] h-[200px]">게임 설명</div>
        </div>
      </div>
    </div>
  );
}
