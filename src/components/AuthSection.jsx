import React from 'react';

const AuthSection = () => {
  return (
    <div className=" container  flex items-center justify-center px-6 mb-8 xl:py-24">
      <div className="container  grid grid-cols-1 md:grid-cols-2 gap-2 items-center ">
        
        {/* Left Side: Login Card */}
        <div className="bg-white p-8 rounded-2xl border mb-2 sm:mb-0 border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.04)] lg:max-w-sm xl:max-w-md w-full mx-auto md:ml-auto">
          {/* Tabs */}
          <div className="flex bg-gray-50 p-1.5 rounded-xl mb-6">
            <button className="w-1/2 py-2.5 text-sm font-medium text-gray-700 bg-white rounded-lg shadow-sm border border-gray-100 transition-all">
              Sign up
            </button>
            <button className="w-1/2 py-2.5 text-sm font-medium text-white bg-[#e09825] rounded-lg transition-all hover:bg-[#c9851f]">
              Login
            </button>
          </div>

          {/* Form */}
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4 ">
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1.5">Email</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all text-gray-700 placeholder-gray-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1.5">Password</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
                <input 
                  type="password" 
                  placeholder="Enter password" 
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all text-gray-700 placeholder-gray-400"
                />
              </div>
            </div>

            <div className="flex items-center pt-1">
              <input 
                id="remember" 
                type="checkbox" 
                className="w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500 bg-gray-50"
              />
              <label htmlFor="remember" className="ml-2 text-xs text-gray-400 font-medium select-none">
                Remember for 30 days
              </label>
            </div>

            <button type="submit" className="w-full py-3 bg-[#1e9e49] text-white font-medium text-sm rounded-xl hover:bg-[#16853c] transition-all mt-2 shadow-sm">
              Login
            </button>
          </form>

          {/* Divider & Google Login */}
          <div className="mt-4">
            <button className="w-full py-2.5 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Sign up with Google
            </button>
          </div>
        </div>

        {/* Right Side: Text Content */}
        <div className=" md:mr-auto">
          <h1 className="text-3xl md:text-[40px] font-semibold text-gray-900 leading-[1.2] tracking-tight mb-4">
            Create your free account today and start trading with confidence.
          </h1>
          <p className="text-gray-800 text-md leading-relaxed mb-8">
            Sign up or log in to access a demo account and trade risk-free using virtual funds. 
            Test strategies, refine your skills, and build confidence, no financial risk involved.
          </p>
          <button className="px-6 py-3 bg-[#0a192f] text-white font-medium text-sm rounded-full hover:bg-black transition-all shadow-sm">
            Get started
          </button>
        </div>

      </div>
    </div>
  );
};

export default AuthSection;
