# Говори́! – rosyjski od zera do B2

Progresywna aplikacja webowa (PWA) do nauki rosyjskiego dla Polaków: od cyrylicy do poziomu B2 w 52 tygodnie. Działa offline, na telefonie i komputerze, bez serwera i bez kont – postępy zapisują się w przeglądarce.

## Zawartość kursu
- **Alfabet** – 33 litery w 5 grupach, kursywa, sylaby, ćwiczenia czytania
- **2550 słów** (A1–B2) w 70 tematach, z akcentem, notatkami gramatycznymi i parami aspektowymi
- **56 lekcji gramatyki** (A0–B2) jak w podręczniku: tabele, przykłady z nagraniem, ćwiczenia
- **520 zdań** w 26 zestawach (układanie, słuchanie, dyktando)
- **12 czytanek** z nagraniem, transkrypcją, tłumaczeniem, słowniczkiem i pytaniami
- **Plan 52 tygodni** + testy końcowe poziomów z certyfikatem

## Wymowa
- Po każdej odpowiedzi aplikacja **czyta słowo lub całe zdanie** (Web Speech API, głos ru-RU).
- Automatyczna **transkrypcja polskimi literami** z zaznaczonym akcentem (молоко́ → [małakó]) – uwzględnia akanie/ikanie, miękkość, ubezdźwięcznienie, upodobnienia, nieme spółgłoski, -тся, -ого, что itd.
- **Zasady wymowy** wyjaśniane przy każdym słowie („о bez akcentu → [a]”, „д na końcu → [t]”…).

## Nauka
- Powtórki rozłożone w czasie (SRS), 10 typów ćwiczeń, XP, seria dni, cele dzienne, osiągnięcia, statystyki
- Klawiatura rosyjska na ekranie i transliteracja z polskich liter (sz→ш, cz→ч, ja→я, y→ы, '→ь)
- Tryb ciemny/jasny, eksport/import postępów

## Uruchomienie
```bash
python3 -m http.server 8080
```
i otwórz http://localhost:8080. Aby zainstalować na telefonie, wystaw folder pod adresem https (dowolny hosting statyczny) i wybierz „Dodaj do ekranu głównego”.

## Struktura
- `js/data/` – treść kursu (słowa, gramatyka, zdania, czytanki)
- `js/core/` – transkrypcja, mowa, stan i SRS, efekty
- `js/ui/`, `js/views/` – silnik ćwiczeń i ekrany
- `tools/check.js` – kontrola jakości treści (akcenty, duplikaty)
- `tools/build-sw.js` – generuje `sw.js` po zmianach w plikach
