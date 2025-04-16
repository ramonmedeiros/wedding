
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";

const RsvpForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    attending: "yes",
    guests: "0",
    dietaryRestrictions: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      attending: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log("RSVP Submitted:", formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-16">
        <h3 className="text-2xl font-light text-wedding-darkgray">Thank You!</h3>
        <p className="mt-4 max-w-md mx-auto text-wedding-gray">
          We've received your RSVP and are looking forward to celebrating with you.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8 max-w-md mx-auto">
      <div className="space-y-4">
        <div>
          <Label htmlFor="name" className="text-wedding-darkgray">
            Full Name
          </Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 border-wedding-gray/20 focus:border-wedding-blush focus:ring-wedding-blush"
            placeholder="John Smith"
          />
        </div>

        <div>
          <Label htmlFor="email" className="text-wedding-darkgray">
            Email Address
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 border-wedding-gray/20 focus:border-wedding-blush focus:ring-wedding-blush"
            placeholder="john@example.com"
          />
        </div>

        <div>
          <Label className="text-wedding-darkgray block mb-2">
            Will you be attending?
          </Label>
          <RadioGroup
            value={formData.attending}
            onValueChange={handleRadioChange}
            className="flex space-x-6"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="attending-yes" />
              <Label htmlFor="attending-yes" className="text-wedding-gray cursor-pointer">
                Yes, I'll be there
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="attending-no" />
              <Label htmlFor="attending-no" className="text-wedding-gray cursor-pointer">
                Sorry, I can't make it
              </Label>
            </div>
          </RadioGroup>
        </div>

        {formData.attending === "yes" && (
          <>
            <div>
              <Label htmlFor="guests" className="text-wedding-darkgray">
                Number of Guests
              </Label>
              <Input
                id="guests"
                name="guests"
                type="number"
                min="0"
                max="5"
                value={formData.guests}
                onChange={handleChange}
                className="mt-1 border-wedding-gray/20 focus:border-wedding-blush focus:ring-wedding-blush"
              />
            </div>

            <div>
              <Label htmlFor="dietaryRestrictions" className="text-wedding-darkgray">
                Dietary Restrictions
              </Label>
              <Textarea
                id="dietaryRestrictions"
                name="dietaryRestrictions"
                value={formData.dietaryRestrictions}
                onChange={handleChange}
                className="mt-1 border-wedding-gray/20 focus:border-wedding-blush focus:ring-wedding-blush"
                placeholder="Please let us know of any dietary restrictions"
                rows={3}
              />
            </div>
          </>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-wedding-darkgray hover:bg-black text-white py-3 rounded-md transition-colors duration-300"
      >
        {isSubmitting ? "Submitting..." : "Submit RSVP"}
      </Button>
    </form>
  );
};

export default RsvpForm;
