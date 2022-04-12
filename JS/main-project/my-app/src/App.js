import './App.css';

function Logo() {
  return (
    <div className="App-header">
      <div className='head-top'>
        Назване
      </div>
      <div className="head">
        <div className='logo'>
          Компания такае-то
        </div>
        <div className='head-box'>
          Ссылка1
        </div>
        <div className='head-box'>
          Ссылка2
        </div>
        <div className='head-box'>
          Ссылка3
        </div>
        <div className='head-box'>
          Ссылка4
        </div>
        <div className='head-box'>
          Ссылка5
        </div>

      </div>

    </div>
  );

}


function List(props) {
  return (
    <ul>
      {props.list.map(item => (
        <li>{item.text}</li>
      ))}
    </ul>
  )
}

function Pict(props) {
  return (
    <div className='pict'>
      <h>
        {props.logo}
      </h>
      <img src={require('./img/pngegg.png')}alt="Здесь должен быть ктото"/>
      <p>
        Это тот-то
      </p>
      <p>
        Сделал тот-то
      </p>
    </div>
  );
}



function Imege() {
  return (
    <div className='imege'>
      <Pict logo={"Кто-то там"} url='./img/pngegg.png' />
      <Pict logo={"Кто-то там еще"} url='./img/free-icon-girl-face-62806.png' />
    </div>
  )
}



function Kurs(props) {

  return (
    <div id='main-cont' className='kurs-inf'>
      <p2>{props.name}</p2>
      <p3>Такие-то преимущества:</p3>
      <List list={[{ text: 'Много того' }, { text: 'Много сего' }, { text: 'Еще и это' }]} />
      <p3>Такие-то условия:</p3>
      <List list={[{ text: 'Душа' }, { text: 'Почик' }, { text: '500 рублей' }]} />
    </div>


  );
}


function Content() {
  return (
    <div className='main'>
      <Kurs name="Какой-то Курс" />
      <Imege />

    </div>


  );
}



function App() {
  return (
    <div className="App">
      <Logo />
      <Content />

    </div>
  );
}

export default App;
