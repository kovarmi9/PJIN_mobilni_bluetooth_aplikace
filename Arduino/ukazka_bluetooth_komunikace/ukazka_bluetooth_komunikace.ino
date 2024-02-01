// kod pro seriovou komunikaci přes modul HC-05
#define RX 11
#define TX 10

#include <SoftwareSerial.h>

SoftwareSerial bluetooth(TX, RX);

void setup() {

  bluetooth.begin(9600);
// ukázaka jak bude vypadat výpis názvů souborů
  bluetooth.println("ZAZNAM_1.TXT");
  bluetooth.println("ZAZNAM_2.TXT");
  bluetooth.println("ZAZNAM_3.TXT");
  bluetooth.println("ZAZNAM_4.TXT");
  bluetooth.println("ZAZNAM_5.TXT");
  bluetooth.println("SYNCHRO_1.TXT");
  bluetooth.println("SYNCHRO_2.TXT");
  bluetooth.println("SYNCHRO_3.TXT");
  bluetooth.println("SYNCHRO_4.TXT");
  bluetooth.println("SYNCHRO_5.TXT");
  bluetooth.println("ZAZ_GNSS_1.TXT");
  bluetooth.println("ZAZ_GNSS_2.TXT");
  bluetooth.println("ZAZ_GNSS_3.TXT");
  bluetooth.println("ZAZ_GNSS_4.TXT");
  bluetooth.println("ZAZ_GNSS_5.TXT");
  bluetooth.println("info.TXT");
}

void loop() {
  // proměnná pro ukládání dat z Bluetooth modulu
  byte BluetoothData;
  // kontrola Bluetooth komunikace, pokud je dostupná nová zpráva, tak vrátí počet jejích znaků
  if (bluetooth.available() > 0) {
    // načtení prvního znaku ve frontě do proměnné
    BluetoothData=bluetooth.read();

    switch (BluetoothData) {
      // každý case obsahuje dekódování jednoho znaku
      case '1':
        bluetooth.println("odeslán znak 1");
        break;
      case '2':
        bluetooth.println("odeslán znak 2");
        break;
      case '3':
        bluetooth.print("odeslán znak 3");
        break;
        // v případě přijetí ostatních znaků vypíše neznámý příkaz
      default:
        bluetooth.println("Neznámý příkaz");
    }
  }
  // krátká pauza mezi kontrolami komunikace Bluetooth modulu
  delay(100);
}