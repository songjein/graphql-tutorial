## Query Example

```
query{
  people {
    id
    name
    age
  }
  person(id: 2) {
    name
    age
  }
}


query {
  movie(id:1) {
    score
  }
  movies{
    name
    score
  }
}

mutation {
  addMovie(name:"RockandRolla", score:59) {
    name
  }
}

mutation{
  deleteMovie(id: 1)
}


query{
  movies_from_api(limit:1, rating:1) {
    id
    title
    medium_cover_image
    summary
    rating
  }
  movie_from_api(id: 16308){
    title
  }
  suggestions_from_api(id: 16308){
    title
  }
}
```