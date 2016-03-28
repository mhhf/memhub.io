Landing = React.createClass({
  render() {
    return <center id="landing">
      <h1>memhub.io</h1>
      <h2>A platform for directed&nbsp;
        <a href="https://en.wikipedia.org/wiki/Memetics">memetic</a>&nbsp;
        evolution trough &nbsp;
        <a href="https://en.wikipedia.org/wiki/Attention_economy">attention economy</a>.</h2>
      <br />
      <ul className="links">
        <li className="wp">
          <a href="/whitepaper"><img src="whitepaper.svg" alt=""/></a>
        </li>
        <li className="demo">
          <a href="/demo"><img src="demo.svg" alt=""/></a>
        </li>
      </ul>
    </center>;
  }
});
