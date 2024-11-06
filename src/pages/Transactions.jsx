import { Link } from 'react-router-dom';
import otherBackground from '../assets/otherBackground.svg';
import Ellipse from '../assets/Ellipse.svg';
import product1 from '../assets/product1.svg';
import product2 from '../assets/product2.svg';
import product3 from '../assets/product3.svg';
import product4 from '../assets/product4.svg';


const Transactions = () => {


    return (
        <main className="bg-[#231D16] w-screen">

            <div className="bg-[#231D16] lg:w-[80%] md:w-[80%] w-[80%] mx-auto text-center p-8 lg:px-0 md:px-0 border border-white rounded-2xl bg-cover "
                style={{
                    backgroundImage: `url(${otherBackground})`,
                    backgroundSize: "100%",
                }}>
                <h1 className=" bg-clip-text text-transparent bg-gradient-to-r from-white from-15% to-[#FFB054] to-90% lg:text-[38px] md:text-[38px] text-[30px] font-titiliumweb font-[700] my-4">
                    Welcome to your store
                </h1>
                <button className="bg-[#54BE73] text-white py-2 px-4  lg:text-[20px] md:text-[20px] font-bold text-[16px] w-1/4 my-4 rounded-3xl">
                    List Product
                </button>
            </div>
            <section className='bg-[#231D16] bg-no-repeat py-8 px-2'
                style={{
                    backgroundImage: `url(${Ellipse})`,
                    backgroundSize: "30% ",
                    backgroundPosition: "left top",
                }}>
                <div className='lg:w-[80%] md:w-[80%] w-[100%] mx-auto py-12 px-4 lg:px-0 md:px-0'>
                    <div className="border border-white rounded-3xl w-[40%] flex justify-between">
                        <div className="grid place-content-center text-[13px] p-2"><p className="text-white text-center">Input Product tracking code</p></div>
                        <button className="bg-[#33302E] w-[30%] mt-1 mr-1 text-white mb-1 rounded-3xl p-4 border border-white">
                            Track
                        </button>
                    </div>
                    <h3 className='font-medium text-white mt-4 lg:mt-4 md:mt-4 my-2 lg:text-[16px] md:text-[16px] text-[12px] capitalise font-titiliumweb flex justify-between'>
                        <Link to='/store/allproducts'>All Products</Link> <span>
                            <Link to='/store/transactions'>All Transactions </Link></span>
                        <span><Link to='/store/mintednfts'>Minted NFTs</Link></span>
                        <span><Link to='/store/claimednfts'>Claimed NFTs</Link></span>
                    </h3>
                    <div className='border border-white rounded-3xl'>

                        <table className="table-fixed border-none  border-spacing-2 w-[100%]">
                            <thead className="p-4">
                                <tr className="text-white font-serif font-normal text-center">
                                    <th className="border-b  p-2 ">Product </th>
                                    <th className="border-b p-2">Product Name</th>
                                    <th className="border-b p-2">Amount</th>
                                    <th className="border-b p-2">Status</th>

                                </tr>
                            </thead>
                            <tbody className='text-white p-4'>
                                <tr className="font-serif font-normal text-center">
                                    <td className="border-b font-serif font-normal p-2">
                                        <div className='grid place-content-center'> <img
                                            src={product1}
                                            alt=""
                                            className="object-center rounded-lg "
                                        />
                                        </div></td>
                                    <td className="border-b font-serif font-normal p-2">Handcrafted Wooden Sculpture</td>
                                    <td className="border-b font-serif font-normal p-2">0.5 ETH</td>
                                    <td className="border-b font-serif font-normal p-2">Received</td>

                                </tr>
                                <tr className="font-serif font-normal text-center ">
                                    <td className="border-b font-serif font-normal p-2">
                                        <div className='grid place-content-center'> <img
                                            src={product2}
                                            alt=""
                                            className="object-center rounded-lg"
                                        />
                                        </div>
                                    </td>
                                    <td className="border-b font-serif font-normal p-2">Vintage Ceramic Vase</td>
                                    <td className="border-b font-serif font-normal p-2">1 ETH</td>
                                    <td className="border-b font-serif font-normal p-2">Received</td>

                                </tr>
                                <tr className="font-serif font-normal text-center ">
                                    <td className="border-b font-serif font-normal p-2">
                                        <div className='grid place-content-center'> <img
                                            src={product3}
                                            alt=""
                                            className="object-center rounded-lg"
                                        />
                                        </div>
                                    </td>
                                    <td className="border-b font-serif font-normal p-2">Artisan Silk Wall Hanging</td>
                                    <td className="border-b font-serif font-normal p-2">0.8 ETH</td>
                                    <td className="border-b font-serif font-normal p-2">Canceled</td>

                                </tr>
                                <tr className="font-serif font-normal text-center">
                                    <td className="font-serif font-normal p-2">
                                        <div className='grid place-content-center'> <img
                                            src={product4}
                                            alt=""
                                            className="object-center rounded-lg"
                                        />
                                        </div>
                                    </td>
                                    <td className=" font-serif font-normal p-2">Wooden Sculpture</td>
                                    <td className="border-b font-serif font-normal p-2">0.4 ETH</td>
                                    <td className=" font-serif font-normal p-2">Received</td>

                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </section>


        </main >
    );
};

export default Transactions;
