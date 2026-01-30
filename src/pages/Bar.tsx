export function Bar() {
  return (
    <div className="max-w-3xl mx-auto text-center font-serif text-wedding-deepRed">
      <h1 className="text-6xl font-bold mb-8">BAR</h1>

      <h2 className="text-xl uppercase tracking-widest border-b border-red-800 py-2 mb-8">COCKTAIL MENU</h2>

      <div className="mb-8 border-b border-red-800 pb-4 grid grid-cols-6">
        <div className="text-center justify-center col-start-2 col-span-4" >
          <h3 className="text-4xl font-script mb-2">Margarita</h3>
          <h4 className="uppercase text-sm tracking-wider">TEQUILA, TRIPLE SEC, LIME, SALT</h4>
        </div>
        <Image src="/images/margarita.png" alt="Margarita" />
      </div>

      <div className="mb-8 border-b border-red-800 pb-4 grid grid-cols-6">
        <Image src="/images/aperol_sour.jpg" alt="Aperol Sour" />
        <div className="text-center justify-center col-start-2 col-span-4">
          <h3 className="text-4xl font-script">Aperol Sour</h3>
          <h4 className="uppercase text-sm tracking-wider break-normal">APEROL, ORANGE JUICE, TANGERINE SYRUP AND CITRUS FOAM WITH ORANGE AND LIME LIQUEUR</h4>
        </div>

      </div>

      <div className="mb-8 border-b border-red-800 pb-4 grid grid-cols-6">
        <div className="text-center justify-center col-start-2 col-span-4">
          <h3 className="text-4xl font-script mr-4">Caipirinha</h3>
          <ul className="uppercase text-sm tracking-wider leading-loose">
            <li><span className="font-bold">LIME:</span> LIME, CACHACA & SIMPLE SYRUP</li>
            <li><span className="font-bold">STRAWBERRY:</span> STRAWBERRY, SAKE & SIMPLE SYRUP</li>
            <li><span className="font-bold">PINEAPPLE:</span> PINEAPPLE, CACHACA & SIMPLE SYRUP</li>
            <li><span className="font-bold">PASSION FRUIT:</span> PASSION FRUIT, CACHACA & SIMPLE SYRUP</li>
          </ul>
        </div>
        <div className="">
          <Image src="/images/caipirinha.png" alt="Caipirinha" />
        </div>

      </div>

      <div className="mb-8 border-b border-red-800 pb-4 grid grid-cols-6">
        <Image src="/images/smash_pepino.png" alt="Smash Pepino" />
        <div className="text-center justify-center col-start-2 col-span-4">
          <h3 className="text-4xl font-script">Smash Pepino</h3>
          <h4 className="uppercase text-sm tracking-wider">GIN, TONIC WATER, LEMON, LEMON SYRUP, CUCUMBER AND ICE. SERVED IN A SMOKED GLASS WITH CLOVES AND ROSEMARY.</h4>
        </div>
      </div>

      <div className="mb-8 border-b border-red-800 pb-4 grid grid-cols-6">
        <div className="text-center justify-center col-start-2 col-span-4">
          <h3 className="text-4xl font-script mr-4">Fitzgerald</h3>
          <h4 className="uppercase text-sm tracking-wider">GIN, LEMON, ANGOSTURA BITTER, SIMPLE SYRUP, ORANGE AND ICE</h4>
        </div>
        <Image src="/images/fitzgerald.png" alt="Fitzgerald" />
      </div>

      <div className="mb-4 border-red-800 pb-4 grid grid-cols-6">
        <Image src="/images/cosmopolitan.png" alt="Cosmopolitan" />
        <div className="text-center justify-center col-start-2 col-span-4">
          <h3 className="text-4xl font-script">Cosmopolitan</h3>
          <h4 className="uppercase text-sm tracking-wider">VODKA, ORANGE LIQUEUR, CRANBERRY JUICE, LIME, LIME ZEST</h4>
        </div>
      </div>

      <h2 className="text-xl uppercase tracking-widest border-t border-b border-red-800 py-2 mb-8">MOCKTAIL MENU</h2>

      <div className="mb-8 grid grid-cols-6">
        <div className="text-center justify-center items-center mb-2 col-start-2 col-span-4">
          <h3 className="text-4xl font-script">Caipirinha</h3>
          <ul className="uppercase text-sm tracking-wider leading-loose">
            <li><span className="font-bold">LIME:</span> LIME, SIMPLE SYRUP & MINERAL WATER</li>
            <li><span className="font-bold">STRAWBERRY:</span> STRAWBERRY, SIMPLE SYRUP & MINERAL WATER</li>
            <li><span className="font-bold">PINEAPPLE:</span> PINEAPPLE, SIMPLE SYRUP & MINERAL WATER</li>
            <li><span className="font-bold">PASSION FRUIT:</span> PASSION FRUIT, SIMPLE SYRUP & MINERAL WATER</li>
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