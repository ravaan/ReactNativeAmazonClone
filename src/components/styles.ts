import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
  root: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#d1d1d1',
    borderRadius: 5,
    backgroundColor: '#fff',
    width: '100%',
    marginVertical: 4,
  },
  rightContainer: {
    padding: 10,
    flex: 3,
  },
  image: {
    height: 150,
    flex: 2,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 18,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  ratingIcon: {
    margin: 2,
  },
  ratingCounter: {
    fontSize: 12,
    marginLeft: 4,
  },
  oldPrice: {
    fontSize: 12,
    fontWeight: 'normal',
    textDecorationLine: 'line-through',
  },
});

export default styles;
