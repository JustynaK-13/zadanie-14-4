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
 

 



/*kod  do sprawdzenia

  var Movie = React.createClass({
    propTypes: {
      Movie: React.PropTypes.object.isRequired,
    },
      render: function() {
        return (
            React.createElement('li', {},
              React.createElement('MovieTitle', {},title: this.props.title),
              React.createElement('MovieDesc', {}, desc: this.props.desc),
              React.createElement('MovieImg',{src: this.props.img}),
            )
        )
      }
  });

var MovieTitle = React.createClass({
  propTypes: {
    title: react.propTypes.title.isRequired,
    },
  render: function() {
    return (
      React.createElement('h2', {}, this.props.title )
    )
  }
});

var MovieDesc = React.createClass({
  propTypes: {
    desc: React.propTypes.desc.isRequired,
  },

  render: function() {
    return (
      React.createElement('p', {}, this.props.desc)
    )
  }
});

var MovieImg = React.createClass({
  propTypes: {
    img: React.propTypes.img.isRequired,
  },

  render: function() {
    return (
      React.createElement('img' {src: this.props.img})
      )
  }
});
*/


 ReactDOM.render(element, document.getElementById('app'));