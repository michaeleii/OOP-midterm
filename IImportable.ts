import { Playlist } from "./Playlist";

export interface IImportable {
	path: string;
	loadPlaylist(): Playlist;
}
