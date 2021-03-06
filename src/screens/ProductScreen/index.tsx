import React, {useState} from 'react';
import {ScrollView, Text} from 'react-native';
import styles from './styles';
import {Picker} from '@react-native-picker/picker';
import QuantitySelector from '../../components/QuantitySelector';
import Button from '../../components/Button';
import ImageCarousel from '../../components/ImageCarousel';

interface ProductItemProps {
  product: {
    id: string;
    title: string;
    description: string;
    image: string;
    images: [string];
    options: [string];
    avgRating: number;
    ratings: number;
    price: number;
    oldPrice?: number;
  };
}

const ProductScreen = ({product}: ProductItemProps) => {
  const [selectedOption, setSelectedOption] = useState(
    product.options ? product.options[0] : null,
  );
  const [quantity, setQuantity] = useState(1);
  return (
    <ScrollView style={styles.root}>
      <Text style={styles.title}>{product.title}</Text>
      {/*{image carousel}*/}
      <ImageCarousel images={product.images} />
      {/*{option selector}*/}
      <Picker
        selectedValue={selectedOption}
        onValueChange={itemValue => setSelectedOption(itemValue)}
        style={styles.optionSelector}>
        {product.options.map(option => (
          <Picker.Item label={option} value={option} />
        ))}
      </Picker>
      {/*{price}*/}
      <Text style={styles.price}>
        from ${product.price}
        {product.oldPrice && (
          <Text style={styles.oldPrice}>${product.oldPrice}</Text>
        )}
      </Text>
      {/*{description}*/}
      <Text style={styles.description}>{product.description}</Text>
      {/*{quantity selector}*/}
      <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
      {/*{buttons}*/}
      <Button
        text={'Add to cart'}
        onPress={() => {
          console.warn('Add to cart!');
        }}
      />
      <Button
        text={'Buy Now'}
        onPress={() => {
          console.warn('Buy Now!');
        }}
      />
    </ScrollView>
  );
};

export default ProductScreen;
