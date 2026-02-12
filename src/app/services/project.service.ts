import {Injectable} from '@angular/core';
import {ProjectModel} from '../models/project-model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() {
  }

  private projects: ProjectModel[] = [
    {
      slug: 'budaors-church',
      name: {
        hu: 'BUDAÖRSI TEMPLOM',
        en: 'BUDAÖRSI CHURCH'
      },
      gridShort: {
        hu: 'Budaörsi Református Templom és Gyülekezeti Központ - a "Szőlősgazda háza"',
        en: 'Budaörs Reformed Church and Congregation Centre'
      },
      shortDescription: {
        hu: 'Budaörsi Református Templom és Gyülekezeti Központ - a "Szőlősgazda háza"',
        en: 'Budaörs Reformed Church and Congregation Centre'
      },
      longDescription: {
        hu: ['A város főutcájában, az evangélikus templom szomszédságában épült meg a reformátusok új temploma, mely egyben a közösség otthona is. A transzparens épület a hívogatást, nyitottságot hirdeti. Tornya az evangélikus templom tornyával megegyező magasságú. Fehér színe a tisztaságot, az egyszerűséget jelképezi, alkalmazkodik református hagyományainkhoz.',
          'A homlokzaton megjelenő perforált szőlőinda minta megidézi a gyülekezet vezérigéjét, egybeszövi a homlokzatot és a tornyot. Az épület utcai traktusa egy nagyméretű előtér, mely egyben kávézó, teázó, a találkozás, a kapcsolatfelvétel helye, nyitás az utca embere felé. Innét érhetők el a földszint és az emelet különböző közösségi helyiségei, illetve a templomtér. Az épület a hagyományt nem pusztán formai elemek továbbvitelében, hanem a közös gyökerek mai értelmezésében, tiszteletében igyekszik folytatni.'],
        en: ['The new Reformed church, which also serves as the community center, was built on the town\'s main street, next to the Lutheran church. The transparent building proclaims openness and invitation. Its tower is the same height as the tower of the Lutheran church. Its white color symbolizes purity and simplicity, in keeping with our Reformed traditions.',
        'The perforated grapevine pattern on the façade evokes the congregation\'s motto, weaving together the façade and the tower. The street side of the building features a large foyer, which also serves as a café and tea room, a place for meeting and socializing, opening up to the people on the street. From here, you can access the various community rooms on the ground floor and first floor, as well as the church hall. The building seeks to continue tradition not only in the continuation of formal elements, but also in the contemporary interpretation and respect of common roots.']
      },
      additionalInfo: {
        hu: ['Berzsák Zoltán, Konyha Katalin, Szvák Dorottya, Rácz Noémi, Csintalan Csongor\n' + '\n' + 'Budaörs\n' + '\n' + '2019',
        'Hajdú József és Hlinka Zsolt fotói'],
        en: ['Zoltán Berzsák, Katalin Konyha, Dorottya Szvák, Noémi Rácz, Csongor Csintalan\n' + '\n' + 'Budaörs\n' + '\n' + '2019',
        'Photographs of József Hajdú and Zsolt Hlinka']
      },
      images: ['budaors-1', 'budaors-2']
    },
    {
      slug: 'ujpesti-parish-church',
      name: {
        hu: 'ÚJPESTI FŐBLÉBÁNIA',
        en: "ÚJPEST PARISH CHURCH"
      },
      gridShort: {
        hu: 'Egek Királynéja Római Katolikus Főplébánia',
        en: 'Parish Church of the Celestial Queen'
      },
      shortDescription: {
        hu: 'Egek Királynéja Római Katolikus Főplébánia',
        en: 'Parish Church of the Celestial Queen'
      },
      longDescription: {
        hu: ['Újpest főterén, a Szent István téren egy 1870-es években épült eklektikus épületben kapott új helyet az Egek Királynéja Római Katolikus Főplébánia. A meglévő épület eredeti állapotát igyekeztünk felkutatni és visszaállítani, az épület nyitott közlekedési rendszerét zárttá tenni.',
        'A rekonstrukciót korabeli fotók alapján terveztük, bővítésként két modern hangvételű keresztszárnyat terveztünk, melyeket a földszinten teljesen átlátható és átjárható módon alakítottunk ki mind vizuális, mind funkcionális célból. A helyiségek funkcióit a használat sűrűsége alapján fűztük fel, az anyag- és színhasználatot szándékosan visszafogtuk, hogy a sok-sok egyházi „örökség” érvényesülhessen. A modern épületelemek kialakításukban többletjelentést hordoznak, egyszerűségükben az elmélyülést segítik, a transzcendens kapcsolat ünnepélyességét hangsúlyozzák.'],
        en: ['\n' +
        'In the main square of Újpest, on Szent István Square, in an eclectic building built in the 1870s, the Roman Catholic parish of the Queen of Egek has been given a new location. Thanks to an exchange agreement with the local government, the building of the former Erkel Ferenc Music School was transformed into the home of the congregation\'s community events and gatherings.',
        'The reconstruction was designed on the basis of contemporary photographs, the latter intervention being based on two cross-wings with a modern tone, which were designed to be fully transparent and permeable at ground level, both visually and functionally. The functions of the rooms are based on the density of use, and the use of materials and colors has been deliberately restrained to reflect the many ecclesiastical "heritages". The most important aspect of community building is its impact on the community (including its usability, practicality and the message it conveys to its immediate and wider environment.)']
      },
      additionalInfo: {
        hu: ['Berzsák Zoltán, Konyha Katalin, Stanisewszki Andrea\n' + '\n' + 'Budapest, IV. ker.\n' + '\n' + '2015',
        'Albertszki Tamás fotói'],
        en: ['Zoltán Berzsák, Katalin Konyha, Andrea Stanisewszki\n' + '\n' + 'Budapest, 4th district.\n' + '\n' + '2015',
          'Photographs of Tamás Albertszki']
      },
      images: ['ujpest', 'ujpest-2']
    },
    {
      slug: 'kapy',
      name: {
        hu: 'TÁRSASHÁZ',
        en: 'APARTMENT BUILDING'
      },
      gridShort: {
        hu: 'Kapy utcai öt lakásos társaház',
        en: 'Kapy street five-apartment building'
      },
      shortDescription: {
        hu: 'Társasház\n' + 'Kapy utca',
        en: 'Apartment building\n' + 'Kapy street'
      },
      longDescription: {
        hu: ['A Pasaréti tér és a város fölött fákkal sűrűn benőtt telken épült ez a kívül-belül igényes és minden kényelmet biztosító luxustársasház. Az épület a növényzethez és a domboldal lejtéséhez igazodik, a korábbi családi ház helyére került. A lakások a kilátás, illetve a kert valamennyi látványa fel átmeneti terekkel nyílnak meg. A kevés számú felhasznált anyag minőségi és tartós. A kényelmes, nagy méretű lakások valamennyi 21. században elképzelhető kényelmi felszereléssel ellátottak a központi szellőzéstől a geotermikus rendszerű fűtés-hűtésen keresztül az okosotthon rendszerig. Az épület a nagy múltú beruházó - kivitelező cég és irodánk minőségi igényeit egyaránt tükrözi.'],
        en: ['This luxurious apartment building, sophisticated both inside and out and offering every comfort, was built on a plot densely covered with trees above Pasaréti Square and the city. The building blends in with the vegetation and the slope of the hillside, replacing a former family home. The apartments open up to transitional spaces with views of the landscape and the garden. The few materials used are high-quality and durable. The comfortable, large apartments are equipped with all the amenities imaginable in the 21st century, from central ventilation and geothermal heating and cooling to a smart home system. The building reflects the quality standards of both the long-established investor-contractor and our office.']
      },
      additionalInfo: {
        hu: ['Berzsák Zoltán, Balogh Eszter, Eperjesi Blanka, Monori-Szabó Edit, Puskás Levente\n' + '\n' + 'Budapest, II. ker.\n' + '\n' + '2025',
          'Grabarics Development Kft. fotói'],
        en: ['Zoltán Berzsák, Eszter Balogh, Blanka Eperjesi, Edit Monori-Szabó, Levente Puskás\n' + '\n' + 'Budapest, 2nd district.\n' + '\n' + '2025',
        'Photos of Grabarics Development Ltd.']
      },
      images: ['kapy-1', 'kapy-2']
    },
    {
      slug: 'raday-house',
      name: {
        hu: 'RÁDAY-HÁZ',
        en: 'RADAY-HOUSE'
      },
      gridShort: {
        hu: 'Dunamelléki Református Egyházkerület Székház és Konferenciaközpont',
        en: 'Dunamelléki Reformed Church District Headquarters and Conference Centre'
      },
      shortDescription: {
        hu: 'Dunamelléki Református Egyházkerület Székház és Konferenciaközpont',
        en: 'Dunamelléki Reformed Church District Headquarters and Conference Centre'
      },
      longDescription: {
        hu: ['Az épület 1912 óta a Dunamelléki Református Egyházkerület Székháza és Konferencia Központja, otthona az egyházkerület Püspöki Hivatalának, a Károli Gáspár Református Egyetem Hittudományi Karának és a Ráday Felsőoktatási Diákotthonának, a Ráday Gyűjtemény Könyvtárának, valamint a Biblia Világa Múzeumnak.',
        '2019 januárjában az épületben tűz ütött ki, ezért szükségessé vált az épületegyüttes felújítása, átalakítása, valamint új kollégiumi szárny építése. A funkcionális tisztaságon, a karakteresen eltérő használati igények biztosításán túl fontos volt számunkra, hogy az épület reprezentálja minden megmozdulásával azt, amit a reformáció hozott, amit a református egyház képvisel. Világosság, átláthatóság, nyitottság.',
        'A múlt, a jelen és a jövő összetartozását szimbolizálja a régi épületrészek műemléki szintű felújítása mellett az új részek kortárs építészeti megfogalmazása, melyeket összefűz a sötét színű fémlemez, mely ráborul az épületre, mint a lelkészekre a palást. A Markusovszky tér felé teljesen megnyíló épület sarkán, a fellobbanó tűz helyén megjelenik a kereszt kívül és belül egyaránt. A kereszt szárainak metszéspontjában a református egyház jelképe, a betlehemi csillag, mely Krisztushoz vezet.'],
        en: ['The building has been the Headquarters and Conference Center of the Danube Reformed Church District since 1912, home to the Episcopal Office of the church district, the Faculty of Theology of the Károli Gáspár Reformed University and the Ráday Higher Education Student Dormitory, the Ráday Collection Library, and the Bible World Museum.',
        'In January 2019, a fire broke out in the building, which made it necessary to renovate and transform the building complex, as well as to build a new dormitory wing. In addition to functional clarity and ensuring characteristically different usage needs, it was important to us that the building represent with every movement what the Reformation brought, what the Reformed Church stands for. Lightness, transparency, openness.',
        'The unity of the past, present and future is symbolized by the renovation of the old parts of the building to a monument level, as well as the contemporary architectural formulation of the new parts, which are connected by the dark-colored metal sheet that falls on the building like a mantle on the pastors. On the corner of the building, which opens completely towards Markusovszky Square, the cross appears both outside and inside, in the place of the blazing fire. At the intersection of the arms of the cross, the symbol of the Reformed Church, the Star of Bethlehem, which leads to Christ.']
      },
      additionalInfo: {
        hu: ['Berzsák Zoltán, Berzsák Barna, Csintalan Csongor, Eperjesi Blanka, Konyha Katalin, Rácz Nóémi, Szvák Dorottya, Zacher Eszter\n' + '\n' + 'Budapest, IX.\n' + '\n' + '2022',
        'Hajdú József, Hlinka Zsolt és Mártonffy Gábor fotói'],
        en: ['Zoltán Berzsák, Barna Berzsák, Csongor Csintalan, Blanka Eperjesi, Katalin Konyha, Nóémi Rácz, Dorottya Szvák, Esther Zacher\n' + '\n' + 'Budapest\n' + '\n' + '2022',
        'Photographs of József Hajdú, Zsolt Hlinka and Gábor Mártonffy']
      },
      images: ['raday-1', 'raday-2']
    },
    {
      slug: 'kulso-kelenfoldi-church',
      name: {
        hu: 'KÜLSŐ-KELENFÖLDI TEPLOM',
        en: 'KÜLSŐ-KELENFÖLD CHURCH'
      },
      gridShort: {
        hu: 'Külső-Kelenföldi Református Templom - meghívásos tervpályázat',
        en: 'Külső-Kelenföld Refordmed Church - invitational tender'
      },
      shortDescription: {
        hu: 'Külső-Kelenföldi Református Egyházközség új temploma meghívásos tervpályázat',
        en: 'Külső-Kelenföld Reformed Church\n' + 'invitational tender'
      },
      longDescription: {
        hu: ['„…és akiben ti is együtt épültök az Isten hajlékává a Lélek által…” /Efezus 2:23/',
        'Idegenek voltunk egymás számára, de Jézus Krisztusban közel kerültünk egymáshoz. Új néppé, új közösséggé lettünk. Együttesen alkotjuk a gyülekezetet, mely Krisztust képviseli a világban. A templom elsősorban a szívben épül! A Gellért téri induláshoz képest a Bartók Béla út méltatlanúl fejeződik be. Tervünk szerint az út végét két torony, a Szent Gellért templom mellett az új református templom tornya zárja. A közcélú parkként kialakított telken a szomszédos épületsorok befejezetlenségét, hiányosságát kezeli a hátrahúzott épület tömege. Alapja tégla „talapzat”, mely középen teljesen átnyitott.',
        'Külső és belső tér vizuálisan és funkcionálisan egyaránt összeolvad. A talapzaton perforált elemekkel borított felépítmény, melyben egybeformálódik a templom, a közösségi tér, a lakás – mindaz, ami a gyülekezetet képviseli. Mintha két erős kéz tartana egy finom, légies, szellős tollpihét. A sarkon a felépítmény toronnyá növekszik, áttört burkolóelemeiből keresztet formál. Felette a betlehemi csillag, mely a kereszthez, Krisztushoz vezet. A belső térben a fényé és a nyitottságé a főszerep. Mind a közlekedőterekben, mind a templomtérben a fény folyamatos változása formálja, alakítja a terek hangulatát és a benne lévőknek nyújt változatosságot, emeli el a tereket a profántól. A terek egymásba folynak, a külső és belső eggyé válik.'],
        en: ['"...and in whom you also are being built together into a dwelling place for God by the Spirit..." /Ephesians 2:23/',
        'We were strangers to each other, but in Jesus Christ we became close. We became a new people, a new community. Together we form the church, which represents Christ in the world. The church is built first and foremost in the heart! Compared to the start at Gellért Square, Bartók Béla Road ends in an undeserved manner. According to our plan, the end of the road will be closed by two towers, the tower of the new Reformed church next to the St. Gellért church. On the plot, which is designed as a public park, the mass of the building set back from the street addresses the incompleteness and deficiency of the neighboring rows of buildings. Its base is a brick "pedestal" that is completely open in the middle.',
        'The exterior and interior spaces merge both visually and functionally. The superstructure covered with perforated elements on the pedestal combines the church, the community space, and the apartment—everything that represents the congregation. It is as if two strong hands are holding a delicate, airy, breezy feather. At the corner, the superstructure grows into a tower, forming a cross from its perforated cladding elements. Above it is the Star of Bethlehem, which leads to the cross, to Christ. Light and openness play the leading role in the interior. In both the passageways and the church interior, the constantly changing light shapes and transforms the atmosphere of the spaces, offering variety to those inside and elevating the spaces above the profane. The spaces flow into one another, the exterior and interior becoming one.']
      },
      additionalInfo: {
        hu: ['Berzsák Zoltán, Balogh Eszter, Monori-Szabó Edit, Puskás Levente, Szvák Dorottya\n' + '\n' + 'Budapest, XI. ker.\n' + '\n' + '2025'],
        en: ['Zoltán Berzsák, Eszter Balogh, Edit Monori-Szabó, Levente Puskás, Dorottya Szvák\n' + '\n' + 'Budapest, 11th district.\n' + '\n' + '2024']
      },
      images: ['kelefold-1', "kelefold-2"]
    },
    {
      slug: 'csomor-church',
      name: {
        hu: 'CSÖMÖRI TEMPLOM',
        en: 'CSÖMÖR CHURCH'
      },
      gridShort: {
        hu: 'Csömöri Református Templom és Gyülekezeti Otthon - a "Magvető háza"',
        en: 'Csömör Reformed Church and Congregation Home'
      },
      shortDescription: {
        hu: 'Csömöri Református Templom és Gyülekezeti Otthon - a "Magvető háza"',
        en: 'Csömör Reformed Church and Congregation Home'
      },
      longDescription: {
        hu: ['A csömöri reformátusok többségében határon túlról költöztek a Budapest melletti településre. Magukkal hozták hagyományaikat, a szülőföld szeretetét, lelki örökségét. 2013-ban elhatározták, hogy templomot és gyülekezeti otthont építenek az egyre gyarapodó közösség számára.',
        'A Magvető háza a település központjához közel, a temető és a vasút által határolt területen kapott helyet. Telepítésével és tömegformálásával próbáltuk elérni, hogy az épületegyüttes ezen a helyen is válhasson meghatározó településképi elemmé,  benne református hagyományaink modern átiratban jelenjenek meg, az idetartozóknak hátrahagyott településeik templomának képét, érzetét hordozza. Az épületegyüttest körülvevő alacsony fal szimbolikus, mégis fontos jele a profán és a szakrális világ elhatárolásának. Körbeveszi, óvja a benne fejlődő „magokat”, a templom, illetve a parókia épületét. A mennyezet a gyülekezet tagjainak származási helyén álló kilenc ősi templom kilenc-kilenc festett kazettájának fotóiból készült. A dísztelen, fehér falak puritánsága a református hagyományt követi, a fények játéka folyamatosan át és átformálja a teret.'],
        en: ['The majority of the Reformed people of Csömör moved to the settlement near Budapest from across the border. In 2013 they decided to build a church and a congregational home for the growing community.',
        'The Church is located close to the centre of the village, bordered by the cemetery and the railway. By its installation and massing, we tried to make the building complex a dominant element of the settlement\'s landscape, a modern reinterpretation of our Reformed traditions, a church that would give the people of the area the image and feel of the settlements they left behind. The low wall surrounding the complex is a symbolic yet important sign of the separation between the profane and the sacred. It surrounds and protects the \'seeds\' that grow within it, the church or parish building. The ceiling is made from photographs of nine painted cassettes of the nine ancient churches where the members of the congregation originated. The unadorned, white walls are purist in the Reformed tradition, the play of lights constantly transforming and transforming the space.']
      },
      additionalInfo: {
        hu: ['Berzsák Zoltán, Konyha Katalin, Rácz Noémi, Csintalan Csongor, Nyikos László\n' + '\n' + 'Csömör\n' + '\n' + '2020',
        'Hajdú József és Füle Tamás fotói'],
        en: ['Zoltán Berzsák, Katalin Konyha, Noémi Rácz, Csongor Csintalan, László Nyikos\n' + '\n' + 'Csömör\n' + '\n' + '2020',
        'Photographs of József Hajdú and Tamás Füle']
      },
      images: ['csomor-1', "csomor-2"]
    },
    {
      slug: 'csipkebokor-kindergatden',
      name: {
        hu: 'CSIPKEBOKOR ÓVODA',
        en: 'CSIPKEBOKOR KINDERGARTEN'
      },
      gridShort: {
        hu: 'Budapest-Fasori Református Kollégium Csipkebokor Óvodája',
        en: 'Budapest-Fasor Reformed College Csipkebokor Kindergarten'
      },
      shortDescription: {
        hu: 'Budapest-Fasori Református Kollégium Csipkebokor Óvodája',
        en: 'Budapest-Fasori Reformed College Csipkebokor Kindergarten'
      },
      longDescription: {
        hu: ['A Fasori Református Egyházközség óvodájának egy társasház nagyobb földszinti lakása szolgált otthonul egy évtizeden keresztül. Az iskola kiköltözésével a templom udvarán lévő, 1926-ban átadott Julianna iskola épülete megüresedett. Kézenfekvőnek tűnt, hogy itt alakítsunk ki új otthont az óvoda számára. Az épület azonban korent sem látszott alaklamasnak az új funkcióra. Hosszas vizsgálódás után, a Megrendelő feltétlen bizalmát élvezve döntöttünk amellett, hogy az épületet a gyülekezet, az iskola és az óvoda számára egyaránt használhatóvá tesszük.',
        'A földszint terei közös haszálatban maradtak, az emeleti szintekre az óvodai funkciók kerültek, az alagsoron a gyülekezet ifjúsága és az óvoda osztozik. Az épület eredeti megjelenését megtartottuk, szükséges kiegészítését kortárs elemekkel, de az épület funkciójához és a környezethez illeszkedő visszafogottsággal kezeltük.'],
        en: ['The kindergarten of the Reformed Church of Fasori served as its home for a decade in a larger ground floor apartment of an apartment building. With the school moving out, the Julianna school building in the church yard, which was opened in 1926, became vacant. It seemed obvious that we would create a new home for the kindergarten here. However, the building did not seem suitable for the new function at all. After a long investigation, enjoying the unconditional trust of the Client, we decided to make the building usable for the congregation, the school and the kindergarten.',
        'The ground floor spaces remained in common use, the upper floors were used for kindergarten functions, and the basement is shared by the youth of the congregation and the kindergarten. We retained the original appearance of the building, adding the necessary additions with contemporary elements, but with restraint that matched the function of the building and the environment.']
      },
      additionalInfo: {
        hu: ['Berzsák Zoltán, Csintalan Csongor, Konyha Katalin, Rácz Noémi\n' + '\n' + 'Budapest, VII.\n' + '\n' + '2017'],
        en: ['Zoltán Berzsák, Csongor Csintalan, Katalin Konyha, Noémi Rácz\n' + '\n' + 'Budapest\n' + '\n' + '2017']
      },
      images: ['fasor-1', 'fasor-2']
    },
    {
      slug: 'bicske-swimming-facility',
      name: {
        hu: 'BICSKEI USZODA',
        en: 'BICSKE SWIMMING FACILITY'
      },
      gridShort: {
        hu: 'Bicskei Tanuszoda és bővítése',
        en: 'Bicske Swimming Facility and its expansion'
      },
      shortDescription: {
        hu: 'Bicskei Tanuszoda',
        en: 'Bicske Swimming Facility'
      },
      longDescription: {
        hu: ['Az épület tervezését és megvalósítását a tanuszoda-program keretében, a Kerex Kft.-vel közösen, pályázati úton nyertük el. Komoly kihívást jelentett, hogy a terület Bicske legmélyebben fekvő, mocsaras területe, melyet sokáig szemétlerakónak is használtak.',
        'Az épület tervezésénél – környezetrendezési terv hiányában - környezetének hosszú távú kialakítását is végig kellett gondolnunk. A rendelkezésre álló anyagiak minimál megoldásokat követeltek, amelyeket maximálisan igyekeztünk az épület előnyére fordítani. A belső térben a fényes és matt fehér felületek uralkodnak, melyet a medencék kékje, a pezsgőmedencék zöldje és az fa elemek ellenpontoznak.',
        'Az uszoda 2009. augusztus 20-tól áll a közönség rendelkezésére. 2015-ben a megnövekedett igények kiszolgálására az uszoda kibővítését terveztük, mely a meglévő medencéket kiegészítő strandot, új öltözőblokkokat és vízilabda medencét foglalt magában.'],
        en: ['\n' +
        'The design and construction of the building were carried out within the framework of the school swimming pool program, in cooperation with Kerex Ltd, which was awarded through a tender. A major challenge was that the site is the deepest, swampiest area of Bicske, which was also used as a landfill for a long time.',
        'In the absence of an environmental plan, the design of the building also had to take into account the long-term development of its surroundings. The availability of funds required minimal solutions, which we tried to maximize to the benefit of the building. The interior is dominated by glossy and matt-white finishes, contrasted by the blue of the pools, the green of the hot tubs and the wooden elements.',
        'The swimming pool has been open to the public since 20 August 2009. In 2015, to cope with increased demand, we planned an extension to the pool, including a beach to complement the existing pools, new changing blocks and a water polo pool.']
      },
      additionalInfo: {
        hu: ['Berzsák Zoltán, Mravik Csaba, Konyha Katalin\n' + '\n' + 'Bicske\n' + '\n' + '2009'],
        en: ['Zoltán Berzsák, Csaba Mravik, Katalin Konyha\n' + '\n' + 'Bicske\n' + '\n' + '2009']
      },
      images: ['bicske-1', 'bicske-2']
    },
    {
      slug: 'keresztur-restaurant-office',
      name: {
        hu: 'RÉZHÁZ',
        en: 'COPPER HOUSE'
      },
      gridShort: {
        hu: 'Keresztúr Étterem és Irodaépület',
        en: 'Keresztúr restaurant and office building'
      },
      shortDescription: {
        hu: 'Keresztúr Étterem és Irodaépület',
        en: 'Keresztúr Restaurant and Office Building'
      },
      longDescription: {
        hu: ['A Preisich Gábor által tervezett Polgármesteri Hivatal bővítéseként létesülő épület a szomszédos Fuchs Kastély parkjában áll, az ottani fák ölelésében. Az épület átmenetet képez a kastélypark és a szikár modernista tömb között.',
        'Az étterem vizuálisan és fizikailag egyaránt megnyílik a park felé, annak részévé válik. A réz folyamatosan változó színe és minősége élő szövetként kapcsolódik a Hivatal tégla burkolatos tömegéhez. Az épület része a főtér és környéke megújítási koncepciójának. 2011-ben a „European Copper in Architecture Award 15” keretében az épület kiállításra került Brüsszelben.'],
        en: ['The building, which is an extension of the Mayor\'s Office designed by Gábor Preisich, stands in the park of the neighboring Fuchs Castle, embraced by the trees there. The building forms a transition between the castle park and the lean modernist block.',
        'The restaurant opens up to the park both visually and physically, becoming a part of it. The constantly changing colour and quality of the copper is connected to the brick-clad mass of the Office as a living tissue. The building is part of the renewal concept of the main square and its surroundings. In 2011, the building was exhibited in Brussels as part of the “European Copper in Architecture Award 15”.']
      },
      additionalInfo: {
        hu: ['Berzsák Zoltán, Konyha Katalin, Mravik Csaba, Tóth Balázs, Bálint Sándor\n' + '\n' + 'Budapest, XVII.\n' + '\n' + '2009',
        'Hajdú József fotói'],
        en: ['Zoltán Berzsák, Csaba Mravik, Katalin Konyha, Balázs Tóth, Sándor Bálint\n' + '\n' + 'Budapest, 17th district.\n' + '\n' + '2009',
        'Photographs of József Hajdú']
      },
      images: ['copperhouse-1', 'copperhouse-2']
    },
    {
      slug: 'pesthidegkuti-church',
      name: {
        hu: 'PESTHIDEGKÚTI TEMPLOM',
        en: 'PESTHIDEGKÚT CHURCH'
      },
      gridShort: {
        hu: 'Pesthidegkúti Református Templom és Gyülekezeti Központ',
        en: 'Pesthidegkút Reformed Church and Community Center'
      },
      shortDescription: {
        hu: 'Pesthidegkúti Református Templom és Gyülekezeti Központ',
        en: 'Pesthidegkút Reformed Church and Congregational Center'
      },
      longDescription: {
        hu: ['„…épüljetek fel lelki házzá…” /1.Péter 2:5/',
        'A templom számunkra a közösség találkozóhelye. A gyülekezet, a közösség és a személyes találkozás helye és ideje egymással és együtt Istennel. A templom ennek a kerete. Ha nincs találkozás, ha nincs gyülekezet, akkor templom sincs. A kövek, az építőelemek mi magunk vagyunk, akiket Isten formált úgy, hogy beleilleszkedjünk az Ő „építményébe”. Mindenkinek – mint egy épületben – meg van a saját helye tálentumai, hite, odaszánása szerint.',
        'A parkszerű környezetbe illesztett épület védett belső udvart ölel körül. A terepadottságait kihasználva a az utcáról megközalíthető felső szinten a templom és a lelkészi hivatal terei, a kert szintjén a gyülekezeti élet terei kaptak helyet. A szinteket átnyitott, szellős fénnyel teli terek teszik otthonossá.'],
        en: ['']
      },
      additionalInfo: {
        hu: ['Berzsák Zoltán, Balogh Eszter, Eperjesi Blanka, Monori-Szabó Edit, Puskás Levente, Szvák Dorottya\n' + '\n' + 'Budapest, II. ker.\n' + '\n' + '2023- (építés alatt)'],
        en: ['Zoltán Berzsák, Eszter Balogh, Blanka Eperjesi, Edit Monori-Szabó, Levente Puskas, Dorottya Szvák\n' + '\n' + 'Budapest, 2nd district.\n' + '\n' + '2023- (under construction)']
      },
      images: ['pesthidegkut-1', 'pesthidegkut-2']
    },
    {
      slug: 'hetszinvirag-kindergarten',
      name: {
        hu: 'HÉTSZÍNVIRÁG ÓVODA',
        en: 'HÉTSZÍNVIRÁG KINDERGARTEN'
      },
      gridShort: {
        hu: 'Hétszínvirág Óvoda Tagóvodája',
        en: 'Hétszínvirág Kindergarten and its expansion'
      },
      shortDescription: {
        hu: 'Hétszínvirág Óvoda Tagóvodája',
        en: 'Hétszínvirág Kindergarten'
      },
      longDescription: {
        hu: ['A XVII. kerület egyik új lakóparkjában épült fel ez a három foglalkoztatós új óvoda. Az épület kialakítását nagyban meghatározta a rendelkezésre álló minimális költségvetés, melyet maximálisan a gyerekek javára igyekeztünk fordítani. Az épületbe a szűkös keretek ellenére is több megújuló, illetve korszerű, energiatakarékos rendszert integráltunk.'],
        en: ['This new nursery school with three places of work was built in a new residential area in the XVII district. The design of the building was largely determined by the minimum budget available, which we tried to maximize for the benefit of the children. Despite the limited space available, we integrated a number of renewable and modern energy-saving systems.']
      },
      additionalInfo: {
        hu: ['Berzsák Zoltán, Konyha Katalin, Mravik Csaba\n' + '\n' + 'Budapest, XVII. ker.\n' + '\n' + '2009'],
        en: ['Zoltán Berzsák, Katalin Konyha, Csaba Mravik\n' + '\n' + 'Budapest, 17th district.\n' + '\n' + '2009']
      },
      images: ['hetszinvirag-1', 'hetszinvirag-2']
    },
    {
      slug: 'fasori-church',
      name: {
        hu: 'FASORI TEMPLOM',
        en: 'FASORI CHURCH'
      },
      gridShort: {
        hu: 'Budapest-Fasori Református Templom felújítása',
        en: 'Budapest-Fasor Reformed Church - renovation'
      },
      shortDescription: {
        hu: 'Budapest-Fasori Református Templom felújítása',
        en: 'Budapest-Fasori Reformed Church renovation'
      },
      longDescription: {
        hu: ['Árkay Aladár 1913-ban épült csodálatos református templomának utolsó felújítására az 1980-as években került sor. Komoly, éveken át tartó előkészítések után kerülhetett sor az épület mostani, átfogó felújítására, mely több szakaszban valósult meg. Az építési bizottságban kialakított fejlesztési koncepció mentén 2012-ben terveink szerint valósult meg az épület kertje. A jelenlegi felújítás első lépése a templom külsejének műemléki felújítása volt, mely a Grafit Műterem tervei szerint valósult meg. Irodánk a templom belső terének műemléki felújítása mellett a szükséges közösségi funkciók kialakítását, a lakások átalakítását, a teljes épület korszerűsítésének terveit készítette.',
        'A templom terének aprólékos restaurálásán túl a tér korszerű megvilágítása, az audiovizuális eszközök beépítése, új fűtési és hűtési rendszerek integrálása, az eredeti téri helyzetek visszaállítása, valamint funkcionális szempontból szükséges átalakítások, kiegészítések készültek el. Mindezt úgy terveztük elkészíteni, hogy mindezek a változások belesímuljanak ebbe a remekműbe. Az épület egyéb tereinek átrendezése szükséges volt újabb közösségi terek megnyerésére, melyeket egy új, közösségi használatú télikert fog össze.'],
        en: ['The last renovation of Aladár Árkay\'s magnificent Reformed church, built in 1913, took place in the 1980s. After years of serious preparation, the current comprehensive renovation of the building was carried out in several stages. In accordance with the development concept formulated by the building committee, the garden of the building was completed in 2012 according to our plans. The first step in the current renovation was the restoration of the exterior of the church, which was carried out according to the plans of Grafit Studio. In addition to the restoration of the interior of the church, our office prepared plans for the necessary community functions, the conversion of the apartments, and the modernization of the entire building.',
        'In addition to the meticulous restoration of the church interior, modern lighting, the installation of audiovisual equipment, the integration of new heating and cooling systems, the restoration of the original spatial layout, and the necessary functional alterations and additions were completed. We planned all this so that these changes would blend into this masterpiece. The other spaces in the building needed to be rearranged to create new community spaces, which are connected by a new winter garden for community use.']
      },
      additionalInfo: {
        hu: ['Belső tér és kert: Berzsák Zoltán, Berzsák Barna, Eperjesi Blanka, Gerák Miklós\n' + '\n' + 'Külső: Grafit Építész Műterem Kft.\n' + '\n' + 'Budapest, VII. ker.\n' + '\n' + '2024',
        'Hajdú József fotói'],
        en: ['Interior and garden: Zoltán Berzsák, Barna Berzsák, Blanka Eperjesi, Miklós Gerák\n' + '\n' + 'Exterior renovation: Grafit Ltd.\n' + '\n' + 'Budapest, VII. district.\n' + '\n' + '2024',
        'Photos by József Hajdú']
      },
      images: ['fasor-1', 'fasor-2']
    },
    {
      slug: 'family-house-3',
      name: {
        hu: 'CSALÁDI HÁZ',
        en: 'FAMILY HOUSE'
      },
      gridShort: {
        hu: 'Kakukkhegyi úti családi ház',
        en: 'Kakukkhegyi road family house'
      },
      shortDescription: {
        hu: 'Családi ház\n' + 'Kakukkhegyi út',
        en: 'Family house\n' + 'Kakukkhegyi Road'
      },
      longDescription: {
        hu: ['Több generációs család számára terveztük egy remek kilátással rendelkező telekre ezt a kísérletező családi házat. Az épület közös terei a összefogják egymással, a hozzájuk kapcsolódó önállóan is egységes lakóblokkok szeparálják egymástól a család tagjainak életét. A telek lejtését kihasználva az alsó szinten kaptak helyet a kiszolgáló helyiségek, a felső szintről élvezhető a panoráma, ugyanakkor a lejtésviszonyokat kihasználva intim kertkapcsolattal is rendelkezik valamennyi közös tés és lakóegység. Időtálló, visszafogott anyaghasználat és tömegképzés, árnyékoló szereppel és átmeneti térként is funkcionáló fedett teraszok fűzik egységessé az épület tömegét.'],
        en: ['We designed this experimental family house for a multi-generational family on a plot with a great view. The common spaces of the building unite each other, while the independently unified residential blocks connected to them separate the lives of the family members from each other. Taking advantage of the slope of the plot, the service rooms were located on the lower level, the panorama can be enjoyed from the upper level, and at the same time, taking advantage of the slope conditions, all common areas and residential units have an intimate garden connection. Timeless, restrained use of materials and massing, covered terraces that also function as shading and transitional spaces, unify the mass of the building.']
      },
      additionalInfo: {
        hu: ['Berzsák Zoltán, Szvák Dorottya\n' + '\n' + 'Budapest, XI. ker.\n' + '\n' + '2023'],
        en: ['Zoltán Berzsák, Dorottya Szvák\n' + '\n' + 'Budapest, 11th district.\n' + '\n' + '2023']
      },
      images: ['kakukk-1', 'kakukk-2']
    },
    {
      slug: 'tihany-granary',
      name: {
        hu: 'TIHANYI MAGTÁR',
        en: 'TIHANY GRANARY'
      },
      gridShort: {
        hu: 'Tihanyi uradalmi magtár',
        en: 'Tihany manor granary'
      },
      shortDescription: {
        hu: 'Tihanyi Uradalmi Magtár',
        en: 'Tihany Manor Granary'
      },
      longDescription: {
        hu: ['Az 1720-as években Grasso Villebrand és Lécs Ágoston tihanyi apátok megrendelésére az Tihanyi Apátság barokk kori átépítése idején épült „granárium”, uradalmi magtár egyszerű funkciója ellenére nagy történelmi múlttal rendelkezik. A kor ipari épülete nagy magassággal, vastag falakkal készült, benne fa szerkezetű, sűsű alátámasztott fafödémekek tárolták az igen nagy mennyiségű gabonát. Az épület fennmaradt elemei közül kiemelkedő a barokk fedélszerkezet, a zömök falak, párkányzat, valamint a jellegzetes kicsi nyílások.',
        'A II. világháború utáni államosítást követően sorsa megpecsételődni látszott. A 60-as években azonban a romos épület megmentése érdekében Callmeyer Ferenc és Dr. Tóth Kálmán nagyon igényes tervei szerint mozivá alakították. Az épületbe új födémek és hozzá kapcsolódó bővítmények készültek, melyet a következő évtizedekben felismerhetetlenségig átalakítottak. Az épületből az apátság környezetének nagyszabású átalakításával összefüggésben a rendezvények háttereként szolgáló kulturális és turisztikai központot alakítottunk ki. Az épület műemléki felújítása mellett a belső térben a korabeli magtárakat megidéző fa szerkezetű födémet és bútorként a térbe állított közlekedő rendszert terveztünk.'],
        en: ['The “granarium”, built in the 1720s during the Baroque reconstruction of the Tihany Abbey by the order of the abbots of Grasso Villebrand and Lécs Ágoston during the period of the Tihany Abbey’s reconstruction, has a long historical past despite its simple function as a manorial granary. The industrial building of the time was made with high ceilings and thick walls, and the large quantities of grain were stored in wooden structures and thickly supported wooden ceilings. The surviving elements of the building include the Baroque roof structure, the squat walls, the cornice, and the characteristic small openings.',
        'After the nationalization after World War II, its fate seemed to be sealed. In the 1960s, however, in order to save the dilapidated building, it was converted into a cinema according to the very demanding plans of Ferenc Callmeyer and Dr. Kálmán Tóth. New ceilings and related extensions were made to the building, which was transformed beyond recognition in the following decades. In connection with the large-scale transformation of the abbey\'s surroundings, we developed the building into a cultural and tourist center serving as a backdrop for events. In addition to the historic renovation of the building, we designed a wooden ceiling in the interior reminiscent of the granaries of the time and a transportation system installed as furniture in the space.']
      },
      additionalInfo: {
        hu: ['Berzsák Zoltán, Csintalan Csongor, Konyha Katalin, Szvák Dorottya, Rácz Noémi\n' + '\n' + 'Együttműködés: Szakra Stúdió Kft.\n' + '\n' + 'Tihany\n' + '\n' + '2018'],
        en: ['Zoltán Berzsák, Csongor Csintalan, Katalin Konyha, Dorottya Szvák, Noémi Rácz\n' + '\n' + 'Collaboration: Szakra Studio Ltd.\n' + '\n' + 'Tihany\n' + '\n' + '2018']
      },
      images: ['tihany-1', 'tihany-2']
    },
    {
      slug: 'family-house-2',
      name: {
        hu: 'CSALÁDI HÁZ',
        en: 'FAMILY HOUSE'
      },
      gridShort: {
        hu: 'Veresegyházi családi ház',
        en: 'Veresegyház family house'
      },
      shortDescription: {
        hu: 'Családi ház\n' + 'Veresegyháza',
        en: 'Family house\n' + 'Veresegyháza'
      },
      longDescription: {
        hu: ['Kedves, igényes régi megrendelők új háza. Remek adottságú telek. Erős lejtés, gyönyörű kilátással. Érkezés a felső szinten - az emeleten, lakószinten a panorámára nyíló galériára. Alatta helyezkedik el a nappali blokk teljes kertkapcsolattal. A két, egymásra merőleges, oromfalas épülettömeg a terepre illeszkedik, a pala és kőburkolatok'],
        en: ['A new house for a nice, demanding old client. A plot with great features. A steep slope, with a beautiful view. Arrival on the upper level - on the first floor, on the residential level, to the gallery opening onto the panorama. Below is the living block with full garden access. The two, perpendicular, gabled building masses fit into the terrain, the slate and stone coverings']
      },
      additionalInfo: {
        hu: ['Berzsák Zoltán, Konyha Katalin, Rácz Noémi\n' + '\n' + 'Veresegyháza\n' + '\n' + '2016'],
        en: ['Zoltán Berzsák, Katalin Konyha, Noémi Rácz\n' + '\n' + 'Veresegyháza\n' + '\n' + '2016']
      },
      images: ['veres-1', 'veers-2']
    },
    {
      slug: 'family-house-1',
      name: {
        hu: 'CSALÁDI HÁZ',
        en: 'FAMILY HOUSE'
      },
      gridShort: {
        hu: 'Pilisszentlászlói családi ház',
        en: 'Pilisszentlászló family house'
      },
      shortDescription: {
        hu: 'Családi ház\n' + 'Pilisszentlászló',
        en: 'Family house\n' + 'Pilisszentlászló'
      },
      longDescription: {
        hu: ['Gyönyörű természeti környezet. Erdő, domboldal, sűrű növényzet, jó levegő. A nagy család jelen- és jövőbeni életének kerete. Az épület kialakítása magában hordozza a gyermekek és szülők folyamatos változó közös és külön életterének kialakítási lehetőségét. Egyszerű tömegével, kialakításával belesímul a tájba. Az átmeneti terek biztosítják a közvetlen környezeti kapcsolatot.'],
        en: ['Beautiful natural surroundings. Forest, hillsides, dense vegetation, fresh air. The framework for the present and future life of a large family. The design of the building allows for the continuous transformation of the shared and separate living spaces of children and parents. Its simple mass and design blend into the landscape. Transitional spaces ensure direct contact with the environment.']
      },
      additionalInfo: {
        hu: ['Berzsák Zoltán, Berzsák Barna, Szvák Dorottya\n' + '\n' + 'Pilisszentlászló\n' + '\n' + '2023'],
        en: ['Zoltán Berzsák, Barna Berzsák, Dorottya Szvák\n' + '\n' + 'Pilisszentlászló\n' + '\n' + '2023']
      },
      images: ['pilis-1', 'pilis-2']
    },
    {
      slug: 'pecsely-chapel',
      name: {
        hu: 'PÉCSELY KÁPOLNA',
        en: 'PÉCSELY CHAPEL'
      },
      gridShort: {
        hu: 'Pécsely családi kápolna - meghívásos tervpályázat',
        en: 'Pécsely family chapel - invitational tender'
      },
      shortDescription: {
        hu: 'Pécsely Családi Kápolna meghívásos tervpályázat',
        en: 'Pécsely Family Chapel invitational tender'
      },
      longDescription: {
        hu: ['\n' +
        '„Tanúul hívom ma ellenetek az eget és a földet, mert elétek adtam az életet és a halált, az áldást és az átkot. Válaszd hát az életet, hogy élhess te és utódaid is!” /5.Mózes 30,19/',
        'Élet és halál – áldás és átok. Ez a kápolna végigkíséri az ember földi útját a születéstől a keresztelésén, a házasságkötésen, családi és egyházi ünnepeken keresztül a földi halálig. Ez lenne a vége? A XIV. stáció? Pályázati tervünk erre, a mindannyiunkat feszegető kérdésre igyekszik választ adni. Két anyag – a helyi kő, a korábbi présház anyaga az örökkévalóság, a vas, a hajdani pince ajtaja, mely erősnek látszik ugyan, de az idő megemészti. A felvezetés az emberré lett Isten keresztútján halad. A szimbolikus harangtorony alatt, a meglévő pincéből kialakításra kerülő családi sírbolt és a kápolna között léphetünk az épületbe. A kápolna egyszerű, présházakat idéző tömege kifordul a pince tengelyéből. Belépve az épületbe balra a sírbolt, jobbra a kápolna tere, mely szemben, a szentélynél megnyílik a tó felé. Kívül vas kereszt, mely hirdeti Jézus Krisztus feltámadását.',
        '„Jézus ekkor ezt mondta neki: Én vagyok a feltámadás és az élet, aki hisz énbennem, ha meghal is, él; és aki él, és hisz énbennem, az nem hal meg soha. Hiszed-e ezt?” /Jn. 11,25-26/'],
        en: ['"I call heaven and earth to witness against you today, for I have set before you life and death, blessing and curse. Choose life, then, so that you and your descendants may live!" /Deuteronomy 30:19/',
          'Life and death – blessing and curse. This chapel accompanies man\'s earthly journey from birth through baptism, marriage, family and church celebrations to earthly death. Is this the end? The 14th station? Our project plan seeks to answer this question that preoccupies us all. Two materials – local stone, the material of the former wine press house, symbolizes eternity, while iron, the door of the former cellar, appears strong but is consumed by time. The introduction follows the path of God who became man. Under the symbolic bell tower, we can enter the building between the family tomb, which will be created from the existing cellar, and the chapel. The simple chapel, reminiscent of a wine press house, turns away from the axis of the cellar. Upon entering the building, the tomb is on the left and the chapel is on the right, which opens up towards the lake opposite the sanctuary. Outside, an iron cross proclaims the resurrection of Jesus Christ.',
          '"Jesus said to her, \'I am the resurrection and the life. He who believes in me will live, even though he dies; and whoever lives and believes in me will never die. Do you believe this?\'" (John 11:25-26)']
      },
      additionalInfo: {
        hu: ['Berzsák Zoltán, Balogh Eszter, Monori-Szabó Edit, Puskás Levente, Szvák Dorottya, Berzsák Bulcsú\n' + '\n' + 'Pécsely\n' + '\n' + '2025'],
        en: ['Zoltán Berzsák, Eszter Balogh, Edit Monori-Szabó, Levente Puskas, Dorottya Szvák, Berzák Bulcsú\n' + '\n' + 'Pécsely\n' + '\n' + '2025']
      },
      images: ['pecsely-1', 'pecsely-2']
    },
    {
      slug: '',
      name: {
        hu: '',
        en: ''
      },
      gridShort: {
        hu: '',
        en: ''
      },
      shortDescription: {
        hu: '',
        en: ''
      },
      longDescription: {
        hu: [''],
        en: ['']
      },
      additionalInfo: {
        hu: [''],
        en: ['']
      },
      images: ['']
    },
    {
      slug: '',
      name: {
        hu: '',
        en: ''
      },
      gridShort: {
        hu: '',
        en: ''
      },
      shortDescription: {
        hu: '',
        en: ''
      },
      longDescription: {
        hu: [''],
        en: ['']
      },
      additionalInfo: {
        hu: [''],
        en: ['']
      },
      images: ['']
    },
    {
      slug: '',
      name: {
        hu: '',
        en: ''
      },
      gridShort: {
        hu: '',
        en: ''
      },
      shortDescription: {
        hu: '',
        en: ''
      },
      longDescription: {
        hu: [''],
        en: ['']
      },
      additionalInfo: {
        hu: [''],
        en: ['']
      },
      images: ['']
    },
    {
      slug: '',
      name: {
        hu: '',
        en: ''
      },
      gridShort: {
        hu: '',
        en: ''
      },
      shortDescription: {
        hu: '',
        en: ''
      },
      longDescription: {
        hu: [''],
        en: ['']
      },
      additionalInfo: {
        hu: [''],
        en: ['']
      },
      images: ['']
    },
    {
      slug: '',
      name: {
        hu: '',
        en: ''
      },
      gridShort: {
        hu: '',
        en: ''
      },
      shortDescription: {
        hu: '',
        en: ''
      },
      longDescription: {
        hu: [''],
        en: ['']
      },
      additionalInfo: {
        hu: [''],
        en: ['']
      },
      images: ['']
    },
    {
      slug: '',
      name: {
        hu: '',
        en: ''
      },
      gridShort: {
        hu: '',
        en: ''
      },
      shortDescription: {
        hu: '',
        en: ''
      },
      longDescription: {
        hu: [''],
        en: ['']
      },
      additionalInfo: {
        hu: [''],
        en: ['']
      },
      images: ['']
    },
    {
      slug: '',
      name: {
        hu: '',
        en: ''
      },
      gridShort: {
        hu: '',
        en: ''
      },
      shortDescription: {
        hu: '',
        en: ''
      },
      longDescription: {
        hu: [''],
        en: ['']
      },
      additionalInfo: {
        hu: [''],
        en: ['']
      },
      images: ['']
    },
    {
      slug: '',
      name: {
        hu: '',
        en: ''
      },
      gridShort: {
        hu: '',
        en: ''
      },
      shortDescription: {
        hu: '',
        en: ''
      },
      longDescription: {
        hu: [''],
        en: ['']
      },
      additionalInfo: {
        hu: [''],
        en: ['']
      },
      images: ['']
    },
    {
      slug: '',
      name: {
        hu: '',
        en: ''
      },
      gridShort: {
        hu: '',
        en: ''
      },
      shortDescription: {
        hu: '',
        en: ''
      },
      longDescription: {
        hu: [''],
        en: ['']
      },
      additionalInfo: {
        hu: [''],
        en: ['']
      },
      images: ['']
    }
  ];

  getProjects(): ProjectModel[] {
    return this.projects;
  }
}
