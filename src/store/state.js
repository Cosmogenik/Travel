let defaultCity = '成都'
try {
  if (localStorage) {
    defaultCity = localStorage.city || '成都'
  }
} catch (error) {}

export default {
  city: defaultCity
}
