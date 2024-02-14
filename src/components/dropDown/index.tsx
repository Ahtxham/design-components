/* eslint-disable react-native/no-inline-styles */
import React, {useState, useRef, useEffect, useMemo, useCallback} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  Animated,
  Modal,
  Easing,
} from 'react-native';
import styles from './styles';
import Arrow from '../../assets/arrow.png';
import Close from '../../assets/close.png';

interface DropDownPropTypes {
  options: {name: string}[];
  isSearchAble?: boolean;
  defaultValue: string | undefined;
  searchInputPlaceholder?: string;
  inputStyles?: object;
  itemStyle?: object;
  searchInputStyles?: object;
  dropDownStyle?: object;
  selectedTextColor?: string;
  searchInputPlaceholderColor?: string;
  maxHeight?: number;
}

const DropDown: React.FC<DropDownPropTypes> = React.memo(
  ({
    options,
    isSearchAble,
    defaultValue,
    searchInputPlaceholder,
    inputStyles,
    itemStyle,
    searchInputStyles,
    dropDownStyle,
    searchInputPlaceholderColor,
    maxHeight,
    selectedTextColor,
  }) => {
    const [selectedItem, setselectedItem] = useState<string | undefined>(
      defaultValue,
    );
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [search, setSearch] = useState<string>('');
    const [isFocus, setIsFocus] = useState<boolean>(false);
    const [modalTopPostion, setModalTopPosition] = useState(0);
    const modalHeight = useRef(new Animated.Value(0)).current;
    const arrowRotation = useRef(new Animated.Value(0)).current;
    const dropdownRef = useRef<TouchableOpacity | null>(null);

    const ItemList = useMemo(
      () =>
        options?.filter(a =>
          a?.name.toLowerCase().includes(search.toLowerCase()),
        ),
      [options, search],
    );

    useEffect(() => {
      const rotateAnimation = Animated.timing(arrowRotation, {
        toValue: isOpen ? 1 : 0,
        duration: 200,
        useNativeDriver: false,
      });

      const heightAnimation = Animated.timing(modalHeight, {
        toValue: isOpen ? maxHeight || 180 : 0,
        duration: 300,
        useNativeDriver: false,
        easing: isOpen
          ? Easing.bezier(0.42, 0, 1, 1)
          : Easing.bezier(0, 0, 0.58, 1),
      });

      Animated.parallel([rotateAnimation, heightAnimation]).start();
    }, [isOpen, arrowRotation, modalHeight, maxHeight]);

    const arrowTransform = arrowRotation.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '180deg'],
    });

    const handleItemClick = useCallback((item: {name: string}) => {
      setselectedItem(() => item.name);
      setIsOpen(false);
    }, []);

    const handleInputLayout = useCallback(() => {
      if (dropdownRef.current) {
        dropdownRef.current.measure((...params: any[]) => {
          setModalTopPosition(params[5] - 2 + (!isSearchAble ? params[3] : 0));
        });
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleDropdownPress = () => {
      setIsOpen(!isOpen);
      handleInputLayout();
    };

    return (
      <View>
        <TouchableOpacity
          ref={dropdownRef}
          activeOpacity={1}
          style={{
            ...styles.inputWrapper,
            ...inputStyles,
            borderBottomWidth: isOpen ? 0 : 2,
            borderBottomLeftRadius: isOpen ? 0 : 6,
            borderBottomRightRadius: isOpen ? 0 : 6,
          }}
          onPress={handleDropdownPress}>
          <View style={styles.input}>
            <Text style={{color: selectedTextColor}}>{selectedItem}</Text>
          </View>
          <Animated.View
            style={{
              transform: [{rotate: arrowTransform}],
            }}>
            <Image source={Arrow} style={styles.arrow} />
          </Animated.View>
        </TouchableOpacity>
        {isOpen && (
          <Modal
            transparent={true}
            onRequestClose={() => setIsOpen(false)}
            visible={isOpen}>
            <TouchableOpacity
              onPress={() => setIsOpen(false)}
              style={styles.modal}
              activeOpacity={1}>
              <Animated.View
                style={{
                  ...styles.optionContainer,
                  ...dropDownStyle,
                  borderRadius: isSearchAble ? 6 : 0,
                  top: modalTopPostion,
                  height: modalHeight,
                }}>
                {isSearchAble && (
                  <View
                    style={{
                      ...styles.searchInputContainer,
                      backgroundColor: isFocus ? '#fff' : '#F5F5F5',
                    }}>
                    <TextInput
                      style={{
                        ...styles.searchInput,
                        ...searchInputStyles,
                      }}
                      placeholder={searchInputPlaceholder}
                      placeholderTextColor={searchInputPlaceholderColor}
                      cursorColor={'#444'}
                      value={search}
                      onChangeText={value => setSearch(value)}
                      onFocus={() => setIsFocus(true)}
                      onBlur={() => setIsFocus(false)}
                    />
                    {search ? (
                      <TouchableOpacity onPress={() => setSearch('')}>
                        <Image source={Close} style={styles.closeImage} />
                      </TouchableOpacity>
                    ) : (
                      <Animated.View
                        style={{
                          transform: [{rotate: arrowTransform}],
                        }}>
                        <Image source={Arrow} style={styles.arrow} />
                      </Animated.View>
                    )}
                  </View>
                )}
                <FlatList
                  data={ItemList}
                  keyExtractor={(_, index) => index.toString()}
                  showsVerticalScrollIndicator={false}
                  renderItem={({item, index}) => (
                    <TouchableOpacity onPress={() => handleItemClick(item)}>
                      <Text
                        style={{
                          ...styles.optionItems,
                          ...itemStyle,
                          borderBottomWidth:
                            index === ItemList.length - 1 ? 0 : 1,
                        }}>
                        {item.name}
                      </Text>
                    </TouchableOpacity>
                  )}
                />
              </Animated.View>
            </TouchableOpacity>
          </Modal>
        )}
      </View>
    );
  },
);

export default DropDown;
