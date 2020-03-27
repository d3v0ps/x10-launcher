
export class Battery {

  icon = 'battery-outline';

  constructor(
    public value: number
  ) {
    const roundedLevel = Math.round((value + Number.EPSILON) * 10) * 10;

    switch (roundedLevel) {
      case 0:
        this.icon = 'battery-outline';
        break;
      case 100:
        this.icon = 'battery';
        break;
      default:
        this.icon = `battery-${roundedLevel}`;
    }
  }
}
