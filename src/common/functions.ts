import toPinyinTonesV1 from 'pinyin-tone'
import toPinyinTonesV2, {convertUnspacedPinyin} from 'pinyin-tone/v2'

export const toPinyin = {
    v1: toPinyinTonesV1,
    v2: toPinyinTonesV2,
    convertUnspacedPinyin: convertUnspacedPinyin,
}
