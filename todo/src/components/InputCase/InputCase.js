import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';

class InputCase extends React.Component {
  state = {
    inputValue:''
  };
  onButtonClick = () => {
    this.setState ({
      inputValue: ''
    });
    this.props.onClickAdd (this.state.inputValue);
  };

  render () {
    const {onClickAdd} = this.props;
    const condition = this.props.formError;
		let formHelperText;
    if (condition) {
      formHelperText = <FormHelperText id="component-error-text">
        Необходимо ввести текст
        </FormHelperText>}
     else {
      formHelperText = ''
    };

    return (
      <>
      <FormControl error>
      <TextField
       id="standard-full-width"
       style={{ margin: 8 }}
       placeholder="Добавить задание"
       fullWidth
       margin="normal"
       InputLabelProps={{
       shrink: true,
       }}
       value = {this.state.inputValue.toUpperCase()}
       onChange ={event => this.setState({inputValue:event.target.value})}
        />
        <>
        {formHelperText}
        </>
        </FormControl>
      <Button
      variant="contained"
      color="primary"
      fullWidth
      className = "btn"
      onClick = {this.onButtonClick}>
          Добавить задание
     </ Button>
   </>);
 }
}

export default InputCase;
