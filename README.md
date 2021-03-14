# calculate-pi

Uses infinite series to calculate Pi
- Gregory Leibniz Series
- Nilakantha Series
- Riemann Zeta Function

[Demo at pi.feli.page](https://pi.feli.page/)

# Usage

## Install

```bash
npm install calculate-pi
```

## Import

```js
import { CalculatePi } from 'calculate-pi';
// or
const { CalculatePi } = require('calculate-pi');

// use one algorithm
const calculator = new CalculatePi.GregoryLeibnizSeries();
const calculator = new CalculatePi.NilakanthaSeries();
const calculator = new CalculatePi.RiemannZetaFunction();


```

## Calculate

```js
const steps = 3000;
calculator.step(steps);
```

## Result

```js
console.log(calculator.pi)
// 3.14159~~~~~~~~~~
```