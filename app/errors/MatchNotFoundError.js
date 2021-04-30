export class MatchNotFoundError extends Error
{
  constructor() {
    super();
    this.name = 'MatchNotFoundError'
  }
}
