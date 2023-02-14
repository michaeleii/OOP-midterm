import { Album } from "./Album";
import { Artist } from "./Artist";
import { IImportable } from "./IImportable";
import { Playlist } from "./Playlist";
import { Song } from "./Song";

export class LocalImporter implements IImportable {
	path: string;
	constructor(filePath: string) {
		this.path = filePath;
	}
	loadPlaylist(): Playlist {
		console.log(`Your playlist at location ${this.path} will be loaded`);
		const playlist = require(`./${this.path}`);
		const pl = new Playlist("My Playlist");
		playlist.albums.forEach((album: any) => {
			album.tracks.forEach((track: any) => album.addTrack(track));
			pl.addAlbum(album);
		});
		return pl;
	}
}
