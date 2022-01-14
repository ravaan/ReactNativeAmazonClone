import React from 'react';
import {Text, View, Pressable} from 'react-native';
import styles from './style';

const QuantitySelector = ({quantity, setQuantity}) => {
  const onMinus = () => {
    setQuantity(Math.max(0, quantity - 1));
  };
  const onPlus = () => {
    setQuantity(quantity + 1);
  };
  return (
    <View style={styles.root}>
      <Pressable style={styles.button} onPress={onMinus}>
        <Text style={styles.buttonText}>-</Text>
      </Pressable>
      <Text style={styles.quantity}>{quantity}</Text>
      <Pressable style={styles.button} onPress={onPlus}>
        <Text style={styles.buttonText}>+</Text>
      </Pressable>
    </View>
  );
};
export default QuantitySelector;
