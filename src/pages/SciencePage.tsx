import Video1 from "../assets/science1.mp4";
import Video2 from "../assets/science2.mp4";
import Video3 from "../assets/science3.mp4";
import Image1 from "../assets/img1.jpeg";
import Image2 from "../assets/img2.jpeg";
import Image3 from "../assets/img3.jpeg";

function SciencePage() {
  return (
    <div className="space-y-12 pb-12">
      <header className="text-center space-y-4 py-8">
        <h1 className="text-4xl font-bold text-teal-800">Science</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Science in early childhood education nurtures curiosity, inquiry, and
          creativity through exploration, observation, and experimentation.
        </p>
      </header>

      {/* Section 1: Introduction */}
      <section className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2 p-8 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-teal-800 mb-4">
              Introduction
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Science in early childhood education nurtures peculiarity, query,
              and creativity by emphasizing upon the importance of these for
              children to explore, observe, question, and experiment. Through
              experimental studies, play-based investigations and open-ended
              scenarios, young learners try to engage with the world around them
              in meaningful, creative and imaginative ways. Science promotes the
              ideas of creative and critical thinking as children hypothesize,
              experiment ideas, and discover different patterns or solutions for
              the problems they encounter.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={Image1}
              alt="Children engaged in scientific exploration"
              className="w-full h-[450px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Section 2: Creativity Theories */}
      <section className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex flex-row-reverse">
          <div className="md:w-1/2 p-8 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-teal-800 mb-4">
              Creativity Theories and Perspectives
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Jean Piaget's constructivist theory supports that learning science
              through active exploration is the best method, where children
              construct knowledge through exploration and interaction with their
              environment. Vygotsky's emphasis on social learning highlights how
              scientific inquiry and creative problem-solving are nourished with
              the help of collaboration and guided discovery. The Reggio Emilia
              approach views children as capable researchers who can inspect
              their environment with admiration and creativity.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={Image2}
              alt="Scientific inquiry in action"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Section 3: Resources */}
      <section className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2 p-8 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-teal-800 mb-4">
              Resources, Materials, and Digital Technologies
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Educators can provide magnifying glasses, mirrors, tweezers,
              measuring tools, magnets, light tables, and natural materials like
              leaves, rocks, or water for exploration. Sensory trays and science
              kits invite hands-on exploration. Digital microscopes, weather
              apps, time-lapse videos, and augmented reality tools like "Merge
              Cube" or "Star Walk" encourages engagement with scientific
              concepts. Interactive whiteboards and science storybooks introduce
              different ideas through multimodal learning.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={Image3}
              alt="Science resources and materials"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Section 4: Learning Activities */}
      <section className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex flex-row-reverse">
          <div className="md:w-1/2 p-8 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-teal-800 mb-4">
              Learning Activities for Different Ages
            </h2>
            <div className="space-y-4">
              <div className="border-l-4 border-teal-500 pl-4">
                <h3 className="font-semibold text-lg">0-2 years</h3>
                <p className="text-gray-600">
                  "Water Wonders" – Infants explore water using cups, sponges,
                  and containers, discovering concepts like volume, cause and
                  effect, and sensory properties.
                </p>
              </div>
              <div className="border-l-4 border-teal-500 pl-4">
                <h3 className="font-semibold text-lg">2-3 years</h3>
                <p className="text-gray-600">
                  "Light and Shadow Play" – Toddlers use torches and translucent
                  objects to create shadows and reflections, stimulating
                  curiosity about light and movement.
                </p>
              </div>
              <div className="border-l-4 border-teal-500 pl-4">
                <h3 className="font-semibold text-lg">3-5 years</h3>
                <p className="text-gray-600">
                  "Mini Scientists Lab" – Children mix baking soda and vinegar
                  with food coloring to observe chemical reactions, ask
                  questions, and make predictions.
                </p>
              </div>
              <div className="border-l-4 border-teal-500 pl-4">
                <h3 className="font-semibold text-lg">6-8 years</h3>
                <p className="text-gray-600">
                  "Insect Investigators" – Children use magnifiers and tablets
                  to document observations of bugs in the playground, recording
                  habitats, movement, and characteristics.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-teal-800 mb-4 mt-8">
              Original Creative Learning Opportunities
            </h2>
            <div className="space-y-4">
              <div className="border-l-4 border-teal-500 pl-4">
                <h3 className="font-semibold text-lg">
                  Sensory Discovery Baskets
                </h3>
                <p className="text-gray-600">
                  Babies explore baskets filled with natural objects (pinecones,
                  feathers, stones) of varying textures, weights, and smells,
                  developing sensory awareness and early scientific thinking.
                </p>
              </div>
              <div className="border-l-4 border-teal-500 pl-4">
                <h3 className="font-semibold text-lg">Floating or Sinking?</h3>
                <p className="text-gray-600">
                  Toddlers experiment with different objects in a water tub to
                  explore buoyancy. They make guesses before testing and
                  describe what they see, engaging in early prediction.
                </p>
              </div>
              <div className="border-l-4 border-teal-500 pl-4">
                <h3 className="font-semibold text-lg">Rainbow Rain</h3>
                <p className="text-gray-600">
                  Children drop colored water onto shaving foam clouds and
                  observe how it "rains" through the foam into a jar. This
                  introduces weather concepts and cause-effect creatively.
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src={Image1}
              alt="Science activities in action"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Section 5: Critical Reflection */}
      <section className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2 p-8 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-teal-800 mb-4">
              Critical Reflection and Evaluation
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Science has always sparked my curiosity, and I try to bring that
              same energy into my teaching practice to support young children's
              creative thinking. I am naturally interested and love inquiring
              open-ended questions that challenge my exploration,
              experimentation, critical and critical thinking.
            </p>
            <p className="text-gray-600 leading-relaxed">
              This goes hand in hand with examination-based learning in science,
              where the journey is just as informative as the outcome is. I see
              creativity not only in the art, story narration or play but in
              every child's "what if" or "why" question.
            </p>
            <p className="text-gray-600 leading-relaxed">
              My ability to observe and extend children's discoveries helps them
              grow their thinking and validate their newly thought ideas. I
              often ask children to integrate storytelling, drawing, and
              hands-on experiments to make science come alive and spark their
              interest and curiosity for learning.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={Image2}
              alt="Teacher guiding science exploration"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Featured Videos Section */}
      <section className="bg-white rounded-lg shadow-lg p-8 space-y-8">
        <h2 className="text-2xl font-bold text-teal-800 mb-6 text-center">
          Featured Science Tutorials
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="aspect-w-16 aspect-h-9">
            <video
              className="rounded-lg w-full"
              controls
              preload="metadata"
              src={Video1}
            />
            <p className="mt-4 text-gray-600 italic text-center">
              Simple Science Experiments for Young Children
            </p>
          </div>
          <div className="aspect-w-16 aspect-h-9">
            <video
              className="rounded-lg w-full"
              controls
              preload="metadata"
              src={Video2}
            />
            <p className="mt-4 text-gray-600 italic text-center">
              Nature Exploration and Discovery
            </p>
          </div>
          <div className="aspect-w-16 aspect-h-9">
            <video
              className="rounded-lg w-full"
              controls
              preload="metadata"
              src={Video3}
            />
            <p className="mt-4 text-gray-600 italic text-center">
              STEM Activities for Early Learning
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SciencePage;
