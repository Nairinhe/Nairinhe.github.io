var eventNames =
{
  "MidyearMayhem" : "Midyear Mayhem",
  "Anniversary"   : "Anniversary Jubilee",
  "Jester"        : "Jester's Festival",
  "ChapterLaunch" : "Chapter PC/MAC 'early access'",
  "Witches"       : "Witches Festival",
  "NewLife"       : "New Life Festival",

  "ImperialCity"  : "Imperial City Event",
  "ThievesDb"     : "Thieves Guild and Dark Brotherhood Event",
  "Orsinium"      : "Orsinium Event",
  "Undaunted"     : "Undaunted Celebration",
  "Exploration"   : "Explorer's Celebration",
	"YearOne"       : "Year One Celebration",

  "Summerset"     : "Summerset Event",
  "Morrowind"     : "Morrowind Event",
	"Elsweyr"       : "Pan-Elsweyr Celebration",
  "Season"        : "Season's Chapter Event",

  "ClockworkCity" : "Clockwork City Event",
  "Dragonguard"   : "Dawn of the Dragonguard",
  "Murkmire"      : "Murkmire Event",
  "Tribunal"      : "Tribunal Celebration",

  "BlackFriday"   : "Black Fredas Sale"
};

var events =
[
		// established event but moved here so that list looks nicer
		{key: "MidyearMayhem",	datestart: new Date(2017, 6, 20),	dateend: new Date(2017, 6, 31)},
		{key: "MidyearMayhem",	datestart: new Date(2018, 6, 26),	dateend: new Date(2018, 7, 6)},
		{key: "MidyearMayhem",	datestart: new Date(2019, 0, 10),	dateend: new Date(2019, 0, 21)},
		{key: "MidyearMayhem",	datestart: new Date(2020, 0, 23),	dateend: new Date(2020, 1, 3)},
		{key: "MidyearMayhem",	datestart: new Date(2020, 5, 25),	dateend: new Date(2020, 6, 8)},
		{key: "MidyearMayhem",	datestart: new Date(2021, 0, 28),	dateend: new Date(2021, 1, 9)},
		{key: "MidyearMayhem",	datestart: new Date(2021, 5, 24),	dateend: new Date(2021, 6, 6)},

		// those events are persistent because are tied to IRL stuff
		{key: "Anniversary",	datestart: new Date(2016, 3, 4),	dateend: new Date(2016, 3, 12)},
		{key: "Anniversary",	datestart: new Date(2017, 3, 4),	dateend: new Date(2017, 3, 18)},
		{key: "Anniversary",	datestart: new Date(2018, 3, 4),	dateend: new Date(2018, 3, 23)},
		{key: "Anniversary",	datestart: new Date(2019, 3, 4),	dateend: new Date(2019, 4, 9)},
		{key: "Anniversary",	datestart: new Date(2020, 3, 2),	dateend: new Date(2020, 3, 14)},
		{key: "Anniversary",	datestart: new Date(2021, 3, 1),	dateend: new Date(2021, 3, 15)},

		{key: "Jester",		datestart: new Date(2017, 2, 23),	dateend: new Date(2017, 3, 4)},
		{key: "Jester",		datestart: new Date(2018, 2, 29),	dateend: new Date(2018, 3, 2)},
		{key: "Jester",		datestart: new Date(2019, 2, 21),	dateend: new Date(2019, 3, 2)},
		{key: "Jester",		datestart: new Date(2020, 2, 26),	dateend: new Date(2020, 3, 2)},
		{key: "Jester",		datestart: new Date(2021, 2, 25),	dateend: new Date(2021, 3, 1)},

		{key: "ChapterLaunch",	datestart: new Date(2017, 4, 22),	dateend: new Date(2017, 5, 6),	note: "Morrowind"},
		{key: "ChapterLaunch",	datestart: new Date(2018, 4, 21),	dateend: new Date(2018, 5, 5),	note: "Summerset"},
		{key: "ChapterLaunch",	datestart: new Date(2019, 4, 20),	dateend: new Date(2019, 5, 4),	note: "Elsweyr"},
		{key: "ChapterLaunch",	datestart: new Date(2020, 4, 26),	dateend: new Date(2020, 5, 9),	note: "Greymoor"},
		{key: "ChapterLaunch",	datestart: new Date(2021, 5, 1),	dateend: new Date(2021, 5, 8),	note: "Blackwood"},

		{key: "Witches",	datestart: new Date(2016, 9, 13),	dateend: new Date(2016, 10, 8)},
		{key: "Witches",	datestart: new Date(2017, 9, 20),	dateend: new Date(2017, 10, 1)},
		{key: "Witches",	datestart: new Date(2018, 9, 18),	dateend: new Date(2018, 10, 1)},
		{key: "Witches",	datestart: new Date(2019, 9, 24),	dateend: new Date(2019, 10, 11)},
		{key: "Witches",	datestart: new Date(2020, 9, 22),	dateend: new Date(2020, 10, 3)},
		{key: "Witches",	datestart: new Date(2021, 9, 21),	dateend: new Date(2021, 10, 2)},

		{key: "NewLife",	datestart: new Date(2016, 11, 15),	dateend: new Date(2017, 0, 4)},
		{key: "NewLife",	datestart: new Date(2017, 11, 15),	dateend: new Date(2018, 0, 2)},
		{key: "NewLife",	datestart: new Date(2018, 11, 13),	dateend: new Date(2019, 0, 2)},
		{key: "NewLife",	datestart: new Date(2019, 11, 19),	dateend: new Date(2020, 0, 2)},
		{key: "NewLife",	datestart: new Date(2020, 11, 17),	dateend: new Date(2021, 0, 5)},

		// these are traditional established events
		{key: "ImperialCity",	datestart: new Date(2016, 7, 29),	dateend: new Date(2016, 8, 7)},
		{key: "ImperialCity",	datestart: new Date(2017, 8, 7),	dateend: new Date(2017, 8, 18)},
		{key: "ImperialCity",	datestart: new Date(2018, 8, 6),	dateend: new Date(2018, 8, 17)},
		{key: "ImperialCity",	datestart: new Date(2019, 8, 5),	dateend: new Date(2019, 8, 16)},
		{key: "ImperialCity",	datestart: new Date(2020, 8, 3),	dateend: new Date(2020, 8, 15)},

		{key: "ThievesDb",	datestart: new Date(2017, 2, 6),	dateend: new Date(2017, 2, 20)},
		{key: "ThievesDb",	datestart: new Date(2018, 2, 1),	dateend: new Date(2018, 2, 12)},
		{key: "ThievesDb",	datestart: new Date(2019, 2, 7),	dateend: new Date(2019, 2, 18)},
		{key: "ThievesDb",	datestart: new Date(2019, 6, 2),	dateend: new Date(2019, 6, 15)},

		{key: "Orsinium",	datestart: new Date(2016, 10, 7),	dateend: new Date(2016, 10, 21)},
		{key: "Orsinium",	datestart: new Date(2017, 10, 16),	dateend: new Date(2017, 10, 27)},
		{key: "Orsinium",	datestart: new Date(2018, 7, 2),	dateend: new Date(2018, 7, 13)},
		{key: "Orsinium",	datestart: new Date(2019, 7, 8),	dateend: new Date(2019, 7, 19)},

		{key: "Undaunted",	datestart: new Date(2018, 10, 29),	dateend: new Date(2018, 11, 5)},
		{key: "Undaunted",	datestart: new Date(2020, 0, 9),	dateend: new Date(2020, 0, 13)},
		{key: "Undaunted",	datestart: new Date(2020, 11, 3),	dateend: new Date(2020, 11, 15)},

		// these are chapter and season events
		{key: "Morrowind",	datestart: new Date(2019, 1, 7),	dateend: new Date(2019, 1, 18)},
		{key: "Summerset",	datestart: new Date(2020, 6, 23),	dateend: new Date(2020, 7, 4)},

		{key: "Season",		datestart: new Date(2018, 8, 20),	dateend: new Date(2018, 8, 28),		note: "Summerfall"},
		{key: "Season",		datestart: new Date(2019, 9, 3),	dateend: new Date(2019, 9, 13),		note: "Dragon Rise"},
		{key: "Season",		datestart: new Date(2020, 8, 23),	dateend: new Date(2020, 9, 5),		note: "Lost Treasures of Skyrim"},
		{key: "Season",		datestart: new Date(2021, 8, 30),	dateend: new Date(2021, 9, 12),		note: "Bounties of Blackwood"},

		// these are irregular or new DLC events
		{key: "ClockworkCity",	datestart: new Date(2018, 10, 15),	dateend: new Date(2018, 10, 26)},
		{key: "Dragonguard",	datestart: new Date(2019, 10, 26),	dateend: new Date(2019, 11, 9)},
		{key: "Murkmire",	datestart: new Date(2020, 1, 20),	dateend: new Date(2020, 2, 3)},
		{key: "Exploration",	datestart: new Date(2020, 10, 12),	dateend: new Date(2020, 10, 16)},
		{key: "Exploration",	datestart: new Date(2021, 9, 12),	dateend: new Date(2021, 9, 20)},
		{key: "Tribunal",	datestart: new Date(2021, 1, 25),	dateend: new Date(2021, 2, 9)},
		{key: "Elsweyr",	datestart: new Date(2021, 6, 22),	dateend: new Date(2021, 7, 3)},
		{key: "YearOne",	datestart: new Date(2021, 7, 26),	dateend: new Date(2021, 8, 7)},

		// other events
		{key: "BlackFriday",	datestart: new Date(2016, 10, 23),	dateend: new Date(2016, 10, 28)},
		{key: "BlackFriday",	datestart: new Date(2017, 10, 22),	dateend: new Date(2017, 10, 27)},
		{key: "BlackFriday",	datestart: new Date(2018, 10, 21),	dateend: new Date(2018, 10, 27)},
		{key: "BlackFriday",	datestart: new Date(2019, 10, 26),	dateend: new Date(2019, 11, 3)},
		{key: "BlackFriday",	datestart: new Date(2020, 10, 25),	dateend: new Date(2020, 10, 30)},
];