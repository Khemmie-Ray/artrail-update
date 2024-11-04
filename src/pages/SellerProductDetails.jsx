
import featured1 from '../assets/featured1.svg';
import { Link } from 'react-router-dom';

const SellerProductDetails = () => {
    return (
        <main className="bg-[#231D16] w-screen">
            <h1 className=" text-white lg:text-[28px] md:text-[28px] text-[20px] font-serif font-bold flex gap-6 lg:w-[80%] md:w-[80%] w-[100%] mx-auto py-6 px-4">
                <Link to='/marketplace'> Back </Link><span>  Details Page</span>
            </h1>
            <section className='lg:w-[80%] md:w-[80%] w-[100%] mx-auto py-12 px-4 lg:px-0 md:px-0 flex lg:flex-row md:flex-row flex-col justify-between'>
                <div className='lg:w-[35%] md:w-[35%] w-[100%] border bg-[#231D16]/90  rounded-2xl '>
                    <img src={featured1} alt="" className='w-[100%] p-4 object-cover object-center rounded-2xl' />
                </div>
                <div className='text-white lg:w-[60%] md:w-[60%] w-[100%] p-4 border bg-[#231D16]/90 border-white rounded-2xl'>
                    <h3 className='font-bold mt-4 lg:mt-0 md:mt-0 lg:text-[24px] md:text-[24px] text-[20px] capitalise font-titiliumweb'>Handcrafted Wooden Sculpture</h3>
                    <p className='font-titiliumweb mb-4 font-normal text-white lg:text-[18px] md:text-[18px] text-[14px]'>  Ghana, West Africa</p>
                    <p className='font-titiliumweb mb-4 font-bold text-white lg:text-[24px] md:text-[24px] text-[20px]'>  Description</p>
                    <p className='font-titiliumweb mb-4 font-normal text-white text-justify lg:text-[18px] md:text-[18px] text-[14px]'>  A detailed, hand-carved sculpture made from sustainable oak. The piece represents traditional
                        craftsmanship passed down through generations in West Africa.</p>
                    <p className='flex text-center justify-between my-4 font-titiliumweb mb-4 font-bold text-white lg:text-[24px] md:text-[24px] text-[20px]'>0.5 ETH <span>5 units </span><span>5 units</span></p>
                    <p className='flex text-center justify-between my-4 text-[#54BE73] lg:text-[14px] md:text-[14px] text-[10px]'>Price <span>Quantity left</span><span>Quantity bought</span></p>

                </div>
            </section>
        </main >
    );
};

export default SellerProductDetails;
