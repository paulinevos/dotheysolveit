import { movieDatabase as config } from '../config'
import { TmdbClient } from './tmdbClient'
import { Title } from '../value-objects/Title'
import { TooManyResultsError } from '../errors/TooManyResultsError'
import { MatchNotFoundError } from '../errors/MatchNotFoundError'
import { InvalidArgumentError } from '../errors/InvalidArgumentError'
import {ResultSet} from '../value-objects/ResultSet'

const tmdb = new TmdbClient(config)

export async function doTheySolveIt(title) {
  const searchTerm = title

  return await tmdb.search(searchTerm)
    .then(results => parseResults(results, searchTerm))
    .then(parsedResults => parsedResults)
}

async function parseResults(results, searchTerm) {
  if (results.total_results > 50) {
    throw new TooManyResultsError()
  }

  const titles = results.results.map(title => {
    return new Title(
      title.name ? title.name : title.original_title,
      title.overview,
      title.poster_path,
      title.genre_ids
    )
  })

  return findExactMatches(searchTerm, titles)
    .then(
      matches => {
        const firstMatch = matches.shift()
        return new ResultSet(matches, firstMatch)
      },
      () => {
        const suggestions = titles.filter(title => {
          if (!title instanceof Title) {
            throw new InvalidArgumentError('title');
          }

          return title.isCorrectGenre() && !title.matchesSearch(searchTerm)
        })

        return new ResultSet(suggestions)
      }
    )
}

async function findExactMatches(searchTerm, titles) {
  const matches = titles
    .map(title => {
      if (title.matchesSearch(searchTerm) && title.isCorrectGenre()) {
        return title
      }

      return null
    })
    .filter(match => typeof match !== 'undefined' && match !== null)

  if (matches.length === 0) {
    throw new MatchNotFoundError()
  }

  return matches
}
