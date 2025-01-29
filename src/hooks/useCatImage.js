import { useState, useEffect } from 'react'

export function useCatImage({ fact }) {
  const [imageUrl, setImageUrl] = useState(null)

  useEffect(() => {
    if (!fact) return

    const firstThreeWords = fact.split(' ', 3).join(' ')
    console.log(firstThreeWords)

    fetch(`https://cataas.com/cat/says/${firstThreeWords}?fontSize=50&fontColor=red`)
      .then(response => {
        const { url } = response
        setImageUrl(url)
      })
  }, [fact])

  return { imageUrl }
}
