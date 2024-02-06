#define RX 11
#define TX 10
#define pinLED 13
// načtení knihoven
#include <SoftwareSerial.h>
#include <SPI.h>
#include <SD.h>

SoftwareSerial bluetooth(TX, RX);

// pole pro ukládání názvů souborů
String filenames[10];

void setup() {
  // zahájení komunikace s Bluetooth modulem
  bluetooth.begin(9600);
}

void loop() {

  // inicializace SD karty
  if (!SD.begin(4)) {
    bluetooth.println("inicializace selhala!");
    while (1);
  }
  bluetooth.println("inicializace provedena.");

  // čtení názvů souborů na SD kartě
  File root = SD.open("/");
  for (int i = 0; i < 10; i++) {
    File entry =  root.openNextFile();
    if (! entry) {
      // žádné další soubory
      break;
    }
    filenames[i] = entry.name();
    entry.close();
  }
  root.close();

  // vypsání názvů souborů přes Bluetooth
  for (int i = 0; i < 10; i++) {
    bluetooth.println(filenames[i]);
  }

  byte BluetoothData;// proměnná pro ukládání dat z Bluetooth modulu
  if (bluetooth.available() > 0) {
    // načtení prvního znaku ve frontě do proměnné
    BluetoothData=bluetooth.read();
    // dekódování přijatého znaku
    int fileIndex = BluetoothData - '1'; // převedení znaku na číslo
    if (fileIndex >= 0 && fileIndex < 10) {
      // otevření souboru a výpis jeho obsahu přes Bluetooth
      File file = SD.open(filenames[fileIndex]);
      if (file) {
        while (file.available()) {
          bluetooth.write(file.read());
        }
        file.close();
      } else {
        bluetooth.println("nepovedlo se otevřít soubor: " + filenames[fileIndex]);
      }
    } else {
      // v případě přijetí ostatních znaků
      bluetooth.println("Neznámý příkaz");
    }
  }
  // pauza mezi kontrolami komunikace Bluetooth modulu
  delay(100);
}
