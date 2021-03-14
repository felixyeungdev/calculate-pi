import { CalculatePi } from '../src/index';

const precision = 3;
const steps = 300;

const approxPi = Math.PI.toPrecision(precision);

describe('CalculatePi', () => {
  it('GregoryLeibnizSeries', () => {
    const calculator = new CalculatePi.GregoryLeibnizSeries();
    calculator.step(steps);
    const result = calculator.pi.toPrecision(precision);
    expect(result).toEqual(approxPi);
  });
  it('NilakanthaSeries', () => {
    const calculator = new CalculatePi.NilakanthaSeries();
    calculator.step(steps);
    const result = calculator.pi.toPrecision(precision);
    expect(result).toEqual(approxPi);
  });
  it('RiemannZetaFunction', () => {
    const calculator = new CalculatePi.RiemannZetaFunction();
    calculator.step(steps);
    const result = calculator.pi.toPrecision(precision);
    expect(result).toEqual(approxPi);
  });
});
