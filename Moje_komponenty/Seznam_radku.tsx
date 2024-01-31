import React from 'react';
import Radek from './Radek';

const SeznamRadku = () => {
  const radky = [
    {nazev: "ZAZNAM_1.TXT", datum: "31.10.2023 14:15"},
    {nazev: "ZAZNAM_2.TXT", datum: "31.10.2023 14:13"},
    {nazev: "ZAZNAM_3.TXT", datum: "31.10.2023 14:10"},
    {nazev: "ZAZNAM_4.TXT", datum: "31.10.2023 12:27"},
    {nazev: "ZAZNAM_5.TXT", datum: "31.10.2023 11:20"},
    {nazev: "SYNCHRO_1.TXT", datum: "1.1.2000 00:00"},
    {nazev: "SYNCHRO_2.TXT", datum: "1.1.2000 00:00"},
    {nazev: "SYNCHRO_3.TXT", datum: "1.1.2000 00:00"},
    {nazev: "SYNCHRO_4.TXT", datum: "1.1.2000 00:00"},
    {nazev: "SYNCHRO_5.TXT", datum: "1.1.2000 00:00"},
    {nazev: "ZAZ_GNSS_1.TXT", datum: "31.10.2023 14:15"},
    {nazev: "ZAZ_GNSS_2.TXT", datum: "31.10.2023 14:13"},
    {nazev: "ZAZ_GNSS_3.TXT", datum: "31.10.2023 14:10"},
    {nazev: "ZAZ_GNSS_4.TXT", datum: "31.10.2023 15:27"},
    {nazev: "ZAZ_GNSS_5.TXT", datum: "31.10.2023 11:20"},
    {nazev: "info.TXT", datum: "31.10.2023 11:20"},
  ];

  return (
    <>
      {radky.map((radek, index) => (
        <Radek key={index} nazev={radek.nazev} datum={radek.datum} />
      ))}
    </>
  );
};

export default SeznamRadku;
