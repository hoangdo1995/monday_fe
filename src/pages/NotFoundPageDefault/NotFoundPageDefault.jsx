import React from 'react'
import LogoComponent from '../../components/LogoComponent'

const NotFoundPageDefault = () => {
  return (
    <div className='h-screen flex flex-col'>
        <div className="py-3 ps-10 flex-grow-0">
                <LogoComponent/>
        </div>
        <div className='flex-grow flex items-center justify-center '>
            <div className="content w-10/12 flex flex-col lg:flex-row  items-center gap-24">
                <div className="">
                    <h2 className='text-slate-700 font-bold text-6xl'>So Sorry</h2>
                    <h3 className='text-slate-600 text-3xl font-semibold'>The page you are looking for cannot be found</h3>
                </div>
                <div className='w-7/12'>
                    <img src="/images/png/404.png" className='' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default NotFoundPageDefault