import { Host } from "../api";
import { ImageExtension } from "./ImageExtension";
import { Image } from "../structure";

interface Book {
    media_id: string;
    images: {
        pages: Image[];
        cover: Image;
        thumbnail: Image;
    };
    num_pages: number;
}

export class URLBuilder {
    private readonly book: Book;

    constructor(book: Book) {
        this.book = book;
    }

    getPage(page: number) {
        return `https://${Host.IMAGE}/galleries/${this.book.media_id}/${page}.${
            ImageExtension[this.book.images.pages[page - 1].t]
        }`;
    }

    getThumbnail(page: number) {
        return `https://${Host.THUMBNAIL}/galleries/${
            this.book.media_id
        }/${page}t.${ImageExtension[this.book.images.pages[page - 1].t]}`;
    }

    getCover() {
        return `https://${Host.THUMBNAIL}/galleries/${
            this.book.media_id
        }/cover.${ImageExtension[this.book.images.cover.t]}`;
    }
}
