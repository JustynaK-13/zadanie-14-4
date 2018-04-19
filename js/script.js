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




  var Movie = React.createClass({
    propTypes: {
      movie: React.PropTypes.object.isRequired,
    },
      render: function() {
        return (
          React.createElement('li', {},
            React.createElement(MovieTitle, {title: this.props.movie.title}),
            React.createElement(MovieDesc, {desc: this.props.movie.desc}),
            React.createElement(MovieImg, {img: this.props.movie.src}),
          )
        )
      }
  });

var MovieTitle = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
    },
  render: function() {
    return (
      React.createElement('h2', {}, this.props.title )
    )
  }
});

var MovieDesc = React.createClass({
  propTypes: {
    desc: React.PropTypes.string.isRequired,
  },

  render: function() {
    return (
      React.createElement('p', {}, this.props.desc)
    )
  }
});

var MovieImg = React.createClass({
  propTypes: {
    img: React.PropTypes.string.isRequired,
  },

  render: function() {
    return (
      React.createElement('img', {src: this.props.img})
      )
  }
})

var moviesElements = movies.map(function(movie) {
    return React.createElement(Movie, {movie: movie});
});

 
var element = React.createElement('List', {}, moviesElements);
   
ReactDOM.render(element, document.getElementById('app'));