export default function Writer(){
    return (
      <div className="w-screen h-fit  flex items-start  bg-white">
        <div className="sticky top-0 left-0 h-screen min-w-[200px] w-[200px] bg-purple-600 flex flex-col justify-start">
          <div className="h-[100px] w-full border-b border-white">
            <p className="text-white">설정창</p>
          </div>
          <div className="h-[100px] w-full border-b border-white">
            <p className="text-white">설정창</p>
          </div>
          <div className="h-[100px] w-full border-b border-white">
            <p className="text-white">설정창</p>
          </div>
        </div>
        <div className="grow flex flex-col justify-center items-center">
            <div className="mt-5 w-[1000px] h-[150px] border border-black">
                페이지 네비게이션(tree)
            </div>
            <div className="mt-5 w-[1000px] h-[600px] border border-black">
                texts and picture
            </div>
            <div className="mt-5 w-[1000px] h-fit flex flex-col">
                <div className="m-1 w-full h-[80px] border border-black">선택지</div>
                <div className="m-1 w-full h-[80px] border border-black">선택지</div>
                <div className="m-1 w-full h-[80px] border border-black">선택지</div>
            </div>
            
        </div>
      </div>
    );
}