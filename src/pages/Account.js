import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Account() {
  return (
    <div>
      <Navbar />
      <div className="bg-white">
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="max-w-md w-full bg-white p-8 drop-shadow shadow-2xl rounded-md">
            <h2 className="text-3xl font-bold mb-4 text-center text-blue-500">
              Login
            </h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="username" className="block text-black">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="text-black p-4 mt-1 w-full rounded-md bg-white focus:border-blue-500 focus:ring focus:ring-blue-500 border border-blue-500"
                  placeholder="Enter your username"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-black">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="text-black p-4 mt-1 w-full rounded-md bg-white focus:border-blue-500 focus:ring focus:ring-blue-500 border border-blue-500"
                  placeholder="Enter your password"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300 w-full"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
