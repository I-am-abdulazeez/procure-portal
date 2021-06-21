import { Grid, Typography } from "@material-ui/core";

export function FileHeader({ file }) {
  return (
    <Grid container justify="space-between" alignItems="center">
      <Grid item>
        <Typography variant="subtitle1">{file.name}</Typography>
      </Grid>
    </Grid>
  );
}
