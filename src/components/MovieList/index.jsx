import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";

function MovieList() {
//   const [selectValue, setSelectValue] = useState([
//     {
//       id: 1,
//       name: "type",
//       value: [
//         { id: 0, name: "ALL" },
//         { id: 1, name: "Drama" },
//         { id: 2, name: "Action" },
//         { id: 3, name: "Comedy" },
//         { id: 4, name: "Thriler" },
//       ],
//     },
//     {
//       id: 2,
//       name: "Country",
//       value: [
//         { id: 0, name: "ALL" },
//         { id: 1, name: "United States" },
//         { id: 2, name: "Canada" },
//         { id: 3, name: "France" },
//         { id: 4, name: "Germany" },
//       ],
//     },
//     {
//       id: 3,
//       name: "year",
//       value: [
//         { id: 0, name: "ALL" },
//         { id: 1, name: "2023" },
//         { id: 2, name: "2022" },
//         { id: 3, name: "2021" },
//         { id: 4, name: "2020" },
//         { id: 5, name: "2019" },
//         { id: 6, name: "2018" },
//         { id: 7, name: "2017" },
//         { id: 8, name: "2016" },
//         { id: 9, name: "2015" },
//         { id: 10, name: "2014" },
//         { id: 11, name: "2013" },
//         { id: 11, name: "1994" },
//         { id: 13, name: "Trước 2012" },
//       ],
//     },
//     {
//       id: 4,
//       name: "duration",
//       value: [
//         { id: 0, name: "ALL" },
//         { id: 1, name: "United States" },
//         { id: 2, name: "Canada" },
//         { id: 3, name: "France" },
//         { id: 4, name: "Germany" },
//       ],
//     },
//     {
//       id: 5,
//       name: "Country",
//       value: [
//         { id: 0, name: "ALL" },
//         { id: 1, name: "United States" },
//         { id: 2, name: "Canada" },
//         { id: 3, name: "France" },
//         { id: 4, name: "Germany" },
//       ],
//     },
//     {
//       id: 6,
//       name: "date",
//       value: [
//         { id: 0, name: "ALL" },
//         { id: 1, name: "United States" },
//         { id: 2, name: "Canada" },
//         { id: 3, name: "France" },
//         { id: 4, name: "Germany" },
//       ],
//     },
//   ]);

  const [movieList, setMovieList] = useState([
    {
      id: 1,
      name: "The Shawshank Redemption",
      year: "1994",
      duration: "2h 22min",
      genre: "Drama, Crime, Comedy",
      rating: "9.3",
      image:
        "https://i.pinimg.com/236x/29/72/ae/2972ae2a99d5ed137af61ae52834b5b5.jpg",
      trailer: "https://www.youtube.com/watch?v=6hB3S9bIaco",
    },
    {
      id: 2,
      name: "The Godfather",
      year: "1972",
      duration: "2h 55min",
      genre: "Crime, Drama",
      rating: "9.2",
      image:
        "https://i.pinimg.com/236x/29/72/ae/2972ae2a99d5ed137af61ae52834b5b5.jpg",
      trailer: "https://www.youtube.com/watch?v=6hB3S9bIaco",
    },
    {
      id: 3,
      name: "The Godfather: Part II",
      year: "1974",
      duration: "3h 22min",
      genre: "Crime, Drama",
      rating: "9.0",
      image:
        "https://i.pinimg.com/236x/29/72/ae/2972ae2a99d5ed137af61ae52834b5b5.jpg",
      trailer: "https://www.youtube.com/watch?v=6hB3S9bIaco",
    },
    {
      id: 4,
      name: "The Godfather: Part II",
      year: "1974",
      duration: "3h 22min",
      genre: "Crime, Drama",
      rating: "9.0",
      image:
        "https://i.pinimg.com/236x/29/72/ae/2972ae2a99d5ed137af61ae52834b5b5.jpg",
      trailer: "https://www.youtube.com/watch?v=6hB3S9bIaco",
    },
    {
      id: 5,
      name: "The Godfather: Part II",
      year: "1974",
      duration: "3h 22min",
      genre: "Crime, Drama",
      rating: "9.0",
      image:
        "https://i.pinimg.com/236x/29/72/ae/2972ae2a99d5ed137af61ae52834b5b5.jpg",
      trailer: "https://www.youtube.com/watch?v=6hB3S9bIaco",
    },
    {
      id: 6,
      name: "The Godfather: Part II",
      year: "1974",
      duration: "3h 22min",
      genre: "Crime, Drama",
      rating: "9.0",
      image:
        "https://i.pinimg.com/236x/29/72/ae/2972ae2a99d5ed137af61ae52834b5b5.jpg",
      trailer: "https://www.youtube.com/watch?v=6hB3S9bIaco",
    },
    {
      id: 7,
      name: "The Godfather: Part II",
      year: "1974",
      duration: "3h 22min",
      genre: "Crime, Drama",
      rating: "9.0",
      image:
        "https://i.pinimg.com/236x/29/72/ae/2972ae2a99d5ed137af61ae52834b5b5.jpg",
      trailer: "https://www.youtube.com/watch?v=6hB3S9bIaco",
    },
    {
      id: 8,
      name: "The Godfather: Part II",
      year: "1974",
      duration: "3h 22min",
      genre: "Crime, Drama",
      rating: "9.0",
      image:
        "https://i.pinimg.com/236x/29/72/ae/2972ae2a99d5ed137af61ae52834b5b5.jpg",
      trailer: "https://www.youtube.com/watch?v=6hB3S9bIaco",
    },
    {
      id: 9,
      name: "The Godfather: Part II",
      year: "1974",
      duration: "3h 22min",
      genre: "Crime, Drama",
      rating: "9.0",
      image:
        "https://i.pinimg.com/236x/29/72/ae/2972ae2a99d5ed137af61ae52834b5b5.jpg",
      trailer: "https://www.youtube.com/watch?v=6hB3S9bIaco",
    },
    {
      id: 10,
      name: "The Godfather: Part II",
      year: "1974",
      duration: "3h 22min",
      genre: "Crime, Drama",
      rating: "9.0",
      image:
        "https://i.pinimg.com/236x/29/72/ae/2972ae2a99d5ed137af61ae52834b5b5.jpg",
      trailer: "https://www.youtube.com/watch?v=6hB3S9bIaco",
    },
    {
      id: 11,
      name: "The Godfather: Part II",
      year: "1974",
      duration: "3h 22min",
      genre: "Crime, Drama",
      rating: "9.0",
      image:
        "https://i.pinimg.com/236x/29/72/ae/2972ae2a99d5ed137af61ae52834b5b5.jpg",
      trailer: "https://www.youtube.com/watch?v=6hB3S9bIaco",
    },
    {
      id: 12,
      name: "The Godfather: Part II",
      year: "2023",
      duration: "3h 22min",
      genre: "Crime, Drama",
      rating: "9.0",
      image:
        "https://i.pinimg.com/236x/29/72/ae/2972ae2a99d5ed137af61ae52834b5b5.jpg",
      trailer: "https://www.youtube.com/watch?v=6hB3S9bIaco",
    },
    {
      id: 13,
      name: "The Godfather: Part II",
      year: "2023",
      duration: "3h 22min",
      genre: "Crime, Drama",
      rating: "9.0",
      image:
        "https://i.pinimg.com/236x/29/72/ae/2972ae2a99d5ed137af61ae52834b5b5.jpg",
      trailer: "https://www.youtube.com/watch?v=6hB3S9bIaco",
    },
  ]);

//   const [selectedValue, setSelectedValue] = useState([]);
//   const [DataReload, setDataReload] = useState([]);

//   useEffect(() => {
//     if (selectedValue.length > 0) {
//       const result = movieList.filter((item) => {
//         return (
//           selectedValue.includes(item.genre.split(",")[0].trim()) ||
//           selectedValue.includes(item.year)
//         );
//       });

//       setDataReload(result);
//       console.log(result, "result");
//     }
//   }, [selectedValue]);

  return (
    <div>

      <div className="grid grid-cols-6 gap-2  mt-[5%] p-2 ">
      
          <div>
            <span className="font-bold ">{item.name}: </span>
            <label
              for="countries"
              class=" mb-2 text-sm font-medium text-primary dark:text-white"
            >
              Select an option
            </label>
            <select
              id="countries "
              className="bg-gray-50 border border-gray-300 text-primary text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 cursor-pointer"
              onChange={(e) => {
                setSelectedValue([
                  ...selectedValue,
                  e.target.options[e.target.selectedIndex].text,
                ]);
              }}
            >
              {item.value.map((item) => (
                <option value={item.id}>{item.name}</option>
              ))}
            </select>
          </div>
    
      </div>

      <div className="grid grid-cols-4 gap-1">
        {movieList.map((movie) => (
          <div className="bg-white rounded-lg shadow-lg overflow-hidden ">
            <img
              className="w-full h-26 object-cover object-center"
              src={movie.image}
              alt="The Shawshank Redemption"
            />
            <div className="p-4">
              <h2 className="text-gray-900 font-bold text-lg mb-2 justify-center items-center flex">
                {movie.name}
              </h2>
              <p className="text-gray-700 text-xs mb-2">
                <strong>Year:</strong> {movie.year}
              </p>
              <p
                className="
                  text-gray-700 text-xs mb-2
                  "
              >
                <strong>Duration:</strong> {movie.duration}
              </p>
              <p className="text-gray-700 text-xs mb-2">
                <strong>Genre:</strong> {movie.genre}
              </p>
              <a
                href="https://www.youtube.com/watch?v=6hB3S9bIaco"
                target="_blank"
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full justify-center items-center flex"
              >
                Watch Trailer
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
