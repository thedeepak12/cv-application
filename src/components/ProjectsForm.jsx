import React from 'react';
import folderIcon from '../assets/images/folder.svg';

function ProjectsForm({ projects, setProjects }) {
  const handleChange = (index, field, value) => {
    const updatedProjects = [...projects];
    updatedProjects[index] = { ...updatedProjects[index], [field]: value };
    setProjects(updatedProjects);
  };

  const addProject = () => {
    setProjects([
      ...projects,
      {
        title: '',
        technologies: '',
        description: '',
        github: '',
        liveLink: '',
      },
    ]);
  };

  const removeProject = (index) => {
    const updatedProjects = projects.filter((_, i) => i !== index);
    setProjects(updatedProjects);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
      <div className="flex items-center mb-6">
        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
          <img
            src={folderIcon}
            alt="Projects"
            className="w-5 h-5 text-blue-600"
          />
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-900">Projects</h2>
          <p className="text-sm text-gray-600">Add your notable projects</p>
        </div>
      </div>

      <div className="space-y-6">
        {projects.map((project, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800">
                Project #{index + 1}
              </h3>
              {projects.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeProject(index)}
                  className="text-red-600 hover:text-red-800 text-sm font-medium"
                >
                  Remove
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Project Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={project.title}
                  onChange={(e) =>
                    handleChange(index, 'title', e.target.value)
                  }
                  className="block w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Gym Reservation Bot"
                  required
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Technologies Used <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={project.technologies}
                  onChange={(e) =>
                    handleChange(index, 'technologies', e.target.value)
                  }
                  className="block w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Python, Selenium, Google Cloud Console"
                  required
                />
              </div>

              <div className="md:col-span-1">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  GitHub Link
                </label>
                <input
                  type="text"
                  value={project.github}
                  onChange={(e) =>
                    handleChange(index, 'github', e.target.value)
                  }
                  className="block w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="https://github.com/username/project"
                />
              </div>
              
              <div className="md:col-span-1">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Live Link
                </label>
                <input
                  type="text"
                  value={project.liveLink}
                  onChange={(e) =>
                    handleChange(index, 'liveLink', e.target.value)
                  }
                  className="block w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="https://your-live-project.com"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  value={project.description}
                  onChange={(e) =>
                    handleChange(index, 'description', e.target.value)
                  }
                  rows="3"
                  className="block w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical"
                  placeholder="Describe your project. Press Enter for new bullet points."
                />
              </div>
            </div>
          </div>
        ))}

        <button
          type="button"
          onClick={addProject}
          className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors font-medium"
        >
          Add Project
        </button>
      </div>
    </div>
  );
}

export default ProjectsForm;