class TradingCard extends React.Component {
	render() {
		return (
			<div className="card">
				<h2>Name: {this.props.name}</h2>
				<img src={this.props.imgUrl} />
				<h2>Skill: {this.props.skill} </h2>
			</div>
		);
	}
}

ReactDOM.render(
	<TradingCard name="Balloonicorn" skill="Video games" imgUrl="/static/img/balloonicorn.jpg" />, 
	document.getElementById('balloonicorn') 
);

ReactDOM.render(
	<TradingCard name="Float" skill="Baking pretzels" imgUrl="/static/img/float.jpg" />,
	document.getElementById('float')
);

ReactDOM.render(
	<TradingCard name="Llambda" skill="Knitting scarves" imgUrl="/static/img/llambda.jpg" />,
	document.getElementById('llambda')
);

ReactDOM.render(
	<TradingCard name="Off by One" skill="Scaring people" imgUrl="/static/img/off-by-one.jpg" />,
	document.getElementById('off-by-one')
);

ReactDOM.render(
	<TradingCard name="Polymorphism" skill="Being adorable!" imgUrl="/static/img/polymorphism.jpg" />,
	document.getElementById('polymorphism')
);