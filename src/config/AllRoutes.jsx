import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import PageLoader from "../components/Loader/PageLoader";


const Home = lazy(() => import("../pages/Home"));
const HomeLayout = lazy(() => import('../layout/HomeLayout'));
const CreateStore = lazy(() => import('../pages/CreateStore'));
const CreateAccount = lazy(() => import('../pages/CreateAccount'));
const ListProduct = lazy(() => import('../pages/ListProduct'));
const MarketPlace = lazy(() => import('../pages/MarketPlace'));
const ProductDetails = lazy(() => import('../pages/ProductDetails'));
const SellerProductDetails = lazy(() => import('../pages/SellerProductDetails'));
const Store = lazy(() => import('../pages/Store'));
const AllProducts = lazy(() => import('../pages/AllProducts'));
const Transactions = lazy(() => import('../pages/Transactions'));
const Chat = lazy(() => import('../pages/Chat'));
const BuyerProductTracker = lazy(() => import('../pages/BuyerProductTracker'));
const MintedNFTs = lazy(() => import('../pages/MintedNFTs'));
const ClaimedNFTs = lazy(() => import('../pages/ClaimedNFTs'));

const router = createBrowserRouter(createRoutesFromElements(

  <Route>
    <Route path="/" element={<HomeLayout />} >
      <Route index element={<Home />} />
      <Route path="/create-store" element={<CreateStore />} />
      <Route path="/list-product" element={<ListProduct />} />
      <Route path="/marketplace" element={<MarketPlace />} />
      <Route path="/marketplace/:id" element={<ProductDetails />} />
      <Route path="/store" element={<Store />} />
      <Route path="/profile" element={<CreateAccount />} />
      <Route path="/sellerproductdetails" element={<SellerProductDetails />} />
      <Route path="/store/allproducts" element={<AllProducts />} />
      <Route path="/store/transactions" element={<Transactions />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/buyerproducttracker" element={<BuyerProductTracker />} />
      <Route path="/store/mintednfts" element={<MintedNFTs />} />
      <Route path="/store/claimednfts" element={<ClaimedNFTs />} />


      

    </Route>
    
  </Route>
))



const AllRoutes = () => {


  return (
    <div className="w-full mx-auto bg-white  min-h-[100vh] font-opensans max-w-[1440px] text-[#0F160F]">
      <Toaster />
      <Suspense fallback={<PageLoader />}>

        <RouterProvider router={router} />

      </Suspense>
    </div>
  );
};

export default AllRoutes;