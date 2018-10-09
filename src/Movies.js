import React, { Component } from 'react'
import styled from 'styled-components'
import Data from './Data.json'

class Movies extends Component {
  render() {
    const Text = styled.p`
      border: solid black 1px;
      background-color: antiquewhite;
      font-weight: bold;
      margin-left: 20px;
      margin-right: 175px;
    `
    const Page = styled.section`
      display: flex;
      padding-bottom: 10px;
    `

    return (
      <>
        {Data.results.map(result => {
          return (
            <Page>
              <img
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${
                  result.poster_path
                }`}
                alt="some movies posters"
              />
              <div>
                <Text>
                  <em>{result.title}</em>
                </Text>
                <Text>{result.overview} </Text>
              </div>
            </Page>
          )
        })}
      </>
    )
  }
}

export default Movies
