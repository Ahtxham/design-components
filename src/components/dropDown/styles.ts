import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  inputWrapper: {
    width: '90%',
    borderWidth: 1.7,
    borderColor: '#DFDFDE',
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginTop: 12,
  },
  input: {
    paddingVertical: 15,
    color: '#444',
  },
  optionContainer: {
    width: '90%',
    overflow: 'hidden',
    borderWidth: 1.7,
    borderColor: '#DFDFDE',
    backgroundColor: '#F5F5F5',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    position: 'absolute',
  },
  optionItems: {
    color: '#444',
    paddingVertical: 15,
    borderBottomColor: '#DFDFDE',
    marginLeft: 10,
    paddingHorizontal: 10,
  },
  arrow: {
    width: 16,
    height: 16,
  },
  modal: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  searchInput: {
    width: '100%',
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    color: '#444',
    borderBottomWidth: 1.7,
    borderBottomColor: '#DFDFDE',
    alignSelf: 'center',
    paddingRight: 23,
    paddingLeft: 20,
    marginBottom: 8,
  },
  closeImage: {
    width: 16,
    height: 16,
  },
});

export default styles;
