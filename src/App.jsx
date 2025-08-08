import { useState } from 'react';
import './App.css';
import GeneralInfoForm from './components/GeneralInfoForm';
import EducationForm from './components/EducationForm';
import ExperienceForm from './components/ExperienceForm';
import ProjectsForm from './components/ProjectsForm';
import SkillsForm from './components/SkillsForm';
import emailIcon from './assets/images/email.svg';
import phoneIcon from './assets/images/phone.svg';
import linkedinIcon from './assets/images/linkedin.svg';
import githubIcon from './assets/images/github.svg';
import openInNewIcon from './assets/images/open-in-new.svg';

function App() {
  const [mode, setMode] = useState('edit');
  const [generalInfo, setGeneralInfo] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
    linkedin: '',
    github: '',
  });
  const [education, setEducation] = useState([
    {
      institution: '',
      degree: '',
      startDate: '',
      endDate: '',
      description: '',
    },
  ]);

  const [experience, setExperience] = useState([
    {
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      location: '',
      description: '',
    },
  ]);

  const [projects, setProjects] = useState([
    {
      title: '',
      technologies: '',
      description: '',
      github: '',
      liveLink: '',
    },
  ]);

  const [skills, setSkills] = useState({
    languages: '',
    developerTools: '',
    technologiesFrameworks: '',
  });

  const handleSubmit = () => {
    if (!generalInfo.name || !generalInfo.email) {
      alert('Please fill in required fields: Name and Email');
      return;
    }
    setMode('preview');
  };

  const handleEdit = () => {
    setMode('edit');
  };

  const handlePrint = () => {
    window.print();
  };

  const renderContactInfo = () => {
    const contactItems = [];

    if (generalInfo.phone) {
      contactItems.push(
        <span key="phone" className="inline-flex items-center mr-4">
          <img src={phoneIcon} alt="Phone" className="w-4 h-4 mr-1" />
          <a
            href={`tel:${generalInfo.phone}`}
            className="hover:text-blue-600 transition-colors"
          >
            {generalInfo.phone}
          </a>
        </span>
      );
    }

    if (generalInfo.email) {
      contactItems.push(
        <span key="email" className="inline-flex items-center mr-4">
          <img src={emailIcon} alt="Email" className="w-4 h-4 mr-1" />
          <a
            href={`mailto:${generalInfo.email}`}
            className="hover:text-blue-600 transition-colors underline"
          >
            {generalInfo.email}
          </a>
        </span>
      );
    }

    if (generalInfo.linkedin) {
      contactItems.push(
        <span key="linkedin" className="inline-flex items-center mr-4">
          <img src={linkedinIcon} alt="LinkedIn" className="w-4 h-4 mr-1" />
          <a
            href={
              generalInfo.linkedin.startsWith('http')
                ? generalInfo.linkedin
                : `https://${generalInfo.linkedin}`
            }
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors underline"
          >
            {generalInfo.linkedin.replace(/^https?:\/\//, '')}
          </a>
        </span>
      );
    }

    if (generalInfo.github) {
      contactItems.push(
        <span key="github" className="inline-flex items-center mr-4">
          <img src={githubIcon} alt="GitHub" className="w-4 h-4 mr-1" />
          <a
            href={
              generalInfo.github.startsWith('http')
                ? generalInfo.github
                : `https://${generalInfo.github}`
            }
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors underline"
          >
            {generalInfo.github.replace(/^https?:\/\//, '')}
          </a>
        </span>
      );
    }

    return contactItems.length > 0 ? contactItems : null;
  };

  const capitalizeName = (name) => {
    if (!name) return 'FIRST LAST';
    return name.toUpperCase();
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <h1 className="text-3xl font-bold text-center text-gray-900">
            CV Application
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-6">
        {mode === 'edit' ? (
          <div className="space-y-6">
            <GeneralInfoForm
              generalInfo={generalInfo}
              setGeneralInfo={setGeneralInfo}
            />
            <EducationForm education={education} setEducation={setEducation} />
            <ExperienceForm
              experience={experience}
              setExperience={setExperience}
            />
            <ProjectsForm projects={projects} setProjects={setProjects} />
            <SkillsForm skills={skills} setSkills={setSkills} />
            <button
              type="button"
              onClick={handleSubmit}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition cursor-pointer"
            >
              Submit
            </button>
          </div>
        ) : (
          <div className="space-y-8">
            <div id="cv-preview" className="bg-white p-8">
              <div className="text-center text-4xl pb-6 mb-1">
                <span
                  style={{
                    fontSize: 'calc(var(--total-scale-factor) * 72px)',
                    fontWeight: '500',
                    fontFamily: 'Cinzel, serif',
                    display: 'block',
                    marginBottom: '2px',
                  }}
                  role="presentation"
                  dir="ltr"
                >
                  {capitalizeName(generalInfo.name)}
                </span>

                {generalInfo.address && (
                  <p className="text-black text-sm mb-1">
                    {generalInfo.address}
                  </p>
                )}
                <div className="flex justify-center items-center text-sm text-black space-x-4">
                  {renderContactInfo()}
                </div>
              </div>

              {education.some((edu) => edu.degree || edu.institution) && (
                <div className="-mt-2">
                  <h2 className="text-xl font-bold text-black mb-1 border-b-[1.4px] border-black pb-1">
                    Education
                  </h2>
                  <div className="space-y-1">
                    {education.map(
                      (edu, index) =>
                        (edu.degree || edu.institution) && (
                          <div key={`education-${index}`} className="mb-2">
                            <div className="flex justify-between items-start mb-1">
                              <h3 className="text-lg font-semibold text-black">
                                {edu.institution}
                              </h3>
                              <span className="text-sm text-black">
                                {edu.startDate &&
                                  edu.endDate &&
                                  `${edu.startDate} - ${edu.endDate}`}
                              </span>
                            </div>
                            <p className="text-black font-medium mb-1">
                              {edu.degree}
                            </p>
                            {edu.description && (
                              <p className="text-black text-sm whitespace-pre-line pl-4">
                                {edu.description}
                              </p>
                            )}
                          </div>
                        )
                    )}
                  </div>
                </div>
              )}

              {experience.some((exp) => exp.company || exp.position) && (
                <div className="mt-6">
                  <h2 className="text-xl font-bold text-black mb-1 border-b-[1.4px] border-black pb-1">
                    Experience
                  </h2>
                  <div className="space-y-1">
                    {experience.map(
                      (exp, index) =>
                        (exp.company || exp.position) && (
                          <div key={`experience-${index}`} className="mb-2">
                            <div className="flex justify-between items-start mb-1">
                              <h3 className="text-lg font-semibold text-black">
                                {exp.company}
                              </h3>
                              <span className="text-sm text-black">
                                {exp.startDate &&
                                  exp.endDate &&
                                  `${exp.startDate} - ${exp.endDate}`}
                              </span>
                            </div>
                            <div className="flex justify-between items-start">
                              <p className="text-black font-medium mb-1">
                                {exp.position}
                              </p>
                              {exp.location && (
                                <span className="text-sm text-black">
                                  {exp.location}
                                </span>
                              )}
                            </div>
                            {exp.description && (
                              <p className="text-black text-sm whitespace-pre-line pl-4">
                                {exp.description}
                              </p>
                            )}
                          </div>
                        )
                    )}
                  </div>
                </div>
              )}

              {projects.some(
                (project) => project.title || project.technologies
              ) && (
                <div className="mt-6">
                  <h2 className="text-xl font-bold text-black mb-1 border-b-[1.4px] border-black pb-1">
                    Projects
                  </h2>
                  <div className="space-y-1">
                    {projects.map(
                      (project, index) =>
                        (project.title || project.technologies) && (
                          <div key={`project-${index}`} className="mb-2">
                            <div className="flex justify-between items-center mb-1">
                              <h3 className="text-lg font-semibold text-black">
                                {project.title}{' '}
                                {project.technologies && (
                                  <span className="font-normal">
                                    {' '}
                                    | {project.technologies}
                                  </span>
                                )}
                              </h3>
                              <div className="flex items-center">
                                {project.github && (
                                  <a
                                    href={
                                      project.github.startsWith('http')
                                        ? project.github
                                        : `https://${project.github}`
                                    }
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="ml-2 inline-flex items-center text-black transition-colors"
                                  >
                                    <img
                                      src={githubIcon}
                                      alt="GitHub"
                                      className="w-4 h-4 mr-1"
                                    />
                                  </a>
                                )}
                                {project.liveLink && (
                                  <a
                                    href={
                                      project.liveLink.startsWith('http')
                                        ? project.liveLink
                                        : `https://${project.liveLink}`
                                    }
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="ml-2 inline-flex items-center text-black transition-colors"
                                  >
                                    <img
                                      src={openInNewIcon}
                                      alt="Live Link"
                                      className="w-4 h-4"
                                    />
                                  </a>
                                )}
                              </div>
                            </div>
                            {project.description && (
                              <p className="text-black text-sm whitespace-pre-line pl-4">
                                {project.description}
                              </p>
                            )}
                          </div>
                        )
                    )}
                  </div>
                </div>
              )}

              {(skills.languages ||
                skills.developerTools ||
                skills.technologiesFrameworks) && (
                <div className="mt-6">
                  <h2 className="text-xl font-bold text-black mb-1 border-b-[1.4px] border-black pb-1">
                    Technical Skills
                  </h2>
                  <div className="space-y-1 mt-2">
                    {skills.languages && (
                      <div className="mb-2">
                        <span className="font-semibold text-black">
                          Languages:
                        </span>{' '}
                        {skills.languages}
                      </div>
                    )}
                    {skills.developerTools && (
                      <div className="mb-2">
                        <span className="font-semibold text-black">
                          Developer Tools:
                        </span>{' '}
                        {skills.developerTools}
                      </div>
                    )}
                    {skills.technologiesFrameworks && (
                      <div className="mb-2">
                        <span className="font-semibold text-black">
                          Technologies/Frameworks:
                        </span>{' '}
                        {skills.technologiesFrameworks}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            <div className="flex flex-col gap-4">
              <button
                type="button"
                onClick={handleEdit}
                className="w-full bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700 transition"
              >
                Edit
              </button>
              <button
                type="button"
                onClick={handlePrint}
                className="print-button w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition"
              >
                Print CV
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
