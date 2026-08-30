/* Your trips. Written by Duniya Darshan; safe to commit, diff and pull. */
window.DUNIYA_DATA = {
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
    "url": "https://www.skyscanner.co.in/transport/flights/{home}/{iata}/{yymmdd}/"
   },
   "stays": {
    "label": "Booking.com",
    "url": "https://www.booking.com/searchresults.html?ss={city}%2C+{country}&checkin={in}&checkout={out}&group_adults={adults}"
   },
   "activities": {
    "label": "GetYourGuide",
    "url": "https://www.getyourguide.com/s/?q={city}"
   }
  }
 },
 "currencies": {
  "INR": {
   "name": "Indian Rupee",
   "perINR": 1
  },
  "NPR": {
   "name": "Nepalese Rupee",
   "perINR": 1.6
  },
  "BTN": {
   "name": "Ngultrum",
   "perINR": 1
  },
  "VND": {
   "name": "Vietnamese Dong",
   "perINR": 273.19
  },
  "LKR": {
   "name": "Sri Lankan Rupee",
   "perINR": 3.43
  },
  "IDR": {
   "name": "Indonesian Rupiah",
   "perINR": 185.67
  },
  "THB": {
   "name": "Thai Baht",
   "perINR": 0.35
  },
  "KHR": {
   "name": "Cambodian Riel",
   "perINR": 42.42
  },
  "LAK": {
   "name": "Lao Kip",
   "perINR": 235
  },
  "MYR": {
   "name": "Malaysian Ringgit",
   "perINR": 0.042
  },
  "PHP": {
   "name": "Philippine Peso",
   "perINR": 0.65
  },
  "EGP": {
   "name": "Egyptian Pound",
   "perINR": 0.532
  },
  "JOD": {
   "name": "Jordanian Dinar",
   "perINR": 0.0074
  },
  "CZK": {
   "name": "Czech Koruna",
   "perINR": 0.218
  },
  "CNY": {
   "name": "Renminbi",
   "perINR": 0.07
  },
  "SGD": {
   "name": "Singapore Dollar",
   "perINR": 0.013
  },
  "JPY": {
   "name": "Japanese Yen",
   "perINR": 1.67
  },
  "HUF": {
   "name": "Hungarian Forint",
   "perINR": 3.3
  },
  "EUR": {
   "name": "Euro",
   "perINR": 0.00901
  },
  "DKK": {
   "name": "Danish Krone",
   "perINR": 0.0674
  },
  "TRY": {
   "name": "Turkish Lira",
   "perINR": 0.505
  },
  "GEL": {
   "name": "Georgian Lari",
   "perINR": 0.028
  },
  "ZAR": {
   "name": "South African Rand",
   "perINR": 0.169
  },
  "COP": {
   "name": "Colombian Peso",
   "perINR": 33.39
  },
  "PEN": {
   "name": "Peruvian Sol",
   "perINR": 0.035
  },
  "USD": {
   "name": "US Dollar",
   "perINR": 0.010477787091366304
  },
  "BOB": {
   "name": "Boliviano",
   "perINR": 0.072
  },
  "GTQ": {
   "name": "Guatemalan Quetzal",
   "perINR": 0.081
  },
  "NIO": {
   "name": "Nicaraguan Cordoba",
   "perINR": 0.383
  },
  "MXN": {
   "name": "Mexican Peso",
   "perINR": 0.178
  },
  "KGS": {
   "name": "Kyrgyzstani Som",
   "perINR": 0.916
  },
  "UZS": {
   "name": "Uzbekistani Som",
   "perINR": 124.5
  },
  "TJS": {
   "name": "Tajikistani Somoni",
   "perINR": 0.114
  },
  "KZT": {
   "name": "Kazakhstani Tenge",
   "perINR": 4.86
  },
  "AMD": {
   "name": "Armenian Dram",
   "perINR": 4.03
  },
  "GBP": {
   "name": "Pound Sterling",
   "perINR": 0.00771604938271605
  },
  "AED": {
   "name": "UAE Dirham",
   "perINR": 0.0385
  },
  "GHS": {
   "name": "Ghanaian Cedi",
   "perINR": 0.12
  }
 },
 "activeTrip": "trip_world",
 "trips": [
  {
   "id": "trip_world",
   "name": "World Tour",
   "kind": "world",
   "start": "",
   "end": "",
   "note": "Imported from World_tour_budget.xlsx",
   "defaultDays": 10,
   "categories": [
    {
     "id": "flights",
     "label": "Flights"
    },
    {
     "id": "transport",
     "label": "Transportation"
    },
    {
     "id": "lodging",
     "label": "Lodging"
    },
    {
     "id": "food",
     "label": "Food"
    },
    {
     "id": "activities",
     "label": "Activities"
    },
    {
     "id": "carRental",
     "label": "Car Rental"
    },
    {
     "id": "visa",
     "label": "Visa"
    },
    {
     "id": "misc",
     "label": "Misc"
    }
   ],
   "places": [
    {
     "id": "p_np",
     "name": "Nepal",
     "country": "Nepal",
     "city": "Kathmandu",
     "iso2": "NP",
     "iata": "KTM",
     "currency": "NPR",
     "lat": 27.72,
     "lon": 85.32,
     "days": 10,
     "order": 1,
     "notes": "",
     "budget": {
      "flights": 14000,
      "transport": 8000,
      "lodging": 18500,
      "food": 9000,
      "activities": 14000,
      "carRental": 0,
      "visa": 3000,
      "misc": 3000
     },
     "images": [
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Kathmandu-Durbar_Square-06-Mahavishnu-Kuh-Vishnu-Pratapamalla-Jagannath-2007-gje.jpg/1024px-Kathmandu-Durbar_Square-06-Mahavishnu-Kuh-Vishnu-Pratapamalla-Jagannath-2007-gje.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
       "credit": "Kathmandu",
       "source": "https://en.wikipedia.org/wiki/Kathmandu"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Legal_hashish_shop_in_Kathmandu%2C_Nepal_in_1973.jpg/960px-Legal_hashish_shop_in_Kathmandu%2C_Nepal_in_1973.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Roger McLassus. · CC BY-SA 3.0",
       "source": "https://commons.wikimedia.org/wiki/File:Legal_hashish_shop_in_Kathmandu,_Nepal_in_1973.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Three_saddhus_at_Kathmandu_Durbar_Square.jpg/960px-Three_saddhus_at_Kathmandu_Durbar_Square.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Markus Koljonen (Dilaudid) · CC BY-SA 3.0",
       "source": "https://commons.wikimedia.org/wiki/File:Three_saddhus_at_Kathmandu_Durbar_Square.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Kathmandu_Avion_01.JPG/960px-Kathmandu_Avion_01.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Royonx · CC0",
       "source": "https://commons.wikimedia.org/wiki/File:Kathmandu_Avion_01.JPG"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Kathmandu_Valley_1.jpg/960px-Kathmandu_Valley_1.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Gaurav Dhwaj Khadka · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Kathmandu_Valley_1.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Kathmandu_3.jpg/960px-Kathmandu_3.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Gaurav Dhwaj Khadka · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Kathmandu_3.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Kathmandu_Valley_3.jpg/960px-Kathmandu_Valley_3.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Gaurav Dhwaj Khadka · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Kathmandu_Valley_3.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Kathmandu_Valley_4.jpg/960px-Kathmandu_Valley_4.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Gaurav Dhwaj Khadka · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Kathmandu_Valley_4.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Saddhu_at_Durbar_Square%2C_Kathmandu_%28edited%29.jpg/960px-Saddhu_at_Durbar_Square%2C_Kathmandu_%28edited%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Original:  Anton Gutmann\nDerivative work:  Aristeas · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Saddhu_at_Durbar_Square,_Kathmandu_(edited).jpg"
      }
     ],
     "driveLinks": [],
     "itinerary": [],
     "noPhoto": false
    },
    {
     "id": "p_bt",
     "name": "Bhutan",
     "country": "Bhutan",
     "city": "Thimphu",
     "iso2": "BT",
     "iata": "PBH",
     "currency": "BTN",
     "lat": 27.47,
     "lon": 89.64,
     "days": 10,
     "order": 2,
     "notes": "",
     "budget": {
      "flights": 28000,
      "transport": 8000,
      "lodging": 25000,
      "food": 12000,
      "activities": 2000,
      "carRental": 8000,
      "visa": 12000,
      "misc": 0
     },
     "images": [
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Tashich%C3%B6dzong_Thimphu-2008-01-23.jpg/1024px-Tashich%C3%B6dzong_Thimphu-2008-01-23.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
       "credit": "Thimphu",
       "source": "https://en.wikipedia.org/wiki/Thimphu"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Thimphu_from_the_south_080907.JPG/960px-Thimphu_from_the_south_080907.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Christopher Fynn · CC BY-SA 3.0",
       "source": "https://commons.wikimedia.org/wiki/File:Thimphu_from_the_south_080907.JPG"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Hotel_Druk%2C_Thimphu_01.jpg/960px-Hotel_Druk%2C_Thimphu_01.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Bernard Gagnon · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Hotel_Druk,_Thimphu_01.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/National_Memorial_Chorten%2C_Thimphu_05.jpg/960px-National_Memorial_Chorten%2C_Thimphu_05.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Bernard Gagnon · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:National_Memorial_Chorten,_Thimphu_05.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/View_of_central_Thimphu_2019-07-21.jpg/960px-View_of_central_Thimphu_2019-07-21.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Christopher J. Fynn · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:View_of_central_Thimphu_2019-07-21.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/View_of_Thimphu_2019-07-21.jpg/960px-View_of_Thimphu_2019-07-21.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Christopher J. Fynn · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:View_of_Thimphu_2019-07-21.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/A_view_of_Thimphu_looking_N_from_Talakha_Gonpa_-1.jpg/960px-A_view_of_Thimphu_looking_N_from_Talakha_Gonpa_-1.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Crstopher J. Fynn · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:A_view_of_Thimphu_looking_N_from_Talakha_Gonpa_-1.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/A_view_of_Thimphu_from_Talakha_Gonpa.jpg/960px-A_view_of_Thimphu_from_Talakha_Gonpa.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Christopher J. Fynn · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:A_view_of_Thimphu_from_Talakha_Gonpa.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/The_main_street%2C_Norzin_Lam%2C_Thimphu.jpg/960px-The_main_street%2C_Norzin_Lam%2C_Thimphu.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Doctor 17 · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:The_main_street,_Norzin_Lam,_Thimphu.jpg"
      }
     ],
     "driveLinks": [],
     "itinerary": [],
     "noPhoto": false
    },
    {
     "id": "p_vn",
     "name": "Vietnam",
     "country": "Vietnam",
     "city": "Hanoi",
     "iso2": "VN",
     "iata": "HAN",
     "currency": "VND",
     "lat": 21.03,
     "lon": 105.85,
     "days": 10,
     "order": 3,
     "notes": "",
     "budget": {
      "flights": 32000,
      "transport": 14500,
      "lodging": 11500,
      "food": 8000,
      "activities": 10000,
      "carRental": 3000,
      "visa": 2200,
      "misc": 4000
     },
     "images": [
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Hanoi_skyline_with_Ba_Vi_Mountain.jpg/1024px-Hanoi_skyline_with_Ba_Vi_Mountain.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
       "credit": "Hanoi",
       "source": "https://en.wikipedia.org/wiki/Hanoi"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Hanoi_Montage.jpg/960px-Hanoi_Montage.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Cheong.\nOriginal uploader was Cheong Kok Chun at en.wikipedia.\n\nLater  · CC BY-SA 2.0",
       "source": "https://commons.wikimedia.org/wiki/File:Hanoi_Montage.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Hanoi_Vietnam_The-omnipresent-plastic-chairs-01.jpg/960px-Hanoi_Vietnam_The-omnipresent-plastic-chairs-01.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "CEphoto, Uwe Aranas · CC BY-SA 3.0",
       "source": "https://commons.wikimedia.org/wiki/File:Hanoi_Vietnam_The-omnipresent-plastic-chairs-01.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Hanoi_Vietnam_Thang-Long-Water-Puppet-Theatre-01.jpg/960px-Hanoi_Vietnam_Thang-Long-Water-Puppet-Theatre-01.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "CEphoto, Uwe Aranas · CC BY-SA 3.0",
       "source": "https://commons.wikimedia.org/wiki/File:Hanoi_Vietnam_Thang-Long-Water-Puppet-Theatre-01.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Sunset_over_Hanoi_After_the_Rain.jpg/960px-Sunset_over_Hanoi_After_the_Rain.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Christopher Crouzet · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Sunset_over_Hanoi_After_the_Rain.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Hanoi_Vietnam.jpg/960px-Hanoi_Vietnam.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "MoriCher · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Hanoi_Vietnam.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Jardin_botanique%2C_H%C3%A0_N%E1%BB%99i%2C_1920s.jpg/960px-Jardin_botanique%2C_H%C3%A0_N%E1%BB%99i%2C_1920s.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Unknown · Public domain",
       "source": "https://commons.wikimedia.org/wiki/File:Jardin_botanique,_H%C3%A0_N%E1%BB%99i,_1920s.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Incense_in_Vietnam.jpg/960px-Incense_in_Vietnam.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Trantuanviet · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Incense_in_Vietnam.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/February_2008_Hanoi_14.jpg/960px-February_2008_Hanoi_14.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Syced · CC0",
       "source": "https://commons.wikimedia.org/wiki/File:February_2008_Hanoi_14.jpg"
      }
     ],
     "driveLinks": [],
     "itinerary": [],
     "noPhoto": false
    },
    {
     "id": "p_lk",
     "name": "Sri Lanka",
     "country": "Sri Lanka",
     "city": "Colombo",
     "iso2": "LK",
     "iata": "CMB",
     "currency": "LKR",
     "lat": 6.93,
     "lon": 79.86,
     "days": 10,
     "order": 4,
     "notes": "",
     "budget": {
      "flights": 14000,
      "transport": 5000,
      "lodging": 14000,
      "food": 9000,
      "activities": 0,
      "carRental": 7000,
      "visa": 2000,
      "misc": 3000
     },
     "images": [
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Colombo_city_skyline_at_night.png/1024px-Colombo_city_skyline_at_night.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
       "credit": "Colombo",
       "source": "https://en.wikipedia.org/wiki/Colombo"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/SL_Colombo_asv2020-01_img10_National_Museum.jpg/960px-SL_Colombo_asv2020-01_img10_National_Museum.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "A.Savin · FAL",
       "source": "https://commons.wikimedia.org/wiki/File:SL_Colombo_asv2020-01_img10_National_Museum.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Beautiful_Sunrise_over_the_Colombo_Skyline_as_seen_from_the_ocean.jpg/960px-Beautiful_Sunrise_over_the_Colombo_Skyline_as_seen_from_the_ocean.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Praveenshashika · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Beautiful_Sunrise_over_the_Colombo_Skyline_as_seen_from_the_ocean.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/ColomboFortBattenburg.jpg/960px-ColomboFortBattenburg.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Jan Kranendonk (https://www.jankranendonk.nl) · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:ColomboFortBattenburg.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/ColomboFortBattenburg2.jpg/960px-ColomboFortBattenburg2.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Jan Kranendonk (https://www.jankranendonk.nl) · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:ColomboFortBattenburg2.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Colombo_Harbour_1992.jpg/960px-Colombo_Harbour_1992.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Jan Kranendonk (https://www.jankranendonk.nl) · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Colombo_Harbour_1992.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Colombo_Skyline_Jan_2022.jpg/960px-Colombo_Skyline_Jan_2022.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "XKillSwitchXxx · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Colombo_Skyline_Jan_2022.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Colombo_Lisboa_March_2026-2.jpg/960px-Colombo_Lisboa_March_2026-2.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Alvesgaspar · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Colombo_Lisboa_March_2026-2.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Night_Skyline_Reflection_in_Colombo%2C_Sri_Lanka.jpg/960px-Night_Skyline_Reflection_in_Colombo%2C_Sri_Lanka.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Thilina Alagiyawanna · CC BY 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Night_Skyline_Reflection_in_Colombo,_Sri_Lanka.jpg"
      }
     ],
     "driveLinks": [],
     "itinerary": [],
     "noPhoto": false
    },
    {
     "id": "p_id",
     "name": "Indonesia",
     "country": "Indonesia",
     "city": "Bali",
     "iso2": "ID",
     "iata": "DPS",
     "currency": "IDR",
     "lat": -8.65,
     "lon": 115.22,
     "days": 10,
     "order": 5,
     "notes": "",
     "budget": {
      "flights": 40000,
      "transport": 5000,
      "lodging": 14500,
      "food": 9000,
      "activities": 10000,
      "carRental": 5000,
      "visa": 4000,
      "misc": 3000
     },
     "images": [
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Bali_in_Indonesia_%28special_marker%29.svg/1024px-Bali_in_Indonesia_%28special_marker%29.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
       "credit": "Bali",
       "source": "https://en.wikipedia.org/wiki/Bali"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Sunset%2C_Kuta%2C_Bali%2C_Indonesia%2C_20220825_1755_0879.jpg/960px-Sunset%2C_Kuta%2C_Bali%2C_Indonesia%2C_20220825_1755_0879.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Jakub Hałun · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Sunset,_Kuta,_Bali,_Indonesia,_20220825_1755_0879.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Mount_Lempuyang%2C_Volcanic_landform%2C_Bali%2C_Indonesia.jpg/960px-Mount_Lempuyang%2C_Volcanic_landform%2C_Bali%2C_Indonesia.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Vyacheslav Argenberg · CC BY 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Mount_Lempuyang,_Volcanic_landform,_Bali,_Indonesia.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Bali%2C_Extinct_caldera_slopes%2C_Forest%2C_East_Bali%2C_Indonesia.jpg/960px-Bali%2C_Extinct_caldera_slopes%2C_Forest%2C_East_Bali%2C_Indonesia.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Vyacheslav Argenberg · CC BY 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Bali,_Extinct_caldera_slopes,_Forest,_East_Bali,_Indonesia.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Bali%2C_Rice_fields_and_forest%2C_East_Bali%2C_Indonesia.jpg/960px-Bali%2C_Rice_fields_and_forest%2C_East_Bali%2C_Indonesia.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Vyacheslav Argenberg · CC BY 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Bali,_Rice_fields_and_forest,_East_Bali,_Indonesia.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Bali%2C_Rice_fields%2C_Rice_terraces_in_East_Bali%2C_Indonesia.jpg/960px-Bali%2C_Rice_fields%2C_Rice_terraces_in_East_Bali%2C_Indonesia.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Vyacheslav Argenberg · CC BY 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Bali,_Rice_fields,_Rice_terraces_in_East_Bali,_Indonesia.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Bali%2C_Forest%2C_Trees%2C_East_Bali%2C_Indonesia.jpg/960px-Bali%2C_Forest%2C_Trees%2C_East_Bali%2C_Indonesia.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Vyacheslav Argenberg · CC BY 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Bali,_Forest,_Trees,_East_Bali,_Indonesia.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Bali%2C_Rice_fields_in_the_forest%2C_East_Bali%2C_Indonesia.jpg/960px-Bali%2C_Rice_fields_in_the_forest%2C_East_Bali%2C_Indonesia.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Vyacheslav Argenberg · CC BY 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Bali,_Rice_fields_in_the_forest,_East_Bali,_Indonesia.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Landscape%2C_Tirta_Gangga%2C_Bali.jpg/960px-Landscape%2C_Tirta_Gangga%2C_Bali.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Vyacheslav Argenberg · CC BY 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Landscape,_Tirta_Gangga,_Bali.jpg"
      }
     ],
     "driveLinks": [],
     "itinerary": [],
     "noPhoto": false
    },
    {
     "id": "p_th",
     "name": "Thailand",
     "country": "Thailand",
     "city": "Bangkok",
     "iso2": "TH",
     "iata": "BKK",
     "currency": "THB",
     "lat": 13.76,
     "lon": 100.5,
     "days": 10,
     "order": 6,
     "notes": "",
     "budget": {
      "flights": 28000,
      "transport": 5000,
      "lodging": 10000,
      "food": 8000,
      "activities": 0,
      "carRental": 4000,
      "visa": 4000,
      "misc": 3000
     },
     "images": [
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/4Y1A1159_Bangkok_%2833536795515%29.jpg/1024px-4Y1A1159_Bangkok_%2833536795515%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
       "credit": "Bangkok",
       "source": "https://en.wikipedia.org/wiki/Bangkok"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Bangkok_skytrain_sunset.jpg/960px-Bangkok_skytrain_sunset.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "User:Diliff · CC BY-SA 3.0",
       "source": "https://commons.wikimedia.org/wiki/File:Bangkok_skytrain_sunset.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Templo_Wat_Arun%2C_Bangkok%2C_Tailandia%2C_2013-08-22%2C_DD_30.jpg/960px-Templo_Wat_Arun%2C_Bangkok%2C_Tailandia%2C_2013-08-22%2C_DD_30.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Diego Delso · CC BY-SA 3.0",
       "source": "https://commons.wikimedia.org/wiki/File:Templo_Wat_Arun,_Bangkok,_Tailandia,_2013-08-22,_DD_30.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Templo_Wat_Arun%2C_Bangkok%2C_Tailandia%2C_2013-08-22%2C_DD_37.jpg/960px-Templo_Wat_Arun%2C_Bangkok%2C_Tailandia%2C_2013-08-22%2C_DD_37.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Diego Delso · CC BY-SA 3.0",
       "source": "https://commons.wikimedia.org/wiki/File:Templo_Wat_Arun,_Bangkok,_Tailandia,_2013-08-22,_DD_37.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Gran_Palacio%2C_Bangkok%2C_Tailandia%2C_2013-08-22%2C_DD_20.jpg/960px-Gran_Palacio%2C_Bangkok%2C_Tailandia%2C_2013-08-22%2C_DD_20.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Diego Delso · CC BY-SA 3.0",
       "source": "https://commons.wikimedia.org/wiki/File:Gran_Palacio,_Bangkok,_Tailandia,_2013-08-22,_DD_20.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Statue_of_Yaksha_supporting_one_of_the_Two_Golden_Chedi_of_Wat_Phra_Kaew%2C_Bangkok%2C_Thailand.jpg/960px-Statue_of_Yaksha_supporting_one_of_the_Two_Golden_Chedi_of_Wat_Phra_Kaew%2C_Bangkok%2C_Thailand.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Basile Morin · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Statue_of_Yaksha_supporting_one_of_the_Two_Golden_Chedi_of_Wat_Phra_Kaew,_Bangkok,_Thailand.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%A8%E0%B8%A3%E0%B8%B5%E0%B8%A3%E0%B8%B1%E0%B8%95%E0%B8%99%E0%B8%A8%E0%B8%B2%E0%B8%AA%E0%B8%94%E0%B8%B2%E0%B8%A3%E0%B8%B2%E0%B8%A1_%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B9%81%E0%B8%81%E0%B9%89%E0%B8%A7_%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3_-_Wat_Phra_Kaew%2C_Temple_of_Emerald_Buddha%2C_Bangkok%2C_Thailand.jpg/960px-thumbnail.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Basile Morin · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%A8%E0%B8%A3%E0%B8%B5%E0%B8%A3%E0%B8%B1%E0%B8%95%E0%B8%99%E0%B8%A8%E0%B8%B2%E0%B8%AA%E0%B8%94%E0%B8%B2%E0%B8%A3%E0%B8%B2%E0%B8%A1_%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B9%81%E0%B8%81%E0%B9%89%E0%B8%A7_%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3_-_Wat_Phra_Kaew,_Temple_of_Emerald_Buddha,_Bangkok,_Thailand.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Bangkok_-_Rama_VIII_Bridge_at_sunrise_Jan_2024.jpg/960px-Bangkok_-_Rama_VIII_Bridge_at_sunrise_Jan_2024.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Dominic Nelson · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Bangkok_-_Rama_VIII_Bridge_at_sunrise_Jan_2024.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Wat_Pariwat_Ratchasongkram_ubosot_Bangkok_Thailand_by_Don_Ramey_Logan.jpg/960px-Wat_Pariwat_Ratchasongkram_ubosot_Bangkok_Thailand_by_Don_Ramey_Logan.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Don Ramey Logan · CC BY 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Wat_Pariwat_Ratchasongkram_ubosot_Bangkok_Thailand_by_Don_Ramey_Logan.jpg"
      }
     ],
     "driveLinks": [],
     "itinerary": [],
     "noPhoto": false
    },
    {
     "id": "p_kh",
     "name": "Cambodia",
     "country": "Cambodia",
     "city": "Siem Reap",
     "iso2": "KH",
     "iata": "REP",
     "currency": "KHR",
     "lat": 13.36,
     "lon": 103.86,
     "days": 10,
     "order": 7,
     "notes": "",
     "budget": {
      "flights": 35000,
      "transport": 4000,
      "lodging": 14000,
      "food": 7000,
      "activities": 5300,
      "carRental": 4500,
      "visa": 2600,
      "misc": 3000
     },
     "images": [
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Front_porch_of_Wat_Damnak.jpg/1024px-Front_porch_of_Wat_Damnak.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
       "credit": "Siem Reap",
       "source": "https://en.wikipedia.org/wiki/Siem_Reap"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Siem_Reap_.-_Danse_Khmer_%28Cambodge%29.jpg/960px-Siem_Reap_.-_Danse_Khmer_%28Cambodge%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Pierre André Leclercq · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Siem_Reap_.-_Danse_Khmer_(Cambodge).jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Tonle_Sap_Siem_Reap_Cambodia_Girl-begging-for-money-with-snake-01.jpg/960px-Tonle_Sap_Siem_Reap_Cambodia_Girl-begging-for-money-with-snake-01.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "CEphoto, Uwe Aranas · CC BY-SA 3.0",
       "source": "https://commons.wikimedia.org/wiki/File:Tonle_Sap_Siem_Reap_Cambodia_Girl-begging-for-money-with-snake-01.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/20171129_Wat_Preah_Prom_Rath_Siem_Reap_6207_DxO.jpg/960px-20171129_Wat_Preah_Prom_Rath_Siem_Reap_6207_DxO.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Jakub Hałun · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:20171129_Wat_Preah_Prom_Rath_Siem_Reap_6207_DxO.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/20171129_Wat_Preah_Prom_Rath_Siem_Reap_6216_DxO.jpg/960px-20171129_Wat_Preah_Prom_Rath_Siem_Reap_6216_DxO.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Jakub Hałun · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:20171129_Wat_Preah_Prom_Rath_Siem_Reap_6216_DxO.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/a/a6/Explorez_les_falaises_du_Mont_Kulen_with_Villa_kally_Siem_Reap_%2813%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
       "credit": "Zinero · CC0",
       "source": "https://commons.wikimedia.org/wiki/File:Explorez_les_falaises_du_Mont_Kulen_with_Villa_kally_Siem_Reap_(13).jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Asian_golden_weaver_%28Ploceus_hypoxanthus_chryseus%29_female_at_nest_Siem_Reap.jpg/960px-Asian_golden_weaver_%28Ploceus_hypoxanthus_chryseus%29_female_at_nest_Siem_Reap.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Charles J. Sharp · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Asian_golden_weaver_(Ploceus_hypoxanthus_chryseus)_female_at_nest_Siem_Reap.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Golden_birdwing_%28Troides_aeacus_aeacus%29_female_Siem_Reap.jpg/960px-Golden_birdwing_%28Troides_aeacus_aeacus%29_female_Siem_Reap.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Charles J. Sharp · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Golden_birdwing_(Troides_aeacus_aeacus)_female_Siem_Reap.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Common_imperial_%28Cheritra_freja_evansi%29_Siem_Reap.jpg/960px-Common_imperial_%28Cheritra_freja_evansi%29_Siem_Reap.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Charles J. Sharp · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Common_imperial_(Cheritra_freja_evansi)_Siem_Reap.jpg"
      }
     ],
     "driveLinks": [],
     "itinerary": [],
     "noPhoto": false
    },
    {
     "id": "p_la",
     "name": "Laos",
     "country": "Laos",
     "city": "Luang Prabang",
     "iso2": "LA",
     "iata": "LPQ",
     "currency": "LAK",
     "lat": 19.89,
     "lon": 102.14,
     "days": 10,
     "order": 8,
     "notes": "",
     "budget": {
      "flights": 38000,
      "transport": 14000,
      "lodging": 13000,
      "food": 6000,
      "activities": 0,
      "carRental": 4000,
      "visa": 3000,
      "misc": 3000
     },
     "images": [
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Phou_si_Luang_Prabang_Laos_%E3%83%97%E3%83%BC%E3%82%B7%E3%83%BC%E3%81%AE%E4%B8%98_%E3%83%A9%E3%82%AA%E3%82%B9%E3%83%BB%E3%83%AB%E3%82%A2%E3%83%B3%E3%83%97%E3%83%A9%E3%83%90%E3%83%BC%E3%83%B3_DSCF6777.jpg/1024px-Phou_si_Luang_Prabang_Laos_%E3%83%97%E3%83%BC%E3%82%B7%E3%83%BC%E3%81%AE%E4%B8%98_%E3%83%A9%E3%82%AA%E3%82%B9%E3%83%BB%E3%83%AB%E3%82%A2%E3%83%B3%E3%83%97%E3%83%A9%E3%83%90%E3%83%BC%E3%83%B3_DSCF6777.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
       "credit": "Luang Prabang",
       "source": "https://en.wikipedia.org/wiki/Luang_Prabang"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Landscape_with_rainbow_and_the_Old_Bridge_over_the_Nam_Khan_river_in_Luang_Prabang_Laos.jpg/960px-Landscape_with_rainbow_and_the_Old_Bridge_over_the_Nam_Khan_river_in_Luang_Prabang_Laos.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Basile Morin · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Landscape_with_rainbow_and_the_Old_Bridge_over_the_Nam_Khan_river_in_Luang_Prabang_Laos.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Canopy_bed_of_Amantaka_Suite_in_Amantaka_luxury_Resort_%26_Hotel_in_Luang_Prabang_Laos.jpg/960px-Canopy_bed_of_Amantaka_Suite_in_Amantaka_luxury_Resort_%26_Hotel_in_Luang_Prabang_Laos.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Basile Morin · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Canopy_bed_of_Amantaka_Suite_in_Amantaka_luxury_Resort_%26_Hotel_in_Luang_Prabang_Laos.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Reception_lounge_at_Amantaka_luxury_Resort_%26_Hotel_at_blue_hour_in_Luang_Prabang_Laos.jpg/960px-Reception_lounge_at_Amantaka_luxury_Resort_%26_Hotel_at_blue_hour_in_Luang_Prabang_Laos.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Basile Morin · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Reception_lounge_at_Amantaka_luxury_Resort_%26_Hotel_at_blue_hour_in_Luang_Prabang_Laos.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Carved_wooden_bench_furniture_and_crafts_at_Heuan_Chan_heritage_house_in_Luang_Prabang_Laos.jpg/960px-Carved_wooden_bench_furniture_and_crafts_at_Heuan_Chan_heritage_house_in_Luang_Prabang_Laos.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Basile Morin · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Carved_wooden_bench_furniture_and_crafts_at_Heuan_Chan_heritage_house_in_Luang_Prabang_Laos.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Pirogue_running_from_the_Nam_Khan_river_to_the_Mekong_a_sunny_day_in_Luang_Prabang_Laos.jpg/960px-Pirogue_running_from_the_Nam_Khan_river_to_the_Mekong_a_sunny_day_in_Luang_Prabang_Laos.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Basile Morin · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Pirogue_running_from_the_Nam_Khan_river_to_the_Mekong_a_sunny_day_in_Luang_Prabang_Laos.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Boats_on_the_Mekong_with_dark_clouds_and_blue_sky_in_the_late_afternoon_in_Luang_Prabang_Laos.jpg/960px-Boats_on_the_Mekong_with_dark_clouds_and_blue_sky_in_the_late_afternoon_in_Luang_Prabang_Laos.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Basile Morin · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Boats_on_the_Mekong_with_dark_clouds_and_blue_sky_in_the_late_afternoon_in_Luang_Prabang_Laos.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/View_of_Mount_Phou_Si_and_Mekong_bank_at_sunset_seen_from_Wat_Chomphet_in_Luang_Prabang_Laos.jpg/960px-View_of_Mount_Phou_Si_and_Mekong_bank_at_sunset_seen_from_Wat_Chomphet_in_Luang_Prabang_Laos.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Basile Morin · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:View_of_Mount_Phou_Si_and_Mekong_bank_at_sunset_seen_from_Wat_Chomphet_in_Luang_Prabang_Laos.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Pirogue_and_boat_on_the_Mekong_with_colorful_sky_at_sunset_in_Luang_Prabang_Laos.jpg/960px-Pirogue_and_boat_on_the_Mekong_with_colorful_sky_at_sunset_in_Luang_Prabang_Laos.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Basile Morin · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Pirogue_and_boat_on_the_Mekong_with_colorful_sky_at_sunset_in_Luang_Prabang_Laos.jpg"
      }
     ],
     "driveLinks": [],
     "itinerary": [],
     "noPhoto": false
    },
    {
     "id": "p_my",
     "name": "Malaysia",
     "country": "Malaysia",
     "city": "Kuala Lumpur",
     "iso2": "MY",
     "iata": "KUL",
     "currency": "MYR",
     "lat": 3.14,
     "lon": 101.69,
     "days": 10,
     "order": 9,
     "notes": "",
     "budget": {
      "flights": 24000,
      "transport": 4500,
      "lodging": 18000,
      "food": 9000,
      "activities": 0,
      "carRental": 5000,
      "visa": 0,
      "misc": 3000
     },
     "images": [
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Bukit_Bintang_junction_in_2024_2.jpg/1024px-Bukit_Bintang_junction_in_2024_2.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
       "credit": "Kuala Lumpur",
       "source": "https://en.wikipedia.org/wiki/Kuala_Lumpur"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Kuala_Lumpur_Malaysia_Skyline-01.jpg/960px-Kuala_Lumpur_Malaysia_Skyline-01.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "CEphoto, Uwe Aranas · CC BY-SA 3.0",
       "source": "https://commons.wikimedia.org/wiki/File:Kuala_Lumpur_Malaysia_Skyline-01.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Kuala_Lumpur_Malaysia_Federal-Territory-Mosque-03.jpg/960px-Kuala_Lumpur_Malaysia_Federal-Territory-Mosque-03.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "CEphoto, Uwe Aranas · CC BY-SA 3.0",
       "source": "https://commons.wikimedia.org/wiki/File:Kuala_Lumpur_Malaysia_Federal-Territory-Mosque-03.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Kuala_Lumpur_Malaysia_Federal-Territory-Mosque-05.jpg/960px-Kuala_Lumpur_Malaysia_Federal-Territory-Mosque-05.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "CEphoto, Uwe Aranas · CC BY-SA 3.0",
       "source": "https://commons.wikimedia.org/wiki/File:Kuala_Lumpur_Malaysia_Federal-Territory-Mosque-05.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Kuala-Lumpur_Malaysia_Planetarium_Negara-02.jpg/960px-Kuala-Lumpur_Malaysia_Planetarium_Negara-02.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "CEphoto, Uwe Aranas · CC BY-SA 3.0",
       "source": "https://commons.wikimedia.org/wiki/File:Kuala-Lumpur_Malaysia_Planetarium_Negara-02.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Butorides_striata_javanica_%40_Kuala_Lumpur%2C_Malaysia_%281%29.jpg/960px-Butorides_striata_javanica_%40_Kuala_Lumpur%2C_Malaysia_%281%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "GerifalteDelSabana · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Butorides_striata_javanica_@_Kuala_Lumpur,_Malaysia_(1).jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Butorides_striata_javanica_%40_Kuala_Lumpur%2C_Malaysia_%283%29.jpg/960px-Butorides_striata_javanica_%40_Kuala_Lumpur%2C_Malaysia_%283%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "GerifalteDelSabana · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Butorides_striata_javanica_@_Kuala_Lumpur,_Malaysia_(3).jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Corvus_splendens_insolens_%40_Kuala_Lumpur_%282%29_alternate_crop.jpg/960px-Corvus_splendens_insolens_%40_Kuala_Lumpur_%282%29_alternate_crop.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "GerifalteDelSabana · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Corvus_splendens_insolens_@_Kuala_Lumpur_(2)_alternate_crop.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Passer_montanus_malaccensis_%40_Kuala_Lumpur%2C_Malaysia_%281%29.jpg/960px-Passer_montanus_malaccensis_%40_Kuala_Lumpur%2C_Malaysia_%281%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Peter P. Othagoer · CC BY 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Passer_montanus_malaccensis_@_Kuala_Lumpur,_Malaysia_(1).jpg"
      }
     ],
     "driveLinks": [],
     "itinerary": [],
     "noPhoto": false
    },
    {
     "id": "p_ph",
     "name": "Philippines",
     "country": "Philippines",
     "city": "Manila",
     "iso2": "PH",
     "iata": "MNL",
     "currency": "PHP",
     "lat": 14.6,
     "lon": 120.98,
     "days": 10,
     "order": 10,
     "notes": "",
     "budget": {
      "flights": 42000,
      "transport": 15000,
      "lodging": 20000,
      "food": 9000,
      "activities": 5000,
      "carRental": 5000,
      "visa": 0,
      "misc": 3000
     },
     "images": [
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Cityscape_of_Manila%2C_2025_%2801%29.jpg/1024px-Cityscape_of_Manila%2C_2025_%2801%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
       "credit": "Manila",
       "source": "https://en.wikipedia.org/wiki/Manila"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/5/59/Daggett_County_Courthouse%2C_Manila%2C_Utah.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
       "credit": "Ken Lund · CC BY-SA 2.0",
       "source": "https://commons.wikimedia.org/wiki/File:Daggett_County_Courthouse,_Manila,_Utah.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ph_fil_manila_santa_ana.png/960px-Ph_fil_manila_santa_ana.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Roel Balingit · CC BY-SA 3.0",
       "source": "https://commons.wikimedia.org/wiki/File:Ph_fil_manila_santa_ana.png"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Manila%2C_Intramuros%2C_Philippines.jpg/960px-Manila%2C_Intramuros%2C_Philippines.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Vyacheslav Argenberg · CC BY 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Manila,_Intramuros,_Philippines.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Manila%2C_Rizal_Park%2C_Philippines.jpg/960px-Manila%2C_Rizal_Park%2C_Philippines.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Vyacheslav Argenberg · CC BY 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Manila,_Rizal_Park,_Philippines.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Manila%2C_Rizal_Park_2%2C_Philippines.jpg/960px-Manila%2C_Rizal_Park_2%2C_Philippines.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Vyacheslav Argenberg · CC BY 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Manila,_Rizal_Park_2,_Philippines.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Manila%2C_Manila_Ocean_Park%2C_Oceanarium%2C_Hotel_H2O%2C_Philippines.jpg/960px-Manila%2C_Manila_Ocean_Park%2C_Oceanarium%2C_Hotel_H2O%2C_Philippines.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Vyacheslav Argenberg · CC BY 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Manila,_Manila_Ocean_Park,_Oceanarium,_Hotel_H2O,_Philippines.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Manila%2C_Manila_Bay%2C_Philippines.jpg/960px-Manila%2C_Manila_Bay%2C_Philippines.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Vyacheslav Argenberg · CC BY 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Manila,_Manila_Bay,_Philippines.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Map_of_the_City_of_Manila_and_Vicinity_%281901%29.webp/960px-Map_of_the_City_of_Manila_and_Vicinity_%281901%29.webp.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "George F. Stewart · Public domain",
       "source": "https://commons.wikimedia.org/wiki/File:Map_of_the_City_of_Manila_and_Vicinity_(1901).webp"
      }
     ],
     "driveLinks": [],
     "itinerary": [],
     "noPhoto": false
    },
    {
     "id": "p_eg",
     "name": "Egypt",
     "country": "Egypt",
     "city": "Cairo",
     "iso2": "EG",
     "iata": "CAI",
     "currency": "EGP",
     "lat": 30.04,
     "lon": 31.24,
     "days": 10,
     "order": 11,
     "notes": "",
     "budget": {
      "flights": 48000,
      "transport": 9000,
      "lodging": 14000,
      "food": 8500,
      "activities": 2000,
      "carRental": 5000,
      "visa": 2200,
      "misc": 3000
     },
     "images": [
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Cairo_Opera_House%2C_Al_Hurriyah_Park_and_the_Nile_river_%2814797782354%29.jpg/1024px-Cairo_Opera_House%2C_Al_Hurriyah_Park_and_the_Nile_river_%2814797782354%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
       "credit": "Cairo",
       "source": "https://en.wikipedia.org/wiki/Cairo"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/8/8e/Cairo%2C_Old_Cairo%2C_Hanging_Church%2C_Egypt%2C_Oct_2004_edit.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
       "credit": "Przemyslaw \"Blueshade\" Idzkiewicz\nderivative work: MrPanyGoff · CC BY-SA 2.5",
       "source": "https://commons.wikimedia.org/wiki/File:Cairo,_Old_Cairo,_Hanging_Church,_Egypt,_Oct_2004_edit.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cairo_Metro_Station_in_Old_Cairo%2C_Egypt.jpg/960px-Cairo_Metro_Station_in_Old_Cairo%2C_Egypt.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Diego Delso · CC BY-SA 3.0",
       "source": "https://commons.wikimedia.org/wiki/File:Cairo_Metro_Station_in_Old_Cairo,_Egypt.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Shopping_in_the_spotlight_%28Cairo%29.jpg/960px-Shopping_in_the_spotlight_%28Cairo%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Frank Schulenburg · CC BY-SA 3.0",
       "source": "https://commons.wikimedia.org/wiki/File:Shopping_in_the_spotlight_(Cairo).jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Egypt%2C_Cairo%2C_Panorama_of_Medieval_Islamic_Cairo.jpg/960px-Egypt%2C_Cairo%2C_Panorama_of_Medieval_Islamic_Cairo.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Vyacheslav Argenberg · CC BY 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Egypt,_Cairo,_Panorama_of_Medieval_Islamic_Cairo.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Egypt%2C_Cairo%2C_Islamic_Cairo%2C_the_City_of_a_Thousand_Minarets.jpg/960px-Egypt%2C_Cairo%2C_Islamic_Cairo%2C_the_City_of_a_Thousand_Minarets.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Vyacheslav Argenberg · CC BY 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Egypt,_Cairo,_Islamic_Cairo,_the_City_of_a_Thousand_Minarets.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Woman_reading_the_Quran_during_Ramadan_in_Cairo%2C_Egypt.jpg/960px-Woman_reading_the_Quran_during_Ramadan_in_Cairo%2C_Egypt.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "مصطفى الشربجى · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Woman_reading_the_Quran_during_Ramadan_in_Cairo,_Egypt.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Tahrir_Square%2C_Cairo%2C_Egypt_1.jpg/960px-Tahrir_Square%2C_Cairo%2C_Egypt_1.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Ghaydaa Sayed · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Tahrir_Square,_Cairo,_Egypt_1.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/CairoAbbasiyaMarkEntrance-Cropped.jpg/960px-CairoAbbasiyaMarkEntrance-Cropped.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Roland Unger · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:CairoAbbasiyaMarkEntrance-Cropped.jpg"
      }
     ],
     "driveLinks": [],
     "itinerary": [],
     "noPhoto": false
    },
    {
     "id": "p_jo",
     "name": "Jordan",
     "country": "Jordan",
     "city": "Amman",
     "iso2": "JO",
     "iata": "AMM",
     "currency": "JOD",
     "lat": 31.95,
     "lon": 35.93,
     "days": 10,
     "order": 12,
     "notes": "",
     "budget": {
      "flights": 45000,
      "transport": 12000,
      "lodging": 25000,
      "food": 10000,
      "activities": 0,
      "carRental": 7000,
      "visa": 5000,
      "misc": 3000
     },
     "images": [
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/New_Abdali_2024.png/1024px-New_Abdali_2024.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
       "credit": "Amman",
       "source": "https://en.wikipedia.org/wiki/Amman"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Amman_Night_Down_Town.JPG/960px-Amman_Night_Down_Town.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Freedom's Falcon · Public domain",
       "source": "https://commons.wikimedia.org/wiki/File:Amman_Night_Down_Town.JPG"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Amman_BW_2.JPG/960px-Amman_BW_2.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Berthold Werner · CC BY-SA 3.0",
       "source": "https://commons.wikimedia.org/wiki/File:Amman_BW_2.JPG"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Amman_BW_14.JPG/960px-Amman_BW_14.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Berthold Werner · CC BY-SA 3.0",
       "source": "https://commons.wikimedia.org/wiki/File:Amman_BW_14.JPG"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/AMMAN_2.jpg/960px-AMMAN_2.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Freedom's Falcon, Hassan Bushnaq, David Bjorgen, yeowatzup · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:AMMAN_2.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Park_in_Amman%2C_Jordan.JPG/960px-Park_in_Amman%2C_Jordan.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "High Contrast · CC BY 3.0 de",
       "source": "https://commons.wikimedia.org/wiki/File:Park_in_Amman,_Jordan.JPG"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Al_Forousyah%2C_Amman%2C_Jordan_-_panoramio_%282%29.jpg/960px-Al_Forousyah%2C_Amman%2C_Jordan_-_panoramio_%282%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Adeeb Atwan · CC BY 3.0",
       "source": "https://commons.wikimedia.org/wiki/File:Al_Forousyah,_Amman,_Jordan_-_panoramio_(2).jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/5/58/Amman-Jordan-in-1969-352042852508.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
       "credit": "Unknown photographer · Public domain",
       "source": "https://commons.wikimedia.org/wiki/File:Amman-Jordan-in-1969-352042852508.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Photo_from_protest_in_Amman_Jordan_against_water_deal_with_Israeli_occupation.jpg/960px-Photo_from_protest_in_Amman_Jordan_against_water_deal_with_Israeli_occupation.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Raya Sharbain · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Photo_from_protest_in_Amman_Jordan_against_water_deal_with_Israeli_occupation.jpg"
      }
     ],
     "driveLinks": [],
     "itinerary": [],
     "noPhoto": false
    },
    {
     "id": "p_cz",
     "name": "Czech Republic",
     "country": "Czech Republic",
     "city": "Prague",
     "iso2": "CZ",
     "iata": "PRG",
     "currency": "CZK",
     "lat": 50.08,
     "lon": 14.44,
     "days": 10,
     "order": 13,
     "notes": "",
     "budget": {
      "flights": 65000,
      "transport": 7000,
      "lodging": 35000,
      "food": 18000,
      "activities": 0,
      "carRental": 0,
      "visa": 12000,
      "misc": 3000
     },
     "images": [
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Prague_%286365119737%29.jpg/1024px-Prague_%286365119737%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
       "credit": "Prague",
       "source": "https://en.wikipedia.org/wiki/Prague"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/PragueCathedral03.jpg/960px-PragueCathedral03.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "MathKnight   and Zachi Evenor · CC BY 2.5",
       "source": "https://commons.wikimedia.org/wiki/File:PragueCathedral03.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Prague_Panorama_-_Oct_2010.jpg/960px-Prague_Panorama_-_Oct_2010.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Diliff · CC BY-SA 3.0",
       "source": "https://commons.wikimedia.org/wiki/File:Prague_Panorama_-_Oct_2010.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Prague_skyline_at_dawn.jpg/960px-Prague_skyline_at_dawn.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Petar Milošević · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Prague_skyline_at_dawn.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Prague_07-2016_View_from_Old_Town_Hall_Tower_img3.jpg/960px-Prague_07-2016_View_from_Old_Town_Hall_Tower_img3.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "A.Savin · FAL",
       "source": "https://commons.wikimedia.org/wiki/File:Prague_07-2016_View_from_Old_Town_Hall_Tower_img3.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Vltava_river_in_Prague.jpg/960px-Vltava_river_in_Prague.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Dmitry A. Mottl · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Vltava_river_in_Prague.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/20190817_View_of_Prague_Castle_from_Pet%C5%99%C3%ADn_1345_5542.jpg/960px-20190817_View_of_Prague_Castle_from_Pet%C5%99%C3%ADn_1345_5542.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Jakub Hałun · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:20190817_View_of_Prague_Castle_from_Pet%C5%99%C3%ADn_1345_5542.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/20190816_View_of_Prague_from_Old_Castle_Stairs_1646_5385.jpg/960px-20190816_View_of_Prague_from_Old_Castle_Stairs_1646_5385.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Jakub Hałun · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:20190816_View_of_Prague_from_Old_Castle_Stairs_1646_5385.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Guard_at_the_Prague_castle%2C_Prague_-_7620_%28cropped%29.jpg/960px-Guard_at_the_Prague_castle%2C_Prague_-_7620_%28cropped%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Jorge Royan · CC BY-SA 3.0",
       "source": "https://commons.wikimedia.org/wiki/File:Guard_at_the_Prague_castle,_Prague_-_7620_(cropped).jpg"
      }
     ],
     "driveLinks": [],
     "itinerary": [],
     "noPhoto": false
    },
    {
     "id": "p_cn",
     "name": "China",
     "country": "China",
     "city": "Beijing",
     "iso2": "CN",
     "iata": "PEK",
     "currency": "CNY",
     "lat": 39.9,
     "lon": 116.41,
     "days": 10,
     "order": 14,
     "notes": "",
     "budget": {
      "flights": 42000,
      "transport": 10000,
      "lodging": 23000,
      "food": 10000,
      "activities": 25000,
      "carRental": 0,
      "visa": 6000,
      "misc": 3000
     },
     "images": [
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Skyline_of_Beijing_CBD_with_B-5906_approaching_%2820211016171955%29_%281%29.jpg/1024px-Skyline_of_Beijing_CBD_with_B-5906_approaching_%2820211016171955%29_%281%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
       "credit": "Beijing",
       "source": "https://en.wikipedia.org/wiki/Beijing"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Beijing_national_stadium.jpg/960px-Beijing_national_stadium.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Peter23 · CC BY-SA 3.0",
       "source": "https://commons.wikimedia.org/wiki/File:Beijing_national_stadium.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Beijing_China_Woman-cleaning-West-Lake-01.jpg/960px-Beijing_China_Woman-cleaning-West-Lake-01.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "CEphoto, Uwe Aranas · CC BY-SA 3.0",
       "source": "https://commons.wikimedia.org/wiki/File:Beijing_China_Woman-cleaning-West-Lake-01.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/China-wheelbarrows-Beijing-1230830.jpg/960px-China-wheelbarrows-Beijing-1230830.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "ermell · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:China-wheelbarrows-Beijing-1230830.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Beijing_Jin_Zheng_Yang_Restaurant-20110102-RM-205758.jpg/960px-Beijing_Jin_Zheng_Yang_Restaurant-20110102-RM-205758.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Ermell · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Beijing_Jin_Zheng_Yang_Restaurant-20110102-RM-205758.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Beijing_Department_Store-20071019-RM-213355.jpg/960px-Beijing_Department_Store-20071019-RM-213355.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Ermell · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Beijing_Department_Store-20071019-RM-213355.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Peking_F%C3%BCnf_Drachen_Pavillons-20131229-RM-120744.jpg/960px-Peking_F%C3%BCnf_Drachen_Pavillons-20131229-RM-120744.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Reinhold Möller Ermell · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Peking_F%C3%BCnf_Drachen_Pavillons-20131229-RM-120744.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Peking_Temple_of_Extreme_Happiness-20131229-RM-120625.jpg/960px-Peking_Temple_of_Extreme_Happiness-20131229-RM-120625.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Reinhold Möller Ermell · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Peking_Temple_of_Extreme_Happiness-20131229-RM-120625.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Beijing_forbidden_city_roof-20071018-RM-142553.jpg/960px-Beijing_forbidden_city_roof-20071018-RM-142553.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Reinhold Möller Ermell · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Beijing_forbidden_city_roof-20071018-RM-142553.jpg"
      }
     ],
     "driveLinks": [],
     "itinerary": [],
     "noPhoto": false
    },
    {
     "id": "p_sg",
     "name": "Singapore",
     "country": "Singapore",
     "city": "Singapore",
     "iso2": "SG",
     "iata": "SIN",
     "currency": "SGD",
     "lat": 1.35,
     "lon": 103.82,
     "days": 10,
     "order": 15,
     "notes": "",
     "budget": {
      "flights": 35000,
      "transport": 5000,
      "lodging": 28000,
      "food": 15000,
      "activities": 11000,
      "carRental": 0,
      "visa": 2500,
      "misc": 3000
     },
     "images": [
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Singapore.svg/1024px-Flag_of_Singapore.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
       "credit": "Singapore",
       "source": "https://en.wikipedia.org/wiki/Singapore"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Sri_Mariamman_Temple_Singapore_3_amk.jpg/960px-Sri_Mariamman_Temple_Singapore_3_amk.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "AngMoKio. · CC BY-SA 3.0",
       "source": "https://commons.wikimedia.org/wiki/File:Sri_Mariamman_Temple_Singapore_3_amk.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/1_singapore_national_day_parade_2011_fireworks.jpg/960px-1_singapore_national_day_parade_2011_fireworks.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "chensiyuan · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:1_singapore_national_day_parade_2011_fireworks.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Skyline_of_the_Central_Business_District_of_Singapore_with_Esplanade_Bridge_in_the_evening.jpg/960px-Skyline_of_the_Central_Business_District_of_Singapore_with_Esplanade_Bridge_in_the_evening.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Basile Morin · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Skyline_of_the_Central_Business_District_of_Singapore_with_Esplanade_Bridge_in_the_evening.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Singapore_%28SG%29%2C_Singapore_Flyer_--_2019_--_4474.jpg/960px-Singapore_%28SG%29%2C_Singapore_Flyer_--_2019_--_4474.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Dietmar Rabich · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Singapore_(SG),_Singapore_Flyer_--_2019_--_4474.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Singapore_%28SG%29%2C_Singapore_Flyer_--_2019_--_4491.jpg/960px-Singapore_%28SG%29%2C_Singapore_Flyer_--_2019_--_4491.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Dietmar Rabich · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Singapore_(SG),_Singapore_Flyer_--_2019_--_4491.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Singapore_%28SG%29%2C_Singapore_Flyer_--_2019_--_4753.jpg/960px-Singapore_%28SG%29%2C_Singapore_Flyer_--_2019_--_4753.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Dietmar Rabich · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Singapore_(SG),_Singapore_Flyer_--_2019_--_4753.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Singapore_%28SG%29%2C_View_from_Marina_Bay_Sands%2C_Singapore_Flyer_--_2019_--_4720.jpg/960px-Singapore_%28SG%29%2C_View_from_Marina_Bay_Sands%2C_Singapore_Flyer_--_2019_--_4720.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Dietmar Rabich · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Singapore_(SG),_View_from_Marina_Bay_Sands,_Singapore_Flyer_--_2019_--_4720.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/WAB_BDhe_4-4_115_Kleine_Scheidegg_-_Wengernalp.jpg/960px-WAB_BDhe_4-4_115_Kleine_Scheidegg_-_Wengernalp.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Kabelleger · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:WAB_BDhe_4-4_115_Kleine_Scheidegg_-_Wengernalp.jpg"
      }
     ],
     "driveLinks": [],
     "itinerary": [],
     "noPhoto": false
    },
    {
     "id": "p_jp",
     "name": "Japan",
     "country": "Japan",
     "city": "Tokyo",
     "iso2": "JP",
     "iata": "TYO",
     "currency": "JPY",
     "lat": 35.68,
     "lon": 139.69,
     "days": 10,
     "order": 16,
     "notes": "",
     "budget": {
      "flights": 65000,
      "transport": 25000,
      "lodging": 30000,
      "food": 16000,
      "activities": 0,
      "carRental": 12000,
      "visa": 3000,
      "misc": 3000
     },
     "images": [
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Skyscrapers_of_Shinjuku_2009_January.jpg/1024px-Skyscrapers_of_Shinjuku_2009_January.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
       "credit": "Tokyo",
       "source": "https://en.wikipedia.org/wiki/Tokyo"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Tokyo_Metro_and_JR_East_at_Ochanomizu%2C_Tokyo.jpg/960px-Tokyo_Metro_and_JR_East_at_Ochanomizu%2C_Tokyo.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Kabelleger / David Gubler · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Tokyo_Metro_and_JR_East_at_Ochanomizu,_Tokyo.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Tokyo_Shibuya_Scramble_Crossing_2018-10-09.jpg/960px-Tokyo_Shibuya_Scramble_Crossing_2018-10-09.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Benh LIEU SONG (Flickr) · CC BY-SA 2.0",
       "source": "https://commons.wikimedia.org/wiki/File:Tokyo_Shibuya_Scramble_Crossing_2018-10-09.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Illuminated_facade_of_a_3-storey_restaurant_with_Japanese_signs_and_red_paper_lanterns%2C_Chiyoda%2C_Tokyo.jpg/960px-Illuminated_facade_of_a_3-storey_restaurant_with_Japanese_signs_and_red_paper_lanterns%2C_Chiyoda%2C_Tokyo.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Basile Morin · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Illuminated_facade_of_a_3-storey_restaurant_with_Japanese_signs_and_red_paper_lanterns,_Chiyoda,_Tokyo.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Exterior_view_of_the_illuminated_facade_of_Maison_Herm%C3%A8s%2C_Ginza%2C_Tokyo%2C_Japan.jpg/960px-Exterior_view_of_the_illuminated_facade_of_Maison_Herm%C3%A8s%2C_Ginza%2C_Tokyo%2C_Japan.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Basile Morin · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Exterior_view_of_the_illuminated_facade_of_Maison_Herm%C3%A8s,_Ginza,_Tokyo,_Japan.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Soba-Noodles-Deliveryman-Tokyo-1935.png/960px-Soba-Noodles-Deliveryman-Tokyo-1935.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Mainichi Shimbun · Public domain",
       "source": "https://commons.wikimedia.org/wiki/File:Soba-Noodles-Deliveryman-Tokyo-1935.png"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Minato_City%2C_Tokyo%2C_Japan.jpg/960px-Minato_City%2C_Tokyo%2C_Japan.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "David Kernan · CC BY 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Minato_City,_Tokyo,_Japan.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Minato_City%2C_Tokyo%2C_Japan_%28Night%29.jpg/960px-Minato_City%2C_Tokyo%2C_Japan_%28Night%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "David Kernan · CC BY 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Minato_City,_Tokyo,_Japan_(Night).jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Tokyo_Tower%2C_Minato_City.jpg/960px-Tokyo_Tower%2C_Minato_City.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "David Kernan · CC BY 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Tokyo_Tower,_Minato_City.jpg"
      }
     ],
     "driveLinks": [],
     "itinerary": [],
     "noPhoto": false
    },
    {
     "id": "p_hu",
     "name": "Hungary",
     "country": "Hungary",
     "city": "Budapest",
     "iso2": "HU",
     "iata": "BUD",
     "currency": "HUF",
     "lat": 47.5,
     "lon": 19.04,
     "days": 10,
     "order": 17,
     "notes": "",
     "budget": {
      "flights": 65000,
      "transport": 4000,
      "lodging": 12000,
      "food": 14000,
      "activities": 0,
      "carRental": 0,
      "visa": 10000,
      "misc": 3000
     },
     "images": [
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/View_from_Gell%C3%A9rt_Hill_to_the_Danube%2C_Hungary_-_Budapest_%2828493220635%29.jpg/1024px-View_from_Gell%C3%A9rt_Hill_to_the_Danube%2C_Hungary_-_Budapest_%2828493220635%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
       "credit": "Budapest",
       "source": "https://en.wikipedia.org/wiki/Budapest"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Budapest_from_Gellert_Hill_MC.jpg/960px-Budapest_from_Gellert_Hill_MC.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Christian Mehlführer, User:Chmehl · CC BY 3.0",
       "source": "https://commons.wikimedia.org/wiki/File:Budapest_from_Gellert_Hill_MC.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Budapest_Vajdahunyad_Castle_R02.jpg/960px-Budapest_Vajdahunyad_Castle_R02.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Marc Ryckaert (MJJR) · CC BY 3.0",
       "source": "https://commons.wikimedia.org/wiki/File:Budapest_Vajdahunyad_Castle_R02.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Sz%C3%A9chenyi_Chain_Bridge_in_Budapest_at_night.jpg/960px-Sz%C3%A9chenyi_Chain_Bridge_in_Budapest_at_night.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Wilfredor · CC0",
       "source": "https://commons.wikimedia.org/wiki/File:Sz%C3%A9chenyi_Chain_Bridge_in_Budapest_at_night.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Orsz%C3%A1gh%C3%A1z_Margit_h%C3%ADd_Budapest_2013.jpg/960px-Orsz%C3%A1gh%C3%A1z_Margit_h%C3%ADd_Budapest_2013.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Felix König · CC BY 3.0",
       "source": "https://commons.wikimedia.org/wiki/File:Orsz%C3%A1gh%C3%A1z_Margit_h%C3%ADd_Budapest_2013.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/20190502_View_from_Buda_Castle_1059_2025_DxO.jpg/960px-20190502_View_from_Buda_Castle_1059_2025_DxO.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Jakub Hałun · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:20190502_View_from_Buda_Castle_1059_2025_DxO.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/View_from_Buda_Castle_2014_02.jpg/960px-View_from_Buda_Castle_2014_02.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Perituss · CC0",
       "source": "https://commons.wikimedia.org/wiki/File:View_from_Buda_Castle_2014_02.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/View_from_Buda_Castle_2014_01.jpg/960px-View_from_Buda_Castle_2014_01.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Perituss · CC0",
       "source": "https://commons.wikimedia.org/wiki/File:View_from_Buda_Castle_2014_01.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Streets_of_Buda_Castle_Quarter%2C_Budapest_5.jpg/960px-Streets_of_Buda_Castle_Quarter%2C_Budapest_5.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Slyronit · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Streets_of_Buda_Castle_Quarter,_Budapest_5.jpg"
      }
     ],
     "driveLinks": [],
     "itinerary": [],
     "noPhoto": false
    },
    {
     "id": "p_hr",
     "name": "Croatia",
     "country": "Croatia",
     "city": "Dubrovnik",
     "iso2": "HR",
     "iata": "DBV",
     "currency": "EUR",
     "lat": 42.65,
     "lon": 18.09,
     "days": 10,
     "order": 18,
     "notes": "",
     "budget": {
      "flights": 65000,
      "transport": 10000,
      "lodging": 16000,
      "food": 16000,
      "activities": 0,
      "carRental": 8000,
      "visa": 10000,
      "misc": 3000
     },
     "images": [
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/The_walls_of_the_fortress_and_View_of_the_old_city._panorama.jpg/1024px-The_walls_of_the_fortress_and_View_of_the_old_city._panorama.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
       "credit": "Dubrovnik",
       "source": "https://en.wikipedia.org/wiki/Dubrovnik"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Walls_of_Dubrovnik-10.jpg/960px-Walls_of_Dubrovnik-10.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "László Szalai (Beyond silence) · Public domain",
       "source": "https://commons.wikimedia.org/wiki/File:Walls_of_Dubrovnik-10.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Casco_viejo_de_Dubrovnik%2C_Croacia%2C_2014-04-13%2C_DD_03.JPG/960px-Casco_viejo_de_Dubrovnik%2C_Croacia%2C_2014-04-13%2C_DD_03.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Diego Delso · CC BY-SA 3.0",
       "source": "https://commons.wikimedia.org/wiki/File:Casco_viejo_de_Dubrovnik,_Croacia,_2014-04-13,_DD_03.JPG"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Casco_viejo_de_Dubrovnik%2C_Croacia%2C_2014-04-14%2C_DD_04.JPG/960px-Casco_viejo_de_Dubrovnik%2C_Croacia%2C_2014-04-14%2C_DD_04.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Diego Delso · CC BY-SA 3.0",
       "source": "https://commons.wikimedia.org/wiki/File:Casco_viejo_de_Dubrovnik,_Croacia,_2014-04-14,_DD_04.JPG"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Panoramic_view_of_the_old_city_of_Dubrovnik_-_September_2017.jpg/960px-Panoramic_view_of_the_old_city_of_Dubrovnik_-_September_2017.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Martin Falbisoner · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Panoramic_view_of_the_old_city_of_Dubrovnik_-_September_2017.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Dubrovnik_as_seen_from_Sr%C4%91_-_September_2017.jpg/960px-Dubrovnik_as_seen_from_Sr%C4%91_-_September_2017.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Martin Falbisoner · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Dubrovnik_as_seen_from_Sr%C4%91_-_September_2017.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Dubrovnik_2016-05-26_DSC06251_view_from_the_wall.jpg/960px-Dubrovnik_2016-05-26_DSC06251_view_from_the_wall.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Ponor · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Dubrovnik_2016-05-26_DSC06251_view_from_the_wall.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Dubrovnik_2016-05-26_DSC06252_view_from_the_wall.jpg/960px-Dubrovnik_2016-05-26_DSC06252_view_from_the_wall.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Ponor · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Dubrovnik_2016-05-26_DSC06252_view_from_the_wall.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/1_dubrovnik_pano_-_edit1.jpg/960px-1_dubrovnik_pano_-_edit1.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Chensiyuan Edit by: Bammesk · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:1_dubrovnik_pano_-_edit1.jpg"
      }
     ],
     "driveLinks": [],
     "itinerary": [],
     "noPhoto": false
    },
    {
     "id": "p_de",
     "name": "Germany",
     "country": "Germany",
     "city": "Berlin",
     "iso2": "DE",
     "iata": "BER",
     "currency": "EUR",
     "lat": 52.52,
     "lon": 13.4,
     "days": 10,
     "order": 19,
     "notes": "",
     "budget": {
      "flights": 65000,
      "transport": 5000,
      "lodging": 17000,
      "food": 16000,
      "activities": 0,
      "carRental": 0,
      "visa": 10000,
      "misc": 15000
     },
     "images": [
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Museumsinsel_Berlin_Juli_2021_1_%28cropped%29_b.jpg/1024px-Museumsinsel_Berlin_Juli_2021_1_%28cropped%29_b.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
       "credit": "Berlin",
       "source": "https://en.wikipedia.org/wiki/Berlin"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/SonyCenterAtNight.jpg/960px-SonyCenterAtNight.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Andreas Tille · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:SonyCenterAtNight.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Siegessaeule_Aussicht_10-13_img4_Tiergarten.jpg/960px-Siegessaeule_Aussicht_10-13_img4_Tiergarten.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "A.Savin · CC BY-SA 3.0",
       "source": "https://commons.wikimedia.org/wiki/File:Siegessaeule_Aussicht_10-13_img4_Tiergarten.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Brandenburg_Gate_-_Brandenburger_Tor_-_Berlin_-_Germany_-_02.jpg/960px-Brandenburg_Gate_-_Brandenburger_Tor_-_Berlin_-_Germany_-_02.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Norbert Nagel · CC BY-SA 3.0",
       "source": "https://commons.wikimedia.org/wiki/File:Brandenburg_Gate_-_Brandenburger_Tor_-_Berlin_-_Germany_-_02.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Franz%C3%B6sischer_Dom%2C_Gendarmenmarkt%2C_Berlin_%28Blaue_Stunde%29.jpg/960px-Franz%C3%B6sischer_Dom%2C_Gendarmenmarkt%2C_Berlin_%28Blaue_Stunde%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Ansgar Koreng · CC BY 3.0 de",
       "source": "https://commons.wikimedia.org/wiki/File:Franz%C3%B6sischer_Dom,_Gendarmenmarkt,_Berlin_(Blaue_Stunde).jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Detail%2C_Kollhoff_Tower_and_BahnTower%2C_Potsdamer_Platz%2C_Berlin%2C_Germany-3380.jpg/960px-Detail%2C_Kollhoff_Tower_and_BahnTower%2C_Potsdamer_Platz%2C_Berlin%2C_Germany-3380.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Slaunger · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Detail,_Kollhoff_Tower_and_BahnTower,_Potsdamer_Platz,_Berlin,_Germany-3380.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Reloj_Mundial%2C_Berl%C3%ADn%2C_Alemania%2C_2016-04-22%2C_DD_46-48_HDR.jpg/960px-Reloj_Mundial%2C_Berl%C3%ADn%2C_Alemania%2C_2016-04-22%2C_DD_46-48_HDR.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Diego Delso · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Reloj_Mundial,_Berl%C3%ADn,_Alemania,_2016-04-22,_DD_46-48_HDR.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Berlin-Panorama_vom_Fernsehturm.jpg/960px-Berlin-Panorama_vom_Fernsehturm.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Jörg Braukmann · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Berlin-Panorama_vom_Fernsehturm.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Berlin_Mitte_June_2023_01.jpg/960px-Berlin_Mitte_June_2023_01.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "ArildV · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Berlin_Mitte_June_2023_01.jpg"
      }
     ],
     "driveLinks": [],
     "itinerary": [],
     "noPhoto": false
    },
    {
     "id": "p_dk",
     "name": "Denmark",
     "country": "Denmark",
     "city": "Copenhagen",
     "iso2": "DK",
     "iata": "CPH",
     "currency": "DKK",
     "lat": 55.68,
     "lon": 12.57,
     "days": 10,
     "order": 20,
     "notes": "",
     "budget": {
      "flights": 65000,
      "transport": 6000,
      "lodging": 26000,
      "food": 22000,
      "activities": 0,
      "carRental": 0,
      "visa": 10000,
      "misc": 3000
     },
     "images": [
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/2018_-_Christiansborg_from_the_Marble_Bridge.jpg/1024px-2018_-_Christiansborg_from_the_Marble_Bridge.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
       "credit": "Copenhagen",
       "source": "https://en.wikipedia.org/wiki/Copenhagen"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Copenhagen_Metro_escalators.jpg/960px-Copenhagen_Metro_escalators.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Stig Nygaard from Copenhagen, Denmark · CC BY 2.0",
       "source": "https://commons.wikimedia.org/wiki/File:Copenhagen_Metro_escalators.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Two_of_Kongelige_livgarde_Amalienborg_Copenhagen_Denmark.jpg/960px-Two_of_Kongelige_livgarde_Amalienborg_Copenhagen_Denmark.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Jebulon · CC0",
       "source": "https://commons.wikimedia.org/wiki/File:Two_of_Kongelige_livgarde_Amalienborg_Copenhagen_Denmark.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/B%C3%B8rsen_dragon_spire_roofs_Copenhagen_Denmark.jpg/960px-B%C3%B8rsen_dragon_spire_roofs_Copenhagen_Denmark.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Jebulon · CC0",
       "source": "https://commons.wikimedia.org/wiki/File:B%C3%B8rsen_dragon_spire_roofs_Copenhagen_Denmark.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Sentry_box_shadow_lamp_Christiansborg_Copenhagen_Denmark.jpg/960px-Sentry_box_shadow_lamp_Christiansborg_Copenhagen_Denmark.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Jebulon · CC0",
       "source": "https://commons.wikimedia.org/wiki/File:Sentry_box_shadow_lamp_Christiansborg_Copenhagen_Denmark.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Weather_vane_Trinitatis_kirke_Copenhagen_Denmark.jpg/960px-Weather_vane_Trinitatis_kirke_Copenhagen_Denmark.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Jebulon · CC0",
       "source": "https://commons.wikimedia.org/wiki/File:Weather_vane_Trinitatis_kirke_Copenhagen_Denmark.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/B%C3%B8rsen_Copenhagen_Denmark.jpg/960px-B%C3%B8rsen_Copenhagen_Denmark.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Jebulon · CC0",
       "source": "https://commons.wikimedia.org/wiki/File:B%C3%B8rsen_Copenhagen_Denmark.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Light_through_a_stained_glass_window%2C_cross%2C_wall_of_the_Marmor_%28Frederiks%29_Kirke_Copenhagen_Denmark.jpg/960px-Light_through_a_stained_glass_window%2C_cross%2C_wall_of_the_Marmor_%28Frederiks%29_Kirke_Copenhagen_Denmark.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Jebulon · CC0",
       "source": "https://commons.wikimedia.org/wiki/File:Light_through_a_stained_glass_window,_cross,_wall_of_the_Marmor_(Frederiks)_Kirke_Copenhagen_Denmark.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Cityscape_and_skyline_by_the_Copenhagen_Lakes%2C_Denmark_-_%2836018109956%29.jpg/960px-Cityscape_and_skyline_by_the_Copenhagen_Lakes%2C_Denmark_-_%2836018109956%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Kristoffer Trolle from Copenhagen, Denmark · CC BY 2.0",
       "source": "https://commons.wikimedia.org/wiki/File:Cityscape_and_skyline_by_the_Copenhagen_Lakes,_Denmark_-_(36018109956).jpg"
      }
     ],
     "driveLinks": [],
     "itinerary": [],
     "noPhoto": false
    },
    {
     "id": "p_fo",
     "name": "Faroe Islands",
     "country": "Faroe Islands",
     "city": "Torshavn",
     "iso2": "FO",
     "iata": "FAE",
     "currency": "DKK",
     "lat": 62.01,
     "lon": -6.77,
     "days": 10,
     "order": 21,
     "notes": "",
     "budget": {
      "flights": 28000,
      "transport": 0,
      "lodging": 40000,
      "food": 30000,
      "activities": 0,
      "carRental": 15000,
      "visa": 10000,
      "misc": 3000
     },
     "images": [
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Is03002-Torshavn.jpg/1024px-Is03002-Torshavn.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
       "credit": "Tórshavn",
       "source": "https://en.wikipedia.org/wiki/T%C3%B3rshavn"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/1/14/Eystarav%C3%A1g%2C_Torshavn%2C_faroe_islands%2C_feb_2005.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
       "credit": "Erik Christensen · CC BY-SA 3.0",
       "source": "https://commons.wikimedia.org/wiki/File:Eystarav%C3%A1g,_Torshavn,_faroe_islands,_feb_2005.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/8/86/T%C3%B3rshavn.2.old_harbour.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
       "credit": "Erik Christensen · CC BY-SA 3.0",
       "source": "https://commons.wikimedia.org/wiki/File:T%C3%B3rshavn.2.old_harbour.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Faroe_Islands%2C_Streymoy%2C_T%C3%B3rshavn_%281%29.jpg/960px-Faroe_Islands%2C_Streymoy%2C_T%C3%B3rshavn_%281%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Vincent van Zeijst · CC BY-SA 3.0",
       "source": "https://commons.wikimedia.org/wiki/File:Faroe_Islands,_Streymoy,_T%C3%B3rshavn_(1).jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Bryggjubakki%2C_T%C3%B3rshavn_%285%29.jpg/960px-Bryggjubakki%2C_T%C3%B3rshavn_%285%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Vincent van Zeijst · CC BY-SA 3.0",
       "source": "https://commons.wikimedia.org/wiki/File:Bryggjubakki,_T%C3%B3rshavn_(5).jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Faroe_Islands%2C_Streymoy%2C_T%C3%B3rshavn_%286%29.jpg/960px-Faroe_Islands%2C_Streymoy%2C_T%C3%B3rshavn_%286%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Vincent van Zeijst · CC BY-SA 3.0",
       "source": "https://commons.wikimedia.org/wiki/File:Faroe_Islands,_Streymoy,_T%C3%B3rshavn_(6).jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/T%C3%B3rshavn_Panorama.jpg/960px-T%C3%B3rshavn_Panorama.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Tofts · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:T%C3%B3rshavn_Panorama.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/T%C3%B3rshavn_view.jpg/960px-T%C3%B3rshavn_view.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "HRoued · CC BY 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:T%C3%B3rshavn_view.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/T%C3%B3rshavn_City_Hall.jpg/960px-T%C3%B3rshavn_City_Hall.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "HRoued · CC BY 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:T%C3%B3rshavn_City_Hall.jpg"
      }
     ],
     "driveLinks": [],
     "itinerary": [],
     "noPhoto": false
    },
    {
     "id": "p_tr",
     "name": "Turkey",
     "country": "Turkey",
     "city": "Istanbul",
     "iso2": "TR",
     "iata": "IST",
     "currency": "TRY",
     "lat": 41.01,
     "lon": 28.98,
     "days": 10,
     "order": 22,
     "notes": "",
     "budget": {
      "flights": 50000,
      "transport": 4500,
      "lodging": 25000,
      "food": 11000,
      "activities": 0,
      "carRental": 8000,
      "visa": 4400,
      "misc": 3000
     },
     "images": [
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Historical_peninsula_and_modern_skyline_of_Istanbul.jpg/1024px-Historical_peninsula_and_modern_skyline_of_Istanbul.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
       "credit": "Istanbul",
       "source": "https://en.wikipedia.org/wiki/Istanbul"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Istanbul_and_Bosporus_big.jpg/960px-Istanbul_and_Bosporus_big.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Astronaut photograph ISS008-E-21752 · Public domain",
       "source": "https://commons.wikimedia.org/wiki/File:Istanbul_and_Bosporus_big.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/20101106_Galata_Tower_Istanbul_Turkey_Panorama.jpg/960px-20101106_Galata_Tower_Istanbul_Turkey_Panorama.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "User:Ggia · CC BY-SA 3.0",
       "source": "https://commons.wikimedia.org/wiki/File:20101106_Galata_Tower_Istanbul_Turkey_Panorama.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Courtyard_of_the_S%C3%BCleymaniye_Mosque_in_Istanbul%2C_Turkey_004.jpg/960px-Courtyard_of_the_S%C3%BCleymaniye_Mosque_in_Istanbul%2C_Turkey_004.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Moonik · CC BY-SA 3.0",
       "source": "https://commons.wikimedia.org/wiki/File:Courtyard_of_the_S%C3%BCleymaniye_Mosque_in_Istanbul,_Turkey_004.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Istanbul_Montage_2016.png/960px-Istanbul_Montage_2016.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "AlexTref871, Piotr Matyja, Alexxx1979, Moyan Brenn, Far-gh, İhsan Deni · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Istanbul_Montage_2016.png"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/New_Mosque%2C_Istanbul%2C_from_Bosphorus.jpg/960px-New_Mosque%2C_Istanbul%2C_from_Bosphorus.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Till Niermann · CC BY 3.0",
       "source": "https://commons.wikimedia.org/wiki/File:New_Mosque,_Istanbul,_from_Bosphorus.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Istanbul_asv2020-02_img19_Topkap%C4%B1_Palace.jpg/960px-Istanbul_asv2020-02_img19_Topkap%C4%B1_Palace.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "A.Savin · FAL",
       "source": "https://commons.wikimedia.org/wiki/File:Istanbul_asv2020-02_img19_Topkap%C4%B1_Palace.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Istanbul_asv2020-02_img55_View_of_Be%C5%9Fikta%C5%9F.jpg/960px-Istanbul_asv2020-02_img55_View_of_Be%C5%9Fikta%C5%9F.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "A.Savin · FAL",
       "source": "https://commons.wikimedia.org/wiki/File:Istanbul_asv2020-02_img55_View_of_Be%C5%9Fikta%C5%9F.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Metropolitian_Istanbul_-_Landscapes_of_Turkey_12.jpg/960px-Metropolitian_Istanbul_-_Landscapes_of_Turkey_12.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Mostafameraji · CC0",
       "source": "https://commons.wikimedia.org/wiki/File:Metropolitian_Istanbul_-_Landscapes_of_Turkey_12.jpg"
      }
     ],
     "driveLinks": [],
     "itinerary": [],
     "noPhoto": false
    },
    {
     "id": "p_ge",
     "name": "Georgia",
     "country": "Georgia",
     "city": "Tbilisi",
     "iso2": "GE",
     "iata": "TBS",
     "currency": "GEL",
     "lat": 41.72,
     "lon": 44.79,
     "days": 10,
     "order": 23,
     "notes": "",
     "budget": {
      "flights": 38000,
      "transport": 4000,
      "lodging": 17000,
      "food": 9000,
      "activities": 0,
      "carRental": 7000,
      "visa": 3000,
      "misc": 3000
     },
     "images": [
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/View_of_Tbilisi_from_Tabori_Church_2023-10-08-2.jpg/1024px-View_of_Tbilisi_from_Tabori_Church_2023-10-08-2.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
       "credit": "Tbilisi",
       "source": "https://en.wikipedia.org/wiki/Tbilisi"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Narikala_fortress%2C_Tbilisi%2C_Georgia.jpg/960px-Narikala_fortress%2C_Tbilisi%2C_Georgia.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "This work is created by George Melashvili. You can redistribute it or  · CC BY-SA 3.0",
       "source": "https://commons.wikimedia.org/wiki/File:Narikala_fortress,_Tbilisi,_Georgia.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/20110421_Tbilisi_Georgia_Panoramic.jpg/960px-20110421_Tbilisi_Georgia_Panoramic.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "User:Ggia · CC BY-SA 3.0",
       "source": "https://commons.wikimedia.org/wiki/File:20110421_Tbilisi_Georgia_Panoramic.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/2014_Tbilisi%2C_G%C3%B3rna_stacja_kolejki_linowej_i_twierdza_Narikala.jpg/960px-2014_Tbilisi%2C_G%C3%B3rna_stacja_kolejki_linowej_i_twierdza_Narikala.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Marcin Konsek · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:2014_Tbilisi,_G%C3%B3rna_stacja_kolejki_linowej_i_twierdza_Narikala.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/2014_Tbilisi%2C_Wie%C5%BCa_zegarowa_%2801%29.jpg/960px-2014_Tbilisi%2C_Wie%C5%BCa_zegarowa_%2801%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Marcin Konsek · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:2014_Tbilisi,_Wie%C5%BCa_zegarowa_(01).jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/2014_Tbilisi%2C_Widoki_z_Twierdzy_Narikala_%2823%29.jpg/960px-2014_Tbilisi%2C_Widoki_z_Twierdzy_Narikala_%2823%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Marcin Konsek · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:2014_Tbilisi,_Widoki_z_Twierdzy_Narikala_(23).jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/2014_Tbilisi%2C_Widoki_z_Twierdzy_Narikala_%2836%29.jpg/960px-2014_Tbilisi%2C_Widoki_z_Twierdzy_Narikala_%2836%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Marcin Konsek · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:2014_Tbilisi,_Widoki_z_Twierdzy_Narikala_(36).jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Vista_de_Tiflis%2C_Georgia%2C_2016-09-29%2C_DD_67-71_PAN.jpg/960px-Vista_de_Tiflis%2C_Georgia%2C_2016-09-29%2C_DD_67-71_PAN.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Diego Delso · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Vista_de_Tiflis,_Georgia,_2016-09-29,_DD_67-71_PAN.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Tbilisi%2C_Old_Tbilisi%2C_Kura_River_2%2C_Georgia.jpg/960px-Tbilisi%2C_Old_Tbilisi%2C_Kura_River_2%2C_Georgia.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Vyacheslav Argenberg · CC BY 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Tbilisi,_Old_Tbilisi,_Kura_River_2,_Georgia.jpg"
      }
     ],
     "driveLinks": [],
     "itinerary": [],
     "noPhoto": false
    },
    {
     "id": "p_za",
     "name": "South Africa",
     "country": "South Africa",
     "city": "Cape Town",
     "iso2": "ZA",
     "iata": "CPT",
     "currency": "ZAR",
     "lat": -33.92,
     "lon": 18.42,
     "days": 10,
     "order": 24,
     "notes": "",
     "budget": {
      "flights": 75000,
      "transport": 5000,
      "lodging": 28000,
      "food": 13000,
      "activities": 0,
      "carRental": 15000,
      "visa": 3000,
      "misc": 3000
     },
     "images": [
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Camps_bay_%2853460319478%29_%28cropped%29.jpg/1024px-Camps_bay_%2853460319478%29_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
       "credit": "Cape Town",
       "source": "https://en.wikipedia.org/wiki/Cape_Town"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Cape_Skink_Flowers.jpg/960px-Cape_Skink_Flowers.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Prosthetic Head · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Cape_Skink_Flowers.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/CapeTown_CityHall.jpg/960px-CapeTown_CityHall.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Martinvl · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:CapeTown_CityHall.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Mardi_Gras%2C_Cape_Town_%28P1050737%29.jpg/960px-Mardi_Gras%2C_Cape_Town_%28P1050737%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Matti Blume · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Mardi_Gras,_Cape_Town_(P1050737).jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Cape_Town_%28ZA%29%2C_Waterfront%2C_Kran_--_2024_--_2907.jpg/960px-Cape_Town_%28ZA%29%2C_Waterfront%2C_Kran_--_2024_--_2907.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Dietmar Rabich · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Cape_Town_(ZA),_Waterfront,_Kran_--_2024_--_2907.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Cape_Town_%28ZA%29%2C_Waterfront%2C_Clock_Tower%2C_Detail_--_2024_--_2911.jpg/960px-Cape_Town_%28ZA%29%2C_Waterfront%2C_Clock_Tower%2C_Detail_--_2024_--_2911.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Dietmar Rabich · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Cape_Town_(ZA),_Waterfront,_Clock_Tower,_Detail_--_2024_--_2911.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Cape_Town_%28ZA%29%2C_Sea_Point%2C_Nachtansicht_--_2024_--_1867-70_-_2.jpg/960px-Cape_Town_%28ZA%29%2C_Sea_Point%2C_Nachtansicht_--_2024_--_1867-70_-_2.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Dietmar Rabich · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Cape_Town_(ZA),_Sea_Point,_Nachtansicht_--_2024_--_1867-70_-_2.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Cape_Town_%28ZA%29%2C_Wale_Street_--_2024_--_3536.jpg/960px-Cape_Town_%28ZA%29%2C_Wale_Street_--_2024_--_3536.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Dietmar Rabich · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Cape_Town_(ZA),_Wale_Street_--_2024_--_3536.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Cape_Town_%28ZA%29%2C_Wale_Street_--_2024_--_3544.jpg/960px-Cape_Town_%28ZA%29%2C_Wale_Street_--_2024_--_3544.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Dietmar Rabich · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Cape_Town_(ZA),_Wale_Street_--_2024_--_3544.jpg"
      }
     ],
     "driveLinks": [],
     "itinerary": [],
     "noPhoto": false
    },
    {
     "id": "p_co",
     "name": "Colombia",
     "country": "Colombia",
     "city": "Bogota",
     "iso2": "CO",
     "iata": "BOG",
     "currency": "COP",
     "lat": 4.71,
     "lon": -74.07,
     "days": 10,
     "order": 25,
     "notes": "",
     "budget": {
      "flights": 100000,
      "transport": 15000,
      "lodging": 20000,
      "food": 9000,
      "activities": 0,
      "carRental": 0,
      "visa": 4400,
      "misc": 3000
     },
     "images": [
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Bogota%2C_Colombia_%2836668708290%29.jpg/1024px-Bogota%2C_Colombia_%2836668708290%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
       "credit": "Bogotá",
       "source": "https://en.wikipedia.org/wiki/Bogot%C3%A1"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/BogotaBoroughHall.jpg/960px-BogotaBoroughHall.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "KForce at en.wikipedia · CC BY-SA 3.0",
       "source": "https://commons.wikimedia.org/wiki/File:BogotaBoroughHall.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/7/7f/Census_Bureau_map_of_Bogota%2C_New_Jersey.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
       "credit": "United States Census Bureau · Public domain",
       "source": "https://commons.wikimedia.org/wiki/File:Census_Bureau_map_of_Bogota,_New_Jersey.png"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Capitalio_National_de_Colombia%2C_Bogot%C3%A1.jpg/960px-Capitalio_National_de_Colombia%2C_Bogot%C3%A1.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Bernard Gagnon · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Capitalio_National_de_Colombia,_Bogot%C3%A1.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Palacio_de_Justicia_de_Colombia%2C_Bogot%C3%A1.jpg/960px-Palacio_de_Justicia_de_Colombia%2C_Bogot%C3%A1.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Bernard Gagnon · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Palacio_de_Justicia_de_Colombia,_Bogot%C3%A1.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Imagenes_de_alusi%C3%B3n%2C_Carteles%2C_Colombia_Pride_2026%2C_Bogot%C3%A1%2C_Colombia_%2898724%29.jpg/960px-Imagenes_de_alusi%C3%B3n%2C_Carteles%2C_Colombia_Pride_2026%2C_Bogot%C3%A1%2C_Colombia_%2898724%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Sierraluisfer · CC BY-SA 3.0",
       "source": "https://commons.wikimedia.org/wiki/File:Imagenes_de_alusi%C3%B3n,_Carteles,_Colombia_Pride_2026,_Bogot%C3%A1,_Colombia_(98724).jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Imagenes_de_alusi%C3%B3n%2C_Carteles%2C_Colombia_Pride_2026%2C_Bogot%C3%A1%2C_Colombia_%2827457%29.jpg/960px-Imagenes_de_alusi%C3%B3n%2C_Carteles%2C_Colombia_Pride_2026%2C_Bogot%C3%A1%2C_Colombia_%2827457%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Sierraluisfer · CC BY-SA 3.0",
       "source": "https://commons.wikimedia.org/wiki/File:Imagenes_de_alusi%C3%B3n,_Carteles,_Colombia_Pride_2026,_Bogot%C3%A1,_Colombia_(27457).jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Imagenes_de_alusi%C3%B3n%2C_Carteles%2C_Colombia_Pride_2026%2C_Bogot%C3%A1%2C_Colombia_%2837888%29.jpg/960px-Imagenes_de_alusi%C3%B3n%2C_Carteles%2C_Colombia_Pride_2026%2C_Bogot%C3%A1%2C_Colombia_%2837888%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Sierraluisfer · CC BY-SA 3.0",
       "source": "https://commons.wikimedia.org/wiki/File:Imagenes_de_alusi%C3%B3n,_Carteles,_Colombia_Pride_2026,_Bogot%C3%A1,_Colombia_(37888).jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Contramarcha_ParquePeriodistas_Colombia_Pride_2026%2C_Bogot%C3%A1%2C_Colombia_%2854257%29.jpg/960px-Contramarcha_ParquePeriodistas_Colombia_Pride_2026%2C_Bogot%C3%A1%2C_Colombia_%2854257%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Sierraluisfer · CC BY-SA 3.0",
       "source": "https://commons.wikimedia.org/wiki/File:Contramarcha_ParquePeriodistas_Colombia_Pride_2026,_Bogot%C3%A1,_Colombia_(54257).jpg"
      }
     ],
     "driveLinks": [],
     "itinerary": [],
     "noPhoto": false
    },
    {
     "id": "p_pe",
     "name": "Peru",
     "country": "Peru",
     "city": "Cusco",
     "iso2": "PE",
     "iata": "CUZ",
     "currency": "PEN",
     "lat": -13.53,
     "lon": -71.97,
     "days": 10,
     "order": 26,
     "notes": "",
     "budget": {
      "flights": 110000,
      "transport": 16500,
      "lodging": 19000,
      "food": 9000,
      "activities": 2800,
      "carRental": 0,
      "visa": 0,
      "misc": 3000
     },
     "images": [
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Vista_Calle_Suecia.jpg/1024px-Vista_Calle_Suecia.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
       "credit": "Cusco",
       "source": "https://en.wikipedia.org/wiki/Cusco"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Vista_de_Cusco%2C_Per%C3%BA%2C_2015-07-31%2C_DD_11-17_PAN.JPG/960px-Vista_de_Cusco%2C_Per%C3%BA%2C_2015-07-31%2C_DD_11-17_PAN.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Diego Delso · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Vista_de_Cusco,_Per%C3%BA,_2015-07-31,_DD_11-17_PAN.JPG"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Cusco%2C_Sacsayhuam%C3%A1n_-_panoramio.jpg/960px-Cusco%2C_Sacsayhuam%C3%A1n_-_panoramio.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "gertrudis2010 · CC BY-SA 3.0",
       "source": "https://commons.wikimedia.org/wiki/File:Cusco,_Sacsayhuam%C3%A1n_-_panoramio.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/00_1558_Cusco_Peru_-_Hochanden.jpg/960px-00_1558_Cusco_Peru_-_Hochanden.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "W. Bulach · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:00_1558_Cusco_Peru_-_Hochanden.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Mural_of_the_History_of_Cusco_by_Juan_Bravo_for_the_Municipality_of_Cusco.jpg/960px-Mural_of_the_History_of_Cusco_by_Juan_Bravo_for_the_Municipality_of_Cusco.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "AgainErick · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Mural_of_the_History_of_Cusco_by_Juan_Bravo_for_the_Municipality_of_Cusco.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Cristo_Blanco_%28Cusco%29_en_2011.jpg/960px-Cristo_Blanco_%28Cusco%29_en_2011.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Pierre André Leclercq · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Cristo_Blanco_(Cusco)_en_2011.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Cusco_Cathedral-IMG.jpg/960px-Cusco_Cathedral-IMG.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Kızıl · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Cusco_Cathedral-IMG.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Cusco_Cathedral_20241116_104952.jpg/960px-Cusco_Cathedral_20241116_104952.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Kızıl · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Cusco_Cathedral_20241116_104952.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Houses_of_Cusco_20241115_073538.jpg/960px-Houses_of_Cusco_20241115_073538.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Kızıl · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Houses_of_Cusco_20241115_073538.jpg"
      }
     ],
     "driveLinks": [],
     "itinerary": [],
     "noPhoto": false
    },
    {
     "id": "p_ec",
     "name": "Ecuador",
     "country": "Ecuador",
     "city": "Quito",
     "iso2": "EC",
     "iata": "UIO",
     "currency": "USD",
     "lat": -0.18,
     "lon": -78.47,
     "days": 10,
     "order": 27,
     "notes": "",
     "budget": {
      "flights": 115000,
      "transport": 4000,
      "lodging": 18000,
      "food": 9000,
      "activities": 4000,
      "carRental": 0,
      "visa": 0,
      "misc": 3000
     },
     "images": [
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/FACHADA_ASAMBLEA_NACIONAL._QUITO%2C_20_DE_FEBRERO_2020._01.jpg/1024px-FACHADA_ASAMBLEA_NACIONAL._QUITO%2C_20_DE_FEBRERO_2020._01.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
       "credit": "Quito",
       "source": "https://en.wikipedia.org/wiki/Quito"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Quito_as_from_panecillo_Basilica.jpg/960px-Quito_as_from_panecillo_Basilica.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Cayambe · CC BY-SA 3.0",
       "source": "https://commons.wikimedia.org/wiki/File:Quito_as_from_panecillo_Basilica.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Quito_calle_Garc%C3%ADa_Moreno.jpg/960px-Quito_calle_Garc%C3%ADa_Moreno.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Cayambe · CC BY-SA 3.0",
       "source": "https://commons.wikimedia.org/wiki/File:Quito_calle_Garc%C3%ADa_Moreno.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Iglesia_de_La_Compa%C3%B1%C3%ADa%2C_Quito%2C_Ecuador%2C_2015-07-22%2C_DD_119-121_HDR.JPG/960px-Iglesia_de_La_Compa%C3%B1%C3%ADa%2C_Quito%2C_Ecuador%2C_2015-07-22%2C_DD_119-121_HDR.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Diego Delso · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Iglesia_de_La_Compa%C3%B1%C3%ADa,_Quito,_Ecuador,_2015-07-22,_DD_119-121_HDR.JPG"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Iglesia_de_La_Compa%C3%B1%C3%ADa%2C_Quito%2C_Ecuador%2C_2015-07-22%2C_DD_149-151_HDR.JPG/960px-Iglesia_de_La_Compa%C3%B1%C3%ADa%2C_Quito%2C_Ecuador%2C_2015-07-22%2C_DD_149-151_HDR.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Diego Delso · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Iglesia_de_La_Compa%C3%B1%C3%ADa,_Quito,_Ecuador,_2015-07-22,_DD_149-151_HDR.JPG"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Cementerio_de_San_Diego%2C_Quito%2C_Ecuador%2C_2015-07-22%2C_DD_56-58_PAN.JPG/960px-Cementerio_de_San_Diego%2C_Quito%2C_Ecuador%2C_2015-07-22%2C_DD_56-58_PAN.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Diego Delso · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Cementerio_de_San_Diego,_Quito,_Ecuador,_2015-07-22,_DD_56-58_PAN.JPG"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Museo_de_la_Catedral_de_Quito%2C_Quito%2C_Ecuador%2C_2015-07-22%2C_DD_91-93_HDR.JPG/960px-Museo_de_la_Catedral_de_Quito%2C_Quito%2C_Ecuador%2C_2015-07-22%2C_DD_91-93_HDR.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Diego Delso · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Museo_de_la_Catedral_de_Quito,_Quito,_Ecuador,_2015-07-22,_DD_91-93_HDR.JPG"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Museo_de_la_Catedral_de_Quito%2C_Quito%2C_Ecuador%2C_2015-07-22%2C_DD_94-96_HDR.JPG/960px-Museo_de_la_Catedral_de_Quito%2C_Quito%2C_Ecuador%2C_2015-07-22%2C_DD_94-96_HDR.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Diego Delso · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Museo_de_la_Catedral_de_Quito,_Quito,_Ecuador,_2015-07-22,_DD_94-96_HDR.JPG"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Iglesia_de_San_Francisco%2C_Quito%2C_Ecuador%2C_2015-07-22%2C_DD_165-167_HDR.JPG/960px-Iglesia_de_San_Francisco%2C_Quito%2C_Ecuador%2C_2015-07-22%2C_DD_165-167_HDR.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Diego Delso · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Iglesia_de_San_Francisco,_Quito,_Ecuador,_2015-07-22,_DD_165-167_HDR.JPG"
      }
     ],
     "driveLinks": [],
     "itinerary": [],
     "noPhoto": false
    },
    {
     "id": "p_bo",
     "name": "Bolivia",
     "country": "Bolivia",
     "city": "La Paz",
     "iso2": "BO",
     "iata": "LPB",
     "currency": "BOB",
     "lat": -16.5,
     "lon": -68.15,
     "days": 10,
     "order": 28,
     "notes": "",
     "budget": {
      "flights": 110000,
      "transport": 3500,
      "lodging": 7000,
      "food": 7000,
      "activities": 10000,
      "carRental": 0,
      "visa": 8800,
      "misc": 0
     },
     "images": [
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Vista_del_centro_de_La_Paz.jpg/1024px-Vista_del_centro_de_La_Paz.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
       "credit": "La Paz",
       "source": "https://en.wikipedia.org/wiki/La_Paz"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Puerto_de_la_Cruz_%E2%80%93_Padre_Pio%2C_Iglesia_N._S._de_la_Paz.jpg/960px-Puerto_de_la_Cruz_%E2%80%93_Padre_Pio%2C_Iglesia_N._S._de_la_Paz.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Cayambe · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Puerto_de_la_Cruz_%E2%80%93_Padre_Pio,_Iglesia_N._S._de_la_Paz.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Puerto_de_la_Cruz_%E2%80%93_Ntra._Sra._de_la_Paz%2C_ext._from_left.jpg/960px-Puerto_de_la_Cruz_%E2%80%93_Ntra._Sra._de_la_Paz%2C_ext._from_left.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Cayambe · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Puerto_de_la_Cruz_%E2%80%93_Ntra._Sra._de_la_Paz,_ext._from_left.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Puerto_de_la_Cruz_%E2%80%93_Ntra._Sra._de_la_Paz%2C_plaque.jpg/960px-Puerto_de_la_Cruz_%E2%80%93_Ntra._Sra._de_la_Paz%2C_plaque.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Cayambe · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Puerto_de_la_Cruz_%E2%80%93_Ntra._Sra._de_la_Paz,_plaque.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Iglesia_Ntra_Sra_de_la_Paz_%E2%80%93_Consecration_plaque_2006_large.jpg/960px-Iglesia_Ntra_Sra_de_la_Paz_%E2%80%93_Consecration_plaque_2006_large.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Cayambe · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Iglesia_Ntra_Sra_de_la_Paz_%E2%80%93_Consecration_plaque_2006_large.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Puerto_de_la_Cruz_%E2%80%93_Ntra._Sra._de_la_Paz%2C_lateral_entrance.jpg/960px-Puerto_de_la_Cruz_%E2%80%93_Ntra._Sra._de_la_Paz%2C_lateral_entrance.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Cayambe · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Puerto_de_la_Cruz_%E2%80%93_Ntra._Sra._de_la_Paz,_lateral_entrance.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Puerto_de_la_Cruz%2C_Iglesia_Nuestra_Se%C3%B1ora_de_la_Paz%2C_Dec._2023a.jpg/960px-Puerto_de_la_Cruz%2C_Iglesia_Nuestra_Se%C3%B1ora_de_la_Paz%2C_Dec._2023a.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Cayambe · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Puerto_de_la_Cruz,_Iglesia_Nuestra_Se%C3%B1ora_de_la_Paz,_Dec._2023a.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Puerto_de_la_Cruz%2C_Paseo_del_Acebuche_%E2%80%93_Iglesia_Nuestra_Se%C3%B1ora_de_la_Paz.jpg/960px-Puerto_de_la_Cruz%2C_Paseo_del_Acebuche_%E2%80%93_Iglesia_Nuestra_Se%C3%B1ora_de_la_Paz.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Cayambe · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Puerto_de_la_Cruz,_Paseo_del_Acebuche_%E2%80%93_Iglesia_Nuestra_Se%C3%B1ora_de_la_Paz.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Nuestra_Se%C3%B1ora_de_La_Paz_de_noche.jpg/960px-Nuestra_Se%C3%B1ora_de_La_Paz_de_noche.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Parallelepiped09 · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Nuestra_Se%C3%B1ora_de_La_Paz_de_noche.jpg"
      }
     ],
     "driveLinks": [],
     "itinerary": [],
     "noPhoto": false
    },
    {
     "id": "p_gt",
     "name": "Guatemala",
     "country": "Guatemala",
     "city": "Antigua Guatemala",
     "iso2": "GT",
     "iata": "GUA",
     "currency": "GTQ",
     "lat": 14.56,
     "lon": -90.73,
     "days": 10,
     "order": 29,
     "notes": "",
     "budget": {
      "flights": 120000,
      "transport": 4000,
      "lodging": 7500,
      "food": 7000,
      "activities": 7800,
      "carRental": 0,
      "visa": 4500,
      "misc": 2500
     },
     "images": [
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Antigua_-_Arco.jpg/1024px-Antigua_-_Arco.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
       "credit": "Antigua Guatemala",
       "source": "https://en.wikipedia.org/wiki/Antigua_Guatemala"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Arco_de_Santa_Catalina_Antigua_Guatemala_edit2.jpg/960px-Arco_de_Santa_Catalina_Antigua_Guatemala_edit2.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Adalberto.H.Vega\nuploaded and derivative work: MrPanyGoff · CC BY 3.0",
       "source": "https://commons.wikimedia.org/wiki/File:Arco_de_Santa_Catalina_Antigua_Guatemala_edit2.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/La_Merced_Church_Antigua_Guatemala_2.jpg/960px-La_Merced_Church_Antigua_Guatemala_2.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Rambling Traveler\nderivative work: MrPanyGoff · CC BY-SA 3.0",
       "source": "https://commons.wikimedia.org/wiki/File:La_Merced_Church_Antigua_Guatemala_2.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Antigua_Guatemala_Street.jpg/960px-Antigua_Guatemala_Street.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "CIA Factbook · Public domain",
       "source": "https://commons.wikimedia.org/wiki/File:Antigua_Guatemala_Street.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Santa_Catalina_Arch_-_Antigua_Guatemala_Feb_2020.jpg/960px-Santa_Catalina_Arch_-_Antigua_Guatemala_Feb_2020.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Chad Davis · CC BY-SA 2.0",
       "source": "https://commons.wikimedia.org/wiki/File:Santa_Catalina_Arch_-_Antigua_Guatemala_Feb_2020.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Antigua_Guatemala_1980_-_Fuente.jpg/960px-Antigua_Guatemala_1980_-_Fuente.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Infrogmation · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Antigua_Guatemala_1980_-_Fuente.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Antigua_Guatemala_1975_-_Church.jpg/960px-Antigua_Guatemala_1975_-_Church.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Deceased parent of Infrogmation.\n\nPlease credit \"Family photos of Infr · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Antigua_Guatemala_1975_-_Church.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Antigua_Guatemala_1981_-_Parque_Belen.jpg/960px-Antigua_Guatemala_1981_-_Parque_Belen.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Infrogmation · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Antigua_Guatemala_1981_-_Parque_Belen.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Antigua_Guatemala_%282004%29_11.jpg/960px-Antigua_Guatemala_%282004%29_11.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "LBM1948 · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Antigua_Guatemala_(2004)_11.jpg"
      }
     ],
     "driveLinks": [],
     "itinerary": [],
     "noPhoto": false
    },
    {
     "id": "p_ni",
     "name": "Nicaragua",
     "country": "Nicaragua",
     "city": "Granada",
     "iso2": "NI",
     "iata": "MGA",
     "currency": "NIO",
     "lat": 11.93,
     "lon": -85.96,
     "days": 10,
     "order": 30,
     "notes": "",
     "budget": {
      "flights": 120000,
      "transport": 3500,
      "lodging": 6500,
      "food": 6500,
      "activities": 2000,
      "carRental": 0,
      "visa": 3000,
      "misc": 2500
     },
     "images": [
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Granada_%2825987961022%29.jpg/1024px-Granada_%2825987961022%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
       "credit": "Granada",
       "source": "https://en.wikipedia.org/wiki/Granada"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Granada%2C_Colorado_2007.jpg/960px-Granada%2C_Colorado_2007.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Pmsyyz · CC BY-SA 3.0",
       "source": "https://commons.wikimedia.org/wiki/File:Granada,_Colorado_2007.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Granada_03.jpg/960px-Granada_03.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Mihael Grmek · CC BY-SA 3.0",
       "source": "https://commons.wikimedia.org/wiki/File:Granada_03.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Relief_CoA_angle_Granada_Spain.jpg/960px-Relief_CoA_angle_Granada_Spain.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Jebulon · CC0",
       "source": "https://commons.wikimedia.org/wiki/File:Relief_CoA_angle_Granada_Spain.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Arabs_Baths_of_Alhama_de_Granada_in_Andalusia%2C_Spain.jpg/960px-Arabs_Baths_of_Alhama_de_Granada_in_Andalusia%2C_Spain.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "SuperCar-RoadTrip.fr from Bordeaux, France · CC BY 2.0",
       "source": "https://commons.wikimedia.org/wiki/File:Arabs_Baths_of_Alhama_de_Granada_in_Andalusia,_Spain.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/View_of_Albaic%C3%ADn_from_Alhambra._Granada%2C_Spain.jpg/960px-View_of_Albaic%C3%ADn_from_Alhambra._Granada%2C_Spain.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Ввласенко · CC BY-SA 3.0",
       "source": "https://commons.wikimedia.org/wiki/File:View_of_Albaic%C3%ADn_from_Alhambra._Granada,_Spain.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/2/2d/Old_Market_Building_of_Granada%2C_Nicaragua_in_1880.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
       "credit": "Cumbia del Rio · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Old_Market_Building_of_Granada,_Nicaragua_in_1880.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Granada_2025.jpg/960px-Granada_2025.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Wikiolo · CC BY 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Granada_2025.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Aerial_view_of_Granada%2C_Colorado.jpg/960px-Aerial_view_of_Granada%2C_Colorado.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Quintin Soloviev · CC BY 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Aerial_view_of_Granada,_Colorado.jpg"
      }
     ],
     "driveLinks": [],
     "itinerary": [],
     "noPhoto": false
    },
    {
     "id": "p_mx",
     "name": "Mexico",
     "country": "Mexico",
     "city": "Mexico City",
     "iso2": "MX",
     "iata": "MEX",
     "currency": "MXN",
     "lat": 19.43,
     "lon": -99.13,
     "days": 10,
     "order": 31,
     "notes": "",
     "budget": {
      "flights": 100000,
      "transport": 4500,
      "lodging": 14500,
      "food": 9000,
      "activities": 4000,
      "carRental": 7000,
      "visa": 4800,
      "misc": 3000
     },
     "images": [
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Sobrevuelos_CDMX_HJ2A4913_%2825514321687%29_%28cropped%29.jpg/1024px-Sobrevuelos_CDMX_HJ2A4913_%2825514321687%29_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
       "credit": "Mexico City",
       "source": "https://en.wikipedia.org/wiki/Mexico_City"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Mexico_City_Palacio_de_bellas_artes.jpg/960px-Mexico_City_Palacio_de_bellas_artes.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Jeses · CC BY-SA 2.5",
       "source": "https://commons.wikimedia.org/wiki/File:Mexico_City_Palacio_de_bellas_artes.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Palacio_de_Bellas_Artes%2C_M%C3%A9xico_D.F.%2C_M%C3%A9xico%2C_2013-10-13%2C_DD_40.jpg/960px-Palacio_de_Bellas_Artes%2C_M%C3%A9xico_D.F.%2C_M%C3%A9xico%2C_2013-10-13%2C_DD_40.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Diego Delso · CC BY-SA 3.0",
       "source": "https://commons.wikimedia.org/wiki/File:Palacio_de_Bellas_Artes,_M%C3%A9xico_D.F.,_M%C3%A9xico,_2013-10-13,_DD_40.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Window_shopping_in_Mexico_City.jpg/960px-Window_shopping_in_Mexico_City.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Tomascastelazo · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Window_shopping_in_Mexico_City.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Hotel_Plaza_Suites_Mexico_City_2020.jpg/960px-Hotel_Plaza_Suites_Mexico_City_2020.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Carlos Valenzuela · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Hotel_Plaza_Suites_Mexico_City_2020.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Av._de_la_Republica%2C_Mexico_City_2020.jpg/960px-Av._de_la_Republica%2C_Mexico_City_2020.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Carlos Valenzuela · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Av._de_la_Republica,_Mexico_City_2020.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Mitikah_tower_from_north_Mexico_City_2020.jpg/960px-Mitikah_tower_from_north_Mexico_City_2020.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Carlos Valenzuela · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Mitikah_tower_from_north_Mexico_City_2020.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Latinoamerica_tower%2C_Mexico_City_2022_p2.jpg/960px-Latinoamerica_tower%2C_Mexico_City_2022_p2.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Carlos Valenzuela · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Latinoamerica_tower,_Mexico_City_2022_p2.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Memorial_-_Leon_Trotsky_House_Museum_-_Coyoacan_-_Mexico_City_-_Mexico.jpg/960px-Memorial_-_Leon_Trotsky_House_Museum_-_Coyoacan_-_Mexico_City_-_Mexico.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "This picture has been taken by Oleg Yunakov. Contact e-mail: yunakovgm · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Memorial_-_Leon_Trotsky_House_Museum_-_Coyoacan_-_Mexico_City_-_Mexico.jpg"
      }
     ],
     "driveLinks": [],
     "itinerary": [],
     "noPhoto": false
    },
    {
     "id": "p_kg",
     "name": "Kyrgyzstan",
     "country": "Kyrgyzstan",
     "city": "Bishkek",
     "iso2": "KG",
     "iata": "FRU",
     "currency": "KGS",
     "lat": 42.87,
     "lon": 74.59,
     "days": 10,
     "order": 32,
     "notes": "",
     "budget": {
      "flights": 32000,
      "transport": 8000,
      "lodging": 13000,
      "food": 7000,
      "activities": 6000,
      "carRental": 8000,
      "visa": 0,
      "misc": 2500
     },
     "images": [
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Bishkek_City%27s_business_center.jpg/1024px-Bishkek_City%27s_business_center.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
       "credit": "Bishkek",
       "source": "https://en.wikipedia.org/wiki/Bishkek"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Bishkek.jpg/960px-Bishkek.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Almutamid · Public domain",
       "source": "https://commons.wikimedia.org/wiki/File:Bishkek.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Bishkek_03-2016_img11_Chuy_Prospekt.jpg/960px-Bishkek_03-2016_img11_Chuy_Prospekt.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "A.Savin · FAL",
       "source": "https://commons.wikimedia.org/wiki/File:Bishkek_03-2016_img11_Chuy_Prospekt.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/6/64/Bishkek_Montage_2020.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
       "credit": "Абдырашит Сатылганов, Intergelpo, Vmenkov, Ondřej Žváček, Almutamid · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Bishkek_Montage_2020.png"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/%D0%91%D0%B8%D1%88%D0%BA%D0%B5%D0%BA%2C_%D0%BC%D1%8D%D1%80%D0%B8%D1%8F_%D1%81%D0%B2%D0%B5%D1%80%D1%85%D1%83.jpg/960px-%D0%91%D0%B8%D1%88%D0%BA%D0%B5%D0%BA%2C_%D0%BC%D1%8D%D1%80%D0%B8%D1%8F_%D1%81%D0%B2%D0%B5%D1%80%D1%85%D1%83.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Nikolai Bulykin · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:%D0%91%D0%B8%D1%88%D0%BA%D0%B5%D0%BA,_%D0%BC%D1%8D%D1%80%D0%B8%D1%8F_%D1%81%D0%B2%D0%B5%D1%80%D1%85%D1%83.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Monument%2C_South_Gate%2C_Bishkek%2C_Kyrgyzstan.jpg/960px-Monument%2C_South_Gate%2C_Bishkek%2C_Kyrgyzstan.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Vilya Shoni · CC BY 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Monument,_South_Gate,_Bishkek,_Kyrgyzstan.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Changing_of_the_guard_Ala-Too_Square%2C_Bishkek%2C_Kyrgyzstan.jpg/960px-Changing_of_the_guard_Ala-Too_Square%2C_Bishkek%2C_Kyrgyzstan.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Petar Milošević · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Changing_of_the_guard_Ala-Too_Square,_Bishkek,_Kyrgyzstan.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Bishkek_-_55489252778.jpg/960px-Bishkek_-_55489252778.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "xiquinhosilva · CC BY 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Bishkek_-_55489252778.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Bishkek_-_55489527100.jpg/960px-Bishkek_-_55489527100.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "xiquinhosilva · CC BY 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Bishkek_-_55489527100.jpg"
      }
     ],
     "driveLinks": [],
     "itinerary": [],
     "noPhoto": false
    },
    {
     "id": "p_uz",
     "name": "Uzbekistan",
     "country": "Uzbekistan",
     "city": "Tashkent",
     "iso2": "UZ",
     "iata": "TAS",
     "currency": "UZS",
     "lat": 41.3,
     "lon": 69.24,
     "days": 10,
     "order": 33,
     "notes": "",
     "budget": {
      "flights": 30000,
      "transport": 14000,
      "lodging": 14000,
      "food": 7000,
      "activities": 2000,
      "carRental": 0,
      "visa": 3000,
      "misc": 2500
     },
     "images": [
      {
       "url": "https://upload.wikimedia.org/wikipedia/en/thumb/f/f6/Nest_One_Tashkent.jpg/1024px-Nest_One_Tashkent.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
       "credit": "Tashkent",
       "source": "https://en.wikipedia.org/wiki/Tashkent"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/0/08/Aerial_view_of_Tashkent%2C_Uzbekistan.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
       "credit": "ssr (talk) · Public domain",
       "source": "https://commons.wikimedia.org/wiki/File:Aerial_view_of_Tashkent,_Uzbekistan.JPG"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Winter_in_Tashkent_7.JPG/960px-Winter_in_Tashkent_7.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Guidecity · CC BY-SA 3.0",
       "source": "https://commons.wikimedia.org/wiki/File:Winter_in_Tashkent_7.JPG"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Esploratore_veloce_Tashkent%2C_1936_-_san_dl_SAN_IMG-00001374.jpg/960px-Esploratore_veloce_Tashkent%2C_1936_-_san_dl_SAN_IMG-00001374.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "UnknownUnknown · Public domain",
       "source": "https://commons.wikimedia.org/wiki/File:Esploratore_veloce_Tashkent,_1936_-_san_dl_SAN_IMG-00001374.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Trees_in_Tashkent_on_February_2023.jpg/960px-Trees_in_Tashkent_on_February_2023.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Umarxon III · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Trees_in_Tashkent_on_February_2023.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Trees_in_Tashkent_on_February_2023_2.jpg/960px-Trees_in_Tashkent_on_February_2023_2.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Umarxon III · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Trees_in_Tashkent_on_February_2023_2.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/%D0%A2%D0%B0%D1%88%D0%BA%D0%B5%D0%BD%D1%82%2C_%D0%9C%D0%B0%D0%BB%D0%B0%D1%8F_%D0%BA%D0%BE%D0%BB%D1%8C%D1%86%D0%B5%D0%B2%D0%B0%D1%8F_%D1%83_%D0%B2%D0%BE%D0%BA%D0%B7%D0%B0%D0%BB%D0%B0%2C_%D0%9C%D0%90%D0%97.jpg/960px-%D0%A2%D0%B0%D1%88%D0%BA%D0%B5%D0%BD%D1%82%2C_%D0%9C%D0%B0%D0%BB%D0%B0%D1%8F_%D0%BA%D0%BE%D0%BB%D1%8C%D1%86%D0%B5%D0%B2%D0%B0%D1%8F_%D1%83_%D0%B2%D0%BE%D0%BA%D0%B7%D0%B0%D0%BB%D0%B0%2C_%D0%9C%D0%90%D0%97.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Nikolai Bulykin · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:%D0%A2%D0%B0%D1%88%D0%BA%D0%B5%D0%BD%D1%82,_%D0%9C%D0%B0%D0%BB%D0%B0%D1%8F_%D0%BA%D0%BE%D0%BB%D1%8C%D1%86%D0%B5%D0%B2%D0%B0%D1%8F_%D1%83_%D0%B2%D0%BE%D0%BA%D0%B7%D0%B0%D0%BB%D0%B0,_%D0%9C%D0%90%D0%97.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Tashkent_2023.jpg/960px-Tashkent_2023.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Basiyra · CC BY 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Tashkent_2023.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Uzum_Tezkor_courier_in_Tashkent%2C_October_2024.jpg/960px-Uzum_Tezkor_courier_in_Tashkent%2C_October_2024.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Прикли · CC BY 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Uzum_Tezkor_courier_in_Tashkent,_October_2024.jpg"
      }
     ],
     "driveLinks": [],
     "itinerary": [],
     "noPhoto": false
    },
    {
     "id": "p_tj",
     "name": "Tajikistan",
     "country": "Tajikistan",
     "city": "Dushanbe",
     "iso2": "TJ",
     "iata": "DYU",
     "currency": "TJS",
     "lat": 38.56,
     "lon": 68.79,
     "days": 10,
     "order": 34,
     "notes": "",
     "budget": {
      "flights": 40000,
      "transport": 9500,
      "lodging": 9000,
      "food": 6000,
      "activities": 3000,
      "carRental": 11000,
      "visa": 4000,
      "misc": 3000
     },
     "images": [
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Panorama_with_buildings%2C_Dushanbe.jpg/1024px-Panorama_with_buildings%2C_Dushanbe.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
       "credit": "Dushanbe",
       "source": "https://en.wikipedia.org/wiki/Dushanbe"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Buildings_in_the_city_of_Dushanbe_05.jpg/960px-Buildings_in_the_city_of_Dushanbe_05.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Шухрат Саъдиев · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Buildings_in_the_city_of_Dushanbe_05.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Novruz_2022_in_Dushanbe_01.jpg/960px-Novruz_2022_in_Dushanbe_01.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Шухрат Саъдиев · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Novruz_2022_in_Dushanbe_01.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/a/af/US_Embassy_in_Dushanbe%2C_Tajikistan.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
       "credit": "United States Department of State · Public domain",
       "source": "https://commons.wikimedia.org/wiki/File:US_Embassy_in_Dushanbe,_Tajikistan.png"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Dushanbe_park.jpg/960px-Dushanbe_park.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Nikolamikovic82 · CC0",
       "source": "https://commons.wikimedia.org/wiki/File:Dushanbe_park.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Tulip_of_Dushanbe.jpg/960px-Tulip_of_Dushanbe.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Zolfeqar Fatihzadeh · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Tulip_of_Dushanbe.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Tulip_of_Dushanbe_%2836507%29.jpg/960px-Tulip_of_Dushanbe_%2836507%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Zolfeqar Fatihzadeh · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Tulip_of_Dushanbe_(36507).jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Tulip_of_Dushanbe_%2896322%29.jpg/960px-Tulip_of_Dushanbe_%2896322%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Zolfeqar Fatihzadeh · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Tulip_of_Dushanbe_(96322).jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Tulip_of_Dushanbe_%2889670%29.jpg/960px-Tulip_of_Dushanbe_%2889670%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Zolfeqar Fatihzadeh · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Tulip_of_Dushanbe_(89670).jpg"
      }
     ],
     "driveLinks": [],
     "itinerary": [],
     "noPhoto": false
    },
    {
     "id": "p_kz",
     "name": "Kazakhstan",
     "country": "Kazakhstan",
     "city": "Almaty",
     "iso2": "KZ",
     "iata": "ALA",
     "currency": "KZT",
     "lat": 43.24,
     "lon": 76.89,
     "days": 10,
     "order": 35,
     "notes": "",
     "budget": {
      "flights": 30000,
      "transport": 4500,
      "lodging": 17000,
      "food": 9000,
      "activities": 4300,
      "carRental": 8000,
      "visa": 0,
      "misc": 3000
     },
     "images": [
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Almaty_K%C3%B6k_T%C3%B6be.jpg/1024px-Almaty_K%C3%B6k_T%C3%B6be.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
       "credit": "Almaty",
       "source": "https://en.wikipedia.org/wiki/Almaty"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Ascension_Cathedral%2C_Almaty_KZ.JPG/960px-Ascension_Cathedral%2C_Almaty_KZ.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Stomac · CC BY 3.0",
       "source": "https://commons.wikimedia.org/wiki/File:Ascension_Cathedral,_Almaty_KZ.JPG"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/%D0%9A%D0%BE%D1%81%D0%BC%D0%BE%D1%81%D1%82%D0%B0%D0%BD%D1%86%D0%B8%D1%8F.jpg/960px-%D0%9A%D0%BE%D1%81%D0%BC%D0%BE%D1%81%D1%82%D0%B0%D0%BD%D1%86%D0%B8%D1%8F.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Dina Julayeva · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:%D0%9A%D0%BE%D1%81%D0%BC%D0%BE%D1%81%D1%82%D0%B0%D0%BD%D1%86%D0%B8%D1%8F.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/%22Almaty%22ensiklopediasy%2C1983_jylgy_basylym.jpg/960px-%22Almaty%22ensiklopediasy%2C1983_jylgy_basylym.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Bekbal · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:%22Almaty%22ensiklopediasy,1983_jylgy_basylym.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Ascension_Cathedral%2C_Almaty_%28LRM_20240402_221113-RR%29.jpg/960px-Ascension_Cathedral%2C_Almaty_%28LRM_20240402_221113-RR%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Matti Blume · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Ascension_Cathedral,_Almaty_(LRM_20240402_221113-RR).jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/7/72/Almaty_1912.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
       "credit": "Engineer Popov · Public domain",
       "source": "https://commons.wikimedia.org/wiki/File:Almaty_1912.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Almaty_K%C3%B6k_T%C3%B6be.jpg/960px-Almaty_K%C3%B6k_T%C3%B6be.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Dauren Nabijan · CC0",
       "source": "https://commons.wikimedia.org/wiki/File:Almaty_K%C3%B6k_T%C3%B6be.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Almaty%2C_Kazakhstan_%28%D0%90%D0%BB%D0%BC%D0%B0%D1%82%D1%8B%2C_%D2%9A%D0%B0%D0%B7%D0%B0%D2%9B%D1%81%D1%82%D0%B0%D0%BD%29_meal_July_2026_-_2.jpg/960px-Almaty%2C_Kazakhstan_%28%D0%90%D0%BB%D0%BC%D0%B0%D1%82%D1%8B%2C_%D2%9A%D0%B0%D0%B7%D0%B0%D2%9B%D1%81%D1%82%D0%B0%D0%BD%29_meal_July_2026_-_2.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Sharon Hahn Darlin · CC BY 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Almaty,_Kazakhstan_(%D0%90%D0%BB%D0%BC%D0%B0%D1%82%D1%8B,_%D2%9A%D0%B0%D0%B7%D0%B0%D2%9B%D1%81%D1%82%D0%B0%D0%BD)_meal_July_2026_-_2.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Almaty%2C_Kazakhstan_%28%D0%90%D0%BB%D0%BC%D0%B0%D1%82%D1%8B%2C_%D2%9A%D0%B0%D0%B7%D0%B0%D2%9B%D1%81%D1%82%D0%B0%D0%BD_-_Beshbarmak_%D0%B1%D0%B5%D1%88%D0%B1%D0%B0%D1%80%D0%BC%D0%B0%D2%9B.jpg/960px-Almaty%2C_Kazakhstan_%28%D0%90%D0%BB%D0%BC%D0%B0%D1%82%D1%8B%2C_%D2%9A%D0%B0%D0%B7%D0%B0%D2%9B%D1%81%D1%82%D0%B0%D0%BD_-_Beshbarmak_%D0%B1%D0%B5%D1%88%D0%B1%D0%B0%D1%80%D0%BC%D0%B0%D2%9B.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Sharon Hahn Darlin · CC BY 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Almaty,_Kazakhstan_(%D0%90%D0%BB%D0%BC%D0%B0%D1%82%D1%8B,_%D2%9A%D0%B0%D0%B7%D0%B0%D2%9B%D1%81%D1%82%D0%B0%D0%BD_-_Beshbarmak_%D0%B1%D0%B5%D1%88%D0%B1%D0%B0%D1%80%D0%BC%D0%B0%D2%9B.jpg"
      }
     ],
     "driveLinks": [],
     "itinerary": [],
     "noPhoto": false
    },
    {
     "id": "p_am",
     "name": "Armenia",
     "country": "Armenia",
     "city": "Yerevan",
     "iso2": "AM",
     "iata": "EVN",
     "currency": "AMD",
     "lat": 40.18,
     "lon": 44.51,
     "days": 10,
     "order": 36,
     "notes": "",
     "budget": {
      "flights": 45000,
      "transport": 5500,
      "lodging": 18000,
      "food": 8000,
      "activities": 3800,
      "carRental": 7000,
      "visa": 0,
      "misc": 2500
     },
     "images": [
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Mount_Ararat_and_the_Yerevan_skyline_%28June_2018%29.jpg/1024px-Mount_Ararat_and_the_Yerevan_skyline_%28June_2018%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
       "credit": "Yerevan",
       "source": "https://en.wikipedia.org/wiki/Yerevan"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Mount_Ararat_and_the_Yerevan_skyline.jpg/960px-Mount_Ararat_and_the_Yerevan_skyline.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Սէրուժ Ուրիշեան (Serouj Ourishian) · CC BY-SA 3.0",
       "source": "https://commons.wikimedia.org/wiki/File:Mount_Ararat_and_the_Yerevan_skyline.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Yerevan%2C_Cascade_of_Yerevan%2C_Art_2%2C_Armenia.jpg/960px-Yerevan%2C_Cascade_of_Yerevan%2C_Art_2%2C_Armenia.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Vyacheslav Argenberg · CC BY 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Yerevan,_Cascade_of_Yerevan,_Art_2,_Armenia.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Yerevan%2C_Cascade_of_Yerevan%2C_Armenia.jpg/960px-Yerevan%2C_Cascade_of_Yerevan%2C_Armenia.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Vyacheslav Argenberg · CC BY 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Yerevan,_Cascade_of_Yerevan,_Armenia.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Yerevan%2C_Divers%2C_Statue%2C_Cascade_of_Yerevan%2C_Armenia.jpg/960px-Yerevan%2C_Divers%2C_Statue%2C_Cascade_of_Yerevan%2C_Armenia.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Vyacheslav Argenberg · CC BY 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Yerevan,_Divers,_Statue,_Cascade_of_Yerevan,_Armenia.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Yerevan%2C_Tamanyan_Statue%2C_Cascade_of_Yerevan%2C_Armenia.jpg/960px-Yerevan%2C_Tamanyan_Statue%2C_Cascade_of_Yerevan%2C_Armenia.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Vyacheslav Argenberg · CC BY 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Yerevan,_Tamanyan_Statue,_Cascade_of_Yerevan,_Armenia.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Yerevan%2C_View_of_Yerevan_city%2C_Erevan%2C_Armenia.jpg/960px-Yerevan%2C_View_of_Yerevan_city%2C_Erevan%2C_Armenia.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Vyacheslav Argenberg · CC BY 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Yerevan,_View_of_Yerevan_city,_Erevan,_Armenia.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Yerevan%2C_Matenadaran%2C_Armenia.jpg/960px-Yerevan%2C_Matenadaran%2C_Armenia.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Vyacheslav Argenberg · CC BY 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Yerevan,_Matenadaran,_Armenia.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Yerevan%2C_Panoramic_view_of_Yerevan%2C_Armenia.jpg/960px-Yerevan%2C_Panoramic_view_of_Yerevan%2C_Armenia.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Vyacheslav Argenberg · CC BY 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Yerevan,_Panoramic_view_of_Yerevan,_Armenia.jpg"
      }
     ],
     "driveLinks": [],
     "itinerary": [],
     "noPhoto": false
    },
    {
     "id": "p_mtg3uzam3oauu",
     "name": "Ghana",
     "country": "Ghana",
     "city": "Accra",
     "iso2": "GH",
     "iata": "ACC",
     "currency": "GHS",
     "lat": 5.55,
     "lon": -0.2,
     "days": 10,
     "order": 37,
     "notes": "",
     "budget": {
      "flights": 140000,
      "transport": 10000,
      "lodging": 90000,
      "food": 20000,
      "activities": 6000,
      "carRental": 0,
      "visa": 9000,
      "misc": 0
     },
     "images": [
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Acca.jpg/1024px-Acca.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
       "credit": "Accra",
       "source": "https://en.wikipedia.org/wiki/Accra"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Acca.jpg/1024px-Acca.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
       "credit": "Accra",
       "source": "https://en.wikipedia.org/wiki/Accra"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/7/7b/Central_accra-2.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
       "credit": "Guido Sohne · CC BY-SA 2.0",
       "source": "https://commons.wikimedia.org/wiki/File:Central_accra-2.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Accra_02.jpg/960px-Accra_02.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Amuzujoe · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Accra_02.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Accra_settlement.jpg/960px-Accra_settlement.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Amuzujoe · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Accra_settlement.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Residential_houses_in_Accra_%CC%A0_2.jpg/960px-Residential_houses_in_Accra_%CC%A0_2.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Kwameghana · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Residential_houses_in_Accra_%CC%A0_2.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Madina_Bridge_%2C_Accra_-_Ghana._01.jpg/960px-Madina_Bridge_%2C_Accra_-_Ghana._01.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Queen Murja10 · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Madina_Bridge_,_Accra_-_Ghana._01.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Waakye_in_Accra%2C_Ghana.jpg/960px-Waakye_in_Accra%2C_Ghana.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Eberhard Cornelius · CC0",
       "source": "https://commons.wikimedia.org/wiki/File:Waakye_in_Accra,_Ghana.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Accra%2C_Ghana_%28Copernicus_2025-07-14%29.png/960px-Accra%2C_Ghana_%28Copernicus_2025-07-14%29.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "European Union, Copernicus Sentinel-2 imagery · Attribution",
       "source": "https://commons.wikimedia.org/wiki/File:Accra,_Ghana_(Copernicus_2025-07-14).png"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Accra_city_1.jpg/960px-Accra_city_1.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Cca Raheem · CC BY 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Accra_city_1.jpg"
      }
     ],
     "driveLinks": [],
     "itinerary": [],
     "noPhoto": false
    }
   ],
   "expenses": []
  },
  {
   "id": "trip_india",
   "name": "Within India",
   "kind": "domestic",
   "start": "",
   "end": "",
   "note": "Imported from India_tour_budget.xlsx",
   "defaultDays": 6,
   "categories": [
    {
     "id": "railway",
     "label": "Flights & Rail"
    },
    {
     "id": "intercity",
     "label": "Intercity Travel"
    },
    {
     "id": "lodging",
     "label": "Lodging"
    },
    {
     "id": "food",
     "label": "Food"
    },
    {
     "id": "activities",
     "label": "Activities"
    },
    {
     "id": "petrol",
     "label": "Petrol"
    },
    {
     "id": "misc",
     "label": "Misc"
    }
   ],
   "places": [
    {
     "id": "in_punjab",
     "name": "Punjab",
     "country": "Punjab",
     "city": "Amritsar",
     "iso2": "IN",
     "iata": "ATQ",
     "currency": "INR",
     "lat": 31.63,
     "lon": 74.87,
     "days": 5,
     "order": 1,
     "notes": "",
     "budget": {
      "railway": 2000,
      "intercity": 6000,
      "lodging": 5000,
      "food": 1800,
      "activities": 1000,
      "petrol": 0,
      "misc": 600
     },
     "images": [
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Golden_Temple_Amritsar_Gurudwara_%28cropped%29.jpg/1024px-Golden_Temple_Amritsar_Gurudwara_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
       "credit": "Amritsar",
       "source": "https://en.wikipedia.org/wiki/Amritsar"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Sikh_pilgrim_at_the_Golden_Temple_%28Harmandir_Sahib%29_in_Amritsar%2C_India.jpg/960px-Sikh_pilgrim_at_the_Golden_Temple_%28Harmandir_Sahib%29_in_Amritsar%2C_India.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Paulrudd · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Sikh_pilgrim_at_the_Golden_Temple_(Harmandir_Sahib)_in_Amritsar,_India.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Manji_Sahib%2C_Amritsar-India06.jpg/960px-Manji_Sahib%2C_Amritsar-India06.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Diego Delso · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Manji_Sahib,_Amritsar-India06.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/The_Golden_Temple_of_Amrithsar_7.jpg/960px-The_Golden_Temple_of_Amrithsar_7.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Shagil Kannur · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:The_Golden_Temple_of_Amrithsar_7.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Harmandir_Sahib%2C_Amritsar%2C_India.jpg/960px-Harmandir_Sahib%2C_Amritsar%2C_India.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Dey.sandip · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Harmandir_Sahib,_Amritsar,_India.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Photograph_of_the_Gothic_clock-tower_of_Amritsar%2C_by_Frederick_Gardner_Clapp%2C_16_January_1938.jpg/960px-Photograph_of_the_Gothic_clock-tower_of_Amritsar%2C_by_Frederick_Gardner_Clapp%2C_16_January_1938.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Clapp, Frederick G. (Frederick Gardner) [Frederick Gardner Clapp], 187 · Public domain",
       "source": "https://commons.wikimedia.org/wiki/File:Photograph_of_the_Gothic_clock-tower_of_Amritsar,_by_Frederick_Gardner_Clapp,_16_January_1938.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Photograph_of_the_Golden_Temple_of_Amritsar_surrounded_by_pool_and_buildings%2C_by_Frederick_Gardner_Clapp%2C_16_January_1938.jpg/960px-Photograph_of_the_Golden_Temple_of_Amritsar_surrounded_by_pool_and_buildings%2C_by_Frederick_Gardner_Clapp%2C_16_January_1938.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Clapp, Frederick G. (Frederick Gardner) [Frederick Gardner Clapp], 187 · Public domain",
       "source": "https://commons.wikimedia.org/wiki/File:Photograph_of_the_Golden_Temple_of_Amritsar_surrounded_by_pool_and_buildings,_by_Frederick_Gardner_Clapp,_16_January_1938.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Photograph_of_a_view_of_the_city_and_the_pedestrian_bridge_to_the_Golden_Temple_of_Amritsar%2C_by_Frederick_Gardner_Clapp%2C_16_January_1938.jpg/960px-Photograph_of_a_view_of_the_city_and_the_pedestrian_bridge_to_the_Golden_Temple_of_Amritsar%2C_by_Frederick_Gardner_Clapp%2C_16_January_1938.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Clapp, Frederick G. (Frederick Gardner) [Frederick Gardner Clapp], 187 · Public domain",
       "source": "https://commons.wikimedia.org/wiki/File:Photograph_of_a_view_of_the_city_and_the_pedestrian_bridge_to_the_Golden_Temple_of_Amritsar,_by_Frederick_Gardner_Clapp,_16_January_1938.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Photograph_of_a_view_of_the_pool_and_buildings_surrounding_the_Golden_Temple_of_Amritsar%2C_by_Frederick_Gardner_Clapp%2C_16_January_1938.jpg/960px-Photograph_of_a_view_of_the_pool_and_buildings_surrounding_the_Golden_Temple_of_Amritsar%2C_by_Frederick_Gardner_Clapp%2C_16_January_1938.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Clapp, Frederick G. (Frederick Gardner) [Frederick Gardner Clapp], 187 · Public domain",
       "source": "https://commons.wikimedia.org/wiki/File:Photograph_of_a_view_of_the_pool_and_buildings_surrounding_the_Golden_Temple_of_Amritsar,_by_Frederick_Gardner_Clapp,_16_January_1938.jpg"
      }
     ],
     "driveLinks": [],
     "itinerary": [
      {
       "id": "it_in_punjab_1",
       "day": 1,
       "title": "Amritsar",
       "note": "Arrive Amritsar; evening at Golden Temple, langar dinner, walk Heritage Street",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_punjab_2",
       "day": 2,
       "title": "Amritsar",
       "note": "Wagah Border retreat ceremony in the evening; Jallianwala Bagh and Partition Museum by day",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_punjab_3",
       "day": 3,
       "title": "Ludhiana",
       "note": "Travel to Ludhiana (~140km); local markets, Punjab Agricultural University campus",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_punjab_4",
       "day": 4,
       "title": "Patiala",
       "note": "Patiala's forts",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_punjab_5",
       "day": 5,
       "title": "Anandpur Sahib",
       "note": "Day trip to Anandpur Sahib (Virasat-e-Khalsa museum)",
       "cost": 0,
       "done": false
      }
     ],
     "noPhoto": false
    },
    {
     "id": "in_haryana",
     "name": "Haryana",
     "country": "Haryana",
     "city": "Kurukshetra",
     "iso2": "IN",
     "iata": "DEL",
     "currency": "INR",
     "lat": 29.97,
     "lon": 76.88,
     "days": 3,
     "order": 2,
     "notes": "",
     "budget": {
      "railway": 2000,
      "intercity": 3600,
      "lodging": 4000,
      "food": 1350,
      "activities": 750,
      "petrol": 0,
      "misc": 450
     },
     "images": [
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Kurukshetra_junction_kkde.jpg/1024px-Kurukshetra_junction_kkde.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
       "credit": "Kurukshetra",
       "source": "https://en.wikipedia.org/wiki/Kurukshetra"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/6/69/Hitopadesha.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
       "credit": "Shekhartagra · Public domain",
       "source": "https://commons.wikimedia.org/wiki/File:Hitopadesha.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Kurukshetra_yuddhamlo.jpg/960px-Kurukshetra_yuddhamlo.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "T.sujatha · CC BY-SA 3.0",
       "source": "https://commons.wikimedia.org/wiki/File:Kurukshetra_yuddhamlo.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/48_kos_parikrama.jpg/960px-48_kos_parikrama.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Manojkhurana · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:48_kos_parikrama.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Kurukshetra_Junction.jpeg/960px-Kurukshetra_Junction.jpeg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Manojkhurana · CC BY-SA 3.0",
       "source": "https://commons.wikimedia.org/wiki/File:Kurukshetra_Junction.jpeg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/9/9e/Kurukshetra_University_Gate_no_3.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
       "credit": "Shekhartagra (talk) · Public domain",
       "source": "https://commons.wikimedia.org/wiki/File:Kurukshetra_University_Gate_no_3.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Angkor_Wat-West-Galerie-Kurukshetra-18-2007-gje.jpg/960px-Angkor_Wat-West-Galerie-Kurukshetra-18-2007-gje.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Gerd Eichmann · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Angkor_Wat-West-Galerie-Kurukshetra-18-2007-gje.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Pragnya_Mohan_at_2021_National_Road_Cycling_Championship_at_Kurukshetra_-_Individual_Time_Trial.jpg/960px-Pragnya_Mohan_at_2021_National_Road_Cycling_Championship_at_Kurukshetra_-_Individual_Time_Trial.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "GabbarSher · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Pragnya_Mohan_at_2021_National_Road_Cycling_Championship_at_Kurukshetra_-_Individual_Time_Trial.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Mural_of_Guru_Nanak_at_the_Kurukshetra_fair.jpg/960px-Mural_of_Guru_Nanak_at_the_Kurukshetra_fair.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Unknown authorUnknown author · Public domain",
       "source": "https://commons.wikimedia.org/wiki/File:Mural_of_Guru_Nanak_at_the_Kurukshetra_fair.jpg"
      }
     ],
     "driveLinks": [],
     "itinerary": [
      {
       "id": "it_in_haryana_1",
       "day": 1,
       "title": "Kurukshetra",
       "note": "Arrive Kurukshetra; Brahma Sarovar, Jyotisar (Bhagavad Gita site), Panorama Science Centre",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_haryana_2",
       "day": 2,
       "title": "Panipat",
       "note": "Travel to Panipat (~90km); Panipat battlefield memorials, Kabuli Bagh Mosque",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_haryana_3",
       "day": 3,
       "title": "Surajkund / Faridabad",
       "note": "Day trip to Surajkund (crafts mela in Feb); begin return towards Chandigarh",
       "cost": 0,
       "done": false
      }
     ],
     "noPhoto": false
    },
    {
     "id": "in_himachal-pradesh",
     "name": "Himachal Pradesh",
     "country": "Himachal Pradesh",
     "city": "Shimla",
     "iso2": "IN",
     "iata": "SLV",
     "currency": "INR",
     "lat": 31.1,
     "lon": 77.17,
     "days": 10,
     "order": 3,
     "notes": "",
     "budget": {
      "railway": 3000,
      "intercity": 12000,
      "lodging": 13000,
      "food": 5500,
      "activities": 3500,
      "petrol": 1000,
      "misc": 1500
     },
     "images": [
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Landscape_of_Shimla_%2C_Himachal_Pradesh.jpg/1024px-Landscape_of_Shimla_%2C_Himachal_Pradesh.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
       "credit": "Shimla",
       "source": "https://en.wikipedia.org/wiki/Shimla"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Shimla_night.jpg/960px-Shimla_night.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "KennyOMG · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Shimla_night.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Shimla%2C_India%2C_Panoramic_view_of_Shimla_hills.jpg/960px-Shimla%2C_India%2C_Panoramic_view_of_Shimla_hills.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Vyacheslav Argenberg · CC BY 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Shimla,_India,_Panoramic_view_of_Shimla_hills.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Cityscape_of_Shimla.jpg/960px-Cityscape_of_Shimla.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Navneet Sharma · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Cityscape_of_Shimla.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Landscape_of_Shimla_%2C_Himachal_Pradesh.jpg/960px-Landscape_of_Shimla_%2C_Himachal_Pradesh.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Navneet Sharma · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Landscape_of_Shimla_,_Himachal_Pradesh.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Longwood_%28Shimla%29.jpg/960px-Longwood_%28Shimla%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "UnpetitproleX · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Longwood_(Shimla).jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Shimla_4.jpg/960px-Shimla_4.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Ganesh Mohan T · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Shimla_4.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Shimla_9.jpg/960px-Shimla_9.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Ganesh Mohan T · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Shimla_9.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shimla_12.jpg/960px-Shimla_12.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Ganesh Mohan T · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Shimla_12.jpg"
      }
     ],
     "driveLinks": [],
     "itinerary": [
      {
       "id": "it_in_himachal-pradesh_1",
       "day": 1,
       "title": "Shimla",
       "note": "Arrive Shimla; The Ridge, Mall Road, Christ Church",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_himachal-pradesh_2",
       "day": 2,
       "title": "Shimla",
       "note": "Day trip to Kufri; short trek, snow activities in season",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_himachal-pradesh_3",
       "day": 3,
       "title": "Manali",
       "note": "Travel to Manali via Kullu (~250km, ~8-9hr bus)",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_himachal-pradesh_4",
       "day": 4,
       "title": "Manali",
       "note": "Explore Old Manali cafes, Hadimba Temple, Vashisht hot springs",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_himachal-pradesh_5",
       "day": 5,
       "title": "Manali (Solang/Rohtang)",
       "note": "Day trip to Solang Valley / Rohtang Pass (permit needed); paragliding optional",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_himachal-pradesh_6",
       "day": 6,
       "title": "Kasol",
       "note": "Travel to Kasol via Bhuntar (~75km); Parvati Valley cafes",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_himachal-pradesh_7",
       "day": 7,
       "title": "Tosh / Kheerganga",
       "note": "Day hike to Tosh village, or start of Kheerganga trek",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_himachal-pradesh_8",
       "day": 8,
       "title": "McLeod Ganj (Dharamshala)",
       "note": "Travel to McLeod Ganj (~130km); Dalai Lama temple complex, Bhagsu waterfall",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_himachal-pradesh_9",
       "day": 9,
       "title": "Dalhousie",
       "note": "Travel to Dalhousie (~130km); Khajjiar 'Mini Switzerland' day trip",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_himachal-pradesh_10",
       "day": 10,
       "title": "Dalhousie",
       "note": "Dainkund Peak viewpoint, colonial-era architecture; begin return journey",
       "cost": 0,
       "done": false
      }
     ],
     "noPhoto": false
    },
    {
     "id": "in_uttarakhand",
     "name": "Uttarakhand",
     "country": "Uttarakhand",
     "city": "Haridwar",
     "iso2": "IN",
     "iata": "DED",
     "currency": "INR",
     "lat": 29.95,
     "lon": 78.16,
     "days": 10,
     "order": 4,
     "notes": "",
     "budget": {
      "railway": 2000,
      "intercity": 13000,
      "lodging": 13000,
      "food": 4500,
      "activities": 2500,
      "petrol": 1000,
      "misc": 1500
     },
     "images": [
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Ganga_aarti_haridwar_01.jpg/1024px-Ganga_aarti_haridwar_01.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
       "credit": "Haridwar",
       "source": "https://en.wikipedia.org/wiki/Haridwar"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Haridwar_Ganga_2.JPG/960px-Haridwar_Ganga_2.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Julian Nyča · CC BY 3.0",
       "source": "https://commons.wikimedia.org/wiki/File:Haridwar_Ganga_2.JPG"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Haridwar_View.JPG/960px-Haridwar_View.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Julian Nyča · CC BY 3.0",
       "source": "https://commons.wikimedia.org/wiki/File:Haridwar_View.JPG"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Har_Ki_Pauri%2C_Haridwar.jpg/960px-Har_Ki_Pauri%2C_Haridwar.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Livefree2013 · CC BY-SA 3.0",
       "source": "https://commons.wikimedia.org/wiki/File:Har_Ki_Pauri,_Haridwar.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Haridwar%2C_ganga_river.jpg/960px-Haridwar%2C_ganga_river.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Pandeyganesha · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Haridwar,_ganga_river.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/View_of_river_Ganga_from_the_foot_bridge_in_Haridwar_ghat.jpg/960px-View_of_river_Ganga_from_the_foot_bridge_in_Haridwar_ghat.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Subhrajyoti07 · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:View_of_river_Ganga_from_the_foot_bridge_in_Haridwar_ghat.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Haridwar_India_Kumbh.jpg/960px-Haridwar_India_Kumbh.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Vibhu0211 · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Haridwar_India_Kumbh.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Rickshaw-Driver-Haridwar_AB.jpg/960px-Rickshaw-Driver-Haridwar_AB.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Chepry 💬 (Andrzej Barabasz) 📷 🇵🇱 · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Rickshaw-Driver-Haridwar_AB.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Haridwar_Uttrakhand_hari_ki_pauri.jpg/960px-Haridwar_Uttrakhand_hari_ki_pauri.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Rahi1205 · CC BY 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Haridwar_Uttrakhand_hari_ki_pauri.jpg"
      }
     ],
     "driveLinks": [],
     "itinerary": [
      {
       "id": "it_in_uttarakhand_1",
       "day": 1,
       "title": "Haridwar",
       "note": "Arrive Haridwar; evening Ganga Aarti at Har Ki Pauri",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_uttarakhand_2",
       "day": 2,
       "title": "Rishikesh",
       "note": "Travel to Rishikesh (~25km); Laxman Jhula, Ram Jhula, riverside cafes",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_uttarakhand_3",
       "day": 3,
       "title": "Rishikesh",
       "note": "White-water rafting on the Ganges (budget operator), yoga session at an ashram",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_uttarakhand_4",
       "day": 4,
       "title": "Mussoorie",
       "note": "Travel to Mussoorie (~80km); Mall Road, Kempty Falls",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_uttarakhand_5",
       "day": 5,
       "title": "Nainital",
       "note": "Long travel day to Nainital (~280km)",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_uttarakhand_6",
       "day": 6,
       "title": "Nainital",
       "note": "Boating on Naini Lake, Naina Devi Temple, Snow View Point cable car",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_uttarakhand_7",
       "day": 7,
       "title": "Chopta",
       "note": "Travel towards Chopta/Tungnath region (~230km)",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_uttarakhand_8",
       "day": 8,
       "title": "Chopta",
       "note": "Trek to Tungnath temple and Chandrashila summit",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_uttarakhand_9",
       "day": 9,
       "title": "Auli",
       "note": "Travel to Auli via Joshimath; cable car ride, valley views",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_uttarakhand_10",
       "day": 10,
       "title": "Joshimath",
       "note": "Explore Joshimath; begin return journey",
       "cost": 0,
       "done": false
      }
     ],
     "noPhoto": false
    },
    {
     "id": "in_rajasthan",
     "name": "Rajasthan",
     "country": "Rajasthan",
     "city": "Jaipur",
     "iso2": "IN",
     "iata": "JAI",
     "currency": "INR",
     "lat": 26.92,
     "lon": 75.79,
     "days": 10,
     "order": 5,
     "notes": "",
     "budget": {
      "railway": 18000,
      "intercity": 22000,
      "lodging": 13000,
      "food": 5500,
      "activities": 3500,
      "petrol": 0,
      "misc": 1500
     },
     "images": [
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/East_facade_Hawa_Mahal_Jaipur_from_ground_level_%28July_2022%29_-_img_01.jpg/1024px-East_facade_Hawa_Mahal_Jaipur_from_ground_level_%28July_2022%29_-_img_01.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
       "credit": "Jaipur",
       "source": "https://en.wikipedia.org/wiki/Jaipur"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Jaipur_03-2016_02_Amber_Fort.jpg/960px-Jaipur_03-2016_02_Amber_Fort.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "A.Savin · FAL",
       "source": "https://commons.wikimedia.org/wiki/File:Jaipur_03-2016_02_Amber_Fort.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Jaipur_03-2016_05_Amber_Fort.jpg/960px-Jaipur_03-2016_05_Amber_Fort.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "A.Savin · FAL",
       "source": "https://commons.wikimedia.org/wiki/File:Jaipur_03-2016_05_Amber_Fort.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Jaipur_03-2016_20_City_Palace_complex.jpg/960px-Jaipur_03-2016_20_City_Palace_complex.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "A.Savin · FAL",
       "source": "https://commons.wikimedia.org/wiki/File:Jaipur_03-2016_20_City_Palace_complex.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Jaipur_03-2016_26_Hawa_Mahal_Road_at_the_City_Palace.jpg/960px-Jaipur_03-2016_26_Hawa_Mahal_Road_at_the_City_Palace.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "A.Savin · FAL",
       "source": "https://commons.wikimedia.org/wiki/File:Jaipur_03-2016_26_Hawa_Mahal_Road_at_the_City_Palace.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Jaipur_03-2016_39_Jal_Mahal_-_Water_Palace.jpg/960px-Jaipur_03-2016_39_Jal_Mahal_-_Water_Palace.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "A.Savin · FAL",
       "source": "https://commons.wikimedia.org/wiki/File:Jaipur_03-2016_39_Jal_Mahal_-_Water_Palace.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/20191218_Jaipur%2C_Gate%2C_Tulsi_Marg_Street%2C_1122_9114.jpg/960px-20191218_Jaipur%2C_Gate%2C_Tulsi_Marg_Street%2C_1122_9114.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Jakub Hałun · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:20191218_Jaipur,_Gate,_Tulsi_Marg_Street,_1122_9114.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/20191218_Jaipur%2C_Gate%2C_Tulsi_Marg_Street%2C_1120_9108.jpg/960px-20191218_Jaipur%2C_Gate%2C_Tulsi_Marg_Street%2C_1120_9108.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Jakub Hałun · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:20191218_Jaipur,_Gate,_Tulsi_Marg_Street,_1120_9108.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Portal%2C_Pitam_Niwas_Chowk%2C_City_Palace%2C_Jaipur%2C_20191218_1000_9059.jpg/960px-Portal%2C_Pitam_Niwas_Chowk%2C_City_Palace%2C_Jaipur%2C_20191218_1000_9059.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Jakub Hałun · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Portal,_Pitam_Niwas_Chowk,_City_Palace,_Jaipur,_20191218_1000_9059.jpg"
      }
     ],
     "driveLinks": [],
     "itinerary": [
      {
       "id": "it_in_rajasthan_1",
       "day": 1,
       "title": "Jaipur",
       "note": "Arrive Jaipur; Hawa Mahal, City Palace",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_rajasthan_2",
       "day": 2,
       "title": "Jaipur",
       "note": "Amber Fort (walk up), Jal Mahal viewpoint, Nahargarh Fort sunset",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_rajasthan_3",
       "day": 3,
       "title": "Pushkar",
       "note": "Travel to Pushkar (~145km); Pushkar Lake, Brahma Temple, sunset at the ghats",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_rajasthan_4",
       "day": 4,
       "title": "Jodhpur",
       "note": "Travel to Jodhpur (~200km); Blue City lanes",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_rajasthan_5",
       "day": 5,
       "title": "Jodhpur",
       "note": "Mehrangarh Fort, Jaswant Thada, Umaid Bhawan Palace exterior",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_rajasthan_6",
       "day": 6,
       "title": "Jaisalmer",
       "note": "Travel to Jaisalmer (~285km); Golden Fort (Sonar Quila), Patwon Ki Haveli",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_rajasthan_7",
       "day": 7,
       "title": "Jaisalmer",
       "note": "Desert safari and camping at Sam Sand Dunes (budget camel safari)",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_rajasthan_8",
       "day": 8,
       "title": "Bikaner",
       "note": "Travel to Bikaner (~330km); Junagarh Fort, Karni Mata Temple",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_rajasthan_9",
       "day": 9,
       "title": "Udaipur",
       "note": "Long travel day to Udaipur (~490km)",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_rajasthan_10",
       "day": 10,
       "title": "Udaipur",
       "note": "City Palace, Jagdish Temple, sunset boat ride on Lake Pichola",
       "cost": 0,
       "done": false
      }
     ],
     "noPhoto": false
    },
    {
     "id": "in_gujarat",
     "name": "Gujarat",
     "country": "Gujarat",
     "city": "Ahmedabad",
     "iso2": "IN",
     "iata": "AMD",
     "currency": "INR",
     "lat": 23.02,
     "lon": 72.57,
     "days": 7,
     "order": 6,
     "notes": "",
     "budget": {
      "railway": 4000,
      "intercity": 22000,
      "lodging": 9000,
      "food": 3150,
      "activities": 1750,
      "petrol": 1000,
      "misc": 1050
     },
     "images": [
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Sabarmati_riverside.jpg/1024px-Sabarmati_riverside.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
       "credit": "Ahmedabad",
       "source": "https://en.wikipedia.org/wiki/Ahmedabad"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/1/19/Amdavad_Aerial.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
       "credit": "JJaimin · CC BY 3.0",
       "source": "https://commons.wikimedia.org/wiki/File:Amdavad_Aerial.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Hindu_Bride%2C_Ahmedabad%2C_Gujarat.jpg/960px-Hindu_Bride%2C_Ahmedabad%2C_Gujarat.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Yann (talk) · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Hindu_Bride,_Ahmedabad,_Gujarat.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Clock_tower%2C_Ahmedabad.jpg/960px-Clock_tower%2C_Ahmedabad.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Bernard Gagnon · CC BY-SA 3.0",
       "source": "https://commons.wikimedia.org/wiki/File:Clock_tower,_Ahmedabad.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Ahmedabad_1855.jpg/960px-Ahmedabad_1855.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Various · Public domain",
       "source": "https://commons.wikimedia.org/wiki/File:Ahmedabad_1855.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Flight_above_Ahmedabad_city_2.jpg/960px-Flight_above_Ahmedabad_city_2.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Gannu03 · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Flight_above_Ahmedabad_city_2.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flight_above_Ahmedabad_city_3.jpg/960px-Flight_above_Ahmedabad_city_3.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Gannu03 · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Flight_above_Ahmedabad_city_3.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Flight_above_Ahmedabad_city_5.jpg/960px-Flight_above_Ahmedabad_city_5.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Gannu03 · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Flight_above_Ahmedabad_city_5.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Ahmedabad_Municipal_Flag.png/960px-Ahmedabad_Municipal_Flag.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Ahmedabad Municipal Corporation · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Ahmedabad_Municipal_Flag.png"
      }
     ],
     "driveLinks": [],
     "itinerary": [
      {
       "id": "it_in_gujarat_1",
       "day": 1,
       "title": "Ahmedabad",
       "note": "Arrive Ahmedabad; Sabarmati Ashram, Adalaj stepwell",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_gujarat_2",
       "day": 2,
       "title": "Rann of Kutch (Dhordo)",
       "note": "Travel towards White Rann of Kutch (~400km); Rann Utsav season ideal",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_gujarat_3",
       "day": 3,
       "title": "Rann of Kutch",
       "note": "White salt desert sunset, Kutch handicraft villages",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_gujarat_4",
       "day": 4,
       "title": "Dwarka",
       "note": "Travel to Dwarka (~330km); Dwarkadhish Temple",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_gujarat_5",
       "day": 5,
       "title": "Diu",
       "note": "Travel to Diu (~300km); beaches, Portuguese-era fort",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_gujarat_6",
       "day": 6,
       "title": "Gir National Park",
       "note": "Travel to Gir (~100km); budget jeep safari for Asiatic lions",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_gujarat_7",
       "day": 7,
       "title": "Ahmedabad",
       "note": "Return journey; optional stop at Somnath Temple en route",
       "cost": 0,
       "done": false
      }
     ],
     "noPhoto": false
    },
    {
     "id": "in_madhya-pradesh",
     "name": "Madhya Pradesh",
     "country": "Madhya Pradesh",
     "city": "Bhopal",
     "iso2": "IN",
     "iata": "BHO",
     "currency": "INR",
     "lat": 23.26,
     "lon": 77.41,
     "days": 8,
     "order": 7,
     "notes": "",
     "budget": {
      "railway": 4000,
      "intercity": 14000,
      "lodging": 14000,
      "food": 3600,
      "activities": 2000,
      "petrol": 0,
      "misc": 1200
     },
     "images": [
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Deewali_New_market.jpg/1024px-Deewali_New_market.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
       "credit": "Bhopal",
       "source": "https://en.wikipedia.org/wiki/Bhopal"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Bhopal-Union_Carbide_2.jpg/960px-Bhopal-Union_Carbide_2.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Original uploader was Simone.lippi at it.wikipedia · CC BY-SA 2.0",
       "source": "https://commons.wikimedia.org/wiki/File:Bhopal-Union_Carbide_2.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/3/37/Bhopal-Union_Carbide_1_crop_memorial.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
       "credit": "The original uploader was Simone.lippi at Italian Wikipedia. · CC BY-SA 2.0",
       "source": "https://commons.wikimedia.org/wiki/File:Bhopal-Union_Carbide_1_crop_memorial.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Birla_Mandir_Bhopal_Side_view.jpg/960px-Birla_Mandir_Bhopal_Side_view.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Suyash Dwivedi · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Birla_Mandir_Bhopal_Side_view.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Kamlapati_Setu_%26_bridge_Lower_lake%2C_Bhopal.jpg/960px-Kamlapati_Setu_%26_bridge_Lower_lake%2C_Bhopal.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Suyash Dwivedi · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Kamlapati_Setu_%26_bridge_Lower_lake,_Bhopal.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Subhas_Bazaar%2C_Jumerati_bazaar_old_Bhopal.jpg/960px-Subhas_Bazaar%2C_Jumerati_bazaar_old_Bhopal.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Suyash Dwivedi · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Subhas_Bazaar,_Jumerati_bazaar_old_Bhopal.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Itwara_road%2C_Bhopal.jpg/960px-Itwara_road%2C_Bhopal.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Suyash Dwivedi · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Itwara_road,_Bhopal.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Wall_art_of_Raja_bhoj_airport%2C_Bhopal%2C_Madhya_Pradesh%2C_India.jpg/960px-Wall_art_of_Raja_bhoj_airport%2C_Bhopal%2C_Madhya_Pradesh%2C_India.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Dev Jadiya · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Wall_art_of_Raja_bhoj_airport,_Bhopal,_Madhya_Pradesh,_India.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/e/e4/Vishnu%2C_10th_century_CE%2C_Bhopal%2C_Bhopal_State_Museum.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
       "credit": "SpeakingArch · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Vishnu,_10th_century_CE,_Bhopal,_Bhopal_State_Museum.jpg"
      }
     ],
     "driveLinks": [],
     "itinerary": [
      {
       "id": "it_in_madhya-pradesh_1",
       "day": 1,
       "title": "Bhopal",
       "note": "Arrive Bhopal; Upper/Lower Lake boating, old city bazaars",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_madhya-pradesh_2",
       "day": 2,
       "title": "Sanchi (day trip)",
       "note": "Day trip to Sanchi Stupa (~45km) and back",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_madhya-pradesh_3",
       "day": 3,
       "title": "Pachmarhi",
       "note": "Travel to Pachmarhi (~210km); Bee Falls, Pandav Caves",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_madhya-pradesh_4",
       "day": 4,
       "title": "Pachmarhi",
       "note": "Trek to Dhoopgarh sunset point, Jata Shankar caves",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_madhya-pradesh_5",
       "day": 5,
       "title": "Khajuraho",
       "note": "Long travel day to Khajuraho (~350km)",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_madhya-pradesh_6",
       "day": 6,
       "title": "Khajuraho",
       "note": "Explore Western Group temples (UNESCO site)",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_madhya-pradesh_7",
       "day": 7,
       "title": "Orchha",
       "note": "Travel to Orchha (~180km); riverside cenotaphs, Orchha Fort",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_madhya-pradesh_8",
       "day": 8,
       "title": "Orchha",
       "note": "Ram Raja Temple, sunset at Betwa River; begin return journey",
       "cost": 0,
       "done": false
      }
     ],
     "noPhoto": false
    },
    {
     "id": "in_uttar-pradesh",
     "name": "Uttar Pradesh",
     "country": "Uttar Pradesh",
     "city": "Agra",
     "iso2": "IN",
     "iata": "AGR",
     "currency": "INR",
     "lat": 27.18,
     "lon": 78.02,
     "days": 8,
     "order": 8,
     "notes": "",
     "budget": {
      "railway": 2000,
      "intercity": 13000,
      "lodging": 16000,
      "food": 3600,
      "activities": 2000,
      "petrol": 0,
      "misc": 1200
     },
     "images": [
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Taj_Mahal%2C_Agra%2C_India.jpg/1024px-Taj_Mahal%2C_Agra%2C_India.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
       "credit": "Agra",
       "source": "https://en.wikipedia.org/wiki/Agra"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Taj_Mahal_in_March_2004.jpg/960px-Taj_Mahal_in_March_2004.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Dhirad, picture edited by J. A. Knudsen · CC BY-SA 3.0",
       "source": "https://commons.wikimedia.org/wiki/File:Taj_Mahal_in_March_2004.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Macaque_India_3.jpg/960px-Macaque_India_3.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Thomas Schoch · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Macaque_India_3.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/El_Taj_Mahal-Agra_India0023.JPG/960px-El_Taj_Mahal-Agra_India0023.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Diego Delso · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:El_Taj_Mahal-Agra_India0023.JPG"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Taj_Mahal%2C_Agra%2C_India.jpg/960px-Taj_Mahal%2C_Agra%2C_India.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Yann (talk) · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Taj_Mahal,_Agra,_India.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Taj_Mahal%2C_Agra%2C_India_edit2.jpg/960px-Taj_Mahal%2C_Agra%2C_India_edit2.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Yann; edited by King of Hearts · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Taj_Mahal,_Agra,_India_edit2.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Taj_Mahal%2C_Agra%2C_India_edit3.jpg/960px-Taj_Mahal%2C_Agra%2C_India_edit3.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Taj_Mahal,_Agra,_India_edit2.jpg: Yann; edited by King of Hearts\nderiv · CC BY-SA 3.0",
       "source": "https://commons.wikimedia.org/wiki/File:Taj_Mahal,_Agra,_India_edit3.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Sikh_man%2C_Agra_10.jpg/960px-Sikh_man%2C_Agra_10.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Yann · CC BY-SA 3.0",
       "source": "https://commons.wikimedia.org/wiki/File:Sikh_man,_Agra_10.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Agra_03-2016_14_Agra_Fort.jpg/960px-Agra_03-2016_14_Agra_Fort.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "A.Savin · FAL",
       "source": "https://commons.wikimedia.org/wiki/File:Agra_03-2016_14_Agra_Fort.jpg"
      }
     ],
     "driveLinks": [],
     "itinerary": [
      {
       "id": "it_in_uttar-pradesh_1",
       "day": 1,
       "title": "Agra",
       "note": "Arrive Agra; sunrise at Taj Mahal",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_uttar-pradesh_2",
       "day": 2,
       "title": "Agra",
       "note": "Agra Fort, Fatehpur Sikri day trip (~40km)",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_uttar-pradesh_3",
       "day": 3,
       "title": "Mathura / Vrindavan",
       "note": "Travel to Mathura-Vrindavan (~60km); temple hopping",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_uttar-pradesh_4",
       "day": 4,
       "title": "Lucknow",
       "note": "Travel to Lucknow (~350km); Bara Imambara, Chota Imambara",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_uttar-pradesh_5",
       "day": 5,
       "title": "Lucknow",
       "note": "Hazratganj market, Rumi Darwaza, Awadhi food",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_uttar-pradesh_6",
       "day": 6,
       "title": "Ayodhya",
       "note": "Travel to Ayodhya (~135km); Ram Mandir, Saryu Ghat",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_uttar-pradesh_7",
       "day": 7,
       "title": "Varanasi",
       "note": "Travel to Varanasi (~200km); evening Ganga Aarti at Dashashwamedh Ghat",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_uttar-pradesh_8",
       "day": 8,
       "title": "Varanasi",
       "note": "Sunrise boat ride on the Ganges, old city lanes; begin return journey",
       "cost": 0,
       "done": false
      }
     ],
     "noPhoto": false
    },
    {
     "id": "in_bihar",
     "name": "Bihar",
     "country": "Bihar",
     "city": "Patna",
     "iso2": "IN",
     "iata": "PAT",
     "currency": "INR",
     "lat": 25.59,
     "lon": 85.14,
     "days": 5,
     "order": 9,
     "notes": "",
     "budget": {
      "railway": 5500,
      "intercity": 5000,
      "lodging": 6000,
      "food": 2000,
      "activities": 750,
      "petrol": 0,
      "misc": 750
     },
     "images": [
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Patna_high_court1.jpg/1024px-Patna_high_court1.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
       "credit": "Patna",
       "source": "https://en.wikipedia.org/wiki/Patna"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/River_Doon_Patna.jpg/960px-River_Doon_Patna.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "JSL595 · Public domain",
       "source": "https://commons.wikimedia.org/wiki/File:River_Doon_Patna.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Aerial_view%2C_Patna_%28314731093%29.jpg/960px-Aerial_view%2C_Patna_%28314731093%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Chandan Singh from India · CC BY 2.0",
       "source": "https://commons.wikimedia.org/wiki/File:Aerial_view,_Patna_(314731093).jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Close_wing_position_of_Elymnias_patna_%28Westwood%2C_1851%29_%E2%80%93_Blue-striped_Palmfly_MG_9956.jpg/960px-Close_wing_position_of_Elymnias_patna_%28Westwood%2C_1851%29_%E2%80%93_Blue-striped_Palmfly_MG_9956.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Sourabh.biswas003 · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Close_wing_position_of_Elymnias_patna_(Westwood,_1851)_%E2%80%93_Blue-striped_Palmfly_MG_9956.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Patna_Jn_Station.jpg/960px-Patna_Jn_Station.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Kishlay RF · CC BY-SA 3.0",
       "source": "https://commons.wikimedia.org/wiki/File:Patna_Jn_Station.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Patna_Market.jpg/960px-Patna_Market.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Abhinoor Singh Anand · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Patna_Market.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Wall_Painting_-_Patna_%282%29.jpg/960px-Wall_Painting_-_Patna_%282%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Sumitsurai · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Wall_Painting_-_Patna_(2).jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Exteriors_of_Darbhanga_house_inside_Patna_University_Campus_at_Bihar%2C_India_30.jpg/960px-Exteriors_of_Darbhanga_house_inside_Patna_University_Campus_at_Bihar%2C_India_30.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Amitabha Gupta · CC BY 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Exteriors_of_Darbhanga_house_inside_Patna_University_Campus_at_Bihar,_India_30.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Patna_City_Flag.png/960px-Patna_City_Flag.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Patna Municipal Corporation · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Patna_City_Flag.png"
      }
     ],
     "driveLinks": [],
     "itinerary": [
      {
       "id": "it_in_bihar_1",
       "day": 1,
       "title": "Patna",
       "note": "Arrive Patna; Golghar, Patna Museum, Gandhi Ghat",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_bihar_2",
       "day": 2,
       "title": "Nalanda / Rajgir",
       "note": "Day trip to Nalanda ruins and Rajgir (~90km)",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_bihar_3",
       "day": 3,
       "title": "Bodh Gaya",
       "note": "Travel to Bodh Gaya (~70km); Mahabodhi Temple, meditation",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_bihar_4",
       "day": 4,
       "title": "Bodh Gaya",
       "note": "Explore international monasteries around Bodh Gaya",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_bihar_5",
       "day": 5,
       "title": "Vaishali",
       "note": "Day trip to Vaishali (Buddhist/Jain sites); begin return journey",
       "cost": 0,
       "done": false
      }
     ],
     "noPhoto": false
    },
    {
     "id": "in_jharkhand",
     "name": "Jharkhand",
     "country": "Jharkhand",
     "city": "Ranchi",
     "iso2": "IN",
     "iata": "IXR",
     "currency": "INR",
     "lat": 23.34,
     "lon": 85.31,
     "days": 4,
     "order": 10,
     "notes": "",
     "budget": {
      "railway": 6600,
      "intercity": 8000,
      "lodging": 4800,
      "food": 1600,
      "activities": 600,
      "petrol": 1000,
      "misc": 600
     },
     "images": [
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Ranchi_Cityscape.jpg/1024px-Ranchi_Cityscape.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
       "credit": "Ranchi",
       "source": "https://en.wikipedia.org/wiki/Ranchi"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Ranchi_-_Birsa_Munda_Airport_%28IXR-VERC%29.jpg/960px-Ranchi_-_Birsa_Munda_Airport_%28IXR-VERC%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Hyougushi / Hideyuki KAMON from Takarazuka, Hyogo, JAPAN · CC BY-SA 3.0",
       "source": "https://commons.wikimedia.org/wiki/File:Ranchi_-_Birsa_Munda_Airport_(IXR-VERC).jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Birsa_Munda_Airport_in_Ranchi_1.jpg/960px-Birsa_Munda_Airport_in_Ranchi_1.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "IM3847 · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Birsa_Munda_Airport_in_Ranchi_1.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Birsa_Munda_Airport_in_Ranchi_2.jpg/960px-Birsa_Munda_Airport_in_Ranchi_2.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "IM3847 · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Birsa_Munda_Airport_in_Ranchi_2.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Birsa_Munda_Airport%2C_Ranchi.jpg/960px-Birsa_Munda_Airport%2C_Ranchi.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Raju Jangid · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Birsa_Munda_Airport,_Ranchi.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Panorama_of_Birsa_Munda_Airport.jpg/960px-Panorama_of_Birsa_Munda_Airport.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "IM3847 · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Panorama_of_Birsa_Munda_Airport.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Ranchi_-_Birsa_Munda_Airport_-_1.jpg/960px-Ranchi_-_Birsa_Munda_Airport_-_1.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "This illustration was made by Peter Potrowl.\nPlease credit this with : · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Ranchi_-_Birsa_Munda_Airport_-_1.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Ranchi_-_Birsa_Munda_Airport_-_2.jpg/960px-Ranchi_-_Birsa_Munda_Airport_-_2.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "This illustration was made by Peter Potrowl.\nPlease credit this with : · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Ranchi_-_Birsa_Munda_Airport_-_2.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Ranchi_Airport.png/960px-Ranchi_Airport.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "VishuN · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Ranchi_Airport.png"
      }
     ],
     "driveLinks": [],
     "itinerary": [
      {
       "id": "it_in_jharkhand_1",
       "day": 1,
       "title": "Ranchi",
       "note": "Arrive Ranchi; Hundru Falls day trip",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_jharkhand_2",
       "day": 2,
       "title": "Netarhat",
       "note": "Travel to Netarhat hill station (~150km); 'Queen of Chotanagpur' sunset point",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_jharkhand_3",
       "day": 3,
       "title": "Betla National Park",
       "note": "Travel to Betla (~100km); budget jeep safari",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_jharkhand_4",
       "day": 4,
       "title": "Deoghar",
       "note": "Travel towards Deoghar (Baidyanath Temple); begin return journey",
       "cost": 0,
       "done": false
      }
     ],
     "noPhoto": false
    },
    {
     "id": "in_west-bengal",
     "name": "West Bengal",
     "country": "West Bengal",
     "city": "Kolkata",
     "iso2": "IN",
     "iata": "CCU",
     "currency": "INR",
     "lat": 22.57,
     "lon": 88.36,
     "days": 8,
     "order": 11,
     "notes": "",
     "budget": {
      "railway": 13000,
      "intercity": 25000,
      "lodging": 9000,
      "food": 3600,
      "activities": 2000,
      "petrol": 0,
      "misc": 1200
     },
     "images": [
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Kolkata_maidan.jpg/1024px-Kolkata_maidan.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
       "credit": "Kolkata",
       "source": "https://en.wikipedia.org/wiki/Kolkata"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Kolkata_skyline_at_night.jpg/960px-Kolkata_skyline_at_night.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "DeepanjanGhosh · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Kolkata_skyline_at_night.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Victoria_Memorial_situated_in_Kolkata.jpg/960px-Victoria_Memorial_situated_in_Kolkata.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Subhrajyoti07 · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Victoria_Memorial_situated_in_Kolkata.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Victoria_Memorial_Kolkata_at_night.jpg/960px-Victoria_Memorial_Kolkata_at_night.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "DeepanjanGhosh · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Victoria_Memorial_Kolkata_at_night.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/General_Post_Office_and_Reserve_Bank_of_India%2C_Kolkata%2C_India.jpg/960px-General_Post_Office_and_Reserve_Bank_of_India%2C_Kolkata%2C_India.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Vyacheslav Argenberg · CC BY 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:General_Post_Office_and_Reserve_Bank_of_India,_Kolkata,_India.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/New_Town_Skyline_captured_from_Bengal_Intelligent_Park%2C_Saltlake%2C_Kolkata_%282_of_2_photos%29.jpg/960px-New_Town_Skyline_captured_from_Bengal_Intelligent_Park%2C_Saltlake%2C_Kolkata_%282_of_2_photos%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Subhrajyoti07 · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:New_Town_Skyline_captured_from_Bengal_Intelligent_Park,_Saltlake,_Kolkata_(2_of_2_photos).jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Red_Vinca_or_Periwinkle_in_a_garden_in_Kolkata.jpg/960px-Red_Vinca_or_Periwinkle_in_a_garden_in_Kolkata.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Subhrajyoti07 · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Red_Vinca_or_Periwinkle_in_a_garden_in_Kolkata.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Nelumbo_nucifera%2C_also_known_as_Indian_lotus_in_bud_stage_%28Image_7_of_7%29.jpg/960px-Nelumbo_nucifera%2C_also_known_as_Indian_lotus_in_bud_stage_%28Image_7_of_7%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Subhrajyoti07 · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Nelumbo_nucifera,_also_known_as_Indian_lotus_in_bud_stage_(Image_7_of_7).jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/A_yellow_African_daisy_in_Kolkata.jpg/960px-A_yellow_African_daisy_in_Kolkata.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Subhrajyoti07 · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:A_yellow_African_daisy_in_Kolkata.jpg"
      }
     ],
     "driveLinks": [],
     "itinerary": [
      {
       "id": "it_in_west-bengal_1",
       "day": 1,
       "title": "Kolkata",
       "note": "Arrive Kolkata; Victoria Memorial, Howrah Bridge, College Street",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_west-bengal_2",
       "day": 2,
       "title": "Kolkata",
       "note": "Kumartuli potters' quarter, heritage tram ride, Park Street evening",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_west-bengal_3",
       "day": 3,
       "title": "Darjeeling",
       "note": "Overnight train/bus to NJP then shared jeep to Darjeeling (~600km total)",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_west-bengal_4",
       "day": 4,
       "title": "Darjeeling",
       "note": "Sunrise at Tiger Hill, toy train (DHR) ride, Peace Pagoda",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_west-bengal_5",
       "day": 5,
       "title": "Kalimpong",
       "note": "Travel to Kalimpong (~50km); monasteries, Delo Park viewpoint",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_west-bengal_6",
       "day": 6,
       "title": "Towards NJP/Kolkata",
       "note": "Begin return route; scenic hill drive",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_west-bengal_7",
       "day": 7,
       "title": "Digha (day trip)",
       "note": "Day trip to Digha beach (~185km) or rest day in Kolkata",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_west-bengal_8",
       "day": 8,
       "title": "Sundarbans / Kolkata",
       "note": "Sundarbans mangrove day tour, or free day; begin return journey",
       "cost": 0,
       "done": false
      }
     ],
     "noPhoto": false
    },
    {
     "id": "in_sikkim",
     "name": "Sikkim",
     "country": "Sikkim",
     "city": "Gangtok",
     "iso2": "IN",
     "iata": "IXB",
     "currency": "INR",
     "lat": 27.33,
     "lon": 88.61,
     "days": 6,
     "order": 12,
     "notes": "",
     "budget": {
      "railway": 34000,
      "intercity": 12000,
      "lodging": 10000,
      "food": 3300,
      "activities": 2100,
      "petrol": 3000,
      "misc": 900
     },
     "images": [
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Kangch-Goechala.jpg/1024px-Kangch-Goechala.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
       "credit": "Gangtok",
       "source": "https://en.wikipedia.org/wiki/Gangtok"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/c/c2/Bundesarchiv_Bild_135-KA-10-057%2C_Tibetexpediton%2C_Beim_Insektenfangen.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
       "credit": "Krause, Ernst · CC BY-SA 3.0 de",
       "source": "https://commons.wikimedia.org/wiki/File:Bundesarchiv_Bild_135-KA-10-057,_Tibetexpediton,_Beim_Insektenfangen.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Sikkim_Gangtok.jpg/960px-Sikkim_Gangtok.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Kailas98 · CC BY-SA 3.0",
       "source": "https://commons.wikimedia.org/wiki/File:Sikkim_Gangtok.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/A_Overhead_view_of_Gangtok_from_the_ropeway_facility.JPG/960px-A_Overhead_view_of_Gangtok_from_the_ropeway_facility.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Srikanthkashyap · CC BY-SA 3.0",
       "source": "https://commons.wikimedia.org/wiki/File:A_Overhead_view_of_Gangtok_from_the_ropeway_facility.JPG"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Gangtok_from_Tibet_Road.jpg/960px-Gangtok_from_Tibet_Road.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Thebrowniris · CC BY 3.0",
       "source": "https://commons.wikimedia.org/wiki/File:Gangtok_from_Tibet_Road.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/View_of_Gangtok_city_from_Ropeway.jpg/960px-View_of_Gangtok_city_from_Ropeway.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Subhrajyoti07 · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:View_of_Gangtok_city_from_Ropeway.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/ICCC_Gangtok_Smart_City.jpg/960px-ICCC_Gangtok_Smart_City.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Khagendra13 · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:ICCC_Gangtok_Smart_City.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/5/5e/Sikkim-Gangtok_wooden_bridge.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
       "credit": "Vanshiikaa · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Sikkim-Gangtok_wooden_bridge.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Traditional_wooden_houses_in_Gangtok%2C_Sikkim.jpg/960px-Traditional_wooden_houses_in_Gangtok%2C_Sikkim.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Rajani Gairshail · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Traditional_wooden_houses_in_Gangtok,_Sikkim.jpg"
      }
     ],
     "driveLinks": [],
     "itinerary": [
      {
       "id": "it_in_sikkim_1",
       "day": 1,
       "title": "Gangtok",
       "note": "Arrive via Bagdogra + shared jeep (~125km); explore MG Marg",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_sikkim_2",
       "day": 2,
       "title": "Gangtok",
       "note": "Tsomgo Lake and Baba Mandir day trip (permit + shared taxi required)",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_sikkim_3",
       "day": 3,
       "title": "Pelling",
       "note": "Travel to Pelling (~110km); Pemayangtse Monastery, Khecheopalri Lake",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_sikkim_4",
       "day": 4,
       "title": "Lachung",
       "note": "Long travel to North Sikkim's Lachung (~200km, permit required)",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_sikkim_5",
       "day": 5,
       "title": "Yumthang Valley",
       "note": "Day trip to Yumthang 'Valley of Flowers' and Zero Point",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_sikkim_6",
       "day": 6,
       "title": "Gangtok",
       "note": "Return journey to Gangtok, then towards Bagdogra",
       "cost": 0,
       "done": false
      }
     ],
     "noPhoto": false
    },
    {
     "id": "in_assam",
     "name": "Assam",
     "country": "Assam",
     "city": "Guwahati",
     "iso2": "IN",
     "iata": "GAU",
     "currency": "INR",
     "lat": 26.14,
     "lon": 91.74,
     "days": 6,
     "order": 13,
     "notes": "",
     "budget": {
      "railway": 24000,
      "intercity": 9000,
      "lodging": 9000,
      "food": 2700,
      "activities": 1500,
      "petrol": 2000,
      "misc": 900
     },
     "images": [
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Guwahati_citysky.jpg/1024px-Guwahati_citysky.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
       "credit": "Guwahati",
       "source": "https://en.wikipedia.org/wiki/Guwahati"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Guwahati_citysky.jpg/960px-Guwahati_citysky.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Rituraj Bhuyan from Guwahati, India · CC BY-SA 2.0",
       "source": "https://commons.wikimedia.org/wiki/File:Guwahati_citysky.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Guwahati-city-01.jpg/960px-Guwahati-city-01.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Anushila Bharali · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Guwahati-city-01.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Ropeway-Guwahati.jpg/960px-Ropeway-Guwahati.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Hitesh Talukdar · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Ropeway-Guwahati.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Skyline_of_Guwahati.jpg/960px-Skyline_of_Guwahati.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Rishavnandi08 · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Skyline_of_Guwahati.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Dassehra_at_guwahati.jpg/960px-Dassehra_at_guwahati.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Akashdoley13 · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Dassehra_at_guwahati.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Swans_swimming_in_IIT_guwahati_lake.jpg/960px-Swans_swimming_in_IIT_guwahati_lake.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Akashdoley13 · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Swans_swimming_in_IIT_guwahati_lake.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/IIT_Guwahati_convocation_2023.jpg/960px-IIT_Guwahati_convocation_2023.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Akashdoley13 · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:IIT_Guwahati_convocation_2023.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Cheese_pasta_in_iit_guwahati_cafeteria.jpg/960px-Cheese_pasta_in_iit_guwahati_cafeteria.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Akashdoley13 · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Cheese_pasta_in_iit_guwahati_cafeteria.jpg"
      }
     ],
     "driveLinks": [],
     "itinerary": [
      {
       "id": "it_in_assam_1",
       "day": 1,
       "title": "Guwahati",
       "note": "Arrive Guwahati; Kamakhya Temple, sunset boat ride on the Brahmaputra",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_assam_2",
       "day": 2,
       "title": "Kaziranga",
       "note": "Travel to Kaziranga National Park (~215km); jeep safari for one-horned rhinos",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_assam_3",
       "day": 3,
       "title": "Kaziranga",
       "note": "Second safari (different range); elephant-back safari optional",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_assam_4",
       "day": 4,
       "title": "Majuli",
       "note": "Travel to Majuli, world's largest river island (~150km + ferry)",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_assam_5",
       "day": 5,
       "title": "Majuli",
       "note": "Vaishnavite monasteries (satras), mask-making villages",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_assam_6",
       "day": 6,
       "title": "Sivasagar",
       "note": "Travel to Sivasagar, former Ahom capital; Rang Ghar, Talatal Ghar; begin return journey",
       "cost": 0,
       "done": false
      }
     ],
     "noPhoto": false
    },
    {
     "id": "in_arunachal-pradesh",
     "name": "Arunachal Pradesh",
     "country": "Arunachal Pradesh",
     "city": "Tawang",
     "iso2": "IN",
     "iata": "TEZ",
     "currency": "INR",
     "lat": 27.59,
     "lon": 91.87,
     "days": 7,
     "order": 14,
     "notes": "",
     "budget": {
      "railway": 24000,
      "intercity": 18000,
      "lodging": 8000,
      "food": 2800,
      "activities": 1050,
      "petrol": 1000,
      "misc": 1050
     },
     "images": [
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/The_buddist_monastry.jpg/1024px-The_buddist_monastry.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
       "credit": "Tawang",
       "source": "https://en.wikipedia.org/wiki/Tawang"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/1/13/Tawang-town.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
       "credit": "nachbearbeitet von obiger Quelle · Public domain",
       "source": "https://commons.wikimedia.org/wiki/File:Tawang-town.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/d/d2/McMahon-Line-map-Tawang-sector.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
       "credit": "Government of United Kingdom · Public domain",
       "source": "https://commons.wikimedia.org/wiki/File:McMahon-Line-map-Tawang-sector.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Nyamjang_Chu_and_Tawang_Chu_rivers_mapped_by_Morshead_and_Bailey%2C_1913.jpg/960px-Nyamjang_Chu_and_Tawang_Chu_rivers_mapped_by_Morshead_and_Bailey%2C_1913.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Frederick Marshman Bailey · Public domain",
       "source": "https://commons.wikimedia.org/wiki/File:Nyamjang_Chu_and_Tawang_Chu_rivers_mapped_by_Morshead_and_Bailey,_1913.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/a/ab/Tawang_district_with_labels.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
       "credit": "DescriptionTawang district with labels.png\n\n\nThis map  was created fro · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Tawang_district_with_labels.png"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Tawang_Monyul_region_from_1936_Survey_of_India_map.jpg/960px-Tawang_Monyul_region_from_1936_Survey_of_India_map.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Survey of India · Public domain",
       "source": "https://commons.wikimedia.org/wiki/File:Tawang_Monyul_region_from_1936_Survey_of_India_map.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Yangtse-Tawang-map.jpg/960px-Yangtse-Tawang-map.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Editors of OpenStreetMap, annotated by User:Kautilya3 · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Yangtse-Tawang-map.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Road_approaching_Sela_Pass_in_Tawang_Dist_Arunachal_Pradesh_1.jpg/960px-Road_approaching_Sela_Pass_in_Tawang_Dist_Arunachal_Pradesh_1.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Kingshuk Mondal · CC BY 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Road_approaching_Sela_Pass_in_Tawang_Dist_Arunachal_Pradesh_1.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Road_approaching_Sela_Pass_in_Tawang_Dist_Arunachal_Pradesh_2.jpg/960px-Road_approaching_Sela_Pass_in_Tawang_Dist_Arunachal_Pradesh_2.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Kingshuk Mondal · CC BY 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Road_approaching_Sela_Pass_in_Tawang_Dist_Arunachal_Pradesh_2.jpg"
      }
     ],
     "driveLinks": [],
     "itinerary": [
      {
       "id": "it_in_arunachal-pradesh_1",
       "day": 1,
       "title": "Bhalukpong (entry)",
       "note": "Cross into Arunachal (Inner Line Permit required); travel towards Tawang route",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_arunachal-pradesh_2",
       "day": 2,
       "title": "Bomdila (en route)",
       "note": "Continue mountain drive via Bomdila (scenic, slow roads)",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_arunachal-pradesh_3",
       "day": 3,
       "title": "Tawang",
       "note": "Tawang Monastery (one of India's largest), Sela Pass",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_arunachal-pradesh_4",
       "day": 4,
       "title": "Bomdila",
       "note": "Return via Bomdila; explore Bomdila Monastery",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_arunachal-pradesh_5",
       "day": 5,
       "title": "Ziro Valley",
       "note": "Travel towards Ziro Valley (Apatani tribal homeland)",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_arunachal-pradesh_6",
       "day": 6,
       "title": "Ziro Valley",
       "note": "Explore Apatani villages, pine-covered valley",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_arunachal-pradesh_7",
       "day": 7,
       "title": "Guwahati (return)",
       "note": "Begin return journey towards Guwahati for onward flight",
       "cost": 0,
       "done": false
      }
     ],
     "noPhoto": false
    },
    {
     "id": "in_meghalaya",
     "name": "Meghalaya",
     "country": "Meghalaya",
     "city": "Shillong",
     "iso2": "IN",
     "iata": "SHL",
     "currency": "INR",
     "lat": 25.58,
     "lon": 91.89,
     "days": 6,
     "order": 15,
     "notes": "",
     "budget": {
      "railway": 24000,
      "intercity": 6000,
      "lodging": 9000,
      "food": 2400,
      "activities": 900,
      "petrol": 0,
      "misc": 900
     },
     "images": [
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Elephant_Falls_II%2C_Shillong.jpg/1024px-Elephant_Falls_II%2C_Shillong.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
       "credit": "Shillong",
       "source": "https://en.wikipedia.org/wiki/Shillong"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Shillong.jpg/960px-Shillong.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Windrider24584 at English Wikipedia · CC BY 3.0",
       "source": "https://commons.wikimedia.org/wiki/File:Shillong.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Shillong_City_View.jpg/960px-Shillong_City_View.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "ANKAN · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Shillong_City_View.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Shillong_City_from_Don_Bosco_Museum.jpg/960px-Shillong_City_from_Don_Bosco_Museum.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Arindambasu2 · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Shillong_City_from_Don_Bosco_Museum.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/A_BIRDS_EYE_VIEW_OF_SHILLONG_FROM_SHILLONG_PEAK.jpg/960px-A_BIRDS_EYE_VIEW_OF_SHILLONG_FROM_SHILLONG_PEAK.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "debanutosh · CC0",
       "source": "https://commons.wikimedia.org/wiki/File:A_BIRDS_EYE_VIEW_OF_SHILLONG_FROM_SHILLONG_PEAK.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Vegetable_shop_in_Shillong%2C_Meghalaya.jpg/960px-Vegetable_shop_in_Shillong%2C_Meghalaya.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Ganesh Mohan T · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Vegetable_shop_in_Shillong,_Meghalaya.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Shillong_during_Christmas_01.jpg/960px-Shillong_during_Christmas_01.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Ganesh Mohan T · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Shillong_during_Christmas_01.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Shillong_People_01.jpg/960px-Shillong_People_01.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Ganesh Mohan T · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Shillong_People_01.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Shillong_during_night_01.jpg/960px-Shillong_during_night_01.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Ganesh Mohan T · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Shillong_during_night_01.jpg"
      }
     ],
     "driveLinks": [],
     "itinerary": [
      {
       "id": "it_in_meghalaya_1",
       "day": 1,
       "title": "Shillong",
       "note": "Arrive via Guwahati + shared cab (~100km); Ward's Lake, Police Bazar",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_meghalaya_2",
       "day": 2,
       "title": "Cherrapunji (Sohra)",
       "note": "Travel to Cherrapunji (~55km); Nohkalikai Falls",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_meghalaya_3",
       "day": 3,
       "title": "Cherrapunji",
       "note": "Trek to Double Decker Living Root Bridge, Nongriat village",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_meghalaya_4",
       "day": 4,
       "title": "Dawki",
       "note": "Travel to Dawki (~80km); crystal-clear Umngot River boating",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_meghalaya_5",
       "day": 5,
       "title": "Mawlynnong",
       "note": "Visit Mawlynnong, 'cleanest village in Asia'; nearby root bridges",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_meghalaya_6",
       "day": 6,
       "title": "Shillong",
       "note": "Return to Shillong; local markets; begin return journey",
       "cost": 0,
       "done": false
      }
     ],
     "noPhoto": false
    },
    {
     "id": "in_manipur",
     "name": "Manipur",
     "country": "Manipur",
     "city": "Imphal",
     "iso2": "IN",
     "iata": "IMF",
     "currency": "INR",
     "lat": 24.82,
     "lon": 93.94,
     "days": 4,
     "order": 16,
     "notes": "",
     "budget": {
      "railway": 20000,
      "intercity": 3700,
      "lodging": 4000,
      "food": 1600,
      "activities": 600,
      "petrol": 0,
      "misc": 600
     },
     "images": [
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Imphal_At_Dusk.jpg/1024px-Imphal_At_Dusk.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
       "credit": "Imphal",
       "source": "https://en.wikipedia.org/wiki/Imphal"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Imphal_At_Dusk.jpg/960px-Imphal_At_Dusk.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "DeepanjanGhosh · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Imphal_At_Dusk.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Plain_of_the_Imphal_Valley_in_Manipur_state_%28alias_Kangleipak%29_in_Northeast_India_-_as_seen_from_an_aeroplane_-_aerial_view_03.jpg/960px-Plain_of_the_Imphal_Valley_in_Manipur_state_%28alias_Kangleipak%29_in_Northeast_India_-_as_seen_from_an_aeroplane_-_aerial_view_03.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Haoreima · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Plain_of_the_Imphal_Valley_in_Manipur_state_(alias_Kangleipak)_in_Northeast_India_-_as_seen_from_an_aeroplane_-_aerial_view_03.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Plain_of_the_Imphal_Valley_in_Manipur_state_%28alias_Kangleipak%29_in_Northeast_India_-_as_seen_from_an_aeroplane_-_aerial_view_01.jpg/960px-Plain_of_the_Imphal_Valley_in_Manipur_state_%28alias_Kangleipak%29_in_Northeast_India_-_as_seen_from_an_aeroplane_-_aerial_view_01.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Haoreima · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Plain_of_the_Imphal_Valley_in_Manipur_state_(alias_Kangleipak)_in_Northeast_India_-_as_seen_from_an_aeroplane_-_aerial_view_01.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Plain_of_the_Imphal_Valley_in_Manipur_state_%28alias_Kangleipak%29_in_Northeast_India_-_as_seen_from_an_aeroplane_-_aerial_view_02.jpg/960px-Plain_of_the_Imphal_Valley_in_Manipur_state_%28alias_Kangleipak%29_in_Northeast_India_-_as_seen_from_an_aeroplane_-_aerial_view_02.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Haoreima · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Plain_of_the_Imphal_Valley_in_Manipur_state_(alias_Kangleipak)_in_Northeast_India_-_as_seen_from_an_aeroplane_-_aerial_view_02.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Plain_of_the_Imphal_Valley_in_Manipur_state_%28alias_Kangleipak%29_in_Northeast_India_-_as_seen_from_an_aeroplane_-_aerial_view_04.jpg/960px-Plain_of_the_Imphal_Valley_in_Manipur_state_%28alias_Kangleipak%29_in_Northeast_India_-_as_seen_from_an_aeroplane_-_aerial_view_04.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Haoreima · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Plain_of_the_Imphal_Valley_in_Manipur_state_(alias_Kangleipak)_in_Northeast_India_-_as_seen_from_an_aeroplane_-_aerial_view_04.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Plain_of_the_Imphal_Valley_in_Manipur_state_%28alias_Kangleipak%29_in_Northeast_India_-_as_seen_from_an_aeroplane_-_aerial_view_06.jpg/960px-Plain_of_the_Imphal_Valley_in_Manipur_state_%28alias_Kangleipak%29_in_Northeast_India_-_as_seen_from_an_aeroplane_-_aerial_view_06.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Haoreima · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Plain_of_the_Imphal_Valley_in_Manipur_state_(alias_Kangleipak)_in_Northeast_India_-_as_seen_from_an_aeroplane_-_aerial_view_06.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/A_modern_day_building_in_Classical_Meitei_architecture%2C_in_Imphal%2C_the_capital_city_of_Manipur_state_%28Kangleipak%29_01.jpg/960px-A_modern_day_building_in_Classical_Meitei_architecture%2C_in_Imphal%2C_the_capital_city_of_Manipur_state_%28Kangleipak%29_01.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Haoreima · CC BY 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:A_modern_day_building_in_Classical_Meitei_architecture,_in_Imphal,_the_capital_city_of_Manipur_state_(Kangleipak)_01.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/A_modern_day_building_in_Classical_Meitei_architecture%2C_in_Imphal%2C_the_capital_city_of_Manipur_state_%28Kangleipak%29_02.jpg/960px-A_modern_day_building_in_Classical_Meitei_architecture%2C_in_Imphal%2C_the_capital_city_of_Manipur_state_%28Kangleipak%29_02.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Haoreima · CC BY 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:A_modern_day_building_in_Classical_Meitei_architecture,_in_Imphal,_the_capital_city_of_Manipur_state_(Kangleipak)_02.jpg"
      }
     ],
     "driveLinks": [],
     "itinerary": [
      {
       "id": "it_in_manipur_1",
       "day": 1,
       "title": "Imphal",
       "note": "Arrive Imphal; Kangla Fort, Ima Keithel (all-women's market)",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_manipur_2",
       "day": 2,
       "title": "Loktak Lake",
       "note": "Day trip to Loktak Lake (~50km); floating phumdis, Keibul Lamjao park",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_manipur_3",
       "day": 3,
       "title": "Moirang",
       "note": "Explore Moirang war memorial, INA museum",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_manipur_4",
       "day": 4,
       "title": "Imphal",
       "note": "War Cemetery, local markets; begin return journey",
       "cost": 0,
       "done": false
      }
     ],
     "noPhoto": false
    },
    {
     "id": "in_nagaland",
     "name": "Nagaland",
     "country": "Nagaland",
     "city": "Kohima",
     "iso2": "IN",
     "iata": "DMU",
     "currency": "INR",
     "lat": 25.67,
     "lon": 94.11,
     "days": 5,
     "order": 17,
     "notes": "",
     "budget": {
      "railway": 21000,
      "intercity": 9000,
      "lodging": 6000,
      "food": 2000,
      "activities": 750,
      "petrol": 0,
      "misc": 750
     },
     "images": [
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Capital_Cultural_Hall.jpg/1024px-Capital_Cultural_Hall.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
       "credit": "Kohima",
       "source": "https://en.wikipedia.org/wiki/Kohima"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Kohima_City.jpeg/960px-Kohima_City.jpeg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "PP Yoonus · CC BY-SA 3.0",
       "source": "https://commons.wikimedia.org/wiki/File:Kohima_City.jpeg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Kohima_24_July_2021.jpeg/960px-Kohima_24_July_2021.jpeg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "The Anonymous Earthling · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Kohima_24_July_2021.jpeg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Vertical_cityscape_of_Kohima_%282024%29.jpg/960px-Vertical_cityscape_of_Kohima_%282024%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Ly.n0m · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Vertical_cityscape_of_Kohima_(2024).jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/View_of_Naga_Bazaar%2C_Kohima_%282024%29.jpg/960px-View_of_Naga_Bazaar%2C_Kohima_%282024%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Ly.n0m · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:View_of_Naga_Bazaar,_Kohima_(2024).jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Kohima_Jain_Temple_%282024%29.jpg/960px-Kohima_Jain_Temple_%282024%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Ly.n0m · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Kohima_Jain_Temple_(2024).jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Kohima_skyline_from_Bara_Basti_%282024%29.jpg/960px-Kohima_skyline_from_Bara_Basti_%282024%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Ly.n0m · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Kohima_skyline_from_Bara_Basti_(2024).jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Typical_view_in_Kohima_village_%282024%29.jpg/960px-Typical_view_in_Kohima_village_%282024%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Ly.n0m · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Typical_view_in_Kohima_village_(2024).jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Typical_scenery_in_Kohima_village_%282024%29.jpg/960px-Typical_scenery_in_Kohima_village_%282024%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Ly.n0m · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Typical_scenery_in_Kohima_village_(2024).jpg"
      }
     ],
     "driveLinks": [],
     "itinerary": [
      {
       "id": "it_in_nagaland_1",
       "day": 1,
       "title": "Kohima",
       "note": "Travel from Dimapur to Kohima (~75km); War Cemetery",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_nagaland_2",
       "day": 2,
       "title": "Kohima",
       "note": "Local market, Naga Heritage Village at Kisama",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_nagaland_3",
       "day": 3,
       "title": "Khonoma",
       "note": "Day trip to Khonoma, India's first 'green village'",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_nagaland_4",
       "day": 4,
       "title": "Mon",
       "note": "Long travel to Mon district for Konyak tribal villages (best in Hornbill season)",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_nagaland_5",
       "day": 5,
       "title": "Mon / Kohima",
       "note": "Tribal village visit, headhunter history museum; begin return journey",
       "cost": 0,
       "done": false
      }
     ],
     "noPhoto": false
    },
    {
     "id": "in_mizoram",
     "name": "Mizoram",
     "country": "Mizoram",
     "city": "Aizawl",
     "iso2": "IN",
     "iata": "AJL",
     "currency": "INR",
     "lat": 23.73,
     "lon": 92.72,
     "days": 4,
     "order": 18,
     "notes": "",
     "budget": {
      "railway": 22000,
      "intercity": 3000,
      "lodging": 5000,
      "food": 1600,
      "activities": 600,
      "petrol": 0,
      "misc": 600
     },
     "images": [
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Mizoram_Assembly_House_%28wider_view%29.jpg/1024px-Mizoram_Assembly_House_%28wider_view%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
       "credit": "Aizawl",
       "source": "https://en.wikipedia.org/wiki/Aizawl"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/View_of_the_ridgetop_city_of_Aizawl%2C_state_capital_of_Mizoram.jpg/960px-View_of_the_ridgetop_city_of_Aizawl%2C_state_capital_of_Mizoram.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Bogman · CC BY-SA 3.0",
       "source": "https://commons.wikimedia.org/wiki/File:View_of_the_ridgetop_city_of_Aizawl,_state_capital_of_Mizoram.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Aizawl_Montage.png/960px-Aizawl_Montage.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Adityamadhav83 · CC BY-SA 3.0",
       "source": "https://commons.wikimedia.org/wiki/File:Aizawl_Montage.png"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Aizawl_de_nuit.jpg/960px-Aizawl_de_nuit.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Joe Fanai from Aizawl, India · CC BY 2.0",
       "source": "https://commons.wikimedia.org/wiki/File:Aizawl_de_nuit.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Aizawl_panoramicview.jpg/960px-Aizawl_panoramicview.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Jokomarel · CC BY 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Aizawl_panoramicview.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Aizawl_City_in_2023.jpg/960px-Aizawl_City_in_2023.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Robjersey · CC0",
       "source": "https://commons.wikimedia.org/wiki/File:Aizawl_City_in_2023.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Mizoram_Assembly_House_%28wider_view%29.jpg/960px-Mizoram_Assembly_House_%28wider_view%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "GeoEvan (www.polgeonow.com) · CC BY 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Mizoram_Assembly_House_(wider_view).jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Aizawl_at_night.jpg/960px-Aizawl_at_night.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Blitziko · CC BY 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Aizawl_at_night.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Aizawl_View_Point%2C_Mizoram.jpg/960px-Aizawl_View_Point%2C_Mizoram.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "BhuyanBhaskar · CC BY 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Aizawl_View_Point,_Mizoram.jpg"
      }
     ],
     "driveLinks": [],
     "itinerary": [
      {
       "id": "it_in_mizoram_1",
       "day": 1,
       "title": "Aizawl",
       "note": "Arrive Aizawl; hillside city views, Solomon's Temple viewpoint",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_mizoram_2",
       "day": 2,
       "title": "Reiek",
       "note": "Day trip to Reiek Tlang peak (~30km); trek for valley views",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_mizoram_3",
       "day": 3,
       "title": "Aizawl",
       "note": "Mizoram State Museum, local markets, Mizo cuisine",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_mizoram_4",
       "day": 4,
       "title": "Aizawl",
       "note": "Free day / local exploration; begin return journey",
       "cost": 0,
       "done": false
      }
     ],
     "noPhoto": false
    },
    {
     "id": "in_tripura",
     "name": "Tripura",
     "country": "Tripura",
     "city": "Agartala",
     "iso2": "IN",
     "iata": "IXA",
     "currency": "INR",
     "lat": 23.83,
     "lon": 91.28,
     "days": 3,
     "order": 19,
     "notes": "",
     "budget": {
      "railway": 19000,
      "intercity": 7000,
      "lodging": 4000,
      "food": 1200,
      "activities": 450,
      "petrol": 0,
      "misc": 450
     },
     "images": [
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Ujjayanta_palace_Tripura_State_Museum_Agartala_India.jpg/1024px-Ujjayanta_palace_Tripura_State_Museum_Agartala_India.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
       "credit": "Agartala",
       "source": "https://en.wikipedia.org/wiki/Agartala"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Agartala-mayday152.jpg/960px-Agartala-mayday152.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "No machine-readable author provided. Soman assumed (based on copyright · CC BY-SA 3.0",
       "source": "https://commons.wikimedia.org/wiki/File:Agartala-mayday152.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Agartala_Airport_Departure_Terminal.jpeg/960px-Agartala_Airport_Departure_Terminal.jpeg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "PP Yoonus · CC BY-SA 3.0",
       "source": "https://commons.wikimedia.org/wiki/File:Agartala_Airport_Departure_Terminal.jpeg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/f/fd/Agartala_Satellite_view.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
       "credit": "Click4anirban · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Agartala_Satellite_view.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Agartala_Flyover.jpg/960px-Agartala_Flyover.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Binamra Deb · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Agartala_Flyover.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/d/d0/Immigration_Counter_at_Agartala_MBB_Airport.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
       "credit": "Agartala updater · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Immigration_Counter_at_Agartala_MBB_Airport.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/4/44/Interior_of_MBB_Agartala_Airport.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
       "credit": "Agartala updater · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Interior_of_MBB_Agartala_Airport.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/8/8d/MBB_Agartala_Airport_in_Night_Time.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
       "credit": "Agartala updater · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:MBB_Agartala_Airport_in_Night_Time.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/New_International_Agartala_Airport.jpg/960px-New_International_Agartala_Airport.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Josh Katz 12 · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:New_International_Agartala_Airport.jpg"
      }
     ],
     "driveLinks": [],
     "itinerary": [
      {
       "id": "it_in_tripura_1",
       "day": 1,
       "title": "Agartala",
       "note": "Arrive Agartala; Ujjayanta Palace, Jagannath Temple",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_tripura_2",
       "day": 2,
       "title": "Unakoti",
       "note": "Day trip to Unakoti rock-cut sculptures (~180km, long day)",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_tripura_3",
       "day": 3,
       "title": "Neermahal",
       "note": "Day trip to Neermahal 'Lake Palace'; begin return journey",
       "cost": 0,
       "done": false
      }
     ],
     "noPhoto": false
    },
    {
     "id": "in_odisha",
     "name": "Odisha",
     "country": "Odisha",
     "city": "Bhubaneswar",
     "iso2": "IN",
     "iata": "BBI",
     "currency": "INR",
     "lat": 20.3,
     "lon": 85.82,
     "days": 7,
     "order": 20,
     "notes": "",
     "budget": {
      "railway": 13000,
      "intercity": 7500,
      "lodging": 7500,
      "food": 3150,
      "activities": 1750,
      "petrol": 0,
      "misc": 1200
     },
     "images": [
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Bhubaneswar_at_night_from_sky.jpg/1024px-Bhubaneswar_at_night_from_sky.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
       "credit": "Bhubaneswar",
       "source": "https://en.wikipedia.org/wiki/Bhubaneswar"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Biju_Patnaik_Airport%2C_Bhubaneswar%2C_Odisha.jpg/960px-Biju_Patnaik_Airport%2C_Bhubaneswar%2C_Odisha.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Krupasindhu Muduli · CC BY-SA 3.0",
       "source": "https://commons.wikimedia.org/wiki/File:Biju_Patnaik_Airport,_Bhubaneswar,_Odisha.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Biju_Patnaik_Airport_%28BBI%29%2C_Bhubaneswar%2C_Odisha.JPG/960px-Biju_Patnaik_Airport_%28BBI%29%2C_Bhubaneswar%2C_Odisha.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Subhashish Panigrahi · CC BY-SA 3.0",
       "source": "https://commons.wikimedia.org/wiki/File:Biju_Patnaik_Airport_(BBI),_Bhubaneswar,_Odisha.JPG"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/T1%2C_Biju_Patnaik_Airport%2C_Bhubaneswar%2C_Odisha.jpg/960px-T1%2C_Biju_Patnaik_Airport%2C_Bhubaneswar%2C_Odisha.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Subhashish Panigrahi · CC BY-SA 3.0",
       "source": "https://commons.wikimedia.org/wiki/File:T1,_Biju_Patnaik_Airport,_Bhubaneswar,_Odisha.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/T1%2C_Biju_Patnaik_Airport%2C_Bhubaneswar%2C_Odisha%2C_India.jpg/960px-T1%2C_Biju_Patnaik_Airport%2C_Bhubaneswar%2C_Odisha%2C_India.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Subhashish Panigrahi · CC BY-SA 3.0",
       "source": "https://commons.wikimedia.org/wiki/File:T1,_Biju_Patnaik_Airport,_Bhubaneswar,_Odisha,_India.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/T1%2C_Biju_Patnaik_Airport%2C_Bhubaneswar%2C_Odisha%2C_India-2.jpg/960px-T1%2C_Biju_Patnaik_Airport%2C_Bhubaneswar%2C_Odisha%2C_India-2.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Subhashish Panigrahi · CC BY-SA 3.0",
       "source": "https://commons.wikimedia.org/wiki/File:T1,_Biju_Patnaik_Airport,_Bhubaneswar,_Odisha,_India-2.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/T1%2C_Biju_Patnaik_Airport%2C_Bhubaneswar%2C_Odisha%2C_India-1.jpg/960px-T1%2C_Biju_Patnaik_Airport%2C_Bhubaneswar%2C_Odisha%2C_India-1.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Subhashish Panigrahi · CC BY-SA 3.0",
       "source": "https://commons.wikimedia.org/wiki/File:T1,_Biju_Patnaik_Airport,_Bhubaneswar,_Odisha,_India-1.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/AirIndia_Airbus_at_Biju_Patnaik_Airport_Bhubaneswar.jpg/960px-AirIndia_Airbus_at_Biju_Patnaik_Airport_Bhubaneswar.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Aditya Mahar · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:AirIndia_Airbus_at_Biju_Patnaik_Airport_Bhubaneswar.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Biju_Patnaik_Airport_Bhubaneswar.jpg/960px-Biju_Patnaik_Airport_Bhubaneswar.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Aditya Mahar · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Biju_Patnaik_Airport_Bhubaneswar.jpg"
      }
     ],
     "driveLinks": [],
     "itinerary": [
      {
       "id": "it_in_odisha_1",
       "day": 1,
       "title": "Bhubaneswar",
       "note": "Arrive Bhubaneswar; Lingaraj Temple, ancient temple cluster",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_odisha_2",
       "day": 2,
       "title": "Konark",
       "note": "Day trip to Konark Sun Temple (~65km)",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_odisha_3",
       "day": 3,
       "title": "Puri",
       "note": "Travel to Puri (~60km); Jagannath Temple, Puri beach",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_odisha_4",
       "day": 4,
       "title": "Puri",
       "note": "Relax at Puri beach, local markets",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_odisha_5",
       "day": 5,
       "title": "Chilika Lake",
       "note": "Day trip to Chilika Lake (~50km); boat ride for Irrawaddy dolphins",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_odisha_6",
       "day": 6,
       "title": "Bhubaneswar",
       "note": "Return; Dhauli Peace Pagoda",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_odisha_7",
       "day": 7,
       "title": "Bhubaneswar",
       "note": "Free day / Pipili applique craft village; begin return journey",
       "cost": 0,
       "done": false
      }
     ],
     "noPhoto": false
    },
    {
     "id": "in_chhattisgarh",
     "name": "Chhattisgarh",
     "country": "Chhattisgarh",
     "city": "Raipur",
     "iso2": "IN",
     "iata": "RPR",
     "currency": "INR",
     "lat": 21.25,
     "lon": 81.63,
     "days": 5,
     "order": 21,
     "notes": "",
     "budget": {
      "railway": 5700,
      "intercity": 7000,
      "lodging": 7000,
      "food": 2000,
      "activities": 750,
      "petrol": 0,
      "misc": 1000
     },
     "images": [
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Sri_Ram_Mandir_raipur_.jpg/1024px-Sri_Ram_Mandir_raipur_.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
       "credit": "Raipur",
       "source": "https://en.wikipedia.org/wiki/Raipur"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/f/f3/TempioRaipur.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
       "credit": "User:YukioSanjo · CC BY-SA 3.0",
       "source": "https://commons.wikimedia.org/wiki/File:TempioRaipur.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Raipur_map_2021.png/960px-Raipur_map_2021.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "VishuN · CC0",
       "source": "https://commons.wikimedia.org/wiki/File:Raipur_map_2021.png"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Raipur_Skyline_in_2019.png/960px-Raipur_Skyline_in_2019.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "VishuN · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Raipur_Skyline_in_2019.png"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Jaistambh_Chowk%2C_Raipur_2018.png/960px-Jaistambh_Chowk%2C_Raipur_2018.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "VishuN · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Jaistambh_Chowk,_Raipur_2018.png"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Raipur_Skyline_2019.png/960px-Raipur_Skyline_2019.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "VishuN · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Raipur_Skyline_2019.png"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Raipur_BDO_Office_Main_Entrance.jpg/960px-Raipur_BDO_Office_Main_Entrance.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Arijit Kisku · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Raipur_BDO_Office_Main_Entrance.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Raipur_Municipal_Corporation_Logo.png/960px-Raipur_Municipal_Corporation_Logo.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Raipur Municipal Corporation · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Raipur_Municipal_Corporation_Logo.png"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/6/6c/The_Rajiv_Lochan_Temple%2C_circa_7th-8th_century%2C_Rajim%2CRaipur%2CChattisgarh.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
       "credit": "SpeakingArch · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:The_Rajiv_Lochan_Temple,_circa_7th-8th_century,_Rajim,Raipur,Chattisgarh.jpg"
      }
     ],
     "driveLinks": [],
     "itinerary": [
      {
       "id": "it_in_chhattisgarh_1",
       "day": 1,
       "title": "Raipur",
       "note": "Arrive Raipur; Mahant Ghasidas Museum, local markets",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_chhattisgarh_2",
       "day": 2,
       "title": "Jagdalpur",
       "note": "Travel to Jagdalpur (~300km, Bastar region)",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_chhattisgarh_3",
       "day": 3,
       "title": "Chitrakote Falls",
       "note": "Day trip to Chitrakote Falls, 'Niagara of India' (~40km)",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_chhattisgarh_4",
       "day": 4,
       "title": "Jagdalpur",
       "note": "Bastar tribal markets and craft villages",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_chhattisgarh_5",
       "day": 5,
       "title": "Kanger Valley NP",
       "note": "Explore Kanger Valley caves; begin return journey",
       "cost": 0,
       "done": false
      }
     ],
     "noPhoto": false
    },
    {
     "id": "in_telangana",
     "name": "Telangana",
     "country": "Telangana",
     "city": "Hyderabad",
     "iso2": "IN",
     "iata": "HYD",
     "currency": "INR",
     "lat": 17.39,
     "lon": 78.49,
     "days": 4,
     "order": 22,
     "notes": "",
     "budget": {
      "railway": 13000,
      "intercity": 6000,
      "lodging": 6000,
      "food": 1800,
      "activities": 1000,
      "petrol": 0,
      "misc": 600
     },
     "images": [
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Aerial_view_of_Durgam_cheruvu_and_Hitech_CIty.jpg/1024px-Aerial_view_of_Durgam_cheruvu_and_Hitech_CIty.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
       "credit": "Hyderabad",
       "source": "https://en.wikipedia.org/wiki/Hyderabad"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/0/06/Hyderabad1.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
       "credit": "Public domain",
       "source": "https://commons.wikimedia.org/wiki/File:Hyderabad1.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Charminar_Hyderabad_1.jpg/960px-Charminar_Hyderabad_1.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "DidierTais · CC BY-SA 3.0",
       "source": "https://commons.wikimedia.org/wiki/File:Charminar_Hyderabad_1.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Hyderabad_Financial_district%2CIndia.jpg/960px-Hyderabad_Financial_district%2CIndia.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Yedla70 · CC BY-SA 3.0",
       "source": "https://commons.wikimedia.org/wiki/File:Hyderabad_Financial_district,India.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Birla_Mandir%2C_Hyderabad%2C_India.JPG/960px-Birla_Mandir%2C_Hyderabad%2C_India.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Nikhilb239 · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Birla_Mandir,_Hyderabad,_India.JPG"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Birla_Mandir_in_Hyderabad%2C_2015.JPG/960px-Birla_Mandir_in_Hyderabad%2C_2015.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Nikhilb239 · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Birla_Mandir_in_Hyderabad,_2015.JPG"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/IKEA_showroom%2C_Hyderabad_17032019.jpg/960px-IKEA_showroom%2C_Hyderabad_17032019.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Nikhil B · CC BY 3.0",
       "source": "https://commons.wikimedia.org/wiki/File:IKEA_showroom,_Hyderabad_17032019.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/c/c3/Hyderabad_Montage_2020.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
       "credit": "Danloud · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Hyderabad_Montage_2020.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Diety_Statue_at_Birla_Mandir%2C_Hyderabad_%28Oct_2025%29.jpg/960px-Diety_Statue_at_Birla_Mandir%2C_Hyderabad_%28Oct_2025%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Kuldeepburjbhalaike · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Diety_Statue_at_Birla_Mandir,_Hyderabad_(Oct_2025).jpg"
      }
     ],
     "driveLinks": [],
     "itinerary": [
      {
       "id": "it_in_telangana_1",
       "day": 1,
       "title": "Hyderabad",
       "note": "Arrive Hyderabad; Charminar, Laad Bazaar, biryani tasting",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_telangana_2",
       "day": 2,
       "title": "Hyderabad",
       "note": "Golconda Fort sound-and-light show, Chowmahalla Palace",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_telangana_3",
       "day": 3,
       "title": "Warangal",
       "note": "Day trip to Warangal Fort and Thousand Pillar Temple (~145km)",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_telangana_4",
       "day": 4,
       "title": "Hyderabad",
       "note": "Hussain Sagar Lake, local markets; begin return journey",
       "cost": 0,
       "done": false
      }
     ],
     "noPhoto": false
    },
    {
     "id": "in_andhra-pradesh",
     "name": "Andhra Pradesh",
     "country": "Andhra Pradesh",
     "city": "Visakhapatnam",
     "iso2": "IN",
     "iata": "VTZ",
     "currency": "INR",
     "lat": 17.69,
     "lon": 83.22,
     "days": 6,
     "order": 23,
     "notes": "",
     "budget": {
      "railway": 15000,
      "intercity": 16000,
      "lodging": 12000,
      "food": 2700,
      "activities": 1500,
      "petrol": 0,
      "misc": 900
     },
     "images": [
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/What_is_Shipyard.jpg/1024px-What_is_Shipyard.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
       "credit": "Visakhapatnam",
       "source": "https://en.wikipedia.org/wiki/Visakhapatnam"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Visakhapatnam_Montage.png/960px-Visakhapatnam_Montage.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Adityamadhav83 · CC BY-SA 3.0",
       "source": "https://commons.wikimedia.org/wiki/File:Visakhapatnam_Montage.png"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Visakhapatnam_from_Simhachalam_hill.jpg/960px-Visakhapatnam_from_Simhachalam_hill.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "eclicks_by_bunny · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Visakhapatnam_from_Simhachalam_hill.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Lighthouse_on_Visakhapatnam_beach_road.jpg/960px-Lighthouse_on_Visakhapatnam_beach_road.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "eclicks_by_bunny · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Lighthouse_on_Visakhapatnam_beach_road.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Sunset_over_Visakhapatnam_city.jpg/960px-Sunset_over_Visakhapatnam_city.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "eclicks_by_bunny · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Sunset_over_Visakhapatnam_city.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Vizagapatam_ivory_jewellery_box.jpg/960px-Vizagapatam_ivory_jewellery_box.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Raja Ramakrishna Chinna Swamy Naidu · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Vizagapatam_ivory_jewellery_box.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Visakhapatnam_shore.jpg/960px-Visakhapatnam_shore.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Raja Ramakrishna Chinna Swamy Naidu · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Visakhapatnam_shore.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Vizag_shore.jpg/960px-Vizag_shore.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Raja Ramakrishna Chinna Swamy Naidu · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Vizag_shore.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Visakhapatnam_city%2C_the_bird%27s_eye_view_from_Ross_hill_in_Vizag_06.jpg/960px-Visakhapatnam_city%2C_the_bird%27s_eye_view_from_Ross_hill_in_Vizag_06.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Pinakpani · CC BY 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Visakhapatnam_city,_the_bird%27s_eye_view_from_Ross_hill_in_Vizag_06.jpg"
      }
     ],
     "driveLinks": [],
     "itinerary": [
      {
       "id": "it_in_andhra-pradesh_1",
       "day": 1,
       "title": "Visakhapatnam",
       "note": "Arrive Vizag; RK Beach, Kailasagiri hilltop park",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_andhra-pradesh_2",
       "day": 2,
       "title": "Araku Valley",
       "note": "Scenic train ride to Araku Valley (~120km, tribal region)",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_andhra-pradesh_3",
       "day": 3,
       "title": "Araku Valley",
       "note": "Coffee plantations, Borra Caves",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_andhra-pradesh_4",
       "day": 4,
       "title": "Visakhapatnam",
       "note": "Return to Vizag; submarine museum",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_andhra-pradesh_5",
       "day": 5,
       "title": "Tirupati",
       "note": "Long travel to Tirupati (~800km; overnight bus/train)",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_andhra-pradesh_6",
       "day": 6,
       "title": "Tirupati",
       "note": "Tirumala Venkateswara Temple (early queue for darshan); begin return journey",
       "cost": 0,
       "done": false
      }
     ],
     "noPhoto": false
    },
    {
     "id": "in_karnataka",
     "name": "Karnataka",
     "country": "Karnataka",
     "city": "Bangalore",
     "iso2": "IN",
     "iata": "BLR",
     "currency": "INR",
     "lat": 12.97,
     "lon": 77.59,
     "days": 10,
     "order": 24,
     "notes": "",
     "budget": {
      "railway": 13000,
      "intercity": 16500,
      "lodging": 20000,
      "food": 5500,
      "activities": 3500,
      "petrol": 1000,
      "misc": 1500
     },
     "images": [
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/View_from_Visvesvaraya_Industrial_and_Technological_Museum_%282025%29_02.jpg/1024px-View_from_Visvesvaraya_Industrial_and_Technological_Museum_%282025%29_02.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
       "credit": "Bengaluru",
       "source": "https://en.wikipedia.org/wiki/Bengaluru"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Dharmaraya_Swamy_Temple_Bangalore_edit1.jpg/960px-Dharmaraya_Swamy_Temple_Bangalore_edit1.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Muhammad Mahdi Karim · GFDL 1.2",
       "source": "https://commons.wikimedia.org/wiki/File:Dharmaraya_Swamy_Temple_Bangalore_edit1.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/High_Court_of_Karnataka%2C_Bangalore_MMK.jpg/960px-High_Court_of_Karnataka%2C_Bangalore_MMK.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Muhammad Mahdi Karim/ Augustus Binu · GFDL 1.2",
       "source": "https://commons.wikimedia.org/wiki/File:High_Court_of_Karnataka,_Bangalore_MMK.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/8/80/BangaloreMontage.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
       "credit": "Indianhilbilly · CC BY-SA 3.0",
       "source": "https://commons.wikimedia.org/wiki/File:BangaloreMontage.png"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/A_photo_of_a_city_scene_in_Bengaluru.jpg/960px-A_photo_of_a_city_scene_in_Bengaluru.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Matthew T Rader · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:A_photo_of_a_city_scene_in_Bengaluru.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Gateway_of_Bangalore_fort.jpg/960px-Gateway_of_Bangalore_fort.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Charles Gold · Public domain",
       "source": "https://commons.wikimedia.org/wiki/File:Gateway_of_Bangalore_fort.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Indian_Independence_day_celebration_216th_flower_show_2024%2C_Lalbagh%2C_Bangalore_35.jpg/960px-Indian_Independence_day_celebration_216th_flower_show_2024%2C_Lalbagh%2C_Bangalore_35.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Gpkp · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Indian_Independence_day_celebration_216th_flower_show_2024,_Lalbagh,_Bangalore_35.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Indian_Independence_day_celebration_216th_flower_show_2024%2C_Lalbagh%2C_Bangalore_129.jpg/960px-Indian_Independence_day_celebration_216th_flower_show_2024%2C_Lalbagh%2C_Bangalore_129.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Gpkp · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Indian_Independence_day_celebration_216th_flower_show_2024,_Lalbagh,_Bangalore_129.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Red_Dahlia_flowers%2C_216th_flower_show_2024%2C_Lalbagh%2C_Bangalore_186.jpg/960px-Red_Dahlia_flowers%2C_216th_flower_show_2024%2C_Lalbagh%2C_Bangalore_186.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Gpkp · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Red_Dahlia_flowers,_216th_flower_show_2024,_Lalbagh,_Bangalore_186.jpg"
      }
     ],
     "driveLinks": [],
     "itinerary": [
      {
       "id": "it_in_karnataka_1",
       "day": 1,
       "title": "Bangalore",
       "note": "Arrive Bangalore; Lalbagh Botanical Garden, Cubbon Park",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_karnataka_2",
       "day": 2,
       "title": "Mysore",
       "note": "Travel to Mysore (~145km); Mysore Palace",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_karnataka_3",
       "day": 3,
       "title": "Mysore",
       "note": "Chamundi Hills, Brindavan Gardens",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_karnataka_4",
       "day": 4,
       "title": "Coorg (Madikeri)",
       "note": "Travel to Coorg (~120km); coffee plantations",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_karnataka_5",
       "day": 5,
       "title": "Coorg",
       "note": "Abbey Falls, Talakaveri, trek to Tadiandamol peak",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_karnataka_6",
       "day": 6,
       "title": "Hampi",
       "note": "Long travel to Hampi (~350km via Hassan)",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_karnataka_7",
       "day": 7,
       "title": "Hampi",
       "note": "Vijayanagara ruins, Virupaksha Temple, boulder landscape",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_karnataka_8",
       "day": 8,
       "title": "Hampi",
       "note": "Sunset at Matanga Hill; cycle around ruins",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_karnataka_9",
       "day": 9,
       "title": "Gokarna",
       "note": "Travel to Gokarna (~250km); beach town, Om Beach",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_karnataka_10",
       "day": 10,
       "title": "Gokarna",
       "note": "Beach hopping (Kudle, Half Moon, Paradise); begin return journey",
       "cost": 0,
       "done": false
      }
     ],
     "noPhoto": false
    },
    {
     "id": "in_kerala",
     "name": "Kerala",
     "country": "Kerala",
     "city": "Kochi",
     "iso2": "IN",
     "iata": "COK",
     "currency": "INR",
     "lat": 9.93,
     "lon": 76.27,
     "days": 10,
     "order": 25,
     "notes": "",
     "budget": {
      "railway": 18000,
      "intercity": 12500,
      "lodging": 18000,
      "food": 5500,
      "activities": 3500,
      "petrol": 1000,
      "misc": 1500
     },
     "images": [
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Kochi_Skyline.jpg/1024px-Kochi_Skyline.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
       "credit": "Kochi",
       "source": "https://en.wikipedia.org/wiki/Kochi"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Kochi_chinese_fishing-net-20080215-01a.jpg/960px-Kochi_chinese_fishing-net-20080215-01a.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Hans A. Rosbach · CC BY-SA 3.0",
       "source": "https://commons.wikimedia.org/wiki/File:Kochi_chinese_fishing-net-20080215-01a.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/7/7e/Kochi_India.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
       "credit": "Boby George (Flickr profile: https://www.flickr.com/photos/beegeevee/) · CC BY-SA 3.0",
       "source": "https://commons.wikimedia.org/wiki/File:Kochi_India.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/%E9%AB%98%E7%9F%A5%E5%9F%8E_%E5%A4%A9%E5%AE%88%E3%81%8B%E3%82%89%E3%81%AE%E6%99%AF%E8%89%B23_Kochi_Castle_-_panoramio.jpg/960px-%E9%AB%98%E7%9F%A5%E5%9F%8E_%E5%A4%A9%E5%AE%88%E3%81%8B%E3%82%89%E3%81%AE%E6%99%AF%E8%89%B23_Kochi_Castle_-_panoramio.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "baggio4ever · CC BY 3.0",
       "source": "https://commons.wikimedia.org/wiki/File:%E9%AB%98%E7%9F%A5%E5%9F%8E_%E5%A4%A9%E5%AE%88%E3%81%8B%E3%82%89%E3%81%AE%E6%99%AF%E8%89%B23_Kochi_Castle_-_panoramio.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Cochin_kochi_india_%2839553835%29.jpg/960px-Cochin_kochi_india_%2839553835%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Thejas · CC BY 2.0",
       "source": "https://commons.wikimedia.org/wiki/File:Cochin_kochi_india_(39553835).jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Kochi%2C_Jew_Town%2C_India.jpg/960px-Kochi%2C_Jew_Town%2C_India.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Vyacheslav Argenberg · CC BY 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Kochi,_Jew_Town,_India.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Kochi%2C_Paradesi_Synagogue%2C_Cochin_Jewish_Synagogue%2C_Jew_Town%2C_Kerala%2C_India.jpg/960px-Kochi%2C_Paradesi_Synagogue%2C_Cochin_Jewish_Synagogue%2C_Jew_Town%2C_Kerala%2C_India.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Vyacheslav Argenberg · CC BY 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Kochi,_Paradesi_Synagogue,_Cochin_Jewish_Synagogue,_Jew_Town,_Kerala,_India.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Kochi%2C_Paradesi_Synagogue%2C_Jew_Town%2C_Kerala%2C_India.jpg/960px-Kochi%2C_Paradesi_Synagogue%2C_Jew_Town%2C_Kerala%2C_India.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Vyacheslav Argenberg · CC BY 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Kochi,_Paradesi_Synagogue,_Jew_Town,_Kerala,_India.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Colorful_shawls_in_Fort_Kochi%2C_India_%288311203512%29.jpg/960px-Colorful_shawls_in_Fort_Kochi%2C_India_%288311203512%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "shutterstuman · CC BY 2.0",
       "source": "https://commons.wikimedia.org/wiki/File:Colorful_shawls_in_Fort_Kochi,_India_(8311203512).jpg"
      }
     ],
     "driveLinks": [],
     "itinerary": [
      {
       "id": "it_in_kerala_1",
       "day": 1,
       "title": "Kochi",
       "note": "Arrive Kochi; Fort Kochi, Chinese fishing nets, Mattancherry Palace",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_kerala_2",
       "day": 2,
       "title": "Munnar",
       "note": "Travel to Munnar (~130km); tea plantations",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_kerala_3",
       "day": 3,
       "title": "Munnar",
       "note": "Eravikulam National Park, tea museum, Top Station viewpoint",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_kerala_4",
       "day": 4,
       "title": "Thekkady",
       "note": "Travel to Thekkady (~90km); Periyar Wildlife Sanctuary",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_kerala_5",
       "day": 5,
       "title": "Thekkady",
       "note": "Boat safari on Periyar Lake, spice plantation tour",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_kerala_6",
       "day": 6,
       "title": "Alleppey",
       "note": "Travel to Alleppey (~140km); budget houseboat / day cruise",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_kerala_7",
       "day": 7,
       "title": "Alleppey",
       "note": "Backwater village walk, canoe ride through narrow canals",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_kerala_8",
       "day": 8,
       "title": "Varkala",
       "note": "Travel to Varkala (~150km); cliffside beach town",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_kerala_9",
       "day": 9,
       "title": "Varkala",
       "note": "Relax at Varkala Beach, cliff cafes, Janardanaswamy Temple",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_kerala_10",
       "day": 10,
       "title": "Kochi",
       "note": "Return towards Kochi for departure; begin return journey",
       "cost": 0,
       "done": false
      }
     ],
     "noPhoto": false
    },
    {
     "id": "in_tamil-nadu",
     "name": "Tamil Nadu",
     "country": "Tamil Nadu",
     "city": "Chennai",
     "iso2": "IN",
     "iata": "MAA",
     "currency": "INR",
     "lat": 13.08,
     "lon": 80.27,
     "days": 10,
     "order": 26,
     "notes": "",
     "budget": {
      "railway": 15000,
      "intercity": 20000,
      "lodging": 16000,
      "food": 4500,
      "activities": 2500,
      "petrol": 0,
      "misc": 1500
     },
     "images": [
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Chennai_Central.jpg/1024px-Chennai_Central.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
       "credit": "Chennai",
       "source": "https://en.wikipedia.org/wiki/Chennai"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Ripon_Building_panorama.jpg/960px-Ripon_Building_panorama.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "This Image was created by User:PlaneMad.\nIf you are using the image un · CC BY-SA 2.5",
       "source": "https://commons.wikimedia.org/wiki/File:Ripon_Building_panorama.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Chennai_train_station.jpg/960px-Chennai_train_station.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Arian Zwegers\nderivative work: MrPanyGoff · CC BY 2.0",
       "source": "https://commons.wikimedia.org/wiki/File:Chennai_train_station.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Chennai_Presidency_College_building_in_Chennai_25.jpg/960px-Chennai_Presidency_College_building_in_Chennai_25.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Pinakpani · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Chennai_Presidency_College_building_in_Chennai_25.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Chennai_Transit_Map.jpg/960px-Chennai_Transit_Map.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Karthikeyan Manimaran · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Chennai_Transit_Map.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/7/70/Chennai_7.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
       "credit": "Vinoth offl · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Chennai_7.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Chennai_9.jpg/960px-Chennai_9.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Ganesh Mohan T · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Chennai_9.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Chennai_01.jpg/960px-Chennai_01.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Ganesh Mohan T · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Chennai_01.jpg"
      }
     ],
     "driveLinks": [],
     "itinerary": [
      {
       "id": "it_in_tamil-nadu_1",
       "day": 1,
       "title": "Chennai",
       "note": "Arrive Chennai; Marina Beach, Kapaleeshwarar Temple",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_tamil-nadu_2",
       "day": 2,
       "title": "Mahabalipuram",
       "note": "Day trip to Mahabalipuram (~60km); Shore Temple, rock-cut caves",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_tamil-nadu_3",
       "day": 3,
       "title": "Pondicherry",
       "note": "Travel to Pondicherry (~160km); French Quarter, Auroville",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_tamil-nadu_4",
       "day": 4,
       "title": "Pondicherry",
       "note": "Promenade Beach, Auroville visitor center",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_tamil-nadu_5",
       "day": 5,
       "title": "Madurai",
       "note": "Travel to Madurai (~300km); Meenakshi Amman Temple",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_tamil-nadu_6",
       "day": 6,
       "title": "Madurai",
       "note": "Temple complex evening prayers, Thirumalai Nayakkar Palace",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_tamil-nadu_7",
       "day": 7,
       "title": "Rameswaram",
       "note": "Day trip to Rameswaram (~170km); Ramanathaswamy Temple, Dhanushkodi",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_tamil-nadu_8",
       "day": 8,
       "title": "Kodaikanal",
       "note": "Travel to Kodaikanal hill station (~120km)",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_tamil-nadu_9",
       "day": 9,
       "title": "Kodaikanal",
       "note": "Boating on Kodai Lake, Coaker's Walk, Pillar Rocks",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_tamil-nadu_10",
       "day": 10,
       "title": "Ooty",
       "note": "Travel to Ooty (~200km); Nilgiri Mountain Railway toy train; begin return journey",
       "cost": 0,
       "done": false
      }
     ],
     "noPhoto": false
    },
    {
     "id": "in_goa",
     "name": "Goa",
     "country": "Goa",
     "city": "Panaji",
     "iso2": "IN",
     "iata": "GOI",
     "currency": "INR",
     "lat": 15.5,
     "lon": 73.83,
     "days": 6,
     "order": 27,
     "notes": "",
     "budget": {
      "railway": 17000,
      "intercity": 4800,
      "lodging": 10000,
      "food": 3300,
      "activities": 2100,
      "petrol": 1200,
      "misc": 900
     },
     "images": [
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Panaji_City.JPG/1024px-Panaji_City.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
       "credit": "Panaji",
       "source": "https://en.wikipedia.org/wiki/Panaji"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Panaji%2C_Goa%2C_India%2C_Our_Lady_of_the_Immaculate_Conception_Church_at_night.jpg/960px-Panaji%2C_Goa%2C_India%2C_Our_Lady_of_the_Immaculate_Conception_Church_at_night.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Vyacheslav Argenberg · CC BY 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Panaji,_Goa,_India,_Our_Lady_of_the_Immaculate_Conception_Church_at_night.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Panaji%2C_Goa%2C_India%2C_Arabain_Sea%2C_Mandovi_River.jpg/960px-Panaji%2C_Goa%2C_India%2C_Arabain_Sea%2C_Mandovi_River.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Vyacheslav Argenberg · CC BY 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Panaji,_Goa,_India,_Arabain_Sea,_Mandovi_River.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Panaji%2C_Goa%2C_India%2C_Sunset%2C_Mandovi_River.jpg/960px-Panaji%2C_Goa%2C_India%2C_Sunset%2C_Mandovi_River.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Vyacheslav Argenberg · CC BY 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Panaji,_Goa,_India,_Sunset,_Mandovi_River.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Panaji%2C_Goa%2C_India%2C_Fishing_boats%2C_Mandovi_River.jpg/960px-Panaji%2C_Goa%2C_India%2C_Fishing_boats%2C_Mandovi_River.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Vyacheslav Argenberg · CC BY 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Panaji,_Goa,_India,_Fishing_boats,_Mandovi_River.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Panaji%2C_nostra_signora_dell%27immacolata_concezione%2C_esterno_04.jpg/960px-Panaji%2C_nostra_signora_dell%27immacolata_concezione%2C_esterno_04.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Sailko · CC BY 3.0",
       "source": "https://commons.wikimedia.org/wiki/File:Panaji,_nostra_signora_dell%27immacolata_concezione,_esterno_04.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Panaji_-_Church_of_Our_Lady_of_the_Immaculate_Conception_-_Mary.jpg/960px-Panaji_-_Church_of_Our_Lady_of_the_Immaculate_Conception_-_Mary.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Ingo Mehling · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Panaji_-_Church_of_Our_Lady_of_the_Immaculate_Conception_-_Mary.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/1888_Plan_of_Nova_Goa_%28Panjim%29.jpg/960px-1888_Plan_of_Nova_Goa_%28Panjim%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Sociedade de Geografia de Lisboa · Public domain",
       "source": "https://commons.wikimedia.org/wiki/File:1888_Plan_of_Nova_Goa_(Panjim).jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Junction_of_Pandurang_Pissurlekar_Road_and_MG_Road_in_Panaji.jpg/960px-Junction_of_Pandurang_Pissurlekar_Road_and_MG_Road_in_Panaji.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "SerChevalerie · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Junction_of_Pandurang_Pissurlekar_Road_and_MG_Road_in_Panaji.jpg"
      }
     ],
     "driveLinks": [],
     "itinerary": [
      {
       "id": "it_in_goa_1",
       "day": 1,
       "title": "North Goa (Baga)",
       "note": "Arrive Goa; Baga Beach, evening market",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_goa_2",
       "day": 2,
       "title": "North Goa (Anjuna)",
       "note": "Anjuna flea market (Wed), Vagator Beach, Chapora Fort",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_goa_3",
       "day": 3,
       "title": "North Goa (Calangute)",
       "note": "Water sports at Calangute, sunset at Fort Aguada",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_goa_4",
       "day": 4,
       "title": "South Goa (Palolem)",
       "note": "Travel to Palolem Beach (~40km); quieter southern beaches",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_goa_5",
       "day": 5,
       "title": "South Goa",
       "note": "Cola Beach, Agonda Beach; dolphin-spotting boat trip",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_goa_6",
       "day": 6,
       "title": "Panaji",
       "note": "Old Goa churches (UNESCO), Fontainhas Latin Quarter; begin return journey",
       "cost": 0,
       "done": false
      }
     ],
     "noPhoto": false
    },
    {
     "id": "in_maharashtra",
     "name": "Maharashtra",
     "country": "Maharashtra",
     "city": "Mumbai",
     "iso2": "IN",
     "iata": "BOM",
     "currency": "INR",
     "lat": 19.08,
     "lon": 72.88,
     "days": 8,
     "order": 28,
     "notes": "",
     "budget": {
      "railway": 16000,
      "intercity": 11000,
      "lodging": 11000,
      "food": 4400,
      "activities": 2800,
      "petrol": 0,
      "misc": 1200
     },
     "images": [
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Mumbai_Bandra-Worli_Sea_Link.jpg/1024px-Mumbai_Bandra-Worli_Sea_Link.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
       "credit": "Mumbai",
       "source": "https://en.wikipedia.org/wiki/Mumbai"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Mumbai_03-2016_10_skyline_of_Lotus_Colony.jpg/960px-Mumbai_03-2016_10_skyline_of_Lotus_Colony.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "A.Savin · FAL",
       "source": "https://commons.wikimedia.org/wiki/File:Mumbai_03-2016_10_skyline_of_Lotus_Colony.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Mumbai_03-2016_29_Kamla_Nehru_Park.jpg/960px-Mumbai_03-2016_29_Kamla_Nehru_Park.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "A.Savin · FAL",
       "source": "https://commons.wikimedia.org/wiki/File:Mumbai_03-2016_29_Kamla_Nehru_Park.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Mumbai_03-2016_52_Dharavi_near_Mahim_Junction.jpg/960px-Mumbai_03-2016_52_Dharavi_near_Mahim_Junction.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "A.Savin · FAL",
       "source": "https://commons.wikimedia.org/wiki/File:Mumbai_03-2016_52_Dharavi_near_Mahim_Junction.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Mumbai_03-2016_72_Flora_Fountain.jpg/960px-Mumbai_03-2016_72_Flora_Fountain.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "A.Savin · FAL",
       "source": "https://commons.wikimedia.org/wiki/File:Mumbai_03-2016_72_Flora_Fountain.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Mumbai_03-2016_110_Masjid_station_surroundings.jpg/960px-Mumbai_03-2016_110_Masjid_station_surroundings.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "A.Savin · FAL",
       "source": "https://commons.wikimedia.org/wiki/File:Mumbai_03-2016_110_Masjid_station_surroundings.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Mumbai%2C_India%2C_Bombay%2C_Mumbai_skyline_at_sunset.jpg/960px-Mumbai%2C_India%2C_Bombay%2C_Mumbai_skyline_at_sunset.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Vyacheslav Argenberg · CC BY 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Mumbai,_India,_Bombay,_Mumbai_skyline_at_sunset.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Mumbai%2C_India%2C_Bombay%2C_Mumbai_city_skyline_at_night.jpg/960px-Mumbai%2C_India%2C_Bombay%2C_Mumbai_city_skyline_at_night.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Vyacheslav Argenberg · CC BY 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Mumbai,_India,_Bombay,_Mumbai_city_skyline_at_night.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Middle_Ground_Coastal_Battery%2C_Arabian_Sea%2C_Mumbai%2C_India.jpg/960px-Middle_Ground_Coastal_Battery%2C_Arabian_Sea%2C_Mumbai%2C_India.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "iMahesh · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Middle_Ground_Coastal_Battery,_Arabian_Sea,_Mumbai,_India.jpg"
      }
     ],
     "driveLinks": [],
     "itinerary": [
      {
       "id": "it_in_maharashtra_1",
       "day": 1,
       "title": "Mumbai",
       "note": "Arrive Mumbai; Gateway of India, Marine Drive",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_maharashtra_2",
       "day": 2,
       "title": "Mumbai",
       "note": "Elephanta Caves ferry trip, Colaba Causeway market",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_maharashtra_3",
       "day": 3,
       "title": "Lonavala",
       "note": "Travel to Lonavala (~85km); Karla/Bhaja Caves, Tiger's Point",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_maharashtra_4",
       "day": 4,
       "title": "Pune",
       "note": "Travel to Pune (~65km); Shaniwar Wada, Aga Khan Palace",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_maharashtra_5",
       "day": 5,
       "title": "Aurangabad",
       "note": "Travel to Aurangabad (~235km)",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_maharashtra_6",
       "day": 6,
       "title": "Ajanta Caves",
       "note": "Day trip to Ajanta Caves (~100km); UNESCO Buddhist caves",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_maharashtra_7",
       "day": 7,
       "title": "Ellora Caves",
       "note": "Day trip to Ellora Caves (~30km); Kailasa rock-cut temple",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_maharashtra_8",
       "day": 8,
       "title": "Aurangabad",
       "note": "Bibi Ka Maqbara ('mini Taj'); begin return journey",
       "cost": 0,
       "done": false
      }
     ],
     "noPhoto": false
    },
    {
     "id": "in_jammu---kashmir",
     "name": "Jammu & Kashmir",
     "country": "Jammu & Kashmir",
     "city": "Srinagar",
     "iso2": "IN",
     "iata": "SXR",
     "currency": "INR",
     "lat": 34.08,
     "lon": 74.8,
     "days": 10,
     "order": 29,
     "notes": "",
     "budget": {
      "railway": 15000,
      "intercity": 11000,
      "lodging": 12000,
      "food": 5500,
      "activities": 4000,
      "petrol": 0,
      "misc": 2000
     },
     "images": [
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Red_and_Yellow_Tulips.JPG/1024px-Red_and_Yellow_Tulips.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
       "credit": "Srinagar",
       "source": "https://en.wikipedia.org/wiki/Srinagar"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Srinagar_pano.jpg/960px-Srinagar_pano.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "KennyOMG · CC BY-SA 3.0",
       "source": "https://commons.wikimedia.org/wiki/File:Srinagar_pano.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Pahalgam_Valley.jpg/960px-Pahalgam_Valley.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "KennyOMG · CC BY-SA 3.0",
       "source": "https://commons.wikimedia.org/wiki/File:Pahalgam_Valley.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Shankaracharya_Temple_Srinagar_25102023A.jpg/960px-Shankaracharya_Temple_Srinagar_25102023A.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Hellohappy · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Shankaracharya_Temple_Srinagar_25102023A.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Srinagar_Handicrafts_605.jpg/960px-Srinagar_Handicrafts_605.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Bright-210 · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Srinagar_Handicrafts_605.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Srinagar_Handicrafts_606.jpg/960px-Srinagar_Handicrafts_606.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Bright-210 · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Srinagar_Handicrafts_606.jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Srinagar_%2886240%29.jpg/960px-Srinagar_%2886240%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Gannu03 · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Srinagar_(86240).jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Srinagar_%2842099%29.jpg/960px-Srinagar_%2842099%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Gannu03 · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Srinagar_(42099).jpg"
      },
      {
       "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Srinagar_%2884139%29.jpg/960px-Srinagar_%2884139%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
       "credit": "Gannu03 · CC BY-SA 4.0",
       "source": "https://commons.wikimedia.org/wiki/File:Srinagar_(84139).jpg"
      }
     ],
     "driveLinks": [],
     "itinerary": [
      {
       "id": "it_in_jammu---kashmir_1",
       "day": 1,
       "title": "Jammu",
       "note": "Jammu — Raghunath Temple, Bahu Fort",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_jammu---kashmir_2",
       "day": 2,
       "title": "Srinagar",
       "note": "Vande Bharat to Srinagar — houseboat check-in, evening Shikara ride on Dal Lake",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_jammu---kashmir_3",
       "day": 3,
       "title": "Srinagar",
       "note": "Srinagar — Mughal Gardens (Nishat, Shalimar, Chashme Shahi), Shankaracharya Temple",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_jammu---kashmir_4",
       "day": 4,
       "title": "Gulmarg",
       "note": "Gulmarg day trip — Gondola Phase 1 (₹800; Phase 2 is a ₹1,000 optional add-on, not in the base budget)",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_jammu---kashmir_5",
       "day": 5,
       "title": "Pahalgam",
       "note": "5–6. Pahalgam — Betaab Valley, Aru Valley pony ride",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_jammu---kashmir_6",
       "day": 6,
       "title": "Pahalgam",
       "note": "5–6. Pahalgam — Betaab Valley, Aru Valley pony ride",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_jammu---kashmir_7",
       "day": 7,
       "title": "Srinagar",
       "note": "Back to Srinagar",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_jammu---kashmir_8",
       "day": 8,
       "title": "Sonmarg",
       "note": "Sonmarg day trip — Thajiwas Glacier",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_jammu---kashmir_9",
       "day": 9,
       "title": "Srinagar",
       "note": "Srinagar — old city, dawn floating market, shawl/saffron shopping",
       "cost": 0,
       "done": false
      },
      {
       "id": "it_in_jammu---kashmir_10",
       "day": 10,
       "title": "Jammu",
       "note": "Return: Vande Bharat to Jammu, same-day train to Chandigarh",
       "cost": 0,
       "done": false
      }
     ],
     "noPhoto": false
    }
   ],
   "expenses": []
  }
 ],
 "stamp": "333f23004659",
 "stampNote": "36 countries, 29 states, 555 days"
};
