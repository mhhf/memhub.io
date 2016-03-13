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

const log = (type) => console.log.bind(console, type);

var obj = {header:{title: 'cat corp'}};


var parseRules = function(json, name) {
  // if(typeof json.title === 'string') name = json.title;
  let rule = new NNode(name);
  if (json.type === 'object') {
    let required = json.required || [];
    let cname = name;
    let parent = name;
    _.each(json.properties, (ctx, ctxName) => {
      let rule_ = rule.addNode(name+'/'+ctxName);
      if (required.indexOf(ctxName) === -1) rule_.required = false;
      parseRules(ctx, name+'/'+ctxName);
    });
  } else if (json.type === 'string') {
    // TODO - resolve Atoms
    rule = rule.addNode(name + '/string');
    rule.terminal = 'String';
  } else if (json.type === 'array') {
    // TODO - support min and max arrays
    rule = rule.addNode(name + '/items');
    rule.array = true;
    parseRules(json.items, name+'/items');
  } else {
    // throw new Error(`type "${json.type}" not supported.`);
  }
}



SchemaForm = React.createClass({
  componentDidMount () {
    var that = this;
    var ace = AceEditor.instance("archy",{
      theme:"monokai",
      mode:"json"
    }, function(editor) {
      editor.on('change', function(o,e,b) {
        let value = e.getValue();
        try {
          var json = JSON.parse(value);
          // NNode 
          Rule.sc=1;
          Rule.sm = {}
          Rule.delimiterCounter = 0;
          Rule.rules = {};
          Rule.ruleCounter = 0;
          NNode.rc = 0;
          NNode.nodes={};
          that.setState({schema:json});
          parseRules(json, '#');
          NNode.toGrammer();
          let g = Rule.format();
          let s = Rule.serialize();
          console.log(g);
          document.getElementById('regLang').value = g;
          document.getElementById('regLangS').value = s;
        } catch(e) {
        }
      });
    });
    
    parseRules(schema, '#');
    NNode.toGrammer();
    let g = Rule.format();
    let s = Rule.serialize();
    document.getElementById('regLang').value = g;
    document.getElementById('regLangS').value = s;
    document.getElementById('objD').value = JSON.stringify(obj,false,2);
  },

  getInitialState() {
    return {obj: {}, schema: schema, gram:''};
  },

  onChange (data) {
    document.getElementById('objD').value = JSON.stringify(data.formData,false,2);
  },

  render() {


    return <div className="splitView">
        <div className="left">
          <h2>Language</h2>
          <span>currently only string, object and array are supported</span>
          <div id='archy'>
            {JSON.stringify(schema,false,2)}
          </div>
          <h2>regular grammar</h2>
          <textarea id="regLang" name="" cols="30" rows="10">
          </textarea>
          <h2>serialized grammar</h2>
          <textarea id="regLangS" name="" cols="30" rows="10">
          </textarea>
        </div>
        <div className="right">
          <h2>Form</h2>
          <Form schema={this.state.schema}
            formData={obj}
            onChange={this.onChange}
            onSubmit={log("submitted")}
            onError={log("errors")} />
          <h2>Candidate</h2>
          <textarea id="objD" name="" cols="30" rows="10">
          </textarea>
        </div>
        <div className="block">
        </div>
      </div>;
  }
});
