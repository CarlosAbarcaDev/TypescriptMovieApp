export const ToggleFavorite = (data) => {
  let favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
  console.log('favorites', favorites)
  console.log('data', data)
  const selectionFlag: any[] = [];
  favorites.forEach((element) => {
    if (element.id === data.id) {
      selectionFlag.push(data);
    }
  });
  if (selectionFlag.length > 0) {
    favorites = favorites.filter((movie) => movie.id !== data.id);
  } else {
    favorites.push(data);
  }
  localStorage.setItem("favorites", JSON.stringify(favorites));
};
