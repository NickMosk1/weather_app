import React from 'react';

import { styled } from '@mui/material/styles';

import Chip from '@mui/material/Chip';

interface MyCityPageChipProps {

  label: string;

  selected: boolean;

  clickable: boolean;

  onClick: () => void;

}

const MyCityPageChipStyled = styled(({ label, selected, clickable, onClick, ...other }: MyCityPageChipProps) => (

  <Chip {...other} label={label} clickable={clickable} onClick={onClick} />

))(({ selected }) => ({

  backgroundColor: selected ? '#007bff' : '#fff',
  color: selected ? '#fff' : '#333',
  fontWeight: '100',
  fontSize: '125%',
  width: 'fit-content',
  textAlign: 'center',
  margin: '15px',
  padding: '10px',
  height: 'fit-content',

}));

const MyCityPageChip: React.FC<MyCityPageChipProps> = (props) => {

  return <MyCityPageChipStyled {...props} />;

};

export default MyCityPageChip;