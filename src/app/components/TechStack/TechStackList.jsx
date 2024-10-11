import React from 'react';
import TechStackButton from './TechStackButton'; // Import the button component

const buttonData = [
  {
    title: 'ADMIN',
    color: '#ef436b',
    icon: 'laptop-outline',
  },
  {
    title: 'WILO',
    color: '#ffce5c',
    icon: 'logo-python',
  },
  {
    title: 'PRO',
    color: '#05c770',
    icon: 'logo-javascript',
  },
];

const TechStackList = () => {
  return (
    <ul className="flex flex-col md:flex-row items-center justify-between w-full mt-24">
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