export async function getDictionary(locale) {
  switch (locale) {
    case 'hi':
      return (await import('../dictionaries/hi.json')).default;
    default:
      return (await import('../dictionaries/en.json')).default;
  }
}
