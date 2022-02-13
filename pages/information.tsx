export interface InformationProperty{
    user: string,
}

export default function Login({user}:InformationProperty){
    return(
        <div className="flex flex-col justify-start items-center w-full min-h-screen h-fit bg-white">
            <div className="h-[50px]"></div>
            <div className="w-[1000px] flex flex-row justify-evenly">
                <p className="grow min-w-[100px] cursor-pointer font-bold hover:font-bold bg-purple-200">보던 글 이어보기</p>
                <p className="min-w-[100px] cursor-pointer hover:font-bold">내가 쓴 글</p>
                <p className="min-w-[100px] cursor-pointer hover:font-bold">내가 쓴 평</p>
                <p className="min-w-[100px] cursor-pointer hover:font-bold">찜해둔 작가/글</p>
            </div>
            <div className="mt-5 w-[1000px] h-[600px] border border-black">
            <div className="flex justify-between">
                info
            </div>
          </div>
        </div>
    );
}