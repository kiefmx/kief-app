import InfoIcon from '@material-ui/icons/Info';
import CalendarIcon from '@material-ui/icons/CalendarToday';
import FlowersoIcon from '@material-ui/icons/LocalFlorist';
import SmileIcon from '@material-ui/icons/Face';
import ConsumeIcon from '@material-ui/icons/Whatshot';
import MedicalIcon from '@material-ui/icons/LocalHospital';


export const getPostTypeOptionList = () => {  
  return [ {label: "Info", value: 1, icon: InfoIcon},
  {label: "Eventos", value: 2, icon: CalendarIcon}, 
  {label: "Flores", value: 3, icon: FlowersoIcon}, 
  {label: "Fun", value: 4, icon: SmileIcon}, 
  {label: "Consumo Responsable", value: 5, icon: ConsumeIcon},
  {label: "Medicinal", value: 6, icon: MedicalIcon}];
};