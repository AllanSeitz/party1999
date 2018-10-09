import React, { Component } from 'react'
import Data from './Data.json'

class Movies extends Component {
  render() {
    return (
      <>
        {Data.results.map(result => {
          return (
            <section>
              <img
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${
                  result.poster_path
                }`}
                alt="some movies posters"
              />
              <div className="text">
                <p>
                  <em>{result.title}</em>
                </p>
                <p>{result.overview} </p>
              </div>
            </section>
          )
        })}
      </>
    )
  }
}

export default Movies
