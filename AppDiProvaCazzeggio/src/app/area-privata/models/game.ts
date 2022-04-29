export class Game{
    title: string;
    softHouse: string;
    genre: string;
    publisher: string;
    release: string;
    price: number;
    description: string;
    img: string;
    id?: number;

    constructor(title: string, softHouse: string, genre: string, publisher: string, release: string, price: number, description: string, img: string){
        this.title = title;
        this.softHouse = softHouse;
        this.genre = genre;
        this.publisher = publisher;
        this.release = release;
        this.price = price;
        this.description = description;
        this.img = img;
    }


}
