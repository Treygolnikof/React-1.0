import {createStore} from 'redux';

const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'INC':
            return state + 1;
        case 'DEC':
            return state - 1;
        case 'RST':
            return state = 0;
        case 'DWNLD':
            return state = action.value;
        default:
            return state;
    }
}

const inc = () => ({type: 'INC'});
const dec = () => ({type: 'DEC'});
const rst = () => ({type: 'RST'});
const dwnld = (value) => ({type: 'DWNLD', value})

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
document.getElementById('download').addEventListener('click', () => {
    fetch(process.env.PUBLIC_URL + '/num.json')
    .then(response => response.json())
    .then(data => {
        const randomNum = Math.floor(Math.random() * data.numbers.length);
        const value = data.numbers[randomNum].const;
        store.dispatch(dwnld(value))
    })
    .catch(err => console.log(err))
});

const update = () => {
    document.getElementById('counter').textContent = store.getState();
}

store.subscribe(update);