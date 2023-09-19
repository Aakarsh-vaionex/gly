const Card = ({ title, description, image }) => {
    return (
        
        
    <div className="bg-white rounded-lg shadow-md p-4 overflow-hidden ">
     <h2 className="text-l font-semibold">{title}</h2>
        <img src={image} alt={title} className="object-fill w-full h-80 object-cover mb-4" />
        
        <p className="text-gray-600 bottom-0">{description}</p>
      </div>
       
 
  

        

    )
  }
  
  export default Card