import React from 'react'
import { MapPinned } from "lucide-react";

export default function Map() {
  return (
    <>
      <section className="py-16 bg-white">
            <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8 px-4">
                {/* Left Image */}
                <div className="w-full lg:w-1/2">
                <img
                    src="/images/park-map.jpg"
                    alt="Park Map"
                    className="rounded-lg shadow-lg w-full"
                />
                </div>

                {/* Right Content */}
                <div className="w-full lg:w-1/2">
                <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="bg-blue-600 p-3 rounded-md text-white">
                    <MapPinned size={30} />
                    </div>

                    {/* Text Content */}
                    <div>
                    <h3 className="text-2xl font-bold">DOWNLOAD PARK MAP</h3>
                    <p className="text-gray-600 mt-2">
                        Enjoy a contactless experience at the park. Navigate your way
                        through all the rides, attractions, shopping, and dining options
                        available at Yas Waterworld.
                    </p>
                    <a href="#"className="text-blue-600 font-semibold mt-4 inline-block">
                        DOWNLOAD
                    </a>
                    </div>
                </div>
                </div>
            </div>
      </section>
    </>
  )
}
