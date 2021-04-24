import React from "react";
import PropTypes from "prop-types";

import InfoIcon from '@material-ui/icons/Info';
import CalendarIcon from '@material-ui/icons/CalendarToday';
import FlowersoIcon from '@material-ui/icons/LocalFlorist';
import ConsumeIcon from '@material-ui/icons/Whatshot';
import MedicalIcon from '@material-ui/icons/LocalHospital';
import SelfCultiveIcon from '@material-ui/icons/Spa';

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
    {value == "1" && (<InfoIcon />)}
    {value == "2" && (<CalendarIcon />)}
    {value == "3" && (<FlowersoIcon />)}
    {value == "4" && (<ConsumeIcon />)}
    {value == "5" && (<MedicalIcon />)}
    {value == "6" && (<SelfCultiveIcon />)}    
    </>
  );
};

TypePostInput.propTypes = {
  value: PropTypes.string,
};

export default TypePostInput;