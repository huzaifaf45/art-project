import { Brain, Lightbulb, Palette } from 'lucide-react';

function HomePage() {
  return (
    <div className="space-y-8 min-h-[75vh]">
      <header className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-teal-800">Facilitating Creativity in the Curriculum</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Empowering early childhood teachers to nurture creativity through art, drama, and integrated learning approaches.
        </p>
      </header>

      <div className="grid md:grid-cols-3 gap-8 mt-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center space-x-3 mb-4">
            <Lightbulb className="text-teal-600" size={24} />
            <h2 className="text-xl font-semibold">Creative Development</h2>
          </div>
          <p className="text-gray-600">
            Understanding how creativity shapes young minds and supports holistic development in early childhood education.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center space-x-3 mb-4">
            <Brain className="text-teal-600" size={24} />
            <h2 className="text-xl font-semibold">Learning Approach</h2>
          </div>
          <p className="text-gray-600">
            Implementing evidence-based strategies to foster creativity across different age groups and learning areas.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center space-x-3 mb-4">
            <Palette className="text-teal-600" size={24} />
            <h2 className="text-xl font-semibold">Curriculum Integration</h2>
          </div>
          <p className="text-gray-600">
            Seamlessly incorporating creative activities into daily teaching practices and curriculum planning.
          </p>
        </div>
      </div>

      <section className="mt-12 bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-teal-800 mb-4">Why Creativity Matters</h2>
        <div className="prose max-w-none">
          <p className="text-gray-600">
            Creativity is fundamental to early childhood development, fostering critical thinking, problem-solving abilities, and emotional expression. Through purposeful integration of creative activities, we can create engaging learning environments that support children's natural curiosity and imagination.
          </p>
        </div>
      </section>
    </div>
  );
}

export default HomePage;