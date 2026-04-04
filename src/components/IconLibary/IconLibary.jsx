import { Typography } from "@mui/material"
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import CurrencyExchangeTwoToneIcon from '@mui/icons-material/CurrencyExchangeTwoTone';
import TaskAltTwoToneIcon from '@mui/icons-material/TaskAltTwoTone';
import TrendingUpTwoToneIcon from '@mui/icons-material/TrendingUpTwoTone';
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import ArrowCircleLeftTwoToneIcon from '@mui/icons-material/ArrowCircleLeftTwoTone';
import {
  EventNoteRounded,
  PlayCircleRounded,
  QueryStatsRounded,
  CheckCircleRounded,
  SavingsRounded,
  RepeatRounded,
} from "@mui/icons-material";


const icons = {
    HomeTwoToneIcon:HomeTwoToneIcon,
    CurrencyExchangeTwoToneIcon:CurrencyExchangeTwoToneIcon,
    TaskAltTwoToneIcon:TaskAltTwoToneIcon,
    TrendingUpTwoToneIcon:TrendingUpTwoToneIcon,
    MenuTwoToneIcon:MenuTwoToneIcon,
    CheckCircleRoundedIcon:CheckCircleRoundedIcon,
    TrendingUpRoundedIcon:TrendingUpRoundedIcon,
    TrendingDownRoundedIcon:TrendingDownRoundedIcon,
    EventNoteRounded:EventNoteRounded,
    PlayCircleRounded:PlayCircleRounded,
    QueryStatsRounded:QueryStatsRounded,
    CheckCircleRounded:CheckCircleRounded,
    SavingsRounded:SavingsRounded,
    RepeatRounded:RepeatRounded,
    ArrowCircleLeftTwoToneIcon:ArrowCircleLeftTwoToneIcon

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