import {
    Martini,
    Wine,
    GlassWater,
    Citrus,
    Droplets,
    CupSoda
} from "lucide-react";

export function Bar() {
    return (
        <div className="min-h-screen bg-white text-[#4A0404] p-8 md:p-12 font-serif selection:bg-[#4A0404] selection:text-white">
            <div className="max-w-3xl mx-auto border-double border-4 border-[#4A0404]/20 p-8 md:p-16 relative">
                {/* Decorative corners */}
                <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-[#4A0404] opacity-50" />
                <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-[#4A0404] opacity-50" />
                <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-[#4A0404] opacity-50" />
                <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-[#4A0404] opacity-50" />

                <header className="text-center mb-16 space-y-4">
                    <h1 className="text-6xl md:text-8xl tracking-widest font-serif font-light mb-2">BAR</h1>
                    <div className="flex items-center justify-center gap-4">
                        <div className="h-[1px] w-12 bg-[#4A0404]" />
                        <h2 className="text-sm md:text-lg tracking-[0.3em] font-sans uppercase">Cocktail Menu</h2>
                        <div className="h-[1px] w-12 bg-[#4A0404]" />
                    </div>
                </header>

                <div className="space-y-12">
                    {/* Cocktail Items */}
                    <div className="group">
                        <div className="flex items-start justify-between gap-4 mb-2">
                            <div className="flex-1">
                                <h3 className="text-2xl font-serif tracking-wide mb-1 uppercase">Margarita</h3>
                                <p className="text-sm font-sans tracking-wider opacity-80 leading-relaxed">
                                    Tequila, triple sec, lime, salt
                                </p>
                            </div>
                            <Martini className="w-8 h-8 opacity-80 stroke-1" />
                        </div>
                        <div className="h-[1px] w-full bg-[#4A0404]/20 mt-4 group-last:hidden" />
                    </div>

                    <div className="group">
                        <div className="flex items-start justify-between gap-4 mb-2">
                            <div className="flex-1">
                                <h3 className="text-2xl font-serif tracking-wide mb-1 uppercase">Aperol Sour</h3>
                                <p className="text-sm font-sans tracking-wider opacity-80 leading-relaxed">
                                    Aperol, orange juice, tangerine syrup and citrus foam with orange and lime liqueur
                                </p>
                            </div>
                            <Wine className="w-8 h-8 opacity-80 stroke-1" />
                        </div>
                        <div className="h-[1px] w-full bg-[#4A0404]/20 mt-4 group-last:hidden" />
                    </div>

                    <div className="group">
                        <div className="flex items-start justify-between gap-4 mb-2">
                            <div className="flex-1">
                                <h3 className="text-2xl font-serif tracking-wide mb-1 uppercase">Caipirinha</h3>
                                <div className="space-y-1 mt-2 font-sans text-sm tracking-wider opacity-80">
                                    <div className="flex gap-2">
                                        <span className="font-semibold min-w-20">LIME:</span>
                                        <span>Lime, cachaça & simple syrup</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <span className="font-semibold min-w-20">STRAWBERRY:</span>
                                        <span>Strawberry, sake & simple syrup</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <span className="font-semibold min-w-20">PINEAPPLE:</span>
                                        <span>Pineapple, cachaça & simple syrup</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <span className="font-semibold min-w-20">PASSION FRUIT:</span>
                                        <span>Passion fruit, cachaça & simple syrup</span>
                                    </div>
                                </div>
                            </div>
                            <GlassWater className="w-8 h-8 opacity-80 stroke-1" />
                        </div>
                        <div className="h-[1px] w-full bg-[#4A0404]/20 mt-4 group-last:hidden" />
                    </div>

                    <div className="group">
                        <div className="flex items-start justify-between gap-4 mb-2">
                            <div className="flex-1">
                                <h3 className="text-2xl font-serif tracking-wide mb-1 uppercase">Smash Pepino</h3>
                                <p className="text-sm font-sans tracking-wider opacity-80 leading-relaxed">
                                    Gin, tonic water, lemon, lemon syrup, cucumber and ice. Served in a smoked glass with cloves and rosemary
                                </p>
                            </div>
                            <CupSoda className="w-8 h-8 opacity-80 stroke-1" />
                        </div>
                        <div className="h-[1px] w-full bg-[#4A0404]/20 mt-4 group-last:hidden" />
                    </div>

                    <div className="group">
                        <div className="flex items-start justify-between gap-4 mb-2">
                            <div className="flex-1">
                                <h3 className="text-2xl font-serif tracking-wide mb-1 uppercase">Fitzgerald</h3>
                                <p className="text-sm font-sans tracking-wider opacity-80 leading-relaxed">
                                    Gin, lemon, Angostura bitters, simple syrup, orange and ice
                                </p>
                            </div>
                            <GlassWater className="w-8 h-8 opacity-80 stroke-1" />
                        </div>
                        <div className="h-[1px] w-full bg-[#4A0404]/20 mt-4 group-last:hidden" />
                    </div>

                    <div className="group">
                        <div className="flex items-start justify-between gap-4 mb-2">
                            <div className="flex-1">
                                <h3 className="text-2xl font-serif tracking-wide mb-1 uppercase">Cosmopolitan</h3>
                                <p className="text-sm font-sans tracking-wider opacity-80 leading-relaxed">
                                    Vodka, orange liqueur, cranberry juice, lime, lime zest
                                </p>
                            </div>
                            <Martini className="w-8 h-8 opacity-80 stroke-1" />
                        </div>
                        <div className="h-[1px] w-full bg-[#4A0404]/20 mt-4 group-last:hidden" />
                    </div>
                </div>

                {/* Mocktail Header */}
                <div className="py-12 flex items-center justify-center gap-4">
                    <div className="h-[1px] w-12 bg-[#4A0404] opacity-50" />
                    <h2 className="text-xl md:text-2xl tracking-[0.2em] font-serif uppercase">Mocktail Menu</h2>
                    <div className="h-[1px] w-12 bg-[#4A0404] opacity-50" />
                </div>

                {/* Mocktail Items */}
                <div className="space-y-8">
                    <div className="group">
                        <div className="flex items-start justify-between gap-4 mb-2">
                            <div className="flex-1">
                                <h3 className="text-2xl font-serif tracking-wide mb-1 uppercase">Caipirinha</h3>
                                <div className="space-y-1 mt-2 font-sans text-sm tracking-wider opacity-80">
                                    <div className="flex gap-2">
                                        <span className="font-semibold min-w-20">LIME:</span>
                                        <span>Lime, simple syrup & mineral water</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <span className="font-semibold min-w-20">STRAWBERRY:</span>
                                        <span>Strawberry, simple syrup & mineral water</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <span className="font-semibold min-w-20">PINEAPPLE:</span>
                                        <span>Pineapple, simple syrup & mineral water</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <span className="font-semibold min-w-20">PASSION FRUIT:</span>
                                        <span>Passion fruit, simple syrup & mineral water</span>
                                    </div>
                                </div>
                            </div>
                            <Citrus className="w-8 h-8 opacity-80 stroke-1" />
                        </div>
                        <div className="h-[1px] w-full bg-[#4A0404]/20 mt-4 group-last:hidden" />
                    </div>

                    <div className="text-center pt-8">
                        <p className="text-xs font-sans tracking-[0.2em] opacity-60 uppercase">
                            Please drink responsibly
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
