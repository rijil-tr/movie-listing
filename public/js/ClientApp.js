const ce = React.createElement;

const MyTitle = function(props) {
  return ce('div', null, ce('h1', {style: {color: props.color}}, props.title));
};

const MyFirstComponent = function() {
  return ce(
    'div',
    null,
    ce(MyTitle, {color: 'red', title: 'House of Cards'}),
    ce(MyTitle, {color: 'orange', title: 'Orange is the New Black'}),
    ce(MyTitle, {color: 'green', title: 'Stranger Things'})
  );
};

ReactDOM.render(ce(MyFirstComponent), document.getElementById('app'));
