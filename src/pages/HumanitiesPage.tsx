import Video1 from "../assets/video1.mp4";
import Image1 from "../assets/img1.jpeg";
import Image2 from "../assets/img2.jpeg";
import Image3 from "../assets/img3.jpeg";

function HumanitiesPage() {
  return (
    <div className="space-y-12 pb-12">
      <header className="text-center space-y-4 py-8">
        <h1 className="text-4xl font-bold text-teal-800">
          Humanities and Social Sciences
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Exploring people, places, cultures, and social communities through
          creative expression
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
              Humanities and Social Sciences (HASS) nurtures creativity by
              motivating children to think about people, places, cultures, and
              social communities in various and creative ways. By narrating
              stories, history, geography, and investigation of identity and
              relationships, young learners can express their understanding
              through drawing, role play, map-making, and discussions. This area
              allows children to explore how people live, work, and interact
              with their environment, fostering empathy, critical and creative
              thinking, and innovation. When educators use creative methods like
              collaborative projects, reasoning-based learning, and visual
              documentation, children develop a deeper understanding of their
              world and can inquire multiple perspectives through expressive and
              meaningful play.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={Image1}
              alt="Children exploring humanities concepts"
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
              Vygotsky's sociocultural theory supports creativity in HASS by
              highlighting learning through social interaction and cultural
              context. The Reggio Emilia approach values children's multiple
              ways of expressing ideas about the world through maps, drawings,
              and dramatic play, aligning with the humanities' focus on place,
              time, and relationships. Gardner's theory of multiple
              intelligences includes interpersonal and intrapersonal
              intelligences, which are fostered through empathy-building and
              reflective activities in HASS. These viewpoints support the idea
              that creativity in humanities arises from children engaging with
              other people in real-life, imaginative, and reflective experiences
              that build their understanding of themselves and others across
              time, culture, and place.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={Image2}
              alt="Cultural exploration and creativity"
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
              Children can explore HASS creatively through storybooks, cultural
              artifacts, photos, maps, puppets, dress-ups, and materials from
              different countries. Digital tools such as Google Earth, virtual
              museum tours, and interactive story apps allow children to
              experience and learn about places and histories beyond their
              immediate environment. Voice recorders and iPads can be used to
              create oral histories, digital timelines, and community projects.
              Resources like multicultural dolls, family photos, and role-play
              props help children reveal and explore identity, heritage, and
              relationships. These tools motivate collaborative learning and
              empower children to share their perspectives and represent their
              understanding of people, cultures, and environments.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={Image3}
              alt="Humanities resources and materials"
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
                  "Family Photo Exploration" – Infants look at photos of their
                  family and familiar people, supporting recognition,
                  connection, and early identity development.
                </p>
              </div>
              <div className="border-l-4 border-teal-500 pl-4">
                <h3 className="font-semibold text-lg">2-3 years</h3>
                <p className="text-gray-600">
                  "Home Role Play" – Toddlers engage in pretend play with dolls,
                  kitchens, and dress-ups, exploring social roles and daily life
                  routines creatively.
                </p>
              </div>
              <div className="border-l-4 border-teal-500 pl-4">
                <h3 className="font-semibold text-lg">3-5 years</h3>
                <p className="text-gray-600">
                  "Our Place Mapping" – Children draw or build maps of their
                  classroom, playground, or local community, developing spatial
                  awareness and sense of belonging.
                </p>
              </div>
              <div className="border-l-4 border-teal-500 pl-4">
                <h3 className="font-semibold text-lg">6-8 years</h3>
                <p className="text-gray-600">
                  "Cultural Story Projects" – Children research a chosen culture
                  or family tradition and present their findings through
                  posters, digital slideshows, or performances.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-teal-800 mb-4 mt-8">
              Original Creative Learning Opportunities
            </h2>
            <div className="space-y-4">
              <div className="border-l-4 border-teal-500 pl-4">
                <h3 className="font-semibold text-lg">My World Basket</h3>
                <p className="text-gray-600">
                  Babies explore a sensory basket filled with safe, culturally
                  relevant items such as cloths, photos, and rattles, promoting
                  identity and curiosity through texture and recognition.
                </p>
              </div>
              <div className="border-l-4 border-teal-500 pl-4">
                <h3 className="font-semibold text-lg">
                  Community Helpers Dress-Up
                </h3>
                <p className="text-gray-600">
                  Toddlers use hats, uniforms, and props to role play different
                  jobs (e.g., doctor, firefighter), encouraging imaginative
                  expression and understanding of social roles.
                </p>
              </div>
              <div className="border-l-4 border-teal-500 pl-4">
                <h3 className="font-semibold text-lg">Journey of My Day</h3>
                <p className="text-gray-600">
                  Children create visual timelines of their daily routines using
                  drawings, photos, or digital tools, encouraging reflection,
                  sequencing, and personal storytelling.
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src={Image1}
              alt="Humanities activities in action"
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
              My personal creativity in Humanities and Social Sciences is
              grounded in my curiosity about people, cultures, and stories,
              which reflects in my teaching. I enjoy finding visionary ways to
              help children connect with their world, whether through making
              maps, narrating stories, or role play.
            </p>
            <p className="text-gray-600 leading-relaxed">
              I naturally motivate questioning and reflection, allowing children
              to ask questions, explore identities, and develop the sense of
              empathy. My ability to see the world from different perspectives
              and viewpoints helps me to design inclusive and meaningful
              learning experiences that value diversity and lived experience.
            </p>
            <p className="text-gray-600 leading-relaxed">
              I bring creativity into HASS by integrating drawing, drama, and
              digital tools, enabling children to narrate what they know in
              different ways. By using visual timelines, family books, and
              cultural celebrations, I help children in building a strong sense
              of identity and belonging.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={Image2}
              alt="Teacher facilitating humanities learning"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Featured Videos Section */}
      <section className="bg-white rounded-lg shadow-lg p-8 space-y-8">
        <h2 className="text-2xl font-bold text-teal-800 mb-6 text-center">
          Featured Humanities Tutorials
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
              Understanding People and Communities
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
              Cultural Exploration Activities
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
              Building Identity and Belonging
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HumanitiesPage;
