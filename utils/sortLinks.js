function sortSublinks(sublinks) {
  if (sublinks.length === 0) return []
  return sublinks.reduce((acc, obj) => {
    if (obj.subLinks) return sortSublinks(obj.subLinks)
    if (/#/.test(obj.href)) return acc
    acc.push(obj)
    return acc
  }, [])
}
export default function sortLinks(links) {
  return links.reduce((acc, obj) => {
    const { subLinks } = obj
    acc.push(obj)
    if (subLinks) {
      acc.push(...sortSublinks(subLinks, obj.href))
    }
    return acc
  }, [])
}
export function getNextAndPrevLinks(currentPath, sortedLinks) {
  const pathIndex = sortedLinks.findIndex((obj) => obj.href === currentPath)
  if (pathIndex === -1) return {}
  return {
    next: sortedLinks[pathIndex + 1],
    prev: sortedLinks[pathIndex - 1],
  }
}
