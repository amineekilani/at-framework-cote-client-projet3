export class Book
{
    constructor(private _id:number, private _title:string, private _author:string, private _price:number)
    {}
    get id() : number
    {
        return this._id;
    }
    get title() : string
    {
        return this._title;
    }
    get author() : string
    {
        return this._author;
    }
    get price() : number
    {
        return this._price;
    }
    set id(id:number)
    {
        this._id=id;
    }
    set title(title:string)
    {
        this._title=title;
    }
    set author(author:string)
    {
        this._author=author;
    }
    set price(price:number)
    {
        this._price=price;
    }
}