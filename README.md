# react-linkedstate-mixin

[react-linkedstate-mixin](https://www.npmjs.com/package/react-addons-linked-state-mixin) packaged for [Meteor](https://meteor.com).

## Installation

    meteor add victoransel:react-linkedstate-mixin

## Example

```js
var Component = React.createClass({
  mixins: [LinkedStateMixin],
  getInitialState: function() {
    return {message: 'Hello!'};
  },
  render: function() {
    return <input type="text" valueLink={this.linkState('message')} />;
  }
});
```

Thanks [meteor-react-timer-mixin] (https://github.com/codeempathy/meteor-react-timer-mixin) for the example.
