import { artistData, artistGroupData } from "@lib/data/types";

export function getArtistPrefName(artist: artistGroupData | artistData): string {
	return artist.alias ? artist.alias : (() => {
		switch(artist._type) {
			case("artist"):
				return `${artist.firstName} ${artist.lastName}`
			case("artistGroup"):
				return artist.name
		}
	})()
	
}