import BannerStack from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
     
      <div>
        <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
          Build Your Ideal
          <br />
          <span className="text-brand-gradient">Development Stack</span>
        </h1>

        <p className="mt-5 max-w-md text-base-content/70">
          Explore frontend, backend, database, and tooling options, compare
          them side by side, and put together the stack that fits your next
          project.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <button className="btn rounded-full border-none bg-brand-gradient px-6 text-white">
            Explore Technologies
          </button>
          <button className="btn btn-outline rounded-full px-6">
            Learn More
          </button>
        </div>
      </div>

     
      <div className="flex justify-center md:justify-end">
        <img
          src={BannerStack}
          alt="Development stack illustration"
          className="w-full max-w-sm"
        />
      </div>
    </div>
  );
};

export default Banner;
