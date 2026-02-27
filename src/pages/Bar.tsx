import { useTranslation } from 'react-i18next';

export function Bar() {
  const { t } = useTranslation();
  return (
    <div className="max-w-3xl mx-auto text-center font-serif text-wedding-deepRed">
      <h1 className="text-8xl mb-6">{t('bar.title')}</h1>

      <h2 className="text-xl uppercase tracking-widest border-b border-red-800 py-2 mb-6">{t('bar.cocktail_menu')}</h2>

      <div className="mb-6 border-b border-red-800 pb-4 grid grid-cols-11">
        <div className="text-center justify-center col-start-4 col-span-5" >
          <h3 className="text-4xl font-script mb-2">{t('bar.margarita.title')}</h3>
          <h4 className="uppercase text-sm tracking-wider">{t('bar.margarita.ingredients')}</h4>
        </div>
        <Image src="/images/margarita.png" alt="Margarita" />
      </div>

      <div className="mb-6 border-b border-red-800 pb-4 grid grid-cols-11">
        <div className="col-start-2 col-span-2">
          <Image src="/images/aperol_sour.jpg" alt="Aperol Sour" />
        </div>
        <div className="text-center justify-center col-start-4 col-span-5">
          <h3 className="text-4xl font-script">{t('bar.aperol_sour.title')}</h3>
          <h4 className="uppercase text-sm tracking-wider break-normal">{t('bar.aperol_sour.ingredients')}</h4>
        </div>
      </div>

      <div className="mb-6 border-b border-red-800 pb-4 grid grid-cols-11">
        <div className="text-center justify-center col-start-3 col-span-7">
          <h3 className="text-4xl font-script mr-4">{t('bar.caipirinha.title')}</h3>
          <ul className="uppercase text-sm tracking-wider leading-loose">
            <li><span className="font-bold">{t('bar.caipirinha.lime')}</span>{t('bar.caipirinha.lime_ingredients')}</li>
            <li><span className="font-bold">{t('bar.caipirinha.strawberry')}</span>{t('bar.caipirinha.strawberry_ingredients')}</li>
            <li><span className="font-bold">{t('bar.caipirinha.pineapple')}</span>{t('bar.caipirinha.pineapple_ingredients')}</li>
            <li><span className="font-bold">{t('bar.caipirinha.passion_fruit')}</span>{t('bar.caipirinha.passion_fruit_ingredients')}</li>
          </ul>
        </div>
        <Image src="/images/caipirinha.png" alt="Caipirinha" />
      </div>

      <div className="mb-6 border-b border-red-800 pb-4 grid grid-cols-11">
        <div className="col-start-2 col-span-2">
          <Image src="/images/strawberry_gin.png" alt="Strawberry Gin" />
        </div>
        <div className="text-center justify-center col-start-4 col-span-5">
          <h3 className="text-4xl font-script">{t('bar.strawberry_gin.title')}</h3>
          <h4 className="uppercase text-sm tracking-wider">{t('bar.strawberry_gin.ingredients')}</h4>
        </div>
      </div>

      <div className="mb-6 border-b border-red-800 pb-4 grid grid-cols-11">
        <div className="text-center justify-center col-start-4 col-span-5">
          <h3 className="text-4xl font-script mr-4">{t('bar.fitzgerald.title')}</h3>
          <h4 className="uppercase text-sm tracking-wider">{t('bar.fitzgerald.ingredients')}</h4>
        </div>
        <Image src="/images/fitzgerald.png" alt="Fitzgerald" />
      </div>

      <div className="mb-4 border-red-800 pb-4 grid grid-cols-11">
        <div className="col-start-2 col-span-2">
          <Image src="/images/cosmopolitan.png" alt="Cosmopolitan" />
        </div>
        <div className="text-center justify-center col-start-4 col-span-5">
          <h3 className="text-4xl font-script">{t('bar.cosmopolitan.title')}</h3>
          <h4 className="uppercase text-sm tracking-wider">{t('bar.cosmopolitan.ingredients')}</h4>
        </div>
      </div>

      <h2 className="text-xl uppercase tracking-widest border-t border-b border-red-800 py-2 mb-6">{t('bar.mocktail_menu')}</h2>

      <div className="mb-6 grid grid-cols-11">
        <div className="text-center justify-center col-start-3 col-span-7">
          <h3 className="text-4xl font-script">{t('bar.caipirinha.title')}</h3>
          <ul className="uppercase text-sm tracking-wider leading-loose">
            <li><span className="font-bold">{t('bar.mocktail.lime')}:</span> {t('bar.mocktail.lime')}, {t('bar.mocktail.suffix')}</li>
            <li><span className="font-bold">{t('bar.mocktail.strawberry')}:</span> {t('bar.mocktail.strawberry')}, {t('bar.mocktail.suffix')}</li>
            <li><span className="font-bold">{t('bar.mocktail.pineapple')}:</span> {t('bar.mocktail.pineapple')}, {t('bar.mocktail.suffix')}</li>
            <li><span className="font-bold">{t('bar.mocktail.passion_fruit')}:</span> {t('bar.mocktail.passion_fruit')}, {t('bar.mocktail.suffix')}</li>
          </ul>
        </div>
        <Image src="/images/caipirinha.png" alt="Caipirinha" />
      </div>
    </div>
  );
};


const Image = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className="w-12 h-12">
      <img
        src={src}
        alt={alt}
        className="w-full h-auto object-contain mx-auto"
      />
    </div>
  );
};