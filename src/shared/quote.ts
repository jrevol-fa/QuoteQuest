export class Quote {

    constructor(quote: string,
                author: string,
                date: Date) {
    }

    static parse(json: any) {
        return new Quote(json.quote, json.author, json.date)
    }
}