'use client'
import React from 'react'


import 'yet-another-react-lightbox/styles.css'
const Gallery = () => {
  const galleryTab = [
    // you can add more image if you want
    {
      imageUrl:
        'https://cdn.marvel.com/u/prod/marvel/i/mg/c/e0/64ecad4f73f48/portrait_uncanny.jpg',
      type: 'Aligator Loki',
      title: 'Wong Quinn',
    
    },
    {
      imageUrl: 'https://cdn.marvel.com/u/prod/marvel/i/mg/b/70/64ecad00b036d/portrait_uncanny.jpg',
      type: 'Werewolf by Night #1',
      title: 'Landy Galan',
          },
    {
      imageUrl: 'https://cdn.marvel.com/u/prod/marvel/i/mg/f/20/64ecad1a7c09e/portrait_uncanny.jpg',
      type: 'Spine Tingling Spiderman',
      title: 'Ahmed Ferraya',

    },
    {
      imageUrl: 'https://cdn.marvel.com/u/prod/marvel/i/mg/c/10/64ecad1a77b52/portrait_uncanny.jpg',
      type: 'Obi Wan Kenobi',
      title: 'Houser',
      
    },
    {
      imageUrl: 'https://cdn.marvel.com/u/prod/marvel/i/mg/9/f0/64ecad3d86396/portrait_uncanny.jpg',
      type: 'Astionishing Iceman',
      title: 'Orlando',
     
    },
    {
        imageUrl: 'https://cdn.marvel.com/u/prod/marvel/i/mg/b/a0/64ecad36c0d11/portrait_uncanny.jpg',
        type: 'Death of Venomverse',
        title: 'Orlando',
       
      },
  ]

  

  return (
    <div className="w-full">
      <div className="flex flex-col md:grid">
        <div className="flex flex-col md:grid md:grid-cols-3 h-full gap-2 flex-wrap mx-2 md:mx-0">
          {galleryTab.map((x, index) => {
            return (
              <div key={index} className="md:h-[30vw] h-screen relative ">
                <div className="group h-full gap-3">
                  <div
                    className="bg-cover bg-center h-full w-full bg-no-repeat object-fill"
                    style={{
                      backgroundImage: `url("${x.imageUrl}")`,
                      height:'56.4vh',
                      width:'20rem'
                    }}
                  >
                  </div>
                 
                
                  <div className="bg-black opacity-0 group-hover:opacity-75 absolute md:w-80 inset-0 flex items-center justify-center transition-all duration-300 ease-in-out"
                  >
                    </div>
        
                </div>
                
              </div>
            )
          })}
        </div>
       
      </div>
    </div>
  )
}
export default Gallery
