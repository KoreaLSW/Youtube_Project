import { format, register } from 'timeago.js';
import koLocale from 'timeago.js/lib/lang/ko';

register('ko', koLocale);

export function formatAgo(date, lang = 'en_US') {
    return format(date, lang);
}

export function viewNumberConversion(view) {
    const viewString = view;
    const viewNumber = Number(view);
    if (1000 < viewNumber && viewNumber < 10000) {
        return `${viewString.substr(0, 1)}천`;
    } else if (10000 < viewNumber && viewNumber < 100000) {
        return `${viewString.substr(0, 1)}만`;
    } else if (100000 < viewNumber && viewNumber < 1000000) {
        return `${viewString.substr(0, 2)}만`;
    } else if (1000000 < viewNumber && viewNumber < 10000000) {
        return `${viewString.substr(0, 3)}만`;
    } else if (10000000 < viewNumber && viewNumber < 100000000) {
        return `${viewString.substr(0, 4)}만`;
    } else if (100000000 < viewNumber && viewNumber < 1000000000) {
        return `${viewString.substr(0, 1)}.${viewString.substr(1, 2)}억`;
    } else if (1000000000 < viewNumber && viewNumber < 10000000000) {
        return `${viewString.substr(0, 2)}억`;
    }
}
