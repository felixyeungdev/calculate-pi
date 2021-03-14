class CalculatePiBase {
  steps: number;
  sum: number;

  constructor() {
    this.steps = 0;
    this.sum = 0;
  }
}

class CalculatePiGregoryLeibnizSeries extends CalculatePiBase {
  async step(count: number = 1) {
    for (const _ of new Array(count)) {
      this.steps++;
      const sign = this.steps % 2 === 1 ? 1 : -1;
      this.sum += sign / (2 * this.steps - 1);
    }
  }

  get pi(): number {
    return 4 * this.sum;
  }
}

class CalculatePiNilakanthaSeries extends CalculatePiBase {
  constructor() {
    super();
    this.steps = 1;
    this.sum = 3;
  }

  async step(count: number = 1) {
    for (const _ of new Array(count)) {
      this.steps++;
      const sign = this.steps % 2 === 1 ? -1 : 1;
      const mid = 2 * this.steps - 1;
      this.sum += (sign * 4) / ((mid - 1) * mid * (mid + 1));
    }
  }

  get pi(): number {
    return this.sum;
  }
}

class CalculatePiRiemannZetaFunction extends CalculatePiBase {
  constructor() {
    super();
    this.steps = 0;
    this.sum = 0;
  }

  async step(count: number = 1) {
    for (const _ of new Array(count)) {
      this.steps++;
      this.sum += 1 / (this.steps * this.steps);
    }
  }

  get pi(): number {
    return Math.sqrt(6 * this.sum);
  }
}

const CalculatePi = {
  GregoryLeibnizSeries: CalculatePiGregoryLeibnizSeries,
  NilakanthaSeries: CalculatePiNilakanthaSeries,
  RiemannZetaFunction: CalculatePiRiemannZetaFunction,
};

export { CalculatePi };
