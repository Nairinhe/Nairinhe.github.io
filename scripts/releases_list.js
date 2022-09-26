var eventNames =
{
    "ChapterLaunch"    : "Chapter (Q2) PC 'early access'",
    "StoryDlc"         : "Story DLC (Q4)",
    "DungeonDlcQ1"     : "Dungeon DLC (Q1)",
    "DungeonDlcQ3"     : "Dungeon DLC (Q3)",

    "PrologueQ2"       : "Chapter Prologue",
    "PrologueQ4"       : "Story DLC Prologue",

    "NewCrates"        : "New Crown Crates",
    "ReturningCrates"  : "Returning Crown Crates",
    "CrownSale"        : "Crown Sale",
    "EsoPlusTrial"     : "ESO Plus trial",
    "FreePlay"         : "Free Play",

    "MotifQ1"          : "Dungeon Motif (Q1)",
    "MotifChapter"     : "Chapter Motif",
    "MotifQ3"          : "Dungeon Motif (Q3)",
    "MotifQ4"          : "Story DLC Motif"
};

var events =
[
		{key: "DungeonDlcQ1",	datestart: new Date(2018, 1, 12),	note: "Dragon Bones"},
		{key: "DungeonDlcQ1",	datestart: new Date(2019, 1, 25),	note: "Wrathstone"},
		{key: "DungeonDlcQ1",	datestart: new Date(2020, 1, 24),	note: "Harrowstorm"},
		{key: "DungeonDlcQ1",	datestart: new Date(2021, 2, 8),	note: "Flames of Ambition"},
		{key: "DungeonDlcQ1",	datestart: new Date(2022, 2, 14),	note: "Ascending Tide"},

		{key: "ChapterLaunch",	datestart: new Date(2017, 4, 22),	note: "Morrowind"},
		{key: "ChapterLaunch",	datestart: new Date(2018, 4, 21),	note: "Summerset"},
		{key: "ChapterLaunch",	datestart: new Date(2019, 4, 20),	note: "Elsweyr"},
		{key: "ChapterLaunch",	datestart: new Date(2020, 4, 26),	note: "Greymoor"},
		{key: "ChapterLaunch",	datestart: new Date(2021, 5, 1),	note: "Blackwood"},
		{key: "ChapterLaunch",	datestart: new Date(2022, 5, 6),	note: "High Isle"},

		{key: "DungeonDlcQ3",	datestart: new Date(2016, 7, 1),	note: "Shadows of the Hist"},
		{key: "DungeonDlcQ3",	datestart: new Date(2017, 7, 14),	note: "Horns of the Reach"},
		{key: "DungeonDlcQ3",	datestart: new Date(2018, 7, 13),	note: "Wolfhunter"},
		{key: "DungeonDlcQ3",	datestart: new Date(2019, 7, 12),	note: "Scalebreaker"},
		{key: "DungeonDlcQ3",	datestart: new Date(2020, 7, 24),	note: "Stonethorn"},
		{key: "DungeonDlcQ3",	datestart: new Date(2021, 7, 23),	note: "Waking Flame"},
		{key: "DungeonDlcQ3",	datestart: new Date(2022, 7, 22),	note: "Lost Depths"},

		{key: "StoryDlc",	datestart: new Date(2015, 7, 31),	note: "Imperial City"},
		{key: "StoryDlc",	datestart: new Date(2015, 10, 2),	note: "Orsinium"},
		{key: "StoryDlc",	datestart: new Date(2016, 2, 7),	note: "Thieves Guild"},
		{key: "StoryDlc",	datestart: new Date(2016, 4, 31),	note: "Dark Brotherhood"},
		{key: "StoryDlc",	datestart: new Date(2017, 9, 23),	note: "Clockwork City"},
		{key: "StoryDlc",	datestart: new Date(2018, 9, 22),	note: "Murkmire"},
		{key: "StoryDlc",	datestart: new Date(2019, 9, 21),	note: "Dragonhold"},
		{key: "StoryDlc",	datestart: new Date(2020, 10, 2),	note: "Markarth"},
		{key: "StoryDlc",	datestart: new Date(2021, 10, 1),	note: "Deadlands"},
		{key: "StoryDlc",	datestart: new Date(2022, 10, 1),	note: "Firesong"},

		{key: "PrologueQ2",	datestart: new Date(2017, 4, 8),	note: "Morrowind"},
		{key: "PrologueQ2",	datestart: new Date(2018, 2, 21),	note: "Summerset"},
		{key: "PrologueQ2",	datestart: new Date(2019, 2, 25),	note: "Elsweyr"},
		{key: "PrologueQ2",	datestart: new Date(2020, 2, 30),	note: "Greymoor"},
		{key: "PrologueQ2",	datestart: new Date(2021, 2, 31),	note: "Blackwood"},
		{key: "PrologueQ2",	datestart: new Date(2022, 3, 14),	note: "High Isle"},

		{key: "PrologueQ4",	datestart: new Date(2017, 9, 9),	note: "Clockwork City"},
		{key: "PrologueQ4",	datestart: new Date(2018, 9, 8),	note: "Murkmire"},
		{key: "PrologueQ4",	datestart: new Date(2019, 9, 8),	note: "Dragonhold"},
		{key: "PrologueQ4",	datestart: new Date(2020, 8, 18),	note: "Markarth"},
		{key: "PrologueQ4",	datestart: new Date(2021, 8, 30),	note: "Deadlands"},

		{key: "NewCrates",	datestart: new Date(2016, 11, 1),	note: "Storm Atronach"},
		{key: "NewCrates",	datestart: new Date(2017, 2, 2),	note: "Wild Hunt"},
		{key: "NewCrates",	datestart: new Date(2017, 5, 22),	note: "Dwarven"},
		{key: "NewCrates",	datestart: new Date(2017, 8, 28),	note: "Reaper's Harvest"},
		{key: "NewCrates",	datestart: new Date(2017, 10, 28),	note: "Flame Atronach"},
		{key: "NewCrates",	datestart: new Date(2018, 2, 15),	note: "Scalecaller"},
		{key: "NewCrates",	datestart: new Date(2018, 5, 21),	note: "Psijic Vault"},
		{key: "NewCrates",	datestart: new Date(2018, 8, 20),	note: "Hollowjack"},
		{key: "NewCrates",	datestart: new Date(2018, 11, 4),	note: "Xanmeer"},
		{key: "NewCrates",	datestart: new Date(2019, 2, 28),	note: "Dragonscale"},
		{key: "NewCrates",	datestart: new Date(2019, 6, 3),	note: "Baandari Pedlar"},
		{key: "NewCrates",	datestart: new Date(2019, 8, 19),	note: "New Moon"},
		{key: "NewCrates",	datestart: new Date(2019, 11, 12),	note: "Frost Atronach"},
		{key: "NewCrates",	datestart: new Date(2020, 2, 19),	note: "Gloomspore"},
		{key: "NewCrates",	datestart: new Date(2020, 5, 18),	note: "Nightfall"},
		{key: "NewCrates",	datestart: new Date(2020, 8, 24),	note: "Sovngarde"},
		{key: "NewCrates",	datestart: new Date(2020, 11, 10),	note: "Akaviri Potentate"},
		{key: "NewCrates",	datestart: new Date(2021, 2, 18),	 note: "Ayleid"},
		{key: "NewCrates",	datestart: new Date(2021, 5, 17),	note: "Iron Atronach"},
		{key: "NewCrates",	datestart: new Date(2021, 8, 23),	 note: "Grim Harlequin"},
		{key: "NewCrates",	datestart: new Date(2021, 11, 9),	 note: "Celestial"},
		{key: "NewCrates",	datestart: new Date(2022, 2, 31),	 note: "Sunken Trove"},
		{key: "NewCrates",	datestart: new Date(2022, 5, 23),	 note: "Dark Chivalry"},
		{key: "NewCrates",	datestart: new Date(2022, 8, 22),	 note: "Wraithtide"},

		{key: "ReturningCrates",	datestart: new Date(2017, 11, 4),	note: "Storm Atronach"},
		{key: "ReturningCrates",	datestart: new Date(2017, 11, 11),	note: "Wild Hunt"},
		{key: "ReturningCrates",	datestart: new Date(2018, 8, 10),	note: "Wild Hunt"},
		{key: "ReturningCrates",	datestart: new Date(2018, 4, 14),	note: "Dwarven"},
		{key: "ReturningCrates",	datestart: new Date(2018, 7, 9),	note: "Flame Atronach"},
		{key: "ReturningCrates",	datestart: new Date(2019, 0, 24),	note: "Storm Atronach"},
		{key: "ReturningCrates",	datestart: new Date(2019, 9, 21),	note: "Reaper's Harvest"},
		{key: "ReturningCrates",	datestart: new Date(2019, 8, 1),	note: "Flame Atronach"},
		{key: "ReturningCrates",	datestart: new Date(2019, 9, 24),	note: "Hollowjack"},
		{key: "ReturningCrates",	datestart: new Date(2020, 3, 30),	note: "Storm Atronach"},
		{key: "ReturningCrates",	datestart: new Date(2020, 0, 16),	note: "Scalecaller"},
		{key: "ReturningCrates",	datestart: new Date(2020, 6, 23),	note: "Psijic Vault"},
		{key: "ReturningCrates",	datestart: new Date(2020, 1, 20),	note: "Xanmeer"},
		{key: "ReturningCrates",	datestart: new Date(2020, 7, 20),	note: "New Moon"},
		{key: "ReturningCrates",	datestart: new Date(2021, 0, 21),	note: "Flame Atronach"},
		{key: "ReturningCrates",	datestart: new Date(2021, 1, 25),	note: "Dwarven"},
		{key: "ReturningCrates",	datestart: new Date(2021, 3, 22),	note: "Wild Hunt"},
		{key: "ReturningCrates",	datestart: new Date(2021, 4, 27),	note: "Dragonscale"},
		{key: "ReturningCrates",	datestart: new Date(2021, 8, 2),	note: "Gloomspore"},
		{key: "ReturningCrates",	datestart: new Date(2021, 9, 21),	note: "Reaper's Harvest"},
		{key: "ReturningCrates",	datestart: new Date(2021, 10, 18),	note: "Frost Atronach"},
		{key: "ReturningCrates",	datestart: new Date(2022, 0, 20),	note: "Psijic Vault"},
		{key: "ReturningCrates",	datestart: new Date(2022, 1, 17),	note: "Sovngarde"},
		{key: "ReturningCrates",	datestart: new Date(2022, 2, 17),	note: "Xanmeer"},
		{key: "ReturningCrates",	datestart: new Date(2022, 3, 21),	note: "Storm Atronach"},
		{key: "ReturningCrates",	datestart: new Date(2022, 4, 19),	note: "Flame Atronach"},
		{key: "ReturningCrates",	datestart: new Date(2022, 6, 14),	note: "Scalecaller"},
		{key: "ReturningCrates",	datestart: new Date(2022, 7, 25),	note: "Nightfall"},

		{key: "CrownSale",		datestart: new Date(2016, 11, 23)},
		{key: "CrownSale",		datestart: new Date(2017, 3, 11)},
		{key: "CrownSale",		datestart: new Date(2017, 7, 22)},
		{key: "CrownSale",		datestart: new Date(2017, 11, 21)},
		{key: "CrownSale",		datestart: new Date(2018, 4, 4)},
		{key: "CrownSale",		datestart: new Date(2018, 7, 7)},
		{key: "CrownSale",		datestart: new Date(2018, 11, 20)},
		{key: "CrownSale",		datestart: new Date(2019, 3, 22)},
		{key: "CrownSale",		datestart: new Date(2019, 6, 23)},
		{key: "CrownSale",		datestart: new Date(2019, 11, 19)},
		{key: "CrownSale",		datestart: new Date(2020, 2, 31)},
		{key: "CrownSale",		datestart: new Date(2020, 7, 4)},
		{key: "CrownSale",		datestart: new Date(2020, 11, 22)},
		{key: "CrownSale",		datestart: new Date(2021, 7, 17)},
		{key: "CrownSale",		datestart: new Date(2021, 11, 22)},
		{key: "CrownSale",		datestart: new Date(2022, 3, 13)},
		{key: "CrownSale",		datestart: new Date(2022, 7, 16)},

		{key: "EsoPlusTrial",		datestart: new Date(2017, 6, 5)},
		{key: "EsoPlusTrial",		datestart: new Date(2018, 0, 9)},
		{key: "EsoPlusTrial",		datestart: new Date(2018, 3, 24)},
		{key: "EsoPlusTrial",		datestart: new Date(2018, 6, 10)},
		{key: "EsoPlusTrial",		datestart: new Date(2018, 10, 15)},
		{key: "EsoPlusTrial",		datestart: new Date(2019, 1, 7)},
		{key: "EsoPlusTrial",		datestart: new Date(2019, 4, 2)},
		{key: "EsoPlusTrial",		datestart: new Date(2019, 7, 8)},
		{key: "EsoPlusTrial",		datestart: new Date(2020, 0, 17)},
		{key: "EsoPlusTrial",		datestart: new Date(2020, 3, 20)},
		{key: "EsoPlusTrial",		datestart: new Date(2020, 9, 12)},
		{key: "EsoPlusTrial",		datestart: new Date(2021, 0, 19)},
		{key: "EsoPlusTrial",		datestart: new Date(2021, 5, 14)},
		{key: "EsoPlusTrial",		datestart: new Date(2021, 9, 18)},
		{key: "EsoPlusTrial",		datestart: new Date(2022, 6, 7)},

		{key: "FreePlay",		datestart: new Date(2017, 3, 11)},
		{key: "FreePlay",		datestart: new Date(2017, 10, 30)},
		{key: "FreePlay",		datestart: new Date(2018, 2, 21)},
		{key: "FreePlay",		datestart: new Date(2018, 7, 9)},
		{key: "FreePlay",		datestart: new Date(2018, 11, 6)},
		{key: "FreePlay",		datestart: new Date(2019, 2, 28)},
		{key: "FreePlay",		datestart: new Date(2019, 7, 27)},
		{key: "FreePlay",		datestart: new Date(2019, 10, 6)},
		{key: "FreePlay",		datestart: new Date(2020, 3, 1)},
		{key: "FreePlay",		datestart: new Date(2020, 7, 6)},
		{key: "FreePlay",		datestart: new Date(2020, 11, 3)},
		{key: "FreePlay",		datestart: new Date(2021, 2, 31)},
		{key: "FreePlay",		datestart: new Date(2021, 7, 17)},
		{key: "FreePlay",		datestart: new Date(2022, 3, 13)},
		{key: "FreePlay",		datestart: new Date(2022, 7, 16)},

		{key: "MotifQ1",	datestart: new Date(2018, 5, 27),	note: "Fang Lair"},
		{key: "MotifQ1",	datestart: new Date(2018, 5, 28),	note: "Scalecaller"},
		{key: "MotifQ1",	datestart: new Date(2019, 6, 17),	note: "Coldsnap"},
		{key: "MotifQ1",	datestart: new Date(2019, 7, 7),	note: "Meridian"},
		{key: "MotifQ1",	datestart: new Date(2020, 6, 8),	note: "Pyre Watch"},
		{key: "MotifQ1",	datestart: new Date(2020, 7, 12),	note: "Icereach"},
		{key: "MotifQ1",	datestart: new Date(2021, 6, 14),	note: "True-Sworn"},
		{key: "MotifQ1",	datestart: new Date(2021, 7, 24),	note: "Waking Flame"},

		{key: "MotifChapter",	datestart: new Date(2018, 6, 9),	note: "Welkynar"},
		{key: "MotifChapter",	datestart: new Date(2019, 9, 26),	note: "Pellitine"},
		{key: "MotifChapter",	datestart: new Date(2019, 8, 18),	note: "Sunspire"},
		{key: "MotifChapter",	datestart: new Date(2020, 7, 24),	note: "Sea Giant"},
		{key: "MotifChapter",	datestart: new Date(2020, 8, 23),	note: "Greymoor"},
		{key: "MotifChapter",	datestart: new Date(2021, 8, 15),	note: "Black Fin Legion"},
		{key: "MotifChapter",	datestart: new Date(2022, 7, 22),	note: "Ascendant Order"},

		{key: "MotifQ3",	datestart: new Date(2018, 11, 5),	note: "Silver Dawn"},
		{key: "MotifQ3",	datestart: new Date(2019, 1, 13),	note: "Huntsman"},
		{key: "MotifQ3",	datestart: new Date(2019, 12, 4),	note: "Moongrave Fane"},
		{key: "MotifQ3",	datestart: new Date(2020, 0, 22),	note: "Stags of Z'en"},
		{key: "MotifQ3",	datestart: new Date(2021, 0, 6),	note: "Hazardous Alchemy"},
		{key: "MotifQ3",	datestart: new Date(2021, 1, 17),	note: "Thorn Legion"},
		{key: "MotifQ3",	datestart: new Date(2022, 0, 5),	note: "Crimson Oath"},
		{key: "MotifQ3",	datestart: new Date(2022, 2, 9),	note: "Silver Rose"},

		{key: "MotifQ4",	datestart: new Date(2019, 0, 16),	note: "Elder Argonian"},
		{key: "MotifQ4",	datestart: new Date(2019, 4, 15),	note: "Honor Guard"},
		{key: "MotifQ4",	datestart: new Date(2020, 2, 18),	note: "Shield of Senchal"},
		{key: "MotifQ4",	datestart: new Date(2020, 3, 22),	note: "New Moon Priest"},
		{key: "MotifQ4",	datestart: new Date(2021, 3, 14),	note: "Wayward Guardian"},
		{key: "MotifQ4",	datestart: new Date(2021, 4, 12),	note: "Nighthollow"},
		{key: "MotifQ4",	datestart: new Date(2022, 4, 25),	note: "Annihilarch's Chosen"},
		{key: "MotifQ4",	datestart: new Date(2022, 6, 7),	note: "Fargrave Guardian"}
];
