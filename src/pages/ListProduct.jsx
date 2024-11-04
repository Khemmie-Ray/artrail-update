import React, { useState } from "react";
import Ellipse from "../assets/Ellipse.svg";
import otherBackground from "../assets/otherBackground.svg";
import { toast } from "react-toastify";
import { getProvider } from "../constants/providers";
import { getArtrailContract } from "../constants/contract";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import { isSupportedChain } from "../connection";
import { ethers, parseEther } from "ethers";
import { ErrorDecoder } from 'ethers-decode-error'
import abi from '../constants/abi.json'

const ListProduct = () => {
  const [ipfsUrl, setIpfsUrl] = useState(null);
  const [productName, setProductName] = useState("");
  const [productDesc, setProductDesc] = useState("");
  const [location, setLocation] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [error, setError] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  const { chainId } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();
  const errorDecoder = ErrorDecoder.create([abi])

  //   const APIKEY = import.meta.env.VITE_VOTTUN_APIKEY;
  //   const APPID = import.meta.env.VITE_VOTTUN_APPID;

  //   const handleFileChange = async (event) => {
  //     const file = event.target.files[0];
  //     if (!file) {
  //       alert("Please select a file first!");
  //       return;
  //     }

  //     const formData = new FormData();
  //     formData.append("filename", file.name);
  //     formData.append("file", file);

  //     try {
  //       const response = await fetch(
  //         "https://ipfsapi-v2.vottun.tech/ipfs/v2/file/upload",
  //         {
  //           method: "POST",
  //           headers: {
  //             Authorization: `Bearer ${APIKEY.trim()}`,
  //             "x-application-vkn": `${APPID.trim()}`,
  //             //   'Content-Type': 'multipart/formdata'
  //           },
  //           body: formData,
  //         }
  //       );

  //       const data = await response.json();
  //       console.log(data);

  //       if (data && data.cid) {
  //         setIpfsUrl(`https://ipfs.io/ipfs/${data.cid}`);
  //         alert("File uploaded successfully!");
  //       } else {
  //         alert("File upload failed!");
  //       }
  //     } catch (error) {
  //       console.error("Error uploading file:", error);
  //       alert("An error occurred during the upload process.");
  //     }
  //   };

  //   const handleFileChange = async (event) => {
  //     const file = event.target.files[0];
  //     if (!file) {
  //       alert("Please select a file first!");
  //       return;
  //     }

  //     const formData = new FormData();
  //     formData.append("filename", file.name);
  //     formData.append("file", file);

  //     try {
  //       const response = await fetch("https://ipfsapi-v2.vottun.tech/ipfs/v2/file/upload", {
  //         method: "POST",
  //         headers: {
  //           Authorization: `Bearer ${APIKEY.trim()}`,
  //           "x-application-vkn": `${APPID.trim()}`,
  //           // Remove Content-Type to let the browser set it automatically for FormData
  //         },
  //         body: formData,
  //       });

  //       if (response.ok) {
  //         const data = await response.json();
  //         if (data && data.cid) {
  //           setIpfsUrl(`https://ipfs.io/ipfs/${data.cid}`);
  //           alert("File uploaded successfully!");
  //         } else {
  //           alert("File upload failed! Check API response.");
  //         }
  //       } else {
  //         console.error("Error:", response.status, response.statusText);
  //         alert("Failed to upload file: Server responded with status " + response.status);
  //       }
  //     } catch (error) {
  //       console.error("Error uploading file:", error);
  //       alert("An error occurred during the upload process.");
  //     }
  //   };

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) {
      alert("Please select a file first");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch(
        "https://api.pinata.cloud/pinning/pinFileToIPFS",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_PINATA_JWT}`,
          },
          body: formData,
        }
      );
      const resData = await res.json();
      setIpfsUrl(`https://ipfs.io/ipfs/${resData.IpfsHash}`);

      toast.success("Upload Successful", {
        position: "top-center",
      });
    } catch (error) {
      console.log(error);
    }
  };

  async function handleListProduct() {
    if (!isSupportedChain(chainId)) return console.error("Wrong network");
    const readWriteProvider = getProvider(walletProvider);
    const signer = await readWriteProvider.getSigner();

    const contract = getArtrailContract(signer);

    try {
      const _amount = ethers.parseUnits(price);

      const transaction = await contract.listProduct(
        productName,
        _amount,
        quantity,
        ipfsUrl,
        productDesc,
        location
      );
      console.log("transaction: ", transaction);
      const receipt = await transaction.wait();

      if (receipt.status) {
        return toast.success("Listing successful!", {
          position: "top-center",
        });
      }

      toast.error("Listing failed", {
        position: "top-center",
      });
    } catch (err) {
      const decodedError = await errorDecoder.decode(err)
      console.error(err);
      toast.error(`Listing failed! - ${decodedError.reason}`, {
        position: "top-center",
      });
    } finally {
      setIpfsUrl("");
      setLocation("");
      setPrice(0);
      setProductDesc("");
      setQuantity(0);
      setProductName("");
    }
  }

  return (
    <main className="bg-[#231D16] w-screen ">
      <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-white from-15% to-[#FFB054] to-90% lg:text-[24px] md:text-[24px] text-[20px] font-serif font-bold  text-center">
        LIST PRODUCTS
      </h1>
      <div
        className="bg-[#231D16] lg:w-[80%] md:w-[80%] w-[80%] mx-auto text-center p-8 lg:px-0 md:px-0 border border-white rounded-2xl bg-cover mt-4"
        style={{
          backgroundImage: `url(${otherBackground})`,
          backgroundSize: "100%",
        }}
      >
        <h1 className=" bg-clip-text text-transparent bg-gradient-to-r from-white from-15% to-[#FFB054] to-90% lg:text-[38px] md:text-[38px] text-[30px] font-titiliumweb font-[700] my-4">
          Tokenizing Real-World Assets for
          <br />
          Global Access and Trust
        </h1>
        <p className="text-white lg:text-[20px] md:text-[20px] text-[16px] text-center font-titiliumweb">
          Mint, Trade, and Track Authentic Art, Artifacts, and Crafts with NFTs
          on a
          <br />
          Secure, Transparent Blockchain Marketplace
        </p>
      </div>
      <section
        className="bg-[#231D16] bg-no-repeat py-8 px-2"
        style={{
          backgroundImage: `url(${Ellipse})`,
          backgroundSize: "30% ",
          backgroundPosition: "left top",
        }}
      >
        <div className="w-[50%] lg:mx-96 md:mx-96 mx-10 lg:px-10 md:px-10">
          <label className="block mt-4 mb-2 text-base font-bold text-white dark:text-white text-left">
            Upload Image
          </label>
          {ipfsUrl ? (
            <input
              type="text"
              value={ipfsUrl}
              placeholder="Product Image"
              onChange={handleFileUpload}
              className="bg-white border border-white text-black  text-sm font-bold rounded-lg focus:ring-[#54BE73] focus:border-white block w-3/4 p-2.5 backdrop-blur-lg mb-4 outline-none"
              readOnly
            />
          ) : (
            <div className="relative mb-4">
              <input
                type="file"
                value={ipfsUrl}
                placeholder="Product Image"
                className={`bg-white border border-white text-black text-sm font-bold rounded-lg focus:ring-[#54BE73] focus:border-white block w-3/4 p-2.5 backdrop-blur-lg mb-4 outline-none ${
                  isUploading ? "cursor-not-allowed" : ""
                }`}
                onChange={handleFileUpload}
                disabled={isUploading}
              />
              {isUploading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200 bg-opacity-50 rounded-lg">
                  <div className="loader"></div>{" "}
                  {/* Add your loading spinner here */}
                </div>
              )}
            </div>
          )}
          <label className="block mt-4 mb-2 text-base font-bold text-white dark:text-white text-left">
            Product Name
          </label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            placeholder="Enter your product name"
            className="bg-white border border-white text-black  text-sm font-bold rounded-lg focus:ring-[#54BE73] focus:border-white block w-3/4 p-2.5 backdrop-blur-lg mb-4 outline-none"
          />
          <label className="block mt-4 mb-2 text-base font-bold text-white dark:text-white text-left">
            Product description
          </label>
          <input
            type="text"
            value={productDesc}
            onChange={(e) => setProductDesc(e.target.value)}
            placeholder="Include the type, material, and history of the product"
            className="bg-white border border-white text-black text-sm font-bold rounded-lg focus:ring-[#54BE73] focus:border-white block w-3/4 p-2.5 backdrop-blur-lg mb-4 outline-none"
          />
          <label className="block mt-4 mb-2 text-base font-bold text-white dark:text-white text-left">
            Origin and location
          </label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Country, region (e.g Nigeria, West Africa)"
            className="bg-white border border-white text-black text-sm font-bold rounded-lg focus:ring-[#54BE73] focus:border-white block w-3/4 p-2.5 backdrop-blur-lg mb-4 outline-none"
          />
          <label className="block mt-4 mb-2 text-base font-bold text-white dark:text-white text-left">
            Quantity
          </label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="Quantity should be in units"
            className="bg-white border border-white text-black text-sm font-bold rounded-lg focus:ring-[#54BE73] focus:border-white block w-3/4 p-2.5 backdrop-blur-lg mb-4 outline-none"
          />
          <label className="block mt-4 mb-2 text-base font-bold text-white dark:text-white text-left">
            Price
          </label>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Price per quantity (in cryptocurrency)"
            className="bg-white border border-white text-black text-sm font-bold rounded-lg focus:ring-[#54BE73] focus:border-white block w-3/4 p-2.5 backdrop-blur-lg mb-4 outline-none"
          />
          <button
            onClick={handleListProduct}
            className="bg-[#54BE73] text-white py-2 px-4  lg:text-[20px] md:text-[20px] font-bold text-[16px] w-3/4 my-4 rounded-3xl"
          >
            Create
          </button>
        </div>
      </section>
    </main>
  );
};

export default ListProduct;
