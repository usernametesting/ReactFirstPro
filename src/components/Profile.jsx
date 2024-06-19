import React from 'react';

const Profile = ({user}) => {

 
  const { fullName, phone, email, city, experience, skills, photo } = user;

  return (
    <div className="profile">
      <img src={photo} alt={`${fullName}'s photo`} />
      <h1>{fullName}</h1>
      <p>Phone: {phone}</p>
      <p>Email: {email}</p>
      <p>City: {city}</p>

      <div className="experience">
        <h2>Work Experience</h2>
        <ul>
          {experience.map((job) => (
            <li key={job.id}>
              <h3>{job.company}</h3>
              <p>{job.role}</p>
              <p>{job.years}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="skills">
        <h2>Skills</h2>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
