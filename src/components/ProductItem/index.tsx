import React from 'react';
import {Text, View, Image} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from '../styles';

interface ProductItemProps {
  item: {
    id: string;
    title: string;
    image: string;
    avgRating: number;
    ratings: number;
    price: number;
    oldPrice?: number;
  };
}

const ProductItem = ({item}: ProductItemProps) => {
  return (
    <View style={styles.root}>
      <Image
        style={styles.image}
        source={{
          uri: item.image,
        }}
      />
      <View style={styles.rightContainer}>
        <Text style={styles.title} numberOfLines={3}>
          {item.title}
        </Text>
        {/*{Rating component}*/}
        <View style={styles.ratingContainer}>
          {[0, 0, 0, 0, 0].map((_, idx) => (
            <FontAwesome
              key={`${item.id}-${idx}`}
              style={styles.ratingIcon}
              name={
                idx < Math.floor(item.avgRating)
                  ? 'star'
                  : item.avgRating % 1 <= 0.25
                  ? 'star-o'
                  : item.avgRating % 1 > 0.75
                  ? 'star'
                  : 'star-half-empty'
              }
              size={18}
              color={'#e47911'}
            />
          ))}
          <Text style={styles.ratingCounter}>{item.ratings}</Text>
        </View>
        <Text style={styles.price}>
          from ${item.price}
          {item.oldPrice && (
            <Text style={styles.oldPrice}>${item.oldPrice}</Text>
          )}
        </Text>
      </View>
    </View>
  );
};

export default ProductItem;
