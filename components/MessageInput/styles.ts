import { StyleSheet } from 'react-native';

import colors from '~components/Colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
  },
  icon: {
    marginHorizontal: 3,
  },
  input: {
    flex: 1,
    marginHorizontal: 3,
  },
  inputContainer: {
    backgroundColor: colors.grayInput,
    flex: 1,
    marginRight: 10,
    borderWidth: 1,
    borderColor: colors.grayBorder,
    borderRadius: 25,
    alignItems: 'center',
    flexDirection: 'row',
    padding: 5,
  },
  buttonContainer: {
    width: 45,
    height: 45,
    backgroundColor: colors.badgebg,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
