export function scrollToSection(hash, offset = 88) {
  const id = hash.replace('#', '')
  const element = document.getElementById(id)
  if (!element) return

  const top = element.getBoundingClientRect().top + window.scrollY - offset
  window.scrollTo({ top, behavior: 'smooth' })
}

export function handleSectionClick(event, href) {
  if (!href.startsWith('#')) return
  event.preventDefault()
  scrollToSection(href)
}
