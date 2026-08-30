# Duniya Darshan

A travel budget that works on the road, laid out like a broadsheet. Plan what a
trip should cost, log what it actually cost in whatever currency you are holding,
keep the itinerary — and watch the world map fill in as you go.

No account, no server, no install. Your data is a file in this repo — clone it,
open one file, and it is all there.

Built from your two spreadsheets:

- `World_tour_budget.xlsx` — **36 countries, ₹38,92,400**, ten days apiece.
- `India_tour_budget.xlsx` — **28 states, 185 days, ₹11,33,250**, with all 131
  towns and their day-by-day notes carried across.

All of it editable.

```
Traveller Budget App/
├── index.html              ← the whole app. Open this. That's it.
├── data/
│   └── trip-data.js        ← your trips, committed with the repo
├── World_tour_budget.xlsx  ← the world sheet this started from
├── India_tour_budget.xlsx  ← the India sheet
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

> **If a page looks empty after a re-import**, the browser is showing an older
> copy. The app now notices and offers to load the newer file when you open it,
> and **Almanac → Reload from data/trip-data.js** does it on demand.


Everything is saved in the browser as you work — instantly, no save button.
That copy takes priority over the file, which is what you want day to day but not
after a re-import; the app stamps each import and tells you when the folder holds
something newer.

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
world map, the charts, and the trips themselves. Click a trip to go straight to
its places.

### The charts

Two of them, side by side, for the whole ledger and again for whichever trip is
open. A **Budget / Spent** switch appears once anything is logged.

- **The ring** — hover a slice, or its row in the list beside it, and that slice
  lifts out while the rest dim. The middle swaps from the total to that
  category's own figure, its name, and its share of the whole.
- **The bars** — budget and spent side by side per category, against a **rupee
  scale down the left**. Hover or tab to a column for the exact figures: budget,
  spent, what is left or how far over, and the percentage used.

Every category gets its own colour, and the two are kept in step, so a slice and
its bar always match.

Two trips come set up:

- **World Tour** — 36 countries from the world sheet.
- **Within India** — 28 states from the India sheet, with a map of India instead
  of the world.

### Today

Give a trip a start date and, while it is running, the front page leads with
**where you are right now** — the place, which day of how many, what is left of
that place's budget, what that leaves you a day, where you go next, and whatever
you had planned for today, tickable.

### Are you on budget?

A total on its own never tells you whether you are overspending. The pacing bar
works out what you *should* have spent by this day of the trip and compares it
with what you have: **"₹81,588 in hand"** or **"₹12,400 ahead of the plan"**, with
your rate a day so far and where that rate lands you by the end.

Make as many as you like. **Duplicate** copies a trip's places and budget but
clears its spending — handy for planning the same route again, or for turning a
plan into the real thing.

---

## 4. The maps

The front page carries a world map; a trip at home carries a map of India. Both
are satellite imagery (Esri) drawn with OpenLayers, and both work the same way.

A **location pin** marks every place, coloured by how it is going:

| | |
|---|---|
| pale blue | on the itinerary, nothing spent yet |
| navy | done — 90% or more of the budget is spent |
| magenta | spent past the budget |

### What shows at which zoom

The maps open showing **pins only**. Names and figures arrive as you lean in, so
the map is never a wall of overlapping labels:

| Zoom | World | India |
|---|---|---|
| opening view | pins only | pins only |
| names appear | 4.2 | 6 |
| days, budget, spent appear | 5.4 | 7.2 |

Labels also **declutter**: if two would collide, the second is dropped rather
than stacked on top. Keep zooming and the crowded ones separate out and appear.

### Hover or tap a pin

You get a small card with the place, its days and its budget, and two buttons:

- **Open** — the place, with its budget, photos, albums and plan.
- **+ Log** — straight into logging a spend there.

It works the same on a phone: tap a pin, the card appears, tap a button.

---

## 5. The screens

The bar reads:

```
FRONT PAGE   WORLD TOUR   WITHIN INDIA   |   THE SHEET   ITINERARY   ALMANAC
```

Every trip you own gets its own entry, and the three pages on the right serve
**all** trips — each one carries a World Tour / Within India switch at the top
rather than quietly following whatever you last opened.

| | |
|---|---|
| **Front Page** | Everything at once: totals across all trips, the world map, Today, the pacing bar, the trips, where the money is budgeted, the latest spending, what is coming up |
| **World Tour** | Its map, a card per country, and the trip's ledger. Search and sort the cards; drag one to reorder the route |
| **Within India** | Two views of the same route: **States**, which carry the budget and fill the map, and **Cities**, all 131 towns in order with dates and notes — searchable, tickable, each row logging spend to its state |
| **The Sheet** | Your spreadsheet — places down, categories across, Budget / Actual / Variance, CSV out. Switches between trips |
| **Itinerary** | The whole route day by day, dated from the trip start. Switches between trips |
| **Almanac** | Backup, exchange rates, categories, booking links, reset. Categories are per trip, so it switches too |

**There is no separate Log section.** Spending belongs to a trip, so you log it
from a place card, from the **Spending** tab inside a place, or from the ledger at
the foot of the trip's page. On a phone the **+** in the middle of the tab bar
logs from anywhere, and the two trips sit either side of it.

Keyboard on a desktop: <kbd>F</kbd> front page, <kbd>P</kbd> places, <kbd>S</kbd>
sheet, <kbd>I</kbd> itinerary, <kbd>L</kbd> log spend, <kbd>Esc</kbd> closes a dialog.

### Finding the cheap ones

Above the cards sits a search box and a **Sort by**. Typing filters the grid
underneath without reloading the page — the box keeps its focus and the page keeps
its place. Rank by total budget, cost a
day, days, what you have actually spent, what is left — or by any single spend
head. So "cheapest countries overall" is Total budget, cheapest first; "cheapest
flights" is Flights, cheapest first; "where does food cost most in India" is
Food, priciest first, on the Within India states. A line underneath names the
winner: *Dearest on food: Himachal Pradesh at ₹5,500*.

Sorting is a view, not a change — route order is untouched, and each card keeps
its route number so you can see where it really sits. Switch back to **Route
order** to drag cards around again.

### Why states and not cities at home

Your India sheet budgets **by state** — one row of figures for Kerala, one for
Rajasthan — and the map fills by state too. So a state is the thing that carries
money, and the towns live inside it as the day-by-day plan. The **Cities** view
reads them straight back out, which is why the India section has both.

---

## 6. Money

**Budgets are in rupees. Spending can be in anything.**

Log `450000` and pick `VND` and it stores ₹1,647 — using the rate on the Data
page, which came from column B of your sheet ("how many of these do I get for one
rupee"). Edit a rate any time; **already-logged expenses never move**, because
each one remembers the rate it was booked at.

Every place card carries the line you actually want at a counter:
**₹100 = 27,319 VND · 1,000 VND = ₹3.66**. The reverse rate steps up by powers of
ten so it is never a useless "1 VND = ₹0".

Spend heads are per trip and yours to rename, remove or add to. The world trip has
eight; the India trip has the seven from your sheet, Petrol included.

---

## 7. Photos and albums

Adding a place fetches one photo from Wikipedia automatically. **Find photos**
inside a place pulls more from Wikimedia Commons — freely licensed, credited
under each image. You can paste any image URL instead.

Photos are stored as links, not files, so the data file stays small and the whole
thing still commits cleanly.

**Cards show them as posters.** Each country or state card is a tall poster with
the name across the bottom. Where a place has more than one photo the card
**fades from one to the next every few seconds**, with small pips showing how many
there are. One timer drives every visible card, and it stops itself when you
leave the page.

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

From the world sheet, four corrections on import:

- `Indonisia` → Indonesia, `Phillipines` → Philippines, `Columbia` → Colombia.
- `Copenhagen` sat in the country column; it is now **Denmark**, city Copenhagen.
- Croatia's and Germany's Euro rate pointed at the GBP cell. Set to a real Euro rate.
- Every country got a capital, a country code (for the flag) and an airport code
  (for the flight link).

Two map corrections, both from the source data crossing the 180th meridian:
**Russia** and **Fiji** were being drawn as a band smeared right across the map,
Russia straight through Alaska. Rings that straddle the antimeridian are now cut
into an eastern and a western piece, so Chukotka sits where it belongs, just west
of Alaska.

From the India sheet, one correction worth knowing about:

- Its own total cell reads **₹9,88,050**, but the `SUMIF` behind it only ranges to
  row 226 — so **Tamil Nadu, Goa and Maharashtra were being left out of it**. The
  real total across all 28 states is **₹11,33,250**, and that is what the app
  shows. Nothing else was changed; every state's own figures are yours as written.

---

## 11. The look

Set in **Playfair Display**, served from Google Fonts with Georgia behind it — so
if you are offline it still reads as a newspaper rather than falling apart. The
furniture (labels, buttons, table headings) is in a plain sans, the way a
broadsheet sets its captions and standfirsts against serif body copy.

Five colours, and nothing else:

| | | |
|---|---|---|
| `#00254a` | navy | the masthead, headings, primary buttons, the deep end of every gradient |
| `#75a7f1` | blue | planned places on the map, tints, the light end of every gradient |
| `#db0b69` | magenta | over budget, the India doorway on the world map, anything that wants your attention |
| `#000000` | black | body text |
| `#ffffff` | white | paper |

---

Nothing is uploaded. There is no account and no analytics. The only network calls
the app ever makes are the optional photo lookups on Wikipedia and the font —
everything else, maps included, happens in your browser.
