import { TagType } from "../type/TagType";

export interface Tag {
    id: number;
    type: TagType;
    name: string;
    url: string;
    count: number;
}
