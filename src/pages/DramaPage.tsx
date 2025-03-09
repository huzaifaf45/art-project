import Video2 from "../assets/video2.mp4";
import Image2 from "../assets/img2.jpeg";
import Image3 from "../assets/img3.jpeg";
import Image4 from "../assets/img4.jpeg";

function DramaPage() {
  return (
    <div className="space-y-12 pb-12">
      <header className="text-center space-y-4 py-8">
        <h1 className="text-4xl font-bold text-teal-800">
          Drama and Creative Expression
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Nurturing imagination, social skills, and emotional development
          through dramatic play
        </p>
      </header>

      {/* Section 1: Introduction - Image Right, Text Left */}
      <section className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2 p-8 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-teal-800 mb-4">
              The Magic of Dramatic Play
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Dramatic play offers children a unique opportunity to imitate and
              explore behaviors from real-life scenarios and stories. Through
              role-playing, children develop crucial interpersonal skills while
              expressing their ideas creatively. This form of play naturally
              enhances social, cognitive, and language development as children
              learn about different roles and responsibilities. The beauty of
              dramatic play lies in its boundless potential—children can create
              their own characters and build entire imaginative worlds.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={Image3}
              alt="Children engaged in dramatic play"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Section 2: Theoretical Foundations - Image Left, Text Right */}
      <section className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex flex-row-reverse">
          <div className="md:w-1/2 p-8 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-teal-800 mb-4">
              Theoretical Foundations of Drama in Early Childhood
            </h2>
            <p className="text-gray-600 leading-relaxed">
              The value of dramatic play is supported by influential
              developmental theories. Vygotsky's sociocultural theory emphasizes
              how interactions with peers and adults foster intellectual growth,
              highlighting collaborative dramatic play as a catalyst for
              creativity and communication skills. Erikson's psychosocial theory
              underscores play's role in emotional regulation and identity
              formation. Through puppetry and role-play, children explore
              diverse scenarios and roles, enhancing their psychological
              development and understanding of social dynamics. Both theoretical
              perspectives affirm that drama and puppetry are powerful tools for
              nurturing creativity in early childhood.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1511933617088-859b414f00ae?auto=format&fit=crop&w=800&q=80"
              alt="Children using puppets for storytelling"
              className="w-full h-[650px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Section 3: Age-Appropriate Activities - Image Right, Text Left */}
      <section className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2 p-8 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-teal-800 mb-4">
              Developmental Drama Experiences
            </h2>
            <div className="space-y-4">
              <div className="border-l-4 border-teal-500 pl-4">
                <h3 className="font-semibold text-lg">Infants (0-2 Years)</h3>
                <p className="text-gray-600">
                  Gentle puppet interactions introduce babies to basic
                  storytelling, encouraging language development as they respond
                  with sounds and movements to the puppets' actions.
                </p>
              </div>
              <div className="border-l-4 border-teal-500 pl-4">
                <h3 className="font-semibold text-lg">Toddlers (2-3 Years)</h3>
                <p className="text-gray-600">
                  Animal movement games invite toddlers to mimic creatures
                  through sounds and actions, developing gross motor skills,
                  creativity, and emotional expression.
                </p>
              </div>
              <div className="border-l-4 border-teal-500 pl-4">
                <h3 className="font-semibold text-lg">
                  Preschoolers (3-5 Years)
                </h3>
                <p className="text-gray-600">
                  Puppet storytelling empowers children to retell familiar
                  stories or create original narratives, enhancing language
                  skills and narrative creativity.
                </p>
              </div>
              <div className="border-l-4 border-teal-500 pl-4">
                <h3 className="font-semibold text-lg">
                  Early Elementary (6-8 Years)
                </h3>
                <p className="text-gray-600">
                  Collaborative puppet shows enable children to work in groups
                  to develop stories, create characters, write scripts, and
                  perform for peers, building teamwork and public speaking
                  confidence.
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src={Image4}
              alt="Children performing with puppets"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Section 4: Materials and Resources - Image Left, Text Right */}
      <section className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex flex-row-reverse">
          <div className="md:w-1/2 p-8 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-teal-800 mb-4">
              Drama and Puppetry Resources
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">
                  Dramatic Play Essentials
                </h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Diverse costumes</li>
                  <li>Various puppets</li>
                  <li>Storybooks</li>
                  <li>Musical instruments</li>
                  <li>Makeup kits</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Props and Settings</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Mirrors</li>
                  <li>Masks</li>
                  <li>Dedicated play spaces</li>
                  <li>Themed toys</li>
                  <li>Household items</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Digital Tools</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Video cameras</li>
                  <li>Tablets</li>
                  <li>Recording equipment</li>
                  <li>Storytelling apps</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Benefits of Drama</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Communication skills</li>
                  <li>Emotional intelligence</li>
                  <li>Problem-solving</li>
                  <li>Self-expression</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80"
              alt="Drama resources and materials"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Section 5: Educator's Approach - Image Right, Text Left */}
      <section className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2 p-8 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-teal-800 mb-4">
              Nurturing Dramatic Expression
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Effective drama and puppetry workshops harness the power of
              storytelling to fully engage young children. Imaginative play
              serves as a vehicle for exploring complex concepts like
              friendship, empathy, and social structures in accessible ways. By
              incorporating improvisation into activities, educators can foster
              spontaneity and creativity, providing children with safe spaces to
              express emotions and perspectives while developing communication
              skills.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Including diverse puppets and props representing various cultures
              and people helps children understand different viewpoints.
              Empowering children to lead narrative sessions allows them to
              artistically explore their feelings and thoughts. This approach
              not only enhances language development but also builds social
              skills as children collaborate on performances. The ultimate goal
              is creating an environment where all children feel valued and
              inspired to share their stories through play.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={Image2}
              alt="Teacher facilitating dramatic play"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Featured Video Section - At the end */}
      <section className="bg-white rounded-lg shadow-lg p-8 w-full mx-auto">
        <h2 className="text-2xl font-bold text-teal-800 mb-6 text-center">
          Featured Drama Tutorial
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="aspect-w-16 aspect-h-9">
            <video className="rounded-lg w-full" controls preload="metadata">
              <source src={Video2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="mt-4 text-gray-600 italic text-center">
            Explore practical techniques for implementing engaging drama
            activities in early childhood education
          </p>
        </div>
      </section>
    </div>
  );
}

export default DramaPage;
