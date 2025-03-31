import React from 'react'

export default function Herosection() {
  return (
    <>
      <div className="relative w-full h-screen flex items-center justify-center text-center text-white">
            {/* Background Video */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="/videos/hero.mp4"
                autoPlay
                loop
                muted
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* Content */}
            <div className="relative z-10 max-w-2xl px-4">
                <h1 className="text-5xl font-bold">Welcome to the Paradise Splash</h1>
                <p className="mt-4 text-lg text-gray-200">
                    Enjoy more than 40 rip-roaring rides, slithering slides, and amazing
                    experiences at different thrill levels catering to the whole family.
                </p>
                <div className="mt-6">
                    <button className="px-6 py-3 bg-cyan-300 text-black font-semibold rounded-lg shadow-lg hover:bg-cyan-400 transition">
                            BUY TICKETS
                    </button>
                </div>
                {/* Decorative Line */}
                <div className="mt-8">
                    <div className="w-12 h-1 bg-cyan-400 mx-auto"></div>
                </div>
            </div>
      </div>
    </>
  )
}
