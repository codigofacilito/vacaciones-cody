import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Img } from "./style";

// Note: You can change "images" to whatever you'd like.

const getImages = graphql`
  query {
    images: allFile {
      edges {
        node {
          relativePath
          name
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

const Image = (props) => (
  <StaticQuery
    query={getImages}
    render={(data) => {
      const image = data.images.edges.find((n) => {
        return n.node.relativePath.includes(props.filename);
      });
      if (!image) {
        return null;
      }

      //const imageSizes = image.node.childImageSharp.sizes; sizes={imageSizes}
      return <Img alt={props.alt} fluid={image.node.childImageSharp.fluid} />;
    }}
  />
);

export default Image;
