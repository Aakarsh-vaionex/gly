'use client'
import "react-slideshow-image/dist/styles.css"
import Link from "next/link"

import { Zoom } from "react-slideshow-image"
export function About() {
  const marvelComics = [
    {image:"https://cdn.marvel.com/u/prod/marvel/i/mg/c/d0/51ed8cf71fd82/portrait_uncanny.jpg",title:"Ultron",author:"Kevin"},
    {image:"https://cdn.marvel.com/u/prod/marvel/i/mg/3/70/4bc353d839901/portrait_uncanny.jpg",title:"Antman",author:"Nelson"},
    {image:"https://cdn.marvel.com/u/prod/marvel/i/mg/3/40/5730e351bd592/portrait_uncanny.jpg",title:"Deadpool",author:"Adam"},
    {image:"https://cdn.marvel.com/u/prod/marvel/i/mg/f/00/5bb3d801dbe7d/portrait_uncanny.jpg",title:"Anti-Venom",author:"Mathew"},
  ]

  const zoomInProperties = {
		scale: 1,
		duration: 5000,
		transitionDuration: 500,
		infinite: true,
	}
  return (
    <>
    <div className="mx-auto text-center md:max-w-xl lg:max-w-3xl">
  <h3
    class="mb-6 text-3xl font-bold text-neutral-800 dark:text-neutral-200">
    In trend Marvel Comics
  </h3>
</div>

<div id="about" style={{marginBottom:'20px'}}>
			<Zoom {...zoomInProperties}>
				{marvelComics.map((each, index) => (
						<Link href="/about" key={index}>
					<div  class="flex justify-center md:items-center items-start w-25 h-25 relative">
            <img
							className="w-100"
							src={each.image}
              />
                        <h1 className="absolute md:top-60 top-100 inset-x-1/4 text-center z-10 md:text-2xl text-4xl bold text-white">{each.title}</h1>
                        <p className="absolute md:top-80 top-40 inset-x-1/4 text-center z-10 md:text-2l text-xl bold text-white">{each.author}</p>
					</div>
              </Link>
				))}
			</Zoom>
		</div>
              </>
  )
}
