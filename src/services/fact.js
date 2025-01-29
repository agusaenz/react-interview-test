const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export const getRandomFact = async () => {
  const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
  if (!res.ok) throw new Error('No se pudo obtener el dato')
  const data = await res.json()
  const { fact } = data
  return fact
}
