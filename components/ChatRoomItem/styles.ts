import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  badgeContainer: {
    backgroundColor: '#498be8',
    borderColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    // padding: 5,
    height: 10,
    width: 10,
    position: 'absolute',
  },
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
    flexDirection: 'row',
    margin: 10,
  },
  image: {
    borderRadius: 25,
    height: 50,
    width: 50,
  },
  rightContainer: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default styles;
