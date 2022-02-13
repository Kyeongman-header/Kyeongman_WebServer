import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navigation from '../components/nav'
import Footer from '../components/footer'
import { useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const [login,setLogin]=useState<boolean>(false);
  const handlelogin=(islogin:boolean)=>{
    setLogin(islogin);
  }
  return (
    <div className="flex flex-col min-h-[100vh] min-w-[800pt] bg-black gap-px">
      <Navigation login={login} handlelogin={handlelogin}/>
      <Component {...pageProps} login={login} handlelogin={handlelogin} />
      <Footer />
    </div>
  );
}

export default MyApp
