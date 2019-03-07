const PROJECTS = [
  {
    name: 'Sinbad Travel',
    url: 'https://sinbad.cl',
    image: '/img/projects/sinbad_logo.png'
  },
  {
    name: 'Trader Social',
    url: 'https://trader.social',
    image: '/img/projects/tradersocial_logo.png'
  },
  {
    name: 'Trader Digital',
    url: 'https://trader.digital',
    image: '/img/projects/traderdigital_logo.png'
  },
  {
    name: 'Postcenter',
    url: 'https://www.postcenter.io',
    image: '/img/projects/postcenter_logo.png'
  },
  {
    name: 'Firesport',
    url: 'http://firesport.io',
    image: '/img/projects/firesport_logo.png'
  },
  {
    name: 'La Red',
    url: 'https://lared.cl',
    image: '/img/projects/lared_logo.png'
  },
  {
    name: 'Fireclip',
    url: 'https://fireclip.tv',
    image: '/img/projects/fireclip_logo.png'
  },
  {
    name: 'Fayerwayer',
    url: 'https://fayerwayer.com',
    image: '/img/projects/fayerwayer_logo.png'
  },
  {
    name: 'Banco Consorcio',
    url: 'https://www.bancoconsorcio.cl/BancoModerno/#/login',
    image: '/img/projects/consorcio_logo.png'
  },
  {
    name: 'EstadioCDF',
    url: 'https://estadiocdf.cl',
    image: '/img/projects/estadiocdf_logo.svg'
  }
]

export default {
  list () {
    return new Promise((resolve) => {
      resolve(PROJECTS)
    })
  }
}
