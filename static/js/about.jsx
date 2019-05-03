class About extends React.Component {
    render() {
        return (
        <React.Fragment>
            <h3> About the Author: </h3>
            <p>
                <img src="/static/img/balloonicorn.jpg" />
                    <span>Interesting facts about Balloonicorn.
                        Cupcakes and sunshine and rainbows, oh my! </span>
                    </p>
                </React.Fragment>
        );
    }
}

ReactDOM.render(<About />, document.getElementById('bio'));