import Video2 from "../assets/video2.mp4";
import Image2 from "../assets/img2.jpeg";
import Image3 from "../assets/img3.jpeg";
import Image4 from "../assets/img4.jpeg";

function DramaPage() {
  return (
    <div className="space-y-12 pb-12">
      <header className="text-center space-y-4 py-8">
        <h1 className="text-4xl font-bold text-teal-800">
          DRAMA AND PUPPETRY
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Nurturing imagination, social skills, and emotional development through dramatic play
        </p>
      </header>

      {/* Section 1: Introduction - Image Right, Text Left */}
      <section className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2 p-8 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-teal-800 mb-4">
              Introduction
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Introducing drama and puppetry in early childhood gives children a number of chances to develop social skills, regulate their emotions and unlock their imagination through storytelling. Through these activities they see world from various aspects and learn about different perceptions which will strengthen their communication abilities and make them empathetic. (Dinham & Chalk 2023)
              The shy or reluctant children when get to see puppetry they learn to express their inner emotions non verbally through characters. Research shows that dramatic play allows children to develop problem solving and cognitive development. (Mayesky,2021)
              By bringing drama and puppetry into early childhood learning the teachers can also play their role in making kids confident, making them learn teamwork and how they can adapt to different situations. These activities make learning fun and also develop skills in meaningful and engaging way.
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

      {/* Section 2: Creativity Theory - Image Left, Text Right */}
      <section className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex flex-row-reverse">
          <div className="md:w-1/2 p-8 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-teal-800 mb-4">
              Creativity theory
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Vygotsky theory of social constructivism tell how cognitive and social skills can be developed by role-playing because when children are involved in social interactions, they learn the best. He gave the concept of zone of proximal development which tells how dram helps children to explore ideas. The Reggio Emilia approach values storytelling and performance as always for children to express their "hundred languages" of creativity (Edwards, Gandini, & Forman, 2012), reinforcing the importance of drama and puppetry in early learning.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1511933617088-859b414f00ae?auto=format&fit=crop&w=800&q=80"
              alt="Children using puppets for storytelling"
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
              In drama education, a blend of traditional and digital resources is used to create a new kind of learning environment for children to explore creativity and problem solving. Traditional resources include hand puppets, finger Puppets, shadow puppetry screens, dress up costumes, mask shows, stick puppets and prop boxes. These traditional resources promote collaboration which will encourage storytelling and imaginative thinking will be improved. For example, a group of children might use a puppet theater and hand puppets to perform a classic fairy tale, or use dress-up costumes and prop boxes to create an original story about a magical kingdom.
              The digital resources include different apps like do inks, puppet pals, seesaw and story jumpers. Children can create their own puppets on their mobiles and tablets by using apps like puppet pals. Interactive whiteboards can be used for group scriptwriting or to display acting prompts, making the process more engaging and collaborative. When these resources are used in combination it will expose the educators and Teachers to a number of new learning styles and children regardless of their preferences engage in drama which Is now more enjoyable and meaningful for them.
              Providing both physical and digital resources allows children to explore drama in multiple ways, catering to different learning styles and developmental stages (Cartmel & Hayes,2016)
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={Image2}
              alt="Children performing with puppets"
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
                  Play simple games like peekaboo or use puppets to sing songs like "Twinkle, Twinkle." These activities help little ones connect with sounds and movements
                </p>
              </div>
              <div className="border-l-4 border-teal-500 pl-4">
                <h3 className="font-semibold text-lg">Toddlers (2-3 years)</h3>
                <p className="text-gray-600">
                  Use finger puppets to try out silly voices and act out short, simple stories together.
                </p>
              </div>
              <div className="border-l-4 border-teal-500 pl-4">
                <h3 className="font-semibold text-lg">Preschoolers (3-5 years)</h3>
                <p className="text-gray-600">
                  Act out favorite stories (like "The Three Little pigs") using puppets or small puppet theaters
                </p>
              </div>
              <div className="border-l-4 border-teal-500 pl-4">
                <h3 className="font-semibold text-lg">Older Kids (6-8 years)</h3>
                <p className="text-gray-600">
                  Write short scripts and put on group plays, using both regular puppets and digital tools like apps
                </p>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-teal-800 mb-4 mt-8">
              Fun learning ideas
            </h2>
            <div className="space-y-4">
              <div className="border-l-4 border-teal-500 pl-4">
                <h3 className="font-semibold text-lg">Babies: Mirror Puppet Play</h3>
                <p className="text-gray-600">
                  Use soft puppets and a mirror. Babies can copy the puppet's faces and sounds, which helps them learn about emotions and social skills.
                </p>
              </div>
              <div className="border-l-4 border-teal-500 pl-4">
                <h3 className="font-semibold text-lg">Toddlers: Puppet Story Builders</h3>
                <p className="text-gray-600">
                  A puppet "asks" the kids to help make up a story. Each child adds a sentence or action, creating a fun story together.
                </p>
              </div>
              <div className="border-l-4 border-teal-500 pl-4">
                <h3 className="font-semibold text-lg">Preschoolers: Puppet Mystery Box</h3>
                <p className="text-gray-600">
                  Kids pick a random item from a box (like a toy or prop) and use it to make up a short puppet show. This helps them think creatively and use their imagination. These activities are easy, fun, and help kids learn important skills while having a great time.
                </p>
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

      {/* Section 5: Reflection - Image Right, Text Left */}
      <section className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2 p-8 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-teal-800 mb-4">
              Reflection
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Drama and puppetry really connect with my creative strengths especially my ability to think quickly and inspire imagination Through storytelling. I believe children can become more exploration and their problem-solving skills can be enhanced if I introduced play and open-ended exploration into my teaching. It will help them to grow along with fun and entertainment. I will make drama and puppetry and essential part of everyday lessons, by this I can create a fun and creative environment where children use their brainstorming skills and imaginative thinking in most creative way.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The best thing about drama is that it connects different aspect of learning like exploring patterns in math, different science concepts and historical events.
            </p>
            <p className="text-gray-600 leading-relaxed">
              If I analyze my teaching approach I feel like flexibility and adaptability are the most important components when using drama with kids. You have to stick to it and go with the flow. Encouraging spontaneous storytelling and role-playing means you give the charge or lead to the children of their learning. By doing this you will create a classroom where children become more responsible and they will let their thoughts and emotions out. They feel free and safe to share their ideas. It will give them freedom to explore imagine and grow in their unique way.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={Image4}
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
            <video
              className="rounded-lg w-full"
              controls
              preload="metadata"
            >
              <source src={Video2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="mt-4 text-gray-600 italic text-center">
            Explore practical techniques for implementing engaging drama activities in early childhood education
          </p>
        </div>
      </section>
    </div>
  );
}

export default DramaPage;