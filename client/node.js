'use strict';

class NNode {
  constructor (name, terminal) {
    if( NNode.nodes[name] ) return NNode.nodes[name];
    NNode.nodes[name] = this;
    this.name = name;
    this.nodes = {};
    this.required = true;
    this.terminal = (typeof terminal === 'string')?terminal:false;
    this.array = false;
  }

  addNode (name) {
    let node = new NNode(name);
    NNode.nodes[name] = node;
    this.nodes[name] = node;
    return node;
  }

  format() {
    let args = [];
    if (this.terminal) args.push('shape=box');
    if (this.required) args.push('color=red');
    if (this.array) args.push('style=dashed');
    if (args.length > 0) console.log(`"${this.name}" [${args.join(', ')}];`);
    _.each(this.nodes, (node, name) => {
      console.log(`"${this.name}" -> "${name}";`);
      node.format();
    });
  }

  propagate ( parents ) {
    if( this.terminal ) {
      let t = new Rule(this.name, this.terminal);
      let rule = new Rule('R_'+(NNode.rc++));
      _.each(parents, r => r.addTransition([t,rule]));
      return [rule];
    }
    var arrayRule;
    if( this.array ) {
      arrayRule = new Rule('R_'+(NNode.rc++));
      _.each(parents, rule => {
        rule.addTransition([arrayRule]);
      })
      parents = [arrayRule];
      // parents = _.union(parents, node.propagate(parents, parents))
    }
    _.each(this.nodes, (node, name) => {
      if( !node.required ) {
        parents = _.union( node.propagate(parents), parents );
      } else {
        parents = node.propagate(parents);
      }
    });
    if( this.array ) {
      _.each(parents, rule => {
        rule.addTransition([arrayRule]);
      });
    }
    return parents;
  }
}
NNode.rc = 0;
NNode.nodes={};
NNode.toGrammer = function() {
  var startRule = new Rule('#');
  var rules = NNode.nodes['#'].propagate([startRule]);
  var endRule = new Rule('EOF','EOF');
  _.each(rules, r => r.addTransition([endRule]));
  Rule.format();
  Rule.propagateLookahead();
}
window.NNode = NNode;
