function findMultiples(integer, limit) {
  return Array.from({length: parseInt(limit / integer)}, (_,index) => (index + 1) * integer)
}