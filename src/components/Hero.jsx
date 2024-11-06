import heroImage from "../assets/heroImage.svg";
import featureIcon from "../assets/featureIcon.svg";
import featureImage from '../assets/featureImage.svg';
import { Link } from "react-router-dom";

const Hero = () => {


    return (
        <main className="bg-[#231D16] w-screen ">
            <section className="bg-[#231D16]">

                <div>
                    <div className="flex justify-between flex-col lg:flex-row md:flex-row items-center px-4 lg:px-0 md:px-0">
                        <div className="xl:w-[70%] lg:w-[70%] md:w-[70%] w-[90%] p-16">
                            <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-white from-10% to-[#FFB054] font-Sorts Mill Goudy lg:text-[60px] md:text-[60px] text-[40px] font-[700]">
                                Tokenizing Real-World
                                <br /> Assets for Global Access
                                <br />and Trust
                            </h1>
                            <p className="lg:text-[24px] md:text-[24px] text-[18px] font-titiliumweb text-white">
                                Mint, Trade, and Track Authentic Art, Artifacts, and Crafts
                                <br />with NFTs on a Secure, Transparent Blockchain Marketplace
                            </p>
                            <div className="mt-6 flex flex-col lg:flex-row md:flex-row">
                                <Link to='/list-product'>    <button className="bg-[#54BE73] rounded-3xl p-4 text-white mr-4 lg:text-[20px] md:text-[20px] text-[18px]" >
                                    List Product
                                </button></Link>
                                <div className="border border-white rounded-3xl w-[50%] flex justify-between">
                                    <div className="grid place-content-center text-[13px] p-4"><p className="text-white text-center font-thin ">Input Product tracking code</p></div>
                                    <button className="bg-[#33302E] w-[30%] mt-1 mr-1 text-white mb-1 rounded-3xl p-4 border border-white font-thin">
                                        Track
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-[40%] md:w-[40%] w-[100%]">
                            <img src={heroImage} alt="" className="w-[100%]" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-gradient-to-r  from-[#26201A] from-10% to-[#131313]">
                <div className="lg:w-[90%] md:w-[90%] w-[100%] mx-auto">
                    <div className="grid place-items-center">
                        <h2 className="lg:text-[32px] md:text-[32px] text-[24px] font-[700] text-white my-4 font-titiliumweb text-center lg:text-left md:text-left">
                            Features of Artrail
                        </h2>
                        <h2 className="lg:text-[32px] md:text-[32px] text-[24px] font-[500] text-white  font-titiliumweb text-center lg:text-left md:text-left">
                            Features and Functionality OF Artrail
                        </h2>

                    </div>
                    <div className="flex flex-col lg:flex-row md:flex-row justify-between">
                        <div className="py-6 lg:w-[50%] md:w-[50%] w-[90%]">
                            <img src={featureImage} alt='' className="w-[85%]" />
                        </div>
                        <div className="py-6 lg:w-[50%] md:w-[50%] w-[90%]">
                            <div className='bg-[#26201A] border rounded-2xl my-12'>
                                <div className="flex flex-col lg:flex-row md:flex-row gap-2 p-4">
                                    <div className="grid place-content-center p-2">
                                        <img src={featureIcon} alt='' />
                                    </div>
                                    <div className="p-2">
                                        <h3 className="lg:text-[20px] md:text-[20px] text-[14px] font-[700] font-titiliumweb mb-4 text-white text-left">
                                            NFT Minting for RWA
                                        </h3>
                                        <p className="text-white text-left lg:text-[14px] md:text-[14px] text-[10px] font-[400]">
                                            Creators can mint real-world assets as NFTs by providing product details.
                                            <br /> Each NFT gets a unique code for tracking and authentication.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-[#26201A] border rounded-2xl my-12'>
                                <div className="flex flex-col lg:flex-row md:flex-row gap-2 p-4">
                                    <div className="grid place-content-center p-2">
                                        <img src={featureIcon} alt='' />
                                    </div>
                                    <div className="p-2">
                                        <h3 className="lg:text-[20px] md:text-[20px] text-[14px] font-[700] font-titiliumweb mb-4 text-white text-left">
                                            NFT Transfer & Ownership
                                        </h3>
                                        <p className="text-white text-left lg:text-[14px] md:text-[14px] text-[10px] font-[400]">
                                            Ensures NFTs can only be transferred to one buyer at a time, with
                                            <br />ownership verified through the unique code on the blockchain.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-[#26201A] border rounded-2xl my-12'>
                                <div className="flex flex-col lg:flex-row md:flex-row gap-2 p-4">
                                    <div className="grid place-content-center p-2">
                                        <img src={featureIcon} alt='' />
                                    </div>
                                    <div className="p-2">
                                        <h3 className="lg:text-[20px] md:text-[20px] text-[14px] font-[700] font-titiliumweb mb-4 text-white text-left">
                                            Marketplace Search & Discovery
                                        </h3>
                                        <p className="text-white text-left lg:text-[14px] md:text-[14px] text-[10px] font-[400]">
                                            Enables buyers to search, view, and purchase NFTs using cryptocurrency,
                                            <br />with escrow holding funds until the asset is delivered and claimed.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-[#26201A] border rounded-2xl'>
                                <div className="flex flex-col lg:flex-row md:flex-row gap-2 p-4">
                                    <div className="grid place-content-center p-2">
                                        <img src={featureIcon} alt='' />
                                    </div>
                                    <div className="p-2">
                                        <h3 className="lg:text-[20px] md:text-[20px] text-[14px] font-[700] font-titiliumweb mb-4 text-white text-left">
                                            Tracking & Claiming RWAs:
                                        </h3>
                                        <p className="text-white text-left lg:text-[14px] md:text-[14px] text-[10px] font-[400]">
                                            Buyers can track the history of the real-world asset using the NFT’s
                                            <br />unique code and claim ownership once the physical asset is delivered.
                                        </p>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>
                </div>
            </section>


        </main>
    );
};

export default Hero;
