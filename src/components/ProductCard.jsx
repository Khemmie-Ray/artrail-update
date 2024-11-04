import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { formatUnits } from "ethers";
import CallApi from "../api/CallApi";
import LoadingSpinner from "../components/Loader/LoadingSpinner";
import { toast } from "react-toastify";

const ProductCard = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await CallApi(
          "allProducts",
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

  return (
    <div className="flex lg:flex-row md:flex-row flex-col justify-between my-10 flex-wrap">
      {data.map((info) => (
        <div className="lg:w-[32%] md:w-[32%] w-[100%] p-4  border-white rounded-xl border shadow-lg mb-4">
          <Link to={`/marketplace/${info.productId}`}>
            <img
              src={info.productUri}
              alt=""
              className="w-[100%] h-[237px] object-cover object-center rounded-lg"
            />
            <h3 className="font-bold mt-4 lg:text-[18px] md:text-[18px] text-[16px]  text-white">
              {info.productName}
            </h3>
            <p className=" text-white lg:text-[14px] md:text-[14px] text-[10px] ">
              {info.productOrigin}
            </p>
            <p className="flex justify-between text-white font-bold mt-4 lg:text-[18px] md:text-[18px] text-[16px]">
              {formatUnits(info.productPrice.toString(), "ether")} ETH{" "}
              <span>{info.quantity}units </span>
            </p>
            <p className="flex justify-between text-[#54BE73]  lg:text-[14px] md:text-[14px] text-[10px]">
              Price <span>Quantity </span>
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
