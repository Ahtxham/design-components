import React, {useState} from 'react';
import HueSlider from './src/components/hue-slider';
import {View} from 'react-native';

const App: React.FC = () => {
  const [color, setColor] = useState<string>();
  const handleHueChange = (col: string) => {
    setColor(col);
  };

  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: color,
      }}>
      <HueSlider onChange={handleHueChange} />
    </View>
  );
};

export default App;
