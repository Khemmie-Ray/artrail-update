import { Watch } from 'react-loader-spinner';
import './style.css';

const PageLoader = () => {
  return (
    <div className='fixed w-screen h-screen top-0 left-0 bg-[rgba(255,255,255,0.8)] z-[55] flex items-center justify-center'>
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
};

export default PageLoader;