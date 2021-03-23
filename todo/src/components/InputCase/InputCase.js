import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import PropTypes from 'prop-types';

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
      <FormControl  fullWidth error>
      <TextField
       id="standard-full-width"
       style={{ margin: 8 }}
       placeholder="Добавить задание"
       fullWidth
       margin="normal"
       value = {this.state.inputValue.toUpperCase()}
       onChange ={event => this.setState({inputValue:event.target.value.toUpperCase()})}
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

InputCase.propTypes = {
  value: PropTypes.oneOfType ([
        PropTypes.string,
        PropTypes.number
    ])
};


export default InputCase;
