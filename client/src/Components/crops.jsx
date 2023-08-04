

import React, { useState } from 'react';

const Crops = () => {
    const [cards, setCards] = useState([]);
  const [title, setTitle] = useState('');
  const [types, setType] = useState('');
  const [price, setPrice] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  

  const handleSubmit = (event) => {
    event.preventDefault();
    const newCard = { title, content,types,image,price };
    setCards([...cards, newCard]);
    setTitle('');
    setType('');
   setPrice('');
    setContent('');
    setImage(null);
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };
  return (
    <div className="Product" id="product">
    <div className=" py-8 flex flex-col items-center justify-center h-fit   ">
      <form onSubmit={handleSubmit} className=" max-w-lg mb-8 ">
      
            <label htmlFor="title" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Crop Name:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
       
            <label htmlFor="types" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Crop Breed:
            </label>
            <input
              types="text"
              id="types"
              name="types"
              value={types}
              onChange={(e) => setType(e.target.value)}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
          
            <label htmlFor="price" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
             Price:
            </label>
            <input
              types="text"
              id="price"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
     
            <label htmlFor="content" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
             Contect:
            </label>
            <input
            type="text"
              id="content"
              name="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
       
            <label htmlFor="image" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
            {image && (
              <img src={URL.createObjectURL(image)} alt="Preview" className=" w-36 h-36 object-contain mt-2" />
            )}
             
          <button
            type="submit"
            className="bg-blue-500 mt-4 ml-24 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Create Card
          </button>
       
      </form>

      <div className=" flex gap-10 flex-wrap max-h-10 justify-around">
        {cards.map((card, index) => (
            <div className=" justify-items-center flex-2 ">
          <div key={index} class=" mb-6 block max-w-sm p-6 bg-[#f2f2f2] border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">

            <h2 className="text-lg font-bold mb-2 text-gray-700"> {card.title}</h2>
            
              <h2 className="text-lg font-bold mb-2 text-gray-700">  {card.types}</h2>
              <h2 className="text-lg font-bold mb-2 text-gray-700"> {card.price}</h2>
            <p className="text-gray-700 text-lg font-bold mb-2">{card.content}</p>
            {card.image && (
        <img src={URL.createObjectURL(card.image)} alt="Card" className=" h-48 w-64 object-cover mt-4" />
      )}
       <button
            type="submit"
            className="btn btn-primary mt-4 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Buy Crop
          </button>
          </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
 
}

export default Crops
