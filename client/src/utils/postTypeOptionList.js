import LudicoIcon from '@material-ui/icons/MoodOutlined';
import ActualidadIcon from '@material-ui/icons/HistoryOutlined';
import AutocultivoIcon from '@material-ui/icons/EcoOutlined';
import MedicalIcon from '@material-ui/icons/LocalHospitalOutlined';
import EmprendimientoIcon from '@material-ui/icons/WorkOutline';
import LifeStyleIcon from '@material-ui/icons/PeopleAltOutlined';


export const getPostTypeOptionList = () => {  
  return [ 
    {code:"kiefmx-badge-001", label: "Lúdico / Recreativo", value: 1, icon: LudicoIcon, color:"#344444"},
    {code:"kiefmx-badge-002", label: "Actualidad Cannábica", value: 2, icon: ActualidadIcon, color:"#344444"}, 
    {code:"kiefmx-badge-003", label: "Autocultivo", value: 3, icon: AutocultivoIcon, color:"#344444"},   
    {code:"kiefmx-badge-004", label: "Medicinal / Investigación", value: 4, icon: MedicalIcon, color:"#344444"},
    {code:"kiefmx-badge-005", label: "Emprendimiento", value: 5, icon: EmprendimientoIcon, color:"#344444"},
    {code:"kiefmx-badge-006", label: "Estilo de Vida", value: 6, icon: LifeStyleIcon, color:"#344444"},
  ];
};