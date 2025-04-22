import Video1 from "../assets/technology1.mp4";
import Video2 from "../assets/technology2.mp4";
import Video3 from "../assets/technology3.mp4";
import Image1 from "../assets/img1.jpeg";
import Image2 from "../assets/img2.jpeg";
import Image3 from "../assets/img3.jpeg";

function TechnologyPage() {
  return (
    <div className="space-y-12 pb-12">
      <header className="text-center space-y-4 py-8">
        <h1 className="text-4xl font-bold text-teal-800">Technology</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Supporting creativity and critical thinking through technological
          tools and innovative exploration in early childhood education.
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
              Technologies in early childhood education support creativity and
              critical thinking by providing tools for children to design,
              express, and explore their ideas in innovative ways. Technology is
              not limited to digital devices—it also includes everyday tools and
              materials that help children operate, construct, and show their
              thinking in various ways. From coding toys to drawing apps to
              simple tools like scissors and pulleys, technology helps children
              in problem-solving and critical expression. When used in a
              meaningful manner, technologies promote collaborative work,
              exploration, and analytical thinking. They empower children to be
              creators not just consumers of knowledge, empowering their
              capabilities to engage with the world creatively and confidently
              in a rapidly changing digital society.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={Image1}
              alt="Children using technology tools"
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
              Seymour Papert's constructionism supports creative learning
              through digital technologies, encouraging children to build
              knowledge by making and designing with tools like coding toys or
              digital drawing. Vygotsky's sociocultural theory emphasizes guided
              learning through digital collaboration and shared exploration. The
              Reggio Emilia approach values digital tools (the "100 languages")
              for self-expression and creativity. These theories suggest that in
              order to ensure the development of creative thinking, autonomy and
              expression of their creative ideas, children should use
              technologies meaningfully. Thoughtful integration of technology
              with different curriculum areas fosters critical thinking,
              allowing children to test their ideas, experiment, and learn to
              create dynamic representations of their learning.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={Image2}
              alt="Children collaborating with technology"
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
              Creative technology tools include tablets with open-ended apps
              (e.g., Drawing Pad, Toca Builders), coding robots like Bee-Bots or
              Cubetto, interactive whiteboards, and digital cameras. Children
              can also explore 3D pens, stop-motion animation apps, and
              augmented reality tools such as Quiver or Merge Cube. Everyday
              technologies—scissors, screwdrivers, wind-up toys, or simple
              machines—promotes the hands-on experience of molding and
              designing. Recording tools like voice recorders and microphones
              support storytelling and reflection. Educators can use digital
              portfolios and timelines (e.g., Seesaw or Storypark) to document
              the creativity. These tools offer multiple ways for children to
              explore and observe, make, reflect, and share ideas creatively
              across domains.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={Image3}
              alt="Technology resources and materials"
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
                  "Tap and Discover" – Infants explore sensory apps or
                  interactive books on tablets, promoting cause-effect
                  understanding through touch-based exploration.
                </p>
              </div>
              <div className="border-l-4 border-teal-500 pl-4">
                <h3 className="font-semibold text-lg">2-3 years</h3>
                <p className="text-gray-600">
                  "Digital Drawing Time" – Toddlers use finger painting apps to
                  create digital artwork, experimenting with colors, lines, and
                  shapes without mess.
                </p>
              </div>
              <div className="border-l-4 border-teal-500 pl-4">
                <h3 className="font-semibold text-lg">3-5 years</h3>
                <p className="text-gray-600">
                  "Robot Coding Adventures" – Children use Bee-Bots or Cubetto
                  to solve mazes or storytelling challenges, enhancing
                  sequencing and problem-solving.
                </p>
              </div>
              <div className="border-l-4 border-teal-500 pl-4">
                <h3 className="font-semibold text-lg">6-8 years</h3>
                <p className="text-gray-600">
                  "Stop Motion Studio" – Children create short animated stories
                  using clay figures and tablets, developing narrative thinking,
                  collaboration, and digital storytelling skills.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-teal-800 mb-4 mt-8">
              Original Creative Learning Opportunities
            </h2>
            <div className="space-y-4">
              <div className="border-l-4 border-teal-500 pl-4">
                <h3 className="font-semibold text-lg">Push-Button Discovery</h3>
                <p className="text-gray-600">
                  Babies explore a range of simple cause-effect toys (pop-up
                  boxes, light-up buttons), developing curiosity, motor skills,
                  and understanding of basic technological interactions.
                </p>
              </div>
              <div className="border-l-4 border-teal-500 pl-4">
                <h3 className="font-semibold text-lg">Picture Takers</h3>
                <p className="text-gray-600">
                  Toddlers use child-safe digital cameras to take photos of
                  their favorite toys or friends, expressing personal interests
                  and practicing representation.
                </p>
              </div>
              <div className="border-l-4 border-teal-500 pl-4">
                <h3 className="font-semibold text-lg">Make a Story App</h3>
                <p className="text-gray-600">
                  Children use an interactive story creator app (like My Story
                  or Book Creator) to build their own stories using photos,
                  drawings, and voice recordings, combining imagination and
                  digital literacy.
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src={Image1}
              alt="Technology activities in action"
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
              In my viewpoint technologies are powerful tools for unlocking the
              creative skills in early learners. As a naturally imaginative and
              tech-enthusiast educator, I try to integrate digital and physical
              technologies while teaching with ease and intention.
            </p>
            <p className="text-gray-600 leading-relaxed">
              My creative strength lies in mixing storytelling, problem-solving
              experiences, and hands-on exploration of different tasks using
              tools that are meaningful for the creative growth of the children.
              I prefer the open-ended digital platforms for young learners that
              allow children to express themselves freely—drawing apps, voice
              recording, or child-friendly video tools.
            </p>
            <p className="text-gray-600 leading-relaxed">
              I also encourage the approach of tweaking with real tools and
              simple machines to get to know how things work, nurturing a sense
              of curiosity and invention. A balance between digital and
              non-digital tools should be maintained, I myself ensure that
              technology should enhance the effort and thinking rather than
              replacing. I prefer the creative risk-taking approach of children
              with technology, allowing children how to learn from mistakes and
              meanwhile discover different things.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={Image2}
              alt="Teacher facilitating technology learning"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Featured Videos Section */}
      <section className="bg-white rounded-lg shadow-lg p-8 space-y-8">
        <h2 className="text-2xl font-bold text-teal-800 mb-6 text-center">
          Featured Technology Tutorials
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
              Introduction to Educational Technology Tools
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
              Digital Storytelling for Young Learners
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
              Coding and Robotics in Early Education
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TechnologyPage;
