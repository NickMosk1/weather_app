import React from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';

interface MyChipProps {
  label: string;
  selected: boolean;
  clickable: boolean;
  onClick: () => void;
}

const MyChipStyled = styled(({ label, selected, clickable, onClick, ...other }: MyChipProps) => (
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

const MyChip: React.FC<MyChipProps> = (props) => {
  return <MyChipStyled {...props} />;
};

export default MyChip;