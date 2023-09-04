let movies = [
  {
    id: 1,
    image:
      'https://lumiere-a.akamaihd.net/v1/images/p_disney_elemental_homeent_v1_2292_0312c1d7.jpeg',
    title: 'Элементарно',
    year: 2023,
    genre: 'Мультфильмы',
  },
  {
    id: 2,
    image:
      'https://www.film.ru/sites/default/files/styles/thumb_260x400/public/movies/posters/27740261-1728816.jpg',
    title: 'Зверопой 2',
    year: 2021,
    genre: 'Мультфильмы',
  },
  {
    id: 3,
    image:
      'https://s1.afisha.ru/mediastorage/fb/05/c0391e2ce5b0407ab58f596e05fb.jpg',
    title: 'Холодное сердце',
    year: 2013,
    genre: 'Мультфильмы',
  },
  {
    id: 4,
    image:
      'https://play-lh.googleusercontent.com/JDaO3o9gSs8ikJM8lmV6pySiMWEOcTWOIs1co93r7gufU1auYIHfL-YHAKltfqaWD1sI',
    title: 'Загадочная история Бенджамина Баттона',
    year: 2008,
    genre: 'Фильмы',
  },
  {
    id: 5,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZHV_t3TD3j8fx1mKFmJsQnpmw1kQIqIU_BQ&usqp=CAU',
    title: 'Зверополис',
    year: 2016,
    genre: 'Мультфильмы',
  },
  {
    id: 6,
    image: 'https://www.film.ru/sites/default/files/news/24516716-920695.jpg',
    title: 'Моана',
    year: 2016,
    genre: 'Мультфильмы',
  },
  {
    id: 7,
    image: 'https://www.kino-teatr.ru/art/2895/30589.jpg',
    title: 'Великолепный век',
    year: '2011-2014',
    genre: 'Сериалы',
  },
  {
    id: 8,
    image:
      'https://upload.wikimedia.org/wikipedia/ru/thumb/f/f0/Green_Book.jpg/210px-Green_Book.jpg',
    title: 'Зелёная книга',
    year: 2018,
    genre: 'Фильмы',
  },
  {
    id: 9,
    image: 'https://www.toramp.com/posters/shows/349/width360/349.jpg',
    title: 'Кухня',
    year: '2012-2016',
    genre: 'Сериалы',
  },
  {
    id: 10,
    image:
      'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/a28edb4f-cb94-4b02-8277-ea8bb1fa2577/600x900',
    title: 'Сваты',
    year: '2008-2017',
    genre: 'Сериалы',
  },
  {
    id: 11,
    image:
      'https://upload.wikimedia.org/wikipedia/ru/1/18/Raya_and_the_Last_Dragon.jpeg',
    title: 'Рая и последний дракон',
    year: 2021,
    genre: 'Мультфильмы',
  },
  {
    id: 12,
    image:
      'https://thumbs.dfs.ivi.ru/storage30/contents/4/7/ae15b2314728470e5abb8a8859b3b0.jpg',
    title: 'Маленькие женщины',
    year: 2019,
    genre: 'Фильмы',
  },
  {
    id: 13,
    image:
      'https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/bb8afbd6-c9cd-4631-99e9-3fecf241dbaf/600x900',
    title: 'Достать ножи',
    year: 2019,
    genre: 'Фильмы',
  },
  {
    id: 14,
    image:
      'https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/abaddf0f-81ca-4e86-9aa1-5851977bed3b/600x900',
    title: 'Монте-Карло',
    year: 2011,
    genre: 'Фильмы',
  },
  {
    id: 15,
    image:
      'https://kinogo.zone/uploads/posts/2019-11/1573793034-177647455-ralf-protiv-interneta.jpg',
    title: 'Ральф против интернета',
    year: 2018,
    genre: 'Мультфильмы',
  },
  {
    id: 16,
    image:
      'https://thumbs.dfs.ivi.ru/storage2/contents/6/0/e926217deefe93b26e6150939c0330.jpg',
    title: 'Один дома',
    year: 1990,
    genre: 'Фильмы',
  },
  {
    id: 17,
    image:
      'https://upload.wikimedia.org/wikipedia/ru/b/b4/Harry_Potter_and_the_Philosopher%27s_Stone_%E2%80%94_movie.jpg',
    title: 'Гарри Поттер и филосовский камень',
    year: 2001,
    genre: 'Фильмы',
  },
  {
    id: 18,
    image:
      'https://upload.wikimedia.org/wikipedia/ru/6/6e/Spider-Man_%E2%80%94_No_Way_Home_poster.jpg',
    title: 'Человек-паук: Нет пути домой',
    year: 2021,
    genre: 'Фильмы',
  },
  {
    id: 19,
    image: 'https://www.kino-teatr.ru/movie/posters/big/0/18910.jpg',
    title: 'Друзья',
    year: '1994-2004',
    genre: 'Сериалы',
  },
  {
    id: 20,
    image: 'https://s4.vcdn.biz/static/f/950599381/image.jpg',
    title: '1+1',
    year: 2011,
    genre: 'Фильмы',
  },
];

let row = document.querySelector('.row');
let menuItems = document.querySelectorAll('.menu-item');
let status = 'Все';

const addMoviesRow = () => {
  Array.from(menuItems).forEach((item) => {
    item.style.color = 'grey';
    if (item.textContent === status) {
      item.style.color = 'red';
    }
    item.addEventListener('click', () => {
        status = item.textContent;
        addMoviesRow();
    });
  });
    row.innerHTML = ''

    movies.filter((item) => {
        if (status !== 'Все') {
            return item.genre === status
        }
        return item;
        
    }).forEach((item) => {
        row.innerHTML += `
        <div class="card">
        <img class="card-img"  src="${item.image}" alt="movie"/>
        <h2 class="card-title">${item.title}</h2>
        <p class="card-year">${item.year}</p>
        <h3 class="card-genre">${item.genre}</h3>
        </div>`
    })
};

addMoviesRow();

// light and dark theme
let body = document.querySelector('body')
let lightBtn = document.querySelector('.light-theme')
let darkBtn = document.querySelector('.dark-theme')

function lightTheme() {
    body.className = ''
}
function darkTheme() {
    body.classList.add('dark')
}
lightBtn.addEventListener('click', lightTheme)
darkBtn.addEventListener('click', darkTheme)


