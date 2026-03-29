import { Typography } from "@mui/material"
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import CurrencyExchangeTwoToneIcon from '@mui/icons-material/CurrencyExchangeTwoTone';
import TaskAltTwoToneIcon from '@mui/icons-material/TaskAltTwoTone';
import TrendingUpTwoToneIcon from '@mui/icons-material/TrendingUpTwoTone';
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';

const icons = {
HomeTwoToneIcon:HomeTwoToneIcon,
CurrencyExchangeTwoToneIcon:CurrencyExchangeTwoToneIcon,
TaskAltTwoToneIcon:TaskAltTwoToneIcon,
TrendingUpTwoToneIcon:TrendingUpTwoToneIcon,
MenuTwoToneIcon:MenuTwoToneIcon
}

export default function IconLibary({name,...props}){
    const IconComponent = icons[name]

    if (!IconComponent){
        <Typography>
            Icone não encontrado
        </Typography>
    }
    return <IconComponent{...props}/>
}