import React from "react"
import { graphql } from "gatsby"
import Layout from "@/components/layout"
import Sections from "@/components/sections"
import SEO from "@/components/seo"

const DynamicPage = ({ data, pageContext }) => {
  const { contentSections, metadata, localizations } = data.strapiPage
  const global = data.strapiGlobal

  return (
    <>
      <SEO seo={metadata} global={global} />
      <Layout global={global} pageContext={{ ...pageContext, localizations }}>
        <Sections
          sections={contentSections}
          pageContext={{ ...pageContext, localizations }}
        />
      </Layout>
    </>
  )
}

export default DynamicPage

export const query = graphql`
  fragment GlobalData on StrapiGlobal {
    favicon {
      localFile {
        publicURL
      }
    }
    footer {
      ctatext
      description
      rights
      logo {
        alternativeText
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
      id
      button {
        id
        text
        type
      }
    }
    id
    metaTitleSuffix
    metadata {
      metaDescription
      metaTitle
      shareImage {
        localFile {
          publicURL
        }
      }
    }
    navbar {
      button {
        id
        newTab
        text
        type
        url
      }
      id
      links {
        url
        text
        newTab
        id
      }
      logo {
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    }
  }

  query DynamicPageQuery($id: String!, $locale: String!) {
    strapiGlobal(locale: { eq: $locale }) {
      ...GlobalData
    }
    strapiPage(id: { eq: $id }) {
      slug
      shortName
      metadata {
        metaTitle
        metaDescription
        shareImage {
          localFile {
            publicURL
          }
        }
      }
      localizations {
        id
        locale
      }
      contentSections
    }
  }
`
