/* Gramatyka B2 */
window.RU = window.RU || { vocab: [], grammar: [], phrases: [], texts: [] };

RU.grammar.push(
{ id: 'b2-g1', level: 'B2', title: 'Imiesłowy przymiotnikowe czynne', subtitle: 'Чита́ющий, чита́вший – działający, który działał', body: `
<p>Imiesłowy czynne (действи́тельные прича́стия) zastępują zdanie z {{кото́рый}}. Typowe dla języka pisanego, prasy i nauki.</p>
<table class="gt"><tr><th>czas</th><th>tworzenie</th><th>przykład</th></tr>
<tr><td>teraźniejszy</td><td>temat они́ + <b>-ущ- / -ющ-</b> (I kon.), <b>-ащ- / -ящ-</b> (II kon.)</td><td>чита́ют → <b>чита́ющий</b>; говоря́т → <b>говоря́щий</b></td></tr>
<tr><td>przeszły</td><td>temat bezokolicznika + <b>-вш-</b> (po samogłosce) / <b>-ш-</b></td><td>чита́ть → <b>чита́вший</b>; принести́ → <b>принёсший</b></td></tr></table>
[[Студе́нт, чита́ющий кни́гу, — мой брат.|Student czytający książkę to mój brat.]]
[[= Студе́нт, кото́рый чита́ет кни́гу, — мой брат.|= Student, który czyta książkę, to mój brat.]]
[[Челове́к, написа́вший э́ту статью́, — изве́стный журнали́ст.|Człowiek, który napisał ten artykuł, jest znanym dziennikarzem.]]
<p>Imiesłowy odmieniają się jak przymiotniki: {{о студе́нте, чита́ющем кни́гу}}, {{с де́вушкой, говоря́щей по-ру́сски}}.</p>
<h3>Zwrotne: -ся zawsze (nie -сь)</h3>
[[занима́ющийся спо́ртом|uprawiający sport]]
[[находя́щийся в це́нтре|znajdujący się w centrum]]
<h3>Zleksykalizowane – działają jak przymiotniki/rzeczowniki</h3>
<p>{{бу́дущий}} (przyszły), {{веду́щий}} (prowadzący), {{трудя́щийся}} (pracujący), {{куря́щий}} (palący), {{про́шлый}}, {{сле́дующий}} (następny), {{подходя́щий}} (odpowiedni), {{блестя́щий}} (błyskotliwy).</p>
<div class="tip">💡 Imiesłów czasu teraźniejszego tworzy się tylko od <b>niedokonanych</b>; przeszłego – od obu aspektów. Polskie „czytający / który czytał” odpowiada temu dokładnie.</div>`,
quiz: `
Мальчик, ___ в па́рке, — мой сын. (który gra)|игра́ющий|игра́вший бы|игра́емый
Челове́к, ___ э́ту кни́гу, изве́стен. (który napisał)|написа́вший|пи́шущий|напи́санный
Я знако́м с де́вушкой, ___ по-ру́сски. (mówiącą)|говоря́щей|говоря́щая|говори́вшую
Студе́нты, ___ в общежи́тии, ... (mieszkający)|живу́щие|живы́е|жи́вшие бы
Imiesłów czynny cz. teraźniejszego od „писа́ть” to…|пи́шущий|писа́ющий|пи́савший
Imiesłów czynny cz. przeszłego od „прийти́” to…|прише́дший|прише́д|приходя́щий
Лю́ди, ___ спо́ртом, ре́же боле́ют. (uprawiający)|занима́ющиеся|занима́ющиесь|занима́емые
В ___ году́ я пое́ду в Москву́. (przyszłym)|бу́дущем|бу́дущий|бу́дуще
Как называ́ется ___ остано́вка? (następny)|сле́дующая|сле́дующий|сле́дуема
Мы говори́ли с учёным, ___ э́тот зако́н. (który odkrył)|откры́вшим|откры́вший|открыва́ющим`
},
{ id: 'b2-g2', level: 'B2', title: 'Imiesłowy bierne', subtitle: 'Чита́емый, прочи́танный, напи́сан', body: `
<table class="gt"><tr><th>czas</th><th>tworzenie</th><th>przykład</th></tr>
<tr><td>teraźniejszy (rzadki)</td><td>temat мы + <b>-ем- / -им-</b></td><td>чита́ем → <b>чита́емый</b>; люби́м → <b>люби́мый</b></td></tr>
<tr><td>przeszły (częsty!)</td><td><b>-нн-</b> (po -ать/-ять), <b>-енн-</b> (po -ить, spółgł.), <b>-т-</b> (-ыть, -уть, -оть, jednosylabowe)</td><td>написа́ть → <b>напи́санный</b>; купи́ть → <b>ку́пленный</b>; откры́ть → <b>откры́тый</b></td></tr></table>
[[Кни́га, напи́санная Толсты́м.|Książka napisana przez Tołstoja. (narzędnik wykonawcy!)]]
[[Ку́пленные ве́щи лежа́т на столе́.|Kupione rzeczy leżą na stole.]]
[[Э́то о́чень чита́емый а́втор.|To bardzo poczytny autor.]]
<h3>Formy krótkie – strona bierna</h3>
<p>Krótki imiesłów bierny + {{быть}} tworzy stronę bierną czasowników dokonanych. W krótkich formach piszemy <b>jedno -н-</b>:</p>
<table class="gt"><tr><th>pełna</th><th>m.</th><th>ż.</th><th>n.</th><th>l. mn.</th></tr>
<tr><td>напи́санный</td><td>напи́сан</td><td>напи́сана</td><td>напи́сано</td><td>напи́саны</td></tr>
<tr><td>откры́тый</td><td>откры́т</td><td>откры́та</td><td>откры́то</td><td>откры́ты</td></tr>
<tr><td>решённый</td><td>решён</td><td>решена́</td><td>решено́</td><td>решены́</td></tr></table>
[[Магази́н закры́т.|Sklep jest zamknięty.]]
[[Письмо́ бы́ло напи́сано вчера́.|List został napisany wczoraj.]]
[[Зада́ча решена́.|Zadanie jest rozwiązane.]]
[[Дом бу́дет постро́ен в сле́дующем году́.|Dom zostanie zbudowany w przyszłym roku.]]
<div class="tip">💡 Wymiany jak w 1. os. czasu teraźniejszego: {{пригото́вить}} → {{пригото́вленный}}, {{получи́ть}} → {{полу́ченный}}, {{освободи́ть}} → {{освобождённый}}, {{перевести́}} → {{переведённый}}.</div>`,
quiz: `
Кни́га, ___ Толсты́м. (napisana)|напи́санная|пи́шущая|написа́вшая
Магази́н ___. (jest zamknięty)|закры́т|закры́тый|закры́ва
Письмо́ бы́ло ___ вчера́.|напи́сано|напи́сан|напи́сана
Зада́ча ___. (rozwiązana)|решена́|решён|решено́
Дом был ___ в 1900 году́. (zbudowany)|постро́ен|постро́енный|стро́ящий
Imiesłów bierny cz. przeszłego od „купи́ть”|ку́пленный|купи́нный|ку́пнутый
Imiesłów bierny cz. przeszłego od „откры́ть”|откры́тый|откры́нный|откры́енный
Все биле́ты ___. (sprzedane)|про́даны|про́дан|про́дано
Карти́на, ___ э́тим худо́жником... (namalowana przez)|напи́санная|пи́сающая|пи́санный бы
Обе́д ___. (przygotowany)|пригото́влен|пригото́вен|пригото́влена`
},
{ id: 'b2-g3', level: 'B2', title: 'Imiesłowy przysłówkowe (дееприча́стия)', subtitle: 'Чита́я, прочита́в – czytając, przeczytawszy', body: `
<table class="gt"><tr><th>typ</th><th>tworzenie</th><th>znaczenie</th><th>przykład</th></tr>
<tr><td>niedokonane</td><td>temat они́ + <b>-я / -а</b></td><td>czynność równoczesna</td><td>чита́-ют → <b>чита́я</b>; слы́ш-ат → <b>слы́ша</b></td></tr>
<tr><td>dokonane</td><td>temat bezokol. + <b>-в / -вшись</b></td><td>czynność wcześniejsza</td><td>прочита́ть → <b>прочита́в</b>; верну́ться → <b>верну́вшись</b></td></tr></table>
[[Чита́я газе́ту, он пил ко́фе.|Czytając gazetę, pił kawę.]]
[[Прочита́в газе́ту, он пошёл на рабо́ту.|Przeczytawszy gazetę, poszedł do pracy.]]
[[Верну́вшись домо́й, я сра́зу лёг спать.|Po powrocie do domu od razu poszedłem spać.]]
[[Уходя́, выключа́йте свет.|Wychodząc, gaście światło.]]
<h3>Zwrotne</h3>
<p>{{занима́ясь}} (zajmując się), {{улыба́ясь}} (uśmiechając się), {{познако́мившись}} (poznawszy się).</p>
<h3>Nieregularne i wyjątki</h3>
<p>{{быть}} → {{бу́дучи}}; {{дава́ть}} → {{дава́я}}; {{встава́ть}} → {{встава́я}}; {{прийти́}} → {{придя́}}; {{уйти́}} → {{уйдя́}}; {{принести́}} → {{принеся́}}. Nie tworzy się od: {{писа́ть}}, {{е́хать}}, {{пить}}, {{ждать}}, {{мочь}}, {{хоте́ть}}.</p>
<div class="warn">⚠️ Imiesłów przysłówkowy musi mieć <b>ten sam podmiot</b> co orzeczenie. ✗ „Подъезжа́я к ста́нции, у меня́ слете́ла шля́па” – klasyczny błąd (Czechow)!</div>
<h3>Zleksykalizowane</h3>
<p>{{не спеша́}} (bez pośpiechu), {{мо́лча}} (w milczeniu), {{сто́я}} (na stojąco), {{лёжа}} (na leżąco), {{че́стно говоря́}} (szczerze mówiąc), {{су́дя по}} (sądząc po), {{несмотря́ на}} (mimo).</p>`,
quiz: `
___ газе́ту, он пил ко́фе. (czytając)|Чита́я|Прочита́в|Чита́в
___ домо́й, я лёг спать. (wróciwszy)|Верну́вшись|Возвраща́ясь бы|Верну́ясь
___, выключа́йте свет. (wychodząc)|Уходя́|Уйдя́|Уходи́в
___ письмо́, она́ запла́кала. (przeczytawszy)|Прочита́в|Чита́я|Прочита́я
Че́стно ___, мне не понра́вилось.|говоря́|сказа́в|говори́в
Он шёл, не ___. (nie spiesząc się)|спеша́|спеши́в|спе́шу
___ по пого́де, бу́дет дождь. (sądząc)|Су́дя|Суди́в|Судя́щий
Imiesłów przysłówkowy dokonany od „уйти́”|уйдя́|уйдя́сь|у́шедши
___ студе́нтом, он мно́го рабо́тал. (będąc)|Бу́дучи|Быв|Бу́дя
___ с ним, я поняла́, что он у́мный. (poznawszy się)|Познако́мившись|Знако́мясь бы|Познако́мясь`
},
{ id: 'b2-g4', level: 'B2', title: 'Strona bierna', subtitle: 'Стро́ится / постро́ен – dwa sposoby', body: `
<table class="gt"><tr><th>aspekt</th><th>środek</th><th>przykład</th></tr>
<tr><td>niedokonany</td><td>czasownik + <b>-ся</b></td><td>{{Дом стро́ится рабо́чими.}} – Dom jest budowany przez robotników.</td></tr>
<tr><td>dokonany</td><td>krótki imiesłów bierny</td><td>{{Дом постро́ен рабо́чими.}} – Dom został zbudowany przez robotników.</td></tr></table>
<p>Wykonawca czynności stoi w <b>narzędniku</b> (bez przyimka, polskie „przez” nie jest potrzebne).</p>
[[Здесь продаю́тся биле́ты.|Tutaj sprzedaje się bilety.]]
[[Э́та пробле́ма обсужда́ется уже́ год.|Ten problem jest dyskutowany od roku.]]
[[Зако́н был при́нят парла́ментом.|Ustawa została przyjęta przez parlament.]]
[[Прое́кт бу́дет вы́полнен в срок.|Projekt zostanie wykonany w terminie.]]
<h3>Konstrukcja nieosobowa (preferowana w mowie)</h3>
<p>W mowie potocznej Rosjanie wolą 3. os. l. mn. bez podmiotu:</p>
[[Здесь стро́ят но́вый дом.|Budują tu nowy dom.]]
[[Мне подари́ли кни́гу.|Dostałem w prezencie książkę (podarowano mi).]]
<h3>Nieosobowe formy na -но, -то</h3>
[[Сде́лано!|Zrobione!]]
[[Кури́ть запрещено́.|Palenie zabronione.]]
[[Бы́ло решено́ перенести́ встре́чу.|Postanowiono przełożyć spotkanie.]]`,
quiz: `
Дом ___ рабо́чими. (jest budowany)|стро́ится|постро́ен|стро́ит
Мост был ___ в 2010 году́. (zbudowany)|постро́ен|стро́ился|постро́ился
Зако́н был при́нят ___. (парла́мент)|парла́ментом|парла́мента|парла́менту
Здесь ___ биле́ты. (sprzedaje się)|продаю́тся|про́даны бу́дут|продаёт
Кури́ть ___.|запрещено́|запрещён|запреща́ется бы
Бы́ло ___ перенести́ встре́чу. (postanowiono)|решено́|решён|реша́лось бы
Мне ___ цветы́. (podarowano)|подари́ли|подари́лись|пода́рены
Прое́кт бу́дет ___ в срок. (wykonany)|вы́полнен|выполня́ется|вы́полнена
Э́та те́ма ча́сто ___ в пре́ссе. (jest omawiana)|обсужда́ется|обсуждена́|обсужда́ют
Статья́ ___ изве́стным журнали́стом. (napisana)|напи́сана|напи́сано|пи́шется бы`
},
{ id: 'b2-g5', level: 'B2', title: 'Aspekt: subtelności', subtitle: 'Anulowany rezultat, negacja, powtarzalność', body: `
<h3>1. Anulowany rezultat → НСВ</h3>
<p>Czasowniki ruchu i „dwukierunkowe” w czasie przeszłym niedokonanym oznaczają, że skutek już nie istnieje:</p>
[[Ко мне приходи́л брат.|Był u mnie brat (przyszedł i poszedł).]]
[[Ко мне пришёл брат.|Przyszedł do mnie brat (jest tutaj).]]
[[Ты брал мою́ ру́чку?|Brałeś mój długopis? (i oddałeś)]]
<h3>2. Negacja: НСВ = nie było w ogóle; СВ = nie udało się</h3>
[[Я не звони́л ему́.|Nie dzwoniłem do niego (nie było takiej czynności).]]
[[Я не позвони́л ему́.|Nie zadzwoniłem (miałem, ale nie zrobiłem).]]
[[Я не реша́л э́ту зада́чу.|Nie rozwiązywałem tego zadania.]]
[[Я не реши́л э́ту зада́чу.|Nie rozwiązałem tego zadania (próbowałem).]]
<h3>3. Możliwość: не + СВ = nie da się</h3>
[[Его́ не поня́ть.|Nie da się go zrozumieć.]]
[[Мне э́того не забы́ть.|Nie zapomnę tego.]]
<h3>4. Powtarzalność w przyszłości i kolejne działania</h3>
[[Ка́ждый раз, когда́ он приезжа́ет, мы хо́дим в теа́тр.|Za każdym razem, gdy przyjeżdża, chodzimy do teatru.]]
[[Он обы́чно придёт, ся́дет и молчи́т.|Zwykle przyjdzie, usiądzie i milczy. (СВ przyszły dla typowej sekwencji – styl potoczny)]]
<h3>5. Grzeczność</h3>
<p>Niedokonany w zaproszeniach brzmi ciepło, dokonany w prośbach – neutralnie: {{Раздева́йтесь, проходи́те!}} (Proszę się rozebrać, wejść!). Dokonany w zaproszeniu może zabrzmieć jak polecenie.</p>`,
quiz: `
Вчера́ ко мне ___ брат, но уже́ уе́хал.|приезжа́л|прие́хал|приезжа́ет
Ко мне ___ друг, он сейча́с у меня́.|пришёл|приходи́л|приходи́т
Я ___ ему́ – у меня́ не́ было его́ но́мера.|не звони́л|не позвони́л|не позвоню́
Я до́лго ду́мал, но так и не ___ зада́чу.|реши́л|реша́л|решу́
Его́ не ___! (nie da się zrozumieć)|поня́ть|понима́ть|понима́ет
Ты ___ мой зонт? Он мо́крый. (brałeś i oddałeś)|брал|взял|берёшь
___, пожа́луйста, проходи́те! (zaproszenie: rozbierajcie się)|Раздева́йтесь|Разде́ньтесь|Разде́нетесь
Кто ___ окно́? Здесь хо́лодно! (jest otwarte)|откры́л|открыва́л|открыва́ет
Мне э́того никогда́ не ___.|забы́ть|забыва́ть|забу́ду
Кто ___ э́ту карти́ну? (fakt – autorstwo)|писа́л|написа́лся|пи́шет`
},
{ id: 'b2-g6', level: 'B2', title: 'Szyk zdania i akcent logiczny', subtitle: 'Temat–remat, intonacja, inwersja', body: `
<p>Szyk rosyjskiego zdania jest swobodny, ale <b>nowa informacja (remat) stoi na końcu</b>. Zmiana szyku zmienia sens.</p>
[[В ко́мнату вошёл мужчи́на.|Do pokoju wszedł (jakiś) mężczyzna. – nowa informacja: kto]]
[[Мужчи́на вошёл в ко́мнату.|(Ten) mężczyzna wszedł do pokoju. – nowa informacja: dokąd]]
<p>Rosyjski nie ma przedimków – ich rolę pełni właśnie szyk: podmiot na końcu ≈ „jakiś”, na początku ≈ „ten”.</p>
<h3>Konstrukcje IK (intonacja)</h3>
<table class="gt"><tr><th>IK</th><th>gdzie</th><th>przykład</th></tr>
<tr><td>IK-1 ↘</td><td>zdanie twierdzące</td><td>{{Э́то мой брат.}}</td></tr>
<tr><td>IK-2 ↘ (mocny)</td><td>pytanie z zaimkiem, wołanie</td><td>{{Где ты живёшь?}}</td></tr>
<tr><td>IK-3 ↗↘</td><td>pytanie tak/nie</td><td>{{Ты был в Москве́?}}</td></tr>
<tr><td>IK-4 ↗</td><td>pytanie z „а”</td><td>{{А ты?}}</td></tr>
<tr><td>IK-5 ↗→↘</td><td>emocja, zachwyt</td><td>{{Кака́я краса́вица!}}</td></tr></table>
<h3>Pytanie o różne elementy</h3>
[[Ты был вчера́ в теа́тре?|(Czy TY byłeś…) – wznosi się głos na „ты”]]
[[Ты был вчера́ в теа́тре?|(Czy WCZORAJ…) – wznosi się głos na „вчера́”]]
<h3>Inwersja stylistyczna</h3>
<p>W poezji i mowie emocjonalnej przymiotnik może stać za rzeczownikiem, a czasownik na początku: {{Жил-бы́л стари́к.}} {{Идёт он по у́лице…}} (styl narracji ustnej).</p>`,
quiz: `
„Do pokoju wszedł jakiś mężczyzna” – najlepiej:|В ко́мнату вошёл мужчи́на.|Мужчи́на вошёл в ко́мнату.|Вошёл в ко́мнату мужчи́на бы.
Gdzie zwykle stoi nowa informacja (remat)?|na końcu zdania|na początku zdania|zawsze po czasowniku
Jaką intonację ma pytanie „tak/nie”?|IK-3 (wzrost na słowie pytającym)|IK-1 (spadek)|IK-2 (mocny spadek)
„Ten mężczyzna wszedł do pokoju” – najlepiej:|Мужчи́на вошёл в ко́мнату.|В ко́мнату вошёл мужчи́на.|Вошёл мужчи́на.
Pytanie „А ты?” ma intonację…|IK-4|IK-1|IK-5
Czym w rosyjskim zastępuje się przedimki?|szykiem wyrazów|końcówkami|partykułą „то”
„Кака́я краса́вица!” – intonacja:|IK-5|IK-3|IK-1
Pytanie z zaimkiem „где” ma intonację:|IK-2|IK-3|IK-4`
},
{ id: 'b2-g7', level: 'B2', title: 'Przedrostki czasownikowe', subtitle: 'За-, по-, пере-, до-, раз-, на-…ся, из-', body: `
<p>Przedrostki poza tworzeniem aspektu dokonanego nadają <b>znaczenia dodatkowe</b>. To klucz do rozumienia tysięcy czasowników.</p>
<table class="gt"><tr><th>przedrostek</th><th>znaczenie</th><th>przykłady</th></tr>
<tr><td>за-</td><td>początek czynności</td><td>{{заплака́ть}} (zapłakać), {{запе́ть}}, {{заболе́ть}}</td></tr>
<tr><td>по-</td><td>trochę, przez chwilę</td><td>{{погуля́ть}}, {{почита́ть}}, {{поспа́ть}}</td></tr>
<tr><td>пере-</td><td>ponownie; nadmiar; przez</td><td>{{переписа́ть}}, {{перее́сть}} (przejeść się), {{переду́мать}} (zmienić zdanie)</td></tr>
<tr><td>до-</td><td>do końca, dokończyć</td><td>{{дочита́ть}}, {{доде́лать}}</td></tr>
<tr><td>недо-</td><td>niedostatecznie</td><td>{{недоспа́ть}}, {{недооцени́ть}}</td></tr>
<tr><td>раз-/рас- (+ся)</td><td>w różne strony; intensywnie</td><td>{{разда́ть}}, {{разре́зать}}, {{раскрича́ться}}</td></tr>
<tr><td>на- (+ся)</td><td>dużo, do syta</td><td>{{нае́сться}}, {{наговори́ться}}, {{нагуля́ться}}</td></tr>
<tr><td>вы- (+ся)</td><td>dokładnie; wystarczająco</td><td>{{вы́спаться}}, {{вы́учить}}</td></tr>
<tr><td>от-</td><td>zakończenie; odrzucenie</td><td>{{отрабо́тать}}, {{отказа́ть}}</td></tr>
<tr><td>при-</td><td>dołączenie; lekko</td><td>{{приба́вить}}, {{приоткры́ть}} (uchylić)</td></tr>
<tr><td>из-/ис-</td><td>zużycie, wyczerpanie</td><td>{{исписа́ть}}, {{израсхо́довать}}</td></tr>
<tr><td>об-/обо-</td><td>dookoła; wszystkich; oszukać</td><td>{{обсуди́ть}}, {{обману́ть}}, {{обойти́}}</td></tr>
<tr><td>про-</td><td>przez jakiś czas; przeoczyć</td><td>{{проспа́ть}} (zaspać), {{прожи́ть}}</td></tr></table>
[[Я наконе́ц вы́спался!|W końcu się wyspałem!]]
[[Мы наговори́лись вдо́воль.|Nagadaliśmy się do woli.]]
[[Я проспа́л и опозда́л.|Zaspałem i się spóźniłem.]]
[[Он переду́мал.|Rozmyślił się.]]`,
quiz: `
Ребёнок ___. (zaczął płakać)|запла́кал|попла́кал|пропла́кал
Я наконе́ц ___! (wyspałem się)|вы́спался|переспа́л|доспа́л
Я ___ и опозда́л на рабо́ту. (zaspałem)|проспа́л|вы́спался|заспа́л бы
Он ___ и не пошёл. (rozmyślił się)|переду́мал|поду́мал|заду́мал
Дай мне ___ кни́гу. (doczytać)|дочита́ть|почита́ть|перечита́ть
Мы ___ в па́рке час. (pospacerowaliśmy)|погуля́ли|нагуля́ли|загуля́ли
Я ___ – бо́льше не могу́ есть. (najadłem się)|нае́лся|перее́л бы|вы́ел
Дава́йте ___ э́тот вопро́с. (omówmy)|обсу́дим|рассу́дим|пересу́дим
___ окно́, пожа́луйста. (uchyl)|Приоткро́й|Раскро́й|Перекро́й
Он ___ тетра́дь за неде́лю. (zapisał całą)|исписа́л|описа́л|переписа́л бы`
},
{ id: 'b2-g8', level: 'B2', title: 'Partykuły', subtitle: 'Же, ведь, ли, ра́зве, неуже́ли, -то, да́же', body: `
<p>Partykuły nadają wypowiedzi emocje i odcienie. Bez nich rosyjski brzmi sztucznie!</p>
<table class="gt"><tr><th>partykuła</th><th>funkcja</th><th>przykład</th></tr>
<tr><td>{{же}}</td><td>wzmocnienie, „przecież”, „ten sam”</td><td>{{Я же говори́л!}} – Przecież mówiłem! {{тот же}} – ten sam</td></tr>
<tr><td>{{ведь}}</td><td>„przecież” (argument)</td><td>{{Ведь ты зна́ешь пра́вду.}}</td></tr>
<tr><td>{{ра́зве}}</td><td>„czyżby”, zdziwienie z wątpliwością</td><td>{{Ра́зве он уе́хал?}}</td></tr>
<tr><td>{{неуже́ли}}</td><td>„naprawdę?!”, silne zdziwienie</td><td>{{Неуже́ли ты сам э́то сде́лал?}}</td></tr>
<tr><td>{{ли}}</td><td>„czy”</td><td>{{Зна́ешь ли ты…}}</td></tr>
<tr><td>{{да́же}}</td><td>nawet</td><td>{{Он да́же не позвони́л.}}</td></tr>
<tr><td>{{-то}}</td><td>podkreślenie tematu</td><td>{{Я́-то зна́ю, а вот он нет.}}</td></tr>
<tr><td>{{вот}}, {{вон}}</td><td>oto, tam</td><td>{{Вот и всё.}} {{Вон там!}}</td></tr>
<tr><td>{{ну}}</td><td>no</td><td>{{Ну, как дела́?}}</td></tr>
<tr><td>{{вообще́-то}}</td><td>w zasadzie, właściwie</td><td>{{Вообще́-то я про́тив.}}</td></tr>
<tr><td>{{так}}</td><td>no to, więc</td><td>{{Так что ты реши́л?}}</td></tr>
<tr><td>{{-ка}}</td><td>złagodzenie rozkazu</td><td>{{Покажи́-ка!}} – No pokaż!</td></tr>
<tr><td>{{пусть}}, {{пуска́й}}</td><td>niech</td><td>{{Пусть он придёт.}}</td></tr>
<tr><td>{{чуть не}}</td><td>omal nie</td><td>{{Я чуть не упа́л.}}</td></tr></table>
[[Где же ты был?|No gdzie ty byłeś?]]
[[Ведь я тебя́ предупрежда́л!|Przecież cię uprzedzałem!]]
[[Неуже́ли уже́ де́сять часо́в?|Czyżby już była dziesiąta?!]]`,
quiz: `
Я ___ говори́л! (przecież)|же|ли|бы
___ ты сам э́то сде́лал?! (naprawdę?! – silne zdziwienie)|Неуже́ли|Ведь|Пусть
Он ___ не позвони́л. (nawet)|да́же|же|то
___ он придёт, е́сли хо́чет. (niech)|Пусть|Пока́|Путь
Я ___ не упа́л. (omal)|чуть|едва́ не бы|почти́ бы
Покажи́-___! (no pokaż)|ка|то|же
___ ты зна́ешь, что я прав! (przecież – argument)|Ведь|Ра́зве|Да́же
Мы живём в том ___ до́ме. (tym samym)|же|ли|бы
___ он уже́ уе́хал? Я не знал. (czyżby)|Ра́зве|Пусть|Вот
Зна́ешь ___ ты, где он? (czy)|ли|же|ка`
},
{ id: 'b2-g9', level: 'B2', title: 'Некого, нечего, негде', subtitle: 'Zaimki przeczące z akcentowanym „не́”', body: `
<p>Zaimki z <b>akcentowanym не́-</b> + bezokolicznik oznaczają <b>brak możliwości</b> („nie ma kogo / czego / gdzie”). Osoba stoi w celowniku.</p>
<table class="gt"><tr><th>zaimek</th><th>znaczenie</th><th>przykład</th></tr>
<tr><td>{{не́кого}}</td><td>nie ma kogo</td><td>{{Мне не́кого спроси́ть.}}</td></tr>
<tr><td>{{не́чего}}</td><td>nie ma czego / nic</td><td>{{Нам не́чего де́лать.}}</td></tr>
<tr><td>{{не́где}}</td><td>nie ma gdzie</td><td>{{Здесь не́где сесть.}}</td></tr>
<tr><td>{{не́куда}}</td><td>nie ma dokąd</td><td>{{Мне не́куда идти́.}}</td></tr>
<tr><td>{{не́когда}}</td><td>nie ma kiedy (brak czasu)</td><td>{{Мне не́когда.}}</td></tr>
<tr><td>{{не́зачем}}</td><td>nie ma po co</td><td>{{Тебе́ не́зачем волнова́ться.}}</td></tr></table>
<h3>Z przyimkiem – przyimek rozdziela</h3>
[[Мне не́ с кем поговори́ть.|Nie mam z kim porozmawiać.]]
[[Не́ о чем говори́ть.|Nie ma o czym mówić.]]
[[Ему́ не́ на кого наде́яться.|Nie ma na kogo liczyć.]]
<h3>Porównanie: никто́ vs не́кого</h3>
[[Никто́ не пришёл.|Nikt nie przyszedł. (никто́ – podmiot, czasownik odmieniony)]]
[[Не́кому бы́ло помо́чь.|Nie było komu pomóc. (не́кому – brak osoby, bezokolicznik)]]
[[Я ничего́ не де́лаю.|Nic nie robię.]]
[[Мне не́чего де́лать.|Nie mam nic do roboty.]]
<div class="tip">💡 Pisownia: {{ни}} – nieakcentowane (никого́, ничего́); {{не́}} – zawsze akcentowane (не́кого, не́чего). W czasie przeszłym/przyszłym dodajemy {{бы́ло}} / {{бу́дет}}: {{Мне не́где бы́ло спать.}}</div>`,
quiz: `
Мне ___ спроси́ть. (nie ma kogo)|не́кого|никого́|не кого́
Нам ___ де́лать. (nie mamy nic do roboty)|не́чего|ничего́|ни́чего
Здесь ___ сесть.|не́где|нигде́|не где
Мне ___ – я спешу́. (nie mam czasu)|не́когда|никогда́|не когда́
Я ___ не ви́жу. (nikogo)|никого́|не́кого|не кого
Мне не́ с ___ поговори́ть.|кем|кого́|кому́
Тебе́ ___ волнова́ться. (nie ma po co)|не́зачем|ни за что|не за что́
Мне ___ бы́ло идти́. (nie było dokąd)|не́куда|никуда́|не туда́
Он ___ не бои́тся. (niczego)|ничего́|не́чего|ни чего
Не́ о ___ говори́ть.|чем|что|чего́`
},
{ id: 'b2-g10', level: 'B2', title: 'Słowotwórstwo rzeczowników i przymiotników', subtitle: 'Przyrostki -тель, -ость, -ство, -ние, -ник', body: `
<p>Znajomość przyrostków pozwala rozumieć nieznane słowa i szybko rozbudowywać słownictwo.</p>
<table class="gt"><tr><th>przyrostek</th><th>znaczenie</th><th>przykłady</th></tr>
<tr><td>-тель</td><td>wykonawca</td><td>{{чита́тель}}, {{води́тель}}, {{зри́тель}}, {{изобрета́тель}}</td></tr>
<tr><td>-ник, -чик, -щик</td><td>osoba, zawód</td><td>{{рабо́тник}}, {{перево́дчик}}, {{убо́рщик}}</td></tr>
<tr><td>-ец / -ка</td><td>mieszkaniec, osoba</td><td>{{мудре́ц}}, {{москви́ч}} / {{москви́чка}}, {{испа́нец}}</td></tr>
<tr><td>-ость / -есть</td><td>cecha (ż.)</td><td>{{сме́лость}}, {{све́жесть}}, {{возмо́жность}}</td></tr>
<tr><td>-ство / -ество</td><td>stan, zbiorowość</td><td>{{де́тство}}, {{о́бщество}}, {{иску́сство}}</td></tr>
<tr><td>-ние / -ение</td><td>czynność (od czasownika)</td><td>{{чте́ние}}, {{реше́ние}}, {{измене́ние}}</td></tr>
<tr><td>-к(а), -очк(а), -ик</td><td>zdrobnienie</td><td>{{ру́чка}}, {{до́мик}}, {{ча́шечка}}</td></tr>
<tr><td>-ище</td><td>zgrubienie</td><td>{{доми́ще}}, {{руки́ща}}</td></tr>
<tr><td>-ов- / -н- / -ск-</td><td>przymiotniki</td><td>{{берёзовый}}, {{зи́мний}}, {{городско́й}}</td></tr>
<tr><td>-лив- / -чив-</td><td>skłonność</td><td>{{счастли́вый}}, {{забо́тливый}}, {{разгово́рчивый}}</td></tr>
<tr><td>без-/бес-</td><td>bez-</td><td>{{безопа́сный}}, {{беспла́тный}}</td></tr></table>
<h3>Zdrobnienia imion</h3>
<p>Rosjanie powszechnie używają zdrobnień: {{Алекса́ндр}} → {{Са́ша}} → {{Са́шенька}}; {{Мари́я}} → {{Ма́ша}}; {{Дми́трий}} → {{Ди́ма}}; {{Еле́на}} → {{Ле́на}}. Oficjalnie: imię + otczestwo: {{Ива́н Петро́вич}}, {{А́нна Серге́евна}}.</p>`,
quiz: `
Osoba, która tłumaczy, to…|перево́дчик|перево́дник|переводи́тель
Cecha „odwaga” od „сме́лый”|сме́лость|сме́лство|сме́ление
Czynność od „реши́ть”|реше́ние|реши́тельство|реши́мость бы
„Dzieciństwo” to…|де́тство|де́тность|детьё
Zdrobnienie od „дом”|до́мик|доми́ще|домо́к бы
„Widz” to…|зри́тель|зре́ник|смотре́тель
Mieszkanka Moskwy to…|москви́чка|москва́нка|москви́ца
Przymiotnik „bezpłatny”|беспла́тный|безпла́тный|неплатёжный
Zdrobnienie od „Алекса́ндр”|Са́ша|А́ля бы|Ле́ша
Otczestwo córki Siergieja|Серге́евна|Серге́вна|Серге́йна`
},
{ id: 'b2-g11', level: 'B2', title: 'Style funkcjonalne i rejestry', subtitle: 'Oficjalny, naukowy, publicystyczny, potoczny', body: `
<p>Na poziomie B2 trzeba umieć <b>dopasować styl</b> do sytuacji. Ta sama myśl brzmi różnie:</p>
<table class="gt"><tr><th>styl</th><th>przykład</th></tr>
<tr><td>potoczny</td><td>{{Сла́бо тебе́ позвони́ть? Дава́й, звони́ уже́!}}</td></tr>
<tr><td>neutralny</td><td>{{Позвони́, пожа́луйста, когда́ смо́жешь.}}</td></tr>
<tr><td>oficjalny</td><td>{{Про́сим Вас связа́ться с на́ми в удо́бное для Вас вре́мя.}}</td></tr></table>
<h3>Cechy stylu oficjalnego i naukowego</h3>
<ul><li>rzeczowniki odczasownikowe: {{осуществле́ние контро́ля}} zamiast {{контроли́ровать}}</li>
<li>{{явля́ться}} zamiast {{быть}}: {{Москва́ явля́ется столи́цей Росси́и.}}</li>
<li>imiesłowy i imiesłowy przysłówkowe</li>
<li>przyimki złożone: {{в соотве́тствии с}}, {{в связи́ с}}, {{в ра́мках}}, {{на основа́нии}}</li>
<li>strona bierna: {{бы́ло устано́влено}}, {{рассма́тривается}}</li>
<li>brak partykuł emocjonalnych i zdrobnień</li></ul>
<h3>List oficjalny</h3>
[[Уважа́емый Ива́н Петро́вич!|Szanowny Panie Iwanie! (imię + otczestwo)]]
[[Обраща́юсь к Вам с про́сьбой…|Zwracam się do Pana z prośbą…]]
[[Заре́нее благодарю́ за отве́т.|Z góry dziękuję za odpowiedź.]]
[[С уваже́нием, А́нна Кова́льская|Z poważaniem, Anna Kowalska]]
<h3>Wypowiedź argumentacyjna (egzamin ТРКИ-2 / B2)</h3>
[[Во-пе́рвых… Во-вторы́х… Кро́ме того́…|Po pierwsze… Po drugie… Poza tym…]]
[[С одно́й стороны́…, с друго́й стороны́…|Z jednej strony…, z drugiej strony…]]
[[Таки́м о́бразом, мо́жно сде́лать вы́вод, что…|Tak więc można wyciągnąć wniosek, że…]]`,
quiz: `
Który styl: „Про́сим Вас связа́ться с на́ми”?|oficjalny|potoczny|naukowy
Formalny odpowiednik „быть” w definicjach:|явля́ться|станови́ться|бытова́ть
Jak zacząć oficjalny list do Iwana Pietrowicza?|Уважа́емый Ива́н Петро́вич!|Приве́т, Ва́ня!|Дорого́й Петро́вич!
Jak zakończyć oficjalny list?|С уваже́нием,|Пока́!|Целу́ю,
„Таки́м о́бразом” służy do…|podsumowania wniosku|zaczynania listu|wyrażania zdziwienia
Oficjalnie „w związku z”:|в связи́ с|из-за|потому́ что
Który zwrot NIE pasuje do stylu naukowego?|Ну, в о́бщем, кла́ссно!|Сле́дует отме́тить, что…|Рассмо́трим да́лее…
„Заре́нее благодарю́” oznacza…|Z góry dziękuję|Dziękuję po fakcie|Przepraszam z góry`
}
);
