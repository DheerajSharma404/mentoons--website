const StoreHeroSection = () => {
  return (
    <div className="bg-[linear-gradient(360deg,_#42A0CE_0%,_#034E73_100%)]">
      <div className="flex flex-row items-center justify-between h-screen p-10">
        <div className="flex flex-col items-start space-y-10 w-1/2">
            <h1 className="text-white font-bold text-[82px]">Mentoons Store</h1>
            <p className="text-white text-lg text-[30px]">
            Everyday Adventures at the Comic Shop: Where real kids share epic stories, funny mishaps, and life lessons. Step into the story with us.
            </p>
            <button className="bg-white text-black px-4 py-2 rounded-md shadow-[3px_3px_5.2px_0px_#1A6B94C9,_inset_-3px_-3px_3px_0px_#5099BE9C]">
                Shop Now
            </button>
        </div>
        <div className="flex items-center justify-center w-1/2">
            <img src="/assets/images/store-hero-image.png" alt="Mentoons Store" className="w-full h-full object-contain" />
        </div>
      </div>
    </div>
  )
}

export default StoreHeroSection
