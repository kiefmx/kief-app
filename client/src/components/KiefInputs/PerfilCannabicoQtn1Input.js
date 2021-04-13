import React from "react";
import PropTypes from "prop-types";

import {
  makeStyles,
  FormLabel,
  Chip,
  Typography,
  FormHelperText,
} from "@material-ui/core";

const options = [{label: "Auto exploración", value: 1},
                  {label: "Cuidado Personal", value: 2}, 
                  {label: "Comercial", value: 3}, 
                  {label: "Espiritual", value: 4}, 
                  {label: "Industrial", value: 5}, 
                  {label: "Investigación", value: 6}, 
                  {label: "Medicinal", value: 7}]


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

const PerfilCannabicoQtn1Input = ({
  value,
  setValue,
  label,
  error,
  setError,
}) => {
  const classes = useStyles();
  

  const handleClick = (clickedValue) => {
    if (setError) {
      setError("");
    }
    value = [];
      setValue([...value, clickedValue]);
  };

  return (
    <>
      <div className={classes.container}>
        {label && (
          <p style={{ fontSize: '1.3rem', lineHeight: '1.6rem' }} className="color-grey" > {label}</p>
        )}
        {Boolean(error) && (
          <FormHelperText
            className={classes.formHelperText}
            error={Boolean(error)}
          >
            {error}
          </FormHelperText>
        )}
        <div className={classes.chipsDiv}>
          {options && options.length
            ? options.map((option, i) => (
                <Chip
                  icon={option.icon}
                  className={classes.chip}
                  key={i}
                  color="primary"
                  variant={
                    value.find((e) => e === option.value)
                      ? "default"
                      : "outlined"
                  }
                  label={
                    <Typography variant="body2">{`${option.label}`}</Typography>
                  }
                  clickable
                  onClick={() => handleClick(option.value)}
                />
              ))
            : null}
        </div>
      </div>
    </>
  );
};

PerfilCannabicoQtn1Input.propTypes = {
  label: PropTypes.string,
  value: PropTypes.array.isRequired,
  setValue: PropTypes.func.isRequired,
  error: PropTypes.string,
  setError: PropTypes.func,
};

export default PerfilCannabicoQtn1Input;