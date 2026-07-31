import { client } from './client'

export async function getSiteSettings() {
  return client.fetch(`*[_type == "siteSettings"][0]`, {}, { next: { revalidate: 60 } })
}

export async function getAboutPage() {
  return client.fetch(`*[_type == "aboutPage"][0]`, {}, { next: { revalidate: 60 } })
}

export async function getFinancing() {
  return client.fetch(`*[_type == "financing"][0]{
    ...,
    partnerLogo { asset->{ url } }
  }`, {}, { next: { revalidate: 60 } })
}

export async function getFeaturedTestimonials() {
  return client.fetch(
    `*[_type == "testimonial" && featured == true] | order(_createdAt desc)`,
    {},
    { next: { revalidate: 60 } }
  )
}

export async function getAllTestimonials() {
  return client.fetch(
    `*[_type == "testimonial"] | order(_createdAt desc)`,
    {},
    { next: { revalidate: 60 } }
  )
}

export async function getFeaturedGallery() {
  return client.fetch(
    `*[_type == "galleryImage" && featured == true] | order(order asc) {
      _id, caption, category,
      image { asset->{ url, metadata { dimensions } } }
    }`,
    {},
    { next: { revalidate: 60 } }
  )
}

export async function getGalleryByCategory(category: string) {
  return client.fetch(
    `*[_type == "galleryImage" && category == $category] | order(order asc) {
      _id, caption, category,
      image { asset->{ url, metadata { dimensions } } }
    }`,
    { category },
    { next: { revalidate: 60 } }
  )
}

export async function getFaqs(category?: string) {
  const filter = category
    ? `*[_type == "faq" && category == $category]`
    : `*[_type == "faq"]`
  return client.fetch(
    `${filter} | order(order asc)`,
    { category },
    { next: { revalidate: 60 } }
  )
}
