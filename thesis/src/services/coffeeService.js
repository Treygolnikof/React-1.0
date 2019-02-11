export default class CoffeeService {

    getResourse = async () => {
        const res = await fetch(process.env.PUBLIC_URL + '/db.json');

        if (!res.ok) {
            throw new Error(`Status: ${res.status}`);
        }

        return await res.json();
    }

    getBestSellers = async () => {
        let res = await this.getResourse();
        return res.bestsellers;
    }

    getCoffee = async () => {
        let res = await this.getResourse();
        return res.coffee;
    }

    getGoods = async () => {
        let res = await this.getResourse();
        return res.goods;
    }

    idGenerator() {
        return Math.random().toString(36).substr(2, 12);
    }
}