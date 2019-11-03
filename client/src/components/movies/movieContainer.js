import React from 'react';
import MovieCard from './movieCard';
import './movieContainer.css';

const moviess = [
  {
    popularity: 441.192,
    vote_count: 207,
    video: false,
    poster_path: '/vqzNJRH4YyquRiWxCCOH0aXggHI.jpg',
    id: 290859,
    adult: false,
    backdrop_path: '/a6cDxdwaQIFjSkXf7uskg78ZyTq.jpg',
    original_language: 'en',
    original_title: 'Terminator: Dark Fate',
    genre_ids: [28, 878],
    title: 'Terminator: Dark Fate',
    vote_average: 6.7,
    overview:
      "More than two decades have passed since Sarah Connor prevented Judgment Day, changed the future, and re-wrote the fate of the human race. Dani Ramos is living a simple life in Mexico City with her brother and father when a highly advanced and deadly new Terminator – a Rev-9 – travels back through time to hunt and kill her. Dani's survival depends on her joining forces with two warriors: Grace, an enhanced super-soldier from the future, and a battle-hardened Sarah Connor. As the Rev-9 ruthlessly destroys everything and everyone in its path on the hunt for Dani, the three are led to a T-800 from Sarah’s past that may be their last best hope.",
    release_date: '2019-11-01'
  },
  {
    popularity: 172.762,
    vote_count: 61,
    video: false,
    poster_path: '/4E2lyUGLEr3yH4q6kJxPkQUhX7n.jpg',
    id: 568012,
    adult: false,
    backdrop_path: '/iGnCzXEx0cFlUbpyAMeHwHWhPhx.jpg',
    original_language: 'ja',
    original_title: 'ワンピーススタンピード',
    genre_ids: [28, 12, 16],
    title: 'One Piece: Stampede',
    vote_average: 7.6,
    overview:
      "One Piece: Stampede is a stand-alone film that celebrates the anime's 20th Anniversary and takes place outside the canon of the \"One Piece\" TV series. Monkey D. Luffy and his Straw Hat pirate crew are invited to a massive Pirate Festival that brings many of the most iconic characters from throughout the franchise to participate in competition with the Straw Hats to find Roger's treasure. It also pits the Straw Hats against a new enemy named Bullet, a former member of Roger's crew.",
    release_date: '2019-10-24'
  },
  {
    popularity: 128.368,
    vote_count: 133,
    video: false,
    poster_path: '/g4z7mDmJmx23vsVg6XNWcnXb6gc.jpg',
    id: 480105,
    adult: false,
    backdrop_path: '/3uG3aOhEzFCjcQulsJQiAzLSrw8.jpg',
    original_language: 'en',
    original_title: '47 Meters Down: Uncaged',
    genre_ids: [12, 18, 27, 53],
    title: '47 Meters Down: Uncaged',
    vote_average: 5.1,
    overview:
      "A group of backpackers diving in a ruined underwater city discover that they have stumbled into the territory of the ocean's deadliest shark species.",
    release_date: '2019-08-16'
  },
  {
    popularity: 130.153,
    vote_count: 229,
    video: false,
    poster_path: '/pIcV8XXIIvJCbtPoxF9qHMKdRr2.jpg',
    id: 338967,
    adult: false,
    backdrop_path: '/jCCdt0e8Xe9ttvevD4S3TSMNdH.jpg',
    original_language: 'en',
    original_title: 'Zombieland: Double Tap',
    genre_ids: [28, 35, 27],
    title: 'Zombieland: Double Tap',
    vote_average: 7.5,
    overview:
      'The group will face a new zombie threat as a new breed of zombie has developed. This new super-zombie type is faster, bigger, and stronger than the previous strain of zombies and harder to kill. These super-zombies have started grouping up into a horde going from city to city leaving a path of destruction behind them.',
    release_date: '2019-10-18'
  },
  {
    popularity: 96.183,
    vote_count: 80,
    video: false,
    poster_path: '/p69QzIBbN06aTYqRRiCOY1emNBh.jpg',
    id: 501170,
    adult: false,
    backdrop_path: '/4D4Ic9N4tnwaW4x241LGb1XOi7O.jpg',
    original_language: 'en',
    original_title: 'Doctor Sleep',
    genre_ids: [27],
    title: 'Doctor Sleep',
    vote_average: 7.1,
    overview:
      'A traumatized, alcoholic Dan Torrance meets Abra, a kid who also has the ability to "shine." He tries to protect her from the True Knot, a cult whose goal is to feed off people like them in order to remain immortal.',
    release_date: '2019-11-08'
  },
  {
    popularity: 46.081,
    vote_count: 11,
    video: false,
    poster_path: '/eXH2w0Ylh706Rwj6CHFm1FKRBXG.jpg',
    id: 398978,
    adult: false,
    backdrop_path: '/aZ1ZqJ4uO1RK5gU5jRsO4qG7rJo.jpg',
    original_language: 'en',
    original_title: 'The Irishman',
    genre_ids: [80, 18],
    title: 'The Irishman',
    vote_average: 8.5,
    overview:
      'World War II veteran and mob hitman Frank "The Irishman" Sheeran recalls his possible involvement with the slaying of union leader Jimmy Hoffa.',
    release_date: '2019-11-01'
  },
  {
    popularity: 57.979,
    vote_count: 45,
    video: false,
    poster_path: '/fjmMu9fpqMMF17mCyLhNfkagKB0.jpg',
    id: 578189,
    adult: false,
    backdrop_path: '/zBAoNL50oFRCAJvEEQEKD8M48pV.jpg',
    original_language: 'en',
    original_title: 'Black and Blue',
    genre_ids: [28, 80, 18],
    title: 'Black and Blue',
    vote_average: 5.4,
    overview:
      "Exposure follows a rookie Detroit African-American female cop who stumbles upon corrupt officers who are murdering a drug dealer, an incident captured by her body cam. They pursue her through the night in an attempt to destroy the footage, but to make matters worse, they've tipped off a criminal gang that she's responsible for the dealer's death.",
    release_date: '2019-10-25'
  },
  {
    popularity: 43.415,
    vote_count: 2,
    video: false,
    poster_path: '/yYywDgakDIT3TRkJ6uwA21vquih.jpg',
    id: 416153,
    adult: false,
    backdrop_path: '/uTfdOozort4sp9kukWxEmdmRsqJ.jpg',
    original_language: 'en',
    original_title: 'Arctic Dogs',
    genre_ids: [16],
    title: 'Arctic Dogs',
    vote_average: 7.8,
    overview:
      'Animals band together to save the day when the evil Otto Von Walrus hatches a sinister scheme to accelerate global warming and melt the Arctic Circle.',
    release_date: '2019-11-01'
  },
  {
    popularity: 43.636,
    vote_count: 24,
    video: false,
    poster_path: '/qCDPKUMX5xrxxQY8XhGVCKO3fks.jpg',
    id: 599975,
    adult: false,
    backdrop_path: '/hzL2P0tcU62A6JHPhprI8ZyBI73.jpg',
    original_language: 'en',
    original_title: 'Countdown',
    genre_ids: [27, 53],
    title: 'Countdown',
    vote_average: 6.8,
    overview:
      'A young nurse downloads an app that tells her she only has three days to live. With time ticking away and a mysterious figure haunting her, she must find a way to save her life before time runs out.',
    release_date: '2019-10-25'
  },
  {
    popularity: 39.46,
    vote_count: 2,
    video: false,
    poster_path: '/rsUs58bDqpJJxZSOebZOMN9gzw2.jpg',
    id: 506528,
    adult: false,
    backdrop_path: '/f3Nm3sKGRrM2cVzOVPx6IevSmkS.jpg',
    original_language: 'en',
    original_title: 'Harriet',
    genre_ids: [18, 36],
    title: 'Harriet',
    vote_average: 10,
    overview:
      'The story of Harriet Tubman, who helped free hundreds of slaves from the South after escaping from slavery herself in 1849.',
    release_date: '2019-11-01'
  },
  {
    popularity: 32.194,
    vote_count: 4,
    video: false,
    poster_path: '/2wm20cbkH1L8nA54Gtwfgz2hTqo.jpg',
    id: 504562,
    adult: false,
    backdrop_path: '/visyTVDc7SmudN85WPCQIhMpyP3.jpg',
    original_language: 'en',
    original_title: 'Motherless Brooklyn',
    genre_ids: [80, 18],
    title: 'Motherless Brooklyn',
    vote_average: 8,
    overview:
      "Lionel Essrog, a private detective living with Tourette syndrome, ventures to solve the murder of his mentor and best friend — a mystery that carries him from the gin-soaked jazz clubs of Harlem to the slums of Brooklyn to the gilded halls of New York's power brokers.",
    release_date: '2019-11-01'
  },
  {
    popularity: 39.826,
    vote_count: 0,
    video: false,
    poster_path: '/zHQFqG0e5p9Fwhv5v6XIP9fLtYk.jpg',
    id: 330457,
    adult: false,
    backdrop_path: '/qxSi1e8ht92grVUoApGfz9oCvJv.jpg',
    original_language: 'en',
    original_title: 'Frozen II',
    genre_ids: [12, 16, 35, 14, 10402, 10751],
    title: 'Frozen II',
    vote_average: 0,
    overview:
      'Elsa, Anna, Kristoff and Olaf are going far in the forest to know the truth about an ancient mystery of their kingdom.',
    release_date: '2019-11-22'
  },
  {
    popularity: 33.174,
    vote_count: 40,
    video: false,
    poster_path: '/3nk9UoepYmv1G9oP18q6JJCeYwN.jpg',
    id: 503919,
    adult: false,
    backdrop_path: '/qlYhhBUseMUawwbvHCdPLXvBELv.jpg',
    original_language: 'en',
    original_title: 'The Lighthouse',
    genre_ids: [18, 14, 27],
    title: 'The Lighthouse',
    vote_average: 8.3,
    overview:
      'The hypnotic and hallucinatory tale of two lighthouse keepers on a remote and mysterious New England island in the 1890s.',
    release_date: '2019-10-18'
  },
  {
    popularity: 30.651,
    vote_count: 81,
    video: false,
    poster_path: '/7ht2IMGynDSVQGvAXhAb83DLET8.jpg',
    id: 565310,
    adult: false,
    backdrop_path: '/8TY7fNaAYIOaQjcvqSoK81XNlaL.jpg',
    original_language: 'en',
    original_title: 'The Farewell',
    genre_ids: [35, 18],
    title: 'The Farewell',
    vote_average: 7.9,
    overview:
      "A headstrong Chinese-American woman returns to China when her beloved grandmother is given a terminal diagnosis. Billi struggles with her family's decision to keep grandma in the dark about her own illness as they all stage an impromptu wedding to see grandma one last time.",
    release_date: '2019-07-12'
  },
  {
    popularity: 34.361,
    vote_count: 10,
    video: false,
    poster_path: '/ftVSHLDbkVh0XycxGPqszEUyt3T.jpg',
    id: 604165,
    adult: false,
    backdrop_path: '/3yb93vHjVc9amUgLhAHRJGMNGpH.jpg',
    original_language: 'ja',
    original_title: '劇場版 仮面ライダージオウ Over Quartzer!',
    genre_ids: [28, 12, 878],
    title: 'Kamen Rider Zi-O the Movie: Over Quartzer!',
    vote_average: 7.4,
    overview:
      'The Quartzers, calling themselves the Wardens of Time, appear after Sougo Tokiwa has collected all of the Heisei Era Ride Watches. A grand conspiracy behind the birth of the King of Time becomes ever clearer...',
    release_date: '2019-07-26'
  },
  {
    popularity: 36.051,
    vote_count: 422,
    video: false,
    poster_path: '/fapXd3v9qTcNBTm39ZC4KUVQDNf.jpg',
    id: 423204,
    adult: false,
    backdrop_path: '/k2WyDw2NTUIWnuEs5gT7wgrCQg6.jpg',
    original_language: 'en',
    original_title: 'Angel Has Fallen',
    genre_ids: [28],
    title: 'Angel Has Fallen',
    vote_average: 5.7,
    overview:
      'After the events in the previous film, Secret Service agent Mike Banning finds himself framed for an assassination attempt on the President. Pursued by his own agency and the FBI, Banning races to clear his name and uncover the real terrorist threat which has set its sights on Air Force One.',
    release_date: '2019-08-23'
  },
  {
    popularity: 24.139,
    vote_count: 0,
    video: false,
    poster_path: '/ddV9cFT75AHxGmJy9QRtjuE1V35.jpg',
    id: 522162,
    adult: false,
    backdrop_path: '/1ZSjrBUHP2jm1QlQEyLGufL289q.jpg',
    original_language: 'en',
    original_title: 'Midway',
    genre_ids: [28, 18, 36, 10752],
    title: 'Midway',
    vote_average: 0,
    overview:
      'The story of the soldiers and aviators who helped turn the tide of the Second World War during the iconic Battle of Midway in June 1942.',
    release_date: '2019-11-08'
  },
  {
    popularity: 18.624,
    vote_count: 17,
    video: false,
    poster_path: '/6ApDtO7xaWAfPqfi2IARXIzj8QS.jpg',
    id: 359724,
    adult: false,
    backdrop_path: '/n3UanIvmnBlH531pykuzNs4LbH6.jpg',
    original_language: 'en',
    original_title: 'Ford v Ferrari',
    genre_ids: [28, 18],
    title: 'Ford v Ferrari',
    vote_average: 7.9,
    overview:
      'American car designer Carroll Shelby and the British-born driver Ken Miles work together to battle corporate interference, the laws of physics, and their own personal demons to build a revolutionary race car for Ford Motor Company and take on the dominating race cars of Enzo Ferrari at the 24 Hours of Le Mans in France in 1966.',
    release_date: '2019-11-15'
  },
  {
    popularity: 21.557,
    vote_count: 176,
    video: false,
    poster_path: '/pWt1iRuhNpeVDNP2QiUT2C5OiBt.jpg',
    id: 535544,
    adult: false,
    backdrop_path: '/dixk6fO4P71WJsJgbdzLHEUpJgA.jpg',
    original_language: 'en',
    original_title: 'Downton Abbey',
    genre_ids: [18],
    title: 'Downton Abbey',
    vote_average: 7.2,
    overview:
      'The beloved Crawleys and their intrepid staff prepare for the most important moment of their lives. A royal visit from the King and Queen of England will unleash scandal, romance and intrigue that will leave the future of Downton hanging in the balance.',
    release_date: '2019-09-20'
  },
  {
    popularity: 8.912,
    vote_count: 0,
    video: false,
    poster_path: '/sDS0X3W2XxHO8zuw5Xl7SPYUAP0.jpg',
    id: 630937,
    adult: false,
    backdrop_path: '/fubEVzx4JEiLyNlJH3ult4H1Dgb.jpg',
    original_language: 'sk',
    original_title: 'Amnestie',
    genre_ids: [18, 53],
    title: 'Amnesty',
    vote_average: 0,
    overview: '',
    release_date: '2019-10-31'
  }
];

function MovieContainer() {
  return (
    <div className="movie-container">
      {moviess.map(mov => (
        <MovieCard movie={mov}></MovieCard>
      ))}
    </div>
  );
}

export default MovieContainer;
