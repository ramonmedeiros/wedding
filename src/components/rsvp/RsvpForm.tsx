
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { useTranslation } from "react-i18next";
import Family, { getFamily, updateFamily } from "@/hooks/family";

const RsvpForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [codeSubmited, setCodeSubmited] = useState<string>("");
  const [family, setFamily] = useState<Family>(undefined);

  const { t } = useTranslation()

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

    updateFamily(codeSubmited, confirmation, comments.toString()).
      finally(() => {
        setIsSubmitting(false)
        setIsSubmitted(true)
      })
  };

  async function codeSubmit(e) {
    setIsSubmitting(true);
    e.preventDefault();

    const formData = new FormData(e.target);
    const code = formData.get("code")

    getFamily(code.toString()).
      then(family => {

        setCodeSubmited(code.toString())
        setFamily(family)
      }).
      finally(() => setIsSubmitting(false))
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
      <form onSubmit={codeSubmit}>
        <div className="mx-auto text-center">
          <Label htmlFor="name" className="mx-auto text-center">
            {t("code")}
          </Label>
          <Input
            readOnly={codeSubmited !== ""}
            id="code"
            name="code"
            required
            className="w-1/5 mx-auto mt-1 border-wedding-gray/20 focus:border-wedding-blush focus:ring-wedding-blush"
          />
          <Button
            type="submit"
            disabled={codeSubmited !== ""}
            className="mt-2 bg-wedding-darkgray hover:bg-black text-white py-3 rounded-md transition-colors duration-300"
          >
            {t("Submit")}
          </Button>
        </div>
      </form>


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
            Guest List
          </Label>

          {family?.expected_guests?.map((guest) => (
            <Input
              readOnly
              key={guest}
              placeholder={guest}
              required
              className="w-60 mx-auto mt-1 border-wedding-gray/20 focus:border-wedding-blush focus:ring-wedding-blush"
            />
          ))}

          <div>
            <Label className="pb-1 text-wedding-darkgray pt-3 block mb-2">
              {t("are_you_coming")}
            </Label>
            <RadioGroup
              className="flex space-x-6"
              name="confirmation"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="attending-yes" />
                <Label htmlFor="attending-yes" className="text-wedding-gray cursor-pointer">
                  {t("yes_will_be_there")}
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="attending-no" />
                <Label htmlFor="attending-no" className="text-wedding-gray cursor-pointer">
                  {t("no_will_not_be_there")}
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="pt-2">
            <Label htmlFor="Comments" className="text-wedding-darkgray">
              {t("comments")}
            </Label>
            <Textarea
              id="comments"
              name="comments"
              className="mt-1 border-wedding-gray/20 focus:border-wedding-blush focus:ring-wedding-blush"
              placeholder={t("comment_placeholder")}
              rows={3}
            />
          </div>
        </div>

        {family?.confirmed_at == undefined &&
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-wedding-darkgray hover:bg-black text-white py-3 rounded-md transition-colors duration-300"
          >
            {isSubmitting ? "Submitting..." : "Submit RSVP"}
          </Button>
        }
      </form>
    </>
  );
};

export default RsvpForm;
