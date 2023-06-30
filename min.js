'use strict';
let numberOfFilms; 

function start () {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');
    
    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms) )    {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','')
    }
                }



const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres:[],
    privat: false
};

function rememberMyFilms (){
    for (let i = 0; i<2; i++)
    {
    let userAsc1 = prompt ('Один из последних просмотренных фильмов?','');
    let userAsc2 = prompt ('На сколько оцените его?','');
    if (userAsc1 != null && userAsc2 != null && userAsc1 != "" && userAsc2 != "" &&  userAsc1.length < 50)
    {
       personalMovieDB.movies[userAsc1] = userAsc2;
    } else {
        i-- ;
    }
    
    }  
}



function seeLvl (){
    if (personalMovieDB.count  <10 && personalMovieDB.count == !"" )
    {
        alert('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count  > 9 && personalMovieDB.count < 30 )
    {
        alert('Вы классический зритель');
    }
      else if (personalMovieDB.count  > 30 )
    {
        alert('Вы киноман');
    }
    else if (personalMovieDB.count  == "" )
    {
        alert('ви не ввели кількість фільмів (((');
    }
}





function writeYourGenres () {
     for (let i = 1;  i <= 3; i++ ){
        
   
    personalMovieDB.genres[i -1 ] = prompt (`Ваш любимый жанр под номером ${i}`);


     }
}
writeYourGenres ();
 
function showMyDB (heeden) {
    if (!heeden) {
        console.log(personalMovieDB);
    }
}
showMyDB (personalMovieDB.privat);