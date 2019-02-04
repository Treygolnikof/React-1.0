import {createStore} from 'redux';

const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'INC':
            return state + 1;
        case 'DEC':
            return state - 1;
        case 'RST':
            return state = 0;
        default:
            return state;
    }
}

const inc = () => ({type: 'INC'});
const dec = () => ({type: 'DEC'});
const rst = () => ({type: 'RST'});

const store = createStore(reducer);

document.getElementById('plus').addEventListener('click', () => {
    store.dispatch(inc())
});
document.getElementById('minus').addEventListener('click', () => {
    store.dispatch(dec())
});
document.getElementById('reset').addEventListener('click', () => {
    store.dispatch(rst())
});

const update = () => {
    document.getElementById('counter').textContent = store.getState();
}

store.subscribe(update);