import { Album } from "./Album";

export class Artist {
	name: string;
	albums: Album[] = [];
	constructor(name: string) {
		this.name = name;
	}
}
