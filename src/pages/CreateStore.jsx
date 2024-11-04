import React, { useState } from "react";
import otherBackground from "../assets/otherBackground.svg";
import { toast } from "react-toastify";
import { getProvider } from "../constants/providers";
import { getArtrailContract } from "../constants/contract";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import { isSupportedChain } from "../connection";
import { ErrorDecoder } from "ethers-decode-error";
import abi from "../constants/abi.json";

const CreateStore = () => {
  const [storeName, setStoreName] = useState("");
  const [storeLocation, setStoreLocation] = useState("");
  const [storeWallet, setStoreWallet] = useState("");
  const { chainId } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();
  const errorDecoder = ErrorDecoder.create([abi]);

  async function handleCreateStore() {
    if (!isSupportedChain(chainId)) return console.error("Wrong network");
    const readWriteProvider = getProvider(walletProvider);
    const signer = await readWriteProvider.getSigner();

    const contract = getArtrailContract(signer);

    try {
      const transaction = await contract.addStore(
        storeWallet,
        storeName,
        storeLocation
      );
      const receipt = await transaction.wait();

      if (receipt.status) {
        return toast.success("Store creation successful!", {
          position: "top-center",
        });
      }

      toast.error("Store creation failed!", {
        position: "top-center",
      });
    } catch (err) {
      const decodedError = await errorDecoder.decode(err);
      toast.error(`Store creation failed! - ${decodedError.reason}`, {
        position: "top-center",
      });
    } finally {
      setStoreLocation("");
      setStoreName('')
      setStoreWallet('')
    }
  }

  return (
    <main className="bg-[#231D16] w-screen">
      <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-white from-15% to-[#FFB054] to-90% lg:text-[24px] md:text-[24px] text-[20px] font-serif font-bold  text-center">
        Create Store
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
      <section>
        <div className="w-[50%] lg:mx-96 md:mx-96 mx-10 lg:px-10 md:px-10">
          <label className="block mt-4 mb-2 text-base font-bold text-white dark:text-white text-left">
            Store Name
          </label>
          <input
            type="text"
            value={storeName}
            onChange={(e) => setStoreName(e.target.value)}
            placeholder="Enter your store name"
            className="bg-white border border-white text-black text-sm font-bold rounded-lg focus:ring-[#54BE73] focus:border-white block w-3/4 p-2.5 backdrop-blur-lg mb-4 outline-none"
          />
          <label className="block mt-4 mb-2 text-base font-bold text-white dark:text-white text-left">
            Store Location
          </label>
          <input
            type="text"
            value={storeLocation}
            onChange={(e) => setStoreLocation(e.target.value)}
            placeholder="Enter your store location"
            className="bg-white border border-white text-black text-sm font-bold rounded-lg focus:ring-[#54BE73] focus:border-white block w-3/4 p-2.5 backdrop-blur-lg mb-4 outline-none"
          />
          <label className="block mt-4 mb-2 text-base font-bold text-white dark:text-white text-left">
            Store Wallet Address
          </label>
          <input
            type="text"
            value={storeWallet}
            onChange={(e) => setStoreWallet(e.target.value)}
            placeholder="Enter your store wallet address"
            className="bg-white border border-white text-black text-sm font-bold rounded-lg focus:ring-[#54BE73] focus:border-white block w-3/4 p-2.5 backdrop-blur-lg mb-4 outline-none"
          />
          <button onClick={handleCreateStore} className="bg-[#54BE73] text-white py-2 px-4  lg:text-[20px] md:text-[20px] font-bold text-[16px] w-3/4 my-4 rounded-3xl">
            Submit
          </button>
        </div>
      </section>
    </main>
  );
};

export default CreateStore;
