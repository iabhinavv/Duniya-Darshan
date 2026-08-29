# Duniya Darshan — design

Date: 2026-08-28
Source: `World_tour_budget.xlsx` (one sheet, 164 rows, 36 country blocks, ₹38,92,400 budgeted)

## Purpose

A travel budgeting, expense-tracking and itinerary app for one person's own use.
Replaces the spreadsheet with something usable on a phone while actually travelling:
plan a budget per country, log real spend in local currency, see budget vs actual,
and split costs with fellow travellers.

## Constraints

- One `index.html`, no build step required to run, no account, no server, no network.
- Install = clone the repo and open the file.
- Data lives with the user: localStorage as the working copy, `data/trip-data.js` as the
  committed file, JSON export as the escape hatch.
- Mobile must work properly, not merely reflow.

## Decisions (confirmed with the user)

1. **Multiple trips.** Top level is a trip list. A trip is `kind: 'world'` (places are
   countries) or `kind: 'domestic'` (places are cities). Each trip owns its travellers,
   categories, places and expenses.
2. **INR is the truth, local currency is accepted.** Budgets in ₹. An expense may be
   entered in the place's currency and is converted at that place's stored rate. The
   rate used is frozen onto the expense so later rate edits never rewrite history.
3. **Individual expense entries.** Each spend is a record (date, place, category,
   amount, currency, note, paidBy, shares). Day and category totals are derived, never
   stored. This is what makes the split feature possible.
4. **Shared vs per-person is a per-category flag**, set per trip. Seeded: Lodging,
   Transportation and Car Rental shared; Flights, Food, Activities, Visa, Misc
   per-person. Budget totals are shown as "my share" and "group total".

## Data model

```
DB = {
  version, settings{ symbol, homeAirport, linkTemplates{}, name },
  people[ {id,name,colour} ],
  currencies{ CODE: {name, perINR} },
  trips[ {
    id, name, kind, start, end, note, travellerIds[], defaultDays,
    categories[ {id,label,shared} ],
    places[ {id,name,country,city,iso2,iata,currency,days,order,notes,
             budget{catId:amount}, images[], driveLinks[], itinerary[] } ],
    expenses[ {id,placeId,date,category,amount,currency,rate,amountINR,
               note,paidBy,splitMode,shares{}} ]
  } ]
}
```

Derived, never stored: totals, variance, running total, daily average, balances.

## Screens

Trips · Overview · Places · Sheet · Log · Split · Itinerary · Data.
Desktop: left rail. Mobile: bottom tab bar with the five most-used, rest under More.

## External services

All optional; the app is fully functional with no network.

- **Images**: Wikipedia REST `page/summary` and Commons search. No API key, CORS-open,
  CC-licensed. Resolved URLs are cached into the data file. Manual URL paste always available.
- **Cloud drives**: user-supplied links per place. Public Google Drive folder IDs get an
  `embeddedfolderview` iframe; everything else renders as a link chip.
- **Booking**: editable URL templates with `{city} {country} {iata} {home} {in} {out}
  {adults} {yymmdd}` tokens. Seeded with Skyscanner and Booking.com.

## Corrections applied on import

`Indonisia`→Indonesia, `Phillipines`→Philippines, `Columbia`→Colombia,
`Copenhagen`→Denmark (city Copenhagen). Croatia's rate in the sheet pointed at the GBP
cell; set to a real EUR rate. Days default to 10 per country.

## Testing

Manual pass, served over http:// and verified in-browser at 375×812 and desktop:
create trip → add place → edit budget → log an expense in local currency → confirm the
sheet, overview and split all move → export → reload → data survives.


---

# Revision — 2026-08-28, later the same day

The user asked for a different product after seeing the first build. Superseded
decisions are struck through below rather than deleted, so the reasoning survives.

## What changed

1. **~~Split~~ removed.** No travellers, no shares, no settle-up, no shared vs
   per-person category flags. "I don't want it to be like Splitwise and no use for
   those features." Budget is simply budget; an expense is simply an amount.
2. **No Log section.** Spending belongs to a trip and is reached from a place card,
   the Spending tab inside a place, or the ledger at the foot of the places page.
3. **Trips merged into the dashboard.** The front page is now trips + aggregate
   stats + the world map. Opening a trip goes straight to its Countries (world) or
   Cities (domestic) page.
4. **Maps.** A Robinson-projection world map on the front page and a Mercator map
   of India inside a domestic trip. Fill states: planned / under way / done / over
   budget, driven by whether a place has logged spending. Clicking an empty country
   offers to add it.
5. **Broadsheet redesign.** Playfair Display, newsprint ground, hairline rules,
   masthead with dateline, small-caps sans furniture, drop-cap lede. Left rail
   replaced by a centred masthead and a horizontal section bar; mobile keeps a
   bottom tab bar.
6. **Gradients** carry the accent colour — masthead wordmark, hero stat, primary
   buttons, map fills, progress bars.

## Map data

`make_maps.py` converts `geodata/` into `src/js/01-maps.js` (~92 KB of path
strings). Sources are Natural Earth 1:110m countries via world-atlas, a
public-domain set of Indian state outlines, and the ISO 3166 numeric-to-alpha-2
table. Douglas-Peucker simplification keeps the size down. Nothing is fetched at
runtime.

Places carry `lat`/`lon` so cities and countries too small to fill at 110m
(Singapore, the Faroe Islands) get a dot instead. Coordinates are seeded for the
36 imported countries and picked up from Wikipedia for anything added later.


---

# Revision 2 — 2026-08-28, third pass

Added on request, plus the four usability suggestions from the previous handover.

1. **India sheet imported.** `India_tour_budget.xlsx` -> the Within India trip.
   One place per **state** (28), because the sheet budgets by state and the map
   fills by state; each day row becomes an itinerary entry carrying the city and
   its note. 185 days, 131 distinct towns, ₹11,33,250.
   The sheet's own total cell (₹9,88,050) is wrong — its SUMIF range stops at row
   226, excluding Tamil Nadu, Goa and Maharashtra. The app uses the real sum.
   The India trip has its own seven categories (Petrol instead of Visa/Car Rental).
2. **Cities page.** Domestic trips only. Flattens every place's itinerary into a
   searchable, tickable town-by-town list with dates, and a Log button per row.
   It is the answer to "a section named cities" without breaking the state-level
   budget or the map.
3. **India on the world map is a doorway.** Dashed outline, and clicking it
   switches to the domestic trip and opens its India map.
4. **Maps pan and zoom.** Wheel/pinch about the pointer, drag to pan, +/−/Reset
   buttons, translation clamped to the frame. A drag past 8px suppresses the
   click so panning never opens a country.
5. **Today panel** — where you are, day n of m, budget left here and per remaining
   day, what is next, and today's plan items.
6. **Pacing bar** — expected spend by this day against actual, rate a day, and the
   projection to the end.
7. **FX cheat line on every card** — ₹100 in local money, and the reverse stepped
   up by powers of ten so it is readable.
8. **Drag to reorder** places on desktop; the arrows remain for touch.


---

# Revision 3 — 2026-08-28, fourth pass

Two real bugs and three changes of direction.

## Bugs

1. **Clicking the map did nothing.** `svg.setPointerCapture()` on `pointerdown`
   retargets every later event — the `click` included — from the country to the
   `<svg>`, so the country's own handler never ran. The capture is now taken
   lazily, only once a drag has passed a 5px slop, so a plain click stays on the
   path. Caught only by clicking with a real mouse; a synthesised `click` event
   passed happily.
2. **A re-import sat invisible behind stale localStorage.** The saved copy always
   won on load, so the India import never reached a browser that had used the app
   before — which is exactly what happened. `import_xlsx.py` now writes a `stamp`
   (sha1 of the trips) into both the seed and the data file; on load a differing
   stamp raises a dialog offering to load the newer file, with a backup button
   first. Almanac also has a manual "Reload from data/trip-data.js".

## Changes

3. **Navigation is trip-first.** The bar is Front Page · <one entry per trip> ·
   The Sheet · Itinerary · Almanac. Those last three no longer follow whatever
   trip was last opened — each carries a trip switcher. The India section holds a
   States / Cities toggle rather than a separate nav entry. Mobile puts the two
   trips either side of the log button.
4. **Domestic places are states, and now say so.** Labels, the add dialog, the
   sheet header and the stat cards all read "state"; renaming one keeps
   `p.country` in step so the map keeps filling.
5. **New palette**, applied everywhere including charts, map gradients, favicon
   and theme colour: navy `#00254a`, blue `#75a7f1`, magenta `#db0b69`, black,
   white. Greys are tints of the navy on white, so nothing strays outside it.
   The old `--teal-*` ramp was renamed `--brand-*`.


---

# Revision 4 — 2026-08-29

1. **Antimeridian fix.** Russia and Fiji smeared across the whole map — Russia's
   band ran straight through Alaska. `make_maps.py` now unwraps each ring's
   longitudes to be continuous, and where a ring straddles 180 degrees it emits
   an eastern and a western piece, each Sutherland-Hodgman clipped to [-180,180].
   Fiji went from a 988px smear to 8px; Russia's Chukotka now sits correctly west
   of Alaska. Antarctica still spans the foot of the map, which is right.

   Worth noting: the first attempt looked like it had failed because
   `make_maps.py` writes `src/js/01-maps.js` but `build.py` had not been re-run,
   so `index.html` still held the old data. Always rebuild after regenerating.

2. **Tiered map labels.** A `.map-labels` group inside the zoom stage, with
   font-size divided by the zoom so type holds its screen size. Levels at
   k >= 1.35 / 2 / 3.4 / 5.5 reveal name, budget, spend + days, and rate a day.
   Anchored on the place's lat/lon, falling back to the centroid of the largest
   ring parsed straight out of the path string (no DOM measurement needed).

3. **Filter and sort on the places grid.** A search box plus a Sort by covering
   route order, total, cost a day, days, spent, remaining, and every one of the
   trip's own categories, with a cheapest/priciest toggle and a line naming the
   winner. Sorting is a view: route order is untouched, cards keep their route
   number, and drag-to-reorder is disabled (and says so) while a sort is on.
   Category ids differ between trips, so `normalise()` drops a sort the current
   trip has no category for rather than throwing.
