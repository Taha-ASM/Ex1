import bannercontactImage from "../image/img/bannercontact.jpg";

export default function Bannercontact() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
        <h1 className="text-4xl md:text-6xl p-4">#Let's_Talk</h1>
        <p className="text-lg md:text-xl">
          LEAVE A MESSAGE. We love to hear from you!
        </p>
      </div>
      <img
        className="w-full h-64 md:h-96 object-cover"
        src={bannercontactImage}
        alt="Makeup"
      />
    </div>
  );
}
