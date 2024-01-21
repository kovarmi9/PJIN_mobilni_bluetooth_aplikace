import { useEffect, useState } from 'react';
import { BleManager } from 'react-native-ble-plx';

const BluetoothConnectionChecker = () => {
  const [isDeviceConnected, setIsDeviceConnected] = useState(false);

  useEffect(() => {
    const manager = new BleManager();

    const checkDeviceConnection = async () => {
      const devices = await manager.connectedDevices([]);
      setIsDeviceConnected(devices.length > 0);
    };

    checkDeviceConnection();
  }, []);

  return isDeviceConnected;
};

export default BluetoothConnectionChecker;
