import { useFetch } from '@vueuse/core'

export async function fetchCatImages(limit = 10) {
  const { data, error } = await useFetch(`https://api.thecatapi.com/v1/images/search?limit=${limit}`)
  if (error.value) throw new Error(error.value)
  return JSON.parse(data.value)
}

export async function fetchCatFacts(count) {
  const { data, error } = await useFetch(`https://meowfacts.herokuapp.com/?count=${count}`)
  if (error.value) throw new Error(error.value)
  return JSON.parse(data.value).data
}