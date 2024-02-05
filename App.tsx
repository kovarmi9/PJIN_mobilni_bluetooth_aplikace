// import knihoven
import React from 'react';
import  {useState,useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View, 
  Dimensions,
} from 'react-native';

import { Colors,} from 'react-native/Libraries/NewAppScreen';
import { BleManager } from 'react-native-ble-plx';

// import mých vlastních komponent
import Hlavicka from './Moje_komponenty/Hlavicka';
import { TlacitkoBluetooth, TlacitkoSoubory } from './Moje_komponenty/Tlacitka';
import Radek from './Moje_komponenty/Radek';
import handleBluetoothPress from './Moje_komponenty/Bluetoothpress';
import { handleSouboryPress } from './Moje_komponenty/Souborypress';
import Bluetooth_kotrola_pripojeni from './Moje_komponenty/Bluetooth_kontrola_pripojeni';
import UseBLE from './Moje_komponenty/UseBLE';
import RequestPermissions from './Moje_komponenty/RequestPermissions';
import SeznamRadku from './Moje_komponenty/Seznam_radku';
import ConnectToHC05 from './Moje_komponenty/ConnectToHC05';

// hlavní komponenta aplikace
function App(): JSX.Element {

  // v případě že je mobil v tmavém režimu použije tmavé barevné schéma 
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.black : Colors.lighter,
  };

  const screenHeight = Dimensions.get('window').height;

  const [isButtonPressed, setIsButtonPressed] = useState(false);

  // Přidána stavová proměnná pro sledování stavu připojení
  const [connected, setConnected] = useState(false);

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const {requestPermissions} = UseBLE();

  const hideModal = () => {
    setIsModalVisible(false);
  };

  const openModal = async () => {
    requestPermissions((isGaranted:boolean) => {
      //alert('The Android Permission is Garanted? ', isGaranted);
    })
    setIsModalVisible(true)
  };

  // Požadování oprávnění
  useEffect(() => {
    requestPermissions((isGaranted:boolean) => {
      //alert('The Android Permission is Garanted? ', isGaranted);
    })
  }, []);

  const [deviceName, setDeviceName] = useState("");

  useEffect(() => {
    const manager = new BleManager();
  
    manager.startDeviceScan(null, null, (error, device) => {
      if (error) {
        console.log(error);
        return;
      }
    
      // Kontrola, zda bylo detekováno zařízení
      if (device) {
        //console.log('Detekováno zařízení', device.name);
        if (device.name !== null) { // Přidána kontrola null
          setDeviceName(device.name); // Uložení názvu zařízení
        }
      }
    });
  }, []);
  
  // věci co vraci hlavní komponenta 
  return (
    // obsah uvnitř SafeAreaView bere ohledy na notch
    <SafeAreaView style={backgroundStyle}>
      
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <RequestPermissions />

      {/*Přidána hlavička programu*/}
      <Hlavicka 
      title="
      Aplikace pro export dat z Arduina" 
      text="tato aplikace slouží pro export dat z arduina pomocí bluetooth spojení. Více informací je dostupných na: " 
      link="https://github.com/kovarmi9/PJIN_mobilni_bluetooth_aplikace/
      " 
      />

      <ConnectToHC05 setConnected={setConnected} setDeviceName={setDeviceName} />

      {/* Přidána tlačítka*/}
			<TlacitkoBluetooth 
			  title="PŘIPOJIT BLUETOOTH ZAŘÍZENÍgggggg" 
        onPress={() => {
          handleBluetoothPress();
        }}
			/>

      <TlacitkoSoubory 
        title="EXPORT SOUBORŮ Z SD KARTY" 
        onPress={() => {
          handleSouboryPress();
          setIsButtonPressed(true); // Nastaví 'isButtonPressed' na true po stisknutí tlačítka
          setDeviceName("HC-05"); // Nastaví 'deviceName' na "HC-05"
        }}
      />

      <Text style={{textAlign: 'center'}}>{connected ? 'Zařízení je připojeno: ' + deviceName : 'Zařízení není připojeno ' + deviceName}</Text>

      {deviceName === "HC-05" && (
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={{...backgroundStyle, height: screenHeight-217}}>
            
          <SeznamRadku />
          <View

            style={{
              backgroundColor: isDarkMode ? Colors.black : Colors.white,
            }}>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

export default App;