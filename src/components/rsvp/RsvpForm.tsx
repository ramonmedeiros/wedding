
import { useState } from "react";
import { Button, Input, Label, Textarea } from "@/components/ui";
import { useTranslation } from "react-i18next";
import { getFamily, updateFamily, Family, Alergy } from "@/hooks/family";
import { useSearchParams } from "react-router-dom";
import { SongAutocomplete } from "./SongAutocomplete";
import { getSongDescription, Song } from "@/hooks/songs";
import { Alergies } from "./Alergies";

const RsvpForm = () => {
  const { t } = useTranslation()
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [family, setFamily] = useState<Family>(undefined);
  const [searchParams] = useSearchParams();
  const [confirmedGuests, setConfirmedGuests] = useState<string[]>([]);
  const code = searchParams.get("code")

  let songs = [];
  const setSongs = (s: Song[]) => songs = s

  let alergies = [] as Alergy[];
  const setAlergies = (a: Alergy[]) => alergies = a

  if (code !== null && family === undefined) {
    getFamily(code).
      then(family => {
        setFamily(family)
      }).
      finally(() => setIsSubmitting(false))
  }

  const handleSubmit = (e) => {
    setIsSubmitting(true);
    e.preventDefault();

    const formData = new FormData(e.target);
    const comments = formData.get("comments")

    let confirmation = false
    if (e.nativeEvent?.submitter?.id === "yes") {
      confirmation = true
    }

    const confirmedGuestList = family.expected_guests.map(expectedGuest => {
      const guestComming = formData.get(expectedGuest)
      if (guestComming === "on") {
        return expectedGuest
      }
    })

    updateFamily(
      code,
      confirmedGuestList,
      confirmation,
      comments.toString(),
      songs.map((s: Song) => getSongDescription(s)),
      alergies.filter(a => a.count > 0)
    ).
      finally(() => {
        setIsSubmitting(false)
        setIsSubmitted(true)
      })
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-16">
        <h3 className="text-2xl font-light text-wedding-darkgray">{t("thank_you")}</h3>
        <p className="mt-4 max-w-md mx-auto text-wedding-gray">
          {t("rsvp_submitted")}
        </p>
      </div>
    );
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-8 max-w-md mx-auto" hidden={family === undefined}>
        <div className="space-y-4">

          <Label htmlFor="name"
            hidden={family?.expected_guests?.length === 0}
            className="pt-3 block text-wedding-darkgray text-lg max-w-lg mx-auto"
          >
            {t("guest_list")}
          </Label>

          {family?.expected_guests?.map((guest, index) => (
            <div key={`div-${guest}-${index}`} className="ml-5 flex spLace-x-2">
              <Input
                key={`input-${guest}-${index}`}
                type="checkbox"
                readOnly={family?.confirmed_at !== undefined}
                defaultChecked={family?.confirmed_guests?.includes(guest) ? true : false}
                name={guest}
                id={guest}
                className="w-4 h-4 bg-gray-200 border-black-600"
                onChange={(e) => {
                  if (e.target.checked) {
                    setConfirmedGuests([ // with a new array
                      ...confirmedGuests, // that contains all the old items
                      e.target.id // and one new item at the end
                    ])
                    return
                  }
                  setConfirmedGuests(confirmedGuests.filter(guest => guest !== e.target.id))
                }}
              />
              <Label
                key={`label-${guest}-${index}`}
                htmlFor="guest"
                className="pl-2 text-wedding-gray">{guest}</Label>
            </div>
          ))}

          <Alergies setAlergies={setAlergies} totalGuests={family?.expected_guests.length} />

          <SongAutocomplete setSongs={setSongs} code={code} />

          <div className="pt-3">
            <Label htmlFor="Comments" className="text-wedding-darkgray text-lg max-w-lg mx-auto">
              {t("comments")}
            </Label>
            <Textarea
              id="comments"
              name="comments"
              className="mt-1 border-wedding-gray/20 focus:border-wedding-blush focus:ring-wedding-blush"
              placeholder={family?.comments ? family?.comments : (family?.confirmed_at ? "" : t("comment_placeholder"))}
              rows={3}
            />
          </div>
        </div>

        {family?.confirmed_at === undefined ?
          <div>
            <Label className="pb-1 text-wedding-darkgray text-lg max-w-lg mx-auto block mb-2">
              {t("are_you_coming")}
            </Label>
            <div className="flex space-x-4 max-w-lg mx-auto text-center">

              {confirmedGuests.length < 1 &&
                <Button
                  id="no"
                  type="submit"
                  className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
                >
                  {isSubmitting ? t("submitting") : t("im_not_coming")}
                </Button>
                ||
                <Button
                  id="yes"
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
                >
                  {isSubmitting ? t("submitting") : t("im_coming")}
                </Button>
              }

            </div>
          </div>
          : <Label className="pb-1 text-wedding-darkgray block mb-2 text-lg">
            {family?.confirmed ? t("is_coming") : t("not_coming")}
            {family.confirmed_at ? new Date(family.confirmed_at).toDateString() : ""}
          </Label>
        }
      </form>
      <div className="text-center">
        <Label htmlFor="name" className="mx-auto text-center fs-10" hidden={family !== undefined}>
          {t("ask_for_code")}
        </Label>

        <p className="pt-3 text-wedding-gray text-sm" hidden={family === undefined}>
          {t("questions_contact")}
        </p>
      </div>
    </>
  );
};

export default RsvpForm;
