import React from "react";
import PropTypes from "prop-types";

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
      {postTypes[value - 1].label}
    </>
  );
};

TypePostInput.propTypes = {
  value: PropTypes.string,
};

export default TypePostInput;