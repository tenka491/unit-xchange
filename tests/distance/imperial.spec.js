import imperial from '../../src/distance/imperial';
// Inches to ...
test('should convert inches to feet test 1', () => {
  expect(imperial.inchesToFeet(36)).toBe(3);
});

test('should convert inches to feet test 2', () => {
  expect(imperial.inchesToFeet(30)).toBe(2.5);
});

test('should convert inches to yards test 1', () => {
  expect(imperial.inchesToYards(36)).toBe(1);
});

test("should convert inches to yards test 2", () => {
  expect(imperial.inchesToYards(146)).toBe(4.055555555555555);
});

test('should convert inches to miles test 1', () => {
  expect(imperial.inchesToMiles(300)).toBe(0.004734848484848485);
});

test("should convert inches to miles test 2", () => {
  expect(imperial.inchesToMiles(760320)).toBe(12);
});

// Feet to ...
test('should convert feet to inches test 1', () => {
  expect(imperial.feetToInches(4)).toBe(48);
});

test('should convert feet to inches test 2', () => {
  expect(imperial.feetToInches(2.5)).toBe(30);
});

test('should convert feet to yards test 1', () => {
  expect(imperial.feetToYards(9)).toBe(3);
});

test("should convert feet to yards test 2", () => {
  expect(imperial.feetToYards(162)).toBe(54);
});

test("should convert feet to miles test a", () => {
  expect(imperial.feetToMiles(760320)).toBe(144);
});

test("should convert feet to miles test 2", () => {
  expect(imperial.feetToMiles(2112)).toBe(0.4);
});
// Miles to ...
test("should convert miles to inches test 1", () => {
  expect(imperial.milesToInches(12)).toBe(760320);
});

test("should convert miles to inches test 2", () => {
  expect(imperial.milesToInches(0.25)).toBe(15840);
});

test("should convert miles to feet test 1", () => {
  expect(imperial.milesToFeet(0.4)).toBe(2112);
});

test("should convert miles to feet test 2", () => {
  expect(imperial.milesToFeet(1.3)).toBe(6864);
});

test("should convert miles to yards test 1", () => {
  expect(imperial.milesToYards(0.4)).toBe(704);
});

test("should convert miles to feet test 2", () => {
  expect(imperial.milesToYards(1)).toBe(1760);
});
