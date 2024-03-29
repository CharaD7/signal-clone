import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 25,
    right: 15,
  },
  text: {
    flex: 1,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  icons: {
    flexDirection: 'row',
    width: 60,
    right: 15,
    justifyContent: 'space-between',
  },
});

export default styles;
