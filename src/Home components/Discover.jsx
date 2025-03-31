import React from 'react'

export default function Discover() {
    const cards = [
        {
          title: "Explore Rides",
          image: "/images/ride.jpg",
          description:
            "With over 40 theme park rides, slides and attractions, everyone from tiny tots to water-park veterans will find something they love.",
        },
        {
          title: "Transportation",
          image: "/images/transport.jpg",
          description:
            "With over 40 theme park rides, slides and attractions, everyone from tiny tots to water-park veterans will find something they love.",
        },
        {
          title: "Paradise Resort",
          image: "/images/resort.jpg",
          description:
            "With over 40 theme park rides, slides and attractions, everyone from tiny tots to water-park veterans will find something they love.",
        },
        {
          title: "Food Court",
          image: "/images/food.jpg",
          description:
            "With over 40 theme park rides, slides and attractions, everyone from tiny tots to water-park veterans will find something they love.",
        },
      ];

      
  return (
    <>
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Discover More</h2>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
            {cards.map((card, index) => (
                <div key={index} className="border border-gray-300 rounded-lg overflow-hidden shadow-md">
                <img src={card.image} alt={card.title} className="w-full h-48 object-cover"/>
                <div className="p-4">
                    <h3 className="text-xl font-semibold">{card.title}</h3>
                    <p className="text-gray-600 mt-2">{card.description}</p>
                    <a
                    href="#"
                    className="text-blue-600 font-semibold mt-4 inline-block"
                    >
                    Learn More
                    </a>
                </div>
                </div>
            ))}
            </div>
        </div>
      </section>
    </>
  )
}
