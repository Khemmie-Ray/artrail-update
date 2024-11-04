import ProductCard from "./ProductCard";

const FeaturedListings = () => {
  return (
    <section className="bg-[#26201A]">
      <div className="lg:w-[90%] md:w-[90%] w-[100%] mx-auto py-12 px-4 lg:px-0 md:px-0">
        <div className="grid place-items-center">
          <h2 className="lg:text-[32px] md:text-[32px] text-[24px] font-[700] text-white my-4 font-titiliumweb text-center lg:text-left md:text-left">
            Featured Listings
          </h2>
          <h2 className="lg:text-[32px] md:text-[32px] text-[24px] font-[500] text-white  font-titiliumweb text-center lg:text-left md:text-left">
            Recently listed NFTs tied to real-world assets.
          </h2>
        </div>
        <ProductCard />
      </div>
    </section>
  );
};
export default FeaturedListings;
