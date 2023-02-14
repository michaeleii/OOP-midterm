import { Album } from "./Album";
import { Playlist } from "./Playlist";

export class User {
	private _username: string = "";
	private _password: string = "";
	private playlists: Playlist[] = [];
	private albums: Album[] = [];
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
		this.playlists.push(playlist);
	}
	addAlbums(album: Album): void {
		this.albums.push(album);
	}
	getSongs() {
		return this.albums.map((album) => album.tracks).flat();
	}
	getPlaylists(): Playlist[] {
		return this.playlists;
	}
	getAlbums(): Album[] {
		return this.albums;
	}
}
