const schema = {
  "type": "object",
  "title": "something",
  "required": ["header"],
  "properties": {
    "header": {
      "type": "object",
      "required": ["title"],
      "properties": {
        "title": {
          "type": "string"
        },
        "subtitle": {
          "type": "string"
        },
        "summery": {
          "type": "string"
        }
      }
    },
    "features": {
      "type": "array",
      "items": {
        "type": "string",
        "title": "feature"
      }
    }
  }
};

const formData = {
  a: "v"
};

const log = (type) => console.log.bind(console, type);




SchemaForm = React.createClass({
  componentDidMount () {
    var ace = AceEditor.instance("archy",{
      theme:"monokai",
      mode:"json"
    }, function(editor) {
      editor.setValue(JSON.stringify(schema, false, 2));
    });
  },
  
  render() {
    return <div className="splitView">
        <div id='archy' className="left">
        </div>
        <div className="right">
          <Form schema={schema}
            formData={formData}
            onChange={log("changed")}
            onSubmit={log("submitted")}
            onError={log("errors")} />
        </div>
      </div>;
  }
});
