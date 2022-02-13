export default function Writer(){
    return (
      <div className="w-screen h-fit flex justify-center items-center bg-white">
        <div className="grow flex flex-col justify-center items-center">
          <div className="mt-5 w-[1000px] h-[600px] border border-black">
            <div className="flex justify-between">
                <p className=" cursor-pointer duration-300 hover:scale-105 rounded-lg p-1 mr-1">{"이전 페이지 돌아가기"}</p>
                <p className=" cursor-pointer duration-300 hover:scale-105 rounded-lg p-1 mr-1">스탯(우측에 창 열림)</p>
            </div>
          </div>
          <div className="mt-5 w-[1000px] h-fit flex flex-col">
            <div className="m-1 w-full h-[80px] border border-black">
              선택지
            </div>
            <div className="m-1 w-full h-[80px] border border-black">
              선택지
            </div>
            <div className="m-1 w-full h-[80px] border border-black">
              선택지
            </div>
          </div>
        </div>
      </div>
    );
}