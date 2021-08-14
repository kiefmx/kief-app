import React from "react";
import PropTypes from "prop-types";

import LudicoIcon from '@material-ui/icons/MoodOutlined';
import ActualidadIcon from '@material-ui/icons/HistoryOutlined';
import AutocultivoIcon from '@material-ui/icons/EcoOutlined';
import MedicalIcon from '@material-ui/icons/LocalHospitalOutlined';
import EmprendimientoIcon from '@material-ui/icons/WorkOutline';
import LifeStyleIcon from '@material-ui/icons/PeopleAltOutlined';

import {
  makeStyles,
  Chip,
  Typography,  
} from "@material-ui/core";

import { getPostTypeOptionList } from '../../utils/postTypeOptionList';

const postTypes = getPostTypeOptionList();

const useStyles = makeStyles((theme) => ({
  container: {
    margin: ".5rem 0 .5rem",
    textAlign: "center",
  },
  chipsDiv: {
    marginTop: ".3rem",
  },
  chip: {
    margin: ".5rem",
    padding: "0.5rem",
  },
  formHelperText: {
    textAlign: "center",
  },
}));

// 1.0.5

const TypePostInput = ({
  value,     
}) => {
  
  const classes = useStyles();

  return (
    <>
    {value == "1" && ( <><LudicoIcon /> <span>Lúdico / Recreativo</span></> )}
    {value == "2" && ( <><ActualidadIcon /> <span>Actualidad Cannábica</span></> )}
    {value == "3" && ( <><AutocultivoIcon /> <span>Autocultivo</span></> )}
    {value == "4" && ( <><MedicalIcon /> <span>Medicinal / Investigación</span></> )}
    {value == "5" && ( <><EmprendimientoIcon /> <span>Emprendimiento</span></> )}
    {value == "6" && ( <><LifeStyleIcon /> <span>Estilo de Vida</span></> )}    
    </>
  );
};

TypePostInput.propTypes = {
  value: PropTypes.string,
};

export default TypePostInput;