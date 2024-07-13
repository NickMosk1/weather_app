import React from 'react';
import MyChip from './MyChip/MyChip';

interface ChipData {
  label: string;
  value: string;
}

interface MyChipBarProps {
  selectedOption: string;
  setSelectedOption: (option: string) => void;
  chips: ChipData[];
}

const MyChipBar: React.FC<MyChipBarProps> = ({ selectedOption, setSelectedOption, chips }) => {

  const handleChipClick = (option: string) => {
    setSelectedOption(option);
  };

  return (

    <>

      {chips.map((chip) => (

        <MyChip

          key={chip.value}

          label={chip.label}

          selected={selectedOption === chip.value}

          clickable={true}

          onClick={() => handleChipClick(chip.value)}

        />

      ))}

    </>
    
  );

};

export default MyChipBar;