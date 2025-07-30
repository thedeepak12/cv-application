import React from 'react';
import emailIcon from '../assets/images/email.svg';
import phoneIcon from '../assets/images/phone.svg';
import linkedinIcon from '../assets/images/linkedin.svg';
import githubIcon from '../assets/images/github.svg';
import accountIcon from '../assets/images/account.svg';
import mapMarkerIcon from '../assets/images/map-marker.svg';

function GeneralInfoForm({ generalInfo, setGeneralInfo }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setGeneralInfo((prev) => ({ ...prev, [name]: value }));
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/[\s\-()]/g, ''));
  };

  const validateUrl = (url) => {
    if (!url) return true;
    const urlRegex = /^https?:\/\/.+/;
    return urlRegex.test(url);
  };

  const getFieldError = (name, value) => {
    switch (name) {
      case 'email':
        return value && !validateEmail(value)
          ? 'Please enter a valid email address'
          : '';
      case 'phone':
        return value && !validatePhone(value)
          ? 'Please enter a valid phone number'
          : '';
      case 'linkedin':
        return value && !validateUrl(value)
          ? 'Please enter a valid LinkedIn URL'
          : '';
      case 'github':
        return value && !validateUrl(value)
          ? 'Please enter a valid GitHub URL'
          : '';
      default:
        return '';
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
      <div className="flex items-center mb-6">
        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
          <img
            src={accountIcon}
            alt="Profile"
            className="w-5 h-5 text-blue-600"
          />
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-900">
            Personal Information
          </h2>
          <p className="text-sm text-gray-600">
            Fill in your basic contact details
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="md:col-span-2">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Full Name <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <img
                src={accountIcon}
                alt="Name"
                className="h-5 w-5 text-gray-400"
              />
            </div>
            <input
              type="text"
              name="name"
              value={generalInfo.name}
              onChange={handleChange}
              className={`block w-full pl-10 pr-3 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                !generalInfo.name
                  ? 'border-red-300 bg-red-50'
                  : 'border-gray-300'
              }`}
              placeholder="John Doe"
              required
            />
          </div>
          {!generalInfo.name && (
            <p className="mt-1 text-sm text-red-600">Name is required</p>
          )}
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Email Address <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <img
                src={emailIcon}
                alt="Email"
                className="h-5 w-5 text-gray-400"
              />
            </div>
            <input
              type="email"
              name="email"
              value={generalInfo.email}
              onChange={handleChange}
              className={`block w-full pl-10 pr-3 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                generalInfo.email && !validateEmail(generalInfo.email)
                  ? 'border-red-300 bg-red-50'
                  : 'border-gray-300'
              }`}
              placeholder="john.doe@example.com"
              required
            />
          </div>
          {getFieldError('email', generalInfo.email) && (
            <p className="mt-1 text-sm text-red-600">
              {getFieldError('email', generalInfo.email)}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Phone Number
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <img
                src={phoneIcon}
                alt="Phone"
                className="h-5 w-5 text-gray-400"
              />
            </div>
            <input
              type="tel"
              name="phone"
              value={generalInfo.phone}
              onChange={handleChange}
              className={`block w-full pl-10 pr-3 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                generalInfo.phone && !validatePhone(generalInfo.phone)
                  ? 'border-red-300 bg-red-50'
                  : 'border-gray-300'
              }`}
              placeholder="+1 (555) 123-4567"
            />
          </div>
          {getFieldError('phone', generalInfo.phone) && (
            <p className="mt-1 text-sm text-red-600">
              {getFieldError('phone', generalInfo.phone)}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Location
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <img
                src={mapMarkerIcon}
                alt="Location"
                className="h-5 w-5 text-gray-400"
              />
            </div>
            <input
              type="text"
              name="address"
              value={generalInfo.address}
              onChange={handleChange}
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="City, State, Country"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            LinkedIn Profile
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <img
                src={linkedinIcon}
                alt="LinkedIn"
                className="h-5 w-5 text-gray-400"
              />
            </div>
            <input
              type="url"
              name="linkedin"
              value={generalInfo.linkedin}
              onChange={handleChange}
              className={`block w-full pl-10 pr-3 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                generalInfo.linkedin && !validateUrl(generalInfo.linkedin)
                  ? 'border-red-300 bg-red-50'
                  : 'border-gray-300'
              }`}
              placeholder="https://linkedin.com/in/username"
            />
          </div>
          {getFieldError('linkedin', generalInfo.linkedin) && (
            <p className="mt-1 text-sm text-red-600">
              {getFieldError('linkedin', generalInfo.linkedin)}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            GitHub Profile
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <img
                src={githubIcon}
                alt="GitHub"
                className="h-5 w-5 text-gray-400"
              />
            </div>
            <input
              type="url"
              name="github"
              value={generalInfo.github}
              onChange={handleChange}
              className={`block w-full pl-10 pr-3 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                generalInfo.github && !validateUrl(generalInfo.github)
                  ? 'border-red-300 bg-red-50'
                  : 'border-gray-300'
              }`}
              placeholder="https://github.com/username"
            />
          </div>
          {getFieldError('github', generalInfo.github) && (
            <p className="mt-1 text-sm text-red-600">
              {getFieldError('github', generalInfo.github)}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default GeneralInfoForm;
