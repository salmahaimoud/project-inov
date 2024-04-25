const apartments = [
    {
        img: "https://www.centre-meditation-strasbourg.fr/medias/cache//encart/encarts/adobestock-599952038-retouchee-64f5ee577eb88.jpg",
        location: "Kumluca, Turkey",
        description: "Méditation Océane",
        startDate: "2024-05-12",
        endDate: "2024-05-17",
        price: "87",
        rating: "4.75",
    },
    {
        img: "https://www.artofliving.org/in-en/app/uploads/2023/10/art-of-living-meditation-new.jpg",
        location: "Lyon, France",
        description: "Harmonie et Nature",
        startDate: "2024-05-21",
        endDate: "2024-05-26",
        price: "91",
        rating: "4.89",
    },
    {
        img: "https://esprit-calme.fr/wp-content/uploads/2022/08/Promo-PP231.jpg",
        location: "Kalkan, Turkey",
        description: "Zen Mountain",
        startDate: "2024-05-13",
        endDate: "2024-05-18",
        price: "329",
        rating: "4.21",
    },
    {
        img: "https://www.balisilentretreat.com/wp-content/uploads/2019/04/bali-silent-retreat-water-meditation.jpg",
        location: "Bali, Indonesia",
        description: "Retraite Silencieuse de Bali",
        startDate: "2024-06-14",
        endDate: "2024-06-19",
        price: "183",
        rating: "4.76",
    },
    {
        img: "https://marocalitours.com/wp-content/uploads/2021/03/marocalitours-yoga.jpg",
        location: "Dakhla, Morocco",
        description: "Dakhla Spirit",
        startDate: "2024-06-15",
        endDate: "2024-06-20",
        price: "183",
        rating: "4.66",
    },
    {
        img: "https://d3rr2gvhjw0wwy.cloudfront.net/uploads/activity_galleries/295536/2000x2000-0-70-60b41039f539dcbc42d4cec460894e85.jpg",
        location: "Cairo, Egypt",
        description: "Cairo Urban Retreat",
        startDate: "2024-05-12",
        endDate: "2024-05-17",
        price: "502",
        rating: "5.0",
    },
    {
        img: "https://taos-greece.com/wp-content/gallery/frontpage/35.jpg",
        location: "Thasos, Greece",
        description: "Thasos Peaceful Views",
        startDate: "2024-05-12",
        endDate: "2024-05-17",
        price: "87",
        rating: "4.75",
    },
    {
        img: "https://meditation.org.au/images/girl5.jpg",
        location: "Geelong, Australia",
        description: "Australian Beachside Meditation",
        startDate: "2024-05-21",
        endDate: "2024-05-26",
        price: "91",
        rating: "4.89",
    },
    {
        img: "https://shyk.fr/wp-content/uploads/2022/02/cours-de-yoga.jpg",
        location: "Djerba, Tunisia",
        description: "Djerba Zen Sessions",
        startDate: "2024-05-13",
        endDate: "2024-05-18",
        price: "329",
        rating: "4.21",
    },
    {
        img: "https://media.ucpa.com/t_UCPA_Header_480/LA-BALAGUERE/Pyrenees/Catalogne/00002679-la-balaguere-catalogne.jpg",
        location: "Samarkand, Uzbekistan",
        description: "Samarkand Mountain Meditations",
        startDate: "2024-06-15",
        endDate: "2024-06-20",
        price: "183",
        rating: "4.66",
    },
    {
        img: "https://www.menara-tours.com/wp-content/uploads/2021/10/Yoga-Chefchaouen.webp",
        location: "Chefchaouen, Morocco",
        description: "Blue City Calm",
        startDate: "2024-05-12",
        endDate: "2024-05-17",
        price: "502",
        rating: "5.0",
    },
    {
        img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/479537561.jpg?k=3cc7a408b006ebbfd4080b3810a202e59a2b12c4f278711cff605dce80a102c4&o=&hp=1",
        location: "Jeddah, Saudi Arabia",
        description: "Jeddah Beachfront Serenity",
        startDate: "2024-05-12",
        endDate: "2024-05-17",
        price: "87",
        rating: "4.75",
    },
    {
        img: "https://gaijinpot.scdn3.secure.raxcdn.com/app/uploads/sites/4/2020/06/ZazenPrivateSession-1024x682.jpg",
        location: "Kyoto, Japan",
        description: "Kyoto Zen Experience",
        startDate: "2024-05-21",
        endDate: "2024-05-26",
        price: "91",
        rating: "4.89",
    },
    {
        img: "https://i0.wp.com/www.terredasie.net/wp-content/themes/terre-dasie-melkor/images/cours/meditation/yoga-pranayama-rives-gange-inde.jpg?w=1100&ssl=1",
        location: "Beijing, China",
        description: "Beijing Spiritual Harmony",
        startDate: "2024-05-13",
        endDate: "2024-05-18",
        price: "329",
        rating: "4.21",
    },
    {
        img: "https://www.sabaiasia.ru/pictures/Maldives/under-sea-yoga-hurawalhi-5.8-restaurant.jpg",
        location: "Malé, Maldives",
        description: "Maldives Underwater Yoga",
        startDate: "2024-06-14",
        endDate: "2024-06-19",
        price: "183",
        rating: "4.76",
    },
    {
        img: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F626368429%2F1570936715193%2F1%2Foriginal.20231023-114815?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=caeca66f202f3bbf47abef3438f75469",
        location: "Brussels, Belgium",
        description: "Brussels City Calm",
        startDate: "2024-05-12",
        endDate: "2024-05-17",
        price: "502",
        rating: "5.0",
    },
    {
        img: "https://bookretreats.com/assets/photo/retreat/0m/22k/22425/p_797927/1000_1655666918.jpg",
        location: "Amman, Jordan",
        description: "Amman Ancient Peace",
        startDate: "2024-05-12",
        endDate: "2024-05-17",
        price: "502",
        rating: "5.0",
    },
    {
        img: "https://c8.alamy.com/compfr/2pe50bx/happy-girl-fait-des-exercices-de-yoga-et-de-meditation-en-cappadoce-turquie-avec-des-ballons-d-air-chaud-volant-dans-l-arriere-plan-2pe50bx.jpg",
        location: "Cappadocia, Turkey",
        description: "Cappadocia Sky Meditation",
        startDate: "2024-05-12",
        endDate: "2024-05-17",
        price: "87",
        rating: "4.75",
    },
    {
        img: "https://photos.tpn.to/ig/eh/ss/oh/653x490.jpg",
        location: "Madrid, Spain",
        description: "Madrid Mountain Retreat",
        startDate: "2024-05-13",
        endDate: "2024-05-18",
        price: "329",
        rating: "4.21",
    },
    {
        img: "https://www.agnes-delattre.com/wp-content/uploads/2019/10/20190609_204810bis-2.jpg",
        location: "Toulouse, France",
        description: "Toulouse Urban Retreat",
        startDate: "2024-06-14",
        endDate: "2024-06-19",
        price: "183",
        rating: "4.76",
    },
];
export default apartments;
