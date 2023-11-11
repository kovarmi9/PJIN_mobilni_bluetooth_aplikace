import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type TlacitkoProps = {
  title: string;
  onPress: () => void;
}

const MojeTlacitko: React.FC<TlacitkoProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginLeft: 10,
    padding: 5,
    backgroundColor: '#DDDDDD',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 15,
  },
});

export default MojeTlacitko;
