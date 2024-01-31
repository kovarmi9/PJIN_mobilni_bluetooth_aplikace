import React from 'react';
import { BleManager } from 'react-native-ble-plx';

// Vytvoření instance BleManager
const manager = new BleManager();

interface ConnectToHC05Props {
  setConnected: React.Dispatch<React.SetStateAction<boolean>>;
  setDeviceName: React.Dispatch<React.SetStateAction<string>>;
}

// Funkce pro připojení k zařízení HC-05
const ConnectToHC05: React.FC<ConnectToHC05Props> = ({ setConnected, setDeviceName }) => {
  React.useEffect(() => {
    // Spustí skenování zařízení
    manager.startDeviceScan(null, null, (error, device) => {
      if (error) {
        console.log(error);
        return;
      }

      // Kontrola, zda bylo detekováno zařízení
      if (device) {
        console.log('Detekováno zařízení', device.id); // MAC adresa zařízení je uložena v 'device.id'
        if (device.id === '00:22:01:00:10:F6') { // Předpokládá se, že MAC adresa zařízení je '00:22:01:00:10:F6'
          // Zastaví skenování zařízení
          manager.stopDeviceScan();

            // Pokus o připojení k zařízení
            device.connect()
            .then((device) => {
                console.log('Připojeno k zařízení', device.id);
                setConnected(true); // Nastaví stavovou proměnnou 'connected' na true
                if (device.name !== null) {
                setDeviceName(device.name); // Uloží název zařízení, pokud není null
                } else {
                setDeviceName('Neznámé zařízení'); // Nastaví výchozí hodnotu, pokud je device.name null
                }
            })
            .catch((error) => {
                console.log('Chyba při připojování k zařízení', error);
            });
        }
      }
    });
  }, []);

  return null;
};

export default ConnectToHC05;
