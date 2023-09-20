import React, { useState, useRef, useEffect } from 'react';
import { Options, OptionContainer, ToggleContainer, Option, ToggleWrapper } from './styles';

const ActionToggle = ({ optionsList, onOptionClick }) => {
  const [open, setOpen] = useState(false);

  const Opt = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (Opt.current && !Opt.current?.contains(e.target)) {
        setOpen(false);
      } else {
      }
    };

    document.addEventListener('click', handleClickOutside, true);

    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  const handleOptionClick = (item) => {
    onOptionClick(item);
    setOpen(false);
  };

  const active = open && 'active';

  const optionElements = [];

  for (let i = 0; i < 3; i++) {
    optionElements.push(<Option key={i} />);
  }

  return (
    <ToggleWrapper>
      <ToggleContainer ref={Opt} onClick={() => setOpen(true)}>
        {optionElements}
      </ToggleContainer>
      <OptionContainer isActive={open} height={optionsList?.length * 40} active={active}>
        {optionsList?.map((item, i) => {
          return (
            <Options value={item.value} onClick={() => handleOptionClick(item)} key={i}>
              {item.label}
            </Options>
          );
        })}
      </OptionContainer>
    </ToggleWrapper>
  );
};

export default ActionToggle;
