const products = [
    {
        id: 1,
        images: [],
        title: {
            english: 'Cheese',
            arabic: ' مناقيش جبنة ',
            german: 'Käse'
        },
        description: {
            english: 'Cheese Pide',
            arabic: ' مناقيش جبنة ',
            german: 'Käse'
        },
        price: {
            value: 1.5,
            currency: '€'
        },
        category: 'manakish',
    },
    {
        id: 2,
        images: [],
        title: {
            english: 'paprika',
            arabic: 'مناقيش محمرة',
            german: 'paprika'
        },
        description: {
            english: 'paprika',
            arabic: 'وجبة شيش طاووق',
            german: 'paprika'
        },
        price: {
            value: 1.5,
            currency: '€'
        },
        category: 'manakish',
    },
    {
        id: 3,
        images: [],
        title: {
            english: 'thymian',
            arabic: 'مناقيش زعتر',
            german: 'thymian'
        },
        description: {
            english: 'thymian',
            arabic: 'مناقيش زعتر',
            german: 'thymian'
        },
        price: {
            value: 1.5,
            currency: '€'
        },
        category: 'manakish',
    },
    {
        id: 4,
        images: [],
        title: {
            english: 'meat pide',
            arabic: 'صفيحة',
            german: 'Hackfleisch'
        },
        description: {
            english: 'meat pide',
            arabic: 'صفيحة',
            german: 'Hackfleisch'
        },
        price: {
            value: 1.5,
            currency: '€'
        },
        category: 'manakish',
    },
    {
        id: 5,
        images: [],
        title: {
            english: 'cheese paprika',
            arabic: 'مناقيش محمرة بقشقوان',
            german: 'paprika mit Gouda käse'
        },
        description: {
            english: 'cheese Paprika',
            arabic: ' مناقيش محمرة بقشقوان',
            german: 'paprika mit Gouda käse'
        },
        price: {
            value: 1.5,
            sale_value: 1,
            currency: '€'
        },
        category: 'manakish',
    },
    {
        id: 6,
        images: [],
        title: {
            english: 'Spinat',
            arabic: 'مناقيش سبانخ',
            german: 'spinat'
        },
        description: {
            english: 'spinat',
            arabic: 'مناقيش سبانخ',
            german: 'spinat'
        },
        price: {
            value: 1.5,
            currency: '€'
        },
        category: 'manakish',
    },
    {
        id: 7,
        images: [],
        title: {
            english: 'cheese Shish Taouk',
            arabic: ' مناقيش شيش  بقشقوان',
            german: 'Shish Taouk mit käse'
        },
        description: {
            english: 'cheese Shish Taouk',
            arabic: ' مناقيش شيش  بقشقوان',
            german: 'Shish Taouk mit käse'
        },
        price: {
            value: 2.5,
            currency: '€'
        },
        category: 'manakish',
    },
    {
        id: 8,
        images: [],
        title: {
            english: 'Shish Taouk',
            arabic: '  مناقيش شيش',
            german: 'Shish Taouk '
        },
        description: {
            english: 'Shish Taouk ',
            arabic: ' مناقيش شيش',
            german: 'Shish Taouk '
        },
        price: {
            value: 2,
            currency: '€'
        },
        category: 'manakish',
    },
    {
        id: 9,
        images: [],
        title: {
            english: 'Cheese pide',
            arabic: 'مناقيش قشقوان',
            german: 'Gouda käse'
        },
        description: {
            english: 'Cheese pide',
            arabic: 'مناقيش قشقوان',
            german: 'Gouda käse'
        },
        price: {
            value: 2,
            sale_value: 2,
            currency: '€'
        },
        category: 'manakish',
    },
    {
        id: 10,
        images: [],
        title: {
            english: 'Sucuk',
            arabic: 'سجق',
            german: 'Sucuk'
        },
        description: {
            english: 'Sucuk',
            arabic: 'سجق',
            german: 'Sucuk'
        },
        price: {
            value: 1.5,
            currency: '€'
        },
        category: 'manakish',
    },
    {
        id: 11,
        images: [],
        title: {
            english: 'Oliven',
            arabic: 'مناقيش زيتون',
            german: 'Oliven'
        },
        description: {
            english: 'Oliven',
            arabic: 'مناقيش زيتون',
            german: 'Oliven'
        },
        price: {
            value: 1.5,
            currency: '€'
        },
        category: 'manakish',
    },
    {
        id: 12,
        images: [],
        title: {
            english: 'Mexican',
            arabic: 'مكسيكي',
            german: 'Mexican'
        },
        description: {
            english: 'Mexican',
            arabic: 'مكسيكي',
            german: 'Mexican'
        },
        price: {
            value: 2,
            currency: '€'
        },
        category: 'manakish',
    },
    {
        id: 13,
        images: [],
        title: {
            english: 'cheese Mexican',
            arabic: 'مكسيكي بقشقوان ',
            german: 'Mexican mit Gouda käse'
        },
        description: {
            english: 'cheese Mexican',
            arabic: 'مكسيكي بقشقوان',
            german: 'Mexican'
        },
        price: {
            value: 2.5,
            currency: '€'
        },
        category: 'manakish',
    },
    {
        id: 14,
        images: [],
        title: {
            english: 'cheese Sucuk',
            arabic: 'سجق بقشقوان',
            german: 'Sucuk mit Gouda käse'
        },
        description: {
            english: 'cheese Sucuk',
            arabic: 'سجق بقشقوان',
            german: 'Sucuk mit Gouda käse'
        },
        price: {
            value: 2,
            currency: '€'
        },
        category: 'manakish',
    },
    {
        id: 15,
        images: [],
        title: {
            english: 'Lahmacun 1/2KG',
            arabic: 'صفيحة نص كيلو',
            german: 'Lahmacun'
        },
        description: {
            english: 'Lahmacun 500G',
            arabic: 'صفيحة نص كيلو',
            german: 'Lahmacun 500G'
        },
        price: {
            value: 13,
            sale_value: 12.5,
            currency: '€'
        },
        category: 'manakish',
    },
    {
        id: 16,
        images: [],
        title: {
            english: 'Lahmacun 1KG',
            arabic: 'صفيحة كيلو',
            german: 'Lahmacun 1KG'
        },
        description: {
            english: 'Lahmacun 1KG',
            arabic: 'صفيحة  كيلو',
            german: 'Lahmacun 1KG'
        },
        price: {
            value: 25,
            sale_value: 24,
            currency: '€'
        },
        category: 'manakish',
    },
    {
        id: 17,
        images: [],
        title: {
            english: 'Fatteh menu',
            arabic: 'فتة بسمنة',
            german: 'Fatteh Teller'
        },
        description: {
            english: 'Fatteh menu with Butter',
            arabic: 'فتة بسمنة',
            german: 'Fatteh Teller mit Butter'
        },
        price: {
            value: 5,
            currency: '€'
        },
        category: 'Breakfast',
    },
    {
        id: 18,
        images: [],
        title: {
            english: 'Brown bean menu',
            arabic: 'فول مدمس بالزيت',
            german: 'Braunen Bohnen Teller'
        },
        description: {
            english: 'Brown bean Menu with oliven oil',
            arabic: 'فول مدمس بالزيت',
            german: 'Braunen Bohnen Teller mit Oliven Öl'
        },
        price: {
            value: 5,
            currency: '€'
        },
        category: 'Breakfast',
    },
    {
        id: 19,
        images: [],
        title: {
            english: 'Brown bean menu',
            arabic: 'فول مدمس باللبن',
            german: 'Braunen Bohnen Teller'
        },
        description: {
            english: 'Brown bean menu with Joghurt',
            arabic: 'فول مدمس باللبن',
            german: 'Braunen Bohnen Teller mit Joghurt'
        },
        price: {
            value: 5,
            currency: '€'
        },
        category: 'Breakfast',
    },
    {
        id: 20,
        images: [],
        title: {
            english: 'Chickpeas Menu',
            arabic: 'حمص حب بالزيت',
            german: 'Kichererbsen Menü'
        },
        description: {
            english: 'Chickpeas Menu with Oliven oil',
            arabic: 'حمص حب بالزيت',
            german: 'Kichererbsen Menü mit Oliven Öl'
        },
        price: {
            value: 5,
            currency: '€'
        },
        category: 'Breakfast',
    },
    {
        id: 21,
        images: [],
        title: {
            english: 'Chickpeas Menu',
            arabic: 'حمص حب باللبن',
            german: 'Kichererbsen Menü'
        },
        description: {
            english: 'Chickpeas Menu with Joghurt',
            arabic: 'حمص حب باللبن',
            german: 'Kichererbsen Menü mit Joghurt'
        },
        price: {
            value: 5,
            currency: '€'
        },
        category: 'Breakfast',
    },
    {
        id: 22,
        images: [],
        title: {
            english: 'arabic Flafel menu',
            arabic: 'صحن فلافل عربي',
            german: 'Arabischer Flafel Teller'
        },
        description: {
            english: 'arabic Flafel menu',
            arabic: 'صحن فلافل عربي',
            german: 'Arabischer Flafel Teller'
        },
        price: {
            value: 5.5,
            currency: '€'
        },
        category: 'dishes',
    },
    {
        id: 23,
        images: [],
        title: {
            english: 'Flafel menu',
            arabic: 'صحن فلافل فرط',
            german: 'Flafel Teller'
        },
        description: {
            english: 'Shish Taouk Menu',
            arabic: 'صحن فلافل فرط',
            german: 'Shish Taouk Menü'
        },
        price: {
            value: 5.5,
            currency: '€'
        },
        category: 'dishes',
    },
    {
        id: 24,
        images: [],
        title: {
            english: 'Arabic schawarma Menu',
            arabic: 'شاورما عربي دجاج',
            german: 'Arabischer Schawarma menü'
        },
        description: {
            english: 'Arabic schawarma Menu',
            arabic: 'شاورما عربي دجاج',
            german: 'Arabischer Schawarma menü'
        },
        price: {
            value: 6,
            currency: '€'
        },
        category: 'dishes',
    },
    {
        id: 25,
        images: [],
        title: {
            english: 'Arabic schawarma Menu XL',
            arabic: 'شاورما عربي دبل دجاج',
            german: 'Arabischer Schawarma menü XL'
        },

        description: {
            english: 'Arabic schawarma Menu XL',
            arabic: 'شاورما عربي دبل دجاج',
            german: 'Arabischer Schawarma menü XL'
        },
        price: {
            value: 10,
            currency: '€'
        },
        category: 'dishes'

    },
    {
        id: 26,
        images: [

        ],
        title: {
            english: 'Schawarma chicken menu',
            arabic: 'شاورما فرط دجاج',
            german: 'schawarma Hähnchen Menü'
        },

        description: {
            english: 'Shish Taouk Menu',
            arabic: 'شاورما فرط دجاج',
            german: 'Shish Taouk Menü'
        },
        price: {
            value: 7,
            currency: '€'
        },
        category: 'dishes'

    },
    {
        id: 27,
        images: [

        ],
        title: {
            english: 'Schawarma Earays menu',
            arabic: 'شاورما عرايس',
            german: 'Schawarma Earays Menü'
        },

        description: {
            english: 'Shish Taouk Menu',
            arabic: 'شاورما عرايس',
            german: 'Shish Taouk Menü'
        },
        price: {
            value: 7,
            currency: '€'
        },
        category: 'dishes'

    },
    {
        id: 28,
        images: [

        ],
        title: {
            english: 'Schawarma extra menu',
            arabic: 'شاورما اكسترا دجاج',
            german: 'Schawarma extra Menü'
        },

        description: {
            english: 'Schawarma extra menu',
            arabic: 'شاورما اكسترا دجاج',
            german: 'Schawarma extra Menü'
        },
        price: {
            value: 7,
            currency: '€'
        },
        category: 'dishes'

    },
    {
        id: 29,
        images: [

        ],
        title: {
            english: 'Schawarma Albasha menu',
            arabic: 'وجبة شاورما الباشا',
            german: 'Schawarma Albasha Menü'
        },

        description: {
            english: 'Schawarma Albasha Menu',
            arabic: 'وجبة شاورما الباشا',
            german: 'Schawarma Albasha Menü'
        },
        price: {
            value: 8,
            currency: '€'
        },
        category: 'dishes'

    },
    {
        id: 30,
        images: [

        ],
        title: {
            english: '1KG Schawarma ',
            arabic: 'كيلو شاورما فرط ',
            german: '1KG Schawarma'
        },

        description: {
            english: '1KG Schawarma',
            arabic: 'كيلو شاورما فرط ',
            german: '1KG Schawarma'
        },
        price: {
            value: 25,
            currency: '€'
        },
        category: 'dishes'

    },
    {
        id: 31,
        images: [

        ],
        title: {
            english: '1/2 KG Schawarma',
            arabic: 'نص كيلو شاورما فرط',
            german: '1/2 KG Schawarma'
        },

        description: {
            english: '1/2 KG Schawarma',
            arabic: 'نص كيلو شاورما فرط',
            german: '1/2 KG Schawarma'
        },
        price: {
            value: 13,
            currency: '€'
        },
        category: 'dishes'

    },
    {
        id: 32,
        images: [

        ],
        title: {
            english: 'Mandi Rice with chicken',
            arabic: 'رز مندي دجاج',
            german: 'Mandi reis- Hähnchen'
        },

        description: {
            english: 'Mandi Rice with chicken',
            arabic: 'رز مندي دجاج',
            german: 'Mandi reis- Hähnchen'
        },
        price: {
            value: 7,
            currency: '€'
        },
        category: 'dishes'

    },
    {
        id: 33,
        images: [

        ],
        title: {
            english: 'Mandi rice with meat',
            arabic: 'رز مندي لحمة',
            german: 'Mandi Reis- fleisch'
        },

        description: {
            english: 'Mandi rice with meat',
            arabic: 'رز مندي لحمة',
            german: 'Mandi Reis- fleisch'
        },
        price: {
            value: 8.5,
            currency: '€'
        },
        category: 'dishes'

    },
    {
        id: 34,
        images: [

        ],
        title: {
            english: 'Fajitta menu',
            arabic: 'وجبة فاهيتا',
            german: 'Fajitta Menü'
        },

        description: {
            english: 'Fajitta menu',
            arabic: 'وجبة فاهيتا',
            german: 'Fajitta Menü'
        },
        price: {
            value: 7.5,
            currency: '€'
        },
        category: 'dishes'

    },
    {
        id: 35,
        images: [

        ],
        title: {
            english: 'Crispy menu',
            arabic: 'وجبة كريسبي',
            german: 'Crispy Menü'
        },

        description: {
            english: 'Crispy Menu',
            arabic: 'وجبة كريسبي',
            german: 'Crispy Menü'
        },
        price: {
            value: 7,
            currency: '€'
        },
        category: 'dishes'

    },
    {
        id: 36,
        images: [

        ],
        title: {
            english: 'Cutlet menu',
            arabic: 'وجبة اسكالوب',
            german: 'Schnitzel Menü'
        },

        description: {
            english: 'cutlet Taouk Menu',
            arabic: 'وجبة اسكالوب',
            german: 'Schnitzel Menü'
        },
        price: {
            value: 7,
            currency: '€'
        },
        category: 'dishes'

    },
    {
        id: 37,
        images: [

        ],
        title: {
            english: 'Shish Taouk menu',
            arabic: 'وجبة شيش طاووق',
            german: 'Shish Taouk Menü'
        },

        description: {
            english: 'Shish Taouk Menu',
            arabic: 'وجبة شيش طاووق',
            german: 'Shish Taouk Menü'
        },
        price: {
            value: 7,
            currency: '€'
        },
        category: 'dishes'

    },
    {
        id: 38,
        images: [

        ],
        title: {
            english: 'Mexicano menu',
            arabic: 'وجبة مكسيكانو',
            german: 'Mexicano Menü'
        },

        description: {
            english: 'Mexicano Menu',
            arabic: 'وجبة مكسيكانو',
            german: 'Mexicano Menü'
        },
        price: {
            value: 7.5,
            currency: '€'
        },
        category: 'dishes'

    },
    {
        id: 39,
        images: [

        ],
        title: {
            english: 'Brosted Chicken menu',
            arabic: 'وجبة بروستد',
            german: 'Brosted Hähnchen Menü'
        },

        description: {
            english: 'Brosted Chicken menu',
            arabic: 'وجبة بروستد',
            german: 'Brosted Hähnchen Menü'
        },
        price: {
            value: 7.5,
            currency: '€'
        },
        category: 'dishes'

    },
    {
        id: 40,
        images: [

        ],
        title: {
            english: 'Cordon Bleu menu',
            arabic: 'وجبة كوردون بلو',
            german: 'Cordon Bleu Menü'
        },

        description: {
             english: 'Cordon Bleu menu',
             arabic: 'وجبة كوردون بلو',
             german: 'Cordon Bleu Menü'
        },
        price: {
            value: 8.5,
            currency: '€'
        },
        category: 'dishes'

    },
    {
        id: 41,
        images: [

        ],
        title: {
            english: 'Hamburger menu',
            arabic: 'وجبة همبرغر',
            german: 'Hamburger Menü'
        },

        description: {
            english: 'Hamburger menu',
            arabic: 'وجبة همبرغر',
            german: 'Hamburger Menü'
        },
        price: {
            value: 7.5,
            currency: '€'
        },
        category: 'dishes'

    },
    {
        id: 42,
        images: [

        ],
        title: {
            english: 'vegetarian menu',
            arabic: 'صحن نباتي مشكل',
            german: 'vegetarisch teller'
        },

        description: {
           english: 'vegetarian menu',
           arabic: 'صحن نباتي مشكل',
           german: 'vegetarisch teller'
        },
        price: {
            value: 9,
            currency: '€'
        },
        category: 'dishes'

    },
    {
        id: 43,
        images: [

        ],
        title: {
            english: 'Kubeh Labanieh',
            arabic: 'كبة لبنية مع لحم خاروف ورز',
            german: 'Kubeh Labanueh'
        },

        description: {
            english: 'Kubeh Labanieh',
            arabic: 'كبة لبنية مع لحم خاروف ورز',
            german: 'Kubeh Labanueh'
        },
        price: {
            value: 8.5,
            currency: '€'
        },
        category: 'dishes'

    },
    {
        id: 44,
        images: [

        ],
        title: {
            english: 'Grape leaves with lamb meat',
            arabic: 'ورق عنب يبرق مع لحم خاروف',
            german: 'Weinbältter'
        },

        description: {
            english: 'Grape leaves with lamb meat',
            arabic: 'ورق عنب يبرق مع لحم خاروف',
            german: 'Weinbältter'
        },
        price: {
            value: 7,
            currency: '€'
        },
        category: 'dishes'

    },
    {
        id: 45,
        images: [

        ],
        title: {
            english: 'Margharita pizza',
            arabic: 'بيتزا مرغريتا',
            german: 'Margharita Pizza'
        },

        description: {
             english: 'Margharita pizza',
             arabic: 'بيتزا مرغريتا',
             german: 'Margharita Pizza'
        },
        price: {
            value: [4,5.5],
            currency: '€'
        },
        category: 'pizza'

    },
    {
        id: 46,
        images: [

        ],
        title: {
            english: 'Tonno pizza',
            arabic: 'بيتزا تونا',
            german: 'Tonno pizza'
        },

        description: {
                                 english: 'Tonno pizza',
                                 arabic: 'بيتزا تونا',
                                 german: 'Tonno pizza'
                             },
        price: {
            value: [6, 8],
            currency: '€'
        },
        category: 'pizza'

    },
    {
        id: 47,
        images: [

        ],
        title: {
            english: 'mushrooms pizza',
            arabic: 'بيتزا الفطر',
            german: 'Champignons pizza'
        },

        description: {
                                 english: 'mushrooms pizza',
                                 arabic: 'بيتزا الفطر',
                                 german: 'Champignons pizza'
                             },
        price: {
            value: [6,8],
            currency: '€'
        },
        category: 'pizza'

    },
    {
        id: 48,
        images: [

        ],
        title: {
            english: 'Schawarma pizza',
            arabic: 'بيتزا الشاورما',
            german: 'Schawarma pizza'
        },

        description: {
                                 english: 'Schawarma pizza',
                                 arabic: 'بيتزا الشاورما',
                                 german: 'Schawarma pizza'
                             },
        price: {
            value: [6,8],
            currency: '€'
        },
        category: 'pizza'

    },
    {
        id: 49,
        images: [

        ],
        title: {
            english: 'Spinach pizza',
            arabic: 'بيتزا السبانخ',
            german: 'Spinat pizza'
        },

        description: {
                                 english: 'Spinach pizza',
                                 arabic: 'بيتزا السبانخ',
                                 german: 'Spinat pizza'
                             },
        price: {
            value: [6,8],
            currency: '€'
        },
        category: 'pizza'

    },
    {
        id: 50,
        images: [

        ],
        title: {
            english: 'Broccoli pizza',
            arabic: 'بيتزا البروكلي',
            german: 'Broccoli pizza'
        },

        description: {
                                 english: 'Broccoli pizza',
                                 arabic: 'بيتزا البروكلي',
                                 german: 'Broccoli pizza'
                             },
        price: {
            value: [6,8],
            currency: '€'
        },
        category: 'pizza'

    },
    {
        id: 51,
        images: [

        ],
        title: {
            english: 'Vegetarian pizza',
            arabic: 'بيتزا خضار',
            german: 'Vegetaria pizza'
        },

        description: {
                                 english: 'Vegetarian pizza',
                                 arabic: 'بيتزا خضار',
                                 german: 'Vegetaria pizza'
                             },
        price: {
            value: [6,8],
            currency: '€'
        },
        category: 'pizza'

    },
    {
        id: 52,
        images: [

        ],
        title: {
            english: 'Sucuk pizza',
            arabic: 'بيتزا سجق ',
            german: 'Sucuk pizza'
        },

        description: {
                                 english: 'Sucuk pizza',
                                 arabic: 'بيتزا سجق ',
                                 german: 'Sucuk pizza'
                             },
        price: {
            value: [6,8.5],
            currency: '€'
        },
        category: 'pizza'

    },
    {
        id: 53,
        images: [

        ],
        title: {
            english: 'albasha pizza',
            arabic: 'بيتزا الباشا',
            german: 'albasha pizza'
        },

        description: {
                                 english: 'albasha pizza',
                                 arabic: 'بيتزا الباشا',
                                 german: 'albasha pizza'
                             },
        price: {
            value: [8,9.5],
            currency: '€'
        },
        category: 'pizza'

    },
    {
        id: 54,
        images: [

        ],
        title: {
            english: 'Schawarma Sandwich',
            arabic: 'ساندوش شاورما',
            german: 'Schawarma Rolle'
        },

        description: {
                                 english: 'Schawarma Sandwich',
                                 arabic: 'ساندوش شاورما',
                                 german: 'Schawarma Rolle'
                             },
        price: {
            value: 3.5,
            currency: '€'
        },
        category: 'sandwiches'

    },
    {
        id: 55,
        images: [

        ],
        title: {
            english: 'Schawarma Sandwich XL',
            arabic: 'ساندوش شاورما XL',
            german: 'Schawarma Rolle XL'
        },

        description: {
                                 english: 'Schawarma Sandwich XL',
                                 arabic: 'ساندوش شاورما XL',
                                 german: 'Schawarma Rolle XL'
                             },
        price: {
            value: 4.5,
            currency: '€'
        },
        category: 'sandwiches'

    },
    {
        id: 56,
        images: [

        ],
        title: {
            english: 'Schawarma baguette',
            arabic: 'شاورما صمون ',
            german: 'Schawarma Tasche'
        },

        description: {
            english: 'Schawarma baguette',
            arabic: 'شاورما صمون',
            german: 'Schawarma Tasche'
        },
        price: {
            value: 4.5,
            currency: '€'
        },
        category: 'sandwiches'

    },
    {
        id: 57,
        images: [

        ],
        title: {
            english: 'Flafel sandwich',
            arabic: 'ساندوش فلافل',
            german: 'Flafel sandwich'
        },

        description: {
            english: 'Flafel sandwich',
            arabic: 'ساندوش فلافل',
            german: 'Flafel sandwich'
        },
        price: {
            value: 3,
            currency: '€'
        },
        category: 'sandwiches'

    },
    {
        id: 58,
        images: [

        ],
        title: {
            english: 'Flafel sandwich XL',
            arabic: 'ساندوش فلافل XL',
            german: 'Flafel sandwich XL'
        },

        description: {
            english: '',
            arabic: '',
            german: ''
        },
        price: {
            value: 4,
            currency: '€'
        },
        category: 'sandwiches'

    },
    {
        id: 59,
        images: [

        ],
        title: {
            english: 'Flafel baguette',
            arabic: 'فلافل صمون',
            german: 'Schawarma Tasche'
        },

        description: {
            english: 'Shish Taouk Menu',
            arabic: 'وجبة شيش طاووق',
            german: 'Shish Taouk Menü'
        },
        price: {
            value: 3.5,
            currency: '€'
        },
        category: 'sandwiches'

    },
    {
        id: 60,
        images: [

        ],
        title: {
            english: 'shish Taouk Sandwich',
            arabic: 'ساندوش شيش طاووق',
            german: 'Shish taouk Sandwich'
        },

        description: {
            english: 'Shish Taouk Sandwich',
            arabic: 'ساندوش شيش طاووق صمون',
            german: 'Shish Taouk Sandwich'
        },
        price: {
            value: 4,
            currency: '€'
        },
        category: 'sandwiches'

    },
    {
        id: 61,
        images: [

        ],
        title: {
            english: 'Hamburger Rindfleisch',
            arabic: 'همبرغر لحم',
            german: 'Hamburger meat'
        },

        description: {
            english: '',
            arabic: '',
            german: ''
        },
        price: {
            value: 4,
            currency: '€'
        },
        category: 'sandwiches'

    },
    {
        id: 62,
        images: [

        ],
        title: {
            english: 'Crisoy Sandwich',
            arabic: 'ساندوش كريسبي صمون ',
            german: 'Crisoy Sandwich'
        },

        description: {
            english: '',
            arabic: '',
            german: ''
        },
        price: {
            value: 4,
            currency: '€'
        },
        category: 'sandwiches'

    },
    {
        id: 63,
        images: [

        ],
        title: {
            english: 'Fajiita Sandwich',
            arabic: 'ساندوش فاهيتا صمون',
            german: 'Fajiita Sandwich'
        },

        description: {
            english: '',
            arabic: '',
            german: ''
        },
        price: {
            value: 4,
            currency: '€'
        },
        category: 'sandwiches'

    },
    {
        id: 64,
        images: [

        ],
        title: {
            english: 'Mexicano Sandwich',
            arabic: ' ساندوش ميكسيكانو صمون',
            german: 'Mexicano Sandwich'
        },

        description: {
            english: '',
            arabic: '',
            german: ''
        },
        price: {
            value: 4,
            currency: '€'
        },
        category: 'sandwiches'

    },
    {
        id: 65,
        images: [

        ],
        title: {
            english: 'Fries Sandwich',
            arabic: 'رول بطاطا ',
            german: 'Pommes rolle'
        },

        description: {
            english: '',
            arabic: '',
            german: ''
        },
        price: {
            value: 3,
            currency: '€'
        },
        category: 'sandwiches'

    },
    {
        id: 66,
        images: [

        ],
        title: {
            english: 'Fries Sandwich',
            arabic: 'بطاطا صمون',
            german: 'Pommes tasche'
        },

        description: {
            english: '',
            arabic: '',
            german: ''
        },
        price: {
            value: 3.5,
            currency: '€'
        },
        category: 'sandwiches'

    },
    {
        id: 67,
        images: [

        ],
        title: {
            english: 'Roast Kibbeh',
            arabic: 'كبة مقلية',
            german: 'Braten Kibbeh'
        },

        description: {
            english: '',
            arabic: '',
            german: ''
        },
        price: {
            value: 2,
            currency: '€'
        },
        category: 'vorspeisen'

    },
    {
        id: 68,
        images: [

        ],
        title: {
            english: 'grilled Kibbeh',
            arabic: 'كبة مشوية',
            german: 'Grillen Kibeh'
        },

        description: {
            english: '',
            arabic: '',
            german: ''
        },
        price: {
            value: 2.5,
            currency: '€'
        },
        category: 'vorspeisen'

    },
    {
        id: 69,
        images: [

        ],
        title: {
            english: 'Mandi rice',
            arabic: 'رز مندي',
            german: 'Mandi Reis'
        },

        description: {
            english: '',
            arabic: '',
            german: ''
        },
        price: {
            value: 3.5,
            currency: '€'
        },
        category: 'vorspeisen'

    },
    {
        id: 70,
        images: [

        ],
        title: {
            english: 'Yalanji',
            arabic: 'يالانجي ',
            german: 'Yalanji'
        },

        description: {
            english: '',
            arabic: '',
            german: ''
        },
        price: {
            value: 4,
            currency: '€'
        },
        category: 'vorspeisen'

    },
    {
        id: 71,
        images: [

        ],
        title: {
            english: 'vegetable salad',
            arabic: 'سلطة الخضار',
            german: 'Gemüse Salat'
        },

        description: {
            english: '',
            arabic: '',
            german: ''
        },
        price: {
            value: 4,
            currency: '€'
        },
        category: 'vorspeisen'

    },
    {
        id: 72,
        images: [

        ],
        title: {
            english: 'Fattoush salad',
            arabic: 'فتوش',
            german: 'Fattousch'
        },

        description: {
            english: '',
            arabic: '',
            german: ''
        },
        price: {
            value: 4,
            currency: '€'
        },
        category: 'vorspeisen'

    },
    {
        id: 73,
        images: [

        ],
        title: {
            english: 'Tabboleh',
            arabic: 'تبولة',
            german: 'Tabboleh'
        },

        description: {
            english: '',
            arabic: '',
            german: ''
        },
        price: {
            value: 4,
            currency: '€'
        },
        category: 'vorspeisen'

    },
    {
        id: 74,
        images: [

        ],
        title: {
            english: 'Coleslaw Salad',
            arabic: 'سلطة كولسلو',
            german: 'Coleslaw Salat'
        },

        description: {
            english: '',
            arabic: '',
            german: ''
        },
        price: {
            value: 3.5,
            currency: '€'
        },
        category: 'vorspeisen'

    },
    {
        id: 75,
        images: [

        ],
        title: {
            english: 'Hummus',
            arabic: 'حمص',
            german: 'Hummus'
        },

        description: {
            english: '',
            arabic: '',
            german: ''
        },
        price: {
            value: 3.5,
            currency: '€'
        },
        category: 'vorspeisen'

    },
    {
        id: 76,
        images: [

        ],
        title: {
            english: 'Mutabal',
            arabic: 'متبل',
            german: 'Mutabal'
        },

        description: {
            english: '',
            arabic: '',
            german: ''
        },
        price: {
            value: 3.5,
            currency: '€'
        },
        category: 'vorspeisen'

    },
    {
        id: 77,
        images: [

        ],
        title: {
            english: 'Fries',
            arabic: 'بطاطا مقلية',
            german: 'Pommes'
        },

        description: {
            english: '',
            arabic: '',
            german: ''
        },
        price: {
            value: [2.5,3.5,5.5],
            currency: '€'
        },
        category: 'vorspeisen'

    },
    {
        id: 78,
        images: [

        ],
        title: {
            english: 'Pomm Doner box',
            arabic: 'بوم دونر ',
            german: 'Pomm Döner Box'
        },

        description: {
            english: '',
            arabic: '',
            german: ''
        },
        price: {
            value: 4,
            currency: '€'
        },
        category: 'vorspeisen'

    },
    {
        id: 79,
        images: [

        ],
        title: {
            english: 'Cheese Borek',
            arabic: 'جبنة بورك',
            german: 'Käse Börek'
        },

        description: {
            english: '',
            arabic: '',
            german: ''
        },
        price: {
            value: 4,
            currency: '€'
        },
        category: 'vorspeisen'

    },
    {
        id: 80,
        images: [

        ],
        title: {
            english: 'side dishes',
            arabic: 'service',
            german: 'beilagen Teller'
        },

        description: {
            english: '',
            arabic: '',
            german: ''
        },
        price: {
            value: 3.5,
            currency: '€'
        },
        category: 'vorspeisen'

    },
    {
        id: 81,
        images: [

        ],
        title: {
            english: 'Muhammara',
            arabic: 'محمرة ',
            german: 'Muhammara'
        },

        description: {
            english: '',
            arabic: '',
            german: ''
        },
        price: {
            value: 2,
            currency: '€'
        },
        category: 'vorspeisen'

    },
    {
        id: 82,
        images: [

        ],
        title: {
            english: 'Mohalaia',
            arabic: ' ',
            german: 'Mohalaia'
        },

        description: {
            english: '',
            arabic: '',
            german: ''
        },
        price: {
            value: 2,
            currency: '€'
        },
        category: 'sweets'

    },
    {
        id: 83,
        images: [

        ],
        title: {
            english: 'Arabic ice cream 1KG',
            arabic: 'آيس كريم عربي ',
            german: 'Arabisches eis 1KG'
        },

        description: {
            english: '',
            arabic: '1KG',
            german: ''
        },
        price: {
            value: 16,
            currency: '€'
        },
        category: 'sweets'

    },
    {
        id: 84,
        images: [

        ],
        title: {
            english: 'Arabic ice cream (2 pieces)',
            arabic: 'آيس كريم عربي ',
            german: 'Arabisches eis 2stk'
        },

        description: {
            english: '',
            arabic: '2 قطعة',
            german: ''
        },
        price: {
            value: 3.5,
            currency: '€'
        },
        category: 'sweets'

    },
    {
        id: 85,
        images: [

        ],
        title: {
            english: 'Casita 1KG',
            arabic: 'كاسيتا ',
            german: 'Casita 1KG'
        },

        description: {
            english: '',
            arabic: '1KG',
            german: ''
        },
        price: {
            value: 18,
            currency: '€'
        },
        category: 'sweets'

    },
    {
        id: 86,
        images: [

        ],
        title: {
            english: 'Casita',
            arabic: 'كاسيتا ',
            german: 'Casita'
        },

        description: {
            english: '1 piece',
            arabic: '1قطعة',
            german: '1 Stück'
        },
        price: {
            value: 3.5,
            currency: '€'
        },
        category: 'sweets'

    },
    {
        id: 87,
        images: [

        ],
        title: {
            english: 'CocaCola',
            arabic: 'كولا ',
            german: 'CocaCola'
        },

        description: {
            english: '',
            arabic: '',
            german: ''
        },
        price: {
            value: 1.5,
            currency: '€'
        },
        category: 'drinks'

    },
    {
        id: 88,
        images: [

        ],
        title: {
            english: 'Fanta',
            arabic: 'فانتا ',
            german: 'Fanta'
        },

        description: {
            english: '',
            arabic: '',
            german: ''
        },
        price: {
            value: 1.5,
            currency: '€'
        },
        category: 'drinks'

    },
    {
        id: 89,
        images: [

        ],
        title: {
            english: 'Sprite',
            arabic: ' سبرايت',
            german: 'sprite'
        },

        description: {
            english: '',
            arabic: '',
            german: ''
        },
        price: {
            value: 1.5,
            currency: '€'
        },
        category: 'drinks'

    },
    {
        id: 90,
        images: [

        ],
        title: {
            english: 'CocaCola zero',
            arabic: ' كولا زيرو ',
            german: 'CocaCola zero'
        },

        description: {
            english: '',
            arabic: '',
            german: ''
        },
        price: {
            value: 1.5,
            currency: '€'
        },
        category: 'drinks'

    },
    {
        id: 91,
        images: [

        ],
        title: {
            english: 'CocaCola light',
            arabic: 'كولا لايت',
            german: 'CocaCola'
        },

        description: {
            english: '',
            arabic: '',
            german: ''
        },
        price: {
            value: 1.5,
            currency: '€'
        },
        category: 'drinks'

    },
    {
        id: 92,
        images: [],
        title: {
            english: 'CocaCola 1Liter',
            arabic: 'كولا 1 لتر',
            german: 'CocaCola 1Liter'
        },

        description: {
            english: '',
            arabic: '1Liter',
            german: ''
        },
        price: {
            value: 2.5,
            currency: '€'
        },
        category: 'drinks'

    },
    {
              id: 93,
              images: [],
              title: {
                  english: 'Fanta 1Liter',
                  arabic: 'فانتا 1 لتر',
                  german: 'Fanta 1Liter'
              },

              description: {
                  english: '',
                  arabic: '1Liter',
                  german: ''
              },
              price: {
                  value: 2.5,
                  currency: '€'
              },
              category: 'drinks'

          },
          {
                        id: 94,
                        images: [],
                        title: {
                            english: 'Sprite 1Liter',
                            arabic: 'سبرايت 1 لتر',
                            german: 'Fanta 1Liter'
                        },

                        description: {
                            english: '',
                            arabic: '1Liter',
                            german: ''
                        },
                        price: {
                            value: 2.5,
                            currency: '€'
                        },
                        category: 'drinks'

                    },
                    {
                                    id: 95,
                                    images: [],
                                    title: {
                                        english: 'Cola Zero 1Liter',
                                        arabic: 'كولا زيرو 1 لتر',
                                        german: 'Cola Zero 1Liter'
                                    },

                                    description: {
                                        english: '',
                                        arabic: '1Liter',
                                        german: ''
                                    },
                                    price: {
                                        value: 2.5,
                                        currency: '€'
                                    },
                                    category: 'drinks'

                                },
    {
        id: 96,
        images: [],
        title: {
            english: 'juice',
            arabic: 'عصير',
            german: 'DurstLöscher'
        },

        description: {
            english: 'Lemon, watermelon, orange, fruit',
            arabic: 'ليمون ، بطيخ ، برتقال ، فواكه',
            german: 'Lemon, Wassermelone, Orange, obst'
        },
        price: {
            value: 1,
            currency: '€'
        },
        category: 'drinks'

    },
    {
        id: 97,
        images: [],
        title: {
            english: 'Water',
            arabic: 'ماء',
            german: 'Wasser'
        },

        description: {
            english: '350ml',
            arabic: '350ml',
            german: '350ml'
        },
        price: {
            value: 1,
            currency: '€'
        },
        category: 'drinks'

    },
    {
        id: 98,
        images: [],
        title: {
            english: 'Ayran',
            arabic: 'عيران',
            german: 'Ayran'
        },

        description: {
            english: '',
            arabic: '',
            german: ''
        },
        price: {
            value: 1,
            currency: '€'
        },
        category: 'drinks'

    }
]

export default products
