import { Album } from "./Album";
import { Playlist } from "./Playlist";
import { Song } from "./Song";

export class User {
	private _username: string = "";
	private _password: string = "";
	private _playlists: Playlist[] = [];
	private _albums: Album[] = [];
	constructor(username: string, password: string) {
		this.username = username;
		this.password = password;
	}
	private get username() {
		return this._username;
	}
	private set username(username: string) {
		this._username = username;
	}
	private get password() {
		return this._password;
	}
	private set password(password: string) {
		this._password = password;
	}
	addPlaylist(playlist: Playlist): void {
		this._playlists.push(playlist);
	}
	addAlbums(album: Album): void {
		this._albums.push(album);
	}
	getSongs(): Song[] {
		const songs: Song[] = [];
		this._playlists.forEach((playlist) => {
			songs.concat(playlist.getSongs());
		});
		return songs;
	}
	getPlaylists(): Playlist[] {
		return this._playlists;
	}
	getAlbums(): Album[] {
		return this._albums;
	}
}
