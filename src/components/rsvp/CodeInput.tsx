import { useSearchParams } from "react-router-dom";
import { Input, Button, Label } from "../ui";
import { useTranslation } from "react-i18next";
import { useRef } from "react";

const CodeInput = () => {
  const { t } = useTranslation()
  const [searchParams, setSearchParams] = useSearchParams();
  const codeInput = useRef<HTMLInputElement>();

  const handleSubmit = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      searchParams.set("code", codeInput.current.value)
      setSearchParams(searchParams)
    }
  }

  return (
    <div className="text-center mb-5" >
      <Label htmlFor="codeInput" className="mx-auto text-center block mb-2">
        {t("code")}
      </Label>
      <div className="flex justify-center items-center space-x-1">
        <Input
          ref={codeInput}
          required
          onKeyUpCapture={handleSubmit}
          className="w-40 border-wedding-gray/20 focus:border-wedding-blush focus:ring-wedding-blush"
        />
        <Button
          type="submit"
          onClick={handleSubmit}
          className="relative bg-wedding-darkgray hover:bg-black text-white py-3 rounded-md transition-colors duration-300"
        >
          {t("submit")}
        </Button>
      </div>
    </div>
  )
}

export default CodeInput;