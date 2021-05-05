export class InvalidArgumentError extends Error
{
  constructor(argument) {
    super();
    this.name = 'InvalidArgumentError'
    this.message = `Invalid type for argument ${argument}`
  }
}
