import { connect } from "react-redux";


function Likes(props) {
    console.log(props);
    return (
        <div className='button-controls'>
            <button onClick={props.onIncrementLikes}>❤ {props.likes}</button>
            <button onClick={props.onDecrementLikes}>Dislike</button>
        </div>
    )
}

function maoStateToProps(state) {
    console.log('mapStateToProps > ', state)
    return {
        likes: state.likes
    }
}

function maoDispatchToProps(dispatch) {
    console.log('mapStateToProps > ', dispatch)
    return {
        onIncrementLikes: () => {
            console.log('click');
            const action = { type: 'INCREMENT' };
            dispatch(action)
        },
        onDecrementLikes: () => {
            console.log('click decrement');
            const action = { type: 'DECREMENT' };
            dispatch(action)
        }
    }
}

export default connect(maoStateToProps, maoDispatchToProps)(Likes);
