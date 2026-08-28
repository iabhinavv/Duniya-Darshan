#!/usr/bin/env python3
"""Read World_tour_budget.xlsx and write the seed used by Duniya Darshan.

    python3 import_xlsx.py

Writes src/js/02-seed.js (baked into index.html by build.py) and data/trip-data.js
(the file the app reads on a fresh clone). Run it again if you change the sheet.
"""
import json
import os

import openpyxl

HERE = os.path.dirname(os.path.abspath(__file__))
BOOK = os.path.join(HERE, "World_tour_budget.xlsx")

# Column letter in the sheet -> category id in the app.
COLS = {
    "I": "flights", "J": "transport", "K": "lodging", "L": "food",
    "M": "activities", "N": "carRental", "O": "visa", "P": "misc", "Q": "misc",
}
COLNUM = {"I": 9, "J": 10, "K": 11, "L": 12, "M": 13, "N": 14, "O": 15, "P": 16, "Q": 17}

# Sheet's country label -> (clean name, iso2, default city, IATA, currency, lat, lon).
# The coordinates put a dot on the world map; the polygon fill comes from iso2.
# The sheet had three typos and filed Copenhagen under the country column.
META = {
    "Nepal":           ("Nepal", "NP", "Kathmandu", "KTM", "NPR", 27.72, 85.32),
    "Bhutan":          ("Bhutan", "BT", "Thimphu", "PBH", "BTN", 27.47, 89.64),
    "Vietnam":         ("Vietnam", "VN", "Hanoi", "HAN", "VND", 21.03, 105.85),
    "Sri Lanka":       ("Sri Lanka", "LK", "Colombo", "CMB", "LKR", 6.93, 79.86),
    "Indonisia":       ("Indonesia", "ID", "Bali", "DPS", "IDR", -8.65, 115.22),
    "Thailand":        ("Thailand", "TH", "Bangkok", "BKK", "THB", 13.76, 100.5),
    "Cambodia":        ("Cambodia", "KH", "Siem Reap", "REP", "KHR", 13.36, 103.86),
    "Laos":            ("Laos", "LA", "Luang Prabang", "LPQ", "LAK", 19.89, 102.14),
    "Malaysia":        ("Malaysia", "MY", "Kuala Lumpur", "KUL", "MYR", 3.14, 101.69),
    "Phillipines":     ("Philippines", "PH", "Manila", "MNL", "PHP", 14.6, 120.98),
    "Egypt":           ("Egypt", "EG", "Cairo", "CAI", "EGP", 30.04, 31.24),
    "Jordan":          ("Jordan", "JO", "Amman", "AMM", "JOD", 31.95, 35.93),
    "Czech Republic":  ("Czech Republic", "CZ", "Prague", "PRG", "CZK", 50.08, 14.44),
    "China":           ("China", "CN", "Beijing", "PEK", "CNY", 39.9, 116.41),
    "Singapore":       ("Singapore", "SG", "Singapore", "SIN", "SGD", 1.35, 103.82),
    "Japan":           ("Japan", "JP", "Tokyo", "TYO", "JPY", 35.68, 139.69),
    "Hungary":         ("Hungary", "HU", "Budapest", "BUD", "HUF", 47.5, 19.04),
    "Croatia":         ("Croatia", "HR", "Dubrovnik", "DBV", "EUR", 42.65, 18.09),
    "Germany":         ("Germany", "DE", "Berlin", "BER", "EUR", 52.52, 13.4),
    "Copenhagen":      ("Denmark", "DK", "Copenhagen", "CPH", "DKK", 55.68, 12.57),
    "Faroe Islands":   ("Faroe Islands", "FO", "Torshavn", "FAE", "DKK", 62.01, -6.77),
    "Turkey":          ("Turkey", "TR", "Istanbul", "IST", "TRY", 41.01, 28.98),
    "Georgia":         ("Georgia", "GE", "Tbilisi", "TBS", "GEL", 41.72, 44.79),
    "South Africa":    ("South Africa", "ZA", "Cape Town", "CPT", "ZAR", -33.92, 18.42),
    "Columbia":        ("Colombia", "CO", "Bogota", "BOG", "COP", 4.71, -74.07),
    "Peru":            ("Peru", "PE", "Cusco", "CUZ", "PEN", -13.53, -71.97),
    "Ecuador":         ("Ecuador", "EC", "Quito", "UIO", "USD", -0.18, -78.47),
    "Bolivia":         ("Bolivia", "BO", "La Paz", "LPB", "BOB", -16.5, -68.15),
    "Guatemala":       ("Guatemala", "GT", "Antigua Guatemala", "GUA", "GTQ", 14.56, -90.73),
    "Nicaragua":       ("Nicaragua", "NI", "Granada", "MGA", "NIO", 11.93, -85.96),
    "Mexico":          ("Mexico", "MX", "Mexico City", "MEX", "MXN", 19.43, -99.13),
    "Kyrgyzstan":      ("Kyrgyzstan", "KG", "Bishkek", "FRU", "KGS", 42.87, 74.59),
    "Uzbekistan":      ("Uzbekistan", "UZ", "Tashkent", "TAS", "UZS", 41.3, 69.24),
    "Tajikistan":      ("Tajikistan", "TJ", "Dushanbe", "DYU", "TJS", 38.56, 68.79),
    "Kazakhstan":      ("Kazakhstan", "KZ", "Almaty", "ALA", "KZT", 43.24, 76.89),
    "Armenia":         ("Armenia", "AM", "Yerevan", "EVN", "AMD", 40.18, 44.51),
}

# code -> (display name, units per 1 INR). Rates come from the sheet's A/B columns.
# EUR is the one correction: the sheet's Euro cells pointed at the GBP cell.
CURRENCIES = {
    "INR": ("Indian Rupee", 1.0),
    "NPR": ("Nepalese Rupee", 1.6),
    "BTN": ("Ngultrum", 1.0),
    "VND": ("Vietnamese Dong", 273.19),
    "LKR": ("Sri Lankan Rupee", 3.43),
    "IDR": ("Indonesian Rupiah", 185.67),
    "THB": ("Thai Baht", 0.35),
    "KHR": ("Cambodian Riel", 42.42),
    "LAK": ("Lao Kip", 235.0),
    "MYR": ("Malaysian Ringgit", 0.042),
    "PHP": ("Philippine Peso", 0.65),
    "EGP": ("Egyptian Pound", 0.532),
    "JOD": ("Jordanian Dinar", 0.0074),
    "CZK": ("Czech Koruna", 0.218),
    "CNY": ("Renminbi", 0.07),
    "SGD": ("Singapore Dollar", 0.013),
    "JPY": ("Japanese Yen", 1.67),
    "HUF": ("Hungarian Forint", 3.3),
    "EUR": ("Euro", 0.00901),
    "DKK": ("Danish Krone", 0.0674),
    "TRY": ("Turkish Lira", 0.505),
    "GEL": ("Georgian Lari", 0.028),
    "ZAR": ("South African Rand", 0.169),
    "COP": ("Colombian Peso", 33.39),
    "PEN": ("Peruvian Sol", 0.035),
    "USD": ("US Dollar", 1 / 95.44),
    "BOB": ("Boliviano", 0.072),
    "GTQ": ("Guatemalan Quetzal", 0.081),
    "NIO": ("Nicaraguan Cordoba", 0.383),
    "MXN": ("Mexican Peso", 0.178),
    "KGS": ("Kyrgyzstani Som", 0.916),
    "UZS": ("Uzbekistani Som", 124.5),
    "TJS": ("Tajikistani Somoni", 0.114),
    "KZT": ("Kazakhstani Tenge", 4.86),
    "AMD": ("Armenian Dram", 4.03),
    "GBP": ("Pound Sterling", 1 / 129.6),
    "AED": ("UAE Dirham", 0.0385),
}

CATEGORIES = [
    ("flights",    "Flights"),
    ("transport",  "Transportation"),
    ("lodging",    "Lodging"),
    ("food",       "Food"),
    ("activities", "Activities"),
    ("carRental",  "Car Rental"),
    ("visa",       "Visa"),
    ("misc",       "Misc"),
]


def read_places():
    wb = openpyxl.load_workbook(BOOK, data_only=True)
    ws = wb["World Tour Budget"]
    places, order = [], 0
    for row in range(6, ws.max_row + 1):
        label = ws.cell(row=row, column=3).value
        if not label or not str(label).strip():
            continue
        label = str(label).strip()
        if label not in META:
            print("  ! no metadata for %r, skipping" % label)
            continue
        name, iso2, city, iata, cur, lat, lon = META[label]
        sheet_city = ws.cell(row=row, column=4).value
        if sheet_city and str(sheet_city).strip():
            city = str(sheet_city).strip()
        budget = {cid: 0 for cid, _ in CATEGORIES}
        for letter, cid in COLS.items():
            v = ws.cell(row=row, column=COLNUM[letter]).value
            if isinstance(v, (int, float)):
                budget[cid] += int(round(v))
        order += 1
        places.append({
            "id": "p_" + iso2.lower(),
            "name": name, "country": name, "city": city,
            "iso2": iso2, "iata": iata, "currency": cur,
            "lat": lat, "lon": lon,
            "days": 10, "order": order, "notes": "",
            "budget": budget, "images": [], "driveLinks": [], "itinerary": [],
        })
    return places


def build():
    places = read_places()
    total = sum(sum(p["budget"].values()) for p in places)
    print("  %d places, total budget INR %s" % (len(places), format(total, ",")))

    seed = {
        "version": 1,
        "settings": {
            "name": "",
            "symbol": "₹",
            "homeAirport": "DEL",
            "homeCity": "Delhi",
            "adults": 1,
            "linkTemplates": {
                "flights": {
                    "label": "Skyscanner",
                    "url": "https://www.skyscanner.co.in/transport/flights/{home}/{iata}/{yymmdd}/",
                },
                "stays": {
                    "label": "Booking.com",
                    "url": "https://www.booking.com/searchresults.html?ss={city}%2C+{country}&checkin={in}&checkout={out}&group_adults={adults}",
                },
                "activities": {
                    "label": "GetYourGuide",
                    "url": "https://www.getyourguide.com/s/?q={city}",
                },
            },
        },
        "currencies": {c: {"name": n, "perINR": r} for c, (n, r) in CURRENCIES.items()},
        "activeTrip": "trip_world",
        "trips": [
            {
                "id": "trip_world",
                "name": "World Tour",
                "kind": "world",
                "start": "", "end": "",
                "note": "Imported from World_tour_budget.xlsx",
                "defaultDays": 10,
                "categories": [{"id": c, "label": l} for c, l in CATEGORIES],
                "places": places,
                "expenses": [],
            },
            {
                "id": "trip_india",
                "name": "Within India",
                "kind": "domestic",
                "start": "", "end": "",
                "note": "Intercity trips at home",
                "defaultDays": 4,
                "categories": [{"id": c, "label": l} for c, l in CATEGORIES],
                "places": [],
                "expenses": [],
            },
        ],
    }

    blob = json.dumps(seed, ensure_ascii=False, indent=1)
    with open(os.path.join(HERE, "src", "js", "02-seed.js"), "w") as fh:
        fh.write("/* Generated by import_xlsx.py from World_tour_budget.xlsx. Do not hand-edit. */\n")
        fh.write("window.DUNIYA_SEED = " + blob + ";\n")
    with open(os.path.join(HERE, "data", "trip-data.js"), "w") as fh:
        fh.write("/* Your trips. Written by the app; safe to commit, diff and pull. */\n")
        fh.write("window.DUNIYA_DATA = " + blob + ";\n")
    print("  wrote src/js/02-seed.js and data/trip-data.js")


if __name__ == "__main__":
    build()
