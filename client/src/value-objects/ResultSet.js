import { Title } from './Title'
import { InvalidArgumentError } from '../errors/InvalidArgumentError'

export class ResultSet
{
  constructor(suggestions = [], match = null) {
    if (match && !match instanceof Title) {
      throw new InvalidArgumentError('match');
    }

    if (!Array.isArray(suggestions)) {
      throw new InvalidArgumentError('suggestions');
    }

    suggestions.map(suggestion => {
      if (!suggestion instanceof Title) {
        throw new InvalidArgumentError('suggestions');
      }
    })

    this.match = match
    this.suggestions = suggestions
  }
}
