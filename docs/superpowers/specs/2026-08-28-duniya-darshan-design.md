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
