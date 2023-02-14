import { Album } from "./Album";
import { Artist } from "./Artist";
import { IImportable } from "./IImportable";
import { Playlist } from "./Playlist";
import { Song } from "./Song";

export class CloudImporter implements IImportable {
	path: string;
	constructor(URLPath: string) {
		this.path = URLPath;
	}

	loadPlaylist(): Playlist {
		console.log(`Importing playlist from ${this.path}`);
		let pl = new Playlist("cool songs");
		let album = new Album("etc", new Artist("Armaan D."), 2023);
		let song = new Song("cool song");
		album.addTrack(song);
		pl.addAlbum(album);
		return pl;
	}
}
