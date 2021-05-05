import { movieDatabase as config } from '../config'

export class Title
{
  constructor(title, description, imageUrl, genreIds) {
    this.title = title
    this.description = description
    this.imageUrl = imageUrl
    this.genreIds = genreIds
  }

  isCorrectGenre = () => {
    return this.genreIds.filter(value => {
      return config.genreIds.includes(value)
    }).length > 0;
  }

  matchesSearch = (searchTerm) => {
    return searchTerm.toLowerCase() === this.title.toLowerCase()
  }
}
