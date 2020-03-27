
const wifiIcons = {
  0: 'strength-outline',
  1: 'strength-1',
  2: 'strength-1',
  3: 'strength-2',
  4: 'strength-2',
  5: 'strength-2',
  6: 'strength-2',
  7: 'strength-3',
  8: 'strength-3',
  9: 'strength-4',
  10: 'strength-4',
}

export class WifiConnection {

  ssid = 'NO WIFI CONNECTION';
  icon = 'wifi-strength-outline';

  constructor(data: any) {
    Object.assign(this, data);

    const roundedSignal = Math.round((data.quality + Number.EPSILON) / 10);

    this.icon = `wifi-${wifiIcons[roundedSignal]}`;
  }
}
