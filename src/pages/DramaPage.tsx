import React from 'react';

function DramaPage() {
  return (
    <div className="space-y-8">
      <header className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-teal-800">Drama and Creative Expression</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Fostering imagination and social skills through dramatic play
        </p>
      </header>

      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-teal-800 mb-6">Featured Video Tutorial</h2>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            className="w-full h-[400px] rounded-lg"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Drama Activities for Early Childhood"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <p className="mt-4 text-gray-600 italic">
          Watch this comprehensive guide on implementing drama activities in early childhood education
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-teal-800 mb-4">Benefits of Drama</h2>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start">
              <span className="h-6 w-6 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center mr-2">1</span>
              <span>Develops communication and language skills</span>
            </li>
            <li className="flex items-start">
              <span className="h-6 w-6 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center mr-2">2</span>
              <span>Enhances social and emotional understanding</span>
            </li>
            <li className="flex items-start">
              <span className="h-6 w-6 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center mr-2">3</span>
              <span>Encourages creative problem-solving</span>
            </li>
            <li className="flex items-start">
              <span className="h-6 w-6 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center mr-2">4</span>
              <span>Builds confidence and self-expression</span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-teal-800 mb-4">Age-Appropriate Activities</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-teal-500 pl-4">
              <h3 className="font-semibold text-lg">0-2 Years</h3>
              <p className="text-gray-600">Simple puppet play, peek-a-boo games, mirror activities</p>
            </div>
            <div className="border-l-4 border-teal-500 pl-4">
              <h3 className="font-semibold text-lg">2-3 Years</h3>
              <p className="text-gray-600">Role-play with props, simple storytelling, movement games</p>
            </div>
            <div className="border-l-4 border-teal-500 pl-4">
              <h3 className="font-semibold text-lg">3-5 Years</h3>
              <p className="text-gray-600">Group dramatic play, story reenactment, puppet shows</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DramaPage;