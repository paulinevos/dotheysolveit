export class TmdbClient
{
  constructor(config) {
    const { apiKey, baseUrl } = config

    this.apiKey = apiKey;
    this.baseUrl = baseUrl;
  }

  buildEndpoint = endpoint => {
    return `${this.baseUrl}${endpoint}?api_key=${this.apiKey}`
  }

  search = query => {
    return new Promise((resolve, reject) => {
      const endpoint = this.buildEndpoint('search/multi')

      fetch(`${endpoint}&query=${encodeURI(query)}`)
        .then(res => res.json())
        .then(results => {
          if (results.status_message) {
            reject(results.status_message)
          }

          resolve(results)
        })
    })
  }
}
