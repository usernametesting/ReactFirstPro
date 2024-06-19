import React from 'react';
import './App.css';
import FavoriteFilm from './components/FavoriteFilm';
import Profile from './components/Profile';
import CurrentTime from './components/CurrentTime';
import AnimalProfile from './components/Animal';

function App() {
  
  const animal = {
    name: 'Fluffy',
    type: 'Cat',
    age: 3,
    description: 'A playful and friendly cat',
    image: 'https://th.bing.com/th?id=OIP.TzP2op3lkhlTh6oOHamacAHaHa&w=249&h=249&c=8&rs=1&qlt=90&o=6&dpr=1.6&pid=3.1&rm=2'
  };

  const user = {
    fullName: 'John Doe',
    phone: '+1 123 456 7890',
    email: 'example@mail.com',
    city: 'New York',
    experience: [
      { id: 1, company: 'Company A', role: 'Role A', years: '2018-2020' },
      { id: 2, company: 'Company B', role: 'Role B', years: '2020-2022' },
    ],
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    photo: 'https://th.bing.com/th?id=OIP.mrfb_atnkblnmsDiAbLNKwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.6&pid=3.1&rm=2'
  };

  return (
    <div className="App">

      {/* Film component */}
      {/* <FavoriteFilm 
        title="Kurtlar Vadisi Pusu" 
        director="Serdar Akar" 
        year="2007" 
        studio="Pana Film" 
        posterUrl="https://th.bing.com/th?id=OIP.WqF4zP0KP6RH6EnWrO3djAHaKI&w=213&h=292&c=8&rs=1&qlt=90&o=6&dpr=1.6&pid=3.1&rm=2"
      /> */}


      {/* ofiicial page component */}
      {/* <Profile user={user}/> */}

      {/* current time */}
      {/* <CurrentTime></CurrentTime>/ */}

      {/* animal info component */}
      {/* <AnimalProfile animal={animal}></AnimalProfile> */}
    </div>
  );
}

export default App;
