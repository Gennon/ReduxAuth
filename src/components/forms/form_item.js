import React, {Component, PropTypes} from 'react';
import { FormControl, FormGroup, ControlLabel} from 'react-bootstrap';

class FormItem extends Component {
  render() {
    const {label, type, field} = this.props;
    
    return (
      <FormGroup validationState={field.touched && field.error && "error"}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl type={type} {...field}>
          {this.props.children}
        </FormControl>
        {field.touched && field.error && <div>{field.error}</div>}
      </FormGroup>
    );
  }
}

FormItem.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  field: PropTypes.object.isRequired
};

export default FormItem;