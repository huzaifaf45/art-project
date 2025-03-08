import React from 'react';

function ArtPage() {
  return (
    <div className="space-y-8">
      <header className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-teal-800">Art in Early Childhood Education</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Exploring creative expression through visual arts and hands-on activities
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1560421683-6856ea585c78?auto=format&fit=crop&w=800&q=80"
            alt="Children painting"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold text-teal-800 mb-4">Importance of Art</h2>
            <p className="text-gray-600">
              Art activities help develop fine motor skills, spatial awareness, and self-expression in young children. Through artistic exploration, children learn to communicate their ideas and feelings while building confidence in their creative abilities.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-teal-800 mb-4">Age-Appropriate Activities</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-teal-500 pl-4">
              <h3 className="font-semibold text-lg">0-2 Years</h3>
              <p className="text-gray-600">Sensory art experiences, finger painting, large crayon drawing</p>
            </div>
            <div className="border-l-4 border-teal-500 pl-4">
              <h3 className="font-semibold text-lg">2-3 Years</h3>
              <p className="text-gray-600">Basic shape drawing, collage making, playdough modeling</p>
            </div>
            <div className="border-l-4 border-teal-500 pl-4">
              <h3 className="font-semibold text-lg">3-5 Years</h3>
              <p className="text-gray-600">Structured painting activities, simple craft projects, color mixing experiments</p>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-teal-800 mb-4">Materials and Resources</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Basic Supplies</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Non-toxic paint</li>
              <li>Large brushes</li>
              <li>Chunky crayons</li>
              <li>Drawing paper</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Creative Materials</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Modeling clay</li>
              <li>Craft supplies</li>
              <li>Natural materials</li>
              <li>Recycled items</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Tools</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Safety scissors</li>
              <li>Rolling pins</li>
              <li>Stamps</li>
              <li>Stencils</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ArtPage;