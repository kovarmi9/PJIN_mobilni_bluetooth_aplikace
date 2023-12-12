// import knihoven 
import React from 'react';
import type {PropsWithChildren} from 'react';// když je takhle zešedlá tak se momentálně nepoužívá ale zatím jsem je tu nechal kdyby se ještě někdy hodila
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View, 
  Linking, 
  Alert, 
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

// chtěl jsem přidat nějaké hezké ikony ale nefungovalo mi to zajsem zatím použi emoji
// import ikon z: npm install react-native-vector-icons
// dále je třeba dát do terminálu: npm install --save-dev @types/react-native-vector-icons
//import Icon from 'react-native-vector-icons/FontAwesome';


// import knihovny pro práci s bluetooth npm install --save react-native-ble-plx
// ANDROID_APP_projekt\android\app\src\main\AndroidManifest.xml přidáno
//<uses-permission android:name="android.permission.BLUETOOTH"/>
//<uses-permission android:name="android.permission.BLUETOOTH_ADMIN"/>
//<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION"/>
//<uses-permission android:name="android.permission.BLUETOOTH_SCAN"/>
//<uses-permission android:name="android.permission.BLUETOOTH_CONNECT"/>
// importuju pro čtení a celkovou komunikaci přes bluetooth
import { BleManager } from 'react-native-ble-plx';

// import mých vlastních komponent
import Hlavicka from './Moje_komponenty/Hlavicka';
import { TlacitkoBluetooth, TlacitkoSoubory } from './Moje_komponenty/Tlacitka';
import Radek from './Moje_komponenty/Radek';
import handleBluetoothPress from './Moje_komponenty/Bluetoothpress';
import { handleSouboryPress } from './Moje_komponenty/Souborypress';


// hlavní komponenta aplikace
function App(): JSX.Element {

  // v případě že je mobil v tmavém režimu použije tmavé barevné schéma 
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.black : Colors.lighter,
  };
  
  const manager = new BleManager();

  // věci co vraci hlavní komponenta
  return (
    // obsah uvnitř SafeAreaView bere ohledy na notch
    <SafeAreaView style={backgroundStyle}>
      
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      {/*Přidána hlavička programu*/}
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
        <Radek nazev="ahoj.TXT" datum="31.10.2023 14:11"/>
        <Radek nazev="kryštofe.TXT" datum="31.10.2023 14:13"/>
        <Radek nazev="jak.TXT" datum="31.10.2023 14:15"/>
        <Radek nazev="se.TXT" datum="31.10.2023 15:27"/>
        <Radek nazev="máš.TXT" datum="31.10.2023 14:11"/>
        <Radek nazev="obr.JPG   " datum="31.10.2023 14:13"/>
        <Radek nazev="zkouska" datum="31.10.2023 14:15"/>
        <Radek nazev="miaA.TXT" datum="1.1.2000 00:00"/>
        <Radek nazev="ZAZNAM.TXT" datum="31.10.2023 14:11"/>
        <Radek nazev="mereni.csv" datum="31.10.2023 14:13"/>
        <Radek nazev="ZAZNAM_GNSS.TXT" datum="31.10.2023 14:15"/>
        <Radek nazev="ZAZNAM.TXT" datum="31.10.2023 15:27"/>
        <Radek nazev="001.MP3   " datum="31.10.2023 14:11"/>
        <Radek nazev="ZAZNAM.TXT" datum="31.10.2023 14:13"/>
        <Radek nazev="info.TXT  " datum="31.10.2023 14:15"/>
        <Radek nazev="ZAZNAM.TXT" datum="1.1.1980 00:00"/>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
