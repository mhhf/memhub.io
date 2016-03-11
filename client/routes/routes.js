FlowRouter.route('/whitepaper', {
  action(params) {
    ReactLayout.render( App, { yield: <Whitepaper /> } );
    // const containerElement = document.getElementById("app");
    // ReactDOM.render(<SomeComponent />, containerElement);
  }
});

FlowRouter.route('/schemaform', {
  action(params) {
    ReactLayout.render( App, { yield: <SchemaForm /> } );
    // const containerElement = document.getElementById("app");
    // ReactDOM.render(<SomeComponent />, containerElement);
  }
});
