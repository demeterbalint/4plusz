import {PublicationModel} from '../models/publication-model';
import {imageMap} from '../image-map';

export const PUBLICATIONS_DATA: PublicationModel[] = [
  {
    imageURL: imageMap['fasor-church'].find(image => image.includes('fasor-press'))!,
    link: 'https://meonline.hu/aktualis/tema/meg-a-templomnal-is-nagyobb/?fbclid=IwVERTSAOBfxNleHRuA2FlbQIxMABzcnRjBmFwcF9pZAwzNTA2ODU1MzE3MjgAAR7Kabvxdt294UxkBYK4fQ_-88U_cnzoupjPu5mjHowYdlrlgBz7WiPXA_bVrw_aem_3Jy9TaJqiaA3LkexQG6LnA',
    title: {
      hu: '"Fasori református templom műemléki felújítása"',
      en: '"Renovation of the historical Reformed Church in Fasor"'
    },
    site: 'meonline.hu',
    snippet: {
      hu: '"Ezért megbízták Berzsák Zoltánt, a mostani műemléki felújítás egyik építészét, aki egy kertet tervezett, és azon keresztül oldotta meg a szintkülönbség áthidalását."',
      en: '"That is why they commissioned Zoltán Berzsák, one of the architects involved in the current renovation of the historic building, who designed a garden to bridge the difference in levels."'
    }
  },
  {
    imageURL: 'assets/portraits/berzsak-kultura.jpg',
    link: 'https://kultura.hu/a-templomtereket-szemelyesse-ugyanakkor-szakralis-terkent-is-erzekelhetove-kell-tenni/?fbclid=IwY2xjawN9oK5leHRuA2FlbQIxMQBzcnRjBmFwcF9pZBAyMjIwMzkxNzg4MjAwODkyAAEeTUeZEvDcmmaaGQyCQcM_0D4btwk3_QGFz-fIpVvhrzmJzpuJGFnQphB1nyc_aem_HquDtCghs8bup_iOixSZ3Q',
    title: {
      hu: '"A templomtereket személyessé, ugyanakkor szakrális térként is érzékelhetővé kell tenni"',
      en: '"Church spaces must be made personal, but also perceptible as sacred spaces"'
    },
    site: 'kultura.hu',
    snippet: {
      hu: '"Egy templom megtervezésénél az adott közösség identitását kell épületbe fogalmazni. Az, amit gondolnak és ki akarnak fejezni Istenről, hogyan szűrődik át rajtam, és ehhez milyen felső támogatást kapok. Berzsák Zoltán Pro Architectura-díjas építésszel a templomépítészetről, illetve az épületek értékmegőrző és többletteremtő felújításáról beszélgettünk."',
      en: '"When designing a church, the identity of the given community must be expressed in a building. How does what they think and want to express about God filter through me, and what kind of support do I receive from above? We talked about church architecture and the value-preserving and value-creating renovation of buildings with Pro Architectura award-winning architect Zoltán Berzsák."'
    }
  },
  {
    imageURL: imageMap['budaors-church'].find(image => image.includes('budaors-home'))!,
    link: 'https://architizer.com/projects/house-of-gardener/?fbclid=IwY2xjawN9oKlleHRuA2FlbQIxMABicmlkETFPZFZsMFBsT2hFR3JDdmpsc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHlP5GnQWr-_cfLnmK-W0iJ6beoHyGZH6uacbdzshJ7ppWrsN74sZWJoLK1na_aem_Q9P8yHWtNM_k0jMLDyl3bQ',
    title: {
      hu: '"House of Gardener - Reformed Church and Congregation Home"',
      en: '"House of Gardener - Reformed Church and Congregation Home"'
    },
    site: 'architizer.com',
    snippet: {
      hu: '"We envisioned an opened, inviting building to convey that you can come in here. Since it was not possible to create a free space in front of the building, as was the custom in the past, we moved this space inside."',
      en: '"We envisioned an opened, inviting building to convey that you can come in here. Since it was not possible to create a free space in front of the building, as was the custom in the past, we moved this space inside."'
    }
  },
  {
    imageURL: imageMap['tihany-granary'].find(image => image.includes('tihany-historical'))!,
    link: 'https://epiteszforum.hu/enyeszettol-a-diszkon-at-a-muzeumig--ot-magtar-ot-tortenet?fbclid=IwY2xjawN9neZleHRuA2FlbQIxMQBzcnRjBmFwcF9pZBAyMjIwMzkxNzg4MjAwODkyAAEe2gkB6RLYDUnY0Xj6NtwR0R-Zhu4OWZtCAF4qYCtd4ixeYVTjRwv3bdOMZYY_aem_4y0gk55VPgm7Ntgz--B9QA',
    title: {
      hu: '"Öt magtár, öt történet"',
      en: '"Five granary, five story"'
    },
    site: 'epiteszforum.hu',
    snippet: {
      hu: '"Tihany központjában a 19. század eleje óta áll a késő barokk apátsági magtár, ami az újkori szerepében immár bő fél évszázada a turizmust és kultúrát szolgálja."',
      en: '"The late Baroque abbey granary has stood in the center of Tihany since the early 19th century, serving tourism and culture in its modern role for over half a century."'
    }
  },
  {
    imageURL: imageMap['raday-house'].find(image => image.includes('09'))!,
    link: 'https://epiteszforum.hu/epitoipari-nivodij-2023?fbclid=IwY2xjawN9oLtleHRuA2FlbQIxMQBzcnRjBmFwcF9pZBAyMjIwMzkxNzg4MjAwODkyAAEebKh6f1DCScRa-1rCnfY3q9UYfzP9Bw_gmIOEBsgXA2fftJA-gPxR7PqcPZU_aem_1mZV6kXYd5R4ioGsouC24w',
    title: {
      hu: '"Nívódíjat kapott a Ráday-ház"',
      en: '"The Ráday House received an award for excellence"'
    },
    site: 'epiteszforum.hu',
    snippet: {
      hu: '"Az Építőipari Nívódíjakat december 7-én, az ÉVOSZ éves ünnepi közgyűlésén adták át. Hét kategóriában összesen 20 építményt ismertek el, valamint két elismerő oklevelet is kiosztottak."',
      en: '"The Construction Industry Awards were presented on December 7 at the annual general meeting of ÉVOSZ. A total of 20 buildings were recognized in seven categories, and two certificates of recognition were also awarded."'
    }
  },
  {
    imageURL: imageMap['raday-house'].find(image => image.includes('11'))!,
    link: 'https://archello.com/project/raday-house?fbclid=IwY2xjawN9oTRleHRuA2FlbQIxMABicmlkETFPZFZsMFBsT2hFR3JDdmpsc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHlzfexFeHpcv3WEjrvJ54cy1jJRcjrxIb7nR3qd9MoRKGJzhhe4GaRfjCTuu_aem_xi0ElkO4uqBMLxgcrCzvdg',
    title: {
      hu: '"Ráday - house"',
      en: '"Ráday - house"'
    },
    site: 'archello.com',
    snippet: {
      hu: '"In January 2019, a fire broke out in the Student Residence. It became clear later that the demolition of the dormitory annex and the functional rethinking of the building block were necessary."',
      en: '"In January 2019, a fire broke out in the Student Residence. It became clear later that the demolition of the dormitory annex and the functional rethinking of the building block were necessary."'
    }
  },
  {
    imageURL: imageMap['budaors-church'].find(image => image.includes('13'))!,
    link: 'https://archello.com/project/house-of-gardener-reformed-church-and-congregation-home?fbclid=IwY2xjawN9oUNleHRuA2FlbQIxMQBzcnRjBmFwcF9pZBAyMjIwMzkxNzg4MjAwODkyAAEeWr_2CqqmBk9Nwqt6lP6khWjMGohyddNVbbdYXEdwe7ydIRdSMg_C8Bm1V1I_aem_IMO0pKdGjfqre8b7y3mO2Q',
    title: {
      hu: '"House of Gardener - Reformed Church and Congregation Home"',
      en: '"House of Gardener - Reformed Church and Congregation Home"'
    },
    site: 'archello.com',
    snippet: {
      hu: '"The attention-grabbing and inviting but not ostentatious church was built on a long and narrow site"',
      en: '"The attention-grabbing and inviting but not ostentatious church was built on a long and narrow site"'
    }
  },
  {
    imageURL: imageMap['raday-house'].find(image => image.includes('raday-press'))!,
    link: 'https://epiteszforum.hu/ujjateremtes--a-reformatus-egyhaz-raday-utcai-puspoki-kozpontja-teologiai-kara-es-kollegiuma',
    title: {
      hu: '"Újjáteremtés"',
      en: '"Recreation"'
    },
    site: 'epiteszforum.hu',
    snippet: {
      hu: '"Az új kollégium pedig, miközben teljesíti a funkciójából adódó legmagasabb elvárásokat, a homlokzatán diadalmasan ragyogó hatalmas fénykeresztje révén új szellemi-művészi jellel gazdagítja a IX. kerület, egyúttal egész Budapest vizuális térképét.\nÉpítész egy munkán belül ennél többet nem tehet."',
      en: '"The new college, while fulfilling the highest expectations of its function, enriches the visual map of the IX. district, and at the same time of Budapest as a whole, with a new intellectual and artistic sign through its huge cross of light shining triumphantly on its façade.\nAn architect can do no more in a single work."'
    }
  },
  {
    imageURL: 'assets/portraits/berzsak-reformatus.jpg',
    link: 'https://reformatus.hu/egyhazunk/hirek/berzsak-zoltan-eptiesz-budaors-csomor-raday28/',
    title: {
      hu: '"Fontos az építés drámája"',
      en: '"The drama of building is important"'
    },
    site: 'reformatus.hu',
    snippet: {
      hu: '"A csömöri és a budaörsi templomok mind magukon viselik a tervező sajátos kézjegyét, és tükrözik a hozzáállását a fényhez, amely igazán egyedivé teszi a Dunamelléki Egyházkerület még éppen felújítás alatt álló budapesti Ráday utcai épületét is."',
      en: '"The churches in Csömör and Budaörs both bear the designer\'s unique signature and reflect his approach to light, which makes the building on Ráday Street in Budapest, which is still under renovation, truly unique."'
    }
  },
  {
    imageURL: imageMap['raday-house'].find(image => image.includes('02'))!,
    link: 'https://epiteszforum.hu/atadtak-az-ujjaepitett-raday-utcai-kollegiumot',
    title: {
      hu: 'Ráday utcai kollégium',
      en: 'Ráday street dormitory '
    },
    site: 'epiteszforum.hu',
    snippet: {
      hu: '"Átadták a budapesti Ráday utcában található, 2019 januárjában leégett református felsőoktatási kollégium helyén épült új kollégiumépületet és a vele egy épületegyüttesben található, megújult dunamelléki püspöki székházat és református teológiát"',
      en: '"The new dormitory building built on the site of the Reformed higher education college in Ráday Street, Budapest, which burnt down in January 2019, and the renewed Bishop\'s See and Reformed Theology of the Danube region, which is located in the same building complex, were inaugurated"'
    }
  },
  {
    imageURL: imageMap['raday-house'].find(image => image.includes('05'))!,
    link: 'https://meonline.hu/aktualis/tema/a-lelek-gyumolcsei/',
    title: {
      hu: '"A lélek gyümölcsei"',
      en: '"Fruits of the soul"'
    },
    site: 'meonline.hu',
    snippet: {
      hu: '"A szerénység bizonyítéka, hogy az épület megfelel az évszázadok során kialakult városszövetnek, és ezáltal a történeti múlt részévé válik."',
      en: '"It is a testament to its modesty that the building fits into the urban fabric that has developed over the centuries, thereby becoming part of the historical past."'
    }
  },
  {
    imageURL: imageMap['budaors-church'].find(image => image.includes('25'))!,
    link: 'https://epiteszforum.hu/hivogato-nyitottsag--reformatus-gyulekezeti-kozpont-budaorson',
    title: {
      hu: '"Hívogató nyitottság"',
      en: '"Inviting openness"'
    },
    site: 'epiteszforum.hu',
    snippet: {
      hu: '"A mellékutcában megbújó korábbi imaház helyett egy átlátható, karakteres modern épületegyüttes készült Berzsák Zoltán építész vezetésével – „A szőlősgazda háza" –, amely használóival együtt vállaltan a város felé nyitásra, a közösségépítésre fókuszál."',
      en: '"Instead of the former house of worship hidden in a side street, a transparent, characterful modern building complex was built under the leadership of architect Zoltán Berzsák – "The Vineyard Owner\'s House" – which, together with its users, focuses on opening up to the city and building community."'
    }
  },
  {
    imageURL: imageMap['budaors-church'].find(image => image.includes('05'))!,
    link: 'https://www.octogon.hu/epiteszet/ahol-ugyanis-ketten-vagy-harman/',
    title: {
      hu: '"Ahol ugyanis ketten vagy hárman..."',
      en: '"For where two or three..."'
    },
    site: 'octogon.hu',
    snippet: {
      hu: '"A fehérre festett látszótégla használatán túl a tömegek és terek egyszerű geometrikus szerkesztése, a településszövetbe való mesteri illeszkedés, a monumentalitásról, de nem a jelszerűségről való lemondás, valamint az ősi szimbolika mértéktartó, de helyénvaló használata köti őket össze."',
      en: '"Beyond the use of white-painted exposed brick, they are connected by the simple geometric construction of masses and spaces, the masterful integration into the settlement fabric, the abandonment of monumentality but not symbolism, and the restrained but appropriate use of ancient symbolism."'
    }
  },
  {
    imageURL: imageMap['budaors-church'].find(image => image.includes('18'))!,
    link: 'https://meonline.hu/aktualis/tema/elmozdulasok/',
    title: {
      hu: 'Budaörsi Református Gyülekezeti központ',
      en: 'Budaörs Reformed Church and Congregation Centre'
    },
    site: 'meonline.hu',
    snippet: {
      hu: '"Két épületre bontva, két építészeti formálási elvet követő beépítésben rendezték el a programot, kihasználva a tereplejtést, a városi környezet adottságait és kötöttségeit."',
      en: '"The program was divided into two buildings, arranged in a construction following two architectural design principles, taking advantage of the terrain, the characteristics and constraints of the urban environment."'
    }
  },
  {
    imageURL: imageMap['ujpest-parish-church'].find(image => image.includes('11'))!,
    link: 'https://proarchitectura.hu/dijazottak-2017',
    title: {
      hu: '2017-es Pro Architectura díj díjazottjai',
      en: 'The winners of Pro Architectura award 2017'
    },
    site: 'proarchitectura.hu',
    snippet: {
      hu: '"Az épített értékek megújításával, a korszerűen megfogalmazott bővítés összhangjával új minőség jött létre, az építészeti szemlélet, magatartás és együttműködés a múltból eredő megújulás követendő példája."',
      en: '"With the renewal of the built values, in harmony with the modernly formulated expansion, a new quality has been created, the architectural approach, behavior and cooperation are an example of renewal stemming from the past to follow."'
    }
  },
  {
    imageURL: imageMap['ujpest-parish-church'].find(image => image.includes('02'))!,
    link: 'https://meonline.hu/archivum/ternyitas/',
    title: {
      hu: 'Újpesti Főplébánia',
      en: 'Parish Church of the Celestial Queen'
    },
    site: 'meonline.hu',
    snippet: {
      hu: '"A parókiához hagyományosan kapcsolódó alapprogram – plébánosi lakás és iroda, hittanterem, könyvtár, díszterem, vendéglakás – a meglévő két udvari oldalszárnnyal rendelkező főépületbe költözött."',
      en: '"The basic program traditionally associated with the parish – the parish priest\'s apartment and office, religious education classroom, library, ceremonial hall, and guest apartment – moved to the existing main building with two courtyard side wings."'
    }
  },
  {
    imageURL: imageMap['ujpest-parish-church'].find(image => image.includes('05'))!,
    link: 'https://epiteszforum.hu/ujpest-foplebania-kialakitasa-a-zeneiskola-regi-epuleteben',
    title: {
      hu: 'Újpesti Főplébánia',
      en: 'Parish Church of the Celestial Queen'
    },
    site: 'epiteszforum.hu',
    snippet: {
      hu: '"A friss és határozott tervezői szemlélettel végigvitt átalakítás nyomán egy korszerű, sokoldalúan használható közösségi ház, lelki otthon jött létre, amit szemmel láthatóan szeretnek a használók. Kis léptékű, de példamutató beavatkozás: új érték létrehozásával párosítva is meg lehet menteni az épített örökséget"',
      en: '"The transformation carried out with a fresh and decisive design approach has resulted in a modern, versatile community house and spiritual home, which the users clearly love. A small-scale but exemplary intervention: combined with the creation of new value, it is possible to save the built heritage"'
    }
  },
  {
    imageURL: imageMap['ujpest-parish-church'].find(image => image.includes('03'))!,
    link: 'https://www.archdaily.com/772133/parish-church-of-the-celestial-queen-4-plusz-epitesz-studio?ad_medium=office_landing&ad_name=article',
    title: {
      hu: 'Parish Church of the Celestial Queen',
      en: 'Parish Church of the Celestial Queen'
    },
    site: 'archidaily.com',
    snippet: {
      hu: '"With the restoration of the old parts, the transparent new wing and its discreet colors and materials the Parish Church of Celestial Queen presents an inviting social and reverent space."',
      en: '"With the restoration of the old parts, the transparent new wing and its discreet colors and materials the Parish Church of Celestial Queen presents an inviting social and reverent space."'
    }
  },
  {
    imageURL: imageMap['ujpest-parish-church'].find(image => image.includes('01'))!,
    link: 'https://www.octogon.hu/magazin/kozossegi-ter-teremtes/',
    title: {
      hu: '"Közösségi tér - teremtés"',
      en: '"Community space - creation"'
    },
    site: 'octogon.hu',
    snippet: {
      hu: '"A friss és határozott tervezői szemlélettel végigvitt átalakítás nyomán egy korszerű, sokoldalúan használható közösségi ház, lelki otthon jött létre, amit szemmel láthatóan szeretnek a használók. Kis léptékű, de példamutató beavatkozás: új érték létrehozásával párosítva is meg lehet menteni az épített örökséget."',
      en: '"The transformation, carried out with a fresh and decisive design approach, has resulted in a modern, versatile community house and spiritual home, which the users clearly love. A small-scale but exemplary intervention: combined with the creation of new value, it is possible to save the built heritage."'
    }
  },
  {
    imageURL: imageMap['csomor-church'].find(image => image.includes('16'))!,
    link: 'https://epiteszforum.hu/hagyomanyba-oltott-modernitas--reformatus-templom-es-gyulekezeti-kozpont-csomoron',
    title: {
      hu: '"Hagyományba oltott modernitás"',
      en: '"Modernity infused with tradition"'
    },
    site: 'epiteszforum.hu',
    snippet: {
      hu: '"A koncepció átgondoltságát jelzi, hogy a különböző funkciók térben tisztán elkülönülnek, jól megközelíthetőek egymás zavarása nélkül."',
      en: '"The thoughtfulness of the concept is indicated by the fact that the different functions are clearly separated in space and can be easily accessed without disturbing each other."'
    }
  },
  {
    imageURL: imageMap['csomor-church'].find(image => image.includes('01'))!,
    link: 'https://meonline.hu/aktualis/tema/a-magveto-haza/',
    title: {
      hu: '"A Magvető Háza"',
      en: '"The House of the Sower"'
    },
    site: 'meonline.hu',
    snippet: {
      hu: '"A tervezők, Berzsák Zoltán és Nyikos László hagyományokat tisztelő, de a kortárs magyar építészet megközelítéseit, a továbblépés lehetőségeit kereső tervet tettek az asztalra."',
      en: '"The architects, Zoltán Berzsák and László Nyikos, presented a plan that respects traditions but also seeks approaches to contemporary Hungarian architecture and opportunities for progress."'
    }
  },
  {
    imageURL: imageMap['keresztur-restaurant-office'].find(image => image.includes('04'))!,
    link: 'https://epiteszforum.hu/mult-es-jovo-osszeforrasztasa-rezhaz-rakosmenten',
    title: {
      hu: '"Múlt és jövő összeforrasztása"',
      en: '"Bringing together past and future"'
    },
    site: 'epiteszforum.hu',
    snippet: {
      hu: '"Az önkormányzat hosszú távú célja egy modern kertváros kialakítása, melynek első lépése a hiányzó városközpont kialakítása. Az új főtér fontos eleme Berzsák Zoltán többfunkciós épülete."',
      en: '"The long-term goal of the municipality is to create a modern garden city, the first step of which is to create the missing city center. An important element of the new main square is the multifunctional building by Zoltán Berzsák."'
    }
  }
]
