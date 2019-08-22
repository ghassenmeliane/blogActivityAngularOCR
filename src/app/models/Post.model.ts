export class Post {

    public createdAt: Date;

    constructor(
        public title: string,
        public content: string,
        public loveIts?: number
    ) {
        this.loveIts = this.loveIts ? this.loveIts : 0;
        this.createdAt = new Date();
    }
}
