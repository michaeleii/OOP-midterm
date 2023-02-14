import { Song } from "./Song";
import { Artist } from "./Artist";

export class Album {
	private _title: string = "";
	artist: Artist;
	year: number;
	tracks: Song[] = [];
	constructor(title: string, artist: Artist, year: number) {
		this.title = title;
		this.artist = artist;
		this.year = year;
	}
	get title(): string {
		return this._title;
	}
	set title(title: string) {
		this._title = title;
	}
	getTracks(): Song[] {
		return this.tracks;
	}
	addTrack(track: Song): void {
		this.tracks.push(track);
	}
}
