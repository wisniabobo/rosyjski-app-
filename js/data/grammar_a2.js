/* Gramatyka A2 */
window.RU = window.RU || { vocab: [], grammar: [], phrases: [], texts: [] };

RU.grammar.push(
{ id: 'a2-g1', level: 'A2', title: 'Celownik (Да́тельный паде́ж)', subtitle: 'Кому́? Чему́? – к, по, wiek, potrzeba', body: `
<p>Celownik odpowiada na pytania <b>кому́? чему́?</b> (komu? czemu?). Poza „dawaniem komuś” służy do wyrażania wieku, stanów i konieczności.</p>
<table class="gt"><tr><th>rodzaj</th><th>mianownik</th><th>celownik</th></tr>
<tr><td>męski, nijaki</td><td>брат, музе́й, окно́, мо́ре</td><td><b>бра́ту, музе́ю, окну́, мо́рю</b></td></tr>
<tr><td>żeński -а/-я</td><td>ма́ма, неде́ля</td><td><b>ма́ме, неде́ле</b></td></tr>
<tr><td>żeński -ь, -ия</td><td>дверь, Мари́я</td><td><b>две́ри, Мари́и</b></td></tr>
<tr><td>liczba mnoga</td><td>бра́тья, кни́ги</td><td><b>бра́тьям, кни́гам</b></td></tr></table>
<p>Zaimki: {{мне}}, {{тебе́}}, {{ему́}}, {{ей}}, {{нам}}, {{вам}}, {{им}}.</p>
<h3>Główne użycia</h3>
[[Я даю́ бра́ту кни́гу.|Daję bratu książkę.]]
[[Позвони́ ма́ме!|Zadzwoń do mamy! (звони́ть + celownik)]]
[[Мне два́дцать лет.|Mam dwadzieścia lat.]]
[[Мне хо́лодно.|Jest mi zimno.]]
[[Нам ну́жно идти́.|Musimy iść.]]
[[Мне нра́вится э́та пе́сня.|Podoba mi się ta piosenka.]]
<h3>Przyimki к i по</h3>
[[Я иду́ к врачу́.|Idę do lekarza. (к – do osoby)]]
[[Приходи́ ко мне!|Przyjdź do mnie!]]
[[Мы гуля́ем по па́рку.|Spacerujemy po parku.]]
[[фильм по рома́ну|film na podstawie powieści]]
[[по телеви́зору, по телефо́ну|w telewizji, przez telefon]]
<div class="warn">⚠️ Czasowniki z celownikiem inaczej niż w polskim: {{помога́ть}} (pomagać komuś ✓), {{звони́ть кому́}} (dzwonić do kogoś), {{сове́товать кому́}}, {{меша́ть кому́}} (przeszkadzać komuś).</div>`,
quiz: `
Я звоню́ ___. (ма́ма)|ма́ме|ма́му|ма́мы
Я даю́ ___ пода́рок. (брат)|бра́ту|бра́та|бра́том
___ два́дцать лет. (ja)|Мне|Меня́|Я
Мы идём к ___. (врач)|врачу́|врача́|вра́чу
___ хо́лодно. (on)|Ему́|Его́|Он
Мы гуля́ем по ___. (парк)|па́рку|па́рке|па́рком
Помоги́ ___! (я)|мне|меня́|я
Приходи́ ___ мне!|ко|к|по
___ ну́жно рабо́тать. (my)|Нам|Нас|Мы
Я пишу́ письмо́ ___. (друзья́)|друзья́м|друзе́й|друзья́х
Я сове́тую ___ отдохну́ть. (ty)|тебе́|тебя́|ты`
},
{ id: 'a2-g2', level: 'A2', title: 'Narzędnik (Твори́тельный паде́ж)', subtitle: 'Кем? Чем? С кем? – с, между, над, под', body: `
<table class="gt"><tr><th>rodzaj</th><th>mianownik</th><th>narzędnik</th></tr>
<tr><td>męski, nijaki (twarde)</td><td>брат, окно́</td><td><b>бра́том, окно́м</b></td></tr>
<tr><td>męski, nijaki (miękkie)</td><td>учи́тель, мо́ре</td><td><b>учи́телем, мо́рем</b></td></tr>
<tr><td>żeński -а/-я</td><td>ма́ма, неде́ля</td><td><b>ма́мой, неде́лей</b></td></tr>
<tr><td>żeński -ь</td><td>дверь, ночь</td><td><b>две́рью, но́чью</b></td></tr>
<tr><td>liczba mnoga</td><td>друзья́, кни́ги</td><td><b>друзья́ми, кни́гами</b></td></tr></table>
<div class="tip">💡 Po ж, ш, ч, щ, ц nieakcentowane „о” → „е”: {{с му́жем}}, {{с ме́сяцем}}, ale {{с отцо́м}} (akcent).</div>
<p>Zaimki: {{мной}}, {{тобо́й}}, {{им}}, {{ей}}, {{на́ми}}, {{ва́ми}}, {{и́ми}}; po przyimku: {{с ним}}, {{с ней}}, {{с ни́ми}}.</p>
<h3>Użycia</h3>
[[Я пишу́ ру́чкой.|Piszę długopisem. (narzędzie)]]
[[Я иду́ в кино́ с дру́гом.|Idę do kina z przyjacielem.]]
[[Он рабо́тает врачо́м.|Pracuje jako lekarz.]]
[[Я хочу́ стать инжене́ром.|Chcę zostać inżynierem.]]
[[Она́ занима́ется му́зыкой.|Ona zajmuje się muzyką.]]
[[чай с молоко́м, хлеб с ма́слом|herbata z mlekiem, chleb z masłem]]
<h3>Przyimki miejsca + narzędnik</h3>
<table class="gt"><tr><td>{{над}}</td><td>nad</td><td>{{над столо́м}}</td></tr>
<tr><td>{{под}}</td><td>pod</td><td>{{под крова́тью}}</td></tr>
<tr><td>{{пе́ред}}</td><td>przed</td><td>{{пе́ред до́мом}}</td></tr>
<tr><td>{{за}}</td><td>za</td><td>{{за до́мом}}</td></tr>
<tr><td>{{ме́жду}}</td><td>między</td><td>{{ме́жду шко́лой и па́рком}}</td></tr>
<tr><td>{{ря́дом с}}</td><td>obok</td><td>{{ря́дом с ба́нком}}</td></tr></table>
<p>Pory roku i dnia to zastygłe narzędniki: {{у́тром}}, {{ве́чером}}, {{зимо́й}}, {{ле́том}}.</p>`,
quiz: `
Я пишу́ ___. (ру́чка)|ру́чкой|ру́чку|ру́чке
Я гуля́ю с ___. (соба́ка)|соба́кой|соба́ку|соба́ки
Он рабо́тает ___. (врач)|врачо́м|врача́|врачу́
Чай с ___. (молоко́)|молоко́м|молока́|молоку́
Я хочу́ стать ___. (учи́тель)|учи́телем|учи́телём|учи́теля
Она́ занима́ется ___. (спорт)|спо́ртом|спо́рта|спорт
Пойдём с ___! (my)|на́ми|нас|нам
Маши́на стои́т пе́ред ___. (дом)|до́мом|до́ма|до́ме
Кот под ___. (крова́ть)|крова́тью|крова́тей|крова́тем
Я говори́л с ___. (он)|ним|им|его́
Мы ходи́ли в кино́ с ___. (друзья́)|друзья́ми|друзья́м|друзе́й
Он живёт с ___. (оте́ц)|отцо́м|отце́м|отца́`
},
{ id: 'a2-g3', level: 'A2', title: 'Dopełniacz: pełny obraz', subtitle: 'Liczba mnoga, ilość, przyimki z dopełniaczem', body: `
<h3>Dopełniacz liczby mnogiej – najtrudniejsza forma</h3>
<table class="gt"><tr><th>typ</th><th>końcówka</th><th>przykłady</th></tr>
<tr><td>męski na spółgłoskę</td><td><b>-ов</b></td><td>стол → столо́в, дом → домо́в</td></tr>
<tr><td>męski na -й</td><td><b>-ев</b></td><td>музе́й → музе́ев</td></tr>
<tr><td>męski na -ж, -ш, -ч, -щ, -ь</td><td><b>-ей</b></td><td>врач → враче́й, слова́рь → словаре́й</td></tr>
<tr><td>żeński na -ь</td><td><b>-ей</b></td><td>дверь → двере́й, ночь → ноче́й</td></tr>
<tr><td>żeński -а, nijaki -о</td><td><b>brak (zero)</b></td><td>кни́га → книг, сло́во → слов</td></tr>
<tr><td>żeński -я, nijaki -е</td><td><b>-ь / zero</b></td><td>неде́ля → неде́ль, зда́ние → зда́ний</td></tr></table>
<div class="tip">💡 Przy końcówce zerowej często pojawia się ruchoma samogłoska: {{ру́чка}} → {{ру́чек}}, {{де́вушка}} → {{де́вушек}}, {{окно́}} → {{о́кон}}, {{письмо́}} → {{пи́сем}}.</div>
<p>Zapamiętaj: {{челове́к}} → {{люде́й}} (ale пять челове́к), {{ребёнок}} → {{дете́й}}, {{друг}} → {{друзе́й}}, {{брат}} → {{бра́тьев}}, {{год}} → {{лет}}, {{раз}} → {{раз}}.</p>
<h3>Słowa ilości + dopełniacz</h3>
[[мно́го люде́й|dużo ludzi]]
[[ма́ло вре́мени|mało czasu]]
[[ско́лько книг?|ile książek?]]
[[буты́лка воды́, килогра́мм я́блок|butelka wody, kilogram jabłek]]
<h3>Przyimki z dopełniaczem</h3>
<table class="gt"><tr><td>{{из}}</td><td>z (wnętrza, skąd)</td><td>{{из Москвы́}}, {{из до́ма}}</td></tr>
<tr><td>{{с}}</td><td>z (powierzchni)</td><td>{{с рабо́ты}}, {{с конце́рта}}</td></tr>
<tr><td>{{от}}</td><td>od (osoby)</td><td>{{от ма́мы}}</td></tr>
<tr><td>{{до}}</td><td>do (granica)</td><td>{{до ве́чера}}, {{до це́нтра}}</td></tr>
<tr><td>{{без}}</td><td>bez</td><td>{{без са́хара}}</td></tr>
<tr><td>{{для}}</td><td>dla</td><td>{{для тебя́}}</td></tr>
<tr><td>{{у}}</td><td>u, przy</td><td>{{у окна́}}</td></tr>
<tr><td>{{по́сле}}</td><td>po</td><td>{{по́сле уро́ка}}</td></tr>
<tr><td>{{о́коло}}, {{напро́тив}}</td><td>obok, naprzeciw</td><td>{{напро́тив па́рка}}</td></tr></table>
<div class="tip">💡 Skąd? – para do „dokąd”: в шко́лу → из шко́лы; на рабо́ту → с рабо́ты; к врачу́ → от врача́.</div>`,
quiz: `
У меня́ мно́го ___. (кни́ги)|книг|кни́гов|кни́г
Здесь мно́го ___. (лю́ди)|люде́й|люди́ев|челове́ков
Пять ___. (стол)|столо́в|столе́й|стола́
Я прие́хал из ___. (Москва́)|Москвы́|Москве́|Москву́
Ко́фе без ___. (са́хар)|са́хара|са́харом|са́хару
Э́то пода́рок для ___. (ты)|тебя́|тебе́|ты
Он пришёл с ___. (рабо́та)|рабо́ты|рабо́ту|рабо́те
Ско́лько у вас ___? (де́ти)|дете́й|де́тей|детя́х
Я получи́л письмо́ от ___. (сестра́)|сестры́|сестре́|сестру́
Семь ___. (неде́ля)|неде́ль|неде́лей|неде́ли
Мно́го ___. (врач)|враче́й|врачо́в|врача́
По́сле ___ мы пойдём в кафе́. (уро́к)|уро́ка|уро́ку|уро́ком`
},
{ id: 'a2-g4', level: 'A2', title: 'Aspekt czasownika', subtitle: 'Niedokonany (НСВ) i dokonany (СВ)', body: `
<p>Tak jak w polskim, prawie każdy czasownik występuje w parze: <b>niedokonany</b> (proces, powtarzanie) i <b>dokonany</b> (rezultat, jednorazowe zakończone działanie). Polak ma tu ogromną przewagę – intuicja zwykle działa!</p>
<table class="gt"><tr><th>niedokonany (НСВ)</th><th>dokonany (СВ)</th></tr>
<tr><td>proces: {{Я чита́л кни́гу два часа́.}}</td><td>rezultat: {{Я прочита́л кни́гу.}}</td></tr>
<tr><td>powtarzanie: {{Он ча́сто звони́л.}}</td><td>jednorazowo: {{Он позвони́л вчера́.}}</td></tr>
<tr><td>fakt (czy w ogóle?): {{Ты чита́л э́ту кни́гу?}}</td><td>następstwo czynności: {{Он встал, умы́лся и вы́шел.}}</td></tr></table>
<h3>Jak tworzą się pary?</h3>
<table class="gt"><tr><td>przedrostek</td><td>де́лать → <b>с</b>де́лать, писа́ть → <b>на</b>писа́ть, чита́ть → <b>про</b>чита́ть</td></tr>
<tr><td>przyrostek</td><td>реша́ть → реши́ть, покупа́ть → купи́ть, дава́ть → дать</td></tr>
<tr><td>-ива-/-ыва-</td><td>расска́зывать → рассказа́ть, пока́зывать → показа́ть</td></tr>
<tr><td>inny rdzeń</td><td>говори́ть → сказа́ть, брать → взять, класть → положи́ть, иска́ть → найти́</td></tr></table>
<h3>Czas teraźniejszy – tylko niedokonany</h3>
<p>Czasownik dokonany <b>nie ma czasu teraźniejszego</b>. Jego formy „teraźniejsze” oznaczają przyszłość:</p>
[[Я пишу́ письмо́.|Piszę list. (teraz)]]
[[Я напишу́ письмо́.|Napiszę list. (przyszłość)]]
<h3>Sygnały w zdaniu</h3>
<p>Niedokonany: {{ча́сто}}, {{всегда́}}, {{ка́ждый день}}, {{до́лго}}, {{обы́чно}}, {{иногда́}}. Dokonany: {{вдруг}}, {{сра́зу}}, {{наконе́ц}}, {{уже́}}, {{за час}} (w ciągu godziny).</p>
[[Я писа́л письмо́ час.|Pisałem list (przez) godzinę.]]
[[Я написа́л письмо́ за час.|Napisałem list w godzinę.]]`,
quiz: `
Вчера́ я ___ э́ту кни́гу до конца́.|прочита́л|чита́л|чита́ю
Ка́ждый день он ___ ма́ме.|звони́т|позвони́т|позвони́л
Я ___ письмо́ два часа́.|писа́л|написа́л|напишу́
Наконе́ц мы ___ э́ту зада́чу!|реши́ли|реша́ли|реша́ем
Он ча́сто ___ мне пода́рки.|дари́л|подари́л|пода́рит
Ты уже́ ___ дома́шнее зада́ние?|сде́лал|де́лал|де́лаешь
Dokonany odpowiednik „говори́ть” to…|сказа́ть|поговори́ть|вы́говорить
Dokonany odpowiednik „брать” to…|взять|бра́ться|забра́ть
За́втра я ___ тебе́. (zadzwonię)|позвоню́|звоню́|звони́л
Она́ ___, умы́лась и пошла́ на рабо́ту.|вста́ла|встава́ла|встаёт
Dokonany odpowiednik „покупа́ть” to…|купи́ть|покупи́ть|попокупа́ть
Мы ___ фильм, когда́ позвони́л па́па. (w trakcie)|смотре́ли|посмотре́ли|посмо́трим`
},
{ id: 'a2-g5', level: 'A2', title: 'Aspekt w czasie przyszłym', subtitle: 'Бу́ду де́лать vs сде́лаю', body: `
<table class="gt"><tr><th>przyszły złożony (НСВ)</th><th>przyszły prosty (СВ)</th></tr>
<tr><td>бу́ду + bezokolicznik niedokonany</td><td>formy osobowe czasownika dokonanego</td></tr>
<tr><td>{{За́втра я бу́ду чита́ть.}}<br>Jutro będę czytać (zajmę się czytaniem).</td><td>{{За́втра я прочита́ю статью́.}}<br>Jutro przeczytam artykuł (skończę).</td></tr>
<tr><td>{{Я бу́ду звони́ть тебе́ ка́ждый день.}}</td><td>{{Я позвоню́ тебе́ ве́чером.}}</td></tr></table>
<div class="warn">⚠️ NIE można łączyć {{бу́ду}} z czasownikiem dokonanym: ✗ бу́ду прочита́ть.</div>
<h3>Odmiana typowych czasowników dokonanych</h3>
<table class="gt"><tr><th></th><th>сказа́ть</th><th>взять</th><th>нача́ть</th><th>поня́ть</th></tr>
<tr><td>я</td><td>скажу́</td><td>возьму́</td><td>начну́</td><td>пойму́</td></tr>
<tr><td>ты</td><td>ска́жешь</td><td>возьмёшь</td><td>начнёшь</td><td>поймёшь</td></tr>
<tr><td>он</td><td>ска́жет</td><td>возьмёт</td><td>начнёт</td><td>поймёт</td></tr>
<tr><td>они́</td><td>ска́жут</td><td>возьму́т</td><td>начну́т</td><td>пойму́т</td></tr></table>
<h3>Пойти́, пое́хать – „pójść, pojechać”</h3>
[[За́втра мы пойдём в теа́тр.|Jutro pójdziemy do teatru.]]
[[Ле́том я пое́ду в Росси́ю.|Latem pojadę do Rosji.]]
[[Пойдём!|Chodźmy!]]
<h3>Zdania czasowe z когда́ / е́сли</h3>
<p>Jak w polskim, po {{когда́}} i {{е́сли}} dotyczących przyszłości używamy czasu przyszłego:</p>
[[Когда́ я зако́нчу рабо́ту, я позвоню́.|Kiedy skończę pracę, zadzwonię.]]
[[Е́сли бу́дет хоро́шая пого́да, мы пое́дем на да́чу.|Jeśli będzie ładna pogoda, pojedziemy na daczę.]]`,
quiz: `
За́втра я ___ тебе́ письмо́. (napiszę)|напишу́|бу́ду написа́ть|пишу́
Ве́чером я ___ телеви́зор. (będę oglądać)|бу́ду смотре́ть|посмотрю́ть|бу́ду посмотре́ть
Я ___ тебе́ пра́вду. (powiem)|скажу́|сказу́|ска́жу
Ле́том мы ___ в Петербу́рг.|пое́дем|пое́здим|бу́дем пое́хать
Когда́ ты ___, позвони́! (przyjedziesz)|прие́дешь|приезжа́ешь|прие́хал
Е́сли ___ дождь, мы оста́немся до́ма.|бу́дет|есть|был
Ты ___ меня́? (zrozumiesz)|поймёшь|понима́шь|пойму́т
За́втра мы ___ в кино́. (pójdziemy)|пойдём|идём|хо́дим
Я ___ э́ту кни́гу. (wezmę)|возьму́|взяму́|беру́ть
Когда́ они́ ___ рабо́ту? (zaczną)|начну́т|начина́ют бу́дут|на́чат`
},
{ id: 'a2-g6', level: 'A2', title: 'Tryb rozkazujący', subtitle: 'Чита́й! Говори́те! Дава́йте!', body: `
<p>Tryb rozkazujący tworzymy od tematu 3. osoby l. mnogiej (они́), odrzucając końcówkę:</p>
<table class="gt"><tr><th>typ</th><th>они́</th><th>ты</th><th>вы</th></tr>
<tr><td>temat na samogłoskę → <b>-й</b></td><td>чита́-ют</td><td><b>чита́й</b></td><td><b>чита́йте</b></td></tr>
<tr><td>akcent na końcówce → <b>-и́</b></td><td>говор-я́т, пиш-ут</td><td><b>говори́, пиши́</b></td><td><b>говори́те, пиши́те</b></td></tr>
<tr><td>akcent na temacie → <b>-ь</b></td><td>гото́в-ят, ве́р-ят</td><td><b>гото́вь, верь</b></td><td><b>гото́вьте, ве́рьте</b></td></tr></table>
[[Чита́йте текст!|Przeczytajcie tekst!]]
[[Пиши́ мне!|Pisz do mnie!]]
[[Скажи́те, пожа́луйста, где метро́?|Proszę powiedzieć, gdzie jest metro?]]
[[Не волну́йся!|Nie denerwuj się!]]
<h3>Nieregularne</h3>
<table class="gt"><tr><td>дава́ть → дава́й</td><td>есть → ешь</td><td>пить → пей</td></tr>
<tr><td>дать → дай</td><td>е́хать → поезжа́й</td><td>встава́ть → встава́й</td></tr>
<tr><td>быть → будь</td><td>лечь → ляг</td><td>сесть → сядь</td></tr></table>
<h3>Дава́й(те) – „zróbmy coś”</h3>
[[Дава́й пойдём в кино́!|Chodźmy do kina!]]
[[Дава́йте познако́мимся.|Poznajmy się.]]
[[Дава́й встре́тимся за́втра.|Spotkajmy się jutro.]]
<h3>Uprzejmie</h3>
<p>Z {{пожа́луйста}} i czasownikiem dokonanym prośba brzmi grzecznie: {{Помоги́те, пожа́луйста!}} Niedokonany w rozkazie często znaczy zachętę: {{Проходи́те, сади́тесь!}} (Proszę wejść, proszę siadać!)</p>`,
quiz: `
___ текст! (чита́ть, ty)|Чита́й|Чита́и|Чита́ть
___, пожа́луйста, где вокза́л? (сказа́ть, wy)|Скажи́те|Сказа́йте|Ска́жете
Не ___! (волнова́ться, ty)|волну́йся|волнова́йся|волну́ешься
___ мне за́втра! (позвони́ть, ty)|Позвони́|Позвоня́й|Позво́нь
___ пойдём в кино́!|Дава́й|Дай|Дава́ть
___ здоро́в! (быть)|Будь|Бу́ди|Бы́вай
___ суп! (есть, ty)|Ешь|Е́шьте|Еди́
___ ча́ю! (пить, ty)|Пей|Пи́и|Пьй
___, пожа́луйста! (сади́ться, wy)|Сади́тесь|Сади́тесь бы|Сади́ться
___ познако́мимся!|Дава́йте|Дава́ем|Дайте
Не ___ об э́том! (забыва́ть, wy)|забыва́йте|забу́дьте|забыва́ете`
},
{ id: 'a2-g7', level: 'A2', title: 'Odmiana przymiotników', subtitle: 'Wszystkie przypadki: -ого, -ому, -ым, -ой', body: `
<table class="gt"><tr><th>przypadek</th><th>m. / n.</th><th>ż.</th><th>l. mn.</th></tr>
<tr><td>Им. (kto? co?)</td><td>но́вый / но́вое</td><td>но́вая</td><td>но́вые</td></tr>
<tr><td>Род. (kogo? czego?)</td><td>но́вого [nowawa]</td><td>но́вой</td><td>но́вых</td></tr>
<tr><td>Дат. (komu? czemu?)</td><td>но́вому</td><td>но́вой</td><td>но́вым</td></tr>
<tr><td>Вин. (kogo? co?)</td><td>= Им. / Род. (żywotne)</td><td>но́вую</td><td>= Им. / Род.</td></tr>
<tr><td>Твор. (kim? czym?)</td><td>но́вым</td><td>но́вой</td><td>но́выми</td></tr>
<tr><td>Пр. (o kim? o czym?)</td><td>но́вом</td><td>но́вой</td><td>но́вых</td></tr></table>
<h3>Przymiotniki miękkie (си́ний)</h3>
<table class="gt"><tr><td>m./n.</td><td>си́него, си́нему, си́ним, си́нем</td></tr>
<tr><td>ż.</td><td>си́ней, си́нюю</td></tr><tr><td>l. mn.</td><td>си́них, си́ним, си́ними</td></tr></table>
[[в но́вом до́ме|w nowym domu]]
[[у ста́ршего бра́та|u starszego brata]]
[[с хоро́шей подру́гой|z dobrą przyjaciółką]]
[[Я ви́жу краси́вую де́вушку.|Widzę ładną dziewczynę.]]
[[Я люблю́ ру́сскую литерату́ру.|Kocham literaturę rosyjską.]]
<div class="tip">💡 Końcówkę przymiotnika łatwo zgadnąć z pytania: {{како́го?}} → -ого, {{како́му?}} → -ому, {{каки́м?}} → -ым, {{како́й?}} (ż. dop./cel./narz./miejsc.) → -ой. Zaimki {{э́тот}}, {{мой}}, {{наш}} odmieniają się podobnie: {{э́того}}, {{моему́}}, {{на́шим}}.</div>`,
quiz: `
Я живу́ в ___ до́ме. (но́вый)|но́вом|но́вым|но́вого
У ___ бра́та есть маши́на. (ста́рший)|ста́ршего|ста́ршему|ста́ршим
Я ви́жу ___ де́вушку. (краси́вая)|краси́вую|краси́вой|краси́вая
Мы говори́м о ___ фи́льме. (интере́сный)|интере́сном|интере́сным|интере́сного
Он гуля́ет с ___ соба́кой. (большо́й)|большо́й|большу́ю|большо́го
Я пишу́ ___ дру́гу. (ста́рый)|ста́рому|ста́рого|ста́рым
Я люблю́ ___ му́зыку. (ру́сская)|ру́сскую|ру́сской|ру́сская
В ___ го́роде мно́го музе́ев. (э́тот)|э́том|э́тим|э́того
Нет ___ воды́. (горя́чая)|горя́чей|горя́чую|горя́чая
Мы жи́ли в ___ гости́ницах. (дороги́е)|дороги́х|дороги́ми|дороги́м
Я знако́м с ___ сестро́й. (твоя́)|твое́й|твою́|твоя́`
},
{ id: 'a2-g8', level: 'A2', title: 'Odmiana zaimków osobowych', subtitle: 'Меня́, мне, мной… i zaimek себя́', body: `
<div class="scroll"><table class="gt"><tr><th></th><th>я</th><th>ты</th><th>он/оно́</th><th>она́</th><th>мы</th><th>вы</th><th>они́</th></tr>
<tr><td>Род.</td><td>меня́</td><td>тебя́</td><td>его́ (у него́)</td><td>её (у неё)</td><td>нас</td><td>вас</td><td>их (у них)</td></tr>
<tr><td>Дат.</td><td>мне</td><td>тебе́</td><td>ему́ (к нему́)</td><td>ей (к ней)</td><td>нам</td><td>вам</td><td>им (к ним)</td></tr>
<tr><td>Вин.</td><td>меня́</td><td>тебя́</td><td>его́ (на него́)</td><td>её (на неё)</td><td>нас</td><td>вас</td><td>их (на них)</td></tr>
<tr><td>Твор.</td><td>мной</td><td>тобо́й</td><td>им (с ним)</td><td>ей (с ней)</td><td>на́ми</td><td>ва́ми</td><td>и́ми (с ни́ми)</td></tr>
<tr><td>Пр.</td><td>обо мне</td><td>о тебе́</td><td>о нём</td><td>о ней</td><td>о нас</td><td>о вас</td><td>о них</td></tr></table></div>
<div class="tip">💡 Po przyimkach zaimki 3. osoby dostają <b>н-</b>: {{у него́}}, {{к ней}}, {{с ни́ми}}. Ale zaimki dzierżawcze – nie: {{у его́ бра́та}} (u jego brata).</div>
<h3>Себя́ – „siebie”</h3>
<p>Nie ma mianownika. Formy: {{себя́}}, {{себе́}}, {{собо́й}}, {{о себе́}}.</p>
[[Расскажи́те о себе́.|Proszę opowiedzieć o sobie.]]
[[Я купи́л себе́ кни́гу.|Kupiłem sobie książkę.]]
[[Возьми́ зонт с собо́й.|Weź parasol ze sobą.]]
[[Как вы себя́ чу́вствуете?|Jak się Pan czuje?]]
<h3>Свой – „swój”</h3>
<p>{{свой}} odnosi się do podmiotu zdania. Różnica ważna w 3. osobie:</p>
[[Он лю́бит свою́ жену́.|On kocha swoją żonę.]]
[[Он лю́бит его́ жену́.|On kocha jego (innego mężczyzny) żonę!]]`,
quiz: `
Я говори́л с ___. (он)|ним|им|его́
У ___ есть сестра́? (она́)|неё|её|ней
Приходи́ к ___! (my)|нам|нас|на́ми
Расскажи́ о ___. (siebie)|себе́|себя́|собо́й
Он лю́бит ___ ма́му. (swoją)|свою́|его́|её
Я ду́мал о ___. (ty)|тебе́|тебя́|тобо́й
Мы бы́ли у ___. (oni)|них|их|ним
Возьми́ ключи́ с ___.|собо́й|себя́|себе́
Что с ___? (ty)|тобо́й|тебя́|тебе́
Я ___ не понима́ю. (wy)|вас|вам|ва́ми
Позвони́ ___. (on)|ему́|его́|ним`
},
{ id: 'a2-g9', level: 'A2', title: 'Stopniowanie przymiotników i przysłówków', subtitle: 'Бо́льше, лу́чше, са́мый краси́вый', body: `
<h3>Stopień wyższy prosty: -ее</h3>
<p>Nieodmienny, służy jako orzeczenie i przysłówek:</p>
[[бы́стрый → быстре́е|szybki → szybszy / szybciej]]
[[интере́сный → интере́снее|ciekawy → ciekawszy]]
[[тёплый → тепле́е|ciepły → cieplejszy]]
<h3>Formy z wymianą: -е</h3>
<table class="gt"><tr><td>большо́й → бо́льше</td><td>ма́ленький → ме́ньше</td><td>хоро́ший → лу́чше</td></tr>
<tr><td>плохо́й → ху́же</td><td>дорого́й → доро́же</td><td>дешёвый → деше́вле</td></tr>
<tr><td>молодо́й → моло́же</td><td>ста́рый → ста́рше</td><td>высо́кий → вы́ше</td></tr>
<tr><td>ни́зкий → ни́же</td><td>лёгкий → ле́гче</td><td>просто́й → про́ще</td></tr>
<tr><td>далёкий → да́льше</td><td>бли́зкий → бли́же</td><td>ча́стый → ча́ще</td></tr></table>
<h3>Porównanie: чем / dopełniacz</h3>
[[Москва́ бо́льше, чем Варша́ва.|Moskwa jest większa niż Warszawa.]]
[[Москва́ бо́льше Варша́вы.|Moskwa jest większa od Warszawy.]]
[[Брат ста́рше меня́ на три го́да.|Brat jest starszy ode mnie o trzy lata.]]
<h3>Stopień wyższy złożony: бо́лее</h3>
<p>Odmienny, stoi przed rzeczownikiem: [[бо́лее интере́сная кни́га|ciekawsza książka]] [[бо́лее удо́бный ва́риант|wygodniejsza opcja]]</p>
<h3>Stopień najwyższy: са́мый</h3>
[[са́мый большо́й го́род|największe miasto]]
[[са́мая краси́вая у́лица|najpiękniejsza ulica]]
[[Он лу́чше всех.|On jest najlepszy (lepszy od wszystkich).]]
[[Бо́льше всего́ я люблю́ чита́ть.|Najbardziej lubię czytać.]]`,
quiz: `
Москва́ ___, чем Варша́ва. (duża)|бо́льше|бо́лее|большая́
Сего́дня ___, чем вчера́. (ciepło)|тепле́е|теплее́й|бо́лее тёплый
Мой брат ___ меня́. (starszy)|ста́рше|старе́е|ста́рее
Э́тот телефо́н ___. (tańszy)|деше́вле|дешеве́е|деше́вше
Э́то ___ большо́й го́род в Росси́и.|са́мый|бо́лее|наибо́льший
Она́ поёт ___ всех. (najlepiej)|лу́чше|хоро́ше|са́мый
Говори́ ___, пожа́луйста! (wolniej)|ме́дленнее|ме́дленно|ме́дленнейше
Э́та зада́ча ___. (łatwiejsza)|ле́гче|легче́е|лёгше
Я живу́ ___ от це́нтра, чем ты. (dalej)|да́льше|далее́|дале́е
Москва́ бо́льше ___. (Варша́ва)|Варша́вы|Варша́ва|Варша́ву`
},
{ id: 'a2-g10', level: 'A2', title: 'Modalność: можно, нельзя, на́до, до́лжен', subtitle: 'Musieć, móc, umieć, wolno', body: `
<table class="gt"><tr><th>konstrukcja</th><th>znaczenie</th><th>przykład</th></tr>
<tr><td>(мне) мо́жно + bezok.</td><td>można, wolno</td><td>{{Мо́жно войти́?}}</td></tr>
<tr><td>(мне) нельзя́ + bezok.</td><td>nie wolno / nie da się</td><td>{{Здесь нельзя́ кури́ть.}}</td></tr>
<tr><td>(мне) на́до / ну́жно + bezok.</td><td>trzeba, muszę</td><td>{{Мне на́до рабо́тать.}}</td></tr>
<tr><td>до́лжен, должна́, должны́ + bezok.</td><td>powinien, musi</td><td>{{Я до́лжен идти́.}}</td></tr>
<tr><td>мочь (могу́)</td><td>móc (możliwość)</td><td>{{Я не могу́ прийти́.}}</td></tr>
<tr><td>уме́ть (уме́ю)</td><td>umieć (umiejętność)</td><td>{{Я уме́ю пла́вать.}}</td></tr></table>
<h3>Czas przeszły i przyszły</h3>
[[Мне на́до бы́ло рабо́тать.|Musiałem pracować.]]
[[Мне на́до бу́дет рабо́тать.|Będę musiał pracować.]]
[[Он до́лжен был позвони́ть.|Miał zadzwonić.]]
<h3>Potrzebny: ну́жен, нужна́, ну́жно, нужны́</h3>
<p>Rzecz potrzebna jest w mianowniku, osoba w celowniku:</p>
[[Мне ну́жен слова́рь.|Potrzebuję słownika.]]
[[Мне нужна́ по́мощь.|Potrzebuję pomocy.]]
[[Нам нужны́ де́ньги.|Potrzebujemy pieniędzy.]]
<div class="warn">⚠️ {{нельзя́}} z czasownikiem <b>dokonanym</b> = niemożliwość: {{Э́то нельзя́ сде́лать.}} (Nie da się tego zrobić.), z <b>niedokonanym</b> = zakaz: {{Туда́ нельзя́ входи́ть.}} (Tam nie wolno wchodzić.)</div>`,
quiz: `
Здесь ___ кури́ть. (nie wolno)|нельзя́|не мо́жно|не на́до
___ войти́? (można)|Мо́жно|Мочь|Могу́
Мне ___ слова́рь. (potrzebny)|ну́жен|нужна́|нужны́
Нам ___ по́мощь.|нужна́|ну́жен|ну́жно
Она́ ___ позвони́ть ма́ме. (powinna)|должна́|до́лжен|должно́
Я ___ пла́вать. (umiem)|уме́ю|могу́|зна́ю
Мне на́до ___ рабо́тать. (musiałem)|бы́ло|был|была́
Извини́, я не ___ прийти́ за́втра.|могу́|уме́ю|мо́жно
Им ___ де́ньги.|нужны́|ну́жен|нужна́
Вы ___ заплати́ть сейча́с. (musicie)|должны́|должна́|до́лжен`
},
{ id: 'a2-g11', level: 'A2', title: 'Daty, godziny i wyrażenia czasu', subtitle: 'Како́е сего́дня число́? В како́м году́?', body: `
<h3>Data</h3>
[[Како́е сего́дня число́? — Сего́дня пе́рвое ма́я.|Który dziś jest? – Dziś pierwszy maja.]]
[[Я роди́лся пя́того октября́.|Urodziłem się piątego października.]]
<p>Dzień – liczebnik porządkowy rodzaju nijakiego (число́); miesiąc – w dopełniaczu. „Kiedy?” – liczebnik w dopełniaczu: {{пя́того ма́я}}.</p>
<h3>Rok</h3>
[[в две ты́сячи два́дцать пя́том году́|w roku 2025]]
[[две ты́сячи два́дцать пя́тый год|rok 2025]]
<h3>Kiedy? – przyimki</h3>
<table class="gt"><tr><td>dzień tygodnia</td><td>в + bier.</td><td>{{в понеде́льник}}, {{в сре́ду}}, {{в суббо́ту}}</td></tr>
<tr><td>miesiąc, rok</td><td>в + miejsc.</td><td>{{в ма́е}}, {{в э́том году́}}</td></tr>
<tr><td>tydzień</td><td>на + miejsc.</td><td>{{на э́той неде́ле}}, {{на про́шлой неде́ле}}</td></tr>
<tr><td>godzina</td><td>в + bier.</td><td>{{в три часа́}}</td></tr>
<tr><td>za (po upływie)</td><td>че́рез + bier.</td><td>{{че́рез час}}, {{че́рез два дня}}</td></tr>
<tr><td>temu</td><td>bier. + наза́д</td><td>{{год наза́д}}, {{пять мину́т наза́д}}</td></tr>
<tr><td>od… do…</td><td>с + dop. до + dop.</td><td>{{с девяти́ до пяти́}}</td></tr></table>
<h3>Godziny potocznie</h3>
[[полови́на пя́того|wpół do piątej (4:30)]]
[[без пяти́ три|za pięć trzecia]]
[[че́тверть восьмо́го|kwadrans po siódmej]]`,
quiz: `
Сего́дня ___ ма́я. (1)|пе́рвое|пе́рвый|пе́рвого
Я роди́лся ___ октября́. (5)|пя́того|пя́тое|пя́тый
Мы встре́тимся ___ пя́тницу.|в|на|по
Я был в Москве́ ___ э́той неде́ле.|на|в|по
Он прие́дет ___ час. (za godzinę)|че́рез|по́сле|за
Я прие́хал сюда́ год ___. (temu)|наза́д|пе́ред|че́рез
Магази́н рабо́тает с ___ до восьми́. (9)|девяти́|девя́ть|девя́того
В како́м ___ ты роди́лся?|году́|го́де|год
Экза́мен бу́дет ___ ию́не.|в|на|по
Сейча́с полови́на ___. (4:30)|пя́того|четвёртого|пяти́`
},
{ id: 'a2-g12', level: 'A2', title: 'Zdania złożone', subtitle: 'Что, что́бы, потому́ что, е́сли, когда́, кото́рый', body: `
<table class="gt"><tr><th>spójnik</th><th>znaczenie</th><th>przykład</th></tr>
<tr><td>{{что}}</td><td>że</td><td>{{Я зна́ю, что он до́ма.}}</td></tr>
<tr><td>{{потому́ что}}</td><td>ponieważ</td><td>{{Я не пришёл, потому́ что боле́л.}}</td></tr>
<tr><td>{{поэ́тому}}</td><td>dlatego</td><td>{{Я боле́л, поэ́тому не пришёл.}}</td></tr>
<tr><td>{{е́сли}}</td><td>jeśli</td><td>{{Е́сли хо́чешь, пойдём.}}</td></tr>
<tr><td>{{когда́}}</td><td>kiedy</td><td>{{Когда́ я был ма́леньким, я жил в дере́вне.}}</td></tr>
<tr><td>{{хотя́}}</td><td>chociaż</td><td>{{Хотя́ бы́ло хо́лодно, мы гуля́ли.}}</td></tr>
<tr><td>{{где}}, {{куда́}}</td><td>gdzie, dokąd</td><td>{{Я зна́ю, где он живёт.}}</td></tr></table>
<h3>Что́бы – „żeby”</h3>
<p>1) ten sam podmiot → <b>bezokolicznik</b>; 2) różne podmioty → <b>czas przeszły</b>:</p>
[[Я пришёл, что́бы помо́чь.|Przyszedłem, żeby pomóc.]]
[[Я хочу́, что́бы ты помо́г.|Chcę, żebyś pomógł.]]
[[Ма́ма сказа́ла, что́бы я купи́л хлеб.|Mama powiedziała, żebym kupił chleb.]]
<h3>Тот, кто; то, что</h3>
[[Я не понима́ю того́, что ты говори́шь.|Nie rozumiem tego, co mówisz.]]
[[Тот, кто ра́но встаёт, мно́го успева́ет.|Kto wcześnie wstaje, dużo zdąży.]]
<div class="tip">💡 W rosyjskim <b>zawsze</b> stawiamy przecinek przed что, что́бы, потому́ что, когда́, е́сли, кото́рый – tak jak w polskim.</div>`,
quiz: `
Я не пришёл, ___ боле́л.|потому́ что|поэ́тому|что́бы
Я боле́л, ___ не пришёл.|поэ́тому|потому́ что|е́сли
Я хочу́, ___ ты пришёл.|что́бы|что|е́сли
Я пришёл, что́бы ___ тебе́. (pomóc)|помо́чь|помо́г|помогу́
Я зна́ю, ___ он живёт. (gdzie)|где|куда́|когда́
___ хо́чешь, я тебе́ помогу́.|Е́сли|Что́бы|Хотя́
Ма́ма хо́чет, что́бы я ___ домо́й. (wrócił)|верну́лся|верну́сь|верну́ться
___ бы́ло хо́лодно, мы гуля́ли.|Хотя́|Потому́ что|Что́бы
Он сказа́л, ___ за́втра бу́дет дождь.|что|что́бы|потому́
___ я был ма́леньким, я жил в дере́вне.|Когда́|Е́сли|Хотя́`
},
{ id: 'a2-g13', level: 'A2', title: 'Czasowniki ruchu z przedrostkami – wprowadzenie', subtitle: 'При-, у-, в-, вы-, пере-, под-, от-', body: `
<p>Przedrostki nadają kierunek. Z czasownikiem jednokierunkowym (идти́, е́хать) tworzą <b>dokonany</b>, z wielokierunkowym (ходи́ть, е́здить) – <b>niedokonany</b>. Idealnie jak w polskim!</p>
<table class="gt"><tr><th>przedrostek</th><th>znaczenie</th><th>НСВ / СВ</th><th>przyimek</th></tr>
<tr><td>при-</td><td>przybyć</td><td>приходи́ть / прийти́</td><td>в, на, к</td></tr>
<tr><td>у-</td><td>odejść, odjechać</td><td>уходи́ть / уйти́</td><td>из, с, от</td></tr>
<tr><td>в(о)-</td><td>wejść</td><td>входи́ть / войти́</td><td>в</td></tr>
<tr><td>вы-</td><td>wyjść</td><td>выходи́ть / вы́йти</td><td>из</td></tr>
<tr><td>пере-</td><td>przejść (przez)</td><td>переходи́ть / перейти́</td><td>че́рез / bier.</td></tr>
<tr><td>под(о)-</td><td>podejść</td><td>подходи́ть / подойти́</td><td>к</td></tr>
<tr><td>от(о)-</td><td>odejść (na bok)</td><td>отходи́ть / отойти́</td><td>от</td></tr>
<tr><td>за-</td><td>wstąpić, zajść</td><td>заходи́ть / зайти́</td><td>в, на, к</td></tr>
<tr><td>про-</td><td>przejść obok / przez</td><td>проходи́ть / пройти́</td><td>ми́мо, че́рез</td></tr>
<tr><td>до-</td><td>dojść do</td><td>доходи́ть / дойти́</td><td>до</td></tr></table>
[[Он пришёл домо́й в семь.|Przyszedł do domu o siódmej.]]
[[Она́ ушла́ с рабо́ты ра́но.|Wyszła z pracy wcześnie.]]
[[Мы вы́шли из до́ма.|Wyszliśmy z domu.]]
[[Зайди́ ко мне ве́чером!|Wpadnij do mnie wieczorem!]]
[[Как дойти́ до вокза́ла?|Jak dojść do dworca?]]
<div class="warn">⚠️ Z przedrostkami {{е́здить}} zmienia się w <b>-езжа́ть</b>: приезжа́ть / прие́хать, уезжа́ть / уе́хать, переезжа́ть / перее́хать. A {{идти́}} w <b>-йти</b>: прийти́, уйти́, вы́йти.</div>`,
quiz: `
Он ___ домо́й в 7 часо́в. (przyszedł)|пришёл|ушёл|вы́шел
Она́ ___ из ко́мнаты. (wyszła)|вы́шла|пришла́|вошла́
Когда́ ты ___ в Москву́? (przyjedziesz)|прие́дешь|уе́дешь|перее́дешь
___ ко мне ве́чером! (wpadnij)|Зайди́|Уйди́|Вы́йди
Как ___ до вокза́ла? (dojść)|дойти́|уйти́|пройти́ до
Мы ___ у́лицу на зелёный свет. (przeszliśmy)|перешли́|пришли́|ушли́
Он ___ в ко́мнату. (wszedł)|вошёл|вы́шел|отошёл
Я ___ к окну́. (podszedłem)|подошёл|пришёл|перешёл
В про́шлом году́ мы ___ в но́вую кварти́ру.|перее́хали|прие́хали|пое́хали
Не ___! Подожди́ меня́! (nie odchodź)|уходи́|приходи́|входи́`
},
{ id: 'a2-g14', level: 'A2', title: 'Zaimki nieokreślone: -то, -нибудь', subtitle: 'Кто́-то, что-нибудь, когда́-то', body: `
<table class="gt"><tr><th>-то</th><th>-нибудь</th></tr>
<tr><td>konkretne, ale nieznane mówiącemu</td><td>jakiekolwiek, dowolne</td></tr>
<tr><td>{{Кто́-то звони́л.}} – Ktoś dzwonił (zdarzyło się).</td><td>{{Кто́-нибудь звони́л?}} – Czy ktoś dzwonił?</td></tr>
<tr><td>{{Я что́-то слы́шал.}} – Coś słyszałem.</td><td>{{Купи́ что́-нибудь.}} – Kup coś (cokolwiek).</td></tr>
<tr><td>zdania twierdzące w przeszłości / teraźniejszości</td><td>pytania, rozkazy, przyszłość, если</td></tr></table>
[[Он где́-то здесь.|On jest gdzieś tutaj.]]
[[Ты когда́-нибудь был в Москве́?|Byłeś kiedyś w Moskwie?]]
[[Когда́-то здесь был лес.|Kiedyś był tu las.]]
[[Позвони́ мне, е́сли что́-нибудь случи́тся.|Zadzwoń, jeśli coś się stanie.]]
<h3>Кое-</h3>
<p>{{ко́е-что}}, {{ко́е-кто}} – coś/ktoś konkretnego, co mówiący wie, ale nie mówi: {{Я хочу́ тебе́ ко́е-что сказа́ть.}} (Chcę ci coś powiedzieć.)</p>
<h3>Przeczenia: никто́, ничего́, никогда́</h3>
<p>W rosyjskim – jak w polskim – <b>podwójne przeczenie</b> jest obowiązkowe:</p>
[[Я никого́ не ви́жу.|Nikogo nie widzę.]]
[[Он ничего́ не зна́ет.|On nic nie wie.]]
[[Я никогда́ не был в Кита́е.|Nigdy nie byłem w Chinach.]]
[[Никто́ не пришёл.|Nikt nie przyszedł.]]`,
quiz: `
___ звони́л тебе́, пока́ тебя́ не́ было. (ktoś)|Кто́-то|Кто́-нибудь|Никто́
Ты ___ был в Росси́и? (kiedyś)|когда́-нибудь|когда́-то|никогда́
Купи́ ___ на у́жин. (coś)|что́-нибудь|что́-то|ничего́
Я ___ не зна́ю. (nic)|ничего́|что́-то|что́-нибудь
___ здесь был теа́тр. (kiedyś, dawno)|Когда́-то|Когда́-нибудь|Никогда́
Мои́ ключи́ ___ здесь. (gdzieś)|где́-то|где́-нибудь|нигде́
Я ___ не ви́жу. (nikogo)|никого́|кого́-то|ни кто
Мне на́до тебе́ ___ сказа́ть. (coś ważnego)|ко́е-что|что́-нибудь|ничто́
Он ___ не опа́здывает. (nigdy)|никогда́|когда́-то|иногда́`
}
);
