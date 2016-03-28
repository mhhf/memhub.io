FlowRouter.route('/', {
  action(params) {
    ReactLayout.render( App, { yield: <Landing /> } );
    document.body.setAttribute('class', 'landing');
    // const containerElement = document.getElementById("app");
    // ReactDOM.render(<SomeComponent />, containerElement);
  }
});

FlowRouter.route('/whitepaper', {
  action(params) {
    ReactLayout.render( App, { yield: <Whitepaper /> } );
    document.body.setAttribute('class', 'whitepaper');
    // const containerElement = document.getElementById("app");
    // ReactDOM.render(<SomeComponent />, containerElement);
  }
});

FlowRouter.route('/schemaform', {
  action(params) {
    ReactLayout.render( App, { yield: <SchemaForm /> } );
    document.body.setAttribute('class', 'schemaform');
    // const containerElement = document.getElementById("app");
    // ReactDOM.render(<SomeComponent />, containerElement);
  }
});
