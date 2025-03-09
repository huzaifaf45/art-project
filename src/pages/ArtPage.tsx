import ArtVideo from "../assets/video1.mp4";
import Image1 from "../assets/img1.jpeg";
import Image2 from "../assets/img2.jpeg";

function ArtPage() {
  return (
    <div className="space-y-12 pb-12">
      <header className="text-center space-y-4 py-8">
        <h1 className="text-4xl font-bold text-teal-800">
          Artistic Expression in Early Childhood
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Nurturing creativity, self-expression, and cognitive development
          through art
        </p>
      </header>

      {/* Section 1: Introduction - Image Right, Text Left */}
      <section className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2 p-8 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-teal-800 mb-4">
              The Power of Artistic Expression
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Art encompasses diverse creative experiences that allow children
              to express unique ideas visually. As a fundamental component of
              early childhood education, artistic activities foster creativity,
              self-expression, and exploration. Through engaging with various
              materials, textures, and techniques, children develop curiosity,
              enhance motor skills, and nurture their innate creativity during
              these formative years.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={Image1}
              alt="Children exploring art materials"
              className="w-full h-[450px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Section 2: Theoretical Foundations - Image Left, Text Right */}
      <section className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex flex-row-reverse">
          <div className="md:w-1/2 p-8 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-teal-800 mb-4">
              Theoretical Foundations of Creativity
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Understanding childhood creativity is enriched by the perspectives
              of influential thinkers like Vygotsky and Gardner. Vygotsky's
              sociocultural approach highlights how social interactions and
              cultural tools enhance cognitive development and creative
              expression. Gardner's multiple intelligences theory recognizes
              spatial and visual-artistic intelligence as distinct cognitive
              capacities, validating art's essential place in education. Both
              frameworks emphasize that artistic expression in early childhood
              cultivates crucial cognitive and emotional capabilities.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80"
              alt="Children collaborating on art"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Section 3: Age-Appropriate Activities - Image Right, Text Left */}
      <section className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2 p-8 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-teal-800 mb-4">
              Developmental Art Experiences
            </h2>
            <div className="space-y-4">
              <div className="border-l-4 border-teal-500 pl-4">
                <h3 className="font-semibold text-lg">Infants (0-2 Years)</h3>
                <p className="text-gray-600">
                  Sensory exploration through finger painting helps infants
                  develop fine motor skills while discovering textures and
                  colors with their fingertips.
                </p>
              </div>
              <div className="border-l-4 border-teal-500 pl-4">
                <h3 className="font-semibold text-lg">Toddlers (2-3 Years)</h3>
                <p className="text-gray-600">
                  Drawing and coloring with crayons and markers helps toddlers
                  develop eye-hand coordination and creative thinking as they
                  create their first artistic expressions.
                </p>
              </div>
              <div className="border-l-4 border-teal-500 pl-4">
                <h3 className="font-semibold text-lg">
                  Preschoolers (3-5 Years)
                </h3>
                <p className="text-gray-600">
                  Watercolor resist art introduces scientific concepts as
                  children discover how white crayons resist watercolors,
                  revealing hidden designs and teaching color theory.
                </p>
              </div>
              <div className="border-l-4 border-teal-500 pl-4">
                <h3 className="font-semibold text-lg">
                  Early Elementary (6-8 Years)
                </h3>
                <p className="text-gray-600">
                  Collaborative murals foster teamwork as children plan and
                  create large-scale art together, developing social skills
                  alongside artistic expression.
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1551966775-a4ddc8df052b?auto=format&fit=crop&w=800&q=80"
              alt="Child creating art"
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
              Creative Materials and Digital Resources
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Traditional Materials</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Non-toxic paints</li>
                  <li>Variety of brushes</li>
                  <li>Crayons and markers</li>
                  <li>Clay and playdough</li>
                  <li>Quality paper</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Natural Elements</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Leaves and twigs</li>
                  <li>Stones and pebbles</li>
                  <li>Shells and seeds</li>
                  <li>Recycled containers</li>
                  <li>Fabric scraps</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Digital Tools</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Drawing applications</li>
                  <li>Digital cameras</li>
                  <li>Animation software</li>
                  <li>Virtual museum tours</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Specialized Tools</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Safety scissors</li>
                  <li>Stamps and stencils</li>
                  <li>Rolling pins</li>
                  <li>Texture tools</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80"
              alt="Art supplies and materials"
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
              Nurturing Artistic Growth
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Creating an environment where children feel free to experiment
              with various artistic mediums is essential for promoting
              self-expression and inventiveness. Dedicated art spaces filled
              with diverse materials encourage discovery and intrinsic
              motivation.
            </p>
            <p className="text-gray-600 leading-relaxed">
              By introducing artistic traditions from different cultures, we
              expand children's perspectives and foster appreciation for
              diversity. Prioritizing open-ended projects encourages risk-taking
              and emphasizes the creative process over the final product.
              Recognizing each child's unique artistic voice helps build
              confidence and nurtures a lifelong love of creative expression.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={Image2}
              alt="Teacher guiding art activity"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Featured Video Section - At the end */}
      <section className="bg-white rounded-lg shadow-lg p-8 w-full mx-auto">
        <h2 className="text-2xl font-bold text-teal-800 mb-6 text-center">
          Featured Art Tutorial
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="aspect-w-16 aspect-h-9">
            <video className="rounded-lg w-full" controls preload="metadata">
              <source src={ArtVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="mt-4 text-gray-600 italic text-center">
            Explore practical techniques for implementing engaging art
            activities in early childhood education
          </p>
        </div>
      </section>
    </div>
  );
}

export default ArtPage;
