import { Linking } from 'react-native';

const handleBluetoothPress = () => {
    Linking.sendIntent('android.settings.BLUETOOTH_SETTINGS');
  };

  export default handleBluetoothPress;