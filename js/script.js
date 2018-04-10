var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    src: 'harry.jpg'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    src: 'KrolLew.jpg'
  },
  {
    id: 3,
    title: 'Shreck',
    desc: 'Film o zielonym ogrze',
    src: 'Shreck.jpg'
  },
  {
    id: 4,
    title: 'Madagaskar',
    desc: 'Film o zwierzętach w zoo',
    src: 'Madagaskar.jpg'
  }
];
var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id},
         React.createElement('h2', {}, movie.title),
         React.createElement('p', {}, movie.desc),
         React.createElement('img', {src: movie.src}  )
    );
});
var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  );
  ReactDOM.render(element, document.getElementById('app'));

//my code

  var Movie = React.createClass({
      render: function(movie){
      return React.createElement('li', {key: movie.id});      
      }
  });