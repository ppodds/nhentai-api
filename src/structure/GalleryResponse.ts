import { Title } from "./Title";
import { Image } from "./Image";
import { Tag } from "./Tag";

export interface GalleryResponse {
    id: number;
    media_id: string;
    title: Title;
    images: {
        pages: Image[];
        cover: Image;
        thumbnail: Image;
    };
    scanlator: string;
    upload_date: number;
    tags: Tag[];
    num_pages: number;
    num_favorites: number;
}
