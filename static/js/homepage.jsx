class Homepage extends React.Component {
	render() {
		return <div>
            <h3>Hello, User!</h3>
            <p>See my <a href="/cards">trading cards</a> </p>
            <img src="/static/img/balloonicorn.jpg" height="500px" width="500px"/>
        </div>;
	}
}

ReactDOM.render(<Homepage />, document.getElementById('app'));