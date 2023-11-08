import React from 'react';
import { TouchableOpacity, Text, StyleSheet, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

interface TlacitkoProps {
  title: string;
  onPress: () => void;
}

const TlacitkoBluetooth: React.FC<TlacitkoProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, { backgroundColor: 'blue' }]}>
      <Text style={[styles.buttonText, { color: 'white' }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const TlacitkoSoubory: React.FC<TlacitkoProps> = ({ title, onPress }) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, { backgroundColor: isDarkMode ? Colors.darker : Colors.white }]}>
      <Text style={[styles.buttonText, { color: isDarkMode ? Colors.white : Colors.black }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    alignItems: 'center',
    marginTop: 0,
    marginBottom: 5,
    borderRadius: 25, // Toto zaoblení rohů
  },
  buttonText: {
    fontSize: 16,
  },
});

export { TlacitkoBluetooth, TlacitkoSoubory };

