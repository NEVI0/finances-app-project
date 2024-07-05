import { Text } from 'react-native';

import BxArrowBack from '../../../assets/icons/bx-arrow-back.svg'
import BxArrowLeft from '../../../assets/icons/bx-left-arrow-alt.svg'
import BxCalendar from '../../../assets/icons/bx-calendar.svg'
import BxCheck from '../../../assets/icons/bx-check.svg'
import BxChevronDown from '../../../assets/icons/bx-chevron-down.svg'
import BxChevronUp from '../../../assets/icons/bx-chevron-up.svg'
import BxDollar from '../../../assets/icons/bx-dollar.svg'
import BxEdit from '../../../assets/icons/bx-edit-alt.svg'
import BxHome from '../../../assets/icons/bx-home-alt.svg'
import BxLock from '../../../assets/icons/bx-lock-alt.svg'
import BxLockOpen from '../../../assets/icons/bx-lock-open-alt.svg'
import BxLogIn from '../../../assets/icons/bx-log-in.svg'
import BxLogOut from '../../../assets/icons/bx-log-out.svg'
import BxMail from '../../../assets/icons/bx-mail.svg'
import BxMenu from '../../../assets/icons/bx-menu.svg'
import BxPlus from '../../../assets/icons/bx-plus.svg'
import BxTag from '../../../assets/icons/bx-purchase-tag-alt.svg'
import BxSearch from '../../../assets/icons/bx-search-alt.svg'
import BxTrash from '../../../assets/icons/bx-trash.svg'
import BxTrendingDown from '../../../assets/icons/bx-trending-down.svg'
import BxTrendingUp from '../../../assets/icons/bx-trending-up.svg'
import BxUser from '../../../assets/icons/bx-user.svg'
import BxX from '../../../assets/icons/bx-x.svg'

const ICONS = {
    'arrow-back': BxArrowBack,
    'arrow-left': BxArrowLeft,
    'calendar': BxCalendar,
    'check': BxCheck,
    'chevron-down': BxChevronDown,
    'chevron-up': BxChevronUp,
    'dollar': BxDollar,
    'edit': BxEdit,
    'home': BxHome,
    'lock': BxLock,
    'lock-open': BxLockOpen,
    'log-in': BxLogIn,
    'log-out': BxLogOut,
    'mail': BxMail,
    'menu': BxMenu,
    'plus': BxPlus,
    'tag': BxTag,
    'search': BxSearch,
    'trash': BxTrash,
    'trending-down': BxTrendingDown,
    'trending-up': BxTrendingUp,
    'user': BxUser,
    'x': BxX,
}

export const Icon = ({ name, color = '#000', size = 24 }) => {
    const BuiltIcon = ICONS[name];

    if (!BuiltIcon) return <Text>!</Text>;
    return <BuiltIcon fill={color} width={size} height={size} />;
}
