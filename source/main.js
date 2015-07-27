var React = require('react');
var TestElement = React.createClass({
    render: function() {
        return (<div>
            <h1>Test Element</h1>        
            <hr />
            <p>This is beautiful line</p>
            <hr />
            <p>Testing</p>
        </div>);
    }
});
React.render(<TestElement />, document.body);
