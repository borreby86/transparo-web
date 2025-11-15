import { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Privatlivspolitik | Transparo',
  description: 'Transparo\'s privatlivspolitik. Læs hvordan vi indsamler, bruger og beskytter dine personlige oplysninger i overensstemmelse med GDPR.',
  robots: 'noindex, follow',
}

export default function PrivatlivspolitikPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl py-20 md:py-32">
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-navy mb-8">
            Privatlivspolitik
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-black/60 mb-8">Sidst opdateret: November 2025</p>

            <section className="mb-12">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-navy mb-4">1. Introduktion</h2>
              <p className="text-black/80 leading-relaxed mb-4">
                Transparo ("vi", "os", "vores") respekterer dit privatliv og er forpligtet til at beskytte dine personoplysninger.
                Denne privatlivspolitik forklarer, hvordan vi indsamler, bruger, videregiver og beskytter dine oplysninger, når du besøger
                vores website eller bruger vores tjenester.
              </p>
              <p className="text-black/80 leading-relaxed">
                Denne politik er i overensstemmelse med EU's Databeskyttelsesforordning (GDPR) og dansk lovgivning.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-navy mb-4">2. Dataansvarlig</h2>
              <p className="text-black/80 leading-relaxed mb-2">
                Transparo<br />
                København, Danmark<br />
                Email: kontakt@transparo.dk<br />
                Telefon: +45 12 34 56 78
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-navy mb-4">3. Hvilke oplysninger indsamler vi?</h2>
              <p className="text-black/80 leading-relaxed mb-4">
                Vi kan indsamle følgende typer af personoplysninger:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-black/80">
                <li><strong>Kontaktoplysninger:</strong> Navn, email, telefonnummer, virksomhedsnavn</li>
                <li><strong>Tekniske data:</strong> IP-adresse, browsertype, enhedstype, operativsystem</li>
                <li><strong>Brugsdata:</strong> Hvordan du interagerer med vores website</li>
                <li><strong>Kommunikation:</strong> Beskeder du sender til os via formularer eller email</li>
                <li><strong>Cookies:</strong> Se vores cookiepolitik for detaljer</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-navy mb-4">4. Hvordan bruger vi dine oplysninger?</h2>
              <p className="text-black/80 leading-relaxed mb-4">
                Vi bruger dine personoplysninger til:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-black/80">
                <li>At levere og vedligeholde vores tjenester</li>
                <li>At kommunikere med dig om projekter, tilbud og opdateringer</li>
                <li>At forbedre vores website og tjenester</li>
                <li>At overholde juridiske forpligtelser</li>
                <li>At analysere brugen af vores website (anonymiseret)</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-navy mb-4">5. Retsgrundlag for behandling</h2>
              <p className="text-black/80 leading-relaxed mb-4">
                Vi behandler dine personoplysninger baseret på:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-black/80">
                <li><strong>Samtykke:</strong> Når du giver os tilladelse til at behandle dine data</li>
                <li><strong>Kontraktopfyldelse:</strong> For at levere de tjenester du har bestilt</li>
                <li><strong>Legitime interesser:</strong> For at forbedre vores tjenester og kommunikere med dig</li>
                <li><strong>Juridiske forpligtelser:</strong> Når loven kræver det</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-navy mb-4">6. Videregivelse af data</h2>
              <p className="text-black/80 leading-relaxed mb-4">
                Vi videregiver ikke dine personoplysninger til tredjeparter, undtagen:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-black/80">
                <li>Når du har givet dit udtrykkelige samtykke</li>
                <li>Til serviceudvydere der hjælper os med at drive vores forretning (f.eks. hosting, email)</li>
                <li>Når det er påkrævet ved lov</li>
                <li>For at beskytte vores rettigheder og sikkerhed</li>
              </ul>
              <p className="text-black/80 leading-relaxed mt-4">
                Alle tredjeparter er forpligtet til at overholde GDPR og beskytte dine data.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-navy mb-4">7. Opbevaring af data</h2>
              <p className="text-black/80 leading-relaxed">
                Vi opbevarer kun dine personoplysninger så længe det er nødvendigt for de formål, de blev indsamlet til,
                eller som krævet af loven. Kontaktoplysninger fra henvendelser gemmes typisk i op til 2 år, medmindre du
                anmoder om sletning tidligere.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-navy mb-4">8. Dine rettigheder</h2>
              <p className="text-black/80 leading-relaxed mb-4">
                Under GDPR har du følgende rettigheder:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-black/80">
                <li><strong>Ret til indsigt:</strong> Du kan anmode om en kopi af de personoplysninger vi har om dig</li>
                <li><strong>Ret til berigtigelse:</strong> Du kan anmode om at få rettet forkerte oplysninger</li>
                <li><strong>Ret til sletning:</strong> Du kan anmode om at få slettet dine personoplysninger</li>
                <li><strong>Ret til begrænsning:</strong> Du kan anmode om at begrænse behandlingen af dine data</li>
                <li><strong>Ret til dataportabilitet:</strong> Du kan anmode om at få dine data i et struktureret format</li>
                <li><strong>Ret til indsigelse:</strong> Du kan gøre indsigelse mod behandlingen af dine data</li>
                <li><strong>Ret til at trække samtykke tilbage:</strong> Når behandling er baseret på samtykke</li>
              </ul>
              <p className="text-black/80 leading-relaxed mt-4">
                For at udøve disse rettigheder, kontakt os på kontakt@transparo.dk.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-navy mb-4">9. Sikkerhed</h2>
              <p className="text-black/80 leading-relaxed">
                Vi implementerer passende tekniske og organisatoriske sikkerhedsforanstaltninger for at beskytte dine
                personoplysninger mod uautoriseret adgang, tab, misbrug eller ændring. Dette inkluderer kryptering,
                sikker hosting og adgangskontrol.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-navy mb-4">10. Cookies</h2>
              <p className="text-black/80 leading-relaxed">
                Vores website bruger cookies til at forbedre din brugeroplevelse. For detaljerede oplysninger om vores
                brug af cookies, se vores cookiepolitik.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-navy mb-4">11. Ændringer til denne politik</h2>
              <p className="text-black/80 leading-relaxed">
                Vi kan opdatere denne privatlivspolitik fra tid til anden. Væsentlige ændringer vil blive kommunikeret
                på vores website med en opdateret "Sidst opdateret" dato.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-navy mb-4">12. Kontakt</h2>
              <p className="text-black/80 leading-relaxed mb-4">
                Hvis du har spørgsmål om denne privatlivspolitik eller hvordan vi behandler dine personoplysninger,
                er du velkommen til at kontakte os:
              </p>
              <p className="text-black/80 leading-relaxed">
                Email: kontakt@transparo.dk<br />
                Telefon: +45 12 34 56 78
              </p>
              <p className="text-black/80 leading-relaxed mt-4">
                Du har også ret til at klage til Datatilsynet, hvis du mener, at vi behandler dine personoplysninger
                i strid med GDPR.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
