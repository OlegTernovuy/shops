import facebookLogo from "../../../../public/facebook_line-2.svg";
import youtubeLogo from "../../../../public/youtube_line.svg";
import instaLogo from "../../../../public/ins_line.svg";

import buttonIcon from "../../../../public/buttonIcon.svg";
import cartIcon from "../../../../public/cart.svg";
import questionIcon from "../../../../public/question_mark.svg";

export const mobileMenuInfo = [
    {
        'title': 'Про компанію',
        'href': '/'
    },
    {
        'title': 'Публічна оферта',
        'href': '/'
    },
    {
        'title': 'Установка',
        'href': '/'
    },
    {
        'title': 'Гарантія',
        'href': '/'
    },
    {
        'title': 'Кредит',
        'href': '/'
    },
]

export const mobileMenuSocialMedia = [
    {
        'href': 'https://www.facebook.com',
        'imageSrc': facebookLogo
    },
    {
        'href': 'https://www.youtube.com',
        'imageSrc': youtubeLogo
    },
    {
        'href': 'https://www.instagram.com',
        'imageSrc': instaLogo
    },
]

export const mobileMenuLinkInfo = [
    {
        'href': '?catalog=true',
        'imageSrc': buttonIcon,
        'title': 'Каталог товарів',
    },
    {
        'href': '?element=true',
        'imageSrc': questionIcon,
        'title': 'Довідковий центр'
    },
    {
        'href': '?shopCart=true',
        'imageSrc': cartIcon,
        'title': 'Кошик',
    },
]