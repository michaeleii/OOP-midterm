import { IImportable } from "./IImportable";
import { Playlist } from "./Playlist";

export class PlaylistImporter {
	importable: IImportable;
	constructor(importable: IImportable) {
		this.importable = importable;
	}
	importPlaylist(): Playlist {
		return this.importable.loadPlaylist();
	}
}
