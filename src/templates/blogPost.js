import React from "react"
import { graphql } from "gatsby"
import Layout from "@/components/layout"
import SEO from "@/components/seo"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

const BlogPost = ({ data, pageContext }) => {
  const {
    slug,
    title,
    description,
    content,
    localizations,
  } = data.strapiArticle
  const global = data.strapiGlobal

  console.log(slug)
  console.log(description)
  console.log(content)
  console.log(localizations)

  const metadata = {
    metaDescription: "This is our Blog",
    metaTitle: "Blog/InspiraLiving",
  }

  return (
    <>
      <SEO seo={metadata} global={global} />
      <Layout global={global} pageContext={{ ...pageContext, localizations }}>
        {/**title */}
        <ReactMarkdown children={content} remarkPlugins={[remarkGfm]} />
      </Layout>
    </>
  )
}

export default BlogPost

export const query = graphql`
  fragment GlobalDataStrapi on StrapiGlobal {
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

  query DynamicArticleQuery($id: String!, $locale: String!) {
    strapiGlobal(locale: { eq: $locale }) {
      ...GlobalData
    }
    strapiArticle(id: { eq: $id }) {
      slug
      title
      description
      content
      localizations {
        id
        locale
      }
    }
  }
`
