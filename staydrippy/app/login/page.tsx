import Link from "next/link";

export default function login() {
    return (
        (
            <div className="flex items-center justify-center min-h-screen bg-blue-100">
              <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        
                <form>
                  {/* Username input */}
                  <div className="mb-4">
                    <label htmlFor="username" className="block text-sm font-medium text-blue-700">
                      Username
                    </label>
                    <input
                      type="text"
                      id="username"
                      className="w-full mt-1 px-4 py-2 border border-blue-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter your username"
                    />
                  </div>
        
                  {/* Password input */}
                  <div className="mb-6">
                    <label htmlFor="password" className="block text-sm font-medium text-blue-700">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-white-500 focus:border-blue-500"
                      placeholder="Enter your password"
                    />
                  </div>
                  <div className="flex justify-center mt-4">
                <Link href="upload">
                    <button
                        className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-gray-600"
                    >
                        Get Started
                    </button>
                </Link>
            </div>
                </form>
              </div>
            </div>
          ))
        }



