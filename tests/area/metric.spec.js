import metric from '../../src/area/metric';

// Millimeter to ...
describe('Millimeter to ...', () => { 
  test('should convert square millimeter test 1', () => {
    expect(metric.squareMillimeter(4, 4)).toBe(16);
  });
  
  test('should convert square millimeter test 2', () => {
    expect(metric.squareMillimeter(5)).toBe(25);
  });
  
  test('should convert square millimeter to centimeter test 1', () => {
    expect(metric.squareMillimeterToCentimeter(40, 40)).toBe(16);
  });
  
  test('should convert square millimeter to centimeter test 2', () => {
    expect(metric.squareMillimeterToCentimeter(40)).toBe(16);
  });
  
  test('should convert square millimeter to meter test 1', () => {
    expect(metric.squareMillimeterToMeter(4000, 4000)).toBe(16);
  });

  test('should convert square millimeter to meter test 2', () => {
    expect(metric.squareMillimeterToMeter(3000)).toBe(9);
  });
  
  test('should convert square millimeter to kilometer test 1', () => {
    expect(metric.squareMillimeterToKilometer(40000, 40000)).toBe(0.0016);
  });
  test('should convert square millimeter to kilometer test 2', () => {
    expect(metric.squareMillimeterToKilometer(4000000)).toBe(16);
  });
});

// Centimeter to ...
describe('Centimeter to ...', () => {
  test('should convert square centimeter test 1', () => {
    expect(metric.squareCentimeter(4, 4)).toBe(16);
  });

  test('should convert square centimeter test 2', () => {
    expect(metric.squareCentimeter(5)).toBe(25);
  });

  test('should convert square centimeter to millimeter test 1', () => {
    expect(metric.squareCentimeterToMillimeter(4, 4)).toBe(1600);
  });

  test('should convert square centimeter to millimeter test 2', () => {
    expect(metric.squareCentimeterToMillimeter(4)).toBe(1600);
  });
  
  test('should convert square centimeter to meter test 1', () => {
    expect(metric.squareCentimeterToMeter(4000, 4)).toBe(1.6);
  });

  test('should convert square centimeter to meter test 2', () => {
    expect(metric.squareCentimeterToMeter(4000)).toBe(1600);
  });
  
  test('should convert square centimeter to kilometer test 1', () => {
    expect(metric.squareCentimeterToKilometer(40000, 4000)).toBe(1.6);
  });
  
  test('should convert square centimeter to kilometer test 2', () => {
    expect(metric.squareCentimeterToKilometer(40000)).toBe(16);
  });
});

// Meter to ...
describe('Meter to ...', () => {
  test('should convert square meter test 1', () => {
    expect(metric.squareMeter(4, 4)).toBe(16);
  });

  test('should convert square meter test 1', () => {
    expect(metric.squareMeter(4)).toBe(16);
  });

  test('should convert square meter to millimeter test 1', () => {
    expect(metric.squareMeterToMillimeter(4, 4)).toBe(16000000);
  });
  
  test('should convert square meter to millimeter test 2', () => {
    expect(metric.squareMeterToMillimeter(4)).toBe(16000000);
  });

  test('should convert square meter to centimeter test 1', () => {
    expect(metric.squareMeterToCentimeter(4, 4)).toBe(160000);
  });
  
  test('should convert square meter to centimeter test 2', () => {
    expect(metric.squareMeterToCentimeter(4)).toBe(160000);
  });

  test('should convert square meter to kilometer test 1', () => {
    expect(metric.squareMeterToKilometer(4000, 4000)).toBe(16);
  });
  
  test('should convert square meter to kilometer test 2', () => {
    expect(metric.squareMeterToKilometer(4000)).toBe(16);
  });
});

describe('Kilometer to ...', () => {
  test('should convert square kilometer test 1', () => {
    expect(metric.squareKilometer(4, 4)).toBe(16);
  });

  test('should convert square kilometer test 1', () => {
    expect(metric.squareKilometer(4)).toBe(16);
  });

  test('should convert square kilometer to millimeter test 1', () => {
    expect(metric.squareKilometerToMillimeter(4, 4)).toBe(16000000000000);
  });
  
  test('should convert square kilometer to millimeter test 2', () => {
    expect(metric.squareKilometerToMillimeter(4)).toBe(16000000000000);
  });

  test('should convert square kilometer to centimeter test 1', () => {
    expect(metric.squareKilometerToCentimeter(4, 4)).toBe(160000000000);
  });
  
  test('should convert square kilometer to centimeter test 2', () => {
    expect(metric.squareKilometerToCentimeter(4)).toBe(160000000000);
  });

  test('should convert square kilometer to meter test 1', () => {
    expect(metric.squareKilometerToMeter(3, 5)).toBe(15000000);
  });
  
  test('should convert square kilometer to meter test 2', () => {
    expect(metric.squareKilometerToMeter(4)).toBe(16000000);
  });
});
