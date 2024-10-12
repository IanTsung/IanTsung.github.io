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
    title: 'PYTHON',
    color: '#05c770',
    icon: 'python-plain',
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
    <ul className="flex flex-wrap items-center justify-center w-full gap-y-36 gap-x-24 my-36 md:my-48">
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