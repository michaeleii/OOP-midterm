import { Album } from "./Album";

export class Artist {
	name: string;
	albums: Album[] = [];
	constructor(name: string) {
		this.name = name;
	}
	addAlbum(album: Album): void {
		this.albums.push(album);
	}
}
