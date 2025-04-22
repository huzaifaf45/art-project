import Video1 from "../assets/video1.mp4";
import Image1 from "../assets/img1.jpeg";
import Image2 from "../assets/img2.jpeg";
import Image3 from "../assets/img3.jpeg";

function EngineeringPage() {
  return (
    <div className="space-y-12 pb-12">
      <header className="text-center space-y-4 py-8">
        <h1 className="text-4xl font-bold text-teal-800">Engineering</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Engineering in early childhood fosters creativity by encouraging
          children to design, build, and solve problems in innovative ways.
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
              Engineering in early childhood fosters creativity by encouraging
              the children to design, build, and solve the problem using
              materials in different innovative ways based upon their thinking.
              Through construction play, and design challenges based upon
              imagination, children explore different ideas such as spatial
              reasoning, planning, and cause-and-effect. Engineering supports
              creativity and critical thinking as children test their ideas,
              revise their work, and develop new solutions through trial and error
              based upon their thinking and approach. Whether building towers,
              creating ramps, or designing bridges, young learners engage in critical
              thinking and innovate new ideas to solve the problems.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={Image1}
              alt="Children engaged in engineering activities"
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
              Papert's constructionism theory highlights how learning occurs
              most powerfully when children build and create tangible objects,
              making it foundational to engineering in early childhood.
              Vygotsky's sociocultural theory emphasizes collaboration and
              scaffolding, which supports teamwork in design and problem-solving
              activities. The Reggio Emilia approach encourages using loose
              parts and open-ended materials, promoting children's ability to
              represent ideas through construction and invention. These theories
              validate the idea that engineering supports creativity through
              exploration and experimentation.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={Image2}
              alt="Children collaborating on engineering projects"
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
              To promote engineering creativity, educators can use blocks,
              cardboard, tubes, recycled materials, ramps, LEGO, K'NEX, tape,
              straws, and connectors. Loose parts—like bottle caps, wooden
              spools, and string—encourage open-ended exploration and
              innovation. Digital tools like Tinkercad, Osmo Coding Jam, or
              basic robotics kits introduce early design and coding concepts.
              Interactive whiteboards can support planning and sketching ideas.
              Apps like Stop Motion Studio allow children to document and share
              their building processes.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={Image3}
              alt="Engineering resources and materials"
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
                <h3 className="font-semibold text-lg">Babies (0-2 years)</h3>
                <p className="text-gray-600">
                  "Stack and Knock" – Infants stack soft blocks or cups and explore
                  cause and effect by knocking them down, developing coordination
                  and early design awareness.
                </p>
              </div>
              <div className="border-l-4 border-teal-500 pl-4">
                <h3 className="font-semibold text-lg">Toddlers (2-3 years)</h3>
                <p className="text-gray-600">
                  "Tunnel Builders" – Toddlers use boxes and tubes to build tunnels
                  for toy cars, learning about structure, size, and space.
                </p>
              </div>
              <div className="border-l-4 border-teal-500 pl-4">
                <h3 className="font-semibold text-lg">Preschoolers (3-5 years)</h3>
                <p className="text-gray-600">
                  "Bridge Challenge" – Children design and build a bridge using
                  straws, paper, and tape to hold a toy animal, exploring balance
                  and weight.
                </p>
              </div>
              <div className="border-l-4 border-teal-500 pl-4">
                <h3 className="font-semibold text-lg">Older Kids (6-8 years)</h3>
                <p className="text-gray-600">
                  "STEM City" – Children plan and construct a mini-city using
                  recycled materials, integrating ideas of function, sustainability,
                  and urban design.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-teal-800 mb-4 mt-8">
              Fun Learning Ideas
            </h2>
            <div className="space-y-4">
              <div className="border-l-4 border-teal-500 pl-4">
                <h3 className="font-semibold text-lg">Babies: Rolling Ramp Fun</h3>
                <p className="text-gray-600">
                  Infants explore inclined surfaces with balls or cars. They crawl
                  after the objects and observe how the incline affects speed and
                  movement—early engineering and cause-effect learning.
                </p>
              </div>
              <div className="border-l-4 border-teal-500 pl-4">
                <h3 className="font-semibold text-lg">Toddlers: Box Builders</h3>
                <p className="text-gray-600">
                  Toddlers use cardboard boxes of different sizes to create
                  structures—houses, vehicles, or towers—encouraging planning,
                  stacking, and creative use of space.
                </p>
              </div>
              <div className="border-l-4 border-teal-500 pl-4">
                <h3 className="font-semibold text-lg">
                  Preschoolers: Egg Drop Challenge
                </h3>
                <p className="text-gray-600">
                  Children design and build a contraption using soft and recycled
                  materials to protect an egg from breaking when dropped—engaging
                  in creative thinking, testing, and problem-solving.
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src={Image1}
              alt="Engineering activities in action"
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
              Engineering provokes my inner problem-solving and creative abilities,
              which enhances my ability and helps me to design engaging, hands-on
              learning and innovative experiences for children. I enjoy crafting
              challenges that pushes the thinking boundaries of the children and
              make them think critically, work collaboratively, and revise their ideas.
            </p>
            <p className="text-gray-600 leading-relaxed">
              My creative strengths lie in molding the everyday materials and
              experiences into opportunities for construction, exploration, and
              innovation. I encourage children to take risks through their learning
              process, experiment with different materials, and see "failure" as
              part of the learning process.
            </p>
            <p className="text-gray-600 leading-relaxed">
              My mindset allows me to adapt to activities based on children's
              interests, using their ideas as the basis for further creativity.
              I also integrate storytelling with engineering by asking children
              to design solutions for imaginary scenarios, linking creativity
              and construction.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={Image2}
              alt="Teacher guiding engineering activity"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Featured Videos Section */}
      <section className="bg-white rounded-lg shadow-lg p-8 space-y-8">
        <h2 className="text-2xl font-bold text-teal-800 mb-6 text-center">
          Featured Engineering Tutorials
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
              Basic Engineering Concepts for Early Learners
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
              Building and Construction Activities
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
              Problem-Solving Through Engineering
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EngineeringPage;
