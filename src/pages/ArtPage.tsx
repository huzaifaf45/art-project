import ArtVideo from "../assets/video1.mp4";
import Image1 from "../assets/img1.jpeg";
import Image2 from "../assets/img2.jpeg";

function ArtPage() {
  return (
    <div className="space-y-12 pb-12">
      <header className="text-center space-y-4 py-8">
        <h1 className="text-4xl font-bold text-teal-800">
          ART
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Nurturing creativity, self-expression, and cognitive development through art
        </p>
      </header>

      {/* Section 1: Importance of Art - Image Right, Text Left */}
      <section className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2 p-8 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-teal-800 mb-4">
              Importance of Art in Creativity
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Art provides opportunities for self-expression, sensory analysis, and problem-solving which helps in nurturing creativity of child through early childhood. By the help of sketching, painting, carving, and mixed-media projects, skills like fine motor activities, positional awareness, and imagination are developed (Dinham & Chalk, 2023). By engaging in the work of art we learn throughout the processes of experimentation with different materials and objects not by the results which encourages innovation and risk taking. Engaging in the activities of art develops the communication of the children, helping them express their thoughts and feelings through their work. Integration of curriculum with art develops the creative thinking of the child.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={Image1}
              alt="Children exploring art materials"
              className="w-full h-[450px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Section 2: Creativity Theories - Image Left, Text Right */}
      <section className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex flex-row-reverse">
          <div className="md:w-1/2 p-8 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-teal-800 mb-4">
              Creativity Theories in Art
            </h2>
            <p className="text-gray-600 leading-relaxed">
              The Reggio Emilia approach emphasizes art as one of the "hundred languages of children," encouraging self-expression through art and carving (Edwards, Gandini, & Forman, 2012). Lowenfeld's (1947) stages of artistic development emphasizes upon the development of children from scratch to representational drawing, underscoring that creative approach in art work through the early developing years is very important. Vygotsky's (1978) theory of social constructivism hints the importance of art in ethnic and communal activity, suggesting that interaction with other people enhances the skills of creativity in children. These theories emphasizes that children should have experience of dealing with open ended scenarios allowing them to explore and learn about different materials and techniques.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80"
              alt="Children collaborating on art"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Section 3: Resources - Image Right, Text Left */}
      <section className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2 p-8 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-teal-800 mb-4">
              Resources
            </h2>
            <p className="text-gray-600 leading-relaxed">
              You can engage children into a number of art activities to promote development and creativity. This can be done by using both digital tools and hand crafting materials.
              The hand crafting material includes paints, brushes, crayons, clay and items like paper, leaves and canvas etc.
              In today's Era digital art is more into fashion. Digital tools include apps like Paint 3D, storytelling apps like puppet pals and different painting or drawing games.
              Environment Setup: you can arrange a painting competition in which you supply kids with colors marks glue paper or canvas to express their thoughts freely on canvas with paints.
              Providing diverse resources lets children experiment with different materials and techniques, promoting both independent and group creativity (Fleet, De Gioia, & Patterson, 2017)
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1551966775-a4ddc8df052b?auto=format&fit=crop&w=800&q=80"
              alt="Child creating art"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Section 4: Learning Activities - Image Left, Text Right */}
      <section className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex flex-row-reverse">
          <div className="md:w-1/2 p-8 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-teal-800 mb-4">
              Learning activities for different ages
            </h2>
            <div className="space-y-4">
              <div className="border-l-4 border-teal-500 pl-4">
                <h3 className="font-semibold text-lg">Babies (0-2 years)</h3>
                <p className="text-gray-600">
                  Use art activities like finger painting and play dough for sensory exploration.
                </p>
              </div>
              <div className="border-l-4 border-teal-500 pl-4">
                <h3 className="font-semibold text-lg">Toddlers (2-3 years)</h3>
                <p className="text-gray-600">
                  Use ice cube painting hand and foot print painting in these children.
                </p>
              </div>
              <div className="border-l-4 border-teal-500 pl-4">
                <h3 className="font-semibold text-lg">Preschoolers (3-5 years)</h3>
                <p className="text-gray-600">
                  Use art activities that focus on creativity and imaginative thinking like crafting in which they paint on eggs for Easter etc.
                </p>
              </div>
              <div className="border-l-4 border-teal-500 pl-4">
                <h3 className="font-semibold text-lg">Older Kids (6-8 years)</h3>
                <p className="text-gray-600">
                  Using art activities that focus on self-expression like handmade greeting cards.
                </p>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-teal-800 mb-4 mt-8">
              Fun learning ideas
            </h2>
            <div className="space-y-4">
              <div className="border-l-4 border-teal-500 pl-4">
                <h3 className="font-semibold text-lg">Babies</h3>
                <p className="text-gray-600">
                  Yogurt-based painting: Divide yogurt into many portions and add different food colors to this. Kids will use fingers or brushes to paint this on cookies or paper. This will encourage sensory exploration.
                </p>
              </div>
              <div className="border-l-4 border-teal-500 pl-4">
                <h3 className="font-semibold text-lg">Toddlers</h3>
                <p className="text-gray-600">
                  Ice cube painting: You need ice cubes with different colors in them. Children use these colored ice cubes to paint on paper or canvas. The colors mix and make different textures. It is important for sensory exploration, temperature awareness and creativity when a new color form on color mixing.
                </p>
              </div>
              <div className="border-l-4 border-teal-500 pl-4">
                <h3 className="font-semibold text-lg">Preschoolers</h3>
                <p className="text-gray-600">
                  Handmade greeting cards: Kids use card or colorful papers and cut them into their favorite shapes. They will draw different shapes or flowers on it. They will write their wishes over it with colored pencils and will use stickers to make it more fun. This will encourage imaginative thinking, creativity and fine motor skills. These activities are easy, fun, and help kids learn important skills while having a great time.
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80"
              alt="Art supplies and materials"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Section 5: Critical Reflection - Image Right, Text Left */}
      <section className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2 p-8 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-teal-800 mb-4">
              Critical Reflection and Evaluation
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              My will power in creativity lies in resilience and nurturing ideas of open-ended exploration. They are the key parts of integrating art into early childhood education. For the creative growth and to develop curiosity among the children I believe that children should be given experiences of art to let them make mistakes and explore new ideas.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Art can act as an influential tool for integrative learning among different curricular areas. For example, Painting can act as a tool to express the emotional learning of the children social environment, create patterns to express your thoughts in mathematics, or they can present an idea for a story through their engagement in art work. Technology also plays an important role; with the help of digital tools the creative approach of children can be maximized by allowing them to explore different animations and digital projects such as painting or posters.
            </p>
            <p className="text-gray-600 leading-relaxed">
              According to me the educator's approach should be conservative during the periods of art work allowing the children to have a fearless attitude and freedom in their approach meanwhile also having the guidance of an adult. Structured and pre-set art activities play a major role in development but child-led open-ended exploration, where risk taking is encouraged helps in building a creative and dynamic approach of a child which help them in their problem solving and also encourages curiosity and children feel empowered.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={Image2}
              alt="Teacher guiding art activity"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Featured Video Section - At the end */}
      <section className="bg-white rounded-lg shadow-lg p-8 w-full mx-auto">
        <h2 className="text-2xl font-bold text-teal-800 mb-6 text-center">
          Featured Art Tutorial
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="aspect-w-16 aspect-h-9">
            <video
              className="rounded-lg w-full"
              controls
              preload="metadata"
            >
              <source src={ArtVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="mt-4 text-gray-600 italic text-center">
            Explore practical techniques for implementing engaging art activities in early childhood education
          </p>
        </div>
      </section>
    </div>
  );
}

export default ArtPage;