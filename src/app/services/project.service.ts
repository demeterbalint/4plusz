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
        hu: ['Berzsák Zoltán, Konyha Katalin,\n' + '\n' + 'Stanisewszki Andrea\n' + '\n' + 'Budapest, IV. ker.\n' + '\n' + '2015',
        'Albertszki Tamás fotói'],
        en: ['Zoltán Berzsák, Katalin Konyha,\n' + '\n' + 'Andrea Stanisewszki\n' + '\n' + 'Budapest, 4th district.\n' + '\n' + '2015',
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
        en: ['Dunamelléki Reformed Church District Headquarters and Conference Centre\n' + 'Zoltán Berzsák, Barna Berzsák, Csongor Csintalan, Blanka Eperjesi, Katalin Konyha, Nóémi Rácz, Dorottya Szvák,\n' + '\n' + 'Esther Zacher\n' + '\n' + 'Budapest\n' + '\n' + '2022',
        'Photographs of József Hajdú, Zsolt Hlinka and Gábor Mártonffy']
      },
      images: ['raday-1', 'raday-2']
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
