/* Słownictwo A1 – format linii: rosyjski|polski|notatka (opcjonalnie) */
window.RU = window.RU || { vocab: [], grammar: [], phrases: [], texts: [] };

RU.vocab.push(
{ id: 'a1-greet', level: 'A1', icon: '👋', title: 'Powitania i grzeczność', words: `
приве́т|cześć (na powitanie)
здра́вствуйте|dzień dobry (formalnie)|czyt. [zdrastwujtie] – pierwsze „в” nieme
здра́вствуй|witaj (do jednej osoby na „ty”)
до́брое у́тро|dzień dobry (rano)
до́брый день|dzień dobry
до́брый ве́чер|dobry wieczór
споко́йной но́чи|dobranoc
до свида́ния|do widzenia
пока́|na razie, cześć (na pożegnanie)
до за́втра|do jutra
уви́димся|do zobaczenia
спаси́бо|dziękuję
большо́е спаси́бо|bardzo dziękuję
пожа́луйста|proszę; nie ma za co|czyt. [pażałsta]
извини́те|przepraszam (formalnie)
извини́|przepraszam (na „ty”)
прости́те|przepraszam, wybaczcie
да|tak
нет|nie
хорошо́|dobrze
ла́дно|dobra, w porządku
ничего́|nic; nic nie szkodzi|czyt. [nicziwo]
как дела́?|jak się masz?
отли́чно|świetnie
норма́льно|w porządku, normalnie
так себе́|tak sobie
о́чень прия́тно|bardzo mi miło
меня́ зову́т…|nazywam się…|dosł. „mnie wołają”
как вас зову́т?|jak się pan/pani nazywa?
как тебя́ зову́т?|jak masz na imię?
добро́ пожа́ловать|witamy
поздравля́ю|gratuluję
с днём рожде́ния|wszystkiego najlepszego z okazji urodzin
уда́чи|powodzenia
` },
{ id: 'a1-pron', level: 'A1', icon: '👤', title: 'Zaimki i słowa pytające', words: `
я|ja
ты|ty
он|on
она́|ona
оно́|ono
мы|my
вы|wy; Pan/Pani (forma grzecznościowa)
они́|oni, one
мой|mój|ж. моя́, н. моё, мн. мои́
твой|twój|ж. твоя́, н. твоё, мн. твои́
наш|nasz|ж. на́ша, н. на́ше, мн. на́ши
ваш|wasz; Pana/Pani|ж. ва́ша, н. ва́ше, мн. ва́ши
его́|jego|nieodmienne; czyt. [jiwo]
её|jej|nieodmienne
их|ich|nieodmienne
свой|swój|ж. своя́, н. своё, мн. свои́
э́то|to
э́тот|ten|ж. э́та, н. э́то, мн. э́ти
тот|tamten|ж. та, н. то, мн. те
кто|kto
что|co|czyt. [szto]
где|gdzie
куда́|dokąd
отку́да|skąd
когда́|kiedy
почему́|dlaczego
заче́м|po co
как|jak
ско́лько|ile
како́й|jaki|ж. кака́я, н. како́е, мн. каки́е
чей|czyj|ж. чья, н. чьё, мн. чьи
кото́рый|który
весь|cały|ж. вся, н. всё, мн. все
сам|sam|ж. сама́, н. само́, мн. са́ми
никто́|nikt
ничто́|nic
все|wszyscy
всё|wszystko
` },
{ id: 'a1-num', level: 'A1', icon: '🔢', title: 'Liczby', words: `
ноль|zero|также нуль
оди́н|jeden|ж. одна́, н. одно́
два|dwa|ж. две
три|trzy
четы́ре|cztery
пять|pięć
шесть|sześć
семь|siedem
во́семь|osiem
де́вять|dziewięć
де́сять|dziesięć
оди́ннадцать|jedenaście|czyt. [adinacat’]
двена́дцать|dwanaście
трина́дцать|trzynaście
четы́рнадцать|czternaście
пятна́дцать|piętnaście
шестна́дцать|szesnaście|czyt. [szysnacat’]
семна́дцать|siedemnaście
восемна́дцать|osiemnaście
девятна́дцать|dziewiętnaście
два́дцать|dwadzieścia
три́дцать|trzydzieści
со́рок|czterdzieści
пятьдеся́т|pięćdziesiąt
шестьдеся́т|sześćdziesiąt
се́мьдесят|siedemdziesiąt
во́семьдесят|osiemdziesiąt
девяно́сто|dziewięćdziesiąt
сто|sto
две́сти|dwieście
три́ста|trzysta
четы́реста|czterysta
пятьсо́т|pięćset
шестьсо́т|sześćset
семьсо́т|siedemset
восемьсо́т|osiemset
девятьсо́т|dziewięćset
ты́сяча|tysiąc
миллио́н|milion
пе́рвый|pierwszy
второ́й|drugi
тре́тий|trzeci|ж. тре́тья
четвёртый|czwarty
пя́тый|piąty
шесто́й|szósty
седьмо́й|siódmy
восьмо́й|ósmy
девя́тый|dziewiąty
деся́тый|dziesiąty
полови́на|połowa
число́|liczba; data
но́мер|numer|мн. номера́
` },
{ id: 'a1-family', level: 'A1', icon: '👨‍👩‍👧', title: 'Rodzina', words: `
семья́|rodzina
мать|matka|ж., род. ма́тери
оте́ц|ojciec|род. отца́
ма́ма|mama
па́па|tata
роди́тели|rodzice|мн.
сын|syn|мн. сыновья́
дочь|córka|ж., род. до́чери
де́ти|dzieci|ед. ребёнок
ребёнок|dziecko|мн. де́ти
брат|brat|мн. бра́тья
сестра́|siostra|мн. сёстры
ба́бушка|babcia
де́душка|dziadek|м. (odmienia się jak ż.)
внук|wnuk
вну́чка|wnuczka
муж|mąż|мн. мужья́
жена́|żona|мн. жёны
дя́дя|wujek|м.
тётя|ciocia
племя́нник|siostrzeniec, bratanek
племя́нница|siostrzenica, bratanica
двою́родный брат|kuzyn
двою́родная сестра́|kuzynka
сва́дьба|ślub, wesele
жени́х|narzeczony, pan młody
неве́ста|narzeczona, panna młoda
жена́т|żonaty|o mężczyźnie
за́мужем|zamężna|o kobiecie
ма́льчик|chłopiec
де́вочка|dziewczynka
мужчи́на|mężczyzna|м.; czyt. [muśśina]
же́нщина|kobieta
па́рень|chłopak|род. па́рня
де́вушка|dziewczyna
челове́к|człowiek|мн. лю́ди
лю́ди|ludzie
друг|przyjaciel|мн. друзья́
подру́га|przyjaciółka
сосе́д|sąsiad|мн. сосе́ди
` },
{ id: 'a1-body', level: 'A1', icon: '🧍', title: 'Człowiek: ciało i wygląd', words: `
те́ло|ciało
голова́|głowa
лицо́|twarz
глаз|oko|мн. глаза́
у́хо|ucho|мн. у́ши
нос|nos
рот|usta|род. рта
зуб|ząb|мн. зу́бы
губа́|warga|мн. гу́бы
язы́к|język (organ; mowa)
во́лосы|włosy|мн.
ше́я|szyja
плечо́|ramię, bark|мн. пле́чи
рука́|ręka; ramię|вин. ру́ку
па́лец|palec|род. па́льца
нога́|noga; stopa|вин. но́гу
живо́т|brzuch
спина́|plecy|вин. спи́ну
се́рдце|serce|czyt. [sierce] – „д” nieme
грудь|pierś, klatka piersiowa|ж.
ко́жа|skóra
высо́кий|wysoki
ни́зкий|niski
то́лстый|gruby
худо́й|chudy
краси́вый|ładny, piękny
симпати́чный|sympatyczny, przystojny
молодо́й|młody
ста́рый|stary
све́тлый|jasny
тёмный|ciemny
ры́жий|rudy
борода́|broda (zarost)|вин. бо́роду
усы́|wąsy|мн.
очки́|okulary|мн.
улы́бка|uśmiech
` },
{ id: 'a1-home', level: 'A1', icon: '🏠', title: 'Dom i mieszkanie', words: `
дом|dom; budynek|мн. дома́
кварти́ра|mieszkanie
ко́мната|pokój
ку́хня|kuchnia
спа́льня|sypialnia
ва́нная|łazienka|przymiotnik rzeczownikowy
туале́т|toaleta
балко́н|balkon
коридо́р|korytarz
эта́ж|piętro|на пе́рвом этаже́
лифт|winda
дверь|drzwi|ж.
окно́|okno|мн. о́кна
стена́|ściana|вин. сте́ну
пол|podłoga|на полу́
потоло́к|sufit
кры́ша|dach
стол|stół
стул|krzesło|мн. сту́лья
крова́ть|łóżko|ж.
дива́н|sofa, kanapa
шкаф|szafa|в шкафу́
по́лка|półka
ла́мпа|lampa
холоди́льник|lodówka
плита́|kuchenka
ра́ковина|zlew, umywalka
душ|prysznic
ва́нна|wanna
зе́ркало|lustro
ковёр|dywan
карти́на|obraz
телеви́зор|telewizor
компью́тер|komputer
ключ|klucz
сад|ogród|в саду́
двор|podwórko
ме́бель|meble|ж., tylko l.poj.
посу́да|naczynia
таре́лка|talerz
ча́шка|filiżanka
стака́н|szklanka
ло́жка|łyżka
ви́лка|widelec
нож|nóż|род. ножа́
` },
{ id: 'a1-food', level: 'A1', icon: '🍲', title: 'Jedzenie i napoje', words: `
еда́|jedzenie
хлеб|chleb
ма́сло|masło; olej
сыр|ser
молоко́|mleko
яйцо́|jajko|мн. я́йца
мя́со|mięso
ку́рица|kurczak; kura
ры́ба|ryba
колбаса́|kiełbasa, wędlina
сала́т|sałatka; sałata
суп|zupa
борщ|barszcz
щи|kapuśniak|мн.
ка́ша|kasza, owsianka
рис|ryż
макаро́ны|makaron|мн.
карто́шка|ziemniaki (pot.)
о́вощи|warzywa|мн.
фру́кты|owoce|мн.
я́блоко|jabłko|мн. я́блоки
гру́ша|gruszka
бана́н|banan
апельси́н|pomarańcza
лимо́н|cytryna
виногра́д|winogrona|tylko l.poj.
клубни́ка|truskawki
помидо́р|pomidor
огуре́ц|ogórek|род. огурца́
капу́ста|kapusta
морко́вь|marchew|ж.
лук|cebula
чесно́к|czosnek|czyt. [czisnok]
гриб|grzyb|мн. грибы́
са́хар|cukier
соль|sól|ж.
пе́рец|pieprz; papryka
торт|tort
пиро́г|placek, pieróg (zapiekany)|мн. пироги́
пельме́ни|pielmieni (pierożki)|мн.
блины́|naleśniki, bliny|мн.
моро́женое|lody|przymiotnik rzeczownikowy
шокола́д|czekolada
конфе́та|cukierek
пече́нье|ciastko, herbatniki
вода́|woda|вин. во́ду
чай|herbata
ко́фе|kawa|м., nieodmienne!
сок|sok
пи́во|piwo
вино́|wino
за́втрак|śniadanie
обе́д|obiad
у́жин|kolacja
есть|jeść|я ем, ты ешь, он ест, мы еди́м, вы еди́те, они́ едя́т
пить|pić|я пью, ты пьёшь
вку́сный|smaczny
голо́дный|głodny
сыт|syty
меню́|menu|н., nieodmienne
счёт|rachunek; wynik (meczu)
` },
{ id: 'a1-city', level: 'A1', icon: '🏙️', title: 'Miasto i miejsca', words: `
го́род|miasto|мн. города́
дере́вня|wieś
у́лица|ulica|на у́лице
пло́щадь|plac|ж.
проспе́кт|aleja
центр|centrum
магази́н|sklep
ры́нок|targ, rynek
апте́ка|apteka
больни́ца|szpital
по́чта|poczta|на по́чте
банк|bank
рестора́н|restauracja
кафе́|kawiarnia|н., nieodmienne
столо́вая|stołówka|przymiotnik rzeczownikowy
гости́ница|hotel
вокза́л|dworzec|на вокза́ле; czyt. [wagzał]
аэропо́рт|lotnisko|в аэропорту́
остано́вка|przystanek
метро́|metro|н., nieodmienne
музе́й|muzeum
теа́тр|teatr
кино́|kino|н., nieodmienne
кинотеа́тр|kino (budynek)
парк|park
библиоте́ка|biblioteka
университе́т|uniwersytet
шко́ла|szkoła
це́рковь|cerkiew, kościół|ж., род. це́ркви
мост|most|на мосту́
река́|rzeka|вин. ре́ку
стадио́н|stadion
дом культу́ры|dom kultury
поли́ция|policja
зда́ние|budynek
райо́н|dzielnica
перекрёсток|skrzyżowanie
светофо́р|sygnalizacja świetlna
тротуа́р|chodnik
а́дрес|adres|мн. адреса́
` },
{ id: 'a1-time', level: 'A1', icon: '📅', title: 'Czas: dni, miesiące, pory', words: `
вре́мя|czas|н.! род. вре́мени
час|godzina|мн. часы́
мину́та|minuta
секу́нда|sekunda
день|dzień|род. дня
неде́ля|tydzień
ме́сяц|miesiąc
год|rok|мн. го́ды; 5 лет
у́тро|ranek
ве́чер|wieczór|мн. вечера́
ночь|noc|ж.
у́тром|rano
днём|w dzień, po południu
ве́чером|wieczorem
но́чью|w nocy
сего́дня|dzisiaj|czyt. [siwodnia]
за́втра|jutro
вчера́|wczoraj
послеза́втра|pojutrze
позавчера́|przedwczoraj
сейча́с|teraz
понеде́льник|poniedziałek
вто́рник|wtorek
среда́|środa|в сре́ду
четве́рг|czwartek
пя́тница|piątek
суббо́та|sobota
воскресе́нье|niedziela
выходны́е|weekend|мн.
янва́рь|styczeń|м.
февра́ль|luty|м.
март|marzec
апре́ль|kwiecień|м.
май|maj
ию́нь|czerwiec|м.
ию́ль|lipiec|м.
а́вгуст|sierpień
сентя́брь|wrzesień|м.
октя́брь|październik|м.
ноя́брь|listopad|м.
дека́брь|grudzień|м.
зима́|zima|вин. зи́му
весна́|wiosna
ле́то|lato
о́сень|jesień|ж.
зимо́й|zimą
весно́й|wiosną
ле́том|latem
о́сенью|jesienią
часы́|zegar, zegarek|мн.
ра́но|wcześnie
по́здно|późno
` },
{ id: 'a1-adj', level: 'A1', icon: '🎨', title: 'Kolory i podstawowe przymiotniki', words: `
цвет|kolor|мн. цвета́
кра́сный|czerwony
си́ний|niebieski (ciemny)|miękki: си́няя, си́нее
голубо́й|błękitny
зелёный|zielony
жёлтый|żółty
бе́лый|biały
чёрный|czarny
се́рый|szary
кори́чневый|brązowy
ора́нжевый|pomarańczowy
фиоле́товый|fioletowy
ро́зовый|różowy
большо́й|duży
ма́ленький|mały
но́вый|nowy
хоро́ший|dobry
плохо́й|zły, kiepski
интере́сный|ciekawy
ску́чный|nudny|czyt. [skusznyj]
лёгкий|łatwy; lekki|czyt. [lochkij]
тру́дный|trudny
тяжёлый|ciężki
дорого́й|drogi (cena); drogi, kochany
дешёвый|tani
бы́стрый|szybki
ме́дленный|wolny, powolny
дли́нный|długi
коро́ткий|krótki
широ́кий|szeroki
у́зкий|wąski
горя́чий|gorący
холо́дный|zimny
тёплый|ciepły
чи́стый|czysty
гря́зный|brudny
ти́хий|cichy
гро́мкий|głośny
весёлый|wesoły
гру́стный|smutny|czyt. [grusnyj]
счастли́вый|szczęśliwy|czyt. [śśisliwyj]
до́брый|dobry (o człowieku), życzliwy
злой|zły (o człowieku)
у́мный|mądry
глу́пый|głupi
пра́вильный|poprawny
люби́мый|ulubiony
после́дний|ostatni|miękki
ну́жный|potrzebny
` },
{ id: 'a1-verbs', level: 'A1', icon: '🏃', title: 'Podstawowe czasowniki', words: `
быть|być|бу́ду, бу́дешь; w cz. teraź. zwykle opuszczane
жить|mieszkać; żyć|живу́, живёшь, живу́т
знать|wiedzieć; znać|зна́ю, зна́ешь
понима́ть|rozumieć|понима́ю, понима́ешь; dk. поня́ть
говори́ть|mówić|говорю́, говори́шь; dk. сказа́ть
чита́ть|czytać|чита́ю, чита́ешь; dk. прочита́ть
писа́ть|pisać|пишу́, пи́шешь; dk. написа́ть
де́лать|robić|де́лаю, де́лаешь; dk. сде́лать
рабо́тать|pracować|рабо́таю, рабо́таешь
учи́ть|uczyć się (czegoś na pamięć); uczyć|учу́, у́чишь
учи́ться|uczyć się, studiować|учу́сь, у́чишься
изуча́ть|studiować, uczyć się (przedmiotu)|изуча́ю
люби́ть|kochać, lubić|люблю́, лю́бишь
хоте́ть|chcieć|хочу́, хо́чешь, хо́чет, хоти́м, хоти́те, хотя́т
мочь|móc|могу́, мо́жешь, мо́гут
идти́|iść (w jedną stronę)|иду́, идёшь; cz. przesz. шёл, шла
ходи́ть|chodzić|хожу́, хо́дишь
е́хать|jechać (w jedną stronę)|е́ду, е́дешь
е́здить|jeździć|е́зжу, е́здишь
смотре́ть|patrzeć, oglądać|смотрю́, смо́тришь
ви́деть|widzieć|ви́жу, ви́дишь
слу́шать|słuchać|слу́шаю
слы́шать|słyszeć|слы́шу, слы́шишь
спать|spać|сплю, спишь
встава́ть|wstawać|встаю́, встаёшь
стоя́ть|stać|стою́, стои́шь
сиде́ть|siedzieć|сижу́, сиди́шь
лежа́ть|leżeć|лежу́, лежи́шь
игра́ть|grać, bawić się|игра́ю
гуля́ть|spacerować|гуля́ю
отдыха́ть|odpoczywać|отдыха́ю
покупа́ть|kupować|покупа́ю; dk. купи́ть
продава́ть|sprzedawać|продаю́, продаёшь
плати́ть|płacić|плачу́, пла́тишь
гото́вить|gotować, przygotowywać|гото́влю, гото́вишь
открыва́ть|otwierać|открыва́ю; dk. откры́ть
закрыва́ть|zamykać|закрыва́ю; dk. закры́ть
начина́ть|zaczynać|начина́ю; dk. нача́ть
конча́ть|kończyć|конча́ю; dk. ко́нчить
спра́шивать|pytać|спра́шиваю; dk. спроси́ть
отвеча́ть|odpowiadać|отвеча́ю; dk. отве́тить
помога́ть|pomagać (komuś – celownik)|помога́ю; dk. помо́чь
ждать|czekać|жду, ждёшь
звони́ть|dzwonić|звоню́, звони́шь
брать|brać|беру́, берёшь; dk. взять
дава́ть|dawać|даю́, даёшь; dk. дать
класть|kłaść|кладу́, кладёшь
жела́ть|życzyć|жела́ю
ду́мать|myśleć|ду́маю
по́мнить|pamiętać|по́мню, по́мнишь
забыва́ть|zapominać|забыва́ю; dk. забы́ть
мыть|myć|мо́ю, мо́ешь
одева́ться|ubierać się|одева́юсь
танцева́ть|tańczyć|танцу́ю, танцу́ешь
петь|śpiewać|пою́, поёшь
рисова́ть|rysować|рису́ю, рису́ешь
пла́вать|pływać|пла́ваю
бе́гать|biegać|бе́гаю
сто́ить|kosztować|сто́ит, сто́ят
нра́виться|podobać się|мне нра́вится…
находи́ться|znajdować się|нахо́дится
открыва́ться|otwierać się|магази́н открыва́ется в 9
приходи́ть|przychodzić|прихожу́, прихо́дишь; dk. прийти́
уходи́ть|odchodzić, wychodzić|ухожу́, ухо́дишь; dk. уйти́
возвраща́ться|wracać|возвраща́юсь; dk. верну́ться
сиде́ть до́ма|siedzieć w domu
кури́ть|palić (papierosy)|курю́, ку́ришь
пока́зывать|pokazywać|пока́зываю; dk. показа́ть
переводи́ть|tłumaczyć|перевожу́, перево́дишь
` },
{ id: 'a1-jobs', level: 'A1', icon: '💼', title: 'Praca i zawody', words: `
рабо́та|praca|на рабо́те
профе́ссия|zawód
учи́тель|nauczyciel|мн. учителя́
учи́тельница|nauczycielka
врач|lekarz|род. врача́
медсестра́|pielęgniarka
инжене́р|inżynier
программи́ст|programista
води́тель|kierowca
продаве́ц|sprzedawca|род. продавца́
продавщи́ца|sprzedawczyni
официа́нт|kelner
официа́нтка|kelnerka
по́вар|kucharz|мн. повара́
журнали́ст|dziennikarz
юри́ст|prawnik
экономи́ст|ekonomista
бухга́лтер|księgowy
студе́нт|student
студе́нтка|studentka
шко́льник|uczeń
пенсионе́р|emeryt
бизнесме́н|biznesmen
ме́неджер|menedżer
секрета́рь|sekretarz, sekretarka|м.
музыка́нт|muzyk
арти́ст|artysta (sceniczny)
худо́жник|malarz, artysta plastyk
писа́тель|pisarz
полице́йский|policjant|przymiotnik rzeczownikowy
строи́тель|budowlaniec
фе́рмер|rolnik
парикма́хер|fryzjer
фи́рма|firma
о́фис|biuro
колле́га|kolega z pracy|м./ж.
нача́льник|szef, przełożony
зарпла́та|pensja
` },
{ id: 'a1-school', level: 'A1', icon: '🎒', title: 'Szkoła i nauka', words: `
уро́к|lekcja
класс|klasa
заня́тие|zajęcia|мн. заня́тия
ле́кция|wykład
экза́мен|egzamin
зада́ние|zadanie
упражне́ние|ćwiczenie
дома́шнее зада́ние|praca domowa
вопро́с|pytanie
отве́т|odpowiedź
пра́вило|reguła
приме́р|przykład
оши́бка|błąd
кни́га|książka
уче́бник|podręcznik
тетра́дь|zeszyt|ж.
слова́рь|słownik|м.
ру́чка|długopis
каранда́ш|ołówek|род. карандаша́
бума́га|papier
до́ска|tablica|вин. до́ску
рюкза́к|plecak
сло́во|słowo|мн. слова́
предложе́ние|zdanie; propozycja
текст|tekst
бу́ква|litera
ру́сский язы́к|język rosyjski
грамма́тика|gramatyka
матема́тика|matematyka
исто́рия|historia
геогра́фия|geografia
фи́зика|fizyka
хи́мия|chemia
биоло́гия|biologia
литерату́ра|literatura
оце́нка|ocena
` },
{ id: 'a1-clothes', level: 'A1', icon: '👕', title: 'Ubrania', words: `
оде́жда|ubranie, odzież
пла́тье|sukienka
ю́бка|spódnica
брю́ки|spodnie|мн.
джи́нсы|dżinsy|мн.
руба́шка|koszula
футбо́лка|koszulka (T-shirt)
блу́зка|bluzka
сви́тер|sweter
ку́ртка|kurtka
пальто́|płaszcz|н., nieodmienne
костю́м|garnitur; kostium
ша́пка|czapka
шарф|szalik
перча́тки|rękawiczki|мн.
носки́|skarpetki|мн.
о́бувь|obuwie|ж.
ту́фли|pantofle, buty (półbuty)|мн.
боти́нки|trzewiki, buty|мн.
сапоги́|kozaki, buty z cholewami|мн.
кроссо́вки|adidasy, buty sportowe|мн.
га́лстук|krawat
су́мка|torba, torebka
карма́н|kieszeń
разме́р|rozmiar
носи́ть|nosić|ношу́, но́сишь
надева́ть|zakładać (ubranie)|dk. наде́ть
снима́ть|zdejmować|dk. снять
реме́нь|pasek|м., род. ремня́
зонт|parasol
` },
{ id: 'a1-weather', level: 'A1', icon: '🌦️', title: 'Pogoda i przyroda', words: `
пого́да|pogoda
со́лнце|słońce|czyt. [sonce] – „л” nieme
дождь|deszcz|м.; идёт дождь
снег|śnieg|идёт снег
ве́тер|wiatr|род. ве́тра
о́блако|chmura|мн. облака́
тума́н|mgła
гроза́|burza
не́бо|niebo
температу́ра|temperatura
гра́дус|stopień
тепло́|ciepło
хо́лодно|zimno
жа́рко|gorąco
моро́з|mróz
со́лнечно|słonecznie
па́смурно|pochmurno
приро́да|przyroda
лес|las|в лесу́
по́ле|pole
гора́|góra|вин. го́ру
мо́ре|morze|мн. моря́
о́зеро|jezioro|мн. озёра
о́стров|wyspa|мн. острова́
пляж|plaża|на пля́же
земля́|ziemia|вин. зе́млю
де́рево|drzewo|мн. дере́вья
цвето́к|kwiat|мн. цветы́
трава́|trawa
звезда́|gwiazda|мн. звёзды
луна́|księżyc
мир|świat; pokój
во́здух|powietrze
` },
{ id: 'a1-animals', level: 'A1', icon: '🐻', title: 'Zwierzęta', words: `
живо́тное|zwierzę|przymiotnik rzeczownikowy
соба́ка|pies
ко́шка|kot (kotka)
кот|kocur, kot
пти́ца|ptak
ры́бка|rybka
ло́шадь|koń|ж.
коро́ва|krowa
свинья́|świnia
овца́|owca
медве́дь|niedźwiedź|м.
волк|wilk
лиса́|lis, lisica
за́яц|zając|род. за́йца
мышь|mysz|ж.
бе́лка|wiewiórka
ёж|jeż|род. ежа́
слон|słoń
тигр|tygrys
лев|lew|род. льва
обезья́на|małpa
змея́|wąż
лягу́шка|żaba
ба́бочка|motyl
пчела́|pszczoła
кома́р|komar
му́ха|mucha
у́тка|kaczka
попуга́й|papuga
` },
{ id: 'a1-countries', level: 'A1', icon: '🌍', title: 'Kraje, narody, języki', words: `
страна́|kraj|мн. стра́ны
Росси́я|Rosja
По́льша|Polska
Украи́на|Ukraina
Белару́сь|Białoruś|ж.
Герма́ния|Niemcy
Фра́нция|Francja
Ита́лия|Włochy
Испа́ния|Hiszpania
А́нглия|Anglia
Аме́рика|Ameryka
Кита́й|Chiny
Япо́ния|Japonia
Че́хия|Czechy
Москва́|Moskwa
Варша́ва|Warszawa
Санкт-Петербу́рг|Petersburg
поля́к|Polak
по́лька|Polka
ру́сский|Rosjanin; rosyjski|jako rzeczownik: Rosjanin
ру́сская|Rosjanka
не́мец|Niemiec|род. не́мца
не́мка|Niemka
францу́з|Francuz
англича́нин|Anglik|мн. англича́не
америка́нец|Amerykanin
по-ру́сски|po rosyjsku
по-по́льски|po polsku
по-англи́йски|po angielsku
по-неме́цки|po niemiecku
по-францу́зски|po francusku
по́льский|polski
англи́йский|angielski
неме́цкий|niemiecki
иностра́нный|obcy, zagraniczny
иностра́нец|obcokrajowiec
национа́льность|narodowość|ж.
столи́ца|stolica
грани́ца|granica|за грани́цей – za granicą
` },
{ id: 'a1-transport', level: 'A1', icon: '🚌', title: 'Transport i podróż', words: `
тра́нспорт|transport
маши́на|samochód; maszyna
авто́бус|autobus
трамва́й|tramwaj
тролле́йбус|trolejbus
по́езд|pociąg|мн. поезда́
электри́чка|pociąg podmiejski
самолёт|samolot
такси́|taksówka|н., nieodmienne
велосипе́д|rower
мотоци́кл|motocykl
кора́бль|statek|м.
биле́т|bilet
па́спорт|paszport|мн. паспорта́
чемода́н|walizka
доро́га|droga
путеше́ствие|podróż
пое́здка|wyjazd, przejażdżka
туристи́ческий|turystyczny
тури́ст|turysta
ка́рта|mapa; karta
пря́мо|prosto
нале́во|w lewo
напра́во|w prawo
далеко́|daleko
бли́зко|blisko
ря́дом|obok
там|tam
на авто́бусе|autobusem
пешко́м|pieszo
` },
{ id: 'a1-func', level: 'A1', icon: '🔗', title: 'Przysłówki i słówka funkcyjne', words: `
и|i
не|nie (partykuła przecząca)|stoi przed słowem, które przeczy: я не знаю
а|a
но|ale
и́ли|albo, lub
потому́ что|ponieważ, bo
поэ́тому|dlatego
е́сли|jeśli
то́же|też
та́кже|także
ещё|jeszcze|czyt. [jiśśo]
уже́|już
то́лько|tylko
о́чень|bardzo
мно́го|dużo
ма́ло|mało
немно́го|trochę
чуть-чу́ть|troszkę
всегда́|zawsze
никогда́|nigdy
иногда́|czasami
ча́сто|często
ре́дко|rzadko
обы́чно|zwykle
пото́м|potem
снача́ла|najpierw
тепе́рь|teraz (w odróżnieniu od przeszłości)
сра́зу|od razu
до́лго|długo
ско́ро|wkrótce
то́чно|dokładnie, na pewno
коне́чно|oczywiście|czyt. [kanieszna]
мо́жно|można
нельзя́|nie wolno
ну́жно|trzeba
на́до|trzeba
пло́хо|źle
вме́сте|razem
везде́|wszędzie
до́ма|w domu
домо́й|do domu
здесь|tu, tutaj
тут|tu
вот|oto
в|w, do|+ wiersz / miejscownik
на|na|+ biernik / miejscownik
с|z|+ narzędnik / dopełniacz
без|bez|+ dopełniacz
для|dla|+ dopełniacz
о|o|+ miejscownik (об, обо)
у|u, przy|+ dopełniacz
к|do, ku|+ celownik
из|z (wnętrza)|+ dopełniacz
от|od|+ dopełniacz
по|po, według|+ celownik
` },
{ id: 'a1-shop', level: 'A1', icon: '🛒', title: 'Zakupy i pieniądze', words: `
де́ньги|pieniądze|мн.
рубль|rubel|м.; 2 рубля́, 5 рубле́й
копе́йка|kopiejka
зло́тый|złoty
е́вро|euro|nieodmienne
до́ллар|dolar
цена́|cena|вин. це́ну
чек|paragon
ски́дка|zniżka
паке́т|torba (reklamówka); paczka
буты́лка|butelka
па́чка|paczka
килогра́мм|kilogram
литр|litr
ку́сок|kawałek
сда́ча|reszta (pieniędzy)
нали́чные|gotówka|мн.
ка́рточка|karta (płatnicza)
суперма́ркет|supermarket
покупа́тель|klient, kupujący|м.
поку́пки|zakupy|мн.
ско́лько сто́ит?|ile kosztuje?
до́рого|drogo
дёшево|tanio
` }
);
