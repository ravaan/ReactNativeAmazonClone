import React from 'react';
import {Text, Pressable} from 'react-native';
import styles from './styles';

interface ButtonProps {
  text: string;
  onPress: () => {};
}

const Button = ({text, onPress}: ButtonProps) => {
  return (
    <Pressable onPress={onPress} style={styles.root}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default Button;
