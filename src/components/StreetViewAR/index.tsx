import React, { useState } from 'react';
import VR from './VR';
import { TbAugmentedReality } from 'react-icons/tb';
const StreetViewAR = () => {
  const [active, setActive] = useState(false);
  return (
    <>
      <button
        onClick={() => {
          setActive(!active);
        }}
        style={{fontSize: "1.5em"}}
      >
      <TbAugmentedReality />
      </button>
      {active ? <VR /> : ''}
    </>
  );
};

export default StreetViewAR;
