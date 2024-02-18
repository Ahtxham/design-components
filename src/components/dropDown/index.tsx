/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {
  useState,
  useRef,
  useEffect,
  useMemo,
  useCallback,
  ReactNode,
} from 'react';
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
  Pressable,
} from 'react-native';
import styles from './styles';
import Arrow from '../../assets/arrow.png';
import Close from '../../assets/close.png';

interface DropDownPropTypes {
  options: {name: string}[];
  isSearchAble?: boolean;
  searchInputPlaceholder?: string;
  inputStyles?: object;
  itemStyle?: object;
  searchInputStyles?: object;
  dropDownStyle?: object;
  selectedTextColor?: string;
  searchInputPlaceholderColor?: string;
  maxHeight?: number;
  onSelect: (val: string) => void | undefined;
  value: string;
  rowRenderer?: (item: {name: string}, index: number) => React.ReactNode;
  ArrowIcon?: ReactNode | any;
  CloseIcon?: ReactNode | any;
}

const DropDown: React.FC<DropDownPropTypes> = React.memo(
  ({
    options,
    isSearchAble,
    value,
    searchInputPlaceholder,
    inputStyles,
    itemStyle,
    searchInputStyles,
    dropDownStyle,
    searchInputPlaceholderColor,
    maxHeight,
    onSelect,
    rowRenderer,
    selectedTextColor,
    ArrowIcon,
    CloseIcon,
  }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [search, setSearch] = useState<string>('');
    const [modalTopPostion, setModalTopPosition] = useState<number>(0);
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
        duration: 300,
        useNativeDriver: false,
      });

      if (isSearchAble && !searchInputPlaceholder) {
        console.warn('Search Input Placeholder is required');
      }

      const heightAnimation = Animated.timing(modalHeight, {
        toValue: isOpen ? (maxHeight || !isSearchAble ? 200 : 250) : 0,
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
      onSelect(item?.name);
      setIsOpen(false);
    }, []);

    const handleInputLayout = useCallback(() => {
      if (dropdownRef.current) {
        dropdownRef.current.measure((...params: any[]) => {
          setModalTopPosition(params[5] - 2 + (!isSearchAble ? params[3] : 0));
        });
      }
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
            <Text style={{color: selectedTextColor || '#b3b3b3'}}>{value}</Text>
          </View>
          <Animated.View
            style={{
              transform: [{rotate: arrowTransform}],
            }}>
            {ArrowIcon ? (
              ArrowIcon
            ) : (
              <Image source={Arrow} style={styles.arrow} />
            )}
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
                      onChangeText={text => setSearch(text)}
                    />
                    {search ? (
                      <TouchableOpacity onPress={() => setSearch('')}>
                        {CloseIcon ? (
                          CloseIcon
                        ) : (
                          <Image source={Close} style={styles.closeImage} />
                        )}
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
                  renderItem={({item, index}) =>
                    !rowRenderer ? (
                      <Pressable onPress={() => handleItemClick(item)}>
                        <Text
                          style={{
                            ...styles.optionItems,
                            ...itemStyle,
                            borderBottomWidth:
                              index === ItemList.length - 1 ? 0 : 1,
                          }}>
                          {item.name}
                        </Text>
                      </Pressable>
                    ) : (
                      rowRenderer({item, index})
                    )
                  }
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
