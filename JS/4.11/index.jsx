
class ClickButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {class: "off", label: "Нажато: ", click: 0};
        this.press = this.press.bind(this);
        console.log("constructor");
    }

    componentDidMount(){
        console.log("Компонент создан - здесь подгружаются данные")
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("Компонент обновился")
    }
    componentWillUpdate(){
        console.log("Компонент будет обновлен")
    }
    componentWillUnmount(){
        console.log("Компонент будет размонтирован, можно очистить данные")
    }
    shouldComponentUpdate(){
        console.log("Проверка перед отрисовкой при изменении свойств и состояний")
        return true
    }
    static getDerivedStateFromProps(props, state){
        console.log("Скоро вызов render, последняя проверка перед обновленем")
    }
    componentWillReceiveProps(nextProps) {
        console.log("componentWillReceiveProps()");
    }

    press(){
        this.setState(state => ({
            click: this.state.click += 1
          }));
          console.log(this.state.click);
    }

    render() {
        console.log("reander");
        return(
            <button onClick={this.press}>
                {this.state.label}{this.state.click}
            </button>
        )
    }
}


class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { seconds: 0 };
    }

    tick() {
        let time = new Date()
        this.setState(state => ({
            hours: time.getHours(),
            minutes: time.getMinutes(),
            seconds: time.getSeconds()

        }));
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 20);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <p>
                Time: {this.state.hours}:{this.state.minutes}:{this.state.seconds}
            </p>
        );
    }
}



class Item extends React.Component {
    render() {
        return <li>{this.props.name}</li>;
    }
}

class SearchPlugin extends React.Component{
    constructor(props){
        super(props);
        this.onTextChanged = this.onTextChanged.bind(this);
    }

    onTextChanged(e){
        var text = e.target.value.trim();   // удаляем пробелы
        this.props.filter(text); // передаем введенный текст в родительский компонент
    }

    render() {
        return <input placeholder="Поиск" onChange={this.onTextChanged} />;
    }
}

class ItemsList extends React.Component {
    constructor(props){
        super(props);
        this.state = { items: this.props.data.items};

        this.filterList = this.filterList.bind(this);
    }

    filterList(text){
        var filteredList = this.props.data.items.filter(function(item){
            return item.toLowerCase().search(text.toLowerCase())!== -1;
        });
        this.setState({items: filteredList});
    }

    render() {
        return(
            <div>
                <h2>{this.props.data.title}</h2>
                <SearchPlugin filter={this.filterList} />
                <ul>
                    {
                        this.state.items.map(function(item){
                            return <Item key={item} name={item} />
                        })
                    }
                </ul>
            </div>);
    }
}

const propsValues = {
    title: "Список группы",
    items: [
        "Студент 1",
        "Студент 2",
        "Студент 3",
        "Студент 4",
        "Студент 5",
        "Студент 6"
    ]
};

ReactDOM.render(
    <div>
        <ClickButton/>
        <Timer/>
        <ItemsList data={propsValues} />
    </div>,
    document.getElementById("app")
)
