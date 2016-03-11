App = React.createClass({
  render() {
    return (
      <div className="app-root">
        <div className="container">
          {this.props.yield}
        </div>
      </div>
    );
  }
});
