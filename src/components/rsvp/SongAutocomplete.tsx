import { useTranslation } from "react-i18next";
import { getSongDescription, Song, useSongs } from "@/hooks/songs";
import { useRef, useState } from "react";
import { Search, X } from "lucide-react";
import { Popover } from "radix-ui";
import { Label } from "@radix-ui/react-label";

interface SongAutocompleteProps {
  code: string
  setSongs: (songs: Song[]) => void
}

export const SongAutocomplete = ({ code, setSongs }: SongAutocompleteProps) => {
  const { t } = useTranslation()
  const [searchTerm, setSearchTerm] = useState<string>("")
  const { songs, loading } = useSongs(searchTerm, code);

  const [selectedItems, setSelectedItems] = useState<Song[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);
  const popoverContentRef = useRef(null);

  const handleSearchTermChange = (search: string) => {
    if (search.trim() !== '' && !isOpen) {
      setIsOpen(true); // Open popover when user starts typing
    } else if (search !== searchTerm) {
      setSearchTerm(search);
    } else if (search.trim() === '' && isOpen) {
      if (searchTerm !== '') {
        setSearchTerm('')
      }
    }
  };

  const handleSelectSuggestion = (suggestion: Song) => {
    if (!selectedItems.find((item: Song) => item.endpoint === suggestion.endpoint)) {
      setSelectedItems(prev => [...prev, suggestion]);
      setSongs([...selectedItems, suggestion])
    }
    setSearchTerm('');
    setIsOpen(false);
    inputRef.current?.focus();
  };

  const handleRemoveItem = (itemToRemove: Song) => {
    setSelectedItems(prev => prev.filter(item => item.endpoint !== itemToRemove.endpoint));
    setSongs(selectedItems.filter(item => item.endpoint !== itemToRemove.endpoint))
    inputRef.current?.focus();
  };

  const clearSearch = () => {
    setSearchTerm('');
    inputRef.current?.focus();
  };

  return (
    <div className="max-w-md mx-auto">
      <Label className="text-wedding-darkgray font-medium text-lg max-w-lg">{t("Songs")}</Label>
      <div className="p-2 border border-gray-300 rounded-lg shadow-sm focus-within:ring-2 focus-within:ring-sky-500 focus-within:border-sky-500 transition-all">
        {selectedItems.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-2 items-center">
            {selectedItems.map((song) => (
              <span
                key={song.endpoint}
                className="bg-sky-100 text-sky-700 px-2.5 py-1.5 rounded-md text-sm flex items-center shadow-sm transition-all duration-150 ease-in-out"
              >
                {getSongDescription(song)}
                <button
                  type="button"
                  onClick={() => handleRemoveItem(song)}
                  className="ml-2 text-sky-500 hover:text-sky-700 focus:outline-none transition-colors"
                  aria-label={`Remove ${song.name}`}
                >
                  <X size={16} strokeWidth={2.5} />
                </button>
              </span>
            ))}
          </div>
        )}

        <Popover.Root open={isOpen} onOpenChange={setIsOpen}>
          <Popover.Trigger asChild>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </span>
              <input
                ref={inputRef}
                type="text"
                value={searchTerm}
                onChange={e => handleSearchTermChange(e.currentTarget.value)}
                placeholder={selectedItems.length > 0 ? t("add_more_songs") : t("search_song")}
                className="w-full pl-10 pr-10 py-2 border-0 rounded-md focus:outline-none focus:ring-0 text-sm" // Input itself has no border/ring, parent div handles it
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={clearSearch}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
                  aria-label={t("clear_search")}
                >
                  <X className="h-5 w-5" />
                </button>
              )}
            </div>
          </Popover.Trigger>
          <Popover.Portal>
            <Popover.Content
              ref={popoverContentRef}
              sideOffset={5}
              align="start"
              className="w-[--radix-popover-trigger-width] bg-white border border-gray-200 rounded-lg shadow-xl mt-1 z-50 max-h-60 overflow-y-auto"
              onOpenAutoFocus={(e) => e.preventDefault()} // Keep focus on input
            >
              {loading && (
                <div className="p-3 text-sm text-gray-500">Loading...</div>
              )}
              {!loading && songs.length === 0 && searchTerm.trim() !== '' && (
                <div className="p-3 text-sm text-gray-500">No results found for "{searchTerm}".</div>
              )}
              {!loading && songs.length > 0 && (
                <ul className="divide-y divide-gray-100">
                  {songs.map((item, index) => (
                    <li key={`${item.name}-${index}`}>
                      <div
                        onClick={() => handleSelectSuggestion(item)}
                        className="grid grid-cols-4 md:grid-cols-4 items-center fade-in-delay-2 w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-sky-50 hover:text-sky-600 focus:outline-none focus:bg-sky-50 focus:text-sky-600 transition-colors rounded-md"
                      >
                        <img src={item.images.pop()} />
                        <div className="col-span-3">
                          <Label>{item.name}</Label>
                          {item.artists.map((artist, index) => <p key={index} className="mt-2 text-slate-500">{artist.name}</p>)}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
              {!loading && songs.length === 0 && searchTerm.trim() === '' && isOpen && (
                <div className="p-3 text-sm text-gray-500">{t("type_to_search_songs")}</div>
              )}
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>
      </div>
    </div>
  );
}
