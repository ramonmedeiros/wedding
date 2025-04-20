
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useTranslation } from "react-i18next";
import Family, { getFamily, updateFamily } from "@/hooks/family";
import { useSearchParams } from "react-router-dom";

const RsvpForm = () => {
  const { t } = useTranslation()
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [family, setFamily] = useState<Family>(undefined);
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code")

  if (code !== "" && family === undefined) {
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
    const confirmationString = formData.get("confirmation")

    let confirmation = false
    if (confirmationString === "yes") {
      confirmation = true
    }

    const confirmedGuestList = family.expected_guests.map(expectedGuest => {
      const guestComming = formData.get(expectedGuest)
      if (guestComming === "on") {
        return expectedGuest
      }
    })

    updateFamily(code, confirmedGuestList, confirmation, comments.toString()).
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
          <div>
            <Label htmlFor="name" className="text-wedding-darkgray">
              {t("family_name")}
            </Label>
            <Input
              readOnly
              id="name"
              name="name"
              placeholder={family?.name}
              className="mt-1 border-wedding-gray/20 focus:border-wedding-blush focus:ring-wedding-blush"
            />
          </div>

          <Label htmlFor="name"
            hidden={family?.expected_guests?.length === 0}
            className="pt-3 block"
          >
            {t("guest_list")}
          </Label>

          {family?.expected_guests?.map((guest, index) => (
            <div key={`div-${guest}-${index}`} className="ml-5 flex spLace-x-2">
              <Input
                key={`input-${guest}-${index}`}
                type="checkbox"
                defaultChecked={true}
                name={guest}
                id={guest}
                className="w-4 h-4 bg-gray-200 border-black-600"
              />
              <Label
                key={`label-${guest}-${index}`}
                htmlFor="guest"
                className="pl-2 text-wedding-darkgray">{guest}</Label>
            </div>
          ))}

          <div className="pt-3">
            <Label htmlFor="Comments" className="text-wedding-darkgray">
              {t("comments")}
            </Label>
            <Textarea
              id="comments"
              name="comments"
              className="mt-1 border-wedding-gray/20 focus:border-wedding-blush focus:ring-wedding-blush"
              placeholder={family?.comments ? family?.comments : t("comment_placeholder")}
              rows={3}
            />
          </div>
        </div>

        {family?.confirmed_at == undefined &&
          <div>
            <Label className="pb-1 text-wedding-darkgray block mb-2">
              {t("are_you_coming")}
            </Label>
            <div className="flex space-x-4">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
              >
                {isSubmitting ? t("submitting") : t("im_coming")}
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
              >
                {isSubmitting ? t("submitting") : t("im_not_coming")}
              </Button>
            </div>
          </div>
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
