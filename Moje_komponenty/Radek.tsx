import React from 'react';
import { View, Text, StyleSheet, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Tlacitka_u_radku from './Tlacitka_u_radku';

interface RadekProps {
  nazev: string;
  datum: string;

}

const Radek: React.FC<RadekProps> = ({ nazev, datum }) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? Colors.black : Colors.white }]}>
      <Text style={[styles.nazev, { color: isDarkMode ? Colors.white : Colors.black }]}>{nazev}</Text>
      <Text style={[styles.datum, { color: isDarkMode ? Colors.light : Colors.dark }]}>{datum}</Text>
      <View style={styles.buttonsContainer}>
        <Tlacitka_u_radku title="👁️" onPress={() => console.log('Tlačítko 1 bylo stisknuto.')} />
        <Tlacitka_u_radku title="⬇️" onPress={() => console.log('Tlačítko 2 bylo stisknuto.')} />
        <Tlacitka_u_radku title="🔄" onPress={() => console.log('Tlačítko 3 bylo stisknuto.')} />
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
  nazev: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  datum: {
    fontSize: 12,
    alignSelf: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
});

export default Radek;
