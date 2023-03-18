

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
    <div className="Product mt-[500px] " id="product">
    <div className=" ml-3 mr-3 flex flex-col items-center justify-center h-screen">
      <form onSubmit={handleSubmit} className="w-full max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
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
          </div>
        </div>

      <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
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
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
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
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label htmlFor="content" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
             Contect Details:
            </label>
            <textarea
              id="content"
              name="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
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
              <img src={URL.createObjectURL(image)} alt="Preview" className="w-full h-auto object-contain mt-2" />
            )}
          </div>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Create Card
          </button>
        </div>
      </form>

      <div className="mt-8 w-80 space-y-4">
        {cards.map((card, index) => (
            <div className=" justify-items-center">
          <div key={index} class=" block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

            <h2 className="text-lg font-bold mb-2 text-white">Crop Name: {card.title}</h2>
            
              <h2 className="text-lg font-bold mb-2 text-white"> Crop Breed: {card.types}</h2>
              <h2 className="text-lg font-bold mb-2 text-white">Price: {card.price}</h2>
            <p className="text-white text-lg font-bold mb-2">Details: {card.content}</p>
            {card.image && (
        <img src={URL.createObjectURL(card.image)} alt="Card" className="w-full h-auto object-contain mt-4" />
      )}
          </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Crops
