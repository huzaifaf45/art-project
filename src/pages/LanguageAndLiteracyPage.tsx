import Video1 from "../assets/video1.mp4";
import Image1 from "../assets/img1.jpeg";
import Image2 from "../assets/img2.jpeg";
import Image3 from "../assets/img3.jpeg";

function LanguageAndLiteracyPage() {
  return (
    <div className="space-y-12 pb-12">
      {/* Header section */}
      <header className="text-center space-y-4 py-8">
        <h1 className="text-4xl font-bold text-teal-800">
          Language and Literacy
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Language and literacy are the most important tools for nurturing
          creativity in early childhood.
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
              Language and literacy are the most important tools for nurturing
              creativity in early childhood. Through narrations, conversations,
              and imaginative play, children develop the abilities to express
              their thinkings, emotions, and ideas in imaginative plays.
              Literacy goes far beyond reading and writing; it also involves
              using the language to create stories, dramas with words, and
              invent new boundaries of the world. Emphasizing the importance of
              oral storytelling, drawing, dramatic play, and reading different
              writings helps children to explore different viewpoints and
              express originality.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={Image1}
              alt="Children engaged in literacy activities"
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
              Vygotsky's theory highlights the importance of social interaction
              and language in analytical and creative development, particularly
              through imaginative play and storytelling. Bruner's narrative mode
              of thought emphasizes how children make sense of the world by mind
              mapping their own stories, making storytelling a key aspect for
              creativity. The Reggio Emilia approach also values language as one
              of the "hundred languages of children," encouraging expressing
              oneself through drawing, writing, and spoken word.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={Image2}
              alt="Storytelling and creative writing"
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
              Early childhood teachers can use books (including wordless picture
              books), puppets, story stones, magnetic letters, whiteboards, and
              writing tools to support creative literacy experiences. Digital
              tools like story-making apps (e.g., Book Creator, Puppet Pals,
              ChatterPix) allow children to write and narrate their own digital
              stories. Audio recorders help capture children's oral
              storytelling, while eBooks with interactive features encourage
              engagement of the children.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={Image3}
              alt="Literacy resources and materials"
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
                  "Rhyming Routines" – Infants are exposed to songs, rhymes, and
                  repetitive stories during everyday routines, promoting
                  phonemic awareness and early communication skills.
                </p>
              </div>
              <div className="border-l-4 border-teal-500 pl-4">
                <h3 className="font-semibold text-lg">2-3 years</h3>
                <p className="text-gray-600">
                  "Picture Talk" – Toddlers explore wordless picture books and
                  describe what they see using their own words, encouraging
                  vocabulary growth and narrative thinking.
                </p>
              </div>
              <div className="border-l-4 border-teal-500 pl-4">
                <h3 className="font-semibold text-lg">3-5 years</h3>
                <p className="text-gray-600">
                  "Story Builders" – Children use story dice or cards to create
                  and act out their own stories, developing sequencing, language
                  skills, and creativity.
                </p>
              </div>
              <div className="border-l-4 border-teal-500 pl-4">
                <h3 className="font-semibold text-lg">6-8 years</h3>
                <p className="text-gray-600">
                  "Author's Workshop" – Children write and illustrate their own
                  books using digital and print tools, sharing them with peers
                  or family, encouraging authorship and audience awareness.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-teal-800 mb-4 mt-8">
              Original Creative Learning Opportunities
            </h2>
            <div className="space-y-4">
              <div className="border-l-4 border-teal-500 pl-4">
                <h3 className="font-semibold text-lg">Name Song Story</h3>
                <p className="text-gray-600">
                  Infants are sung short, personalized name songs that include
                  actions, rhymes, and familiar words. This helps build sound
                  recognition, social connection, and early word association.
                </p>
              </div>
              <div className="border-l-4 border-teal-500 pl-4">
                <h3 className="font-semibold text-lg">Talk Box</h3>
                <p className="text-gray-600">
                  A mystery box with objects inside encourages toddlers to reach
                  in, pull out an item, and describe it or make up a simple
                  story. This promotes language use and creativity.
                </p>
              </div>
              <div className="border-l-4 border-teal-500 pl-4">
                <h3 className="font-semibold text-lg">Story Map Adventure</h3>
                <p className="text-gray-600">
                  Children draw a map of an imaginary place (e.g., fairy garden,
                  pirate island), then create a story about a character's
                  journey through it. This supports sequencing, storytelling,
                  and expressive language.
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src={Image1}
              alt="Language and literacy activities"
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
              My natural strengths have always lied in Language and literacy,
              and I use them as the tools to foster creativity in young
              learners. I encourage children and bring a love for storytelling,
              poetry, and imaginative dialogue into the classroom, modeling
              expressive language and encouraging children to explore their own
              voices.
            </p>
            <p className="text-gray-600 leading-relaxed">
              I enjoy creating inclusive and student-centered environments where
              children's ideas are valued and extended through shared reading,
              storytelling, and conversation along with adult guidance. I
              believe that communication is the main ideological point of
              creativity—every story a child narrates is a glimpse of what they
              imagine and how they understand the world.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={Image2}
              alt="Teacher facilitating literacy activity"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Featured Videos Section */}
      <section className="bg-white rounded-lg shadow-lg p-8 space-y-8">
        <h2 className="text-2xl font-bold text-teal-800 mb-6 text-center">
          Featured Language and Literacy Tutorials
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
              Storytelling Techniques for Young Children
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
              Creative Writing Activities
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
              Interactive Reading Strategies
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LanguageAndLiteracyPage;
