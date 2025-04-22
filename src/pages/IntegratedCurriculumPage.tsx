import Video1 from "../assets/video1.mp4";
import Image1 from "../assets/img1.jpeg";
import Image2 from "../assets/img2.jpeg";
import Image3 from "../assets/img3.jpeg";

function IntegratedCurriculumPage() {
  return (
    <div className="space-y-12 pb-12">
      <header className="text-center space-y-4 py-8">
        <h1 className="text-4xl font-bold text-teal-800">
          Integrated Curriculum
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          STEM, STEAM, STREAM, and STEMIE: Comprehensive approaches to creative
          learning and problem-solving
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
              An integrated curriculum—such as STEM (Science, Technology,
              Engineering, Mathematics), STEAM (adding Art), STREAM (adding
              Reading), and STEMIE (including Inclusion and Equity)—encourages
              comprehensive, creative learning by integrating subject areas into
              rich, meaningful experiences. These approaches encourage hunger
              for learning, critical thinking, and problem-solving, allowing
              young children to explore real-world concepts through practical
              investigation, collaboration, and innovation. By integrating
              disciplines, children see the relations between ideas and are
              empowered to think flexibly and creatively. Integrated learning
              promotes exploration, imagination, and experimentation, making it
              ideal for nurturing 21st-century skills in early childhood,
              including communication, cooperation, creativity, and strength.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={Image1}
              alt="Children engaged in integrated learning"
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
              The integrated curriculum aligns with Vygotsky's theory of social
              constructivism, which emphasizes learning through interaction and
              scaffolding in meaningful contexts. Gardner's Multiple
              Intelligences theory supports STEAM and STREAM by valuing diverse
              ways children express knowledge—logically, artistically,
              linguistically, and spatially. The Reggio Emilia approach
              reinforces this by encouraging child-led inquiry and documentation
              across disciplines. Integrated learning also reflects Ken
              Robinson's view that creativity is as important as literacy and
              must be fostered across the curriculum. These viewpoints support
              the idea that combining science, technology, art, and more allows
              for deeper, creative arrangement and honors each child's unique
              ways of thinking and expressing.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={Image2}
              alt="Integrated curriculum in action"
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
              Resources for integrated curriculum include loose parts (e.g.,
              tubes, ramps, blocks), art materials (e.g., paint, clay), digital
              microscopes, coding toys (e.g., Bee-Bots, Cobette), and tools like
              magnifying glasses, building kits, and recycled materials. Apps
              such as Scratch Jr, Tinkercad, and story-making tools strengthen
              creativity through digital inspection. Educators can use
              stop-motion apps for narrating stories, Google Earth for
              geographic investigation, or interactive whiteboards to combine
              disciplines. Makerspaces with accessible tools nurture innovation.
              These materials allow children to design, build, test, and
              reflect—integrating literacy, numeracy, science, and creativity
              into meaningful, inquiry-based learning experiences.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={Image3}
              alt="Integrated curriculum resources"
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
                  "Water and Light Play" – Babies explore light reflected in
                  colored water tubs, promoting sensory learning and
                  observation.
                </p>
              </div>
              <div className="border-l-4 border-teal-500 pl-4">
                <h3 className="font-semibold text-lg">2-3 years</h3>
                <p className="text-gray-600">
                  "Build a Bridge" – Toddlers use blocks and recycled materials
                  to create bridges for toy animals, fostering engineering,
                  balance, and problem-solving.
                </p>
              </div>
              <div className="border-l-4 border-teal-500 pl-4">
                <h3 className="font-semibold text-lg">3-5 years</h3>
                <p className="text-gray-600">
                  "Magnetic Art" – Children use magnets and metal pieces to
                  create moving art pieces, exploring science and creativity in
                  one experience.
                </p>
              </div>
              <div className="border-l-4 border-teal-500 pl-4">
                <h3 className="font-semibold text-lg">6-8 years</h3>
                <p className="text-gray-600">
                  "Invention Station" – Children brainstorm a community problem,
                  then design, test, and present a prototype solution using
                  digital tools and materials.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-teal-800 mb-4 mt-8">
              Original Creative Learning Opportunities
            </h2>
            <div className="space-y-4">
              <div className="border-l-4 border-teal-500 pl-4">
                <h3 className="font-semibold text-lg">
                  Sound and Motion Discovery
                </h3>
                <p className="text-gray-600">
                  Infants explore instruments (shakers, bells) and watch how
                  sound creates movement in loose materials like rice or fabric,
                  integrating science and sensory play.
                </p>
              </div>
              <div className="border-l-4 border-teal-500 pl-4">
                <h3 className="font-semibold text-lg">Ramp Races</h3>
                <p className="text-gray-600">
                  Toddlers roll different objects down ramps and compare speed,
                  texture, and shape, encouraging inquiry, math, and basic
                  engineering.
                </p>
              </div>
              <div className="border-l-4 border-teal-500 pl-4">
                <h3 className="font-semibold text-lg">Design Your Bug</h3>
                <p className="text-gray-600">
                  Children use natural materials, drawing, and recycled items to
                  design an insect, combining science, art, and engineering with
                  storytelling and documentation.
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src={Image1}
              alt="Integrated learning activities"
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
              My creative strengths lie in integrating learning points across
              subjects, which strengthen my teaching of integrated curriculum
              approaches like STEM and STEAM. I naturally think in
              interdisciplinary ways, which helps me plan engaging learning that
              combines science, design, literacy, and art.
            </p>
            <p className="text-gray-600 leading-relaxed">
              I see children as potential researchers and inventors, and I love
              to support them in solving problems through exploration and
              hands-on experiences. My creative thinking makes me use a wide
              range of materials and digital tools, encouraging children to
              visualize, design, and reflect on their ideas.
            </p>
            <p className="text-gray-600 leading-relaxed">
              I value hunger for learning and investigation, and I'm committed
              to inclusion and equity—essential aspects of STEMIE. I support all
              children, regardless of their abilities, by allowing them to
              experience open-ended, adaptable experiences that nurture
              confidence and creativity.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={Image2}
              alt="Teacher facilitating integrated learning"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Featured Videos Section */}
      <section className="bg-white rounded-lg shadow-lg p-8 space-y-8">
        <h2 className="text-2xl font-bold text-teal-800 mb-6 text-center">
          Featured Integrated Learning Tutorials
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
              STEM/STEAM Activities for Early Learning
            </p>
          </div>
          <div className="aspect-w-16 aspect-h-9">
            <video
              className="rounded-lg w-full"
              controls
              preload="metadata"
              src={Video1}
            />
            <p className="mt-4 text-gray-600 italic text-center">
              Cross-Disciplinary Projects
            </p>
          </div>
          <div className="aspect-w-16 aspect-h-9">
            <video
              className="rounded-lg w-full"
              controls
              preload="metadata"
              src={Video1}
            />
            <p className="mt-4 text-gray-600 italic text-center">
              Inclusive STEM Education
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default IntegratedCurriculumPage;
