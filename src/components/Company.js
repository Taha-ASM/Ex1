import amazonImage from "../image/img/amazon.png";
import cocacolaImage from "../image/img/cocacola.png";
import NikeImage from "../image/img/Nike.png";
import walmartImage from "../image/img/walmart.png";
import gucciImage from "../image/img/gucci.png";

export default function Company() {
  return (
    <div className="bg-white pb-20 py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 lg:gap-12">
          <img
            src={amazonImage}
            className="company-image grayscale hover:grayscale-0 transition duration-300 ease-in-out w-24 md:w-32 lg:w-40 h-16"
            alt="Amazon"
          />
          <img
            src={cocacolaImage}
            className="company-image grayscale hover:grayscale-0 transition duration-300 ease-in-out w-24 md:w-32 lg:w-40 h-16"
            alt="Coca Cola"
          />
          <img
            src={NikeImage}
            className="company-image grayscale hover:grayscale-0 transition duration-300 ease-in-out w-24 md:w-32 lg:w-40"
            alt="Nike"
          />
          <img
            src={walmartImage}
            className="company-image grayscale hover:grayscale-0 transition duration-300 ease-in-out w-24 md:w-32 lg:w-40 h-16"
            alt="Walmart"
          />
          <img
            src={gucciImage}
            className="company-image grayscale hover:grayscale-0 transition duration-300 ease-in-out w-24 md:w-32 lg:w-40"
            alt="Gucci"
          />
        </div>
      </div>
    </div>
  );
}
