export const headerLinks = [
    {
        label: '',
        route: '/',
    },
    // {
    //     label: 'Crear evento',
    //     route: '/events/create',
    // },
    // {
    //     label: 'Mi perfil',
    //     route: '/profile',
    // },
]

export const eventDefaultValues = {
    title: '',
    description: '',
    location: '',
    imageUrl: '',
    startDateTime: new Date(),
    endDateTime: new Date(),
    categoryId: '',
    price: '',
    isFree: false,
    url: '',
}
