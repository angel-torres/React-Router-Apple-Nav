

const appleData = [
    {
      id: 1,
      name: 'Apple',
      subnav: [{
          name: 'Apple',
            id: 'apple',
            img:'https://www.apple.com/v/mac/home/ae/images/familybrowser/macbook__fjd32xo0xwmm_large.svg'
        }]
    }, 
    {
        id: 2,
        name: 'Mac',
        subnav: [
            {
                name: 'MacBook',
                id: 'macbook',
                img:
                    'https://www.apple.com/v/mac/home/ae/images/familybrowser/macbook__fjd32xo0xwmm_large.svg',
            },
            {
                name: 'MacBook Air',
                img:
                    'https://www.apple.com/v/mac/home/ae/images/familybrowser/macbookair__by1vem70tkc2_large.svg',
            },
            {
                name: 'MacBook Pro',
                img:
                    'https://www.apple.com/v/mac/home/ae/images/familybrowser/macbookpro__e0wcugzmt26a_large.svg',
            },
            {
                name: 'iMac',
                img:
                    'https://www.apple.com/v/mac/home/ae/images/familybrowser/imac__dlz2ciyr6hm6_large.svg',
            },
            {
                name: 'iMac Pro',
                img:
                    'https://www.apple.com/v/mac/home/ae/images/familybrowser/imac_pro__el8kcar06qky_large.svg',
            },
            {
                name: 'Mac Pro',
                img:
                    'https://www.apple.com/v/mac/home/ae/images/familybrowser/macpro__dt69qr0ywncm_large.svg',
            },
            {
                name: 'Mac Mini',
                img:
                    'https://www.apple.com/v/mac/home/ae/images/familybrowser/macmini__rzlk7b0xsmqq_large.svg',
            },
            {
                name: 'Accessories',
                img:
                    'https://www.apple.com/v/mac/home/ae/images/familybrowser/mac_acc__fia3ihqup4ae_large.svg',
            },
            {
                name: 'High Sierra',
                img:
                    'https://www.apple.com/v/mac/home/ae/images/familybrowser/mac_osx__dq0x03ehapyu_large.svg',
            },
            {
                name: 'Compare',
                img:
                    'https://www.apple.com/v/mac/home/ae/images/familybrowser/mac_comp__by57zw2zt32a_large.svg',
            },
        ]
      }, {
        id: 3,
        name: 'iPad',
        subnav: [
            {
                name: 'iPad Pro',
                img:
                    'https://www.apple.com/v/ipad/home/am/images/chapternav/ipadpro_light__fic9xqb4rq62_large.svg',
            },
            {
                name: 'iPad Pro 10"',
                img:
                    'https://www.apple.com/v/ipad/home/am/images/chapternav/ipadpro_10_5_light__cdnzsjo3mhsi_large.svg',
            },
            {
                name: 'iPad',
                img:
                    'https://www.apple.com/v/ipad/home/am/images/chapternav/ipad_light__fxafu0jcd16q_large.svg',
            },
            {
                name: 'iPad mini 4',
                img:
                    'https://www.apple.com/v/ipad/home/am/images/chapternav/ipadmini_light__br4a8cvnupki_large.svg',
            },
            {
                name: 'iOS 12',
                img:
                    'https://www.apple.com/v/ipad/home/am/images/chapternav/ios_light__gnmyez8xx0a6_large.svg',
            },
            {
                name: 'Apple Pencil',
                img:
                    'https://www.apple.com/v/ipad/home/am/images/chapternav/apple_pencil_light__bz8n8cqdvcia_large.svg',
            },
            {
                name: 'Smart Keyboard',
                img:
                    'https://www.apple.com/v/ipad/home/am/images/chapternav/keyboard_light__f6gmbmwm4i6a_large.svg',
            },
            {
                name: 'Accessories',
                img:
                    'https://www.apple.com/v/ipad/home/am/images/chapternav/ipad_acc_light__f7t99j4r9qem_large.svg',
            },
            {
                name: 'Compare',
                img:
                    'https://www.apple.com/v/ipad/home/am/images/chapternav/ipad_comp_light__btey5qm4uaoi_large.svg',
            },
        ]
      }, {
        id: 4,
        name: 'iPhone',
        subnav: [
            {
                name: 'iPhone Xs',
                img:
                    'https://www.apple.com/v/iphone/home/y/images/chapternav/iphonexs_dark_large.svg',
            },
            {
                name: 'iPhone XR',
                img:
                    'https://www.apple.com/v/iphone/home/y/images/chapternav/iphonexr_dark_large.svg',
            },
            {
                name: 'iPhone 8',
                img:
                    'https://www.apple.com/v/iphone/home/y/images/chapternav/iphone8_dark_large.svg',
            },
            {
                name: 'iPhone 7',
                img:
                    'https://www.apple.com/v/iphone/home/y/images/chapternav/iphone7_dark_large.svg',
            },
            {
                name: 'iOS 12',
                img:
                    'https://www.apple.com/v/iphone/home/y/images/chapternav/ios_dark_large.svg',
            },
            {
                name: 'AirPods',
                img:
                    'https://www.apple.com/v/iphone/home/y/images/chapternav/airpods_dark_large.svg',
            },
            {
                name: 'Accessories',
                img:
                    'https://www.apple.com/v/iphone/home/y/images/chapternav/accessories_dark_large.svg',
            },
            {
                name: 'Compare',
                img:
                    'https://www.apple.com/v/iphone/home/y/images/chapternav/compare_dark_large.svg',
            },
        ]
      }, {
        id: 5,
        name: 'Watch',
        subnav:  [
            {
                name: 'Apple Watch Series 4',
                img:
                    'https://www.apple.com/v/watch/home/l/images/watch_nav_series_2_large.svg',
            },
            {
                name: 'Apple Watch Nike+',
                img:
                    'https://www.apple.com/v/watch/home/l/images/watch_nav_nike_large.svg',
            },
            {
                name: 'Apple Watch Hermès',
                img:
                    'https://www.apple.com/v/watch/home/l/images/watch_nav_hermes_large.svg',
            },
            {
                name: 'Apple Watch Series 3',
                img:
                    'https://www.apple.com/v/watch/home/l/images/watch_nav_edition_large.svg',
            },
            {
                name: 'Watch OS',
                img:
                    'https://www.apple.com/v/watch/home/l/images/watch_nav_watch_os_large.svg',
            },
            {
                name: 'Bands',
                img:
                    'https://www.apple.com/v/watch/home/l/images/watch_nav_bands_large.svg',
            },
            {
                name: 'Accessories',
                img:
                    'https://www.apple.com/v/watch/home/l/images/watch_nav_accessories_large.svg',
            },
            {
                name: 'Compare',
                img:
                    'https://www.apple.com/v/watch/home/l/images/watch_nav_compare_large.svg',
            },
        ]
      }, {
        id: 6,
        name: 'TV',
        subnav: [
            {
                name: 'Apple TV 4K',
                img:
                    'https://www.apple.com/v/tv/home/f/images/home/apple_tv_dark_large.svg',
            },
            {
                name: 'Apple TV',
                img:
                    'https://www.apple.com/v/tv/home/f/images/home/apple_tv_dark_large.svg',
            },
            {
                name: 'TV App',
                img:
                    'https://www.apple.com/v/tv/home/f/images/home/tvapp_dark_large.svg',
            },
            {
                name: 'Accessories',
                img:
                    'https://www.apple.com/v/tv/home/f/images/home/accessories_dark_large.svg',
            },
            {
                name: 'Compare',
                img:
                    'https://www.apple.com/v/tv/home/f/images/home/compare_dark_large.svg',
            },
        ] 
    }, {
        id: 7,
        name: 'Music',
        subnav: [
            {
                name: 'Apple Music',
                img:
                    'https://www.apple.com/v/music/h/images/overview/icons/apple_music_large.svg',
            },
            {
                name: 'iTunes',
                img:
                    'https://www.apple.com/v/music/h/images/overview/icons/itunes_large.svg',
            },
            {
                name: 'HomePod',
                img:
                    'https://www.apple.com/v/music/h/images/overview/icons/homepod_icon_large.svg',
            },
            {
                name: 'AirPods',
                img:
                    'https://www.apple.com/v/music/h/images/overview/icons/airpods_icon_large.svg',
            },
            {
                name: 'iPod Touch',
                img:
                    'https://www.apple.com/v/music/h/images/overview/icons/ipod_touch_light_large.svg',
            },
            {
                name: 'Music Accessories',
                img:
                    'https://www.apple.com/v/music/h/images/overview/icons/accessories_large.svg',
            },
            {
                name: 'Gift Cards',
                img:
                    'https://www.apple.com/v/music/h/images/overview/icons/gift_cards_large.svg',
            },
        ]
    }, {
        id: 8,
        name: 'Support',
        subnav: []
    }
  ];

  export default appleData;