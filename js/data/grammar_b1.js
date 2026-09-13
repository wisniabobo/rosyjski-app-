/* Gramatyka B1 */
window.RU = window.RU || { vocab: [], grammar: [], phrases: [], texts: [] };

RU.grammar.push(
{ id: 'b1-g1', level: 'B1', title: 'Deklinacja rzeczowników – liczba pojedyncza', subtitle: 'Wszystkie przypadki w jednej tabeli', body: `
<div class="scroll"><table class="gt"><tr><th>przypadek</th><th>m. twardy</th><th>m. miękki</th><th>n.</th><th>ż. -а</th><th>ż. -я</th><th>ż. -ь</th></tr>
<tr><td>Им.</td><td>стол</td><td>слова́рь</td><td>окно́ / мо́ре</td><td>ма́ма</td><td>неде́ля</td><td>дверь</td></tr>
<tr><td>Род.</td><td>стола́</td><td>словаря́</td><td>окна́ / мо́ря</td><td>ма́мы</td><td>неде́ли</td><td>двери́</td></tr>
<tr><td>Дат.</td><td>столу́</td><td>словарю́</td><td>окну́ / мо́рю</td><td>ма́ме</td><td>неде́ле</td><td>двери́</td></tr>
<tr><td>Вин.</td><td>стол (бра́та)</td><td>слова́рь (учи́теля)</td><td>окно́ / мо́ре</td><td>ма́му</td><td>неде́лю</td><td>дверь</td></tr>
<tr><td>Твор.</td><td>столо́м</td><td>словарём</td><td>окно́м / мо́рем</td><td>ма́мой</td><td>неде́лей</td><td>две́рью</td></tr>
<tr><td>Пр.</td><td>о столе́</td><td>о словаре́</td><td>об окне́ / о мо́ре</td><td>о ма́ме</td><td>о неде́ле</td><td>о двери́</td></tr></table></div>
<h3>Rzeczowniki na -ия, -ие, -ий</h3>
<p>W celowniku (ż.) i miejscowniku mają <b>-ии</b>: {{в Росси́и}}, {{в зда́нии}}, {{о Васи́лии}}, {{к Мари́и}}.</p>
<h3>Rzeczowniki na -мя</h3>
<table class="gt"><tr><td>Им./Вин.</td><td>и́мя, вре́мя</td></tr><tr><td>Род./Дат./Пр.</td><td>и́мени, вре́мени</td></tr><tr><td>Твор.</td><td>и́менем, вре́менем</td></tr></table>
<h3>Мать i дочь</h3>
<p>Poza mianownikiem i biernikiem mają rozszerzenie <b>-ер-</b>: {{ма́тери}}, {{с ма́терью}}, {{до́чери}}, {{с до́черью}}.</p>
<h3>Ruchoma samogłoska</h3>
[[оте́ц — отца́|ojciec – ojca]]
[[день — дня|dzień – dnia]]
[[пода́рок — пода́рка|prezent – prezentu]]
[[у́гол — угла́|róg – rogu]]
<h3>Rzeczowniki nieodmienne</h3>
<p>Obce słowa na samogłoskę się nie odmieniają: {{в метро́}}, {{с ко́фе}}, {{в кафе́}}, {{о кино́}}, {{без такси́}}, {{в пальто́}}.</p>`,
quiz: `
Я пришёл без ___. (слова́рь)|словаря́|словаре́|слова́ря
Мы говори́ли об ___. (окно́)|окне́|окно́|окна́
Я пошёл к ___. (мать)|ма́тери|ма́ти|ма́тью
У меня́ нет ___. (вре́мя)|вре́мени|вре́мя|времени́
Он гуля́ет с ___. (дочь)|до́черью|до́чью|до́черей
Пода́рок для ___. (оте́ц)|отца́|оте́ца|отцо́м
Мы живём в ___. (зда́ние)|зда́нии|зда́нье|зда́ние
Я ду́маю о ___. (Мари́я)|Мари́и|Мари́е|Мари́ю
Он пришёл с ___. (подру́га)|подру́гой|подру́гу|подру́ги
Я ви́дел ___. (учи́тель)|учи́теля|учи́тель|учи́телем
Её ___ – Анна. (и́мя)|и́мя|и́мени|и́менем
Два ___ наза́д. (день)|дня|де́ня|дней`
},
{ id: 'b1-g2', level: 'B1', title: 'Deklinacja rzeczowników – liczba mnoga', subtitle: 'Дат. -ам, Твор. -ами, Пр. -ах', body: `
<p>W liczbie mnogiej celownik, narzędnik i miejscownik są <b>takie same dla wszystkich rodzajów</b>. Trudny jest tylko dopełniacz (patrz A2).</p>
<div class="scroll"><table class="gt"><tr><th>przypadek</th><th>столы́</th><th>словари́</th><th>кни́ги</th><th>неде́ли</th><th>о́кна</th></tr>
<tr><td>Им.</td><td>столы́</td><td>словари́</td><td>кни́ги</td><td>неде́ли</td><td>о́кна</td></tr>
<tr><td>Род.</td><td>столо́в</td><td>словаре́й</td><td>книг</td><td>неде́ль</td><td>о́кон</td></tr>
<tr><td>Дат.</td><td>стола́м</td><td>словаря́м</td><td>кни́гам</td><td>неде́лям</td><td>о́кнам</td></tr>
<tr><td>Вин.</td><td>столы́</td><td>словари́</td><td>кни́ги</td><td>неде́ли</td><td>о́кна</td></tr>
<tr><td>Твор.</td><td>стола́ми</td><td>словаря́ми</td><td>кни́гами</td><td>неде́лями</td><td>о́кнами</td></tr>
<tr><td>Пр.</td><td>о стола́х</td><td>о словаря́х</td><td>о кни́гах</td><td>о неде́лях</td><td>об о́кнах</td></tr></table></div>
<div class="warn">⚠️ Biernik l. mn. rzeczowników <b>żywotnych</b> = dopełniacz (wszystkie rodzaje!): {{Я ви́жу студе́нтов}}, {{Я люблю́ ко́шек}}, {{Мы ждём госте́й}}.</div>
<h3>Wyjątki w narzędniku</h3>
<p>{{людьми́}}, {{детьми́}}, {{дочерьми́}}, {{лошадьми́}}.</p>
[[Я гуля́ю с детьми́.|Spaceruję z dziećmi.]]
[[Мы говори́ли с людьми́.|Rozmawialiśmy z ludźmi.]]
[[Он пи́шет роди́телям.|On pisze do rodziców.]]
[[в больши́х города́х|w dużych miastach]]`,
quiz: `
Я пишу́ ___. (друзья́)|друзья́м|друзе́й|друзья́х
Мы говори́ли о ___. (кни́ги)|кни́гах|кни́гам|книг
Он гуля́ет с ___. (де́ти)|детьми́|де́тями|дете́й
Я ви́жу ___. (студе́нты)|студе́нтов|студе́нты|студе́нтам
В ___ мно́го маши́н. (города́)|города́х|города́м|городо́в
Мы ждём ___. (го́сти)|госте́й|го́сти|гостя́м
Я говори́л с ___. (лю́ди)|людьми́|лю́дями|люде́й
Помога́й ___! (роди́тели)|роди́телям|роди́телей|роди́телями
Он интересу́ется ___. (языки́)|языка́ми|языка́м|языко́в
Я люблю́ ___. (ко́шки)|ко́шек|ко́шки|ко́шкам`
},
{ id: 'b1-g3', level: 'B1', title: 'Czasowniki ruchu – pełny system', subtitle: 'Nieść, wieźć, prowadzić, lecieć i przedrostki', body: `
<div class="scroll"><table class="gt"><tr><th>jednokierunkowy</th><th>wielokierunkowy</th><th>znaczenie</th></tr>
<tr><td>идти́ (иду́)</td><td>ходи́ть (хожу́)</td><td>iść / chodzić</td></tr>
<tr><td>е́хать (е́ду)</td><td>е́здить (е́зжу)</td><td>jechać / jeździć</td></tr>
<tr><td>бежа́ть (бегу́)</td><td>бе́гать (бе́гаю)</td><td>biec / biegać</td></tr>
<tr><td>лете́ть (лечу́)</td><td>лета́ть (лета́ю)</td><td>lecieć / latać</td></tr>
<tr><td>плыть (плыву́)</td><td>пла́вать (пла́ваю)</td><td>płynąć / pływać</td></tr>
<tr><td>нести́ (несу́)</td><td>носи́ть (ношу́)</td><td>nieść / nosić</td></tr>
<tr><td>везти́ (везу́)</td><td>вози́ть (вожу́)</td><td>wieźć / wozić</td></tr>
<tr><td>вести́ (веду́)</td><td>води́ть (вожу́)</td><td>prowadzić / prowadzać</td></tr></table></div>
[[Я несу́ сестре́ цветы́.|Niosę siostrze kwiaty.]]
[[Ма́ма ведёт сы́на в шко́лу.|Mama prowadzi syna do szkoły.]]
[[Такси́ везёт нас в аэропо́рт.|Taksówka wiezie nas na lotnisko.]]
[[Он всегда́ но́сит очки́.|On zawsze nosi okulary.]]
<h3>Wszystkie przedrostki</h3>
<table class="gt"><tr><td>при-</td><td>przybycie</td><td>{{принести́ пода́рок}}</td></tr>
<tr><td>у-</td><td>oddalenie, zabranie</td><td>{{унести́ кни́гу}}, {{уе́хать}}</td></tr>
<tr><td>в- / вы-</td><td>do środka / na zewnątrz</td><td>{{внести́}}, {{вы́нести му́сор}}</td></tr>
<tr><td>под- / от-</td><td>zbliżenie / oddalenie</td><td>{{подвезти́ до до́ма}}, {{отвести́ ребёнка в сад}}</td></tr>
<tr><td>пере-</td><td>przez, z miejsca na miejsce</td><td>{{перее́хать в но́вую кварти́ру}}</td></tr>
<tr><td>про-</td><td>obok, przez, pominąć</td><td>{{прое́хать свою́ остано́вку}}</td></tr>
<tr><td>до-</td><td>aż do</td><td>{{довезти́ до вокза́ла}}</td></tr>
<tr><td>об(о)-</td><td>dookoła, omijając; wszystkie</td><td>{{обойти́ лу́жу}}, {{объе́хать всю Евро́пу}}</td></tr>
<tr><td>за-</td><td>wstąpić po drodze; za coś</td><td>{{зайти́ в магази́н}}, {{зайти́ за дом}}</td></tr>
<tr><td>с- (+ся)</td><td>zejść się; w dół</td><td>{{сойти́ с авто́буса}}, {{съе́хаться}}</td></tr>
<tr><td>раз- (+ся)</td><td>rozejść się</td><td>{{разойти́сь по дома́м}}</td></tr></table>
<div class="tip">💡 Przedrostek + <b>по-</b>: {{пойти́}}, {{пое́хать}}, {{полете́ть}} = rozpocząć ruch. {{походи́ть}}, {{пое́здить}} = pochodzić / pojeździć trochę.</div>`,
quiz: `
Я ___ сестре́ цветы́. (niosę teraz)|несу́|ношу́|везу́
Ма́ма ___ сы́на в шко́лу ка́ждый день. (prowadza)|во́дит|ведёт|во́зит
Такси́ ___ нас в аэропо́рт. (wiezie teraz)|везёт|во́зит|ведёт
Он всегда́ ___ очки́.|но́сит|несёт|во́дит
Самолёт ___ в Москву́. (leci teraz)|лети́т|лета́ет|лёт
Вы́неси, пожа́луйста, ___!|му́сор|му́сора|му́сору
Извини́те, я ___ свою́ остано́вку! (przejechałem)|прое́хал|перее́хал|прие́хал
Подвези́ меня́ ___ до́ма.|до|к|у
Мы ___ всю Евро́пу. (zjeździliśmy dookoła)|объе́хали|прое́хали|перее́хали
По доро́ге домо́й я ___ в апте́ку. (wstąpiłem)|зашёл|пришёл|обошёл
Пти́цы ___ на юг. (odlatują)|улета́ют|прилета́ют|вылета́ют бы`
},
{ id: 'b1-g4', level: 'B1', title: 'Aspekt: rozkazy, przeczenia, bezokolicznik', subtitle: 'Не забу́дь! vs не забыва́й! · не на́до + НСВ', body: `
<h3>Tryb rozkazujący</h3>
<table class="gt"><tr><th>СВ – konkretna prośba</th><th>НСВ – zachęta, ponaglenie, reguła</th></tr>
<tr><td>{{Откро́йте окно́, пожа́луйста.}}</td><td>{{Открыва́йте, открыва́йте!}} (śmiało, otwierajcie)</td></tr>
<tr><td>{{Расскажи́ о пое́здке.}}</td><td>{{Ну, расска́зывай!}} (no, opowiadaj!)</td></tr>
<tr><td>{{Позвони́ мне за́втра.}}</td><td>{{Звони́ мне ка́ждый день.}}</td></tr></table>
<h3>Przeczenie w rozkazie</h3>
<p>Z przeczeniem prawie zawsze <b>niedokonany</b>. Dokonany z „не” = ostrzeżenie (żeby się coś przypadkiem nie stało):</p>
[[Не открыва́й окно́!|Nie otwieraj okna! (zakaz)]]
[[Не забу́дь ключи́!|Nie zapomnij kluczy! (ostrzeżenie)]]
[[Не упади́!|Nie przewróć się!]]
[[Смотри́, не опозда́й!|Uważaj, nie spóźnij się!]]
<h3>Bezokolicznik po czasownikach fazowych</h3>
<p>Po {{начина́ть}}, {{конча́ть}}, {{продолжа́ть}}, {{переста́ть}}, {{уста́ть}}, {{привы́кнуть}}, {{надое́сть}} – <b>zawsze niedokonany</b>:</p>
[[Я на́чал изуча́ть ру́сский.|Zacząłem uczyć się rosyjskiego.]]
[[Он переста́л кури́ть.|Przestał palić.]]
<h3>Не на́до / не ну́жно / нельзя́</h3>
[[Не на́до звони́ть.|Nie trzeba dzwonić. (+ НСВ)]]
[[Ему́ нельзя́ пить.|Jemu nie wolno pić. (zakaz – НСВ)]]
[[Здесь нельзя́ пройти́.|Tędy nie da się przejść. (niemożliwość – СВ)]]
<h3>Pytanie o fakt – НСВ</h3>
[[Кто писа́л э́ту карти́ну?|Kto namalował ten obraz? (kto jest autorem – НСВ!)]]
[[Ты открыва́л окно́? Здесь хо́лодно.|Otwierałeś okno? Zimno tu. (okno teraz zamknięte)]]`,
quiz: `
Не ___ ключи́! (ostrzeżenie: nie zapomnij)|забу́дь|забыва́й|забы́ла
Не ___ окно́, хо́лодно! (zakaz)|открыва́й|откро́й|откры́ть
Я на́чал ___ ру́сский язы́к.|изуча́ть|изучи́ть|вы́учить
Он переста́л ___.|кури́ть|покури́ть|закури́ть
Не на́до ___ мне, я сам позвоню́.|звони́ть|позвони́ть|звоню́
___ мне э́ту кни́гу, пожа́луйста. (daj, jednorazowo)|Дай|Дава́й|Дава́йте бы
Смотри́, не ___! (nie spóźnij się)|опозда́й|опа́здывай|опозда́ешь
Ты ___ э́тот фильм? (w ogóle – fakt)|смотре́л|посмотре́л|смо́тришь
Мне надое́ло ___. (czekać)|ждать|подожда́ть|жду
Ну, ___, как дела́! (no, opowiadaj)|расска́зывай|расскажи́|рассказа́л`
},
{ id: 'b1-g5', level: 'B1', title: 'Tryb przypuszczający', subtitle: 'Е́сли бы… · Я бы хоте́л…', body: `
<p>Tryb przypuszczający tworzymy bardzo prosto: <b>czas przeszły + бы</b>. Nie ma form osobowych jak w polskim („zrobiłbym, zrobiłbyś”).</p>
[[Я бы хоте́л ко́фе.|Chciałbym kawę.]]
[[Я бы пое́хал, но нет вре́мени.|Pojechałbym, ale nie mam czasu.]]
[[Что бы ты сде́лал на моём ме́сте?|Co zrobiłbyś na moim miejscu?]]
<h3>Warunek nierealny: е́сли бы</h3>
<p>{{бы}} pojawia się w <b>obu</b> częściach zdania:</p>
[[Е́сли бы у меня́ бы́ли де́ньги, я бы купи́л маши́ну.|Gdybym miał pieniądze, kupiłbym samochód.]]
[[Е́сли бы ты позвони́л, я бы пришёл.|Gdybyś zadzwonił, przyszedłbym.]]
<div class="tip">💡 Rosyjski nie rozróżnia „gdybym miał teraz” i „gdybym był miał wtedy” – obie sytuacje wyraża ta sama forma. Kontekst decyduje.</div>
<h3>Uprzejmość i rada</h3>
[[Не могли́ бы вы помо́чь?|Czy mógłby Pan pomóc?]]
[[Ты бы отдохну́л.|Powinieneś odpocząć (odpocząłbyś).]]
[[Я бы на ва́шем ме́сте не спеши́л.|Na Pana miejscu nie spieszyłbym się.]]
<h3>Pozycja бы</h3>
<p>{{бы}} jest ruchome – zwykle stoi po pierwszym akcentowanym słowie lub po czasowniku: {{Я бы пошёл}} = {{Я пошёл бы}}. W {{е́сли бы}}, {{что́бы}} jest częścią spójnika.</p>
<h3>Хоть бы! Лишь бы!</h3>
[[Хоть бы не бы́ло дождя́!|Oby nie padało!]]
[[Лишь бы все бы́ли здоро́вы.|Byle wszyscy byli zdrowi.]]`,
quiz: `
Я ___ хоте́л ча́ю.|бы|б|был
Е́сли бы у меня́ ___ вре́мя, я бы пришёл.|бы́ло|есть|бу́дет
Е́сли бы ты позвони́л, я ___.|бы пришёл|приду́|пришёл бы́л
Что бы ты ___ на моём ме́сте? (zrobił)|сде́лал|сде́лаешь|де́лать
Не ___ бы вы откры́ть окно́? (moglibyście)|могли́|мо́жете|могу́т
Е́сли бы я знал, я бы ___ тебе́.|сказа́л|скажу́|говорю́
Хоть бы за́втра ___ хоро́шая пого́да!|была́|бу́дет|есть
„Gdybym był bogaty…” – Е́сли бы я ___ бога́тым…|был|бу́ду|есть
Ты бы ___! Ты о́чень уста́л. (odpocząłbyś)|отдохну́л|отдохнёшь|отдыха́ешь
Она́ ___ пое́хала, но заболе́ла.|бы|бы́ло|была́`
},
{ id: 'b1-g6', level: 'B1', title: 'Zdania względne z кото́рый', subtitle: 'Który, która, które – w każdym przypadku', body: `
<p>{{кото́рый}} przyjmuje <b>rodzaj i liczbę</b> od rzeczownika, do którego się odnosi, a <b>przypadek</b> od swojej funkcji w zdaniu podrzędnym.</p>
[[Э́то мой друг, кото́рый живёт в Москве́.|To mój przyjaciel, który mieszka w Moskwie. (Им.)]]
[[Э́то де́вушка, кото́рую я люблю́.|To dziewczyna, którą kocham. (Вин.)]]
[[Вот дом, в кото́ром я роди́лся.|Oto dom, w którym się urodziłem. (Пр.)]]
[[Э́то друг, кото́рому я звони́л.|To przyjaciel, do którego dzwoniłem. (Дат.)]]
[[Где кни́га, о кото́рой ты говори́л?|Gdzie książka, o której mówiłeś? (Пр.)]]
[[Лю́ди, с кото́рыми я рабо́таю, о́чень ми́лые.|Ludzie, z którymi pracuję, są bardzo mili. (Твор.)]]
<div class="scroll"><table class="gt"><tr><th></th><th>m. / n.</th><th>ż.</th><th>l. mn.</th></tr>
<tr><td>Им.</td><td>кото́рый / кото́рое</td><td>кото́рая</td><td>кото́рые</td></tr>
<tr><td>Род.</td><td>кото́рого</td><td>кото́рой</td><td>кото́рых</td></tr>
<tr><td>Дат.</td><td>кото́рому</td><td>кото́рой</td><td>кото́рым</td></tr>
<tr><td>Вин.</td><td>= Им. / Род.</td><td>кото́рую</td><td>= Им. / Род.</td></tr>
<tr><td>Твор.</td><td>кото́рым</td><td>кото́рой</td><td>кото́рыми</td></tr>
<tr><td>Пр.</td><td>о кото́ром</td><td>о кото́рой</td><td>о кото́рых</td></tr></table></div>
<h3>Dopełniacz posiadania: чей → кото́рого</h3>
[[Писа́тель, кни́ги кото́рого я чита́ю.|Pisarz, którego książki czytam.]]
<div class="tip">💡 W mowie potocznej zamiast кото́рый spotkasz {{где}} i {{что}}: {{го́род, где я живу́}}; {{кни́га, что лежи́т на столе́}}.</div>`,
quiz: `
Э́то друг, ___ живёт в Москве́.|кото́рый|кото́рого|кото́рому
Э́то де́вушка, ___ я люблю́.|кото́рую|кото́рая|кото́рой
Вот дом, в ___ я живу́.|кото́ром|кото́рый|кото́рого
Где кни́га, о ___ ты говори́л?|кото́рой|кото́рую|кото́ром
Лю́ди, с ___ я рабо́таю, о́чень ми́лые.|кото́рыми|кото́рым|кото́рых
Друг, ___ я звони́л, не отве́тил.|кото́рому|кото́рого|кото́рым
Писа́тель, кни́ги ___ я чита́ю.|кото́рого|кото́рый|кото́рому
Фильм, ___ мы смотре́ли, был интере́сный.|кото́рый|кото́рого|кото́ром
Го́род, из ___ я прие́хал, небольшо́й.|кото́рого|кото́рый|кото́ром
Студе́нты, ___ нет на уро́ке, получа́т зада́ние.|кото́рых|кото́рые|кото́рыми`
},
{ id: 'b1-g7', level: 'B1', title: 'Mowa zależna', subtitle: 'Он сказа́л, что… · спроси́л, ли… · попроси́л, что́бы…', body: `
<p>W mowie zależnej rosyjski <b>nie zmienia czasu</b> (brak następstwa czasów, jak w polskim). Zmieniają się tylko osoby.</p>
<table class="gt"><tr><th>typ</th><th>mowa niezależna</th><th>mowa zależna</th></tr>
<tr><td>twierdzenie → что</td><td>{{«Я уста́л»,}} – сказа́л он.</td><td>{{Он сказа́л, что уста́л.}}</td></tr>
<tr><td>pytanie z zaimkiem</td><td>{{«Где ты живёшь?»}}</td><td>{{Он спроси́л, где я живу́.}}</td></tr>
<tr><td>pytanie tak/nie → ли</td><td>{{«Ты придёшь?»}}</td><td>{{Он спроси́л, приду́ ли я.}}</td></tr>
<tr><td>prośba/rozkaz → что́бы</td><td>{{«Позвони́ мне!»}}</td><td>{{Он попроси́л, что́бы я позвони́л.}}</td></tr></table>
<h3>Partykuła ли</h3>
<p>{{ли}} stoi <b>po słowie, o które pytamy</b> (zwykle czasownik na początku):</p>
[[Я не зна́ю, до́ма ли он.|Nie wiem, czy on jest w domu.]]
[[Она́ спроси́ла, говорю́ ли я по-ру́сски.|Zapytała, czy mówię po rosyjsku.]]
<div class="warn">⚠️ Nie tłumacz „czy” jako {{е́сли}}! ✗ Я не зна́ю, е́сли он придёт. ✓ {{Я не зна́ю, придёт ли он.}}</div>
<h3>Czasowniki mówienia</h3>
<p>{{сказа́ть}}, {{спроси́ть}}, {{отве́тить}}, {{объясни́ть}}, {{сообщи́ть}}, {{попроси́ть}}, {{посове́товать}}, {{предложи́ть}}, {{напо́мнить}}, {{предупреди́ть}}.</p>`,
quiz: `
«Я уста́л». → Он сказа́л, ___ уста́л.|что|что́бы|ли
«Где ты живёшь?» → Он спроси́л, ___ я живу́.|где|что|ли где
«Ты придёшь?» → Он спроси́л, приду́ ___ я.|ли|что|е́сли
«Позвони́ мне!» → Он попроси́л, что́бы я ___.|позвони́л|позвоню́|позвони́ть
Я не зна́ю, до́ма ___ он.|ли|что|е́сли
Она́ сказа́ла, что ___ за́втра. (przyjdzie)|придёт|пришла́ бы|приходи́ла
Ма́ма попроси́ла, ___ мы не шуме́ли.|что́бы|что|ли
Спроси́, ___ ли у них свобо́дные места́.|есть|е́сли|было бы
«Я живу́ в Ки́еве», – сказа́ла Анна. → Анна сказа́ла, что ___ в Ки́еве.|живёт|жила́|живу́
Врач посове́товал, что́бы я бо́льше ___.|гуля́л|гуля́ю|гуля́ть`
},
{ id: 'b1-g8', level: 'B1', title: 'Krótkie przymiotniki', subtitle: 'Рад, согла́сен, за́нят, до́лжен, гото́в', body: `
<p>Krótkie formy przymiotników występują <b>tylko jako orzeczenie</b> i często mają odcień „chwilowego stanu”.</p>
<table class="gt"><tr><th>pełna</th><th>m.</th><th>ż.</th><th>n.</th><th>l. mn.</th></tr>
<tr><td>краси́вый</td><td>краси́в</td><td>краси́ва</td><td>краси́во</td><td>краси́вы</td></tr>
<tr><td>за́нятый</td><td>за́нят</td><td>занята́</td><td>за́нято</td><td>за́няты</td></tr>
<tr><td>больно́й</td><td>бо́лен</td><td>больна́</td><td>–</td><td>больны́</td></tr>
<tr><td>—</td><td>рад</td><td>ра́да</td><td>–</td><td>ра́ды</td></tr>
<tr><td>—</td><td>до́лжен</td><td>должна́</td><td>должно́</td><td>должны́</td></tr></table>
<h3>Najczęstsze krótkie formy</h3>
[[Я рад тебя́ ви́деть.|Cieszę się, że cię widzę.]]
[[Я согла́сен с ва́ми.|Zgadzam się z Panem.]]
[[Она́ сего́дня занята́.|Ona jest dziś zajęta.]]
[[У́жин гото́в!|Kolacja gotowa!]]
[[Он бо́лен.|On jest chory (teraz).]]
[[Вы пра́вы.|Ma Pan rację.]]
[[Э́ти брю́ки мне велики́.|Te spodnie są na mnie za duże.]]
[[Я уве́рен, что всё бу́дет хорошо́.|Jestem pewien, że wszystko będzie dobrze.]]
<h3>Pełna vs krótka</h3>
<p>{{Он больно́й челове́к.}} – On jest chorowity (cecha stała). {{Он бо́лен.}} – On jest chory (teraz).</p>
<p>{{Ва́ше пла́тье коро́ткое.}} – Pana sukienka jest krótka. {{Пла́тье мне ко́ротко.}} – Sukienka jest dla mnie za krótka.</p>
<div class="tip">💡 Zapamiętaj zestaw: {{ну́жен}}–{{нужна́}}–{{ну́жно}}–{{нужны́}}, {{похо́ж}} (podobny), {{свобо́ден}} (wolny), {{дово́лен}} (zadowolony – + narz.), {{знако́м}} (zaznajomiony – с + narz.), {{гото́в}} (gotowy – к + cel.), {{спосо́бен}} (zdolny – на + bier.).</div>`,
quiz: `
Я ___ тебя́ ви́деть. (rad, mężczyzna)|рад|ра́да|рады́й
Она́ сего́дня ___. (zajęta)|занята́|за́нят|за́нятая
Вы ___! (macie rację)|пра́вы|пра́вый|пра́ва
Я ___ с ва́ми. (zgadzam się, kobieta)|согла́сна|согла́сен|согла́сная
Обе́д ___! (gotowy)|гото́в|гото́вый|гото́ва
Он ___ на отца́. (podobny)|похо́ж|похо́жий|похо́жа
Мы ___ ва́шей рабо́той. (zadowoleni)|дово́льны|дово́льные|дово́лен
Она́ ___, у неё грипп. (chora)|больна́|бо́лен|больна́я
Э́ти ту́фли мне ___. (za małe)|малы́|ма́ленькие|мала́
Вы ___ с А́нной? (znacie się)|знако́мы|знако́мые|знако́м`
},
{ id: 'b1-g9', level: 'B1', title: 'Zdania bezosobowe', subtitle: 'Мне хо́чется, не спи́тся, темне́ет', body: `
<h3>Stany: celownik + przysłówek na -о</h3>
[[Мне хо́лодно / жа́рко / ску́чно / ве́село.|Jest mi zimno / gorąco / nudno / wesoło.]]
[[Ребёнку пло́хо.|Dziecku jest źle.]]
[[Нам бы́ло интере́сно.|Było nam ciekawie.]]
<h3>Celownik + czasownik z -ся (mimowolność)</h3>
<p>Wyraża chęć lub brak możliwości niezależny od woli:</p>
[[Мне хо́чется спать.|Chce mi się spać.]]
[[Мне не спи́тся.|Nie mogę zasnąć (nie śpi mi się).]]
[[Как тебе́ здесь живётся?|Jak ci się tu żyje?]]
[[Мне не ве́рится.|Nie chce mi się wierzyć.]]
<h3>Zjawiska natury</h3>
[[Темне́ет.|Ściemnia się.]]
[[Света́ет.|Świta.]]
[[Вчера́ весь день моро́зило.|Wczoraj cały dzień był mróz.]]
<h3>3. os. l. mn. bez podmiotu (nieokreślona osoba)</h3>
[[Говоря́т, что за́втра бу́дет дождь.|Mówią, że jutro będzie padać.]]
[[Тебя́ зову́т к телефо́ну.|Wołają cię do telefonu.]]
[[Здесь не ку́рят.|Tu się nie pali.]]
<h3>Bezokolicznik z celownikiem – pytanie, konieczność</h3>
[[Что мне де́лать?|Co mam robić?]]
[[Куда́ нам идти́?|Dokąd mamy iść?]]
[[Тебе́ не поня́ть.|Tobie tego nie zrozumieć.]]
<h3>Przeczenie z dopełniaczem</h3>
[[Его́ здесь нет.|Nie ma go tu.]]
[[Не́ было ни одного́ челове́ка.|Nie było ani jednego człowieka.]]`,
quiz: `
___ хо́лодно. (ja)|Мне|Я|Меня́
Мне ___ спать. (chce się)|хо́чется|хочу́|хо́чет
Ему́ не ___. (nie może zasnąć)|спи́тся|спит|спа́ться
___, что он уе́хал. (mówią)|Говоря́т|Говори́т|Говори́тся
Что ___ де́лать? (my)|нам|мы|нас
Зимо́й ра́но ___. (ściemnia się)|темне́ет|темно́|темни́т
На уро́ке ___ ску́чно. (było)|бы́ло|был|была́
Как вам здесь ___? (żyje się)|живётся|живёт|жи́ть
Вчера́ ___ не́ было до́ма. (on)|его́|он|ему́
Де́тям ___ ве́село. (było)|бы́ло|бы́ли|была́`
},
{ id: 'b1-g10', level: 'B1', title: 'Rząd czasowników', subtitle: 'Jaki przypadek po jakim czasowniku?', body: `
<p>Wiele rosyjskich czasowników wymaga innego przypadku niż polskie odpowiedniki. Ucz się ich <b>w parach z pytaniem</b>.</p>
<h3>Dopełniacz</h3>
<p>{{боя́ться}} (bać się czego), {{избега́ть}} (unikać), {{достига́ть}} (osiągać), {{жела́ть}} (życzyć czego), {{ждать}} (czekać – na coś abstrakcyjnego), {{добива́ться}}, {{каса́ться}} (dotyczyć).</p>
[[Я бою́сь соба́к.|Boję się psów.]]
[[Жела́ю вам сча́стья!|Życzę wam szczęścia!]]
<h3>Celownik</h3>
<p>{{звони́ть}}, {{помога́ть}}, {{меша́ть}}, {{сове́товать}}, {{ве́рить}}, {{зави́довать}}, {{ра́доваться}}, {{удивля́ться}}, {{учи́ть(ся)}} (czegoś!), {{улыба́ться}}.</p>
[[Я учу́сь ру́сскому языку́.|Uczę się języka rosyjskiego.]]
[[Не меша́й мне!|Nie przeszkadzaj mi!]]
[[Я ра́дуюсь твоему́ успе́ху.|Cieszę się z twojego sukcesu.]]
<h3>Narzędnik</h3>
<p>{{занима́ться}}, {{интересова́ться}}, {{увлека́ться}}, {{горди́ться}}, {{по́льзоваться}}, {{руководи́ть}}, {{управля́ть}}, {{боле́ть}} (chorować na), {{быть}}, {{стать}}, {{явля́ться}}, {{счита́ться}}.</p>
[[Он увлека́ется исто́рией.|Pasjonuje się historią.]]
[[Я горжу́сь тобо́й.|Jestem z ciebie dumny.]]
[[Я боле́л гри́ппом.|Chorowałem na grypę.]]
<h3>Przyimki inne niż w polskim</h3>
<table class="gt"><tr><td>{{ду́мать о}} + miejsc.</td><td>myśleć o</td></tr>
<tr><td>{{жени́ться на}} + miejsc.</td><td>ożenić się z</td></tr>
<tr><td>{{выходи́ть за́муж за}} + bier.</td><td>wyjść za mąż za</td></tr>
<tr><td>{{серди́ться на}} + bier.</td><td>złościć się na</td></tr>
<tr><td>{{наде́яться на}} + bier.</td><td>liczyć na, mieć nadzieję na</td></tr>
<tr><td>{{скуча́ть по}} + cel.</td><td>tęsknić za</td></tr>
<tr><td>{{благодари́ть за}} + bier.</td><td>dziękować za</td></tr>
<tr><td>{{смотре́ть на}} + bier.</td><td>patrzeć na</td></tr></table>`,
quiz: `
Я бою́сь ___. (соба́ки)|соба́к|соба́ками|соба́кам
Я учу́сь ___ языку́. (ру́сский)|ру́сскому|ру́сский|ру́сским
Он увлека́ется ___. (исто́рия)|исто́рией|исто́рию|исто́рии
Я скуча́ю по ___. (ты)|тебе́|тебя́|тобо́й
Он жени́лся на ___. (Ма́ша)|Ма́ше|Ма́шу|Ма́шей
Жела́ю вам ___! (успе́х)|успе́ха|успе́х|успе́хом
Я горжу́сь ___. (сын)|сы́ном|сы́на|сы́ну
Не меша́й ___! (я)|мне|меня́|мной
Она́ вы́шла за́муж за ___. (Ива́н)|Ива́на|Ива́ном|Ива́не
Мы по́льзуемся ___. (интерне́т)|интерне́том|интерне́т|интерне́та
Спаси́бо за ___! (по́мощь)|по́мощь|по́мощи|по́мощью
Я ве́рю ___. (он)|ему́|его́|им`
},
{ id: 'b1-g11', level: 'B1', title: 'Odmiana liczebników', subtitle: 'Двух, трёх, пяти́, сорока́, ста', body: `
<div class="scroll"><table class="gt"><tr><th></th><th>1 (m./ż.)</th><th>2</th><th>3</th><th>4</th><th>5</th></tr>
<tr><td>Им.</td><td>оди́н / одна́</td><td>два / две</td><td>три</td><td>четы́ре</td><td>пять</td></tr>
<tr><td>Род.</td><td>одного́ / одно́й</td><td>двух</td><td>трёх</td><td>четырёх</td><td>пяти́</td></tr>
<tr><td>Дат.</td><td>одному́ / одно́й</td><td>двум</td><td>трём</td><td>четырём</td><td>пяти́</td></tr>
<tr><td>Твор.</td><td>одни́м / одно́й</td><td>двумя́</td><td>тремя́</td><td>четырьмя́</td><td>пятью́</td></tr>
<tr><td>Пр.</td><td>об одно́м / одно́й</td><td>о двух</td><td>о трёх</td><td>о четырёх</td><td>о пяти́</td></tr></table></div>
<p>5–20 i 30 odmieniają się jak {{дверь}}: {{пяти́}}, {{пятью́}}. {{со́рок}}, {{девяно́сто}}, {{сто}} mają w przypadkach zależnych <b>-а</b>: {{сорока́}}, {{девяно́ста}}, {{ста}}.</p>
<h3>Liczebnik w przypadku zależnym = rzeczownik w l. mn. tego samego przypadku</h3>
[[с двумя́ друзья́ми|z dwoma przyjaciółmi]]
[[о пяти́ кни́гах|o pięciu książkach]]
[[Мне нет двадцати́ лет.|Nie mam dwudziestu lat.]]
[[от трёх до пяти́ часо́в|od trzeciej do piątej]]
<h3>Liczebniki zbiorowe</h3>
<p>{{дво́е}}, {{тро́е}}, {{че́тверо}} – z rzeczownikami męskimi-osobowymi, {{де́ти}}, {{лю́ди}} i pluralia tantum:</p>
[[У них дво́е дете́й.|Mają dwoje dzieci.]]
[[Нас бы́ло тро́е.|Było nas trzech.]]
[[дво́е су́ток|dwie doby]]
<h3>Оба / обе</h3>
[[о́ба бра́та, о́бе сестры́|obaj bracia, obie siostry]]`,
quiz: `
Я говори́л с ___ друзья́ми. (2)|двумя́|двух|два
Ему́ нет ___ лет. (20)|двадцати́|два́дцать|двадцатью́
Магази́н рабо́тает до ___ часо́в. (5)|пяти́|пять|пятью́
У них ___ дете́й. (dwoje)|дво́е|два|двух
Мы говори́ли о ___ фи́льмах. (3)|трёх|три|тремя́
Мне ___ лет. (40)|со́рок|сорока́|сороко́в
Бо́льше ___ рубле́й. (100)|ста|сто|сотни́
Я пришёл с ___ сёстрами. (obie)|обе́ими|о́бе|обо́ими
Нас бы́ло ___. (czterech)|че́тверо|четы́ре|четверы́х
К ___ часа́м. (4)|четырём|четырёх|четы́рем`
},
{ id: 'b1-g12', level: 'B1', title: 'Przyimki czasu i przyczyny', subtitle: 'За, на, че́рез, из-за, благодаря́, от', body: `
<h3>Czas</h3>
<table class="gt"><tr><td>{{за}} + bier.</td><td>w ciągu (osiągnięty wynik)</td><td>{{Я прочита́л кни́гу за неде́лю.}}</td></tr>
<tr><td>{{на}} + bier.</td><td>na (planowany okres)</td><td>{{Я прие́хал на неде́лю.}}</td></tr>
<tr><td>{{че́рез}} + bier.</td><td>za (po upływie)</td><td>{{Он вернётся че́рез неде́лю.}}</td></tr>
<tr><td>{{наза́д}}</td><td>temu</td><td>{{неде́лю наза́д}}</td></tr>
<tr><td>bier. bez przyimka</td><td>przez (czas trwania)</td><td>{{Я жил там неде́лю.}}</td></tr>
<tr><td>{{в тече́ние}} + dop.</td><td>w ciągu, przez</td><td>{{в тече́ние го́да}}</td></tr>
<tr><td>{{во вре́мя}} + dop.</td><td>podczas</td><td>{{во вре́мя уро́ка}}</td></tr>
<tr><td>{{пе́ред}} + narz.</td><td>przed (bezpośrednio)</td><td>{{пе́ред сном}}</td></tr>
<tr><td>{{до}} + dop.</td><td>przed / do</td><td>{{до войны́}}</td></tr>
<tr><td>{{по́сле}} + dop.</td><td>po</td><td>{{по́сле рабо́ты}}</td></tr>
<tr><td>{{к}} + cel.</td><td>na (termin)</td><td>{{к пя́тнице}}, {{к утру́}}</td></tr></table>
<h3>Przyczyna</h3>
<table class="gt"><tr><td>{{из-за}} + dop.</td><td>z powodu (negatywne)</td><td>{{Из-за дождя́ мы оста́лись до́ма.}}</td></tr>
<tr><td>{{благодаря́}} + cel.</td><td>dzięki (pozytywne)</td><td>{{Благодаря́ тебе́ я сдал экза́мен.}}</td></tr>
<tr><td>{{от}} + dop.</td><td>od (stan fizyczny, emocja)</td><td>{{Он пла́кал от ра́дости.}}</td></tr>
<tr><td>{{из}} + dop.</td><td>z (pobudka świadoma)</td><td>{{из любопы́тства}}</td></tr>
<tr><td>{{по}} + cel.</td><td>przez (błąd, nieuwaga)</td><td>{{по оши́бке}}, {{по боле́зни}}</td></tr></table>`,
quiz: `
Я прочита́л кни́гу ___ два дня.|за|на|че́рез
Он прие́хал в Москву́ ___ ме́сяц. (na miesiąc)|на|за|че́рез
Он вернётся ___ час.|че́рез|за|на
___ дождя́ мы не пошли́ гуля́ть.|Из-за|Благодаря́|От
___ тебе́ я сдал экза́мен!|Благодаря́|Из-за|По
Он пла́кал ___ ра́дости.|от|из|по
Я взял твою́ ру́чку ___ оши́бке.|по|из-за|от
Не звони́ ___ уро́ка. (podczas)|во вре́мя|в тече́ние|за
Сде́лай э́то ___ пя́тнице! (na piątek)|к|до|на
Я жил в Петербу́рге ___. (przez rok)|год|на год|за год`
}
);
