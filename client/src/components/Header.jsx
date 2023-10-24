import React from 'react' 

export default function Header() {
  return (
    <header className='bg-slate-300 shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-cyan-500'>Real</span>
            <span className='text-cyan-800'>Estate</span>
        </h1>
        <form className='bg-slate-100 p-3 rounded-lg'>
            <input type="text" placeholder='Search...'  className='bg-transparent'/>
        </form>
        </div>
        
    </header>
  )
}
