import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { formatUnits } from "ethers";
import CallApi from "../api/CallApi";
import LoadingSpinner from "../components/Loader/LoadingSpinner";
import { toast } from "react-toastify";
import otherBackground from "../assets/otherBackground.svg";
import Ellipse from "../assets/Ellipse.svg";
import { FaPlus } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import ProductCard from "../components/ProductCard";

const Store = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const result = await CallApi(
            "allCreators",
            import.meta.env.VITE_CONTRACT_ADDRESS,
            12237
          );
          setData(result.flat());
        } catch (err) {
          setError(err);
        }
      };
  
      fetchData();
    }, []);
  
    if (error)
      return toast.error(`Error: ${error.message}`, {
        position: "top-center",
      });
    if (!data) return <LoadingSpinner />;
    console.log(data)

  return (
    <main className="bg-[#231D16]">
      <div
        className="bg-[#231D16] lg:w-[80%] md:w-[80%] w-[80%] mx-auto text-center p-8 lg:px-0 md:px-0 border border-white rounded-2xl bg-cover "
        style={{
          backgroundImage: `url(${otherBackground})`,
          backgroundSize: "100%",
        }}
      >
        <h1 className=" bg-clip-text text-transparent bg-gradient-to-r from-white from-15% to-[#FFB054] to-90% lg:text-[38px] md:text-[38px] text-[30px] font-titiliumweb font-[700] my-4">
          Welcome to your store
        </h1>
        <button className="bg-[#54BE73] text-white py-2 px-4  lg:text-[20px] md:text-[20px] font-bold text-[16px] w-1/4 my-4 rounded-3xl">
          Mint Your NFT
        </button>
      </div>
      <section
        className="bg-[#231D16] bg-no-repeat py-8 px-2"
        style={{
          backgroundImage: `url(${Ellipse})`,
          backgroundSize: "30% ",
          backgroundPosition: "left top",
        }}
      >
        <div className="lg:w-[80%] md:w-[80%] w-[100%] mx-auto py-12 px-4 lg:px-0 md:px-0">
          <div className="flex lg:flex-row md:flex-row flex-col justify-between my-10 flex-wrap">
            <div className="border border-white rounded-3xl w-[40%] flex justify-between">
              <div className="grid place-content-center text-[13px] p-2">
                <p className="text-white text-center">
                  Input Product tracking code
                </p>
              </div>
              <button className="bg-[#33302E] w-[30%] mt-1 mr-1 text-white mb-1 rounded-3xl p-4 border border-white">
                Track
              </button>
            </div>
            <div className="bg-[#33302E] border border-white rounded-3xl w-[20%] flex justify-between p-4">
              <div className="grid place-content-center text-[13px] p-2">
                <p className="text-white text-center"> Your Messages</p>
              </div>
            </div>
          </div>
          <h3 className="font-medium text-white mt-4 lg:mt-4 md:mt-4 my-2 lg:text-[16px] md:text-[16px] text-[12px] capitalise font-titiliumweb flex justify-between">
            <Link to="/store/all-products" >All Products</Link>{" "}
            <span>
              <Link to="/store/transactions">All Transactions </Link>
            </span>
            <span>
              <Link to="/store/mintednfts">Minted NFTs</Link>
            </span>
            <span>
              <Link to="/store/claimednfts">Claimed NFTs</Link>
            </span>
          </h3>
          <div className="border border-white rounded-3xl">
            <div className="bg-transparent border-none rounded-3xl w-full flex justify-between p-4">
              <p className="text-left text-white font-semibold font-titiliumweb text-[20px] flex gap-2">
                Your Store(s) <MdKeyboardArrowDown />
              </p>
              <div className="border border-white rounded-3xl w-[20%] text-center flex">
                <p className="text-white font-titiliumweb text-[16px] p-4 flex justify-between">
                  <FaPlus color="white" className="mr-2" />
                  Add another store
                </p>
              </div>
            </div>
            <table className="table-fixed border-none  border-spacing-2 w-[100%]">
              <thead className="p-4">
                <tr className="text-white font-serif font-normal text-center">
                  <th className="border-b border-t p-2 ">All Stores</th>
                  <th className="border-b border-t p-2">Wallet Address</th>
                  <th className="border-b border-t p-2">Action</th>
                  <th className="border-b border-t p-2 text-left">
                    Delete Store
                  </th>
                </tr>
              </thead>
              <tbody className="text-white p-4">
                {data.map((info) => (<tr className="font-serif font-normal text-center">
                  <td className="border-b font-serif font-normal p-2">
                    {info.name}
                  </td>
                  <td className="border-b font-serif font-normal p-2">
                  {info.creator.substring(0, 6) + '...'}
                  </td>
                  <td className="border-b font-serif font-normal p-2">
                    <Link to="/" className="text-[#54BE73]">
                      View Store
                    </Link>
                  </td>
                  <td className="border-b font-serif font-normal p-2">
                    <MdDelete color="red" />
                  </td>
                </tr>))}
              </tbody>
            </table>
          </div>
         <ProductCard />
        </div>
      </section>
    </main>
  );
};

export default Store;