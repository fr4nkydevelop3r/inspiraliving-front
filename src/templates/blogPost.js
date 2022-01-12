import React from "react"
import { graphql } from "gatsby"
import Layout from "@/components/layout"
import SEO from "@/components/seo"
import parse from "html-react-parser"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link, navigate } from "gatsby"

const BlogPost = ({ data, pageContext }) => {
  const {
    slug,
    title,
    description,
    content,
    localizations,
    image,
    category,
  } = data.strapiArticle
  const global = data.strapiGlobal

  console.log(slug)
  console.log(description)
  console.log(content)
  console.log(localizations)
  console.log(image)

  const metadata = {
    metaDescription: "This is our Blog",
    metaTitle: "Blog/InspiraLiving",
  }

  return (
    <>
      <SEO seo={metadata} global={global} />
      <Layout global={global} pageContext={{ ...pageContext, localizations }}>
        <main className="mt-10 mb-16">
          <div
            className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative"
            style={{ height: "24em" }}
          >
            <div
              className="absolute left-0 bottom-0 w-full h-full z-10"
              style={{
                "background-image":
                  "linear-gradient(180deg,transparent,rgba(0,0,0,.7))",
              }}
            ></div>

            <GatsbyImage
              image={getImage(image[0].localFile)}
              alt={title}
              className="absolute left-0 top-0 w-full h-full z-0 object-cover"
            />
            <div className="p-4 absolute bottom-0 left-0 z-20">
              <Link
                to={
                  pageContext.locale === "en"
                    ? `/${category.slug}`
                    : `/es/${category.slug}`
                }
                className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2"
              >
                #{category.name}
              </Link>
              <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
                {title}
              </h2>
              <div className="f mt-3">
                <div>
                  <p className="font-semibold text-gray-200 text-sm">
                    {description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
            {parse(content)}
          </div>
        </main>
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
      category {
        name
        slug
      }
      image {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      localizations {
        id
        locale
      }
    }
  }
`
