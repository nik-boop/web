
var pict = ['https://www.sunhome.ru/i/wallpapers/163/alberta-banf-kanada.1920x1200.jpg', 'https://w-dog.ru/wallpapers/1/36/465554622867915/priroda-reka-doma-krasnyj.jpg'];
const e = React.createElement;
class HelloMessage extends React.Component {
    render() {
        return e(
            "h3",
            null,
            "Hello ",
            this.props.name
        );
    }
}

ReactDOM.render(
    React.createElement(HelloMessage,
        { name: "User" }),
        document.getElementById('hello-example')
        );



class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        if (this.state.liked) {
            return e(
                'img',
                {src: pict[this.props.commentID]},
                null
            )
        }

        return e(
            'button',
            { onClick: () => this.setState({ liked: true }) },
            'Посмотреть'
        );
    }
}

const domContainer = document.querySelectorAll('.like_button_container')
    .forEach(domContainer => {
        const commentID = parseInt(domContainer.dataset.commentid, 10);
        ReactDOM.render(
            e(LikeButton, { commentID: commentID }),
            domContainer
        );
    });