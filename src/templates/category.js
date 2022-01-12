import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "@/components/layout"
import { Link, navigate } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import SEO from "@/components/seo"

const Category = ({ data, pageContext }) => {
  const { contentSections, metadata, localizations } = data.strapiCategory
  const global = data.strapiGlobal

  const colors = [
    {
      name: "blue",
      text: "text-blue-600",
      background: "bg-gradient-to-r from-blue-300 to-blue-600",
      border: "border-blue-500",
    },
    {
      name: "pink",
      text: "text-pink-500",
      background: "bg-gradient-to-r from-red-600  to-pink-600",
      border: "border-pink-500",
    },

    {
      name: "purple",
      text: "text-purple-500",
      background: "bg-gradient-to-r from-purple-400 to-purple-700",
      border: "border-purple-500",
    },
    {
      name: "green",
      text: "text-green-500",
      background: "bg-gradient-to-r from-green-400 to-green-900",
      border: "border-green-500",
    },
    {
      name: "yellow",
      text: "text-yellow-500",
      background: "bg-gradient-to-r from-yellow-400 to-yellow-900",
      border: "border-yellow-500",
    },
    {
      name: "red",
      text: "text-red-500",
      background: "bg-gradient-to-r from-red-300 to-red-900",
      border: "border-red-500",
    },
    {
      name: "gray",
      text: "text-gray-500",
      background: "bg-gradient-to-r from-gray-300 to-gray-600",
      border: "border-gray-500",
    },
    {
      name: "pink",
      text: "text-pink-500",
      background: "bg-gradient-to-r from-red-600  to-pink-600",
      border: "border-pink-500",
    },
    {
      name: "blue",
      text: "text-blue-600",
      background: "bg-gradient-to-r from-blue-300 to-blue-600",
      border: "border-blue-500",
    },
    {
      name: "purple",
      text: "text-purple-500",
      background: "bg-gradient-to-r from-purple-400 to-purple-700",
      border: "border-purple-500",
    },
    {
      name: "green",
      text: "text-green-500",
      background: "bg-gradient-to-r from-green-400 to-green-900",
      border: "border-green-500",
    },
    {
      name: "yellow",
      text: "text-yellow-500",
      background: "bg-gradient-to-r from-yellow-400 to-yellow-900",
      border: "border-yellow-500",
    },
    {
      name: "red",
      text: "text-red-500",
      background: "bg-gradient-to-r from-red-300 to-red-900",
      border: "border-red-500",
    },
    {
      name: "gray",
      text: "text-gray-500",
      background: "bg-gradient-to-r from-gray-300 to-gray-600",
      border: "border-gray-500",
    },
  ]

  let { edges: categories } = data.allStrapiCategory
  if (categories[0].node.name !== "all") {
    categories.unshift({ node: { name: "all", slug: "reflections" } })
  }

  const [categorySelected, setCategorySelected] = useState(
    data.strapiCategory.name
  )

  categories = categories.map((category, i) => {
    return {
      name: category.node.name,
      color: {
        ...colors[i],
      },
      slug: category.node.slug,
    }
  })

  const getCategoryColor = category => {
    const result = categories.find(({ name }) => name === category)
    return result.color
  }

  const handleNavigation = slug => {
    if (slug === "reflections" || slug === "reflexiones") {
      pageContext.locale === "en"
        ? navigate(`/reflections`)
        : navigate(`/es/reflections`)
      return
    }
    pageContext.locale === "en" ? navigate(`/${slug}`) : navigate(`/es/${slug}`)
  }

  const articles = data.strapiCategory.articles

  return (
    <>
      <SEO seo={metadata} global={global} />
      <Layout global={global} pageContext={{ ...pageContext, localizations }}>
        <div className="bg-black w-screen px-4 md:px-0">
          <div className="mx-0 sm:mx-6 ">
            <div className="bg-black container w-full text-xl md:text-2xl text-gray-800 leading-normal rounded-t">
              <header className="pt-12 mb-16">
                <ul className="flex flex-wrap">
                  {categories.map((category, i) => (
                    <li
                      className={`${category.color.text} mr-3 cursor-pointer ${
                        categorySelected === category.name ? "underline" : ""
                      } `}
                      onClick={() => handleNavigation(category.slug)}
                      key={category.slug}
                    >
                      #{category.name}
                    </li>
                  ))}
                </ul>
              </header>
              {articles.length > 0 ? (
                <div className="masonry sm:masonry-sm md:masonry-md">
                  {articles.map(article => (
                    <div
                      className={`bg-gray-900 mb-8 border ${
                        getCategoryColor(data.strapiCategory.name).border
                      } rounded-lg shadow-md break-inside cursor-pointer`}
                      onClick={() => handleNavigation(article.slug)}
                      key={article.slug}
                    >
                      <Link
                        to={
                          pageContext.locale === "en"
                            ? `/${article.slug}`
                            : `/es/${article.slug}`
                        }
                      >
                        <GatsbyImage
                          image={getImage(article.image[0].localFile)}
                          alt={article.title}
                          className="rounded-lg"
                        />
                      </Link>
                      <div className="p-5">
                        <Link
                          to={
                            pageContext.locale === "en"
                              ? `/${article.slug}`
                              : `/es/${article.slug}`
                          }
                        >
                          <h5
                            className={`mb-2 text-2xl font-bold tracking-tight text-gray-900 ${
                              getCategoryColor(data.strapiCategory.name).text
                            }`}
                          >
                            {article.title}
                          </h5>
                        </Link>
                        <p className="mb-3 text-gray-400">
                          {article.description}
                        </p>
                        <div></div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p>No hay articulos</p>
              )}
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Category

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

  query CategoryQuery($locale: String!, $slug: String!) {
    strapiGlobal(locale: { eq: $locale }) {
      ...GlobalData
    }

    strapiCategory(locale: { eq: $locale }, slug: { eq: $slug }) {
      locale
      name
      localizations {
        id
        locale
      }
      slug
      id
      articles {
        category
        description
        content
        locale
        slug
        title
        writer
        image {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }

    allStrapiCategory(filter: { locale: { eq: $locale } }) {
      edges {
        node {
          name
          slug
        }
      }
    }
  }
`
