import fs from 'fs'
const ignoreRegex = /_(.*?).md/
const isMd = (value) => /\.md$/.test(value)

function generateMdPaths(data, currentPath = '', ext = '') {
  return data.reduce((acc, value) => {
    if (ignoreRegex.test(value)) return acc

    if (!isMd(value)) {
      const path = `${currentPath}/${value}/`
      const data = fs.readdirSync(path)

      // return immediately if directory is empty
      if (data.length === 0) return acc

      // recursively generate tree files
      acc.push(...generateMdPaths(data, path, `${ext}${value}/`))
    } else {
      // Convert into array since it was a spread dynamic page
      const slug = (ext + value.replace(/\.md$/, '')).split('/')
      acc.push({ params: { docs: slug } })
    }
    return acc
  }, [])
}

export default generateMdPaths
