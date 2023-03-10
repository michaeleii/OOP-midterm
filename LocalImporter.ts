import { Album } from "./Album";
import { Artist } from "./Artist";
import { IImportable } from "./IImportable";
import { Playlist } from "./Playlist";
import { Song } from "./Song";
import { User } from "./User";

export class LocalImporter implements IImportable {
	path: string;
	constructor(filePath: string) {
		this.path = filePath;
	}
	loadPlaylist(): Playlist {
		console.log(`Your playlist at location ${this.path} will be loaded`);
		const playlist: {
			albums: [
				{
					name: string;
					tracks: string[];
				}
			];
		} = require(`./${this.path}`);
		const pl = new Playlist("My Playlist");
		playlist.albums.forEach((album) => {
			const artist = new Artist(album.name);
			const alb = new Album(album.name, artist, 2020);
			album.tracks.forEach((track) => {
				const song = new Song(track);
				alb.addTrack(song);
			});
			pl.addAlbum(alb);
			artist.addAlbum(alb);
		});
		return pl;
	}
}
