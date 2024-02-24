import React, {useState} from 'react'
import Sidemenu from '@/components/Sidemenu';
import Maincontent from '@/components/Maincontent';
import LevelContext from '@/components/LevelContext';
function Main() {
  const [title, setTitle] =  useState('');
  return (
    <LevelContext>
    <main className='flex align-middle'>
      <div className='basis-1/6 h-full hidden md:block'>
        <Sidemenu settitle={(title) => setTitle(title)} />
      </div>
      <div className='basis-3/4 h-full pt-4'>
        <Maincontent title={title} />
      </div>
    </main>
  </LevelContext>
  )
}

export default Main