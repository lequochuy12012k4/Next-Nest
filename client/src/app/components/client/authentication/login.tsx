'use client';
import Link from 'next/link';
import Image from 'next/image';
import ChillingCoffeeLogo from '@/../public/Navbar/ChillingCoffee_logo.png';

export default function Login() {
  return (
    <div className="bg-[#f7f7f7] min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <Image
              src={ChillingCoffeeLogo}
              alt="Starbucks Logo"
              width={128}
              height={128}
              className="mx-auto mb-4"
            />
          </Link>
          <h1 className="text-2xl font-semibold text-gray-800">Sign in or create an account</h1>
        </div>
        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
             Email
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-[rgba(75,61,35,1)] hover:border-[rgba(75,61,35,1)] sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-[rgba(75,61,35,1)] hover:border-[rgba(75,61,35,1)] sm:text-sm"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Keep me signed in
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-[rgba(75,61,35,1)] hover:text-[rgba(232,220,182,1)]">
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[rgba(106,88,54,1)] hover:bg-[rgba(232,220,182,1)] hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Sign in
            </button>
          </div>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                Join ChillingCoffee® Rewards
              </span>
            </div>
          </div>

          <div className="mt-6">
            <Link href="/register">
              <div className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                Create an account
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}