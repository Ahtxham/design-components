/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import HueSlider from './src/components/hue-slider';
import DropDown from './src/components/dropDown';
import {View} from 'react-native';

const App: React.FC = () => {
  const [color, setColor] = useState<string>('');
  const [value, setValue] = useState<string>('Select Fruits');

  const handleHueChange = (col: string) => {
    setColor(col);
  };
  const options = [
    {name: 'Apple'},
    {name: 'Grapes'},
    {name: 'PomeGrante'},
    {name: 'banana'},
    {name: 'Orange'},
    {name: 'Dates'},
  ];

  const handleSelectChange = (value: string) => {
    setValue(value);
  };

  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        gap: 30,
        flex: 1,
        backgroundColor: color,
      }}>
      <HueSlider onChange={handleHueChange} />
      <DropDown options={options} value={value} onSelect={handleSelectChange} />
    </View>
  );
};

export default App;
