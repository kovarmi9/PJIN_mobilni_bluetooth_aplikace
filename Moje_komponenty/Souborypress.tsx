import { BleManager } from 'react-native-ble-plx';

export const handleSouboryPress = () => {
  const manager = new BleManager();

  manager.connectedDevices([]).then((devices) => {
    if (devices.length === 0) {
      console.log('No connected devices found');
      return;
    }

    const device = devices[0];

    device.discoverAllServicesAndCharacteristics()
      .then((device) => {
        device.services().then((services) => {
          services.forEach((service) => {
            service.characteristics().then((characteristics) => {
              characteristics.forEach((characteristic) => {
                if (characteristic.isReadable) {
                  characteristic.read()
                    .then((characteristic) => {
                      console.log('Received data from Arduino:', characteristic.value);
                    })
                    .catch((error) => {
                      console.error('Failed to read data from Arduino:', error);
                    });
                }
              });
            });
          });
        })
      })
      .catch((error) => {
        console.error('Failed to discover services and characteristics:', error);
      });
  });
};
