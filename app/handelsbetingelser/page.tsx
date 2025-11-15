import { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Handelsbetingelser | Transparo',
  description: 'Transparo\'s handelsbetingelser. Læs vores vilkår og betingelser for webdesign og udvikling services.',
  robots: 'noindex, follow',
}

export default function HandelsbetingelserPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl py-20 md:py-32">
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-navy mb-8">
            Handelsbetingelser
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-black/60 mb-8">Sidst opdateret: November 2025</p>

            <section className="mb-12">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-navy mb-4">1. Generelt</h2>
              <p className="text-black/80 leading-relaxed mb-4">
                Disse handelsbetingelser gælder for alle aftaler mellem Transparo ("vi", "os", "vores") og kunden
                ("du", "din", "kunde") vedrørende levering af webdesign, webudvikling og relaterede tjenester.
              </p>
              <p className="text-black/80 leading-relaxed">
                Ved at acceptere et tilbud eller påbegynde et projekt med Transparo accepterer du disse handelsbetingelser.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-navy mb-4">2. Tilbud og Accept</h2>
              <p className="text-black/80 leading-relaxed mb-4">
                Alle tilbud fra Transparo er gyldige i 30 dage fra udstedelsesdatoen, medmindre andet er angivet.
              </p>
              <p className="text-black/80 leading-relaxed mb-4">
                En aftale er indgået, når kunden har accepteret vores tilbud skriftligt (email eller digital signatur)
                og betalt depositum.
              </p>
              <p className="text-black/80 leading-relaxed">
                Vi forbeholder os retten til at afvise projekter efter vores vurdering.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-navy mb-4">3. Priser og Betaling</h2>
              <p className="text-black/80 leading-relaxed mb-4">
                Alle priser er angivet i danske kroner (DKK) ekskl. moms, medmindre andet er angivet.
              </p>
              <p className="text-black/80 leading-relaxed mb-4">
                <strong>Betalingsbetingelser:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 text-black/80">
                <li>50% depositum ved projektstart</li>
                <li>25% ved levering af design til godkendelse</li>
                <li>25% ved final godkendelse og lancering</li>
              </ul>
              <p className="text-black/80 leading-relaxed mt-4">
                Betalingsfrist er 14 dage fra fakturadato. Ved forsinket betaling tillægges renter i henhold til renteloven.
              </p>
              <p className="text-black/80 leading-relaxed mt-4">
                <strong>Fast Pris Garanti:</strong> Den aftalte pris er fast og kan ikke ændres, medmindre kunden anmoder
                om ekstra funktioner eller ændringer uden for det oprindelige scope.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-navy mb-4">4. Projektomfang og Ændringer</h2>
              <p className="text-black/80 leading-relaxed mb-4">
                Projektomfanget defineres i den oprindelige aftale og inkluderer de funktioner og sider som specificeret
                i den valgte pakke.
              </p>
              <p className="text-black/80 leading-relaxed mb-4">
                <strong>Revisioner:</strong> Antallet af revisionsrunder er specificeret i din pakke (2-5 runder afhængig
                af pakke). Revisioner skal være inden for det oprindelige scope.
              </p>
              <p className="text-black/80 leading-relaxed mb-4">
                <strong>Scope Changes:</strong> Anmodninger om funktioner eller ændringer uden for det oprindelige scope
                vil blive faktureret separat baseret på timepriser eller en særskilt aftale.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-navy mb-4">5. Leveringstid</h2>
              <p className="text-black/80 leading-relaxed mb-4">
                Estimeret leveringstid er angivet i din pakke (10-28 dage afhængig af pakke). Leveringstiden starter
                fra det tidspunkt hvor:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-black/80">
                <li>Depositum er modtaget</li>
                <li>Alle nødvendige materialer er leveret af kunden (tekst, billeder, logoer, etc.)</li>
                <li>Discovery call er gennemført</li>
              </ul>
              <p className="text-black/80 leading-relaxed mt-4">
                Leveringstiden kan forlænges, hvis kunden er forsinket med feedback, materialer eller godkendelser.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-navy mb-4">6. Kundens Forpligtelser</h2>
              <p className="text-black/80 leading-relaxed mb-4">
                Kunden forpligter sig til at:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-black/80">
                <li>Levere alle nødvendige materialer (tekst, billeder, logoer) rettidigt</li>
                <li>Give feedback og godkendelser inden for 5 arbejdsdage</li>
                <li>Deltage i planlagte møder og calls</li>
                <li>Sikre at leverede materialer ikke krænker ophavsret eller andre rettigheder</li>
                <li>Betale fakturaer til tiden</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-navy mb-4">7. Immaterielle Rettigheder</h2>
              <p className="text-black/80 leading-relaxed mb-4">
                <strong>Kunden erhverver:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 text-black/80">
                <li>Fuld ejerskab til det færdige website design</li>
                <li>Rettigheder til al custom kode udviklet specifikt til projektet</li>
                <li>Rettigheder til at bruge, modificere og vedligeholde websitet</li>
              </ul>
              <p className="text-black/80 leading-relaxed mt-4">
                <strong>Transparo forbeholder sig:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 text-black/80">
                <li>Rettigheder til generiske komponenter og kode-biblioteker udviklet af Transparo</li>
                <li>Ret til at bruge projektet i vores portfolio</li>
                <li>Ret til at genbruge generiske design-mønstre og teknikker</li>
              </ul>
              <p className="text-black/80 leading-relaxed mt-4">
                Overdragelse af rettigheder sker først når fuld betaling er modtaget.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-navy mb-4">8. Hosting og Domæne</h2>
              <p className="text-black/80 leading-relaxed mb-4">
                Hosting og domæneregistrering er ikke inkluderet i vores pakkepriser, medmindre andet er specificeret.
              </p>
              <p className="text-black/80 leading-relaxed mb-4">
                Vi kan hjælpe med opsætning af hosting og domæne, men kunden er ansvarlig for løbende omkostninger
                til disse tjenester.
              </p>
              <p className="text-black/80 leading-relaxed">
                Vi anbefaler hosting-løsninger, men kunden vælger selv udbyder og står for betaling.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-navy mb-4">9. Support og Vedligeholdelse</h2>
              <p className="text-black/80 leading-relaxed mb-4">
                <strong>Support efter lancering:</strong> Din pakke inkluderer support i 30-90 dage efter lancering
                (afhængig af pakke).
              </p>
              <p className="text-black/80 leading-relaxed mb-4">
                Support dækker:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-black/80">
                <li>Hjælp til at bruge CMS</li>
                <li>Fejlrettelser af problemer forårsaget af vores kode</li>
                <li>Mindre justeringer inden for det oprindelige scope</li>
              </ul>
              <p className="text-black/80 leading-relaxed mt-4">
                Support dækker <strong>ikke</strong>:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-black/80">
                <li>Nye funktioner eller ændringer</li>
                <li>Problemer forårsaget af tredjeparts plugins eller services</li>
                <li>Hosting eller server-problemer</li>
                <li>Skader forårsaget af kunden eller tredjeparter</li>
              </ul>
              <p className="text-black/80 leading-relaxed mt-4">
                Efter support-perioden kan løbende vedligeholdelse aftales separat.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-navy mb-4">10. Garanti og Ansvarsfraskrivelse</h2>
              <p className="text-black/80 leading-relaxed mb-4">
                <strong>Garanti:</strong> Vi garanterer at det leverede arbejde er udført professionelt og i overensstemmelse
                med industristandarder.
              </p>
              <p className="text-black/80 leading-relaxed mb-4">
                <strong>Ansvarsfraskrivelse:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 text-black/80">
                <li>Vi garanterer ikke specifikke forretningsresultater eller trafik til websitet</li>
                <li>Vi er ikke ansvarlige for tab af data, medmindre det skyldes grov uagtsomhed</li>
                <li>Vi er ikke ansvarlige for problemer forårsaget af tredjeparts services</li>
                <li>Vores maksimale ansvar er begrænset til det beløb kunden har betalt for projektet</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-navy mb-4">11. Annullering og Refusion</h2>
              <p className="text-black/80 leading-relaxed mb-4">
                <strong>Annullering af kunden:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 text-black/80">
                <li>Inden projektstart: Fuld refusion minus 10% administrationsgebyr</li>
                <li>Under design-fase: Depositum er ikke refunderbart, men allerede udført arbejde betales</li>
                <li>Efter design-godkendelse: Ingen refusion, men kunden modtager alle filer fra projektet</li>
              </ul>
              <p className="text-black/80 leading-relaxed mt-4">
                <strong>Annullering af Transparo:</strong> Hvis vi annullerer et projekt, refunderes alle betalte beløb fuldt ud.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-navy mb-4">12. Fortrolighed</h2>
              <p className="text-black/80 leading-relaxed mb-4">
                Begge parter forpligter sig til at behandle fortrolige oplysninger med omhu og ikke videregive disse
                til tredjeparter uden skriftligt samtykke.
              </p>
              <p className="text-black/80 leading-relaxed">
                Fortrolighedsforpligtelsen gælder under projektet og 2 år efter projektets afslutning.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-navy mb-4">13. Force Majeure</h2>
              <p className="text-black/80 leading-relaxed">
                Ingen af parterne er ansvarlige for forsinkelser eller manglende opfyldelse af forpligtelser forårsaget
                af omstændigheder uden for deres kontrol (naturkatastrofer, krig, strejke, pandemier, etc.).
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-navy mb-4">14. Lovvalg og Værneting</h2>
              <p className="text-black/80 leading-relaxed mb-4">
                Disse handelsbetingelser er underlagt dansk ret.
              </p>
              <p className="text-black/80 leading-relaxed">
                Eventuelle tvister skal søges løst i mindelighed. Hvis dette ikke er muligt, skal tvisten afgøres
                ved de danske domstole.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-navy mb-4">15. Ændringer af Betingelser</h2>
              <p className="text-black/80 leading-relaxed">
                Vi forbeholder os retten til at ændre disse handelsbetingelser. Ændringer gælder for nye projekter
                indgået efter ændringsdatoen. Igangværende projekter følger de betingelser der var gældende ved
                projektstart.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-navy mb-4">16. Kontakt</h2>
              <p className="text-black/80 leading-relaxed mb-4">
                Hvis du har spørgsmål til disse handelsbetingelser, er du velkommen til at kontakte os:
              </p>
              <p className="text-black/80 leading-relaxed">
                Transparo<br />
                Email: kontakt@transparo.dk<br />
                Telefon: +45 12 34 56 78<br />
                København, Danmark
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
