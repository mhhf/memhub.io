var toc = require('markdown-toc');
var marked = require('marked');

// // Async highlighting with pygmentize-bundled
// marked.setOptions({
//   highlight: function (code, lang, callback) {
//     require('pygmentize-bundled')({ lang: lang, format: 'html' }, code, function (err, result) {
//       callback(err, result.toString());
//     });
//   }
// });
//
Whitepaper = React.createClass({
  componentDidMount() {
    var chart = c3.generate({
        data: {
        columns: [
          ['Alice', 40],
          ['Bob', 30],
          ['Charlie',20],
          ['Dave', 10]
          ],
            type : 'pie',
            colors: {
                Alice:  '#4d15b8',
                Bob:    '#15b859',
                Charlie: '#e0c61a',
                Dave: '#e0351a'
            },
        },
        bindto: '#chart1'
    });

    var chart = c3.generate({
      data: {
        columns: [
          ['Alice', 40,16,0],
          ['Bob', 0,30,0],
          ['Charlie', 0,0,20],
          ['Dave', 10,10,10]
        ],
        type: 'bar',
        groups: [
          ['Alice', 'Bob', 'Charlie', 'Dave']
        ]
      },
      grid: {
        y: {
          lines: ["a","b","c"]
        }
      },
      axis: {
        x: {
          tick: {
            format: function( id ){
              switch (id){
                case 0: return 'Awesomecorp';
                case 1: return 'OMG systems';
                case 2: return 'cat.svg';
              }
            }
          }
        }
      },
      bindto: '#chart'
    });
  },
  render() {

    var paper = _.values(mkd);

    paper = paper.map(md => md.replace(/\$\$([^\$]*)\$\$/gm, function(a,b) {
      let html = `<center>${katex.renderToString(b)}</center>`;
      return html;
    }).replace(/\$([^\$]*)\$/gm, function(a,b) {
      let html = katex.renderToString(b);
      return html;
    }));
    // paper = [(toc(paper.join('')).content)].concat(paper);
    let content = {__html: paper.map(md => marked(md)).join('')};
    return <div className="whitepaper">
      <div dangerouslySetInnerHTML={content} />
      <SchemaForm />
    </div>;
  }
});
