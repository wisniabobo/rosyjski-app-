/* Gramatyka A0–A1
   Znaczniki w body: {{ру́сский}} – klikalne słowo z wymową; [[ру́сский|polski]] – przykład
   Quiz: pytanie|poprawna|błędna|błędna ## wyjaśnienie  (___ = luka) */
window.RU = window.RU || { vocab: [], grammar: [], phrases: [], texts: [] };

RU.grammar.push(
{ id: 'a0-1', level: 'A0', title: 'Jak czytać cyrylicę', subtitle: 'Alfabet, litery drukowane i pisane', body: `
<p>Rosyjski alfabet (кири́ллица) ma <b>33 litery</b>: 10 samogłosek, 21 spółgłosek i 2 znaki bez dźwięku (Ь, Ъ). Dobra wiadomość: jako Polak znasz już większość dźwięków – trzeba tylko nauczyć się nowych kształtów.</p>
<h3>Pięć grup liter</h3>
<table class="gt"><tr><th>Grupa</th><th>Litery</th><th>Uwaga</th></tr>
<tr><td>Znajomi</td><td>А К М О Т</td><td>jak po polsku</td></tr>
<tr><td>Fałszywi przyjaciele</td><td>В Е Н Р С У Х</td><td>В=w, Н=n, Р=r, С=s, У=u, Х=ch</td></tr>
<tr><td>Nowe kształty</td><td>Б Г Д З И Й Л П Ф Э</td><td>dźwięki znane z polskiego</td></tr>
<tr><td>Nowe dźwięki</td><td>Ж Ц Ч Ш Щ Ы</td><td>syczące + „y”</td></tr>
<tr><td>Miękkie i znaki</td><td>Ё Ю Я Ь Ъ</td><td>zmiękczają / oddzielają</td></tr></table>
<div class="tip">💡 Najczęstszy błąd początkujących: czytanie {{рестора́н}} jako „pectopah”. Pamiętaj: <b>Р = r, С = s, Н = n</b>. To słowo to „restauracja”!</div>
<h3>Samogłoski twarde i miękkie</h3>
<p>Samogłoski występują w parach. Litera z drugiego rzędu <b>zmiękcza</b> poprzedzającą spółgłoskę, a na początku wyrazu dodaje „j”.</p>
<table class="gt"><tr><th>twarde</th><td>а</td><td>о</td><td>у</td><td>ы</td><td>э</td></tr>
<tr><th>miękkie</th><td>я (ja)</td><td>ё (jo)</td><td>ю (ju)</td><td>и (i)</td><td>е (je)</td></tr></table>
[[ма́ма|mama]]
[[мя́со|mięso]]
[[лук|cebula]]
[[люк|właz]]
<h3>Pismo odręczne</h3>
<p>Rosjanie piszą ręcznie kursywą. Uwaga na litery, które wyglądają inaczej: <b>т</b> pisane wygląda jak „m”, <b>и</b> jak „u”, <b>д</b> jak „g”, <b>п</b> jak „n”. Na początku wystarczy, że będziesz je rozpoznawać.</p>
<div class="warn">⚠️ W tekstach dla Rosjan <b>nie zaznacza się akcentu</b>, a „ё” często pisze się jako „е”. W tej aplikacji akcent zawsze jest oznaczony kreską nad samogłoską (á).</div>`,
quiz: `
Jak czytamy literę „Н”?|n|h|ch
Jak czytamy literę „Р”?|r|p|b
Jak czytamy literę „С”?|s|c|k
Jak czytamy literę „В”?|w|b|f
Jak czytamy literę „У”?|u|y|j
Jak czytamy literę „Х”?|ch|ks|h
Które słowo znaczy „restauracja”?|рестора́н|теа́тр|метро́
Która litera to polskie „ż”?|ж|ш|щ
Która litera to polskie „y”?|ы|у|й
Która litera zmiękcza spółgłoskę i nie ma dźwięku?|ь|ъ|й
Jak przeczytasz „сок”?|sok|cok|coк
Jak przeczytasz „нос”?|nos|hoc|noc`
},
{ id: 'a0-2', level: 'A0', title: 'Akcent i redukcja samogłosek', subtitle: 'Akanie i ikanie – klucz do naturalnej wymowy', body: `
<p>W polskim akcent pada zawsze na przedostatnią sylabę. <b>W rosyjskim akcent jest ruchomy</b> – może paść na dowolną sylabę i trzeba go zapamiętać razem ze słowem. Akcent zmienia też sposób wymowy samogłosek!</p>
<h3>1. Akanie: nieakcentowane О → A</h3>
<p>Litera <b>о</b> brzmi jak „o” tylko pod akcentem. Bez akcentu brzmi jak <b>„a”</b>.</p>
[[молоко́|mleko – [małako]]]
[[хорошо́|dobrze – [charaszo]]]
[[Москва́|Moskwa – [maskwa]]]
[[окно́|okno – [akno]]]
<h3>2. Ikanie: nieakcentowane Е, Я → I</h3>
<p>Litery <b>е</b> i <b>я</b> bez akcentu (przed akcentowaną sylabą) brzmią jak <b>„i”</b>.</p>
[[сестра́|siostra – [sistra]]]
[[язы́к|język – [jizyk]]]
[[пятна́дцать|piętnaście – [pitnacat’]]]
[[телефо́н|telefon – [tilifon]]]
<h3>3. Ё zawsze pod akcentem</h3>
<p>Jeśli w słowie jest <b>ё</b>, to właśnie ono jest akcentowane: {{ёлка}}, {{самолёт}}, {{всё}}.</p>
<div class="tip">💡 Akcent potrafi zmienić znaczenie: {{за́мок}} (zamek – budowla) i {{замо́к}} (zamek w drzwiach, kłódka); {{му́ка}} (męka) i {{мука́}} (mąka).</div>
<h3>4. Akcent ruchomy w odmianie</h3>
<p>Akcent może się przesuwać w różnych formach tego samego słowa:</p>
[[рука́ – ру́ку|ręka – rękę]]
[[го́род – города́|miasto – miasta]]
[[пишу́ – пи́шешь|piszę – piszesz]]
<div class="warn">⚠️ Ucz się słów <b>zawsze z akcentem</b>. Klikaj ikonę głośnika i powtarzaj na głos – to najszybsza droga do dobrej wymowy.</div>`,
quiz: `
Jak brzmi „молоко́”?|małako|mołoko|małoko
Jak brzmi „хорошо́”?|charaszo|choroszo|charoszo
Jak brzmi nieakcentowane „о”?|jak „a”|jak „o”|jak „u”
Jak brzmi „язы́к”?|jizyk|jazyk|jezyk
Na którą sylabę pada akcent w słowie ze „ё”?|zawsze na „ё”|na ostatnią|na przedostatnią
„Мука́” (akcent na końcu) to…|mąka|męka|muka
Jak brzmi „сестра́”?|sistra|siestra|sestra
Jak brzmi „окно́”?|akno|okno|okna
W jakim słowie „о” czytamy jak „o”?|до́ма|вода́|окно́
Jak brzmi „Москва́”?|maskwa|moskwa|maskwo`
},
{ id: 'a0-3', level: 'A0', title: 'Twarde i miękkie spółgłoski', subtitle: 'Znak miękki Ь, znak twardy Ъ, syczące', body: `
<p>Prawie każda rosyjska spółgłoska ma wersję <b>twardą</b> i <b>miękką</b>. Spółgłoska jest miękka, gdy stoi po niej <b>е, ё, ю, я, и</b> albo <b>ь</b>.</p>
<table class="gt"><tr><th>twarda</th><th>miękka</th></tr>
<tr><td>{{мат}} [mat] – mat (szachowy)</td><td>{{мать}} [mat’] – matka</td></tr>
<tr><td>{{брат}} [brat] – brat</td><td>{{брать}} [brat’] – brać</td></tr>
<tr><td>{{лук}} [łuk] – cebula</td><td>{{люк}} [luk] – właz</td></tr>
<tr><td>{{был}} [był] – był</td><td>{{бил}} [bił] – bił</td></tr></table>
<h3>Л – twarde i miękkie</h3>
<p>Twarde <b>л</b> to coś pomiędzy polskim „ł” a „l” – język dotyka zębów, a środek języka jest obniżony. Miękkie <b>ль</b> jest bliskie polskiemu „l”.</p>
[[ло́дка|łódka]]
[[лёд|lód]]
<h3>Znak miękki Ь</h3>
<p>Nie ma własnego dźwięku. <b>Zmiękcza</b> spółgłoskę przed nim. Stoi też przed samogłoską jako separator: [[семья́|rodzina – [simja]]]</p>
[[день|dzień]]
[[жить|żyć]]
[[пальто́|płaszcz]]
<h3>Znak twardy Ъ</h3>
<p>Rzadki. Stoi po przedrostku przed е, ё, ю, я i oznacza, że wymawiamy „j”:</p>
[[подъе́зд|klatka schodowa – [padjest]]]
[[объясни́ть|objaśnić – [abjisnit’]]]
<h3>Zawsze twarde: Ж, Ш, Ц &nbsp;·&nbsp; zawsze miękkie: Ч, Щ, Й</h3>
<p>Po <b>ж, ш, ц</b> litera „и” brzmi jak „y”: {{жить}} [żyt’], {{маши́на}} [maszyna], {{цирк}} [cyrk]. Litery <b>ч, щ</b> są zawsze miękkie: {{чай}} [czaj], {{щи}} [śśi].</p>
<div class="tip">💡 Reguła pisowni: po ж, ш, ч, щ, г, к, х <b>nigdy</b> nie piszemy ы, я, ю – tylko и, а, у. Dlatego: книги (nie „книгы”), часы (nie „чясы”).</div>`,
quiz: `
Które słowo znaczy „matka”?|мать|мат|мят
Co robi znak „ь” w słowie „день”?|zmiękcza „н”|dodaje dźwięk „j”|nic, jest błędem
Jak brzmi „жить”?|żyt’|żit’|żyć
Która litera jest ZAWSZE miękka?|ч|ш|ж
Jak brzmi „маши́на”?|maszyna|maszina|masina
Jak zapiszesz poprawnie „książki”?|кни́ги|кни́гы|кни́гі
Jak brzmi „семья́”?|simja|semia|siemia
Która litera jest zawsze twarda?|ц|ч|щ
Jak brzmi „цирк”?|cyrk|cirk|czirk
Znak „ъ” w słowie „подъе́зд” oznacza…|wymowę „j” przed „е”|zmiękczenie „д”|długie „d”`
},
{ id: 'a0-4', level: 'A0', title: 'Upodobnienia i wyjątki w wymowie', subtitle: 'Ubezdźwięcznienie, nieme litery, что, его, -ться', body: `
<h3>1. Ubezdźwięcznienie na końcu wyrazu</h3>
<p>Tak jak w polskim („chleb” → [chlep]), dźwięczne spółgłoski na końcu wyrazu stają się bezdźwięczne:</p>
<table class="gt"><tr><td>б → p</td><td>{{хлеб}} [chlep]</td></tr><tr><td>в → f</td><td>{{Ивано́в}} [iwanof]</td></tr><tr><td>г → k</td><td>{{друг}} [druk]</td></tr><tr><td>д → t</td><td>{{сад}} [sat]</td></tr><tr><td>ж → sz</td><td>{{нож}} [nosz]</td></tr><tr><td>з → s</td><td>{{раз}} [ras]</td></tr></table>
<h3>2. Upodobnienie w grupach spółgłosek</h3>
<p>Spółgłoska upodabnia się do następnej: [[вку́сно|smacznie – [fkusna]]] [[ло́дка|łódka – [łotka]]] [[вокза́л|dworzec – [wagzał]]] [[сде́лать|zrobić – [zdiełat’]]]</p>
<h3>3. Nieme litery</h3>
[[здра́вствуйте|dzień dobry – [zdrastwujtie]]]
[[со́лнце|słońce – [sonce]]]
[[се́рдце|serce – [sierce]]]
[[пра́здник|święto – [praznik]]]
[[че́стный|uczciwy – [czesnyj]]]
<h3>4. Ważne wyjątki</h3>
<table class="gt"><tr><th>pisownia</th><th>wymowa</th><th>przykład</th></tr>
<tr><td>что, чтобы</td><td>szto, sztoby</td><td>{{что}}</td></tr>
<tr><td>-ого / -его</td><td>-awa / -iwa (г → w)</td><td>{{его́}} [jiwo], {{сего́дня}} [siwodnia], {{ничего́}} [nicziwo]</td></tr>
<tr><td>-тся / -ться</td><td>-ca</td><td>{{учи́ться}} [uczica], {{нра́вится}} [nrawica]</td></tr>
<tr><td>чн (w niektórych)</td><td>szn</td><td>{{коне́чно}} [kanieszna], {{ску́чно}} [skuszna]</td></tr>
<tr><td>сч, жч</td><td>śś (щ)</td><td>{{сча́стье}} [śśast’je], {{мужчи́на}} [muśśina]</td></tr>
<tr><td>гк</td><td>chk</td><td>{{лёгкий}} [lochkij], {{мя́гкий}} [miachkij]</td></tr></table>
<h3>5. Krótkie przyimki zlewają się z wyrazem</h3>
<p>Przyimki {{в}}, {{с}}, {{к}} czyta się razem z następnym słowem: {{в шко́ле}} [fszkole], {{с бра́том}} [zbratam], {{к дру́гу}} [gdrugu].</p>
<div class="tip">💡 W tej aplikacji przy każdym słowie zobaczysz transkrypcję w nawiasie kwadratowym – po poprawnej odpowiedzi aplikacja przeczyta słowo i pokaże, jak dokładnie się je wymawia.</div>`,
quiz: `
Jak brzmi „хлеб”?|chlep|chleb|chlew
Jak brzmi „что”?|szto|czto|sto
Jak brzmi „его́”?|jiwo|jego|jigo
Jak brzmi „учи́ться”?|uczica|uczit’sia|uczyt’sja
Jak brzmi „сего́дня”?|siwodnia|siegodnia|sigodnia
Jak brzmi „со́лнце”?|sonce|sołnce|solnce
Jak brzmi „вку́сно”?|fkusna|wkusno|wkusna
Jak brzmi „коне́чно”?|kanieszna|kanieczna|konieczno
Która litera jest niema w „здра́вствуйте”?|pierwsze „в”|„д”|„т”
Jak brzmi „друг”?|druk|drug|druch
Jak brzmi „мужчи́на”?|muśśina|mużczina|muszczyna`
},
{ id: 'a1-g1', level: 'A1', title: 'Это… Zdania bez „być”', subtitle: 'Кто э́то? Что э́то? Intonacja pytań', body: `
<p>W czasie teraźniejszym rosyjski <b>nie używa czasownika „być”</b>. Mówimy po prostu „ja student”, „to dom”.</p>
[[Я студе́нт.|Jestem studentem.]]
[[Э́то мой брат.|To (jest) mój brat.]]
[[Он врач.|On jest lekarzem.]]
[[Москва́ — столи́ца Росси́и.|Moskwa jest stolicą Rosji.]]
<div class="tip">💡 Gdy podmiot i orzeczenie są rzeczownikami, w piśmie stawiamy myślnik: {{Мой па́па — инжене́р.}}</div>
<h3>Кто э́то? Что э́то?</h3>
<p>{{кто}} pytamy o ludzi <b>i zwierzęta</b>, {{что}} o rzeczy.</p>
[[Кто э́то? — Э́то ко́шка.|Kto to? – To kot.]]
[[Что э́то? — Э́то стол.|Co to? – To stół.]]
<h3>Pytanie bez zmiany szyku</h3>
<p>Pytanie „tak/nie” tworzymy <b>tylko intonacją</b> – głos mocno wznosi się na słowie, o które pytamy (IK-3). Nie ma słowa „czy”.</p>
[[Э́то твоя́ кни́га?|Czy to twoja książka?]]
[[Ты студе́нт?|Jesteś studentem?]]
[[Да, я студе́нт. / Нет, я не студе́нт.|Tak, jestem studentem. / Nie, nie jestem studentem.]]
<h3>Partykuła „не” i spójnik „а”</h3>
<p>{{не}} stawiamy przed słowem, które przeczymy. Spójnik {{а}} przeciwstawia: </p>
[[Э́то не чай, а ко́фе.|To nie herbata, tylko kawa.]]
[[Я врач, а он учи́тель.|Ja jestem lekarzem, a on nauczycielem.]]`,
quiz: `
Как по-ру́сски „To jest mój brat”?|Э́то мой брат.|Э́то есть мой брат.|Э́то быть мой брат.
___ э́то? — Э́то соба́ка.|Кто|Что|Где
___ э́то? — Э́то маши́на.|Что|Кто|Как
Э́то не чай, ___ ко́фе.|а|и|но
Jak zadać pytanie „Czy ty jesteś lekarzem?”|Ты врач?|Ли ты врач?|Есть ты врач?
Я студе́нт, ___ он врач.|а|или|то
___ э́то? — Э́то мой па́па.|Кто|Что|Чей
Мой па́па ___ инжене́р. (znak w piśmie)|—|есть|это`
},
{ id: 'a1-g2', level: 'A1', title: 'Rodzaj rzeczowników', subtitle: 'Он, она, оно – rozpoznawanie po końcówce', body: `
<p>Rosyjskie rzeczowniki mają trzy rodzaje – tak jak polskie. Rodzaj poznasz po końcówce w mianowniku:</p>
<table class="gt"><tr><th>męski (он)</th><th>żeński (она)</th><th>nijaki (оно)</th></tr>
<tr><td>spółgłoska: {{дом}}, {{стол}}</td><td>-а: {{ма́ма}}, {{кни́га}}</td><td>-о: {{окно́}}, {{молоко́}}</td></tr>
<tr><td>-й: {{музе́й}}, {{чай}}</td><td>-я: {{неде́ля}}, {{семья́}}</td><td>-е: {{мо́ре}}, {{зда́ние}}</td></tr>
<tr><td>-ь: {{слова́рь}}, {{день}}</td><td>-ь: {{дверь}}, {{ночь}}</td><td>-мя: {{вре́мя}}, {{и́мя}}</td></tr></table>
<div class="warn">⚠️ Końcówka <b>-ь</b> może być męska lub żeńska – trzeba to zapamiętać! W słowniku aplikacji zobaczysz wtedy notatkę „м.” lub „ж.”. Wszystkie rzeczowniki na <b>-ость</b> są żeńskie: {{ра́дость}}, {{но́вость}}.</div>
<h3>Pułapki</h3>
<ul><li>{{па́па}}, {{де́душка}}, {{дя́дя}}, {{мужчи́на}} – końcówka -а/-я, ale rodzaj <b>męski</b> (to mężczyźni).</li>
<li>{{ко́фе}} – rodzaj <b>męski</b>: {{чёрный ко́фе}}.</li>
<li>{{вре́мя}}, {{и́мя}} – rodzaj <b>nijaki</b>.</li>
<li>Różnice z polskim: {{соба́ка}} (ż.) – pies (m.); {{боль}} (ż.) – ból (m.); {{медве́дь}} (m.) – niedźwiedź.</li></ul>
<h3>Mój, moja, moje</h3>
<p>Zaimek dostosowuje się do rodzaju: [[мой дом|mój dom]] [[моя́ ма́ма|moja mama]] [[моё окно́|moje okno]] [[мои́ де́ти|moje dzieci]]</p>`,
quiz: `
Jaki rodzaj ma „кни́га”?|żeński|męski|nijaki
Jaki rodzaj ma „мо́ре”?|nijaki|żeński|męski
Jaki rodzaj ma „па́па”?|męski|żeński|nijaki
Jaki rodzaj ma „ко́фе”?|męski|nijaki|żeński
Jaki rodzaj ma „вре́мя”?|nijaki|żeński|męski
___ ма́ма|моя́|мой|моё
___ окно́|моё|мой|моя́
___ слова́рь|мой|моя́|моё
Jaki rodzaj ma „ра́дость”?|żeński|męski|nijaki
___ музе́й|мой|моя́|моё
___ дверь|моя́|мой|моё`
},
{ id: 'a1-g3', level: 'A1', title: 'Liczba mnoga rzeczowników', subtitle: 'Końcówki -ы/-и, -а/-я i wyjątki', body: `
<h3>Rodzaj męski i żeński: -ы / -и</h3>
<table class="gt"><tr><th>liczba poj.</th><th>liczba mn.</th><th>reguła</th></tr>
<tr><td>{{стол}}</td><td>{{столы́}}</td><td>spółgłoska + ы</td></tr>
<tr><td>{{ма́ма}}</td><td>{{ма́мы}}</td><td>-а → -ы</td></tr>
<tr><td>{{музе́й}}</td><td>{{музе́и}}</td><td>-й → -и</td></tr>
<tr><td>{{неде́ля}}</td><td>{{неде́ли}}</td><td>-я → -и</td></tr>
<tr><td>{{слова́рь}}</td><td>{{словари́}}</td><td>-ь → -и</td></tr></table>
<div class="tip">💡 <b>Reguła 7 liter</b>: po г, к, х, ж, ш, ч, щ zawsze piszemy <b>и</b>, nigdy ы: {{кни́га}} → {{кни́ги}}, {{врач}} → {{врачи́}}, {{каранда́ш}} → {{карандаши́}}.</div>
<h3>Rodzaj nijaki: -а / -я</h3>
<p>[[окно́ → о́кна|okno → okna]] [[мо́ре → моря́|morze → morza]] [[зда́ние → зда́ния|budynek → budynki]]</p>
<h3>Męskie na -а́ (akcentowane)</h3>
<p>[[дом → дома́|dom → domy]] [[го́род → города́|miasto → miasta]] [[глаз → глаза́|oko → oczy]] [[па́спорт → паспорта́|paszport → paszporty]] [[учи́тель → учителя́|nauczyciel → nauczyciele]]</p>
<h3>Wyjątki do zapamiętania</h3>
<table class="gt"><tr><td>{{челове́к}} → {{лю́ди}}</td><td>{{ребёнок}} → {{де́ти}}</td></tr>
<tr><td>{{брат}} → {{бра́тья}}</td><td>{{друг}} → {{друзья́}}</td></tr>
<tr><td>{{стул}} → {{сту́лья}}</td><td>{{сын}} → {{сыновья́}}</td></tr>
<tr><td>{{мать}} → {{ма́тери}}</td><td>{{дочь}} → {{до́чери}}</td></tr>
<tr><td>{{и́мя}} → {{имена́}}</td><td>{{сосе́д}} → {{сосе́ди}}</td></tr></table>
<p>Tylko w liczbie mnogiej: {{де́ньги}}, {{часы́}}, {{брю́ки}}, {{очки́}}, {{но́жницы}}.</p>`,
quiz: `
стол → ___|столы́|стола́|столи́
кни́га → ___|кни́ги|кни́гы|кни́га
окно́ → ___|о́кна|окны́|окни́
дом → ___|дома́|до́мы|до́ми
челове́к → ___|лю́ди|челове́ки|человека́
ребёнок → ___|де́ти|ребёнки|ребя́та
брат → ___|бра́тья|бра́ты|брати́
врач → ___|врачи́|врачы́|врача́
неде́ля → ___|неде́ли|неде́лы|неде́ля
го́род → ___|города́|го́роды|городы́
мо́ре → ___|моря́|мо́ри|мо́ры
друг → ___|друзья́|дру́ги|друга́`
},
{ id: 'a1-g4', level: 'A1', title: 'Zaimki osobowe i dzierżawcze', subtitle: 'Я, ты, он… · мой, твой, его, её', body: `
<table class="gt"><tr><th>osobowe</th><th>dzierżawcze (m. / ż. / n. / mn.)</th></tr>
<tr><td>{{я}} – ja</td><td>{{мой}} / {{моя́}} / {{моё}} / {{мои́}}</td></tr>
<tr><td>{{ты}} – ty</td><td>{{твой}} / {{твоя́}} / {{твоё}} / {{твои́}}</td></tr>
<tr><td>{{он}} – on</td><td>{{его́}} (nieodmienne)</td></tr>
<tr><td>{{она́}} – ona</td><td>{{её}} (nieodmienne)</td></tr>
<tr><td>{{мы}} – my</td><td>{{наш}} / {{на́ша}} / {{на́ше}} / {{на́ши}}</td></tr>
<tr><td>{{вы}} – wy / Pan(i)</td><td>{{ваш}} / {{ва́ша}} / {{ва́ше}} / {{ва́ши}}</td></tr>
<tr><td>{{они́}} – oni/one</td><td>{{их}} (nieodmienne)</td></tr></table>
<h3>Forma grzecznościowa: Вы</h3>
<p>Do obcych, starszych i przełożonych mówimy {{вы}} (w listach często z wielkiej litery: Вы). Czasownik stoi w 2. os. l. mn.:</p>
[[Вы говори́те по-по́льски?|Czy Pan/Pani mówi po polsku?]]
[[Как вас зову́т?|Jak się Pan/Pani nazywa?]]
<div class="warn">⚠️ {{его́}}, {{её}}, {{их}} się nie zmieniają: {{его́ дом}}, {{его́ ма́ма}}, {{его́ де́ти}}. Uwaga na wymowę: его́ = [jiwo].</div>
<h3>Чей? Чья? Чьё? Чьи?</h3>
[[Чей э́то телефо́н? — Мой.|Czyj to telefon? – Mój.]]
[[Чья э́то су́мка? — Её.|Czyja to torba? – Jej.]]
[[Чьи э́то ключи́? — На́ши.|Czyje to klucze? – Nasze.]]`,
quiz: `
Э́то ___ кни́га. (moja)|моя́|мой|моё
Э́то ___ дом. (nasz)|наш|на́ша|на́ше
Э́то ___ ма́ма. (jego)|его́|её|свой
___ э́то су́мка?|Чья|Чей|Чьё
___ э́то де́ти?|Чьи|Чья|Чей
Э́то ___ окно́. (wasze)|ва́ше|ваш|ва́ша
Jak grzecznie zapytać „Czy Pan mówi po rosyjsku?”|Вы говори́те по-ру́сски?|Ты говори́шь по-ру́сски?|Он говори́т по-ру́сски?
Э́то ___ де́ти. (ich)|их|ихние|и́хи
___ э́то слова́рь?|Чей|Чья|Чьи
Э́то ___ пальто́. (twoje)|твоё|твой|твоя́`
},
{ id: 'a1-g5', level: 'A1', title: 'Czasowniki: I koniugacja', subtitle: 'Чита́ть, рабо́тать, жить – końcówki -ешь', body: `
<p>Rosyjskie czasowniki w czasie teraźniejszym dzielą się na dwie koniugacje. <b>I koniugacja</b> ma w końcówkach samogłoskę <b>е/ё</b>.</p>
<table class="gt"><tr><th></th><th>чита́ть (czytać)</th><th>рабо́тать (pracować)</th><th>końcówka</th></tr>
<tr><td>я</td><td>чита́ю</td><td>рабо́таю</td><td>-ю / -у</td></tr>
<tr><td>ты</td><td>чита́ешь</td><td>рабо́таешь</td><td>-ешь</td></tr>
<tr><td>он/она́</td><td>чита́ет</td><td>рабо́тает</td><td>-ет</td></tr>
<tr><td>мы</td><td>чита́ем</td><td>рабо́таем</td><td>-ем</td></tr>
<tr><td>вы</td><td>чита́ете</td><td>рабо́таете</td><td>-ете</td></tr>
<tr><td>они́</td><td>чита́ют</td><td>рабо́тают</td><td>-ют / -ут</td></tr></table>
<p>Tak odmieniają się m.in.: {{знать}}, {{де́лать}}, {{понима́ть}}, {{слу́шать}}, {{гуля́ть}}, {{отдыха́ть}}, {{ду́мать}}.</p>
<h3>Końcówki akcentowane: -ёшь</h3>
<p>Gdy akcent pada na końcówkę, <b>е</b> zmienia się w <b>ё</b>:</p>
<table class="gt"><tr><th></th><th>жить (mieszkać)</th><th>идти́ (iść)</th><th>пить (pić)</th></tr>
<tr><td>я</td><td>живу́</td><td>иду́</td><td>пью</td></tr>
<tr><td>ты</td><td>живёшь</td><td>идёшь</td><td>пьёшь</td></tr>
<tr><td>он</td><td>живёт</td><td>идёт</td><td>пьёт</td></tr>
<tr><td>мы</td><td>живём</td><td>идём</td><td>пьём</td></tr>
<tr><td>вы</td><td>живёте</td><td>идёте</td><td>пьёте</td></tr>
<tr><td>они́</td><td>живу́т</td><td>иду́т</td><td>пьют</td></tr></table>
<h3>Wymiany w temacie</h3>
[[писа́ть: пишу́, пи́шешь, пи́шут|pisać: piszę, piszesz, piszą]]
[[мочь: могу́, мо́жешь, мо́гут|móc: mogę, możesz, mogą]]
[[дава́ть: даю́, даёшь, даю́т|dawać: daję, dajesz, dają]]
[[танцева́ть: танцу́ю, танцу́ешь|tańczyć: tańczę, tańczysz]]
<div class="tip">💡 Czasowniki na <b>-овать/-евать</b> tracą ten fragment i dostają <b>-у-</b>: {{рисова́ть}} → {{рису́ю}}, {{путеше́ствовать}} → {{путеше́ствую}}.</div>`,
quiz: `
Я ___ кни́гу. (чита́ть)|чита́ю|чита́ет|чита́ешь
Ты ___ по-ру́сски? (понима́ть)|понима́ешь|понима́ет|понима́ю
Они́ ___ в Москве́. (жить)|живу́т|живёт|живя́т
Мы ___ ко́фе. (пить)|пьём|пьёт|пием
Вы ___ пи́сьма? (писа́ть)|пи́шете|писа́ете|пишёте
Она́ ___ в ба́нке. (рабо́тать)|рабо́тает|рабо́тоет|рабо́тит
Я не ___. (мочь)|могу́|мо́жу|мо́гу
Он ___ домо́й. (идти́)|идёт|иде́т|идит
Я ___ ру́сский язы́к. (изуча́ть)|изуча́ю|изучу́|изуча́м
Ты хорошо́ ___! (танцева́ть)|танцу́ешь|танцева́ешь|танцуёшь
Они́ ___ рок. (слу́шать)|слу́шают|слу́шат|слу́шуют`
},
{ id: 'a1-g6', level: 'A1', title: 'Czasowniki: II koniugacja i nieregularne', subtitle: 'Говори́ть, люби́ть, хоте́ть, есть', body: `
<p><b>II koniugacja</b> ma w końcówkach samogłoskę <b>и</b>. Należą tu głównie czasowniki na <b>-ить</b> oraz niektóre na -еть, -ать.</p>
<table class="gt"><tr><th></th><th>говори́ть</th><th>смотре́ть</th><th>końcówka</th></tr>
<tr><td>я</td><td>говорю́</td><td>смотрю́</td><td>-ю / -у</td></tr>
<tr><td>ты</td><td>говори́шь</td><td>смо́тришь</td><td>-ишь</td></tr>
<tr><td>он/она́</td><td>говори́т</td><td>смо́трит</td><td>-ит</td></tr>
<tr><td>мы</td><td>говори́м</td><td>смо́трим</td><td>-им</td></tr>
<tr><td>вы</td><td>говори́те</td><td>смо́трите</td><td>-ите</td></tr>
<tr><td>они́</td><td>говоря́т</td><td>смо́трят</td><td>-ят / -ат</td></tr></table>
<h3>Wymiana spółgłosek w 1. osobie (tylko „я”)</h3>
<table class="gt"><tr><td>б → бл</td><td>{{люби́ть}}: {{люблю́}}, {{лю́бишь}}</td></tr>
<tr><td>п → пл</td><td>{{спать}}: {{сплю}}, {{спишь}}</td></tr>
<tr><td>в → вл</td><td>{{гото́вить}}: {{гото́влю}}, {{гото́вишь}}</td></tr>
<tr><td>д → ж</td><td>{{ви́деть}}: {{ви́жу}}, {{ви́дишь}}</td></tr>
<tr><td>с → ш</td><td>{{проси́ть}}: {{прошу́}}, {{про́сишь}}</td></tr>
<tr><td>т → ч</td><td>{{плати́ть}}: {{плачу́}}, {{пла́тишь}}</td></tr></table>
<div class="tip">💡 Po ж, ш, ч, щ piszemy <b>-у, -ат</b>: {{лежа́ть}} → {{лежу́}}, {{лежа́т}}; {{учи́ть}} → {{учу́}}, {{у́чат}}.</div>
<h3>Czasowniki nieregularne – absolutna podstawa</h3>
<table class="gt"><tr><th></th><th>хоте́ть (chcieć)</th><th>есть (jeść)</th><th>дать (dać)</th><th>бежа́ть (biec)</th></tr>
<tr><td>я</td><td>хочу́</td><td>ем</td><td>дам</td><td>бегу́</td></tr>
<tr><td>ты</td><td>хо́чешь</td><td>ешь</td><td>дашь</td><td>бежи́шь</td></tr>
<tr><td>он</td><td>хо́чет</td><td>ест</td><td>даст</td><td>бежи́т</td></tr>
<tr><td>мы</td><td>хоти́м</td><td>еди́м</td><td>дади́м</td><td>бежи́м</td></tr>
<tr><td>вы</td><td>хоти́те</td><td>еди́те</td><td>дади́те</td><td>бежи́те</td></tr>
<tr><td>они́</td><td>хотя́т</td><td>едя́т</td><td>даду́т</td><td>бегу́т</td></tr></table>`,
quiz: `
Я ___ по-ру́сски. (говори́ть)|говорю́|говори́т|говори́ю
Ты ___ фи́льмы? (люби́ть)|лю́бишь|люби́ешь|лю́блишь
Я ___ му́зыку. (люби́ть)|люблю́|любю́|лю́бю
Они́ ___ телеви́зор. (смотре́ть)|смо́трят|смо́трют|смотре́ют
Я ___ ча́ю. (хоте́ть)|хочу́|хоте́ю|хо́чу
Мы ___ пи́ццу. (хоте́ть)|хоти́м|хо́чем|хоте́м
Что ты ___ на за́втрак? (есть)|ешь|еди́шь|е́стешь
Я ___ его́ ка́ждый день. (ви́деть)|ви́жу|ви́дю|ви́деу
Он ___ на дива́не. (лежа́ть)|лежи́т|лежа́ет|лежёт
Я ___ за обе́д. (плати́ть)|плачу́|плату́|плати́ю
Они́ ___ мно́го. (спать)|спят|спа́ют|спу́т
Где вы ___? (учи́ться)|у́читесь|учи́етесь|у́чатесь`
},
{ id: 'a1-g7', level: 'A1', title: 'Przymiotniki', subtitle: 'Како́й? Zgoda z rzeczownikiem w mianowniku', body: `
<table class="gt"><tr><th></th><th>twarde</th><th>akcent. końcówka</th><th>miękkie</th><th>po г,к,х,ж,ш</th></tr>
<tr><td>m. (како́й?)</td><td>но́вый</td><td>молодо́й</td><td>си́ний</td><td>ру́сский, хоро́ший</td></tr>
<tr><td>ż. (кака́я?)</td><td>но́вая</td><td>молода́я</td><td>си́няя</td><td>ру́сская, хоро́шая</td></tr>
<tr><td>n. (како́е?)</td><td>но́вое</td><td>молодо́е</td><td>си́нее</td><td>ру́сское, хоро́шее</td></tr>
<tr><td>mn. (каки́е?)</td><td>но́вые</td><td>молоды́е</td><td>си́ние</td><td>ру́сские, хоро́шие</td></tr></table>
[[но́вый дом|nowy dom]]
[[краси́вая де́вушка|ładna dziewczyna]]
[[большо́е окно́|duże okno]]
[[интере́сные кни́ги|ciekawe książki]]
<div class="warn">⚠️ Po <b>ж, ш, ч, щ</b> nieakcentowane „о” zamienia się na „е”: {{хоро́шее}}, nie „хорошое”. A po г, к, х, ж, ш, ч, щ zawsze <b>-ий/-ие</b> zamiast -ый/-ые: {{ру́сский}}, {{ти́хие}}.</div>
<h3>Przymiotnik jako rzeczownik</h3>
<p>Niektóre przymiotniki działają jak rzeczowniki: {{ва́нная}} (łazienka), {{столо́вая}} (stołówka), {{моро́женое}} (lody), {{ру́сский}} (Rosjanin).</p>
<h3>Przysłówki od przymiotników: -о</h3>
[[хоро́ший → хорошо́|dobry → dobrze]]
[[бы́стрый → бы́стро|szybki → szybko]]
[[ру́сский → по-ру́сски|rosyjski → po rosyjsku]]`,
quiz: `
Э́то ___ кни́га. (nowa)|но́вая|но́вый|но́вое
У меня́ ___ дом. (duży)|большо́й|больша́я|большо́е
Э́то ___ окно́. (niebieskie)|си́нее|си́нее окно́е|си́няя
Где ___ студе́нты? (rosyjscy)|ру́сские|ру́сскые|ру́сская
Како́е ___ мо́ре! (piękne)|краси́вое|краси́вый|краси́вая
Э́то ___ пого́да. (dobra)|хоро́шая|хоро́шея|хоро́ший
___ э́то маши́на?|Кака́я|Како́й|Каки́е
Он говори́т ___. (szybko)|бы́стро|бы́стрый|бы́страя
Мой брат ___. (młody)|молодо́й|молода́я|молоды́е
Э́то ___ пальто́. (ciepłe)|тёплое|тёплый|тёплая`
},
{ id: 'a1-g8', level: 'A1', title: 'Miejscownik (Предло́жный паде́ж)', subtitle: 'Где? О ком? О чём? – в / на / о', body: `
<p>Miejscownik odpowiada na pytania <b>где?</b> (gdzie?) oraz <b>о ком? о чём?</b> (o kim? o czym?). Używamy go z przyimkami <b>в, на, о</b>.</p>
<h3>Końcówki</h3>
<table class="gt"><tr><th>mianownik</th><th>miejscownik</th><th>przykład</th></tr>
<tr><td>стол, окно́, ма́ма, мо́ре</td><td><b>-е</b></td><td>на столе́, в окне́, о ма́ме, на мо́ре</td></tr>
<tr><td>музе́й, слова́рь, неде́ля</td><td><b>-е</b></td><td>в музе́е, в словаре́, на неде́ле</td></tr>
<tr><td>-ь (ż.): тетра́дь, пло́щадь</td><td><b>-и</b></td><td>в тетра́ди, на пло́щади</td></tr>
<tr><td>-ия, -ие: Росси́я, зда́ние</td><td><b>-ии</b></td><td>в Росси́и, в зда́нии</td></tr></table>
[[Я живу́ в Москве́.|Mieszkam w Moskwie.]]
[[Кни́га лежи́т на столе́.|Książka leży na stole.]]
[[Мы говори́м о фи́льме.|Rozmawiamy o filmie.]]
<h3>В czy на?</h3>
<p>{{в}} – wewnątrz (miasto, kraj, budynek). {{на}} – na powierzchni, a także z wydarzeniami i niektórymi miejscami, które trzeba zapamiętać:</p>
<table class="gt"><tr><th>на + miejscownik</th></tr>
<tr><td>на рабо́те, на уро́ке, на конце́рте, на вокза́ле, на по́чте, на у́лице, на пло́щади, на заво́де, на ры́нке, на стадио́не, на ку́хне, на эта́же, на мо́ре, на Украи́не / в Украи́не</td></tr></table>
<h3>Końcówka akcentowana -у́</h3>
<p>Kilkanaście męskich rzeczowników ma w miejscu końcówkę <b>-у́</b>: {{в лесу́}}, {{в саду́}}, {{в шкафу́}}, {{на полу́}}, {{на мосту́}}, {{в аэропорту́}}, {{на берегу́}}, {{в году́}}.</p>
<h3>O mnie, o tobie…</h3>
<p>{{обо мне}}, {{о тебе́}}, {{о нём}}, {{о ней}}, {{о нас}}, {{о вас}}, {{о них}}. Przed samogłoską: {{об э́том}}, {{об А́нне}}.</p>`,
quiz: `
Я живу́ в ___. (Москва́)|Москве́|Москву́|Москвы́
Кни́га на ___. (стол)|столе́|стола́|стол
Мы в ___. (музе́й)|музе́е|музе́и|музе́ю
Он рабо́тает на ___. (заво́д)|заво́де|заво́ду|заво́д
Они́ живу́т в ___. (Росси́я)|Росси́и|Росси́е|Росси́ю
Грибы́ расту́т в ___. (лес)|лесу́|ле́се|ле́са
Мы говори́м о ___. (ты)|тебе́|тебя́|ты
Па́па сейча́с ___ рабо́те.|на|в|о
Студе́нты ___ университе́те.|в|на|у
Кни́га о ___. (любо́вь)|любви́|любо́ве|любо́вь
Ва́за стои́т на ___. (пол)|полу́|по́ле|пола́
Мы бы́ли ___ конце́рте.|на|в|за`
},
{ id: 'a1-g9', level: 'A1', title: 'Biernik (Вини́тельный паде́ж)', subtitle: 'Кого́? Что? Куда́? – dopełnienie i kierunek', body: `
<p>Biernik to przypadek dopełnienia bliższego (kogo? co?) i kierunku z <b>в / на</b> (куда́? – dokąd?).</p>
<table class="gt"><tr><th>rodzaj</th><th>mianownik</th><th>biernik</th></tr>
<tr><td>żeński -а / -я</td><td>ма́ма, неде́ля</td><td><b>ма́му, неде́лю</b></td></tr>
<tr><td>żeński -ь</td><td>дверь</td><td>дверь (bez zmian)</td></tr>
<tr><td>męski nieżywotny, nijaki</td><td>стол, окно́</td><td>стол, окно́ (bez zmian)</td></tr>
<tr><td>męski <b>żywotny</b></td><td>брат, учи́тель</td><td><b>бра́та, учи́теля</b> (= dopełniacz)</td></tr></table>
[[Я чита́ю кни́гу.|Czytam książkę.]]
[[Я люблю́ ма́му.|Kocham mamę.]]
[[Я ви́жу бра́та.|Widzę brata.]]
[[Я покупа́ю хлеб.|Kupuję chleb.]]
<h3>Где? vs Куда́?</h3>
<table class="gt"><tr><th>где? + miejscownik</th><th>куда́? + biernik</th></tr>
<tr><td>Я в шко́ле.</td><td>Я иду́ в шко́лу.</td></tr>
<tr><td>Мы на рабо́те.</td><td>Мы е́дем на рабо́ту.</td></tr>
<tr><td>Он до́ма.</td><td>Он идёт домо́й.</td></tr>
<tr><td>Он здесь / там.</td><td>Он идёт сюда́ / туда́.</td></tr></table>
<h3>Zaimki w bierniku</h3>
<p>{{меня́}}, {{тебя́}}, {{его́}}, {{её}}, {{нас}}, {{вас}}, {{их}}. Po przyimku dodajemy „н”: {{на него́}}, {{про неё}}.</p>
[[Я тебя́ люблю́.|Kocham cię.]]
[[Как его́ зову́т?|Jak on ma na imię?]]`,
quiz: `
Я чита́ю ___. (кни́га)|кни́гу|кни́ги|кни́ге
Я люблю́ ___. (ма́ма)|ма́му|ма́ма|ма́ме
Мы ждём ___. (брат)|бра́та|брат|бра́ту
Она́ покупа́ет ___. (хлеб)|хлеб|хле́ба|хле́бу
Я иду́ в ___. (шко́ла)|шко́лу|шко́ле|шко́лы
Он е́дет на ___. (рабо́та)|рабо́ту|рабо́те|рабо́та
Я ___ люблю́. (ty)|тебя́|тебе́|ты
Они́ смо́трят ___. (фильм)|фильм|фи́льма|фи́льму
Мы идём ___. (do domu)|домо́й|до́ма|в дом
Как ___ зову́т? (ona)|её|ей|она́
Я ви́жу ___. (учи́тель)|учи́теля|учи́тель|учи́телю
Где ты? — Я ___ шко́ле.|в|во|на`
},
{ id: 'a1-g10', level: 'A1', title: 'У меня́ есть / нет', subtitle: 'Posiadanie i dopełniacz (Роди́тельный) – początek', body: `
<p>Rosjanie rzadko mówią „mam”. Zamiast tego: <b>у + dopełniacz + есть</b> (dosł. „u mnie jest”).</p>
<table class="gt"><tr><td>у меня́ есть</td><td>ja mam</td></tr><tr><td>у тебя́ есть</td><td>ty masz</td></tr><tr><td>у него́ / у неё есть</td><td>on / ona ma</td></tr><tr><td>у нас / у вас / у них есть</td><td>my / wy / oni mają</td></tr></table>
[[У меня́ есть брат.|Mam brata.]]
[[У тебя́ есть вре́мя?|Masz czas?]]
[[У А́нны есть соба́ка.|Anna ma psa.]]
<div class="tip">💡 {{есть}} opuszczamy, gdy mówimy o cesze, a nie o samym fakcie posiadania: {{У неё голубы́е глаза́.}} (Ona ma niebieskie oczy.) {{У меня́ боли́т голова́.}}</div>
<h3>Нет + dopełniacz</h3>
<p>Brak czegoś wyrażamy konstrukcją <b>нет + dopełniacz</b>:</p>
<table class="gt"><tr><th>mianownik</th><th>dopełniacz</th><th>przykład</th></tr>
<tr><td>брат, стол</td><td><b>-а</b></td><td>У меня́ нет бра́та.</td></tr>
<tr><td>музе́й, слова́рь</td><td><b>-я</b></td><td>Здесь нет музе́я.</td></tr>
<tr><td>окно́ / мо́ре</td><td><b>-а / -я</b></td><td>Там нет окна́ / мо́ря.</td></tr>
<tr><td>ма́ма, кни́га</td><td><b>-ы / -и</b></td><td>У меня́ нет кни́ги.</td></tr>
<tr><td>неде́ля, дверь</td><td><b>-и</b></td><td>Здесь нет двери́.</td></tr></table>
[[У меня́ нет вре́мени.|Nie mam czasu.]]
[[До́ма нет хле́ба.|W domu nie ma chleba.]]
[[Его́ нет до́ма.|Nie ma go w domu.]]
<h3>Dopełniacz przynależności</h3>
[[маши́на бра́та|samochód brata]]
[[центр го́рода|centrum miasta]]
[[у́лица Пу́шкина|ulica Puszkina]]`,
quiz: `
У ___ есть маши́на. (ja)|меня́|мне|я
У ___ есть де́ти? (wy)|вас|вам|вы
У меня́ нет ___. (брат)|бра́та|брат|бра́ту
Здесь нет ___. (апте́ка)|апте́ки|апте́ку|апте́ка
У нас нет ___. (вре́мя)|вре́мени|вре́мя|вре́мена
У ___ есть соба́ка. (on)|него́|его́|нём
До́ма нет ___. (молоко́)|молока́|молоко́|молоку́
Э́то маши́на ___. (оте́ц)|отца́|оте́ца|отцу́
У неё ___ глаза́. (niebieskie)|голубы́е|голубы́х|голубо́й
Его́ нет ___. (w domu)|до́ма|домо́й|в до́ме
Как по-ру́сски „Nie mam czasu”?|У меня́ нет вре́мени.|Я не име́ю вре́мя.|Мне нет вре́мени.`
},
{ id: 'a1-g11', level: 'A1', title: 'Liczebniki, wiek i godziny', subtitle: '1 год, 2 го́да, 5 лет', body: `
<p>Po liczebnikach rzeczownik zmienia formę – to jedna z najważniejszych reguł rosyjskiego:</p>
<table class="gt"><tr><th>liczba</th><th>forma</th><th>przykład</th></tr>
<tr><td>1, 21, 31…</td><td>mianownik l. poj.</td><td>оди́н час, одна́ кни́га, два́дцать оди́н год</td></tr>
<tr><td>2, 3, 4, 22…</td><td>dopełniacz l. poj.</td><td>два ча́са, две кни́ги, три го́да</td></tr>
<tr><td>5–20, 25…</td><td>dopełniacz l. mn.</td><td>пять часо́в, пять книг, пять лет</td></tr></table>
<div class="tip">💡 Decyduje <b>ostatnia cyfra</b>: 21 – jak 1, 23 – jak 3, ale 11–14 – jak 5 (одиннадцать лет, четырнадцать часов).</div>
<h3>Wiek: celownik + liczba + год/го́да/лет</h3>
[[Мне два́дцать оди́н год.|Mam 21 lat.]]
[[Ему́ три го́да.|On ma 3 lata.]]
[[Ско́лько тебе́ лет? — Мне пятна́дцать лет.|Ile masz lat? – Mam 15 lat.]]
<h3>Która godzina?</h3>
[[Кото́рый час? / Ско́лько вре́мени?|Która godzina?]]
[[Сейча́с час.|Jest pierwsza.]]
[[Сейча́с три ча́са.|Jest trzecia.]]
[[Сейча́с семь часо́в.|Jest siódma.]]
[[в пять часо́в|o piątej]]
[[в два часа́ три́дцать мину́т|o 2:30]]
<h3>Ile kosztuje?</h3>
[[оди́н рубль, два рубля́, пять рубле́й|1 rubel, 2 ruble, 5 rubli]]
[[Э́то сто́ит сто рубле́й.|To kosztuje 100 rubli.]]`,
quiz: `
Мне два́дцать ___. (21 lat)|оди́н год|оди́н го́да|оди́н лет
Ему́ пять ___.|лет|го́да|год
Ей три ___.|го́да|лет|год
Сейча́с два ___.|часа́|часо́в|час
Сейча́с де́сять ___.|часо́в|часа́|час
Э́то сто́ит пять ___.|рубле́й|рубля́|рубль
У меня́ две ___. (сестра́)|сестры́|сёстры|сестёр
Ско́лько ___ лет?|тебе́|тебя́|ты
Ему́ оди́ннадцать ___.|лет|го́да|год
Я прие́ду в семь ___.|часо́в|часа́|час
Четы́ре ___. (стул)|сту́ла|сту́льев|стул`
},
{ id: 'a1-g12', level: 'A1', title: 'Czas przeszły', subtitle: '-л, -ла, -ло, -ли', body: `
<p>Czas przeszły tworzy się bardzo łatwo: odrzucamy <b>-ть</b> i dodajemy <b>-л</b>. Forma zależy od <b>rodzaju i liczby</b>, a nie od osoby!</p>
<table class="gt"><tr><th></th><th>чита́ть</th><th>говори́ть</th><th>быть</th></tr>
<tr><td>он (я, ты – mężczyzna)</td><td>чита́л</td><td>говори́л</td><td>был</td></tr>
<tr><td>она́ (я, ты – kobieta)</td><td>чита́ла</td><td>говори́ла</td><td>была́</td></tr>
<tr><td>оно́</td><td>чита́ло</td><td>говори́ло</td><td>бы́ло</td></tr>
<tr><td>мы, вы, они́</td><td>чита́ли</td><td>говори́ли</td><td>бы́ли</td></tr></table>
[[Вчера́ я была́ в теа́тре.|Wczoraj byłam w teatrze.]]
[[Мы смотре́ли фильм.|Oglądaliśmy film.]]
[[Где ты был?|Gdzie byłeś?]]
<h3>Nieregularne</h3>
<table class="gt"><tr><td>идти́</td><td>шёл, шла, шло, шли</td></tr>
<tr><td>мочь</td><td>мог, могла́, могли́</td></tr>
<tr><td>есть</td><td>ел, е́ла, е́ли</td></tr>
<tr><td>нести́</td><td>нёс, несла́, несли́</td></tr>
<tr><td>умере́ть</td><td>у́мер, умерла́, у́мерли</td></tr></table>
<h3>Było / nie było</h3>
<p>Czas przeszły od „у меня есть” i „нет”:</p>
[[У меня́ была́ соба́ка.|Miałem psa.]]
[[У нас не́ было вре́мени.|Nie mieliśmy czasu.]]
[[Вчера́ его́ не́ было до́ма.|Wczoraj nie było go w domu.]]
<div class="tip">💡 {{не́ было}} – akcent przechodzi na „не”! Tak samo: {{не́ был}}, {{не́ были}}, ale {{не была́}}.</div>`,
quiz: `
Вчера́ я (Anna) ___ в кино́. (быть)|была́|был|бы́ло
Он ___ кни́гу. (чита́ть)|чита́л|чита́ла|чита́ли
Мы ___ по-ру́сски. (говори́ть)|говори́ли|говори́л|говори́ло
Где вы ___? (быть)|бы́ли|был|была́
Она́ ___ домо́й. (идти́)|шла|шёл|идла́
Я (Piotr) не ___ прийти́. (мочь)|мог|могл|могла́
У нас не ___ вре́мени.|бы́ло|был|была́
Что ты ___ на обе́д? (есть, mężczyzna)|ел|есл|е́ла
Вчера́ ___ хо́лодно. (быть)|бы́ло|был|была́
Они́ ___ в Москве́. (жить)|жи́ли|жил|живи́ли
Ра́ньше у меня́ ___ соба́ка.|была́|был|бы́ло`
},
{ id: 'a1-g13', level: 'A1', title: 'Czas przyszły złożony', subtitle: 'Бу́ду + bezokolicznik', body: `
<p>Dla czasowników niedokonanych czas przyszły tworzymy jak w polskim: <b>быть (w czasie przyszłym) + bezokolicznik</b>.</p>
<table class="gt"><tr><th></th><th>быть</th><th>przykład</th></tr>
<tr><td>я</td><td>бу́ду</td><td>бу́ду чита́ть</td></tr>
<tr><td>ты</td><td>бу́дешь</td><td>бу́дешь рабо́тать</td></tr>
<tr><td>он/она́</td><td>бу́дет</td><td>бу́дет спать</td></tr>
<tr><td>мы</td><td>бу́дем</td><td>бу́дем отдыха́ть</td></tr>
<tr><td>вы</td><td>бу́дете</td><td>бу́дете смотре́ть</td></tr>
<tr><td>они́</td><td>бу́дут</td><td>бу́дут игра́ть</td></tr></table>
[[За́втра я бу́ду рабо́тать.|Jutro będę pracować.]]
[[Что ты бу́дешь де́лать ве́чером?|Co będziesz robić wieczorem?]]
[[Ле́том мы бу́дем отдыха́ть на мо́ре.|Latem będziemy odpoczywać nad morzem.]]
<h3>„Będę” samo</h3>
[[За́втра я бу́ду до́ма.|Jutro będę w domu.]]
[[У меня́ бу́дет вре́мя.|Będę mieć czas.]]
[[За́втра бу́дет дождь.|Jutro będzie padać.]]
<div class="warn">⚠️ Nigdy nie mów „бу́ду рабо́тал” (błąd z polskiego „będę pracował”). Tylko <b>бу́ду рабо́тать</b>.</div>
<p>Czasowniki dokonane (np. {{прочита́ть}}) mają czas przyszły prosty – poznasz go w lekcji o aspekcie (A2).</p>`,
quiz: `
За́втра я ___ рабо́тать.|бу́ду|бу́дет|был
Что ты ___ де́лать?|бу́дешь|бу́дете|бу́ду
Мы ___ смотре́ть фильм.|бу́дем|бу́дут|бу́дете
Они́ ___ жить в Москве́.|бу́дут|бу́дет|бу́дем
За́втра ___ хо́лодно.|бу́дет|бу́дут|бу́ду
Poprawnie: „Będę czytał”|бу́ду чита́ть|бу́ду чита́л|бу́ду чита́ю
Вы ___ до́ма ве́чером?|бу́дете|бу́дешь|бу́дем
У нас ___ экза́мен.|бу́дет|бу́дут|бу́дем`
},
{ id: 'a1-g14', level: 'A1', title: 'Czasowniki zwrotne i „нра́виться”', subtitle: '-ся / -сь; Мне нра́вится…', body: `
<p>Czasowniki zwrotne mają cząstkę <b>-ся</b> (po spółgłosce) lub <b>-сь</b> (po samogłosce). Odpowiada polskiemu „się”, ale jest zawsze doklejona na końcu.</p>
<table class="gt"><tr><th></th><th>учи́ться</th><th>занима́ться</th></tr>
<tr><td>я</td><td>учу́сь</td><td>занима́юсь</td></tr><tr><td>ты</td><td>у́чишься</td><td>занима́ешься</td></tr>
<tr><td>он</td><td>у́чится [uczica]</td><td>занима́ется</td></tr><tr><td>мы</td><td>у́чимся</td><td>занима́емся</td></tr>
<tr><td>вы</td><td>у́читесь</td><td>занима́етесь</td></tr><tr><td>они́</td><td>у́чатся</td><td>занима́ются</td></tr>
<tr><td>przeszły</td><td>учи́лся, учи́лась, учи́лись</td><td>занима́лся, занима́лась</td></tr></table>
<div class="warn">⚠️ Różnice z polskim: {{учи́ться}} = uczyć się, ale {{улыба́ться}} (uśmiechać się), {{смея́ться}} (śmiać się) – podobnie; natomiast „nazywać się” to {{меня́ зову́т}}, a „podobać się” – {{нра́виться}}.</div>
<h3>Мне нра́вится – „podoba mi się / lubię”</h3>
<p>Osoba stoi w <b>celowniku</b> (мне, тебе́, ему́…), a to, co się podoba, w mianowniku:</p>
[[Мне нра́вится Москва́.|Podoba mi się Moskwa.]]
[[Мне нра́вятся ко́шки.|Lubię kotki. (l. mn. → нра́вятся)]]
[[Ему́ нра́вится игра́ть в футбо́л.|On lubi grać w piłkę.]]
[[Тебе́ понра́вился фильм?|Podobał ci się film?]]
<h3>Люби́ть vs нра́виться</h3>
<p>{{люби́ть}} – kochać / bardzo lubić (stała sympatia). {{нра́виться}} – podobać się (wrażenie). {{Я люблю́ шокола́д}} = lubię czekoladę (ogólnie).</p>`,
quiz: `
Я ___ в университе́те. (учи́ться)|учу́сь|учу́ся|у́чится
Где ты ___? (учи́ться)|у́чишься|у́чишся|учи́шься
Он ___ спо́ртом. (занима́ться)|занима́ется|занима́ются|занима́етсь
Мне ___ э́тот фильм.|нра́вится|нра́вятся|нра́влюсь
Мне ___ ко́шки.|нра́вятся|нра́вится|нра́вит
___ нра́вится Москва́? (ty)|Тебе́|Ты|Тебя́
Она́ ___ в шко́ле. (учи́ться, cz. przeszły)|учи́лась|учи́лся|учи́ласа
Ему́ ___ фильм. (понра́виться, cz. przeszły)|понра́вился|понра́вилась|понра́вились
Мы ___ в 8 часо́в. (просыпа́ться)|просыпа́емся|просыпа́емсь|просыпа́ются`
},
{ id: 'a1-g15', level: 'A1', title: 'Czasowniki ruchu: идти́/ходи́ть, е́хать/е́здить', subtitle: 'Ruch w jedną stronę vs ruch wielokrotny', body: `
<p>Rosyjski rozróżnia (podobnie jak polski) ruch <b>jednokierunkowy, teraz</b> i ruch <b>wielokierunkowy, powtarzalny</b>.</p>
<table class="gt"><tr><th></th><th>jednokierunkowy (teraz, w drodze)</th><th>wielokierunkowy (często, tam i z powrotem)</th></tr>
<tr><td>pieszo</td><td>{{идти́}}: иду́, идёшь, иду́т</td><td>{{ходи́ть}}: хожу́, хо́дишь, хо́дят</td></tr>
<tr><td>pojazdem</td><td>{{е́хать}}: е́ду, е́дешь, е́дут</td><td>{{е́здить}}: е́зжу, е́здишь, е́здят</td></tr></table>
[[Сейча́с я иду́ в магази́н.|Teraz idę do sklepu.]]
[[Я ча́сто хожу́ в магази́н.|Często chodzę do sklepu.]]
[[Мы е́дем в Москву́ на по́езде.|Jedziemy do Moskwy pociągiem.]]
[[Ка́ждое ле́то мы е́здим на мо́ре.|Co roku latem jeździmy nad morze.]]
<h3>Byłem gdzieś = ходи́л / е́здил</h3>
<p>Czas przeszły czasownika wielokierunkowego oznacza „pojechać i wrócić”:</p>
[[Вчера́ я ходи́л в кино́. = Вчера́ я был в кино́.|Wczoraj byłem w kinie.]]
[[Ле́том мы е́здили в Петербу́рг.|Latem jeździliśmy (byliśmy) do Petersburga.]]
<h3>Środek transportu</h3>
<p>{{на}} + miejscownik: {{на авто́бусе}}, {{на маши́не}}, {{на метро́}}, {{на по́езде}}. Pieszo: {{пешко́м}}.</p>
<div class="tip">💡 Polskie „iść do lekarza” (pojazdem) Rosjanin powie {{е́хать к врачу́}}. Jeśli poruszasz się czymś – zawsze е́хать/е́здить!</div>`,
quiz: `
Сейча́с я ___ в шко́лу. (pieszo)|иду́|хожу́|е́ду
Ка́ждый день я ___ на рабо́ту. (pieszo)|хожу́|иду́|е́зжу
Мы ___ в Москву́ на по́езде. (teraz)|е́дем|е́здим|идём
Ка́ждое ле́то они́ ___ на мо́ре.|е́здят|е́дут|хо́дят
Куда́ ты ___? (teraz, pieszo)|идёшь|хо́дишь|е́дешь
Вчера́ мы ___ в теа́тр. (= byliśmy)|ходи́ли|шли|идём
Он ___ на рабо́ту на авто́бусе. (codziennie)|е́здит|е́дет|хо́дит
Я люблю́ ___ пешко́м.|ходи́ть|идти́|е́хать
Ле́том мы ___ в Ита́лию. (byliśmy tam)|е́здили|е́хали|ходи́ли`
}
);
