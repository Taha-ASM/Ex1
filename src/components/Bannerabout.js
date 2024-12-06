import banneraboutImage from "../image/img/bannerabout.jpg";

export default function Bannerabout() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
        <h1 className="text-4xl md:text-6xl p-4">#KnowUs</h1>
        <p className="text-lg md:text-xl">
          Consequat commodo ipsum proident qui mollit sit
        </p>
      </div>
      <img
        className="w-full h-64 md:h-96 object-cover"
        src={banneraboutImage}
        alt="Makeup"
      />
    </div>
  );
}
