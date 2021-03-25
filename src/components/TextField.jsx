import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#222020",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#222020",
    },
  },
})(TextField);

export const TextInputField = (props) => (
  <CssTextField
    id={props.id === null ? "custom-css-standard-input" : props.id}
    multiline={props.multiline === null ? false : props.multiline}
    rows={props.rows === null ? null : props.rows}
    label={props.label}
    id="standard-size-small"
    fullWidth={true}
    size="medium"
    className="contactBoxTextField"
  />
);
