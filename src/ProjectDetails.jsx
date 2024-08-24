import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
  const { projectId } = useParams();
  
  return (
    <div>
      <h1>Project Details</h1>
      <p>Details for project: {projectId}</p>
    </div>
  );
};

export default ProjectDetails;
