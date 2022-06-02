import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { LinearProgress } from "@material-ui/core";

const useStyle = makeStyles((theme) => {
  return createStyles({
    bar: {
      width: "100%",
      "& > * + * ": {
        marginTop: theme.spacing(2),
      },
    },
  });
});

export default () => {
  const classes = useStyle();

  return (
    <div className={classes.bar}>
      <LinearProgress />
    </div>
  );
};
