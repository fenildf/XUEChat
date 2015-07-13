/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-07-09 22:58:50
 * @version $Id$
 */

var React = require('react');
var $ = require('jquery');
var HelloComment = React.createClass({
	render: function() {
		var tit = $('title').text();
		return (
			<div>
				{tit} : {this.props.content}
			</div>
		);
	}
});

