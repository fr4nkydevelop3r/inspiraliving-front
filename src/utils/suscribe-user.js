import React from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"

const validateEmail = email => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
}

export const handleSuscription = async email => {
  if (validateEmail(email)) {
    try {
      const susbribe = await addToMailchimp(email)
      return susbribe
    } catch (e) {
      console.log(e)
      return false
    }
  } else {
    return false
  }
}
