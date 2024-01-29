import { Permission, PermissionsAndroid, Platform } from "react-native";

type PermissionCallback = (result: boolean) => void;

interface BluetoothLowEnergyApi {
  requestPermissions(callback: PermissionCallback): Promise<void>;
}

export default function UseBLE(): BluetoothLowEnergyApi {
    const requestPermissions = async (callback: PermissionCallback) => {
        if(Platform.OS === 'android') {
            const grantedStatus = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    title: 'Location Permission',
                    message: 'Bluetooth Low Energy Needs Location Permission',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                    buttonNeutral: 'Maybe Later'
                },
            );
            callback(grantedStatus === PermissionsAndroid.RESULTS.GRANTED);
        } else {
            callback(true);
        }
    };

    return {
        requestPermissions,
    };
}
