module.exports = {
  service: {
    icon: 'leaf',
    name: 'bloom',
    namespace: 'bloom',
    mission: 'a software-powered education system. ⬢‿⬢',
    description: 'Bloom is an alternative to traditional education, by way of interactive, discoverable, engaging examples.'
  },
  services: {
    http: {
      port: 2300
    }
  },
  // TODO: migrate to `storage`
  database: {
    name: 'bloom'
  }
}
