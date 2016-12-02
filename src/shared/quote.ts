export class Quote {

    constructor(private quote: string,
                private author: string,
                private date: Date) {
    }

    static parse(json: any) {
        return new Quote(json.quote, json.author, json.date)
    }
}