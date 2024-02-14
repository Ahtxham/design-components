/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {DropDown, HueSlider} from './src/components';
import {View} from 'react-native';

const App: React.FC = () => {
  const [color, setColor] = useState<string>();
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
      <DropDown options={options} defaultValue="Select Fruits" />
    </View>
  );
};

export default App;
