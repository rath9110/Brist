export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "callout"; text: string };

export type FaqItem = { q: string; a: string };

export type Article = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  publishedAt: string;
  category: "pillar" | "nutrient" | "symptom" | "lifestyle";
  relatedSlugs: string[];
  blocks: Block[];
  faq?: FaqItem[];
};

export const ARTICLES: Article[] = [
  // ── PILLAR ────────────────────────────────────────────────────────────────
  {
    slug: "vitaminbrist-tecken-test",
    title: "Vitaminbrist: tecken, test och vad du kan göra",
    metaTitle: "Vitaminbrist: tecken, test och vad du kan göra",
    metaDescription:
      "Lär dig känna igen de vanligaste tecknen på vitaminbrist, vilka tillskott du kan börja med direkt och när du bör ta ett blodprov.",
    publishedAt: "2026-04-12",
    category: "pillar",
    relatedSlugs: [
      "d-vitaminbrist",
      "jarnbrist-symptom",
      "magnesiumbrist",
      "alltid-trott-vitaminbrist",
      "vilka-vitaminer-testa-blodprov",
    ],
    blocks: [
      {
        type: "p",
        text: "Nästan alla vet att vitaminer är viktiga, men de flesta vet inte om de faktiskt får i sig tillräckligt. Vitaminbrist är vanligare än vi tror och symtomen är ofta diffusa: trötthet, sämre sömn, håravfall eller återkommande förkylningar. Det är sällan dramatiskt, men det påverkar hur du mår varje dag.",
      },
      {
        type: "h2",
        text: "Varför är vitaminbrist så vanligt i Sverige?",
      },
      {
        type: "p",
        text: "Sverige ligger på 59–68 graders nordlig breddgrad, vilket innebär att solen är för låg på himlen under vinterhalvåret för att huden ska kunna producera D-vitamin. Från oktober till mars är D-vitaminbrist praktiskt taget oundviklig utan tillskott, oavsett hur hälsosamt du äter.",
      },
      {
        type: "p",
        text: "Utöver solproblemet är moderna matvanor en stor faktor. Processad mat är fattig på magnesium, zink och B-vitaminer. Intensiv träning ökar förbrukningen av magnesium och zink. Växtbaserade dieter begränsar tillgången på järn, B12 och omega-3. Resultatet är att många har brister utan att känna till det.",
      },
      {
        type: "h2",
        text: "De vanligaste bristerna i Sverige",
      },
      {
        type: "ul",
        items: [
          "[D-vitaminbrist](/artikel/d-vitaminbrist) - nästan alla i Sverige har låga nivåer under vinterhalvåret",
          "[Järnbrist](/artikel/jarnbrist-symptom) - vanligast hos kvinnor med kraftig menstruation och uthållighetsidrottare",
          "[Magnesiumbrist](/artikel/magnesiumbrist) - utarmas av stress, träning och processad kost",
          "[B12-brist](/artikel/b12-brist) - kritisk risk för veganer, vegetarianer och personer över 50",
          "[Omega-3](/artikel/omega-3-tillskott) - bristfälligt om du inte äter fet fisk 2–3 gånger per vecka",
          "[Zinkbrist](/artikel/zinkbrist) - undervärderat problem vid växtbaserad kost och intensiv träning",
        ],
      },
      {
        type: "h2",
        text: "Hur märker du att du har brist?",
      },
      {
        type: "p",
        text: "Det svåra med näringsbrist är att symtomen sällan är specifika. Trötthet kan bero på järnbrist, D-vitaminbrist, B12-brist eller sköldkörtelproblem. Håravfall kopplas till järn, zink och sköldkörteln. Muskelkramper pekar mot magnesium och D-vitamin. Det krävs ofta ett blodprov för att veta vad som faktiskt är lågt.",
      },
      {
        type: "p",
        text: "Några tecken som är starka indikatorer på specifika brister: kramper och sömnproblem tyder på magnesiumbrist, stickningar i händer och fötter kan indikera B12-brist, och upprepade infektioner kombinerat med dålig sårläkning är klassiska tecken på zinkbrist.",
      },
      {
        type: "h2",
        text: "Ska du börja med tillskott eller ta ett blodprov?",
      },
      {
        type: "p",
        text: "För vissa tillskott är det helt säkert att starta utan test. D-vitamin och magnesium har brett säkerhetsfönster; det är svårt att skada sig och behovet är stort för nästan alla i Sverige. Om du bor i Sverige och inte tar D-vitamintillskott under vinterhalvåret är sannolikheten hög att du har för låga nivåer.",
      },
      {
        type: "p",
        text: "För järn är situationen den motsatta. Järnöverskott är skadligt och järnöverladdning (hemokromatos) är en relativt vanlig genetisk sjukdom i Sverige. Ta aldrig järntillskott utan att ha testat ditt ferritinvärde. Detsamma gäller zink i högre doser - mer är inte alltid bättre.",
      },
      {
        type: "h2",
        text: "Vad kostar ett blodprov?",
      },
      {
        type: "p",
        text: "Via din vårdcentral kan du ofta få de viktigaste proverna kostnadsfritt eller till patientavgift om du beskriver symtom som trötthet, sömnproblem eller håravfall. Be specifikt om ferritin (inte bara hemoglobin), 25-OH-D3, B12 och TSH.",
      },
      {
        type: "p",
        text: "Privata hemtesttjänster erbjuder kompletta vitamin- och mineralpaneler för 500–1 500 kronor. Det är ett bra alternativ om du vill ha full kontroll utan att behöva argumentera med en läkare om vilka tester som är relevanta.",
      },
      {
        type: "callout",
        text: "Vet inte var du ska börja? Gör Peiling-quizzen. Svara på några frågor om dina mål, din kost och dina symtom och få en personlig bild av vilka brister som är mest troliga för dig.",
      },
    ],
    faq: [
      {
        q: "Vilka är de vanligaste vitaminbristerna i Sverige?",
        a: "De vanligaste bristerna i Sverige är D-vitaminbrist (extremt utbredd under vinterhalvåret), järnbrist (framförallt hos kvinnor och uthållighetsidrottare), magnesiumbrist (vanlig vid stress och intensiv träning), B12-brist (risk för veganer och personer över 50) och zinkbrist (vanlig vid växtbaserad kost).",
      },
      {
        q: "Hur vet jag om jag har vitaminbrist?",
        a: "Symtom på vitaminbrist varierar beroende på vilken brist det handlar om, men vanliga tecken inkluderar kronisk trötthet, håravfall, sköra naglar, muskelkramper, sömnproblem och täta infektioner. Det säkraste sättet att veta är ett blodprov - be om ferritin, 25-OH-D3, B12 och TSH.",
      },
      {
        q: "Kan jag ta vitamintillskott utan att testa mig?",
        a: "För D-vitamin och magnesium är det säkert att börja utan test - de har breda säkerhetsfönster och de flesta i Sverige har otillräckliga nivåer. Järntillskott bör du aldrig ta utan att ha testat ferritinvärdet, eftersom järnöverskott är skadligt.",
      },
      {
        q: "Vad kostar ett blodprov för vitaminer?",
        a: "Via din vårdcentral kan du ofta få de viktigaste proverna kostnadsfritt om du beskriver symtom. Privata hemtesttjänster erbjuder kompletta paneler för 500–1 500 kronor.",
      },
    ],
  },

  // ── NUTRIENT CLUSTER ──────────────────────────────────────────────────────
  {
    slug: "d-vitaminbrist",
    title: "D-vitaminbrist: varför nästan alla i Sverige bör testa sig",
    metaTitle: "D-vitaminbrist: Symtom, test och tillskott",
    metaDescription:
      "D-vitaminbrist är extremt vanligt i Sverige på grund av vårt geografiska läge. Lär dig symtomen, hur du testar och hur mycket du behöver.",
    publishedAt: "2026-04-12",
    category: "nutrient",
    relatedSlugs: [
      "vitaminbrist-tecken-test",
      "alltid-trott-vitaminbrist",
      "somnproblem-naringsbrist",
      "vilka-vitaminer-testa-blodprov",
    ],
    blocks: [
      {
        type: "p",
        text: "D-vitaminbrist är ett av Sveriges mest underskattade folkhälsoproblem. Uppskattningsvis 50–80 procent av befolkningen har otillräckliga nivåer under vinterhalvåret, inte för att vi äter dåligt utan för att vi bor på fel breddgrad.",
      },
      {
        type: "h2",
        text: "Sverige och solproblemet",
      },
      {
        type: "p",
        text: "Huden producerar D-vitamin när UVB-strålning träffar huden. Men Sverige ligger på 59–68 graders nordlig breddgrad, och från oktober till mars är solens vinkel för låg för att ge tillräcklig UVB-strålning - även en solig dag. Det innebär att kroppen inte kan producera D-vitamin alls under vinterhalvåret, oavsett hur mycket tid du spenderar utomhus.",
      },
      {
        type: "p",
        text: "Under sommarmånaderna kan solexponering ge tillräckliga nivåer, men många arbetar inomhus, använder solskydd eller täcker huden. Resultatet är att lagren töms under hösten och att de flesta är klart bristfälliga i februari–april, precis när energi och immunförsvar behövs som mest.",
      },
      {
        type: "h2",
        text: "Symtom på D-vitaminbrist",
      },
      {
        type: "ul",
        items: [
          "Kronisk trötthet och låg energi",
          "Nedstämdhet och vinterdepression (SAD)",
          "Återkommande förkylningar och infektioner",
          "Muskelsvaghet och diffus smärta",
          "Ben- och ledvärk",
          "Sämre sårläkning",
        ],
      },
      {
        type: "p",
        text: "Det svåra är att symtomen är vaga och lätta att bortförklara. De flesta tänker inte att tröttheten i mars beror på D-vitaminbrist. De tror att de är stressade, undersomniga eller sjuka. Men när man testar sig och börjar supplementera märker många en tydlig förändring inom 6–8 veckor.",
      },
      {
        type: "h2",
        text: "Vad gör D-vitamin i kroppen?",
      },
      {
        type: "p",
        text: "D-vitamin är egentligen ett hormon snarare än ett vitamin. Det reglerar uttrycket av över 1 000 gener och påverkar immunförsvaret, muskelfunktionen, kalciumupptaget och humöret. Brist är kopplad till ökad risk för autoimmuna sjukdomar, infektioner, depression och benskörhet.",
      },
      {
        type: "h2",
        text: "Hur mycket behöver du?",
      },
      {
        type: "p",
        text: "Det officiella rekommenderade intaget i Sverige är 10–20 µg per dag (400–800 IE). Men de flesta experter och studier tyder på att 50–100 µg per dag (2 000–4 000 IE) behövs för att upprätthålla optimala blodnivåer under vinterhalvåret - särskilt om du startar från låga nivåer.",
      },
      {
        type: "p",
        text: "Blodvärdet du vill se är 25-OH-D3. Referensvärdet i Sverige sätts ofta vid 50 nmol/L, men optimala nivåer för hälsa och immunförsvar anses vara 75–150 nmol/L. Om du är under 75 nmol/L har du sannolikt nytta av tillskott.",
      },
      {
        type: "h2",
        text: "Kostkällor och tillskott",
      },
      {
        type: "p",
        text: "Fet fisk (lax, makrill, sill, sardiner), äggula och berikad mjölk innehåller D-vitamin, men mängderna är för små för att täcka behovet under vinterhalvåret. Du skulle behöva äta lax varje dag för att kompensera för den uteblivna solexponeringen.",
      },
      {
        type: "p",
        text: "D3 (kolekalciferol) är den form kroppen föredrar och absorberar bättre än D2. Ta tillskottet till en fettinnehållande måltid. D-vitamin är fettlösligt och absorberas bäst i närvaro av fett. Välj kapslar eller oljedroppar framför tabletter för bästa biotillgänglighet.",
      },
      {
        type: "callout",
        text: "D-vitamin är ett av de få tillskott som de flesta i Sverige verkligen behöver under vinterhalvåret - oavsett hur hälsosamt de äter.",
      },
    ],
    faq: [
      {
        q: "Vilka är symtomen på D-vitaminbrist?",
        a: "Vanliga symtom på D-vitaminbrist inkluderar kronisk trötthet och låg energi, nedstämdhet och vinterdepression (SAD), muskelsvaghet, täta förkylningar och infektioner, samt ledvärk och muskelvärk. Symtomen är ofta diffusa och liknar allmän utmattning.",
      },
      {
        q: "Hur mycket D-vitamin behöver man per dag?",
        a: "Nordiska näringsdirektiv rekommenderar 10 µg (400 IE) per dag som basdos, men de flesta experter rekommenderar 25–50 µg (1 000–2 000 IE) per dag för att uppnå optimala nivåer i blodet, särskilt under vinterhalvåret i Sverige.",
      },
      {
        q: "Kan man få för mycket D-vitamin?",
        a: "D-vitamin är fettlösligt och kan ackumuleras i kroppen. Toxicitet inträffar vid mycket höga doser över lång tid - vanligtvis över 250 µg (10 000 IE) per dag under månader. Standarddoser på 25–100 µg per dag anses säkra för de flesta vuxna.",
      },
      {
        q: "Vilken D-vitaminform är bäst?",
        a: "D3 (kolekalciferol) är den form kroppen producerar i huden och är klart effektivare än D2 vid supplementering. Välj D3 i olja eller fettsyraburen form för bästa absorption - D-vitamin är fettlösligt och absorberas bättre med ett fettmål.",
      },
    ],
  },
  {
    slug: "jarnbrist-symptom",
    title: "Järnbrist - Mer än bara trötthet",
    metaTitle: "Järnbrist symtom: trötthet, håravfall och ferritin - vad du behöver veta",
    metaDescription:
      "Järnbrist är den vanligaste näringsbristsjukdomen i världen. Lär dig skillnaden mellan ferritin och hemoglobin, symtomen och varför du aldrig bör ta järntillskott utan test.",
    publishedAt: "2026-04-12",
    category: "nutrient",
    relatedSlugs: [
      "alltid-trott-vitaminbrist",
      "skora-naglar-haravfall-brist",
      "vegansk-kost-tillskott",
      "vilka-vitaminer-testa-blodprov",
    ],
    blocks: [
      {
        type: "p",
        text: "Järnbrist är den vanligaste näringsbristsjukdomen i världen och drabbar uppskattningsvis 2 miljarder människor. I Sverige är det vanligast bland kvinnor i fertil ålder, uthållighetsidrottare och de som äter lite eller inget kött. Det märkliga är att de flesta som lider av det inte vet om det.",
      },
      {
        type: "h2",
        text: "Symtom som sträcker sig bortom trötthet",
      },
      {
        type: "p",
        text: "Trötthet är det mest kända symtomet, men järnbrist påverkar kroppen på fler sätt. Hjärndimma och koncentrationssvårigheter är vanliga - järn är nödvändigt för dopaminproduktionen i hjärnan. Hjärtklappningar, andfåddhet vid lättare ansträngning, kalla händer och fötter, och restless legs-syndrom är andra klassiska tecken.",
      },
      {
        type: "ul",
        items: [
          "Kronisk trötthet och låg energi",
          "Hjärndimma och sämre koncentration",
          "Hjärtklappningar",
          "Sköra naglar och håravfall",
          "Kalla händer och fötter",
          "Restless legs - oroliga ben vid vila",
          "Blek hud och slemhinnor",
          "Sug efter is eller lera (pica)",
        ],
      },
      {
        type: "h2",
        text: "Ferritin vs. hemoglobin - en kritisk skillnad",
      },
      {
        type: "p",
        text: "Det finns en viktig skillnad mellan järnbrist och järnbristanemi. Järnbristanemi innebär att hemoglobinet är lågt - det är vad de flesta blodprover mäter. Men järnlagren (ferritin) börjar sina månader innan hemoglobinet sjunker. Du kan ha ett normalt hemoglobin och ändå ha järnbrist.",
      },
      {
        type: "p",
        text: "Ferritin är det känsligare måttet. Symtom på järnbrist uppstår ofta redan vid ferritinnivåer under 30 µg/L, och många aktiva personer mår bäst med ferritin över 70–100 µg/L. Det officiella referensintervallet (undre gräns 12–15 µg/L) är satt för att utesluta sjukdom - inte för att säkerställa att du mår bra.",
      },
      {
        type: "callout",
        text: "Be din läkare specifikt om ferritinvärde - det ingår inte alltid i ett standardblodprov men ger en mycket bättre bild av ditt järnstatus.",
      },
      {
        type: "h2",
        text: "Vem löper störst risk?",
      },
      {
        type: "ul",
        items: [
          "Kvinnor med kraftig menstruation",
          "Uthållighetsidrottare (löpning bryter ner röda blodkroppar)",
          "Veganer och vegetarianer",
          "Gravida och ammande",
          "De med celiaki, Crohns eller annan tarmsjukdom",
        ],
      },
      {
        type: "h2",
        text: "Absorption - varför inte all järn är likvärdig",
      },
      {
        type: "p",
        text: "Hemjärn från kött absorberas till 15–35 procent. Icke-hemjärn från växter absorberas bara till 2–20 procent, och mängden beror starkt på vad du äter samtidigt. C-vitamin ökar järnabsorptionen dramatiskt - ät spenat med paprika, linser med citron, eller ta ett C-vitamintillskott till järnrika måltider.",
      },
      {
        type: "p",
        text: "Däremot hämmar kaffe, te, kalcium och fytater (i spannmål och baljväxter) järnupptaget. Undvik att dricka kaffe eller te till järnrika måltider, och ta inte kalciumtillskott och järntillskott samtidigt.",
      },
      {
        type: "h2",
        text: "Varför du inte ska ta järn utan test",
      },
      {
        type: "p",
        text: "Järnöverladdning (hemokromatos) är en av de vanligaste genetiska sjukdomarna i Sverige - en av 200–300 personer bär på den. Vid hemokromatos lagrar kroppen för mycket järn, och extra tillskott kan orsaka allvarliga organskador. Dessutom kan järntillskott i höga doser orsaka oxidativ stress och gastrointestinala biverkningar.",
      },
      {
        type: "p",
        text: "Ta ett blodprov med ferritin och hemoglobin, och eventuellt TIBC (totalt järnbindningskapacitet), innan du börjar med järntillskott. Om järnet faktiskt är lågt - supplementera med rätt dos under läkarkontroll och testa om efter 3 månader.",
      },
    ],
    faq: [
      {
        q: "Vilka är symtomen på järnbrist?",
        a: "Vanliga symtom på järnbrist inkluderar kronisk trötthet och svaghet, andfåddhet vid ansträngning, hjärtklappning, blek hud, håravfall, sköra naglar, restless legs-syndrom och yrsel. Järnbrist kan ge trötthet redan utan att blodbrist (anemi) föreligger.",
      },
      {
        q: "Vad är ferritin och varför är det viktigt?",
        a: "Ferritin är kroppens järnlager-protein och det känsligaste måttet på järnstatus. Ett normalt hemoglobin utesluter inte järnbrist - ferritin kan vara lågt trots normalt hemoglobin. Be specifikt om ferritin, inte bara blodstatus.",
      },
      {
        q: "Kan man ta järntillskott utan recept?",
        a: "Ja, lågdosjärn (14–18 mg per dag) säljs receptfritt. Men du bör alltid testa ferritinvärdet innan du börjar, eftersom järnöverladdning är skadligt och hemokromatos (genetisk järnsjukdom) är relativt vanlig i Sverige.",
      },
      {
        q: "Hur lång tid tar det att åtgärda järnbrist?",
        a: "Det tar vanligtvis 3–6 månader av konsekvent järnsupplementering att återfylla kroppens järnlager. Symtomförbättring märks ofta inom 4–8 veckor, men ferritinvärdet behöver längre tid. Testa om efter 3 månader för att bekräfta förbättring.",
      },
    ],
  },
  {
    slug: "magnesiumbrist",
    title: "Magnesiumbrist - Kramper, sömn och stress",
    metaTitle: "Magnesiumbrist: Symtom, former och dosering",
    metaDescription:
      "Magnesium deltar i 300+ enzymatiska reaktioner. Lär dig varför brist är så vanligt, vilken form du ska välja och hur tillskott kan förbättra sömn, kramper och återhämtning.",
    publishedAt: "2026-04-12",
    category: "nutrient",
    relatedSlugs: [
      "muskelkramper-magnesiumbrist",
      "somnproblem-naringsbrist",
      "tillskott-traning",
      "vitaminbrist-tecken-test",
    ],
    blocks: [
      {
        type: "p",
        text: "Magnesium deltar i över 300 enzymatiska reaktioner i kroppen. Det behövs för att producera energi (ATP), syntetisera protein, reglera blodsockret och hålla hjärtat i takt. Trots detta är magnesiumbrist en av de vanligaste och mest underdiagnostiserade bristerna i västvärlden.",
      },
      {
        type: "h2",
        text: "Vad orsakar magnesiumbrist?",
      },
      {
        type: "p",
        text: "Modern kost är ett problem. Processad mat är utarmad på magnesium, och raffinerat mjöl har förlorat upp till 80 procent av sitt magnesium under bearbetningen. Bra kostkällor är nötter, frön, bladgrönsaker, bönor och fullkorn - men de flesta äter för lite av dessa.",
      },
      {
        type: "p",
        text: "Livsstilen förvärrar det hela. Stress ökar utsöndringen av kortisol, som i sin tur ökar magnesiumförlusterna via njurarna. Intensiv träning förlorar magnesium genom svett. Alkohol och vissa läkemedel (diuretika och protonpumpshämmare) minskar magnesiumnivåerna ytterligare.",
      },
      {
        type: "h2",
        text: "Symtom du kanske inte kopplar till magnesium",
      },
      {
        type: "ul",
        items: [
          "[Muskelkramper](/artikel/muskelkramper-magnesiumbrist) och -ryckningar, särskilt i vaderna och under natten",
          "Svårt att somna eller [orolig sömn](/artikel/somnproblem-naringsbrist)",
          "[Ångest och lättretlighet](/artikel/standig-oro-och-angest)",
          "Huvudvärk och migrän",
          "Hjärtklappningar",
          "Förstoppning",
          "Trötthet trots tillräcklig sömn",
        ],
      },
      {
        type: "p",
        text: "Det är vanligt att läkare inte kopplar dessa diffusa symtom till magnesiumbrist, delvis för att ett standardblodprov mäter magnesium i serum - men 99 procent av kroppens magnesium finns i cellerna, inte i blodet. Serumvärdet kan vara normalt även när cellulär brist föreligger.",
      },
      {
        type: "h2",
        text: "Vilken form av magnesium är bäst?",
      },
      {
        type: "p",
        text: "Det finns många former av magnesium på marknaden och de skiljer sig avsevärt i biotillgänglighet och effekt. Magnesiumglycinat är bäst absorberat och har en lugnande effekt som gör det utmärkt för sömn och ångest. Magnesiumcitrat absorberas väl och har en mild laxerande effekt - bra vid förstoppning men kan orsaka lös mage vid höga doser.",
      },
      {
        type: "p",
        text: "Magnesiumoxid är billigast men absorberas mycket dåligt (bara 4 procent) och ger oftast bara laxerande effekt. Undvik det som kosttillskott. Magnesiummalat är ett bra val för energi och muskeltrötthet. Se alltid till att kontrollera mängden elementärt magnesium på förpackningen - inte total vikt av magnesiumsaltet.",
      },
      {
        type: "h2",
        text: "Dosering och säkerhet",
      },
      {
        type: "p",
        text: "Det rekommenderade dagliga intaget för vuxna är 310–420 mg elementärt magnesium. Som tillskott är 200–400 mg per dag ett bra startläge. Magnesium har ett brett säkerhetsfönster - överskottet utsöndras via njurarna (men inte vid njursvikt, då gäller extra försiktighet). Du behöver inte testa dig innan du börjar.",
      },
      {
        type: "p",
        text: "Ta tillskottet på kvällen för bästa sömneffekt. Magnesiumglycinat 200–400 mg, intaget 30–60 minuter innan sänggåendet, är ett av de mest välstuderade naturliga sömnmedlen. De flesta märker skillnad inom 2–4 veckor.",
      },
      {
        type: "callout",
        text: "Magnesium är ett av de säkrare tillskotten att börja med utan blodprov - men välj magnesiumglycinat eller -citrat, inte magnesiumoxid.",
      },
    ],
  },
  {
    slug: "b12-brist",
    title: "B12-brist - Vad veganer, vegetarianer och personer över 50 behöver veta",
    metaTitle: "B12-brist: Symtom, risk och tillskott",
    metaDescription:
      "B12 finns bara i animaliska produkter. Lär dig varför veganer, vegetarianer och äldre löper hög risk för B12-brist och vilken form av tillskott som fungerar bäst.",
    publishedAt: "2026-04-12",
    category: "nutrient",
    relatedSlugs: [
      "vegansk-kost-tillskott",
      "alltid-trott-vitaminbrist",
      "somnproblem-naringsbrist",
      "vilka-vitaminer-testa-blodprov",
    ],
    blocks: [
      {
        type: "p",
        text: "Vitamin B12 är unikt bland vitaminerna: det finns praktiskt taget bara i animaliska produkter. Det innebär att veganer och vegetarianer löper hög risk för brist - men de är inte ensamma. Kroppens förmåga att absorbera B12 försämras med åldern, vilket gör personer över 50 till en annan högriskgrupp.",
      },
      {
        type: "h2",
        text: "Var finns B12?",
      },
      {
        type: "p",
        text: "Kött, fisk, skaldjur, mjölkprodukter och ägg är de naturliga källorna. Växter innehåller inte bioaktivt B12. Näringsjäst och vissa alger marknadsförs ibland som B12-källor, men mängderna är ofta otillräckliga och varierar kraftigt. Att förlita sig på dessa utan regelbunden testning är riskabelt.",
      },
      {
        type: "h2",
        text: "Vem riskerar B12-brist?",
      },
      {
        type: "ul",
        items: [
          "Veganer - upp till 92% utvecklar brist utan tillskott",
          "Vegetarianer med lågt intag av mejeriprodukter och ägg",
          "Personer över 50 - minskad produktion av intrinsic factor i magsäcken",
          "De med celiaki, Crohns eller atrofisk gastrit",
          "De som tar metformin (diabetes) eller långvarig protonpumpshämmare",
        ],
      },
      {
        type: "h2",
        text: "Symtom - från trötthet till neurologisk skada",
      },
      {
        type: "p",
        text: "Tidiga symtom är trötthet, svaghet och blek hud. Det besvärliga med B12-brist är att den kan ta år att utveckla eftersom kroppen lagrar B12 i levern. När symtomen väl uppstår kan brist redan pågått länge.",
      },
      {
        type: "p",
        text: "Vid mer uttalad brist tillkommer neurologiska symtom: stickningar och domningar i händer och fötter, balansproblem, minnesproblem och depression. I allvarliga fall kan nervskadorna bli bestående om brist inte åtgärdas i tid. Det är en av de anledningarna till att veganer bör testa sig regelbundet och ta tillskott från dag ett.",
      },
      {
        type: "h2",
        text: "Testning",
      },
      {
        type: "p",
        text: "Standardtestet är S-B12 i serum. Referensvärdet i Sverige sätts ofta vid 148 pmol/L - men symtom förekommer vanligt under 300 pmol/L. Be om ett värde och tolka det med hänsyn till dina symtom, inte bara laboratorienormen.",
      },
      {
        type: "p",
        text: "MMA (metylmalonsyra) är ett mer känsligt mått på funktionell B12-brist och stiger tidigt, innan serum-B12 sjunkit under normalintervallet. Om du misstänker brist trots normalt B12-värde - be om MMA.",
      },
      {
        type: "h2",
        text: "Tillskott och form",
      },
      {
        type: "p",
        text: "Cyanokobalamin är den vanligaste och billigaste formen - stabil och effektiv för de flesta. Metylkobalamin är den aktiva formen och föredras av de med MTHFR-genvarianter som har svårt att omvandla cyanokobalamin. Sublinguala (under tungan) tabletter absorberas bättre hos äldre och de med absorptionsproblem, eftersom de inte kräver intrinsic factor.",
      },
      {
        type: "p",
        text: "Dos för veganer: 250–1 000 µg per dag eller 2 500 µg en gång i veckan. Den höga dosen kompenserar för att bara en liten procent absorberas vid höga intag. Vid konstaterad brist med neurologiska symtom kan injektioner (hydroxykobalamin) behövas.",
      },
      {
        type: "callout",
        text: "Veganer bör ta B12-tillskott från dag ett - brist kan ta år att utveckla men kan orsaka bestående nervskador om den inte åtgärdas.",
      },
    ],
  },
  {
    slug: "omega-3-tillskott",
    title: "Omega-3 - Behöver du tillskott om du inte äter fisk?",
    metaTitle: "Omega-3 brist: Symtom, testtips och vilket tillskott du behöver",
    metaDescription:
      "Det finns stor skillnad mellan omega-3 från växter och från fisk. Lär dig varför ALA-omvandlingen räcker sällan, och när ett tillskott faktiskt gör nytta.",
    publishedAt: "2026-04-12",
    category: "nutrient",
    relatedSlugs: [
      "vegansk-kost-tillskott",
      "tillskott-traning",
      "vitaminbrist-tecken-test",
    ],
    blocks: [
      {
        type: "p",
        text: "Omega-3 är inte en enda substans utan en familj av fettsyror med delvis olika funktioner. Det är viktigt att förstå skillnaden - annars är det lätt att tro att lin- och chiafrön ger samma skydd som fet fisk, vilket de inte gör.",
      },
      {
        type: "h2",
        text: "ALA, EPA och DHA - tre olika omega-3",
      },
      {
        type: "p",
        text: "ALA (alfalinolensyra) finns i växter: linfrön, chiafrön, valnötter och hampfrön. Kroppen kan omvandla ALA till EPA och DHA, men konverteringshastigheten är bara 5–10 procent för EPA och ännu lägre för DHA. Det innebär att du behöver extremt stora mängder ALA för att nå tillräckliga EPA- och DHA-nivåer.",
      },
      {
        type: "p",
        text: "EPA (eikosapentaensyra) och DHA (dokosahexaensyra) finns framför allt i fet fisk och alger. EPA är den primärt antiinflammatoriska fettsyran. DHA är kritisk för hjärnan och ögonen - 60 procent av hjärnans torra massa består av fett, varav DHA är en stor del. Det är dessa två du behöver tillräckligt av.",
      },
      {
        type: "h2",
        text: "Vad omega-3 faktiskt gör",
      },
      {
        type: "ul",
        items: [
          "Minskar systemisk inflammation (EPA)",
          "Stöder hjärnfunktion och kognition (DHA)",
          "Sänker triglycerider och stöder hjärthälsa",
          "Stöder ögonhälsan (DHA i näthinnan)",
          "Förbättrar återhämtning vid träning",
          "Stöder fostrets hjärnutveckling under graviditet",
        ],
      },
      {
        type: "h2",
        text: "Vem behöver tillskott?",
      },
      {
        type: "p",
        text: "Om du äter fet fisk (lax, makrill, sill, sardiner) 2–3 gånger per vecka får du sannolikt tillräckliga mängder EPA och DHA. Om du äter fisk mer sällan, är vegan eller vegetarian, eller har inflammatoriska tillstånd - är tillskott värt att överväga.",
      },
      {
        type: "h2",
        text: "Välja rätt tillskott",
      },
      {
        type: "p",
        text: "Fiskolja är det vanligaste alternativet. Kontrollera alltid mängden EPA+DHA per kapsel, inte totalt fiskoljinnehåll. En kapsel kan innehålla 1 000 mg fiskolja men bara 300 mg EPA+DHA - det är den relevanta siffran. Sikta på minst 500 mg EPA+DHA per dag som underhållsdos, 1–3 g per dag om du tränar intensivt eller har inflammatoriska problem.",
      },
      {
        type: "p",
        text: "Algolja är det bästa veganska alternativet - alger är ursprungskällan som fisken äter, så du hoppar över ett led i kedjan. Algolja ger direkt DHA och EPA utan fisken och utan risk för miljögifter. Priset är högre men kvaliteten är utmärkt.",
      },
      {
        type: "callout",
        text: "Algolja ger samma DHA och EPA som fiskolja - utan fisken. Det är det bästa alternativet för veganer och de som inte gillar fisk.",
      },
    ],
  },
  {
    slug: "zinkbrist",
    title: "Zinkbrist - Ett dolt problem vid växtbaserad kost och intensiv träning",
    metaTitle: "Zinkbrist: Symtom, test och tillskott",
    metaDescription:
      "Zinkbrist är vanligare än de flesta tror, särskilt vid växtbaserad kost och intensiv träning. Lär dig symtomen och hur du åtgärdar det.",
    publishedAt: "2026-04-12",
    category: "nutrient",
    relatedSlugs: [
      "vegansk-kost-tillskott",
      "tillskott-traning",
      "skora-naglar-haravfall-brist",
      "vitaminbrist-tecken-test",
    ],
    blocks: [
      {
        type: "p",
        text: "Zink är involverat i hundratals enzymatiska processer, men det pratas sällan om det. Det är inte lika känt som järn eller D-vitamin - trots att brist är vanlig och konsekvenserna påtagliga, särskilt för immunförsvaret, sårläkning och reproduktiv hälsa.",
      },
      {
        type: "h2",
        text: "Vad zink gör i kroppen",
      },
      {
        type: "ul",
        items: [
          "Immunförsvar - zink är kritiskt för T-cellernas funktion",
          "Sårläkning och hudregenerering",
          "Testosteronproduktion och reproduktiv hälsa",
          "Smak och lukt (zinkreceptorer i sinnescellerna)",
          "Proteinsyntes och celldelning",
          "Antioxidantskydd (superoxiddismutas)",
        ],
      },
      {
        type: "h2",
        text: "Fytater - den dolda bromsmekanismen",
      },
      {
        type: "p",
        text: "Växter innehåller fytinsyra (fytater) i baljväxter, fullkorn och frön. Fytater binder zink i tarmen och förhindrar absorptionen. Det är anledningen till att vegetarianer och veganer behöver upp till 50 procent mer zink från kosten än köttätare - bioavailabiliteten är helt enkelt lägre från växtbaserade källor.",
      },
      {
        type: "p",
        text: "Blötläggning, grodning och fermentering av spannmål och baljväxter minskar fytatinnehållet och förbättrar zinktillgängligheten avsevärt. Det är en gammal teknik som återfår relevans. Men det räcker sällan - de flesta med växtbaserad kost behöver antingen vara mycket noggranna med sina zinkrika livsmedel eller ta tillskott.",
      },
      {
        type: "h2",
        text: "Zink och träning",
      },
      {
        type: "p",
        text: "Zink förloras i svett, och intensiv träning kan leda till betydande förluster. Zink är också nödvändigt för testosteronsyntes - studier visar att zinkbrist sänker testosteronnivåerna hos män, och att supplementering hos brist-individer ökar dem. Kombinationen av växtbaserad kost och hård träning ökar risken för zinkbrist avsevärt.",
      },
      {
        type: "h2",
        text: "Symtom på zinkbrist",
      },
      {
        type: "ul",
        items: [
          "Återkommande förkylningar och infektioner",
          "Långsam sårläkning",
          "Försämrad smak eller lukt",
          "Akne och hudproblem",
          "Håravfall",
          "Lågt testosteron hos män",
        ],
      },
      {
        type: "h2",
        text: "Testning och dosering",
      },
      {
        type: "p",
        text: "S-Zink (serum-zink) är standardtestet, men det är inte perfekt - precis som magnesium lagras merparten av zinket intracellulärt. Det ger ändå en indikation. RDA är 8 mg för kvinnor och 11 mg för män. Som tillskott är 15–30 mg elementärt zink per dag ett vanligt terapeutiskt intervall. Max säker dos på lång sikt är 40 mg/dag.",
      },
      {
        type: "p",
        text: "Välj zinkglukonat, zinkcitrat eller zinkbisglicinat - dessa absorberas bättre än zinkoxid. Ta tillskottet med mat för att undvika illamående, och ta det inte tillsammans med järntillskott eftersom de konkurrerar om samma transportproteiner.",
      },
      {
        type: "callout",
        text: "Om du äter växtbaserat och tränar intensivt - ett enkelt S-Zink-prov ger svar på om brist föreligger.",
      },
    ],
  },

  // ── SYMPTOM CLUSTER ───────────────────────────────────────────────────────
  {
    slug: "alltid-trott-vitaminbrist",
    title: "Alltid trött? 5 näringsbristorsaker du bör utesluta",
    metaTitle: "Alltid trött? 5 vitaminbrister som kan vara orsaken",
    metaDescription:
      "Kronisk trötthet beror ofta på järnbrist, B12-brist, D-vitaminbrist, sköldkörtelproblematik eller magnesiumbrist. Lär dig hur du utesluter var och en.",
    publishedAt: "2026-04-12",
    category: "symptom",
    relatedSlugs: [
      "jarnbrist-symptom",
      "b12-brist",
      "d-vitaminbrist",
      "magnesiumbrist",
      "vilka-vitaminer-testa-blodprov",
    ],
    blocks: [
      {
        type: "p",
        text: "Trötthet är det vanligaste hälsoklagomålet i Sverige. De flesta attribuerar det till stress, för lite sömn eller för mycket skärmtid. Men en ofta förbisedd orsak är att kroppen saknar de råvaror den behöver för att producera energi - och det kan ett blodprov avslöja.",
      },
      {
        type: "h2",
        text: "1. Järnbrist - den vanligaste orsaken",
      },
      {
        type: "p",
        text: "Järn är nödvändigt för att hemoglobin ska kunna transportera syre till kroppens celler. Utan tillräckligt järn fungerar cellernas energiproduktion sämre - du orkar helt enkelt mindre. Det subtila är att [järnbrist](/artikel/jarnbrist-symptom) kan ge trötthet redan innan hemoglobinet sjunkit till anemi-nivåer. Ferritinvärdet (järnlagren) är det känsligare måttet.",
      },
      {
        type: "p",
        text: "Riskgrupper: kvinnor med kraftig menstruation, vegetarianer och veganer, uthållighetsidrottare. Om du är kvinna och konstant trött - be specifikt om ett ferritinprov. Normalt hemoglobin utesluter inte järnbrist.",
      },
      {
        type: "h2",
        text: "2. B12-brist - energi på cellnivå",
      },
      {
        type: "p",
        text: "B12 behövs för att bilda röda blodkroppar och för att nervsystemet ska fungera korrekt. Brist leder till megaloblastisk anemi - röda blodkroppar som är för stora och fungerar dåligt. Symtomen inkluderar trötthet, svaghet och i allvarligare fall stickningar och kognitiva problem.",
      },
      {
        type: "p",
        text: "Veganer riskerar [B12-brist](/artikel/b12-brist) om de inte supplementerar. Äldre personer (50+) producerar ofta för lite intrinsic factor i magsäcken, vilket krävs för att B12 ska absorberas. Om du tillhör någon av dessa grupper och är trött - testa S-B12.",
      },
      {
        type: "h2",
        text: "3. D-vitaminbrist - mer än ett solbristproblem",
      },
      {
        type: "p",
        text: "[D-vitaminbrist](/artikel/d-vitaminbrist) orsakar mer än benskörhet och förkylningar. Muskelsvaghet och kronisk trötthet är välkända symtom, och forskning kopplar låga D-vitaminnivåer till depression och SAD (säsongsberoende depression). I Sverige är vintermånaderna praktiskt taget garanterade att ge otillräckliga D-vitaminnivåer om du inte supplementerar.",
      },
      {
        type: "h2",
        text: "4. Sköldkörteln - ett förbisett organ",
      },
      {
        type: "p",
        text: "Hypotyreos (underaktiv sköldkörtel) ger trötthet, viktuppgång, köldkänslighet, förstoppning och håravfall. Det är vanligare hos kvinnor än män och ökar med åldern. TSH-testet mäter sköldkörteln - be din läkare inkludera det om du är kroniskt trött utan förklaring.",
      },
      {
        type: "p",
        text: "Viktigt: hypotyreos löses inte med tillskott. Det kräver medicinsk behandling med tyroxin. Men det är ett viktigt tillstånd att utesluta innan du börjar experimentera med vitaminer och mineraler.",
      },
      {
        type: "h2",
        text: "5. Magnesiumbrist - mitokondriernas bränsle",
      },
      {
        type: "p",
        text: "[Magnesium](/artikel/magnesiumbrist) krävs för produktionen av ATP - cellernas energivaluta. Utan tillräckligt magnesium fungerar mitokondrierna sämre, och du producerar bokstavligen mindre energi. Dessutom påverkar magnesiumbrist [sömnkvaliteten](/artikel/somnproblem-naringsbrist), vilket förvärrar tröttheten. Magnesium är ett av de säkrare tillskotten att prova utan test, och 200–400 mg magnesiumglycinat på kvällen är en rimlig start.",
      },
      {
        type: "callout",
        text: "Om du är kroniskt trött utan klar orsak - be om ett blodprov med ferritin, S-B12, 25-OH-D3 och TSH. Det är de fyra viktigaste markörerna att utesluta.",
      },
    ],
  },
  {
    slug: "somnproblem-naringsbrist",
    title: "Sömnproblem och näringsbrist - vad forskningen säger",
    metaTitle: "Svårt att sova? Näringsbrist som orsak - magnesium, D-vitamin och järn",
    metaDescription:
      "Sömnproblem beror ibland på näringsbrist. Magnesiumbrist är vanligast - men D-vitamin, järn och B12 spelar också roll. Lär dig tecknen och vad som faktiskt hjälper.",
    publishedAt: "2026-04-12",
    category: "symptom",
    relatedSlugs: [
      "magnesiumbrist",
      "d-vitaminbrist",
      "jarnbrist-symptom",
      "alltid-trott-vitaminbrist",
    ],
    blocks: [
      {
        type: "p",
        text: "Sömnproblem är multifaktoriella - stress, skärmtid, oregelbundna sovtider och koffein är välkända boven. Men näringsstatus är en faktor som ofta förbises. Magnesium, D-vitamin, B12 och järn påverkar alla sömnen på dokumenterade sätt.",
      },
      {
        type: "h2",
        text: "Magnesium och sömn - den starkaste kopplingen",
      },
      {
        type: "p",
        text: "Magnesium aktiverar GABA-receptorer i hjärnan - samma receptor som lugnar nervsystemet och signalerar att det är dags att sova. Det verkar också muskelrelaxerande, vilket minskar spänningar och underlättar insomnandet. Flera randomiserade studier har visat att magnesiumtillskott förbättrar sömnkvaliteten, särskilt hos äldre och stressade individer.",
      },
      {
        type: "p",
        text: "Magnesiumglycinat är den form som fungerar bäst för sömn - glycindelen har i sig en lugnande effekt. Dosera 200–400 mg elementärt magnesium, intaget 30–60 minuter innan sänggåendet. De flesta märker förbättring inom 1–3 veckor.",
      },
      {
        type: "h2",
        text: "D-vitamin och melatonin",
      },
      {
        type: "p",
        text: "D-vitaminreceptorer finns i tallkottkörteln, som producerar melatonin. Forskning tyder på att låga D-vitaminnivåer stör melatoninrytmen och förskjuter sömnfasen. Kopplingen är inte lika stark som för magnesium, men det finns epidemiologiska samband mellan D-vitaminbrist och sömnstörningar.",
      },
      {
        type: "p",
        text: "En praktisk anmärkning: ta D-vitamintillskott på morgonen, inte på kvällen. Det finns teorier om att D-vitamin sent på dagen kan störa melatoninfrisättningen hos känsliga individer, även om forskningen är osäker. Morgondosering är en enkel försiktighetsåtgärd.",
      },
      {
        type: "h2",
        text: "B12 och sömnrytmen",
      },
      {
        type: "p",
        text: "B12 deltar i syntesen av melatonin. B12-brist är kopplad till störningar i dygnsrytmen och kan ge svårigheter att upprätthålla ett regelbundet sömnmönster. Vissa studier pekar på att B12 i höga doser kan hjälpa till att normalisera dygnsrytmen, men forskningen är begränsad. Om du kombinerar B12-brist med sömnproblem är det dock ett tillräckligt skäl att testa och supplementera om brist föreligger.",
      },
      {
        type: "h2",
        text: "Järnbrist och restless legs",
      },
      {
        type: "p",
        text: "Restless legs-syndrom (RLS) - den obehagliga känslan av att behöva röra på benen vid vila - har en stark koppling till låga ferritinnivåer. Studier visar att RLS förbättras avsevärt när ferritin korrigeras till över 50–75 µg/L. Detta är inte ett problem som löses med magnesium - det kräver järnstatus-testning och eventuell järnsupplementering.",
      },
      {
        type: "h2",
        text: "Vad kan du börja med?",
      },
      {
        type: "p",
        text: "Börja med sömnhygienen: regelbundna sovtider, ingen skärm 60 minuter före sänggåendet, svalt och mörkt sovrum. Lägg sedan till magnesiumglycinat 200–400 mg på kvällen - det är ett av de säkrare och mer välstuderade naturliga sömnstöden. Om sömnproblemen kvarstår, eller om du har rastlösa ben - ta ett blodprov med ferritin, D-vitamin och B12.",
      },
      {
        type: "callout",
        text: "Magnesiumglycinat är ett av de mest välstuderade naturliga sömnstöden - och ett av de säkrare tillskotten att prova utan blodprov.",
      },
    ],
  },
  {
    slug: "skora-naglar-haravfall-brist",
    title: "Sköra naglar och håravfall - brist eller något annat?",
    metaTitle: "Sköra naglar och håravfall: Järn, zink eller sköldkörtel?",
    metaDescription:
      "Håravfall och sköra naglar kan bero på järnbrist, zinkbrist eller sköldkörtelrubbning. Lär dig hur du hittar rätt orsak - och varför biotin sällan hjälper.",
    publishedAt: "2026-04-12",
    category: "symptom",
    relatedSlugs: [
      "jarnbrist-symptom",
      "zinkbrist",
      "alltid-trott-vitaminbrist",
      "vilka-vitaminer-testa-blodprov",
    ],
    blocks: [
      {
        type: "p",
        text: "Håravfall och sköra naglar är symtom som drabbar många och kan ha en rad orsaker. Näringsbrist är en av de mer åtgärdbara - men det gäller att identifiera rätt brist. Att ta fel tillskott ger ingenting, och att ignorera en korrigerbar orsak innebär månader av onödigt lidande.",
      },
      {
        type: "h2",
        text: "Järn - den vanligaste och mest förbisedda orsaken",
      },
      {
        type: "p",
        text: "Lågt ferritin (under 30–50 µg/L) är en av de vanligaste orsakerna till telogen effluvium - diffust håravfall där hår faller ut i ökad takt från hela hårbotten. Det är inte en dramatisk fläckvis förlust utan ett gradvis tunnare hår som märks i duschen och i borstarna.",
      },
      {
        type: "p",
        text: "Det frustrerande är att hemoglobinet ofta är normalt, så en standard blodräkning ger inte svaret. Be specifikt om ferritin. Om nivån är under 50–70 µg/L och du har håravfall - järnstatus är troligen bidragande. Håret börjar växa tillbaka när ferritin korregerats, men processen tar 3–6 månader.",
      },
      {
        type: "h2",
        text: "Zink och keratinproduktion",
      },
      {
        type: "p",
        text: "Zink krävs för syntesen av keratin - det protein som bygger upp hår och naglar. Brist ger sköra naglar med vita fläckar, långsam nagelväxt och håravfall. Zinkbrist är vanligast vid växtbaserad kost (fytater hämmar absorptionen) och vid intensiv träning.",
      },
      {
        type: "h2",
        text: "Biotin - marknadsföring vs. verklighet",
      },
      {
        type: "p",
        text: "Biotin (vitamin B7) marknadsförs flitigt mot håravfall och sköra naglar. Men bevisen är svaga: biotin hjälper bara om du faktiskt har biotinbrist, vilket är ovanligt hos friska vuxna. De flesta med håravfall har normala biotinnivåer och märker ingen skillnad av tillskott - oavsett vad marknadsföringen påstår.",
      },
      {
        type: "p",
        text: "En praktisk varning: höga doser biotin (mer än 2 500 µg) kan störa en rad blodprover, däribland sköldkörtelvärden och hjärtmarkörer. Om du tar biotintillskott - informera alltid din läkare inför blodprov.",
      },
      {
        type: "h2",
        text: "Sköldkörteln och håravfall",
      },
      {
        type: "p",
        text: "Både underaktiv (hypotyreos) och överaktiv (hypertyreos) sköldkörtel kan orsaka håravfall. Det är ett av de symtom som ibland uppstår redan vid gränsfall av sköldkörtelrubbning, innan andra klassiska symtom visar sig. Om du har håravfall kombinerat med trötthet, viktkänslighet eller temperaturkänslighet - be om TSH.",
      },
      {
        type: "h2",
        text: "Vad bör du göra?",
      },
      {
        type: "ul",
        items: [
          "Testa ferritin, TSH och S-Zink - dessa är de tre viktigaste markörerna",
          "Var tålmodig - hårcykler tar 3–6 månader, förbättringar syns inte omedelbart",
          "Skippa biotintillskott om du inte har konstaterad biotinbrist",
          "Prioritera järnrika livsmedel med C-vitamin för bättre absorption",
        ],
      },
      {
        type: "callout",
        text: "Håravfall och sköra naglar som symptom på näringsbrist är åtgärdbara - men rätt diagnos är avgörande. Testa innan du supplementerar.",
      },
    ],
  },
  {
    slug: "muskelkramper-magnesiumbrist",
    title: "Muskelkramper - Magnesiumbrist eller något mer?",
    metaTitle: "Kramper i benen på natten - orsaker och vad som faktiskt hjälper",
    metaDescription:
      "Nattliga benkramper beror ofta på magnesiumbrist, men D-vitaminbrist och vätskebalans spelar också roll. Lär dig skillnaden och vilket tillskott som hjälper.",
    publishedAt: "2026-04-12",
    category: "symptom",
    relatedSlugs: [
      "magnesiumbrist",
      "d-vitaminbrist",
      "tillskott-traning",
      "vilka-vitaminer-testa-blodprov",
    ],
    blocks: [
      {
        type: "p",
        text: "Muskelkramper är vanliga och kan vara allt från milt irriterande till plågsamt störande. Nattliga vadkramper är ett klassiskt problem som väcker folk ur sömnen. För de flesta finns en enkel biokemisk förklaring - och en lika enkel lösning.",
      },
      {
        type: "h2",
        text: "Varför uppstår muskelkramper?",
      },
      {
        type: "p",
        text: "Muskler kontraherar när kalcium flödar in i muskelcellen och relaxerar när kalcium pumpas ut - en process som kräver magnesium. Vid magnesiumbrist fungerar kalciumpumparna sämre, och muskeln kan fastna i ett kontraherat tillstånd. Resultatet är en kramp.",
      },
      {
        type: "p",
        text: "Elektrolytbalansen spelar också roll. Natrium, kalium och kalcium samverkar med magnesium i muskelcellens elektrokemi. Dehydrering koncentrerar elektrolyterna och destabiliserar systemet. Många träningskramper beror på en kombination av svettförlust av magnesium och natrium samt otillräcklig vätsketillförsel.",
      },
      {
        type: "h2",
        text: "Magnesium och kramper - vad forskningen visar",
      },
      {
        type: "p",
        text: "Studier visar att magnesiumtillskott minskar frekvensen av kramper, särskilt nattliga benkramper och graviditetskramper. Effekten är starkast hos individer med faktisk magnesiumbrist, men förbättring ses hos många. Det tar typiskt 2–4 veckor av supplementering innan effekten märks.",
      },
      {
        type: "p",
        text: "Magnesiumglycinat och magnesiumcitrat är de former som fungerar bäst - de absorberas väl och kan intas på kvällen för kombinerad sömneffekt och krampreduktion. 300–400 mg elementärt magnesium är en vanlig dos.",
      },
      {
        type: "h2",
        text: "D-vitamin och muskelfunktion",
      },
      {
        type: "p",
        text: "D-vitaminreceptorer finns i muskelvävnad, och brist leder till muskelsvaghet och ökad risk för kramper. D-vitamin- och magnesiumbrist uppträder ofta tillsammans - de påverkar samma system och utarmas av liknande livsstilsfaktorer. Om kramper inte förbättras med magnesium är D-vitamin nästa sak att kontrollera.",
      },
      {
        type: "h2",
        text: "När kramper kan indikera något mer allvarligt",
      },
      {
        type: "p",
        text: "De flesta kramper är godartade och näringsbetingade. Men om kramperna är allvarliga, frekventa, tillkommer vid promenad (cirkulationsproblem) eller kombineras med andra neurologiska symtom - bör du kontakta en läkare. Kalciumnivåer, sköldkörtelfunktion och perifera cirkulationsproblem bör uteslutas.",
      },
      {
        type: "callout",
        text: "Börja med magnesiumglycinat 300 mg på kvällen - de flesta märker skillnad inom 2–4 veckor om magnesiumbrist är orsaken.",
      },
    ],
  },

  {
    slug: "varfor-blir-jag-sjuk-sa-ofta",
    title: "Varför blir jag sjuk hela tiden? - Vanliga orsaker du kan åtgärda",
    metaTitle: "Varför blir jag sjuk hela tiden? Orsaker och vad du kan göra",
    metaDescription:
      "Återkommande förkylningar och infektioner beror ofta på ett försvagat immunförsvar. D-vitaminbrist och zinkbrist är två av de vanligaste och mest åtgärdbara orsakerna.",
    publishedAt: "2026-04-13",
    category: "symptom",
    relatedSlugs: [
      "d-vitaminbrist",
      "zinkbrist",
      "vitaminbrist-tecken-test",
      "vilka-vitaminer-testa-blodprov",
    ],
    blocks: [
      {
        type: "p",
        text: "Att drabbas av 2–3 förkylningar per år räknas som normalt. Blir du sjuk oftare än så - eller tar dina infektioner längre tid att läka - finns det ofta en identifierbar orsak. Immunsystemet är beroende av specifika näringsstoffer för att fungera, och brist på dessa är vanligare än de flesta tror.",
      },
      {
        type: "h2",
        text: "D-vitaminbrist - immunförsvarets viktigaste partner",
      },
      {
        type: "p",
        text: "D-vitamin är inte bara ett benvitamin. Det reglerar aktiveringen av T-celler och makrofager - immunsystemets frontlinjesoldater. Studier visar att D-vitaminbrist är kopplad till ökad frekvens av luftvägsinfektioner, och att tillskott minskar risken, särskilt hos dem med låga utgångsnivåer.",
      },
      {
        type: "p",
        text: "I Sverige är D-vitaminbrist praktiskt taget oundviklig under vinterhalvåret. Om du blir sjuk oftast under höst och vinter är det inte bara slump - det sammanfaller med att D-vitaminnivåerna är som lägst.",
      },
      {
        type: "h2",
        text: "Zinkbrist - ett underskattat immunproblem",
      },
      {
        type: "p",
        text: "Zink är nödvändigt för att thymus ska kunna producera T-celler, för att neutrofiler ska fungera och för att sårläkning ska ske. Zinkbrist ger ett mätbart sämre immunsvar - fler infektioner, längre sjukdomsperioder och sämre sårläkning. Typiska tecken inkluderar förutom täta sjukdomsperioder också vita fläckar på naglarna och nedsatt lukt- och smaksinne.",
      },
      {
        type: "p",
        text: "Riskgrupper: vegetarianer och veganer (fytater i växtmat hämmar zinkabsorptionen), intensivt tränande och äldre. Zinkintaget i den svenska befolkningen är generellt i nederkant, och tillskott på 15–25 mg per dag är säkert för de flesta.",
      },
      {
        type: "h2",
        text: "Andra faktorer som försvagar immunförsvaret",
      },
      {
        type: "ul",
        items: [
          "Sömnbrist - under 6 timmars sömn per natt halverar nästan risken att motstå ett virusexponering",
          "Kronisk stress - kortisol dämpar immunaktiviteten på lång sikt",
          "Lågt C-vitaminintag - vanligt vid ensidig kost, ökar infektionskänsligheten",
          "Järnbrist - påverkar produktionen av vita blodkroppar",
        ],
      },
      {
        type: "h2",
        text: "Vad du kan göra direkt",
      },
      {
        type: "p",
        text: "D-vitamin 25–50 µg per dag är ett säkert sätt att täcka en av de vanligaste bristerna utan att behöva testa sig. Om du utöver täta infektioner har sköra naglar, nedsatt smak eller lång sårläkningstid - är det värt att också testa ditt zink. Be din läkare om S-Zink och 25-OH-D3.",
      },
      {
        type: "callout",
        text: "Undrar du om näringsbrist kan förklara varför du blir sjuk så ofta? Quizzen väger ihop din kost, dina symtom och livsstil och pekar ut vad som är mest troligt för dig.",
      },
    ],
  },
  {
    slug: "hjarndimma-koncentrationssvaarigheter",
    title: "Hjärndimma och koncentrationssvårigheter - kan det vara näringsbrist?",
    metaTitle: "Hjärndimma och koncentrationssvårigheter - näringsbrist som orsak",
    metaDescription:
      "Svårt att tänka klart, minnesproblem och koncentrationssvårigheter kan bero på järnbrist, B12-brist eller omega-3-brist. Lär dig känna igen tecknen och vad du kan göra.",
    publishedAt: "2026-04-13",
    category: "symptom",
    relatedSlugs: [
      "b12-brist",
      "jarnbrist-symptom",
      "omega-3-tillskott",
      "alltid-trott-vitaminbrist",
      "vilka-vitaminer-testa-blodprov",
    ],
    blocks: [
      {
        type: "p",
        text: "Känslan av att inte kunna tänka klart - att ord försvinner, fokus skiftar ofrivilligt och minnesluckor uppstår oftare än de borde - kallas ibland hjärndimma. Det är inte en diagnos utan ett symtomkluster, och orsakerna är många. Näringsbrist är en av de mer åtgärdbara, och ofta förbisedd.",
      },
      {
        type: "h2",
        text: "B12 - hjärnans mest kritiska vitamin",
      },
      {
        type: "p",
        text: "B12 behövs för myelinbildning - det isoleringslagret som omger nervfibrerna och gör att signaler färdas snabbt och effektivt. Vid B12-brist bryts myelinet ner, och nervöverföringen försämras. Tidiga kognitiva symtom inkluderar minnesproblem, koncentrationssvårigheter och mental trötthet - långt innan de klassiska neurologiska symtomen (stickningar, balanssvårigheter) uppstår.",
      },
      {
        type: "p",
        text: "Riskgrupper: veganer, vegetarianer och personer över 50. Om du äter växtbaserat och kämpar med hjärndimma - testa S-B12 och MMA (metylmalonsyra) för en känsligare bild av den funktionella B12-statusen.",
      },
      {
        type: "h2",
        text: "Järnbrist och syrebrist i hjärnan",
      },
      {
        type: "p",
        text: "Hjärnan förbrukar en femtedel av kroppens totala syreförsörjning trots att den väger ungefär 1,4 kg. Järn är nödvändigt för att hemoglobin ska kunna transportera syre - och vid järnbrist drabbas hjärnan tidigt. Koncentrationsförmågan minskar, reaktionstiden ökar och mental uthållighet sjunker. Det subtila är att detta kan ske utan att hemoglobinet sjunkit till aneminivåer. Ferritin under 30 µg/L är associerat med kognitiva symtom, även om blodstatus ser normal ut.",
      },
      {
        type: "h2",
        text: "Omega-3 och hjärnans struktur",
      },
      {
        type: "p",
        text: "DHA, en av omega-3-fettsyrorna, är en strukturell komponent i hjärnans cellmembran. Hjärnan är till 60 procent fett, och DHA utgör en stor del av det. Lågintag av omega-3 är kopplat till sämre kognitiv funktion, nedstämdhet och ökad risk för depression. Det är svårt att testa omega-3-status via standardblodprov, men om du sällan eller aldrig äter fet fisk är sannolikheten hög att intaget är otillräckligt.",
      },
      {
        type: "h2",
        text: "Andra orsaker att utesluta",
      },
      {
        type: "ul",
        items: [
          "D-vitaminbrist - receptorer för D-vitamin finns i hippocampus och påverkar minne och humör",
          "Sömnbrist - hjärnan rensar metabola avfallsprodukter under sömn, brist ger direkt kognitiv påverkan",
          "Sköldkörteln - hypotryreos ger klassisk mental trötthet och minnesproblem, utesluts med TSH-test",
          "Dehydrering - redan mild vätskeförlust (1–2%) påverkar kognition mätbart",
        ],
      },
      {
        type: "callout",
        text: "Kämpar du med hjärndimma och koncentrationssvårigheter utan klar förklaring? Quizzen identifierar vilka näringsluckor som är mest troliga baserat på din kost och dina symtom.",
      },
    ],
  },
  {
    slug: "standig-oro-och-angest",
    title: "Ständig oro och ångestkänslighet - kan kosten spela roll?",
    metaTitle: "Ständig oro och ångest - kan näringsbrist vara orsaken?",
    metaDescription:
      "Magnesiumbrist och lågt omega-3-intag är kopplade till ökad stressnivå och ångestkänslighet. Lär dig hur kosten påverkar ditt nervsystem och vad forskningen visar.",
    publishedAt: "2026-04-13",
    category: "symptom",
    relatedSlugs: [
      "magnesiumbrist",
      "omega-3-tillskott",
      "b12-brist",
      "somnproblem-naringsbrist",
    ],
    blocks: [
      {
        type: "p",
        text: "Oro, stresskänslighet och en känsla av att alltid vara på helspänn är vanliga upplevelser. De har många möjliga orsaker - livsomständigheter, sömnbrist, hormonbalans. Men en faktor som sällan diskuteras är näringens påverkan på nervsystemets funktion. Magnesiumbrist är särskilt väldokumenterat i det sammanhanget.",
      },
      {
        type: "h2",
        text: "Magnesium - nervsystemets bromsande mineral",
      },
      {
        type: "p",
        text: "Magnesium fungerar som en naturlig kalciumantagonist i nervcellerna. Det dämpar nervaktiveringen och håller NMDA-receptorer (centrala för stressresponsen) i schack. Vid magnesiumbrist hyperstimuleras nervsystemet lättare - HPA-axelns stressrespons aktiveras snabbare och toleransen för stressorer minskar.",
      },
      {
        type: "p",
        text: "Kliniska studier visar att magnesiumtillskott minskar självrapporterad ångest och oro hos personer med låga magnesiumnivåer. Sambandet är starkast vid tydlig magnesiumbrist, men effekter ses brett. Magnesium utarmas av stress - vilket skapar en cirkel: stress tömmer magnesiumlagren, lågt magnesium ökar stressnivån.",
      },
      {
        type: "h2",
        text: "Omega-3 och inflammation i hjärnan",
      },
      {
        type: "p",
        text: "EPA och DHA (de marina omega-3-fettsyrorna) har anti-inflammatoriska egenskaper och påverkar produktionen av neurotransmittorer inklusive serotonin och dopamin. Forskning kopplar lågt omega-3-intag till depression och ångessymtom, och kliniska studier på EPA-tillskott visar lovande resultat vid mild till måttlig depression. Effekten på ångest är mer modest men konsistent.",
      },
      {
        type: "h2",
        text: "B-vitaminer och nervsystemet",
      },
      {
        type: "p",
        text: "B6, B9 (folat) och B12 är alla involverade i syntesen av neurotransmittorer - serotonin, dopamin och GABA. Brist på dessa påverkar kemikaliska jämvikten i hjärnan. B12-brist är särskilt kopplad till depression och ångest hos veganer och äldre. B6-brist kan försvåra sömn och öka irritabilitet.",
      },
      {
        type: "h2",
        text: "Vad du kan prova direkt",
      },
      {
        type: "ul",
        items: [
          "Magnesiumglycinat 300–400 mg på kvällen - en av de säkrare supplementen att prova utan test",
          "Omega-3 (EPA + DHA) 1–2 g per dag - i synnerhet om du sällan äter fet fisk",
          "Kontrollera B12 via blodprov om du är vegan eller vegetarian",
          "Begränsa koffein - förstärker adrenalinfrisättning och konkurrerar med magnesiumupptaget",
        ],
      },
      {
        type: "p",
        text: "Näringsbrist förklarar inte all oro och ångest - men om du upplever dessa symtom utan klar psykologisk orsak är det värt att utesluta näringsluckor innan du söker annan behandling.",
      },
      {
        type: "callout",
        text: "Undrar du om ditt nervsystem saknar magnesium eller omega-3? Quizzen räknar ut sannolikheten baserat på din kost, dina symtom och din livsstil.",
      },
    ],
  },
  {
    slug: "ledvark-och-stelhet",
    title: "Ledvärk och stelhet utan känd orsak - vilken roll spelar näringen?",
    metaTitle: "Ledvärk och stelhet - kan näringsbrist vara orsaken?",
    metaDescription:
      "Omega-3-brist och D-vitaminbrist är kopplade till inflammation och ledvärk. Lär dig vilken roll näringen spelar och vad forskningen visar om tillskott.",
    publishedAt: "2026-04-13",
    category: "symptom",
    relatedSlugs: [
      "omega-3-tillskott",
      "d-vitaminbrist",
      "magnesiumbrist",
      "vilka-vitaminer-testa-blodprov",
    ],
    blocks: [
      {
        type: "p",
        text: "Ledvärk och morgonstelhet som inte förklaras av en känd diagnos är vanligare än man tror, särskilt under vinterhalvåret. Inflammation i lederna kan ha många orsaker - men näring är en faktor som påverkar den inflammatoriska balansen i kroppen direkt och som det är möjligt att åtgärda.",
      },
      {
        type: "h2",
        text: "Omega-3 - kroppens naturliga antiinflammatoriska",
      },
      {
        type: "p",
        text: "EPA och DHA, de marina omega-3-fettsyrorna, konkurrerar med arakidonsyra (ett omega-6-fett) om enzymer som producerar inflammatoriska signalsubstanser (prostaglandiner och leukotriener). Hög andel omega-3 i cellmembranen leder till produktion av mindre inflammatoriska prostaglandiner. Forskning på reumatoid artrit visar att omega-3-tillskott minskar ledstelhet och smärta i kliniska studier.",
      },
      {
        type: "p",
        text: "Det moderna västerländska kostmönstret ger ett omega-6:omega-3-förhållande på 15–20:1 - evolutionärt optimalt är närmre 4:1. Utan regelbundet intag av fet fisk är detta förhållande svårt att balansera enbart via kost.",
      },
      {
        type: "h2",
        text: "D-vitamin och ledinflammation",
      },
      {
        type: "p",
        text: "D-vitaminreceptorer finns i ledvävnad, och brist är kopplad till ökad inflammatorisk aktivitet. Studier visar samband mellan låga D-vitaminnivåer och ökad smärta vid artros och fibromyalgi. Tillskott av D-vitamin normaliserar den immunmodulatoriska aktiviteten och kan minska inflammation - men effekten är störst hos dem med faktisk brist.",
      },
      {
        type: "h2",
        text: "Magnesium och muskelstelhet",
      },
      {
        type: "p",
        text: "Stelhet handlar inte alltid om lederna - ofta är det musklerna runt lederna som är för spända eller tröga. Magnesium är nödvändigt för muskelrelaxation, och brist ger ökad muskeltonus och spänning. Morgonstelhet som lättar under dagen är ett klassiskt mönster som delvis kan kopplas till magnesiumbrist och det låga magnesiumpåslag som sker under natten.",
      },
      {
        type: "h2",
        text: "Vad att göra - och vad att utesluta",
      },
      {
        type: "ul",
        items: [
          "Omega-3 2–3 g EPA+DHA per dag är välstuderat vid ledbesvär - kräver 2–3 månaders konsekvent intag för effekt",
          "D-vitamin 25–50 µg per dag är säkert att starta utan test i Sverige under vinterhalvåret",
          "Magnesiumglycinat 300 mg på kvällen kan minska muskelstelhet märkbart",
          "Om ledvärken är symmetrisk, tilltagande eller kombineras med svullnad - kontakta läkare för att utesluta autoimmuna tillstånd",
        ],
      },
      {
        type: "callout",
        text: "Lider du av ledvärk eller stelhet utan tydlig förklaring? Quizzen identifierar om omega-3- eller D-vitaminbrist är troligt baserat på din kost och dina symtom.",
      },
    ],
  },

  // ── LIFESTYLE CLUSTER ─────────────────────────────────────────────────────
  {
    slug: "vegansk-kost-tillskott",
    title: "Vegansk kost - Vilka tillskott behöver du verkligen?",
    metaTitle: "Veganska tillskott: Vad du faktiskt behöver",
    metaDescription:
      "En vegansk kost har förutsägbara näringsluckor. Lär dig vilka tillskott som är nödvändiga, vilka som är bra att ha och vilka du kan skippa.",
    publishedAt: "2026-04-12",
    category: "lifestyle",
    relatedSlugs: [
      "b12-brist",
      "jarnbrist-symptom",
      "omega-3-tillskott",
      "zinkbrist",
      "vilka-vitaminer-testa-blodprov",
    ],
    blocks: [
      {
        type: "p",
        text: "En vegansk kost är hälsosam och kan täcka de flesta näringsbehov - men den har förutsägbara blinda fläckar. Att känna till dem och åtgärda dem aktivt är skillnaden mellan att thriving och att gradvis utarma sina lager av kritiska mikronäringsämnen.",
      },
      {
        type: "h2",
        text: "B12 - icke förhandlingsbart",
      },
      {
        type: "p",
        text: "Det finns inget bioaktivt B12 i växter. Det är ett faktum, inte en åsikt. Om du är vegan och inte supplementerar med B12 - börja idag. Brist tar år att utvecklas eftersom kroppen lagrar B12 i levern, men när symtomen väl uppstår kan nervskadorna vara bestående.",
      },
      {
        type: "p",
        text: "Dos: 250–1 000 µg per dag, eller 2 500 µg en gång i veckan. Cyanokobalamin är billigast och fungerar för de flesta. Metylkobalamin är ett alternativ om du föredrar den aktiva formen. Förlita dig inte på näringsjäst eller berikade livsmedel som enda källa - mängderna är för osäkra.",
      },
      {
        type: "h2",
        text: "D-vitamin - samma problem som alla i Sverige",
      },
      {
        type: "p",
        text: "D-vitaminbristen i Sverige beror på breddgraden, inte på kosten. Men veganer missar den berikade mejeriprodukternas bidrag och behöver vara extra medvetna. D3 framställs traditionellt från lanolin (ull) - välj D3 från lav (lichen) för ett veganskt alternativ, eller D2. 1 000–2 000 IE per dag under vinterhalvåret är en rimlig startdos.",
      },
      {
        type: "h2",
        text: "Omega-3 - frön räcker inte",
      },
      {
        type: "p",
        text: "Linfrön och chiafrön innehåller ALA, men omvandlingen till de viktiga EPA och DHA är ineffektiv (5–10%). Algolja ger DHA och EPA direkt - det är källan fisken äter, så du hoppar ett led i kedjan. 250–500 mg DHA+EPA från algolja per dag är en bra underhållsdos.",
      },
      {
        type: "h2",
        text: "Järn - biotillgängligheten är avgörande",
      },
      {
        type: "p",
        text: "Växtbaserade järnkällor (linser, spenat, tofu, pumpafrön, torkade aprikoser) innehåller icke-hemjärn, som absorberas sämre än hemjärn från kött. Kombinera alltid järnrika måltider med C-vitamin (paprika, citrus, kål) och undvik kaffe och te i direkt anslutning till måltiden.",
      },
      {
        type: "p",
        text: "Testa ferritin innan du börjar med järntillskott - överdosering är skadligt. Om ferritin är lågt: supplementera under en begränsad period och testa om efter 3 månader.",
      },
      {
        type: "h2",
        text: "Zink, jod och kalcium",
      },
      {
        type: "ul",
        items: [
          "Zink: fytater i baljväxter minskar absorptionen - blötlägg och grodda livsmedel, eller ta 15–25 mg zinktillskott",
          "Jod: mejeri är en stor joddkälla i Sverige - veganer bör använda jodberikat salt eller ta ett jodtillskott (150 µg/dag)",
          "Kalcium: kalciumberikade växtmjölkar, tofu (med kalciumsulfat), grönkål och pak choi ger kalcium - kontrollera att du faktiskt når 700–1000 mg/dag",
        ],
      },
      {
        type: "callout",
        text: "En vegansk kost kräver mer planering kring tillskott - men med rätt strategi är det fullt möjligt att undvika alla vanliga brister.",
      },
    ],
  },
  {
    slug: "tillskott-traning",
    title: "Tillskott för träning - Vad säger forskningen?",
    metaTitle: "Kosttillskott för träning: Vad som faktiskt fungerar - och vad du kan skippa",
    metaDescription:
      "Träningsindustrin är full av överdrivna påståenden. Lär dig vilka tillskott som faktiskt gör skillnad för aktiva - och vilka du kan skippa.",
    publishedAt: "2026-04-12",
    category: "lifestyle",
    relatedSlugs: [
      "magnesiumbrist",
      "jarnbrist-symptom",
      "omega-3-tillskott",
      "zinkbrist",
      "vilka-vitaminer-testa-blodprov",
    ],
    blocks: [
      {
        type: "p",
        text: "Träningsindustrin säljer kosttillskott för miljarder kronor varje år - och en stor del av det är pengar i sjön. Men bakom hypen finns ett korn av sanning: intensiv träning ökar verkligen förbrukningen av specifika mikronäringsämnen, och brist på dessa kan bromsa återhämtning och prestation.",
      },
      {
        type: "h2",
        text: "Vad intensiv träning faktiskt förbrukar",
      },
      {
        type: "p",
        text: "Magnesium och zink förloras i svett. Järn förlörs av uthållighetsidrottare via fotstötshemolys (löpning bryter bokstavligen sönder röda blodkroppar) och svettförluster. Omega-3 konsumeras snabbare vid hög inflammation. D-vitamin utarmas inte direkt av träning, men aktiva personer som tränar inomhus mycket kan ha extra låga nivåer.",
      },
      {
        type: "h2",
        text: "Magnesium - det viktigaste träningsrelaterade tillskottet",
      },
      {
        type: "p",
        text: "Magnesium är involverat i ATP-produktion, proteinsyntes och muskelrelaxation. Det förloras i svett - uppskattningsvis 4 mg magnesium per liter svett. För den som tränar hårt och svettas mycket kan förlusterna vara betydande. Magnesiumbrist ger kramper, sämre återhämtning och sämre sömnkvalitet - alla faktorer som direkt påverkar träningsresultaten.",
      },
      {
        type: "p",
        text: "300–400 mg magnesiumglycinat på kvällen är en evidensbaserad strategi för aktiva. Det förbättrar sömnkvaliteten, reducerar kramper och stöder återhämtningen - utan att ge biverkningar.",
      },
      {
        type: "h2",
        text: "Järn och uthållighetsträning",
      },
      {
        type: "p",
        text: "Järnbrist är ett utbrett problem bland uthållighetsidrottare, och bland kvinnliga löpare är prevalensen uppskattad till 30–50%. Järnbrist sänker syretransportkapaciteten och ger sämre uthållighet, snabbare trötthet och längre återhämtningstid. Testa ferritin var 6:e månad om du tränar hårt - och supplementera aldrig järn utan att ha testat dig.",
      },
      {
        type: "h2",
        text: "Omega-3 och inflammation",
      },
      {
        type: "p",
        text: "Intensiv träning skapar systemisk inflammation, vilket är en del av anpassningsprocessen. Omega-3, särskilt EPA, modulerar de inflammatoriska svaret och kan minska muskelömhet och förkorta återhämtningstiden. 1–3 g EPA+DHA per dag är en vanlig dos för aktiva individer. Fiskolja och algolja fungerar båda.",
      },
      {
        type: "h2",
        text: "Vad du inte behöver",
      },
      {
        type: "ul",
        items: [
          "BCAA - redundant om ditt proteinintag är tillräckligt (1,6–2,2 g/kg)",
          "Pre-workout - mestadels koffein plus underdelade aktiva ingredienser",
          "Fettförbrännare - inga belägg, potentiell skada",
          "Dyr återhämtningsdryck - vatten + kolhydrater + protein ger samma effekt",
          "Glutamin - onödigt vid normalt proteinintag",
        ],
      },
      {
        type: "callout",
        text: "De tre tillskott som faktiskt gör skillnad för de flesta som tränar: magnesium, D-vitamin (vinterhalvåret) och omega-3.",
      },
    ],
  },
  {
    slug: "vilka-vitaminer-testa-blodprov",
    title: "Vilka vitaminer bör man testa? En guide till blodprov",
    metaTitle: "Vilka vitaminer bör du testa? Guide till blodprov för näringsstatus",
    metaDescription:
      "Vilka blodprover ska du be om? Var kan du testa? Hur tolkar du svaren? En praktisk guide för dig som vill förstå ditt faktiska näringsstatus.",
    publishedAt: "2026-04-12",
    category: "lifestyle",
    relatedSlugs: [
      "vitaminbrist-tecken-test",
      "jarnbrist-symptom",
      "d-vitaminbrist",
      "b12-brist",
      "zinkbrist",
    ],
    blocks: [
      {
        type: "p",
        text: "Att ta ett blodprov är det mest rationella sättet att förhålla sig till näringsbrist. Istället för att gissa baserat på symtom, kost eller marknadsföringspåståenden - ser du faktiska siffror. Du vet vad som är lågt, supplementerar precist och testar om för att bekräfta att det fungerar.",
      },
      {
        type: "h2",
        text: "Vilka markörer bör du be om?",
      },
      {
        type: "ul",
        items: [
          "25-OH-D3 - D-vitaminets aktiva lagringsform (mät detta, inte D2 separat)",
          "Ferritin - järnlager, mer känsligt än hemoglobin",
          "S-B12 - vitamin B12 i serum",
          "TSH - sköldkörtelfunktion",
          "Folat (erytrocytfolat) - B9, viktig vid graviditet och vid B12-brist",
          "S-Zink - zink i serum (imperfekt men ger en indikation)",
        ],
      },
      {
        type: "p",
        text: "Om du tränar intensivt och misstänker prestationsnedsättning, lägg till en komplett blodstatus med hemoglobin och retikulocyter. Om du misstänker omega-3-brist kan ett omega-3-index beställas via privata laboratorier.",
      },
      {
        type: "h2",
        text: "Var kan du testa?",
      },
      {
        type: "p",
        text: "Via din vårdcentral kan du ofta få de viktigaste proverna via remiss om du beskriver symtom. Nämn trötthet, sömnproblem, håravfall eller muskelkramper - det öppnar dörren för relevanta tester. Tips: be specifikt om ferritin, inte bara en blodstatus (hemoglobin). Ferritin ingår inte i standardpaketet.",
      },
      {
        type: "p",
        text: "Privata hemtesttjänster erbjuder kompletta vitamin- och mineralpaneler utan remiss och utan väntetid. Priser varierar från 500 till 1 500 kronor beroende på hur många markörer du vill ha. Det är ett bra alternativ om du vill ha full kontroll och snabba svar.",
      },
      {
        type: "h2",
        text: "Att tolka resultaten",
      },
      {
        type: "p",
        text: "Referensintervall i laboratoriesvar är satta för att definiera sjukdom - inte för att säkerställa optimal hälsa. D-vitamin: referensen sätts ofta vid 50 nmol/L men optimalt anses vara 75–150 nmol/L. Ferritin: undre gränsen är ofta 12–15 µg/L men symtom uppstår vanligen under 30–50 µg/L. B12: referens 148 pmol/L men symtom är vanliga under 300 pmol/L.",
      },
      {
        type: "p",
        text: "Med andra ord - ett svar inom referensintervallet utesluter inte brist i funktionell mening. Läs dina värden i relation till dina symtom, inte bara mot laboratoriegränserna.",
      },
      {
        type: "h2",
        text: "Vad händer efter testet?",
      },
      {
        type: "p",
        text: "Har du identifierat en brist - supplementera under 3 månader med en adekvat dos och testa om. Kontrollera att värdet faktiskt stigit till en nivå där du förväntar dig att må bra. Anpassa dosen vid behov. Upprepa ett gång om året, eller halvårsvis om du tränar intensivt.",
      },
      {
        type: "callout",
        text: "Det bästa du kan göra för din hälsa är att ta ett blodprov en gång per år - det kostar mindre än ett gymkort och ger faktisk information om din kropp.",
      },
    ],
  },
  {
    slug: "vilka-kosttillskott-ska-jag-ta",
    title: "Vilka kosttillskott ska jag ta? - En guide baserad på din profil",
    metaTitle: "Vilka kosttillskott ska jag ta? Guide för att hitta rätt",
    metaDescription:
      "Vilket kosttillskott du behöver beror på din kost, dina symtom och din livsstil. Den här guiden hjälper dig navigera marknaden och undvika onödiga köp.",
    publishedAt: "2026-04-13",
    category: "lifestyle",
    relatedSlugs: [
      "vitaminbrist-tecken-test",
      "d-vitaminbrist",
      "magnesiumbrist",
      "vilka-vitaminer-testa-blodprov",
    ],
    blocks: [
      {
        type: "p",
        text: "Kosttillskottmarknaden är enorm, förvirrande och fylld av produkter du inte behöver. Men rätt tillskott, i rätt dos, för rätt person - det kan göra verklig skillnad. Problemet är att de flesta tar fel saker baserat på reklam eller hörsägen snarare än baserat på sin faktiska profil.",
      },
      {
        type: "h2",
        text: "Börja med frågan: har du faktisk brist?",
      },
      {
        type: "p",
        text: "Det finns en viktig skillnad mellan tillskott du tar för att täcka en dokumenterad brist och tillskott du tar för att 'optimera'. Brist ger ett tydligt svar - du saknar X, du tar X, du mår bättre. Optimering är mer diffust, och bevisen för de flesta 'prestationshöjande' tillskott är svaga.",
      },
      {
        type: "p",
        text: "Prioritera att utesluta de vanligaste bristerna innan du experimenterar med andra produkter. De flesta i Sverige bör titta på D-vitamin, magnesium och - beroende på kost - B12 och järn.",
      },
      {
        type: "h2",
        text: "De tillskott som de flesta faktiskt behöver",
      },
      {
        type: "ul",
        items: [
          "[D-vitamin](/artikel/d-vitaminbrist) 25–50 µg per dag - nästan alla i Sverige behöver detta under vinterhalvåret. Välj D3 i olja.",
          "[Magnesium](/artikel/magnesiumbrist) 300–400 mg glycinat eller citrat - relevant om du är stressad, tränar intensivt eller sover dåligt.",
          "[B12](/artikel/b12-brist) - kritiskt om du är vegan eller vegetarian, viktigt för personer över 50.",
          "[Omega-3](/artikel/omega-3-tillskott) 1–2 g EPA+DHA - om du sällan äter fet fisk.",
        ],
      },
      {
        type: "h2",
        text: "Tillskott som kräver ett blodprov först",
      },
      {
        type: "ul",
        items: [
          "[Järn](/artikel/jarnbrist-symptom) - ta aldrig utan att testa ferritin. Järnöverskott är skadligt.",
          "Zink i höga doser - kan störa kopparupptaget vid överdosering.",
          "Folat i höga doser - kan maskera B12-brist.",
        ],
      },
      {
        type: "h2",
        text: "Populära tillskott med begränsat stöd",
      },
      {
        type: "p",
        text: "Biotin för håravfall - hjälper bara vid konstaterad biotinbrist, vilket är ovanligt. Collagen - absorberas som aminosyror, kroppen bestämmer själv vart de går. Antioxidantcocktails - mat är en bättre källa, höga doser av isolerade antioxidanter kan ge bakslag.",
      },
      {
        type: "h2",
        text: "Hur vet du vad just du behöver?",
      },
      {
        type: "p",
        text: "Det beror på din kost, dina symtom, din träning och din demografiska profil. En vegetarian i 30-årsåldern som tränar hårt har ett helt annat behov än en allätare i 55-årsåldern med stillasittande arbete. Det enda sättet att veta säkert är ett blodprov - men du kan komma långt med en välunderbyggd bedömning baserad på din livsstil.",
      },
      {
        type: "callout",
        text: "Peilings quiz analyserar din kost, dina symtom och din livsstil och pekar ut vilka brister som är troligast för just dig - på 3 minuter.",
      },
    ],
    faq: [
      {
        q: "Vilket kosttillskott ska jag börja med?",
        a: "För de flesta i Sverige är D-vitamin det viktigaste tillskottet att börja med - nästan alla har otillräckliga nivåer under vinterhalvåret. Magnesium är det näst vanligaste behovet, särskilt vid stress, sömnproblem eller intensiv träning.",
      },
      {
        q: "Kan jag ta för många vitaminer?",
        a: "Vattenlösliga vitaminer (B-vitaminer, C-vitamin) utsöndras via njurarna och är svåra att överdosera. Fettlösliga vitaminer (A, D, E, K) lagras i kroppen och kan ackumuleras till toxiska nivåer vid mycket höga doser. D-vitamin i standarddoser på 25-100 µg är säkert.",
      },
      {
        q: "Ska jag ta kosttillskott varje dag?",
        a: "Ja - tillskott fungerar bäst vid konsekvent daglig dosering. D-vitamin och magnesium behöver tas dagligen för stabil effekt. B12 kan tas i högre veckodos om daglig dosering är opraktiskt.",
      },
    ],
  },
  {
    slug: "magnesium-fore-somn",
    title: "Magnesium för sömn - fungerar det och hur mycket ska du ta?",
    metaTitle: "Magnesium för sömn: Dosering, form och vad forskningen visar",
    metaDescription:
      "Magnesium är ett av de mest studerade naturliga sömnmedlen. Lär dig vilken form som fungerar bäst, rätt dosering och vad forskningen faktiskt visar.",
    publishedAt: "2026-04-13",
    category: "lifestyle",
    relatedSlugs: [
      "magnesiumbrist",
      "somnproblem-naringsbrist",
      "standig-oro-och-angest",
      "muskelkramper-magnesiumbrist",
    ],
    blocks: [
      {
        type: "p",
        text: "Sömnproblem är ett av de vanligaste hälsoklagomålen. Många provar melatonin, antihistaminer eller sömnmedel - men en av de mest välstuderade och säkraste interventionerna för sömn är magnesium. Det är inte ett sömnmedel i traditionell mening; det behandlar en underliggande brist som kan hålla dig vaken.",
      },
      {
        type: "h2",
        text: "Varför påverkar magnesium sömnen?",
      },
      {
        type: "p",
        text: "Magnesium reglerar GABA-receptorer i hjärnan - samma receptorsystem som bensodiazepiner (sömnmedel) verkar på, men utan beroendeproblematiken. GABA är hjärnans viktigaste hämmande neurotransmittor: det sänker nervaktiviteten och skapar det lugn som behövs för att somna. Utan tillräckligt magnesium fungerar GABA-receptorerna sämre.",
      },
      {
        type: "p",
        text: "Dessutom reglerar magnesium melatoninproduktionen via dess roll i enzymatiska reaktioner i tallkottkörteln. Magnesiumbrist kan alltså störa den naturliga sömnhormoncykeln direkt.",
      },
      {
        type: "h2",
        text: "Vad visar forskningen?",
      },
      {
        type: "p",
        text: "Kliniska studier på äldre med sömnproblem visar att magnesiumtillskott förbättrar sömnkvalitet, ökar sömnlängden och minskar tidigt uppvaknande. En randomiserad studie från 2012 (Abbasi et al.) visade signifikant förbättring i insomni-index, melatoninvärden och kortisol hos äldre som fick 500 mg magnesium dagligen.",
      },
      {
        type: "p",
        text: "Effekten är störst hos individer med faktisk magnesiumbrist - men eftersom magnesiumbrist är vanlig och sällan diagnostiseras, är det en relevant kandidat för de flesta med sömnproblem.",
      },
      {
        type: "h2",
        text: "Vilken form av magnesium är bäst för sömn?",
      },
      {
        type: "ul",
        items: [
          "Magnesiumglycinat - bäst för sömn. Glycin har egna lugnande egenskaper och förbättrar sömnkvaliteten separat. Absorberas väl utan laxerande effekt.",
          "Magnesiumtaurat - bra alternativ, taurin har GABA-modulerande effekter.",
          "Magnesiumcitrat - absorberas väl men kan ge lös mage i höga doser, vilket kan störa sömnen.",
          "Magnesiumoxid - undvik. Absorberas mycket dåligt (4%), ger framförallt laxerande effekt.",
        ],
      },
      {
        type: "h2",
        text: "Dosering och timing",
      },
      {
        type: "p",
        text: "200–400 mg elementärt magnesium, intaget 30–60 minuter före sänggåendet, är standardprotokoll i studier. Kontrollera alltid mängden elementärt magnesium på förpackningen - inte den totala vikten av magnesiumsaltet. 400 mg magnesiumglycinat innehåller till exempel ungefär 50 mg elementärt magnesium.",
      },
      {
        type: "p",
        text: "De flesta märker förbättring inom 1–4 veckor. Är du inte säker på om du har magnesiumbrist - [läs om de vanligaste symtomen](/artikel/magnesiumbrist) och börja med en lägre dos (200 mg) för att se hur du reagerar.",
      },
      {
        type: "callout",
        text: "Magnesiumglycinat 200–400 mg på kvällen är ett av de säkraste och mest välstuderade naturliga sömnmedlen - och kräver inget blodprov för att börja.",
      },
    ],
    faq: [
      {
        q: "Hur snabbt hjälper magnesium mot sömnproblem?",
        a: "De flesta märker skillnad inom 1–4 veckor av konsekvent daglig dosering. Vissa upplever effekt redan första veckan, framförallt på muskelspänning och insomningstid.",
      },
      {
        q: "Vilken dos magnesium ska jag ta för sömn?",
        a: "200–400 mg elementärt magnesium per kväll är standarddosen. Börja med 200 mg och öka om nödvändigt. Se alltid till att kontrollera mängden elementärt magnesium på förpackningen, inte bara den totala vikten av magnesiumsaltet.",
      },
      {
        q: "Kan man ta magnesium varje kväll?",
        a: "Ja, daglig dosering är både säkert och rekommenderat. Magnesium är vattenlösligt och överskott utsöndras via njurarna. Den enda kontraindikationen är svår njursvikt.",
      },
      {
        q: "Är magnesiumglycinat bättre än magnesiumcitrat för sömn?",
        a: "För sömn är magnesiumglycinat att föredra. Glycin har egna lugnande egenskaper och förstärker sömneffekten. Magnesiumcitrat absorberas bra men kan ge lös mage i höga doser.",
      },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

export function getAllSlugs(): string[] {
  return ARTICLES.map((a) => a.slug);
}

export function getRelatedArticles(slugs: string[]): Article[] {
  return slugs
    .map((s) => ARTICLES.find((a) => a.slug === s))
    .filter((a): a is Article => a !== undefined);
}
