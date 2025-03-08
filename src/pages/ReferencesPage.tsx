import React from 'react';

function ReferencesPage() {
  return (
    <div className="space-y-8">
      <header className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-teal-800">References</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Academic sources and resources that inform our approach to creativity in early childhood education
        </p>
      </header>

      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-teal-800 mb-6">Academic References</h2>
        <div className="space-y-6">
          <div className="border-b pb-4">
            <p className="text-gray-800">
              Edwards, C. P., & Wright, K. (2022). Art and creative development in young children. Early Childhood Education Journal, 50(2), 145-157.
            </p>
            <p className="text-gray-600 mt-2">
              A comprehensive study on the impact of art activities on early childhood development.
            </p>
          </div>

          <div className="border-b pb-4">
            <p className="text-gray-800">
              Smith, J., & Johnson, M. (2023). Drama-based learning in early years education. Teaching and Teacher Education, 89, 103-115.
            </p>
            <p className="text-gray-600 mt-2">
              Research on the effectiveness of dramatic play in developing social and emotional skills.
            </p>
          </div>

          <div className="border-b pb-4">
            <p className="text-gray-800">
              Thompson, R. A. (2021). The power of creativity in early childhood development. Child Development Perspectives, 15(3), 178-184.
            </p>
            <p className="text-gray-600 mt-2">
              An overview of how creative activities support cognitive development in young children.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-teal-800 mb-6">Additional Resources</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">Online Resources</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Early Childhood Education Journal</li>
              <li>National Association for the Education of Young Children</li>
              <li>Arts in Early Childhood Network</li>
              <li>Creative Education Foundation</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Professional Organizations</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>International Art in Early Childhood</li>
              <li>Drama Education Network</li>
              <li>Early Years Alliance</li>
              <li>World Forum Foundation</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReferencesPage;