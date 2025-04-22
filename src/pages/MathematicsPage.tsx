import Video1 from "../assets/video1.mp4";
import Image1 from "../assets/img1.jpeg";
import Image2 from "../assets/img2.jpeg";
import Image3 from "../assets/img3.jpeg";

function MathematicsPage() {
  return (
    <div className="space-y-12 pb-12">
      <header className="text-center space-y-4 py-8">
        <h1 className="text-4xl font-bold text-teal-800">Mathematics</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Nurturing creativity through patterns, problem-solving, and
          mathematical exploration
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
              Mathematics and numeracy play a vital role in nurturing creativity
              by aiding the children in the visualization of different patterns,
              exploring relationships, and solve different problems in
              imaginative ways. When children are asked to play with numbers,
              shapes, measurement, and data, they develop critical and flexible
              thinking, analytical skills and curiosity. Creativity in
              mathematics revealed through activities like building structures,
              sorting objects, exploring symmetry, and creating patterns. Rather
              than focusing only on the nature of the answer that whether it is
              right or wrong, early childhood educators can foster creativity by
              encouraging multiple solutions, questioning, reasoning and the way
              by which children conclude to that answer.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={Image1}
              alt="Children exploring mathematical concepts"
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
              Howard Gardner's Theory of Multiple Intelligences recognizes
              logical-mathematical intelligence as a unique form of creativity.
              Piaget's constructivist theory suggests children build
              mathematical understanding through hands-on exploration and active
              engagement. The Reggio Emilia approach encourages open-ended
              mathematical experiences through natural materials and inquiry,
              fostering creative representation of mathematical concepts. These
              theories support the idea that mathematical thinking isn't just
              about computation but about creative reasoning, pattern
              recognition, and exploration. When educators value children's
              thinking processes and encourage the children to explore rather
              than rote learning, mathematics becomes a rich domain for
              imaginative and inventive problem-solving in early childhood
              education.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={Image2}
              alt="Mathematical exploration and creativity"
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
              To support mathematical creativity, educators can use natural and
              open-ended materials such as shells, stones, blocks, beads, and
              buttons for sorting, counting, and patterning. Digital resources
              like number apps (e.g., Montessori Numbers, Endless Numbers),
              interactive whiteboards, and coding tools like Bee-Bots also
              support mathematical exploration. Measuring tools (rulers, scales,
              tape measures), shape puzzles, tangrams, and graphing activities
              allow children to inquire size, symmetry, and data. Loose parts
              support abstract thinking through creative pattern making and
              classification. When technology is carefully integrated with hands
              on experiences, children are likely to explore mathematical
              concepts through discovery, inquiry, and creative play.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={Image3}
              alt="Mathematics resources and materials"
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
                  "Shape and Size Exploration" – Infants handle soft blocks and
                  nesting cups to explore spatial awareness, size, and early
                  numeracy.
                </p>
              </div>
              <div className="border-l-4 border-teal-500 pl-4">
                <h3 className="font-semibold text-lg">2-3 years</h3>
                <p className="text-gray-600">
                  "Counting and Sorting Basket" – Toddlers group natural objects
                  (like pinecones or buttons) by size, color, or shape to build
                  early classification and counting skills.
                </p>
              </div>
              <div className="border-l-4 border-teal-500 pl-4">
                <h3 className="font-semibold text-lg">3-5 years</h3>
                <p className="text-gray-600">
                  "Pattern Paths" – Children use colored tiles, beads, or nature
                  items to create and extend patterns, encouraging visual logic
                  and sequencing.
                </p>
              </div>
              <div className="border-l-4 border-teal-500 pl-4">
                <h3 className="font-semibold text-lg">6-8 years</h3>
                <p className="text-gray-600">
                  "Build a Budget Shop" – Children create a play shop with price
                  tags, coins, and receipts, using real-world numeracy to
                  calculate change and manage spending.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-teal-800 mb-4 mt-8">
              Original Creative Learning Opportunities
            </h2>
            <div className="space-y-4">
              <div className="border-l-4 border-teal-500 pl-4">
                <h3 className="font-semibold text-lg">Drop and Count</h3>
                <p className="text-gray-600">
                  Infants drop balls or objects into containers while adults
                  count aloud, supporting one-to-one correspondence, rhythm, and
                  early number recognition through sensory play.
                </p>
              </div>
              <div className="border-l-4 border-teal-500 pl-4">
                <h3 className="font-semibold text-lg">Rainbow Sorting</h3>
                <p className="text-gray-600">
                  Toddlers sort objects by color into matching bowls, enhancing
                  visual discrimination, categorization, and emerging numeracy.
                </p>
              </div>
              <div className="border-l-4 border-teal-500 pl-4">
                <h3 className="font-semibold text-lg">Shape Hunt Adventure</h3>
                <p className="text-gray-600">
                  Children go on an indoor or outdoor shape hunt, using digital
                  cameras or clipboards to document different shapes in their
                  environment, fostering observation, geometry, and
                  representation.
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src={Image1}
              alt="Mathematics activities in action"
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
              Mathematics has always been a source of interest for me as a
              creative and flexible tool for understanding the world, and this
              interest shapes the way how I teach young children. I have a
              creative approach towards maths by integrating it into play,
              stories, and real-life scenarios.
            </p>
            <p className="text-gray-600 leading-relaxed">
              My strength lies in seeing maths beyond numbers and helps my
              students to approach it in the same way - through art, nature,
              music, and movement—and the use of these mediums to encourage
              children's creativity. I create open-ended maths experiences that
              promote questioning, allowing children to explore, predict, test,
              and explain according to their creative approach.
            </p>
            <p className="text-gray-600 leading-relaxed">
              My creative approach encourages multiple solutions and mainly
              values the learning procedures over the final answer, helping
              children see themselves as a critical mathematics thinker. I try
              to use digital tools like interactive apps and visual
              documentation to make abstract concepts visible, more appealing
              and engaging. I also model a positive, playful attitude toward
              maths, helping children feel empowered and curious rather than
              pressured.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={Image2}
              alt="Teacher facilitating mathematics learning"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Featured Videos Section */}
      <section className="bg-white rounded-lg shadow-lg p-8 space-y-8">
        <h2 className="text-2xl font-bold text-teal-800 mb-6 text-center">
          Featured Mathematics Tutorials
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
              Early Mathematics Concepts
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
              Pattern Recognition Activities
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
              Creative Problem-Solving in Math
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MathematicsPage;
