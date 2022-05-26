import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import "./style.css";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
const InfoWithHover = withHover(Info);


export default function App() {
    return (
        <div>
            <h1>Hello StackBlitz!</h1>
            <p>Start editing to see some magic happen :)</p>
        </div>
    );
}

function withHover(Component) {
    return class WithHover extends React.Component {
        state = { hovering: false };
        mouseOver = () => this.setState({ hovering: true });
        mouseOut = () => this.setState({ hovering: false });
        render() {
            return (
                <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
                    <Component hovering={this.state.hovering}/>
                </div>
            );
        }
    };
}

function Info({ hovering, height}) {
    let id = 1
    return (
        <>
            {hovering === true ? (
                <Tooltip id={id} />
            ) : (
                <svg
                    className="Icon-svg Icon--hoverable-svg"
                    height={height}
                    viewBox="0 0 16 16"
                    width="16"
                >
                    <path d="M9 8a1 1 0 0 0-1-1H5.5a1 1 0 1 0 0 2H7v4a1 1 0 0 0 2 0zM4 0h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4zm4 5.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                </svg>
            )}
        </>
    );
}

function Tooltip(props) {
    return (
        <>
            <img src="https://администрация-янега.рф/wp-content/uploads/2019/01/info-1459077.png"/>
            <div>Тут подсказка к этому компоненту ID = {props.id}</div>
        </>
    );
}

root.render(
    <StrictMode>
        <App />
        <InfoWithHover/>
    </StrictMode>
);
