"use client";
import Link from "next/link";
import Image from "next/image";

export function Contacts() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-white text-gray-800">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold sm:text-4xl">Contact us</h1>
        <p className="mt-2 text-gray-600">
          We'd love to talk about how we can help you.
        </p>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        {/* Contact Form */}
        <div className="flex flex-col border border-gray-200 rounded-2xl p-6 bg-white shadow-sm">
          <h2 className="mb-6 text-xl font-semibold">Fill in the form</h2>
          <form>
            <div className="grid gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className="py-2.5 sm:py-3 px-4 block w-full border border-gray-300 rounded-lg sm:text-sm focus:border-[#9d9af0] focus:ring-[#9d9af0] transition-all"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className="py-2.5 sm:py-3 px-4 block w-full border border-gray-300 rounded-lg sm:text-sm focus:border-[#9d9af0] focus:ring-[#9d9af0] transition-all"
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Email"
                className="py-2.5 sm:py-3 px-4 block w-full border border-gray-300 rounded-lg sm:text-sm focus:border-[#9d9af0] focus:ring-[#9d9af0] transition-all"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                className="py-2.5 sm:py-3 px-4 block w-full border border-gray-300 rounded-lg sm:text-sm focus:border-[#9d9af0] focus:ring-[#9d9af0] transition-all"
              />
              <textarea
                name="details"
                placeholder="Details"
                className="py-2.5 sm:py-3 px-4 block w-full border border-gray-300 rounded-lg sm:text-sm focus:border-[#9d9af0] focus:ring-[#9d9af0] transition-all"
                rows={4}
              />
            </div>

            <button
              type="submit"
              className="mt-6 w-full py-3 px-4 bg-[#9d9af0] text-white font-medium rounded-full hover:bg-[#93bddc] transition-colors duration-300"
            >
              Send inquiry
            </button>
            <p className="mt-3 text-center text-sm text-gray-500">
              We'll get back to you in 1-2 business days.
            </p>
          </form>
        </div>

        {/* Image */}
        <div className="relative w-full h-72 lg:h-full rounded-2xl overflow-hidden">
          <Image
            src="/contacts.webp"
            alt="Contacts"
            fill
            className="object-cover rounded-2xl transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}
