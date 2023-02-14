import { Album } from "./Album";
import { Song } from "./Song";

export class Playlist {
	private _name: string = "";
	private _songs: Song[] = [];
	constructor(name: string) {
		this.name = name;
	}
	set name(name: string) {
		this._name = name;
	}
	get name(): string {
		return this._name;
	}
	addAlbum(album: Album): void {
		this._songs = this._songs.concat(album.getTracks());
	}
}
