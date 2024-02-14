/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Slider from 'react-native-slider';
import LinearGradient from 'react-native-linear-gradient';

interface HueSliderProps {
  defaultValue?: string;
  onChange: (hue: string) => void;
}

const getHueColors = () => {
  const colorCount = 360;
  let hueColorsList: any = [];
  let hueObject: any = {};
  for (let index = 0; index < colorCount; index++) {
    hueColorsList.push(`hsl(${index}, 100%, 50%)`);
    hueObject = {...hueObject, [`hsl(${index}, 100%, 50%)`]: index};
  }
  return {hueColorsList, hueObject};
};

const HueSlider: React.FC<HueSliderProps> = ({defaultValue, onChange}) => {
  const {hueColorsList, hueObject} = getHueColors();
  const [selectedHue, setSelectedHue] = useState(
    hueObject[defaultValue || 0] || 0,
  );

  return (
    <View style={styles.container}>
      <Slider
        style={styles.slider}
        value={selectedHue}
        minimumValue={0}
        maximumValue={359}
        step={4}
        onValueChange={(value: number) => {
          setSelectedHue(value);
          onChange(`${hueColorsList[selectedHue]}`);
        }}
        thumbTintColor={`hsl(${selectedHue}, 100%, 50%)`}
        thumbStyle={styles.thumbStyles}
        minimumTrackTintColor="transparent"
        maximumTrackTintColor="transparent"
      />
      <LinearGradient
        style={styles.gradient}
        colors={hueColorsList}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 0.5}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradient: {
    height: 18,
    width: 300,
    borderRadius: 100,
  },
  slider: {
    width: 300,
    height: 30,
    position: 'absolute',
    zIndex: 1,
  },
  thumbStyles: {
    width: 35,
    height: 35,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: '#00000050',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
});

export default HueSlider;
