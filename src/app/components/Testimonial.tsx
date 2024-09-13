/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";

const testimonials = [
  {
    stars: 5,
    text: "Vestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est convallis lacus blandit pretium sed non enim. Maecenas lacinia non orci at aliquam. Donec finibus, urna bibendum ultricies laoreet.",
    name: "Chealsea Morgan",
    title: "CEO at Subway",
    image: "/images/morgan.svg",
  },
  {
    stars: 5,
    text: "In a laoreet purus. Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc. Aliquam erat volutpat. Curabitur fringilla in purus eget egestas. Etiam quis.",
    name: "Nick Cave",
    title: "CMO of Nokia",
    image: "/images/nick.svg",
  },
  {
    stars: 5,
    text: "Vestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est convallis lacus blandit pretium sed non enim. Maecenas lacinia non orci at aliquam. Donec finibus, urna bibendum ultricies laoreet.",
    name: "John Doe",
    title: "CEO Telegranm",
    image: "/images/lana.svg",
  },
  {
    stars: 5,
    text: "Vestibulum eu quam nec neque pellentesque efficitur Proin porta est convallis lacus blandit",
    name: "Justinsss",
    title: "Senior VP at Pinterest",
    image: "/images/morder.svg",
  },
  {
    stars: 5,
    text: "In a laoreet purus. Integer turpis quam, laoreet",
    name: "Lana Rosenfeld",
    title: "Senior VP at Pinterest",
    image: "/images/lana.svg",
  },
];

export default function Testimonials() {
  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl text-center">
        What Our Customers Are Saying
      </h2>
      <div className="overflow-x-auto mt-8">
        <div className="flex space-x-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 min-w-[300px]"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <i key={i} className="fas fa-star text-yellow-500"></i>
                ))}
              </div>
              <p className="text-gray-700 mb-4 text-sm md:text-base">
                {testimonial.text}
              </p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={`Image of ${testimonial.name}`}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-bold text-gray-900 text-sm md:text-base">
                    {testimonial.name}
                  </p>
                  <p className="text-xs md:text-sm text-gray-500">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
