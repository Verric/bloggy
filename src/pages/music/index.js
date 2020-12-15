import React, { useEffect, useState } from "react"
import { Button, Embed, Segment, Select, Header } from "semantic-ui-react"
import data from "./data.json"

const OPTIONS = [
  {
    text: "Artist",
    value: "artist",
  },
  {
    text: "Year",
    value: "releaseDate",
  },
  {
    text: "Volume",
    value: "list",
  },
]
const groupStuff = (songs, value) =>
  songs.reduce(
    (r, v, i, a, k = v[value]) => ((r[k] || (r[k] = [])).push(v), r),
    {}
  )
const Music = () => {
  const [videoId, setVideoId] = useState(null)
  const [grouping, setGrouping] = useState("list")
  const [songData, setSongData] = useState(groupStuff(data, grouping))

  useEffect(() => {
    setSongData(groupStuff(data, grouping))
  }, [grouping])

  return (
    <div
      style={{ width: "100vw", height: "100vh" }}
      className={videoId ? "video-set" : ""}
    >
      <Select
        options={OPTIONS}
        value={grouping}
        defaultValue={grouping}
        placeholder="group by"
        onChange={(e, { value }) => {
          e.preventDefault()
          setGrouping(value)
        }}
      />

      {Object.values(songData).map((group, index) => (
        <Segment.Group compact>
          <Segment>
            <Header>{group[0][grouping]}</Header>
          </Segment>
          <Segment.Group key={index} compact style={{ margin: "3px" }}>
            {group.map(song => (
              <Segment
                compact
                size="small"
                key={song.id}
                onClick={() => setVideoId(song.id)}
              >
                <Header>
                  <Header.Content>{song.title}</Header.Content>
                  <Header.Subheader>{`${song.title} - ${song.releaseDate}`}</Header.Subheader>
                </Header>
              </Segment>
            ))}
          </Segment.Group>
        </Segment.Group>
      ))}

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
