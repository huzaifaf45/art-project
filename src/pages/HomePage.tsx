import { Link } from 'react-router-dom';
import HeroImage from '../assets/img1.jpeg';

function HomePage() {
  return (
    <div className="space-y-12 pb-12">
      {/* Hero Section */}
      <section className="relative">
        <div className="h-96 overflow-hidden">
          <img
            src={HeroImage}
            alt="Children engaged in creative activities"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/70 to-teal-700/30 flex items-center">
            <div className="container mx-auto px-6">
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight max-w-2xl">
                Creativity in the Early Childhood Curriculum
              </h1>
              <p className="text-xl text-white mt-4 max-w-2xl">
                Exploring the vital role of creativity in early childhood education
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="container mx-auto px-6">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-teal-800 mb-6">Introduction</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              Creativity is a foundational and most crucial component on which the early childhood education is based, playing a vital role in analytical, communal, and spiritual development. Creativity is not limited to a single field but extends across the curriculums helping in integrating language, mathematics, science, and technology. Creativity develops skills like critical thinking, problem solving, and thinking beyond imagination. In short creativity lays the foundation for innovation. The best way to help a student excel in his creative learning in early childhood is letting him explore new ideas, nurturing his mind with open ended experiences, to let him perform experiments taking risks developing his distinct viewpoint.
            </p>
            <p>
              Creativity in early childhood education means to let a child engage in different experiments to build distinct ideas and experiments. According to Dinham & Chalk (2023), in the Reggio Emilia approaches the creativity of young children in many ways, referring them as "hundred languages of children". The embodiment of these expressions is observed in the creativity of children as art, storytelling, drama and puppetry, play, problem solving and much more. Creativity in the early childhood curriculum nurtures peculiarity, creative power, and resilience, empowering them to explore the world with their own creative approach.
            </p>
          </div>
        </div>
      </section>

      {/* Theoretical Foundations Section */}
      <section className="container mx-auto px-6">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-teal-800 mb-6">Theoretical Foundations</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              The initial step for creative learning of a child is based upon his educators. They can play a crucial role by enhancing their creative growth by encouraging exploration and by letting them involve in experiences of problem solving and open-ended scenarios. Vygotsky's (1978) social constructivist theory emphasizes that social interactions with peers and adults in collaborative and imaginative play, helps to flourish the creative approach of children. Likewise, Gardner's (1983) theory of multiple intelligences fosters the ways children express creativity, through arts, music, drama and puppetry, or storytelling. Acknowledging and nurturing these forms of creativity is crucial in early childhood education.
            </p>
            <p>
              In early childhood learning technology also plays an important role in nurturing creativity. Digital tools should be used to assist the children in their problems. Technology should serve as a mean to engage children in their creative learning rather than a substitute for their problems. Combining traditional and digital methods fosters the critical and creative growth of a child helping them express their viewpoints.
            </p>
          </div>
        </div>
      </section>

      {/* Website Overview Section */}
      <section className="container mx-auto px-6">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-teal-800 mb-6">Website Overview</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              This website highlights the importance of creativity in integrated curriculum exploring its importance in art, drama and puppetry, movement, music, language and literacy, mathematics and numeracy, humanities and social sciences, technologies, science, and integrated curriculum (STEM, STEAM, STREAM, and STEMIE). Each part of the website will provide information about specific area and the benefit of integrating creativity with it.
            </p>
            <p>
              Understanding the importance of creativity in early childhood education is as important as implementing strategies to nurture it across different areas by providing a creative learning environment for children to engage them in different dynamic ideas. Creativity has a major role to play in children's analytical, psychic, communal and spiritual development. On the other hand, it also critical thinking of the children that makes them innovative and prepares them to face the hardship of the world.
            </p>
          </div>
        </div>
      </section>

      {/* Explore Topics Section */}
      <section className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-teal-800 mb-6 text-center">Explore Topics</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link to="/art" className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="h-48 bg-teal-100 flex items-center justify-center">
              <span className="text-5xl">🎨</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-teal-800 mb-2">Art</h3>
              <p className="text-gray-600">Explore how art activities foster creativity and expression in early childhood.</p>
            </div>
          </Link>
          
          <Link to="/drama" className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="h-48 bg-teal-100 flex items-center justify-center">
              <span className="text-5xl">🎭</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-teal-800 mb-2">Drama and Puppetry</h3>
              <p className="text-gray-600">Discover how dramatic play and puppetry enhance imagination and social skills.</p>
            </div>
          </Link>
          
          <Link to="/references" className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="h-48 bg-teal-100 flex items-center justify-center">
              <span className="text-5xl">📚</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-teal-800 mb-2">References</h3>
              <p className="text-gray-600">Access academic sources that inform our approach to creativity.</p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default HomePage;