import React from 'react';
import { pageNotFound404 } from '../../assets';
import { Typography } from '@material-tailwind/react';
// useEffect(() => {
//     props.onMenu('notFound')
// });

export default function NotFound() {
  return (
    <div className="container mx-auto mt-8 px-4 py-10 sm:py-20 sm:px-0 flex-1 flex items-center justify-center">
      <div className=''>
        <img className='m-auto w-88 m-4' src={pageNotFound404} alt='PageNotFound' />
        <Typography variant='h2' className='text-center mt-4'>Your Page is Not Found</Typography>
      </div>
    </div>
  )
}
