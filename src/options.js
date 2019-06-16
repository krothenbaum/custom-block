import React from "react"
import ReactMarkdown from "react-markdown"
import { BLOCKS } from '@contentful/rich-text-types';

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ENTRY]: node => {
      const { body } = node.data.target.fields
      return <ReactMarkdown source={body} />
    },
  },
}

export default options
