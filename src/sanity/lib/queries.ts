import { sanityFetch } from './live'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyDoc = Record<string, any>

export async function getSiteSettings(): Promise<AnyDoc | null> {
  const { data } = await sanityFetch({ query: `*[_type == "siteSettings"][0]` })
  return (data as AnyDoc) ?? null
}

export async function getAboutPage(): Promise<AnyDoc | null> {
  const { data } = await sanityFetch({ query: `*[_type == "aboutPage"][0]` })
  return (data as AnyDoc) ?? null
}

export async function getFinancing(): Promise<AnyDoc | null> {
  const { data } = await sanityFetch({
    query: `*[_type == "financing"][0]{ ..., partnerLogo { asset->{ url } } }`,
  })
  return (data as AnyDoc) ?? null
}

export async function getFeaturedTestimonials(): Promise<AnyDoc[]> {
  const { data } = await sanityFetch({
    query: `*[_type == "testimonial" && featured == true] | order(_createdAt desc)`,
  })
  return (data as AnyDoc[]) ?? []
}

export async function getAllTestimonials(): Promise<AnyDoc[]> {
  const { data } = await sanityFetch({
    query: `*[_type == "testimonial"] | order(_createdAt desc)`,
  })
  return (data as AnyDoc[]) ?? []
}

export async function getFeaturedGallery(): Promise<AnyDoc[]> {
  const { data } = await sanityFetch({
    query: `*[_type == "galleryImage" && featured == true] | order(order asc) {
      _id, caption, category,
      image { asset->{ url, metadata { dimensions } } }
    }`,
  })
  return (data as AnyDoc[]) ?? []
}

export async function getGalleryByCategory(category: string): Promise<AnyDoc[]> {
  const { data } = await sanityFetch({
    query: `*[_type == "galleryImage" && category == $category] | order(order asc) {
      _id, caption, category,
      image { asset->{ url, metadata { dimensions } } }
    }`,
    params: { category },
  })
  return (data as AnyDoc[]) ?? []
}

export async function getFaqs(category?: string): Promise<AnyDoc[]> {
  const filter = category
    ? `*[_type == "faq" && category == $category]`
    : `*[_type == "faq"]`
  const { data } = await sanityFetch({
    query: `${filter} | order(order asc)`,
    params: { category },
  })
  return (data as AnyDoc[]) ?? []
}
