export const languages = {
  en: 'English',
  es: 'Spanish'
} as const

export const defaultLang = 'es'

export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.projects': 'My projects',
    'nav.about': 'About',
    'home.h2': "Hi, i'm",
    'home.p': 'Junior front end and back end Developer on ',
    'home.p.and': ' and ',
    'projects.header.h2': 'My projects',
    'projects.header.p': 'Each project leads to to its own repository',
    'projects.main.h2': 'Personal projects',
    'projects.main.h2-2': 'Other projects'
  },
  es: {
    'nav.home': 'Inicio',
    'nav.projects': 'Mis proyectos',
    'nav.about': 'Acerca de mi',
    'home.h2': 'Hola soy',
    'home.p': 'Desarrollador junior de Front end y de back end en ',
    'home.p.and': ' y ',
    'projects.header.h2': 'Mis proyectos',
    'projects.header.p': 'Cada proyecto lleva a su correspondiente repositorio',
    'projects.main.h2': 'Proyectos personales',
    'projects.main.h2-2': 'Demas proyectos'
  }
} as const