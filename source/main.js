var React = require('react');
var TestElement = React.createClass({
    render: function() {
        return (<div>
            <h1>Test Element</h1>        
        </div>);
    }
});
React.render(<TestElement />, document.body);
