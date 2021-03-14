import { CalculatePi } from '../dist/index.js';

const steps = 100000000;

const calculatorGregoryLeibnizSeries = new CalculatePi.GregoryLeibnizSeries();
const calculatorNilakanthaSeries = new CalculatePi.NilakanthaSeries();
const calculatorRiemannZetaFunction = new CalculatePi.RiemannZetaFunction();

calculatorGregoryLeibnizSeries.step(steps);
calculatorNilakanthaSeries.step(steps);
calculatorRiemannZetaFunction.step(steps);

console.log(
  `CalculatePi.GregoryLeibnizSeries ${calculatorGregoryLeibnizSeries.pi}`
);
console.log(
  `CalculatePi.NilakanthaSeries     ${calculatorNilakanthaSeries.pi}`
);
console.log(
  `CalculatePi.RiemannZetaFunction  ${calculatorRiemannZetaFunction.pi}`
);
console.log(`Actual Pi                        ${Math.PI}`);

// CalculatePi.GregoryLeibnizSeries 3.141592643589326
// CalculatePi.NilakanthaSeries     3.141592653589787
// CalculatePi.RiemannZetaFunction  3.14159264498239
// Actual Pi                        3.141592653589793
