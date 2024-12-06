import bannermakeupImage from "../image/img/bannermakeup.jpg";

export default function Bannerproducts() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
        <h1 className="text-4xl md:text-6xl p-4">#StayHome</h1>
        <p className="text-lg md:text-xl">
          save more with coupons & up to 70% off!
        </p>
      </div>
      <img
        className="w-full h-64 md:h-96 object-cover"
        src={bannermakeupImage}
        alt="Makeup"
      />
    </div>
  );
}
