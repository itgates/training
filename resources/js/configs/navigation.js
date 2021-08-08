import menuPages from './menus/pages.menu'

export default {
  // main navigation - side menu
  menu: [
    {
      text: '',
      key: '',
      items: [
        { icon: 'mdi-view-dashboard-outline', key: 'menu.dashboard', text: 'Dashboard', link: '/dashboard/analytics' },
        { icon: 'mdi-file-outline', key: 'menu.blank', text: 'Blank Page', link: '/blank' }
      ]
    },
    {
      text: 'Main Menu',
      items: [
        { icon: 'mdi-clipboard-list-outline', key: 'menu.boycottedProducts', text: 'Boycotted Products', link: '/admin/boycotted-products' },
        { icon: 'mdi-clipboard-list-outline', key: 'menu.alternativeProducts', text: 'Alternative Products', link: '/admin/alternative-products' },
        { icon: 'mdi-folder-multiple-outline', key: 'menu.categories', text: 'Categories', link: '/admin/categories' },
        { icon: 'mdi-sitemap', key: 'menu.groups', text: 'Groups', link: '/admin/groups' }
      ]
    }
  ]
}
