import { useEffect, useState } from "react";
import { BACKEND_URL } from "./family"

export const useSongs = (term: string, code: string) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [songs, setSongs] = useState<Song[]>();

  useEffect(() => {
    if (term !== "") {
      const timeOutId = setTimeout(() => {
        fetch(BACKEND_URL + "song/" + code + "/" + encodeURI(term)).
          then(response => response.json()).
          then(data => setSongs(data)).
          catch(e => {
            console.error(e)
          }).
          finally(() => setLoading(false));
      }, 200);
      return () => clearTimeout(timeOutId);
    } else {
      setSongs([])
      setLoading(false)
    }
  }, [term, code]);

  return {
    loading,
    songs,
  };
}

export interface Song {
  artists: Artist[]
  images: string[]
  endpoint: string
  name: string
  popularity: number
}

export interface Artist {
  name: string
}

export const getSongDescription = (s: Song): string => {
  return `${s.name} - ${s.artists.map(artist => artist.name).join(', ')}`
}