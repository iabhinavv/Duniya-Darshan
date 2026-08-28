# Duniya Darshan

A travel budget that works on the road, laid out like a broadsheet. Plan what a
trip should cost, log what it actually cost in whatever currency you are holding,
keep the itinerary — and watch the world map fill in as you go.

No account, no server, no install. Your data is a file in this repo — clone it,
open one file, and it is all there.

Built from `World_tour_budget.xlsx`: 36 countries, ₹38,92,400, ten days apiece,
all editable.

```
Traveller Budget App/
├── index.html              ← the whole app. Open this. That's it.
├── data/
│   └── trip-data.js        ← your trips, committed with the repo
├── World_tour_budget.xlsx  ← the sheet this started from
├── README.md               ← this file
├── serve.py                ← optional; gives you an http:// origin
├── build.py                ← rebuilds index.html from src/ (only if you edit the code)
├── import_xlsx.py          ← re-imports the spreadsheet (only if you edit the sheet)
├── make_maps.py            ← rebuilds the maps (only if you change the boundaries)
├── geodata/                ← the public-domain boundary files the maps come from
└── src/                    ← the source index.html is built from
    ├── app.css
    ├── index.template.html
    └── js/*.js
```

---

## 1. Quick start

1. Clone or copy the folder anywhere on your machine.
2. Open **`index.html`** — double-click it. No server, no terminal, no install.
3. Your 36 countries are already in there with their budgets. Start changing things.

**Daily loop while travelling:** press <kbd>L</kbd> (or the **+** button on your
phone), type what you just spent, pick the category, done. Three seconds.

### Running it properly (recommended)

```bash
python3 serve.py
```

Then open **http://localhost:4190/**. Two things only work over `http://`:

- **Photo lookup.** Wikipedia's servers will not answer a page opened straight
  off the disk. Pasting your own image URLs works either way.
- **Your phone.** `HOST=0.0.0.0 python3 serve.py` and open
  `http://<your-mac's-ip>:4190/` on the same Wi-Fi. Add it to your home screen
  and it behaves like an app.

---

## 2. Where your data lives

Everything is saved in the browser as you work — instantly, no save button.

To make it a real file that commits and diffs, go to **Data → Connect data file**
and pick `data/trip-data.js` in this folder. From then on every change is written
into that file too. Chrome, Edge and Arc support this. The browser may ask you to
confirm write access again after you quit and reopen it; the Data page shows
**Allow writing again** when it does.

**Safari and Firefox** cannot write files in place. There the same page offers
**Download data file** — you get `trip-data.js` and drop it into `data/`,
replacing the old one. One drag, whenever you feel like committing.

**JSON backup** on the same page is the belt-and-braces copy, and **Restore from
backup** puts it back.

---

## 3. The front page

Opening the app puts everything on one page: the totals across every trip, the
world map, and the trips themselves. Click a trip to go straight to its places.

Two trips come set up:

- **World Tour** — the spreadsheet, 36 countries.
- **Within India** — empty, for intercity trips at home. Its places are cities
  rather than countries, it defaults to 4 days a stop, and it gets a map of India
  instead of the world.

Make as many as you like. **Duplicate** copies a trip's places and budget but
clears its spending — handy for planning the same route again, or for turning a
plan into the real thing.

---

## 4. The maps

The front page carries a world map; a trip at home carries a map of India. They
work the same way.

- **Pale teal** — the place is on the itinerary, nothing spent yet.
- **Teal gradient** — money has been logged there. It is under way.
- **Deep teal** — 90% or more of its budget is spent. Call it done.
- **Red** — spent past the budget.

A dot marks each city, and stands in for countries too small to fill at this
scale — Singapore, the Faroes. Hover for the figures; click to open the place.
On the world map, **clicking an empty country offers to add it to the trip**.

Boundaries are Natural Earth 1:110m and a public-domain set of Indian state
outlines, baked into the file by `make_maps.py`. Nothing is fetched at runtime,
so the maps work with no network at all.

---

## 5. The screens

| | |
|---|---|
| **Front Page** | Everything at once: totals across all trips, the world map, the trips, where the money is budgeted, the latest spending, what is coming up |
| **Countries / Cities** | The trip itself — its map, a card per place, and the trip's whole ledger of spending at the bottom |
| **The Sheet** | Your spreadsheet — places down, categories across, Budget / Actual / Variance, CSV out |
| **Itinerary** | The whole route day by day, dated from the trip start |
| **Almanac** | Backup, exchange rates, categories, booking links, reset |

**There is no separate Log section.** Spending belongs to a trip, so you log it
from a place card, from the **Spending** tab inside a place, or from the ledger at
the foot of the Countries page. On a phone the **+** in the middle of the tab bar
logs from anywhere.

Keyboard on a desktop: <kbd>F</kbd> front page, <kbd>P</kbd> places, <kbd>S</kbd>
sheet, <kbd>I</kbd> itinerary, <kbd>L</kbd> log spend, <kbd>Esc</kbd> closes a dialog.

---

## 6. Money

**Budgets are in rupees. Spending can be in anything.**

Log `450000` and pick `VND` and it stores ₹1,647 — using the rate on the Data
page, which came from column B of your sheet ("how many of these do I get for one
rupee"). Edit a rate any time; **already-logged expenses never move**, because
each one remembers the rate it was booked at.

The eight spend heads are yours to rename, remove or add to, per trip.

---

## 7. Photos and albums

Adding a place fetches one photo from Wikipedia automatically. **Find photos**
inside a place pulls more from Wikimedia Commons — freely licensed, credited
under each image. You can paste any image URL instead.

Photos are stored as links, not files, so the data file stays small and the whole
thing still commits cleanly.

**Drive** on the same place takes your own album links. A Google Drive folder or
file shared as "anyone with the link" is embedded and browsable right there.
Dropbox, OneDrive, iCloud and anything else become a link you can open.

---

## 8. Booking links

Every place has **Skyscanner** and **Booking.com** buttons that carry the city,
your home airport and the dates the itinerary works out for that stop.

Prefer Agoda, MakeMyTrip, Kiwi, Hostelworld? **Data → Booking links** — the
templates are yours to edit. These get filled in:

```
{city} {country} {iata} {home} {homecity} {in} {out} {yymmdd} {adults} {days}
```

---

## 9. Rebuilding

Only if you change the code or the spreadsheet.

```bash
python3 build.py        # src/ -> index.html
python3 import_xlsx.py  # World_tour_budget.xlsx -> the starting data
python3 make_maps.py    # geodata/ -> the map paths
```

`import_xlsx.py` needs `openpyxl`. It rewrites the starter data, so take a JSON
backup first if you have real trips in there. `make_maps.py` needs nothing but
the files already in `geodata/`.

---

## 10. What came from the spreadsheet, and what changed

All 36 budgets, the eight spend heads, the day counts and every exchange rate are
exactly as you had them — the total still comes to ₹38,92,400.

Four corrections on import:

- `Indonisia` → Indonesia, `Phillipines` → Philippines, `Columbia` → Colombia.
- `Copenhagen` sat in the country column; it is now **Denmark**, city Copenhagen.
- Croatia's and Germany's Euro rate pointed at the GBP cell. Set to a real Euro rate.
- Every country got a capital, a country code (for the flag) and an airport code
  (for the flight link).

---

## 11. The look

Set in **Playfair Display**, served from Google Fonts with Georgia behind it — so
if you are offline it still reads as a newspaper rather than falling apart. The
furniture (labels, buttons, table headings) is in a plain sans, the way a
broadsheet sets its captions and standfirsts against serif body copy.

---

Nothing is uploaded. There is no account and no analytics. The only network calls
the app ever makes are the optional photo lookups on Wikipedia and the font —
everything else, maps included, happens in your browser.
