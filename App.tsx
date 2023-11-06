// import knihoven 
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// import ikon z: npm install react-native-vector-icons
// dále je třeba dát do terminálu: npm install --save-dev @types/react-native-vector-icons
import Icon from 'react-native-vector-icons/FontAwesome';

// import mých vlastních komponent
import Hlavicka from './Moje_komponenty/Hlavicka';
import { TlacitkoBluetooth, TlacitkoSoubory } from './Moje_komponenty/Tlacitka';
import Radek from './Moje_komponenty/Radek';

// Definice typu pro vlastnosti komponenty Section
type SectionProps = PropsWithChildren<{
  title: string;
}>;

// Tvorba komponenty section pro sekci s nadpisem a textem
function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

// hlavní komponenta aplikace
function App(): JSX.Element {

  // v případě že je mobil v tmavém režimu použije tmavé barevné schéma 
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.black : Colors.lighter,
  };
  

  //nastavení toho co komponenta pro tlačítko

  const handleBluetoothPress = () => {
    // Zatím nic nedělá.
    console.log('Tlačítko Bluetooth bylo stisknuto.');
  };

  const handleSouboryPress = () => {
    // Zatím nic nedělá.
    console.log('Tlačítko Soubory bylo stisknuto.');
  };

  // věci co vraci hlavní komponenta
  return (
    // obsah uvnitř SafeAreaView bere ohledy na notch
    <SafeAreaView style={backgroundStyle}>
      
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      {/*<Header />*/}
      <Hlavicka 
      title="
      Aplikace pro export dat z Arduina" 
      text="tato aplikace slouží pro export dat z arduina pomocí bluetooth spojení. Více informací je dostupných na: " 
      link="https://github.com/kovarmi9/PJIN_mobilni_bluetooth_aplikace/
      " 
      />

      {/* Přidána tlačítka*/}
			<TlacitkoBluetooth 
			  title="PŘIPOJIT BLUETOOTH ZAŘÍZENÍ" 
			  onPress={handleBluetoothPress}
			/>
			<TlacitkoSoubory 
			  title="EXPORT SOUBORŮ Z SD KARTY" 
			  onPress={handleSouboryPress}
			/>

      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        {/*
          přidává už předdefinovanou hlavočku "Welcome to react native"
          <Header />
        */}
        <Radek nazev="ZAZNAM.TXT" datum="31.10.2023 14:11"/>
        <Radek nazev="ZAZNAM.TXT" datum="31.10.2023 14:13"/>
        <Radek nazev="ZAZNAM.TXT" datum="31.10.2023 14:15"/>
        <Radek nazev="ZAZNAM.TXT" datum="31.10.2023 15:27"/>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step___ One">
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  
   // Přidáno
   buttonBlue: {
     backgroundColor: 'blue',
     padding: 10,
     alignItems: 'center',
     marginBottom:10
   },
   buttonWhite: {
     backgroundColor: 'white',
     padding:10,
     alignItems:'center',
     marginBottom:10
   },
   buttonText:{
     color:'white'
   },
   buttonTextBlack:{
     color:'black'
   }
});

export default App;
