import React from 'react';
import TechStackButton from './TechStackButton'; // Import the button component

const buttonData = [
  {
    title: 'HTML',
    color: '#ef436b',
    icon: 'html5-plain',
  },
  {
    title: 'CSS',
    color: '#ffce5c',
    icon: 'css3-plain',
  },
  {
    title: 'JAVASCRIPT',
    color: '#05c770',
    icon: 'javascript-plain',
  },
  {
    title: 'TypeScript',
    color: '#3178c6',
    icon: 'typescript-plain',
  },
  {
    title: 'AWS',
    color: '#ff9900',
    icon: 'amazonwebservices-plain-wordmark',
  }
];

const TechStackList = () => {
  return (
    <ul className="flex flex-col md:flex-row items-center justify-between w-full my-48">
      {buttonData.map((button, index) => (
        <TechStackButton
          key={index}
          title={button.title}
          color={button.color}
          icon={button.icon}
          link={button.link}
        />
      ))}
    </ul>
  );
};

export default TechStackList;