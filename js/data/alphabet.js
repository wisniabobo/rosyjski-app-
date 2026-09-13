/* Alfabet rosyjski – 33 litery w 5 grupach dydaktycznych */
window.RU = window.RU || { vocab: [], grammar: [], phrases: [], texts: [] };

RU.alphabetGroups = [
  { id: 1, title: 'Znajomi', desc: 'Wyglądają i brzmią prawie jak po polsku.', icon: '🤝' },
  { id: 2, title: 'Fałszywi przyjaciele', desc: 'Wyglądają znajomo, ale czyta się je inaczej!', icon: '🎭' },
  { id: 3, title: 'Nowe kształty, znane dźwięki', desc: 'Nowy wygląd, ale dźwięk znasz z polskiego.', icon: '✏️' },
  { id: 4, title: 'Nowe dźwięki', desc: 'Syczące i „ы” – tu trzeba poćwiczyć język.', icon: '🐍' },
  { id: 5, title: 'Samogłoski miękkie i znaki', desc: 'Litery, które zmiękczają i oddzielają.', icon: '🪶' }
];

/* [Wielka, mała, nazwa, wymowa (PL), grupa, przykład, tłumaczenie, wskazówka] */
RU.alphabet = [
  ['А','а','а','a',1,'ма́ма','mama','Zawsze jak polskie „a”.'],
  ['Б','б','бэ','b',3,'брат','brat','Jak polskie „b”. Na końcu wyrazu brzmi jak „p”: хлеб → [chlep].'],
  ['В','в','вэ','w',2,'вода́','woda','To NIE jest „b”! Czytamy jak polskie „w”. Przed bezdźwięczną → „f”: вкус → [fkus].'],
  ['Г','г','гэ','g',3,'го́род','miasto','Jak polskie „g”. W końcówkach -ого/-его czyta się „w”: его́ → [jiwo].'],
  ['Д','д','дэ','d',3,'дом','dom','Jak „d”. Na końcu wyrazu → „t”: сад → [sat].'],
  ['Е','е','е','je / ’e',2,'еда́','jedzenie','Na początku wyrazu i po samogłosce „je”, po spółgłosce ją zmiękcza: нет → [niet]. Bez akcentu brzmi jak „i”.'],
  ['Ё','ё','ё','jo / ’o',5,'ёж','jeż','Zawsze akcentowana! Po spółgłosce zmiękcza ją: мёд → [miot]. W tekstach często pisana jako „е”.'],
  ['Ж','ж','жэ','ż',4,'жена́','żona','Twarde „ż”. „жи” czytamy „ży”. Na końcu → „sz”: нож → [nosz].'],
  ['З','з','зэ','z',3,'зима́','zima','Wygląda jak cyfra 3. Czytamy „z”.'],
  ['И','и','и','i',3,'и́мя','imię','Jak „i”, zmiękcza poprzednią spółgłoskę: ми́ло → [miła]. Po ж, ш, ц brzmi jak „y”.'],
  ['Й','й','и кра́ткое','j',3,'май','maj','„i krótkie” – jak polskie „j”.'],
  ['К','к','ка','k',1,'ко́шка','kotka','Jak polskie „k”.'],
  ['Л','л','эль','ł / l',3,'ло́дка','łódka','Twarde л ≈ polskie „ł” (z językiem przy zębach), miękkie ль ≈ „l”: лю́ди → [ludi].'],
  ['М','м','эм','m',1,'мо́ре','morze','Jak polskie „m”.'],
  ['Н','н','эн','n',2,'нос','nos','To NIE jest „h”! Czytamy „n”.'],
  ['О','о','о','o / a',1,'окно́','okno','Pod akcentem „o”, bez akcentu „a”: окно́ → [akno]. To tzw. akanie.'],
  ['П','п','пэ','p',3,'па́па','tata','Wygląda jak greckie π. Czytamy „p”.'],
  ['Р','р','эр','r',2,'ры́ба','ryba','To NIE jest „p”! Czytamy „r”.'],
  ['С','с','эс','s',2,'сок','sok','To NIE jest „c”! Czytamy „s”.'],
  ['Т','т','тэ','t',1,'торт','tort','Jak polskie „t”. W piśmie odręcznym wygląda jak „m”!'],
  ['У','у','у','u',2,'у́тро','ranek','To NIE jest „y”! Czytamy „u”.'],
  ['Ф','ф','эф','f',3,'фо́то','zdjęcie','Jak polskie „f”.'],
  ['Х','х','ха','ch',2,'хлеб','chleb','To NIE jest „x”! Czytamy „ch”.'],
  ['Ц','ц','цэ','c',4,'цирк','cyrk','Zawsze twarde „c”. „ци” czytamy „cy”.'],
  ['Ч','ч','че','cz (miękkie)',4,'чай','herbata','Zawsze miękkie – coś pomiędzy polskim „cz” a „ć”.'],
  ['Ш','ш','ша','sz',4,'шко́ла','szkoła','Twarde „sz”. „ши” czytamy „szy”.'],
  ['Щ','щ','ща','śś (długie ś)',4,'борщ','barszcz','Długie, miękkie „ś”. W polskich podręcznikach tradycyjnie zapisywane „szcz”.'],
  ['Ъ','ъ','твёрдый знак','znak twardy',5,'подъе́зд','klatka schodowa','Nie ma dźwięku. Oddziela spółgłoskę od е, ё, ю, я: подъе́зд → [padjest].'],
  ['Ы','ы','ы','y',4,'сыр','ser','Jak polskie „y”, tylko głębsze. Nigdy nie stoi na początku wyrazu.'],
  ['Ь','ь','мя́гкий знак','znak miękki',5,'день','dzień','Nie ma dźwięku. Zmiękcza poprzednią spółgłoskę: мать → [mat’].'],
  ['Э','э','э','e',3,'э́то','to','Twarde „e” – nie zmiękcza spółgłoski. Głównie na początku wyrazu.'],
  ['Ю','ю','ю','ju / ’u',5,'юг','południe','Na początku „ju”, po spółgłosce zmiękcza ją: люблю́ → [lublu].'],
  ['Я','я','я','ja / ’a',5,'я́блоко','jabłko','Na początku „ja”, po spółgłosce zmiękcza ją. Bez akcentu brzmi jak „i”: язы́к → [jizyk].']
];

/* Wyrazy do ćwiczeń czytania – używają tylko liter z grup ≤ numer */
RU.readingWords = {
  1: ['кот|kot','как|jak','там|tam','кто|kto','ма́ма|mama','ток|prąd','а́том|atom','Том|Tom'],
  2: ['нос|nos','сок|sok','рука́|ręka','сестра́|siostra','ве́тер|wiatr','теа́тр|teatr','му́ха|mucha','сон|sen','торт|tort','метро́|metro','рестора́н|restauracja','у́тро|ranek','смех|śmiech','успе́х|sukces','нет|nie','вкус|smak'],
  3: ['брат|brat','дом|dom','го́род|miasto','ла́мпа|lampa','па́па|tata','фо́то|zdjęcie','э́то|to','май|maj','мой|mój','лимо́н|cytryna','банк|bank','гита́ра|gitara','хлеб|chleb','друг|przyjaciel','суп|zupa','зуб|ząb','молоко́|mleko','лук|cebula','го́лод|głód','да|tak'],
  4: ['жена́|żona','цирк|cyrk','чай|herbata','шко́ла|szkoła','борщ|barszcz','сыр|ser','мы|my','ты|ty','врач|lekarz','ча́шка|filiżanka','щи|kapuśniak','маши́на|samochód','жук|żuk','у́лица|ulica','о́вощи|warzywa','ша́пка|czapka','хорошо́|dobrze','что|co','жить|żyć','цвето́к|kwiat'],
  5: ['ёж|jeż','юг|południe','я|ja','я́блоко|jabłko','день|dzień','мать|matka','семья́|rodzina','люблю́|kocham','тётя|ciocia','мёд|miód','дя́дя|wujek','письмо́|list','подъе́зд|klatka schodowa','съесть|zjeść','моя́|moja','Росси́я|Rosja','учи́тель|nauczyciel','пять|pięć','сего́дня|dzisiaj','спаси́бо|dziękuję']
};

/* Najczęstsze sylaby do rozgrzewki */
RU.syllables = ['ма','мо','му','мы','ми','ме','мя','мё','мю','на','но','ну','ны','ни','не','ня','та','то','ту','ты','ти','те','тя','ла','ло','лу','лы','ли','ле','ля','да','ды','ди','де','дя','жа','жи','же','ша','ши','ше','ча','чи','чу','ща','щи','ца','цы','ра','ры','ри','ря','ба','бы','би','бе'];
