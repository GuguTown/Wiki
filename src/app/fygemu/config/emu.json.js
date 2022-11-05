const gEmuJson = 
{
    "Rule": {
        "UseIntegers": 1,
        "NoOverkill": 0,
        "DefMul1": 0.1,
        "DefMul2": 0.01,
        "SpdRatMin": 0.2,
        "SklAdd": 99,
        "CrtAdd": 99,
        "HpHeal": 0.25,
        "SdHeal": 0.25,
        "SklOffset": 0.3,
        "CrtOffset": 0.3,
        "RoundMax": 100
    },
    "BaseStat": {
        "Add": {
            "nStr": {"nPowMulP": 10, "nBrcMulP":1, "nHpHealRat": 0.008333333333333333},
            "nAgi": {"nSpdMul": 3, "nCrtMul": 1},
            "nInt": {"nPowMulM": 12, "nSklMul": 1.2, "nBrcMulM": 1.1, "nSdHealRat": 0.005},
            "nVit": {"nHpMaxMul": 35, "nDefMulP": 3.5},
            "nSpr": {"nSdMaxMul": 90, "nDefMulP": 1.2, "nDefMulM": 1.2},
            "nMnd": {"nHpMaxMul": 35, "nDefMulM": 3.5}
        },
        "Mul": {
            "nStr": {"nHpMaxMul": 0.005},
            "nAgi": {},
            "nInt": {},
            "nVit": {},
            "nSpr": {"nSdMaxMul": 0.0008},
            "nMnd": {}
        }
    },
    "Actors": {
        "0": {},
        "3000": {},
        "3001": {},
        "3002": {},
        "3003": {},
        "3004": {},
        "3005": {},
        "3006": {},
        "3007": {},
        "3008": {},
        "3009": {},
        "3901": {
            "nHpMaxMul": [600, 0], "nSdMaxMul": [600, 0],
            "nPowMulP": [30, 0], "nPowMulM": [30, 0],
            "nSpdMul": [3, 0],
            "nBrcRatP": [0, 50], "nBrcMulP": [2, 0],
            "nBrcRatM": [0, 50], "nBrcMulM": [2, 0],
            "nBrcRatC": [0, 0], "nBrcMulC": [0, 0],
            "nDefMulP": [5, 0], "nDefMulM": [5, 0],
            "nSklMul": [2, 0], "nCrtMul": [2, 0],
            "nRfl": [0, 0]
        },
        "3902": {
            "nHpMaxMul": [10, 0], "nSdMaxMul": [400, 0],
            "nPowMulP": [0, 0], "nPowMulM": [40, 0],
            "nSpdMul": [9, 0],
            "nBrcRatP": [0, 0], "nBrcMulP": [0, 0],
            "nBrcRatM": [0, 50], "nBrcMulM": [3, 0],
            "nBrcRatC": [0, 0], "nBrcMulC": [0, 0],
            "nDefMulP": [4, 0], "nDefMulM": [4, 0],
            "nSklMul": [2.5, 0], "nCrtMul": [2, 0],
            "nRfl": [0, 0]
        },
        "3903": {
            "nHpMaxMul": [0, 1], "nSdMaxMul": [900, 0],
            "nPowMulP": [0, 1], "nPowMulM": [0, 1],
            "nSpdMul": [3, 0],
            "nBrcRatP": [0, 0], "nBrcMulP": [0, 0],
            "nBrcRatM": [0, 50], "nBrcMulM": [3, 0],
            "nBrcRatC": [0, 0], "nBrcMulC": [0, 0],
            "nDefMulP": [5, 0], "nDefMulM": [5, 0],
            "nSklMul": [8, 0], "nCrtMul": [0, 0],
            "nRfl": [0, 0]
        },
        "3904": {
            "nHpMaxMul": [600, 0], "nSdMaxMul": [0, 0],
            "nPowMulP": [80, 0], "nPowMulM": [0, 1],
            "nSpdMul": [1, 0],
            "nBrcRatP": [0, 50], "nBrcMulP": [3, 0],
            "nBrcRatM": [0, 0], "nBrcMulM": [0, 0],
            "nBrcRatC": [0, 30], "nBrcMulC": [0, 0],
            "nDefMulP": [8, 0], "nDefMulM": [8, 0],
            "nSklMul": [1, 0], "nCrtMul": [3, 0],
            "nRfl": [0, 30]
        },
        "3905": {
            "nHpMaxMul": [400, 0], "nSdMaxMul": [0, 0],
            "nPowMulP": [30, 0], "nPowMulM": [0, 0],
            "nSpdMul": [8, 0],
            "nBrcRatP": [0, 80], "nBrcMulP": [2, 0],
            "nBrcRatM": [0, 0], "nBrcMulM": [0, 0],
            "nBrcRatC": [0, 0], "nBrcMulC": [0, 0],
            "nDefMulP": [4, 0], "nDefMulM": [4, 0],
            "nSklMul": [1, 0], "nCrtMul": [4, 0],
            "nRfl": [0, 0]
        },
        "3906": {
            "nHpMaxMul": [900, 0], "nSdMaxMul": [0, 0],
            "nPowMulP": [30, 0], "nPowMulM": [0, 1],
            "nSpdMul": [1, 0],
            "nBrcRatP": [0, 50], "nBrcMulP": [2, 0],
            "nBrcRatM": [0, 50], "nBrcMulM": [2, 0],
            "nBrcRatC": [0, 0], "nBrcMulC": [0, 0],
            "nDefMulP": [6, 0], "nDefMulM": [6, 0],
            "nSklMul": [1, 0], "nCrtMul": [0, 0],
            "nRfl": [0, 80]
        }
    },
    "Status": {
        "0": {show: 0},
        "1": {show: 1},
        "2": {show: 1},
        "3": {show: 0},
        "4": {show: 0},
    },
    "Equips": {
        "0": [
            ["", 0.00, 0.00, 0.01],
            ["", 0.00, 0.00, 0.01],
            ["", 0.00, 0.00, 0.01],
            ["", 0.00, 0.00, 0.01]
        ],
        "2101": [
            ["nPowAddP", 1000.00, 0.00, 0.01],
            ["nPowAddM", 1000.00, 0.00, 0.01],
            ["nBrcAddP", 100.00, 0.00, 0.01],
            ["nLch", 6.67, 1000.00, 0.01]
        ],
        "2102": [
            ["nPowAddP", 1000.00, 0.00, 0.01],
            ["nPowAddM", 1000.00, 0.00, 0.01],
            ["nSpdAdd", 200.00, 0.00, 0.01],
            ["nLch", 6.67, 1000.00, 0.01]
        ],
        "2103": [
            ["nPowAddP", 1000.00, 0.00, 0.01],
            ["nPowAddM", 1000.00, 0.00, 0.01],
            ["nBrcRatM", 5.00, 500.00, 0.01],
            ["nLch", 6.67, 1000.00, 0.01]
        ],
        "2104": [
            ["nPowMulP", 20.00, 2000.00, 0.01],
            ["nSpdMul", 20.00, 2000.00, 0.01],
            ["nBrcRatC", 5.00, 1000.00, 0.01],
            ["nBrcRatP", 5.00, 1000.00, 0.01]
        ],
        "2105": [
            ["nPowMulP", 20.00, 3000.00, 0.01],
            ["nBrcRatC", 5.00, 1000.00, 0.01],
            ["nBrcRatP", 5.00, 1000.00, 0.01],
            ["nBrcAddP", 100.00, 0.00, 0.01]
        ],
        "2106": [
            ["nPowMulP", 20.00, 0.00, 0.01],
            ["nPowMulM", 20.00, 0.00, 0.01],
            ["nSpdMul", 20.00, 2500.00, 0.01],
            ["nSpdAdd", 400.00, 0.00, 0.01]
        ],
        "2107": [
            ["nPowMulM", 20.00, 0.00, 0.01],
            ["nPowMulM", 20.00, 0.00, 0.01],
            ["nPowMulM", 20.00, 0.00, 0.01],
            ["nBrcRatM", 5.00, 0.00, 0.01]
        ],
        "2108": [
            ["nLch", 6.67, 1000.00, 0.01],
            ["nRfl", 6.67, 0.00, 0.01],
            ["nDefAddP", 100.00, 0.00, 0.01],
            ["nDefAddM", 100.00, 0.00, 0.01]
        ],
        "2109": [
            ["nPowAddP", 2000.00, 0.00, 0.01],
            ["nPowAddP", 2000.00, 0.00, 0.01],
            ["nPowMulP", 20.00, 3000.00, 0.01],
            ["nBrcRatC", 5.00, 100.00, 0.01]
        ],
        "2110": [
            ["nPowMulP", 20.00, 3000.00, 0.01],
            ["nBrcRatP", 5.00, 1000.00, 0.01],
            ["nBrcAddM", 200.00, 0.00, 0.01],
            ["nLch", 6.67, 1000.00, 0.01]
        ],
        "2201": [
            ["nPowAddP", 1000.00, 0.00, 0.01],
            ["nPowAddP", 1000.00, 0.00, 0.01],
            ["nSpdAdd", 200.00, 0.00, 0.01],
            ["nHpMaxAdd", 1000.00, 0.00, 0.01]
        ],
        "2202": [
            ["nPowMulM", 20.00, 100.00, 0.01],
            ["nBrcRatM", 5.00, 100.00, 0.01],
            ["nSdMaxAdd", 2000.00, 0.00, 0.01],
            ["nDefAddM", 100.00, 0.00, 0.01]
        ],
        "2203": [
            ["nLch", 6.67, 100.00, 0.01],
            ["nLch", 6.67, 100.00, 0.01],
            ["nLch", 6.67, 100.00, 0.01],
            ["nSpdAdd", 200.00, 0.00, 0.01]
        ],
        "2204": [
            ["nBrcAddP", 50.00, 0.00, 0.01],
            ["nBrcAddM", 50.00, 0.00, 0.01],
            ["nCrtAdd", 80.00, 0.00, 0.01],
            ["nSklAdd", 80.00, 0.00, 0.01]
        ],
        "2205": [
            ["nBrcAddM", 50.00, 0.00, 0.01],
            ["nSklAdd", 80.00, 0.00, 0.01],
            ["nHpMaxAddStr", 0.15, 0.00, 1.00],
            ["nHpMaxMul", 0.07, 0.00, 1.00]
        ],
        "2301": [
            ["nHpMaxAdd", 2000.00, 0.00, 0.01],
            ["nDefAddP", 100.00, 0.00, 0.01],
            ["nDefAddM", 100.00, 0.00, 0.01],
            ["nHpHealAdd", 1000.00, 0.00, 0.01]
        ],
        "2302": [
            ["nHpMaxAdd", 2500.00, 0.00, 0.01],
            ["nResAddP", 200.00, 0.00, 0.01],
            ["nResAddM", 200.00, 0.00, 0.01],
            ["nHpHealAdd", 600.00, 0.00, 0.01]
        ],
        "2303": [
            ["nHpMaxAdd", 2500.00, 0.00, 0.01],
            ["nResAddP", 200.00, 0.00, 0.01],
            ["nResAddM", 200.00, 0.00, 0.01],
            ["nHpHealAdd", 600.00, 0.00, 0.01]
        ],
        "2304": [
            ["nHpMaxAdd", 1000.00, 0.00, 0.01],
            ["nSdHealAdd", 6000.00, 0.00, 0.01],
            ["nSdMaxMul", 20.00, 2500.00, 0.01],
            ["nSdMaxAdd", 5000.00, 0.00, 0.01]
        ],
        "2305": [
            ["nHpMaxMul", 20.00, 2000.00, 0.01],
            ["nDefAddP", 100.00, 0.00, 0.01],
            ["nDefAddM", 100.00, 0.00, 0.01],
            ["nRfl", 6.67, 1000.00, 0.01]
        ],
        "2306": [
            ["nHpMaxMul", 20.00, 5000.00, 0.01],
            ["nResAddP", 500.00, 0.00, 0.01],
            ["nResAddM", 500.00, 0.00, 0.01],
            ["nHpHealAdd", 2000.00, 0.00, 0.01]
        ],
        "2307": [
            ["nSdMaxMul", 20.00, 5000.00, 0.01],
            ["nSdMaxAdd", 10000.00, 0.00, 0.01],
            ["nDefAddM", 100.00, 0.00, 0.01],
            ["nResAddM", 500.00, 0.00, 0.01]
        ],
        "2401": [
            ["nHpMaxAdd", 1000.00, 0.00, 0.01],
            ["nResAddP", 200.00, 0.00, 0.01],
            ["nResAddM", 200.00, 0.00, 0.01],
            ["nHpHealAdd", 400.00, 0.00, 0.01]
        ],
        "2402": [
            ["nHpMaxAdd", 500.00, 0.00, 0.01],
            ["nSdMaxMul", 20.00, 0.00, 0.01],
            ["nSdMaxAdd", 2000.00, 0.00, 0.01],
            ["nResAddP", 200.00, 0.00, 0.01]
        ],
        "2403": [
            ["nHpMaxAdd", 1000.00, 0.00, 0.01],
            ["nSdMaxAdd", 1000.00, 0.00, 0.01],
            ["nHpHealAdd", 500.00, 0.00, 0.01],
            ["nSdHealRat", 3.30, 0.00, 0.01]
        ]
    },
    "EquipRanks": {
        "1": {},
        "2": {},
        "3": {},
        "4": {},
        "5": {}
    },
    "EquipStats": {
        "Add": {
            "nHpMaxAdd": {"nHpMaxAdd": 1.00},
            "nHpHealRat": {"nHpHealRat": 1.00},
            "nHpHealAdd": {"nHpHealAdd": 1.00},
            "nSdMaxAdd": {"nSdMaxAdd": 1.00},
            "nSdHealRat": {"nSdHealRat": 1.00},
            "nSdHealAdd": {"nSdHealAdd": 1.00},
            "nPowAddP": {"nPowAddP": 1.00},
            "nPowAddM": {"nPowAddM": 1.00},
            "nPowAddA": {"nPowAddA": 1.00},
            "nSpdAdd": {"nSpdAdd": 1.00},
            "nBrcRatP": {"nBrcRatP": 1.00},
            "nBrcAddP": {"nBrcAddP": 1.00},
            "nBrcRatM": {"nBrcRatM": 1.00},
            "nBrcAddM": {"nBrcAddM": 1.00},
            "nBrcRatC": {"nBrcRatC": 1.00},
            "nBrcAddC": {"nBrcAddC": 1.00},
            "nDefAddP": {"nDefAddP": 1.00},
            "nDefAddM": {"nDefAddM": 1.00},
            "nResAddP": {"nResAddP": 1.00},
            "nResAddM": {"nResAddM": 1.00},
            "nSklAdd": {"nSklAdd": 1.00},
            "nCrtAdd": {"nCrtAdd": 1.00},
            "nLch": {"nLch": 1.00},
            "nRfl": {"nRfl": 1.00}
        },
        "Mul": {
            "nHpMaxMul": {
                "nHpMaxMul": {"nHpMaxMul": 0.01}
            },
            "nHpMaxAddStr": {
                "nHpMaxAdd": {"nStr": 1.00}
            },
            "nHpHealMul": {
                "nHpHealMul": {"nHpHealMul": 0.01}
            },
            "nSdMaxMul": {
                "nSdMaxMul": {"nSdMaxMul": 0.01}
            },
            "nSdHealMul": {
                "nSdHealMul": {"nSdHealMul": 0.01}
            },
            "nPowMulP": {
                "nPowMulP": {"nPowMulP": 0.01}
            },
            "nPowMulM": {
                "nPowMulM": {"nPowMulM": 0.01}
            },
            "nPowMulA": {
                "nPowMulA": {"nPowMulA": 0.01}
            },
            "nSpdMul": {
                "nSpdMul": {"nSpdMul": 0.01}
            },
            "nBrcMulP": {
                "nBrcMulP": {"nBrcMulP": 0.01}
            },
            "nBrcMulM": {
                "nBrcMulM": {"nBrcMulM": 0.01}
            },
            "nBrcMulC": {
                "nBrcMulC": {"nBrcMulC": 0.01}
            },
            "nSklMul": {
                "nSklMul": {"nSklMul": 0.01}
            },
            "nCrtMul": {
                "nCrtMul": {"nCrtMul": 0.01}
            },
            "nDefMulP": {
                "nDefMulP": {"nDefMulP": 0.01}
            },
            "nDefMulM": {
                "nDefMulM": {"nDefMulM": 0.01}
            },
            "nDefMulP": {
                "nDefMulP": {"nDefMulP": 0.01}
            },
            "nDefMulM": {
                "nDefMulM": {"nDefMulM": 0.01}
            }
        }
    },
    "Auras": {
        "101":{"cost": 0},
        "102":{"cost": 0},
        "103":{"cost": 0},
        "104":{"cost": 0},
        "105":{"cost": 0},
        "201":{"cost": 20},
        "202":{"cost": 20},
        "203":{"cost": 20},
        "204":{"cost": 20},
        "205":{"cost": 20},
        "206":{"cost": 20},
        "207":{"cost": 20},
        "301":{"cost": 30},
        "302":{"cost": 30},
        "303":{"cost": 30},
        "304":{"cost": 30},
        "305":{"cost": 30},
        "306":{"cost": 30},
        "307":{"cost": 30},
        "308":{"cost": 30},
        "401":{"cost": 100},
        "402":{"cost": 100},
        "403":{"cost": 100},
        "404":{"cost": 100},
        "405":{"cost": 100},
        "406":{"cost": 100},
        "407":{"cost": 100},
        "408":{"cost": 100},
        "901":{"cost": 999},
    },
    "ActorKeys": {
        "": "0",
        "舞": "3000",
        "默": "3001",
        "琳": "3002",
        "艾": "3003",
        "梦": "3004",
        "薇": "3005",
        "伊": "3006",
        "冥": "3007",
        "命": "3008",
        "希": "3009",
        "铁皮木人": "3901",
        "迅捷魔蛛": "3902",
        "魔灯之灵": "3903",
        "食铁兽": "3904",
        "六眼飞鱼": "3905",
        "晶刺豪猪": "3906",
    }
}
