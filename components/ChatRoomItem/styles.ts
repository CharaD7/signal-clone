import { StyleSheet } from 'react-native';

import colors from '../Colors';

const styles = StyleSheet.create({
  badgeContainer: {
    alignItems: 'center',
    backgroundColor: colors.badgebg,
    borderColor: colors.white,
    borderRadius: 7.5,
    borderWidth: 1,
    height: 15,
    justifyContent: 'center',
    left: 35,
    top: 2,
    position: 'absolute',
    width: 15,
  },
  badgeText: {
    color: colors.white,
    fontSize: 12,
    fontWeight: 'bold',
    position: 'absolute',
  },
  container: {
    backgroundColor: colors.graybg,
    flexDirection: 'row',
    margin: 8,
  },
  image: {
    borderRadius: 25,
    height: 50,
    width: 50,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  rightContainer: {
    flex: 1,
    margin: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: colors.grayText,
  },
});

export default styles;
