import InfoIcon from '@material-ui/icons/Info';
import CalendarIcon from '@material-ui/icons/CalendarToday';
import FlowersoIcon from '@material-ui/icons/LocalFlorist';
import SmileIcon from '@material-ui/icons/Face';
import ConsumeIcon from '@material-ui/icons/Whatshot';
import MedicalIcon from '@material-ui/icons/LocalHospital';
import SelfCultiveIcon from '@material-ui/icons/Spa';


export const getPostTypeOptionList = () => {  
  return [ 
    {label: "Noticias", value: 1, icon: InfoIcon, color:"#344444"},
    {label: "Calendario", value: 2, icon: CalendarIcon}, 
    {label: "Flores", value: 3, icon: FlowersoIcon},   
    {label: "ConsumoResponsable", value: 4, icon: ConsumeIcon},
    {label: "Medicinal", value: 5, icon: MedicalIcon},
    {label: "Autocultivo", value: 6, icon: SelfCultiveIcon},
  ];
};