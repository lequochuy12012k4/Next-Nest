'use client';
import Link from 'next/link';
import Image from 'next/image';
import ChillingCoffeeLogo from '@/../public/Navbar/ChillingCoffee_logo.png';

export default function Register() {
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
          <h1 className="text-2xl font-semibold text-gray-800">Create an account</h1>
        </div>
        <form className="space-y-6">

          <div>
            <label htmlFor="Name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <div className="mt-1">
              <input
                id="Name"
                name="Name"
                type="text"
                autoComplete="family-name"
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-[rgba(75,61,35,1)] hover:border-[rgba(75,61,35,1)] sm:text-sm"
              />
            </div>
          </div>

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
            <p className="text-xs text-gray-500">Create a password 8 to 25 characters long that includes at least 1 uppercase and 1 lowercase letter, 1 number and 1 special character.</p>
            <div className="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-[rgba(75,61,35,1)] hover:border-[rgba(75,61,35,1)] sm:text-sm"
            
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[rgba(106,88,54,1)] hover:bg-[rgba(232,220,182,1)] hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Create account
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
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm">
            Already have an account?{' '}
            <Link href="/login">
              <span className="font-bold text-[rgba(75,61,35,1)] hover:text-[rgba(232,220,182,1)]">Sign in</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}