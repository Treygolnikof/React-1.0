export default class GotService {

    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }
    getResourse = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }
    getAllCharacters = async () => {
        const res = await this.getResourse('/characters?page=10&pageSize=10');
        return res.map(this._transformCharacter);
    }
    getCharacter = async (id) => {
        const character = await this.getResourse(`/characters/${id}`);
        return this._transformCharacter(character)
    }
    getAllHouses = async () => {
        const res = await this.getResourse('/houses?page=2&pageSize=10');
        return res.map(this._transformHouse)
    }
    getHouse = async (id) => {
        const house = await this.getResourse(`/houses/${id}`);
        return this._transformHouse(house)
    }
    getAllBooks = async () => {
        const res = await this.getResourse('/books?page=1&pageSize=10');
        return res.map(this._transformBook)
    }
    getBook = async (id) => {
        const book = await this.getResourse(`/books/${id}`);
        return this._transformBook(book)
    }

    isSet(data) {
        if (data && data[0] !== '') {
            return data;
        } else {
            return "Unknown";
        }
    }

    _transformCharacter = (char) => {
        return {
            name: this.isSet(char.name),
            gender: this.isSet(char.gender),
            born: this.isSet(char.born),
            died: this.isSet(char.died),
            culture: this.isSet(char.culture),
            id: char.url.replace(/[^0-9]/gim, "")
        }
    }

    _transformHouse = (house) => {
        return {
            name: this.isSet(house.name),
            region: this.isSet(house.region),
            words: this.isSet(house.words),
            titles: this.isSet(house.titles),
            overlord: this.isSet(house.overlord),
            ancestralWeapons: this.isSet(house.ancestralWeapons),
            id: house.url.replace(/[^0-9]/gim, "")
        }
    }

    _transformBook = (book) => {
        return {
            name: this.isSet(book.name),
            numberOfPages: this.isSet(book.numberOfPages),
            publiser: this.isSet(book.publiser),
            released: this.isSet(book.released),
            id: book.url.replace(/[^0-9]/gim, "")
        }
    }

}