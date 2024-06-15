interface IDrawerItem {
  icon: string,
  title: string,
  value: string,
  link: string
}

const allDrawerItems: IDrawerItem[] = [{
  icon: 'mdi-folder',
  title: 'My files',
  value: 'myfiles',
  link: '/files'
},
{
  icon: 'mdi-whatsapp',
  title: 'Messages',
  value: 'messages',
  link: '/messages'
},
{
  icon: 'mdi-calendar',
  title: 'Calendar',
  value: 'calendar',
  link: '/calendar'
},
{
  icon: 'mdi-account-multiple',
  title: 'Users',
  value: 'users',
  link: '/users'
},
{
  icon: 'mdi-star',
  title: 'Starred',
  value: 'starred',
  link: '/starred'
},
]

export function useDrawerItems() {
  const drawerItems = ref<IDrawerItem[]>(allDrawerItems)
  return { drawerItems }
}
