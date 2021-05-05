export class TooManyResultsError extends Error
{
  constructor() {
    super();
    this.name = 'TooManyResultsError'
  }
}
