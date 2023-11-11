import React from 'react';
import { View, Text, StyleSheet, Linking, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

type HlavickaProps = {
  title: string;
  text: string;
  link: string;
}

const Hlavicka: React.FC<HlavickaProps> = ({ title, text, link }) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={[styles.container, {backgroundColor: isDarkMode ? Colors.darker : Colors.lighter}]}>
      <Text style={[styles.title, {color: isDarkMode ? Colors.white : Colors.black}]}>{title}</Text>
      <Text style={[styles.text, {color: isDarkMode ? Colors.white : Colors.black}]}>
        {text}
        <Text style={styles.link} onPress={() => Linking.openURL(link)}> Odkaz</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    paddingTop: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
    marginBottom: 5,
  },
  title: {
    fontSize: 20,
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
  },
  link: {
    color: 'skyblue',
  },
});

export default Hlavicka;

