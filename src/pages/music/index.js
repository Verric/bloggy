import React, { useState } from "react"
import { Button, Embed, Segment, Flag, Header } from "semantic-ui-react"
import { graphql } from "gatsby"
import data from "./data.json"

const Music = () => {
  const [videoId, setVideoId] = useState(null)
  return (
    <div
      style={{ width: "100vw", height: "100vh" }}
      className={videoId ? "video-set" : ""}
    >
      <Segment.Group compact>
        {data.map(song => (
          <Segment
            compact
            size="small"
            key={song.id}
            onClick={() => setVideoId(song.id)}
          >
            <Header>
              <Header.Content>{`${song.title} - ${song.artist}`}</Header.Content>
              <Flag style={{ marginLeft: "5px" }} name={song.country} />
            </Header>
            <p>{`Released: ${song.releaseDate}`}</p>
          </Segment>
        ))}
      </Segment.Group>
      {videoId && (
        <section style={{ maxHeight: "50%", width: "500px", height: "500px" }}>
          <Button color="red" onClick={() => setVideoId(null)}>
            X
          </Button>
          <Embed id={videoId} source="youtube" active />
        </section>
      )}
    </div>
  )
}

export default Music

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
