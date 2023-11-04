import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface TlacitkoProps {
  title: string;
  onPress: () => void;
  color: string;
  textColor: string;
}

const TlacitkoBluetooth: React.FC<TlacitkoProps> = ({ title, onPress, color, textColor }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, { backgroundColor: color }]}>
      <Text style={[styles.buttonText, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const TlacitkoSoubory: React.FC<TlacitkoProps> = ({ title, onPress, color, textColor }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, { backgroundColor: color }]}>
      <Text style={[styles.buttonText, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    alignItems: 'center',
    marginTop: 0,
    marginBottom: 5,
  },
  buttonText: {
    fontSize: 16,
  },
});

export { TlacitkoBluetooth, TlacitkoSoubory };
