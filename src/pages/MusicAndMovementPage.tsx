import Video1 from "../assets/video1.mp4";
import Image1 from "../assets/img1.jpeg";
import Image2 from "../assets/img2.jpeg";
import Image3 from "../assets/img3.jpeg";

function MusicAndMovementPage() {
  return (
    <div className="space-y-12 pb-12">
      <header className="text-center space-y-4 py-8">
        <h1 className="text-4xl font-bold text-teal-800">Music and Movement</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Movement and music are crucial in early childhood education as they
          are necessary for the dynamic and vital development of creativity.
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
              Movement and music are crucial in early childhood education as they
              are necessary for the dynamic and vital development of creativity.
              Rhythm, dance, and musical exploration help in the development of
              integration, expressiveness, and emotional intelligence. Movement
              nurtures the imaginative abilities, while music develops the
              listening skills and a sense of flow and tempo, enabling young
              learners to create and experiment with sounds and actions. These
              areas promote analytical, communal, and physical development,
              making learning light hearted and comprehensive.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={Image1}
              alt="Children engaged in music and movement"
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
              Theories such as Howard Gardner's Multiple Intelligences points out
              the physical-kinesthetic and musical intelligences as the
              necessary aspects of creative expression in children. Loris
              Malaguzzi's Reggio Emilia approach also supports that music and
              movement are "languages of expression," inspiring creativity
              through sensory and physical experiences. Lev Vygotsky highlights
              that the creative development of the children depends upon the
              imaginative play and communal interaction, both of which are based
              upon group music and movement activities.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={Image2}
              alt="Children exploring music"
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
              Teachers can use various tools to nurture creativity through music
              and movement. Materials include scarves, ribbons, bean bags,
              rhythm sticks, and musical instruments like guitars or drums.
              Digital technologies such as music apps (e.g., Loopimal, Toca
              Band) and interactive whiteboards can allow children to create,
              rearrange(remix), and respond to sounds creatively. Audio
              speakers for playing various categories and racial or folk music
              also broadens the exposure.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={Image3}
              alt="Music and movement resources"
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
                  "Sound and Sway" – Infants explore musical sounds using soft
                  instruments (shakers, bells) while being gently rocked or
                  moved to the rhythm by educators or caregivers.
                </p>
              </div>
              <div className="border-l-4 border-teal-500 pl-4">
                <h3 className="font-semibold text-lg">2-3 years</h3>
                <p className="text-gray-600">
                  "Move Like Animals" – Toddlers mimic animal movements while
                  listening to music with different tempos, enhancing body
                  awareness and rhythm recognition.
                </p>
              </div>
              <div className="border-l-4 border-teal-500 pl-4">
                <h3 className="font-semibold text-lg">3-5 years</h3>
                <p className="text-gray-600">
                  "Create Your Own Dance" – Children choose a piece of music and
                  choreograph simple movements, using scarves or ribbons to add
                  flair and express personal stories.
                </p>
              </div>
              <div className="border-l-4 border-teal-500 pl-4">
                <h3 className="font-semibold text-lg">6-8 years</h3>
                <p className="text-gray-600">
                  "Build a Band" – Children form mini-bands using classroom
                  instruments and apps to create and perform original
                  compositions collaboratively.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-teal-800 mb-4 mt-8">
              Original Creative Learning Opportunities
            </h2>
            <div className="space-y-4">
              <div className="border-l-4 border-teal-500 pl-4">
                <h3 className="font-semibold text-lg">Musical Touch and Feel</h3>
                <p className="text-gray-600">
                  Infants explore texture and sound by touching musical toys
                  while educators sing and name the objects. This supports
                  sensory exploration and sound association.
                </p>
              </div>
              <div className="border-l-4 border-teal-500 pl-4">
                <h3 className="font-semibold text-lg">Dance Painting</h3>
                <p className="text-gray-600">
                  Children dip their feet in paint and move across large paper
                  to music, combining physical movement with visual art. This
                  merges rhythm, body coordination, and creative expression.
                </p>
              </div>
              <div className="border-l-4 border-teal-500 pl-4">
                <h3 className="font-semibold text-lg">Sound Stories</h3>
                <p className="text-gray-600">
                  Children use instruments to add sound effects to a story read
                  aloud by the teacher. They choose which instrument matches
                  certain actions or emotions, fostering narrative creativity.
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src={Image1}
              alt="Music and movement activities"
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
              As an early childhood educator, I have a strong personal interest
              for music and movement, which directly nourishes my ability of
              creativity in this area. My enthusiasm for dance and rhythm allows
              me to model joy, reliance, and extemporize—qualities that
              motivate children to express themselves freely.
            </p>
            <p className="text-gray-600 leading-relaxed">
              I have an eye to observe how children respond to music mentally
              and physically, which helps me in creating more activities for
              their interests which also helps in their developmental stages.
              I value student centered approach and spontaneity in their
              activities, both of which are critical in movement and music
              experiences.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={Image2}
              alt="Teacher guiding music activity"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Featured Videos Section */}
      <section className="bg-white rounded-lg shadow-lg p-8 space-y-8">
        <h2 className="text-2xl font-bold text-teal-800 mb-6 text-center">
          Featured Music and Movement Tutorials
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
              Rhythm and Movement Activities
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
              Musical Instruments for Young Children
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
              Creative Dance and Expression
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MusicAndMovementPage;
