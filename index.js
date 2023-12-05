class Polygon{
    constructor(array){
        this.array = array;
    };

    get countSides(){
        return this.array.length
    };
    get perimeter(){
        let sum = 0
        for (let i = 0; i < this.array.length; i++) {
            sum += this.array[i];
        }
        return sum;
    };
    //get perimeter() {
//     return this.sides.reduce((sum, side) => sum + side, 0);
// }
};

class Triangle extends Polygon{
    get isValid(){
        const [a, b, c] = this.array;
        return a + b > c && b + c > a && a + c > b;
    };
};

class Square extends Polygon{
    get isValid(){
        const [a, b, c, d] = this.array;
        return a === b &&  b === c && c === d;
    };
    get area(){
        return this.array[0]**2
    }
}