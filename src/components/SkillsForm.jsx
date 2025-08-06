import React, { useState } from 'react';
import toolsIcon from '../assets/images/tools.svg';

function SkillsForm({ skills, setSkills }) {
  const [skillsData, setSkillsData] = useState({
    languages: '',
    developerTools: '',
    technologiesFrameworks: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSkillsData({
      ...skillsData,
      [name]: value,
    });
    setSkills({
      ...skills,
      [name]: value,
    });
  };

  return (
    <div className="bg-white p-6 rounded shadow">
      <div className="flex items-center mb-6">
        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
          <img src={toolsIcon} alt="Skills" className="w-5 h-5 text-blue-600" />
        </div>
        <h2 className="text-xl font-bold">Technical Skills</h2>
      </div>

      <div className="space-y-4">
        <div>
          <label
            htmlFor="languages"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Languages
          </label>
          <input
            type="text"
            id="languages"
            name="languages"
            value={skillsData.languages}
            onChange={handleChange}
            placeholder="Python, Java, C, HTML/CSS, JavaScript, SQL"
            className="w-full p-2 border rounded focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="developerTools"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Developer Tools
          </label>
          <input
            type="text"
            id="developerTools"
            name="developerTools"
            value={skillsData.developerTools}
            onChange={handleChange}
            placeholder="VS Code, Eclipse, Google Cloud Platform, Android Studio"
            className="w-full p-2 border rounded focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="technologiesFrameworks"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Technologies/Frameworks
          </label>
          <input
            type="text"
            id="technologiesFrameworks"
            name="technologiesFrameworks"
            value={skillsData.technologiesFrameworks}
            onChange={handleChange}
            placeholder="Linux, Jenkins, GitHub, JUnit, WordPress"
            className="w-full p-2 border rounded focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>
    </div>
  );
}

export default SkillsForm;
