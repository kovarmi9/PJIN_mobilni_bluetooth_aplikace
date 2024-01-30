import React, { useEffect } from 'react';
import { check, PERMISSIONS, request, RESULTS } from 'react-native-permissions';
// aby fungovalo je nutné přidat: npm install --save react-native-permissions
const RequestPermissions = () => {
  useEffect(() => {
    check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
      .then((result) => {
        switch (result) {
          case RESULTS.UNAVAILABLE:
            console.log('Toto oprávnění není dostupné.');
            break;
          case RESULTS.DENIED:
            console.log('Oprávnění bylo zamítnuto.');
            break;
          case RESULTS.GRANTED:
            console.log('Oprávnění bylo uděleno.');
            break;
          case RESULTS.BLOCKED:
            console.log('Oprávnění je zablokováno.');
            break;
        }
      })
      .catch((error) => {
        // Zpracujte chyby
      });

    // Požádejte o oprávnění
    request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION).then((result) => {
      // ...
    });
  }, []);

  return null;
};

export default RequestPermissions;
