import Layout from "@/components/layout/Layout";
import Title from "@/components/layout/Title";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { QRCodeSVG } from "qrcode.react";
import { useTranslation } from "react-i18next";
import { Copy } from "lucide-react";

const PIX_KEY = "00020126580014BR.GOV.BCB.PIX0136e8d26b52-31e2-4919-90ae-c47a346d705b5204000053039865802BR5920Ramon Nunes Medeiros6009SAO PAULO6214051033t0ponE1L63049AA4";
const PIX_KEY_CPF = "40410121800";
const PIX_KEY_EMAIL = "ramon.rnm@gmail.com";

export const Presente = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Title title={t("presente.title")} description={t("presente.description")} />
      <div className="container mx-auto px-4 pb-20 max-w-2xl">
        <div className="flex flex-col items-center space-y-8 fade-in-delay-2">
          {/* Instructions */}
          <div className="text-center text-wedding-gray space-y-4">
            <p className="text-lg">{t("presente.instructions")}</p>
          </div>

          {/* QR Code */}
          <div className="bg-white p-6 rounded-lg shadow-lg border border-wedding-gray/20">
            <QRCodeSVG
              value={PIX_KEY}
              size={256}
              level="H"
            />
          </div>

          <PixKeyDisplay pixKey={PIX_KEY} keyType="qr" />
          <PixKeyDisplay pixKey={PIX_KEY_CPF} keyType="cpf" />
          <PixKeyDisplay pixKey={PIX_KEY_EMAIL} keyType="email" />
        </div>
      </div>
    </Layout>
  );
};

const PixKeyDisplay = ({ pixKey, keyType }: { pixKey: string; keyType: "qr" | "cpf" | "email" }) => {
  const { t } = useTranslation();

  const handleCopyPixKey = async () => {
    try {
      await navigator.clipboard.writeText(pixKey);
      toast.success(t("presente.copied"));
    } catch (err) {
      toast.error(t("presente.copy_error") || "Failed to copy");
    }
  };

  const getLabel = () => {
    switch (keyType) {
      case "qr":
        return t("presente.pix_key_qr");
      case "cpf":
        return t("presente.pix_key_cpf");
      case "email":
        return t("presente.pix_key_email");
      default:
        return t("presente.pix_key");
    }
  };

  return (
    <div className="w-full space-y-4">
      <label className="block text-sm font-medium text-wedding-darkgray text-center">
        {getLabel()}
      </label>
      <div className="flex items-center gap-2 bg-white border border-wedding-gray/30 rounded-md p-4 shadow-sm max-w-full w-full">
        <input
          type="text"
          value={pixKey}
          readOnly
          className="flex-1 min-w-0 text-center text-lg font-mono text-wedding-darkgray bg-transparent border-none outline-none overflow-hidden text-ellipsis"
        />
        <Button
          onClick={handleCopyPixKey}
          variant="outline"
          size="icon"
          className="shrink-0"
          aria-label={t("presente.copy_button")}
        >
          <Copy className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
