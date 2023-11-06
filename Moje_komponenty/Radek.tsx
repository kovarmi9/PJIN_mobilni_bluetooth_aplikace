import React from 'react';
import { View, Text, StyleSheet, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

interface RadekProps {
  text: string;
}

const Radek: React.FC<RadekProps> = ({ text }) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? Colors.black : Colors.white }]}>
      <Text style={[styles.text, { color: isDarkMode ? Colors.white : Colors.black }]}>{text}</Text>
      <View style={styles.buttonsContainer}>
        {/* Tady budou tlačítka */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  text: {
    fontSize: 16,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
});

export default Radek;
