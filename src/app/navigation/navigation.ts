import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'products',
        title    : 'Products',
        translate: 'NAV.PRODUCTS.TITLE',
        type     : 'group',
        children : [
            {
                id       : 'flowers',
                title    : 'Flowers',
                translate: 'NAV.FLOWERS.TITLE',
                type     : 'item',
                icon     : 'local_florist',
                url      : '/flowers',
            },
            {
                id       : 'concentrates',
                title    : 'Concentrates',
                translate: 'NAV.CONCENTRATES.TITLE',
                type     : 'item',
                icon     : 'format_color_fill',
                url      : '/concentrates',
            },
            {
                id       : 'pre-rolls',
                title    : 'Pre-Rolls',
                translate: 'NAV.PRE-ROLLS.TITLE',
                type     : 'item',
                icon     : 'smoking_rooms',
                url      : '/pre-rolls',
            }
        ]
    },
    {
        id       : 'extras',
        title    : 'Extras',
        translate: 'NAV.EXTRAS.TITLE',
        type     : 'group',
        children : [
            {
                id       : 'shopping_cart',
                title    : 'Shopping Cart',
                translate: 'NAV.SHOPPING-CART.TITLE',
                type     : 'item',
                icon     : 'shopping_cart',
                url      : '/shopping-cart',
            },
            {
                id       : 'directions',
                title    : 'Directions',
                translate: 'NAV.DIRECTIONS.TITLE',
                type     : 'item',
                icon     : 'directions',
                url      : '/directions',
            },
            {
                id       : 'call_us',
                title    : 'Contact Us',
                translate: 'NAV.CALLUS.TITLE',
                type     : 'item',
                icon     : 'contact_phone',
                url      : '/callus',
            }
        ]
    }
];
