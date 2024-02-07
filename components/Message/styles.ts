import { StyleSheet } from 'react-native';

import colors from '~components/Colors';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    borderRadius: 10,
    maxWidth: '75%',
    marginRight: 'auto',
  },
  text: {
    color: colors.white,
  },
  leftContainer: {
    backgroundColor: colors.badgebg,
    marginLeft: 10,
    marginRight: 'auto',
  },
  rightContainer: {
    backgroundColor: colors.graybg,
    marginLeft: 'auto',
    marginRight: 10,
  },
});

export default styles;
