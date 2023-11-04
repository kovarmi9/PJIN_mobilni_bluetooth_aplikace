import React from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';

interface HlavickaProps {
  title: string;
  text: string;
  link: string;
}

const Hlavicka: React.FC<HlavickaProps> = ({ title, text, link }) => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>
          {text}
          <Text style={styles.link} onPress={() => Linking.openURL(link)}> Odkaz</Text>
        </Text>
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f8f8',
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
    color: 'blue',
  },
});

export default Hlavicka;
