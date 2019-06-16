import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"
import { graphql, Link } from "gatsby"
import React, { useState } from "react"
import ReactMarkdown from "react-markdown"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/Button"

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ENTRY]: node => {
      return (
        <RandomIpsum ipsums={node.data.target.fields.microcopies["en-US"]} />
      )
    },
  },
}

const RandomIpsum = ({ ipsums }) => {
  const [index, setIndex] = useState(Math.floor(Math.random() * ipsums.length))
  const ipsum = ipsums[index]
  const { body } = ipsum.fields
  return (
    <>
      <Button
        onClick={() => setIndex(Math.floor(Math.random() * ipsums.length))}
      >
        Random Ipsum
      </Button>
      <ReactMarkdown source={body["en-US"]} />
    </>
  )
}

const SecondPage = ({ data }) => {
  const articles = data.allContentfulArticle.edges.map(edge => {
    return documentToReactComponents(edge.node.body.json, options)
  })

  return (
    <Layout>
      <SEO title="Page two" />
      <h1>Hi from the second page</h1>
      {articles}
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulArticle {
      edges {
        node {
          body {
            json
          }
        }
      }
    }
  }
`

export default SecondPage
