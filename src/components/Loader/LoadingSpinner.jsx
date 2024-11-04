import { Watch } from 'react-loader-spinner';

const LoadingSpinner = () => (
  <div className='text-center grid place-content-center'>
    <Watch
     visible={true}
     height="80"
     width="80"
     radius="48"
     color="#191919"
     ariaLabel="watch-loading"
     wrapperStyle={{}}
     wrapperClass=""
    />
  </div>
);

export default LoadingSpinner;