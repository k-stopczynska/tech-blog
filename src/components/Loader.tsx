import React from 'react';
import { PacmanLoader } from 'react-spinners';


const Loader = () => {
	return (
		<div className='h-full w-full flex items-center justify-center'>
            <PacmanLoader color='#fe5d9f' size={ 100 } />
		</div>
	);
};

export default Loader;
