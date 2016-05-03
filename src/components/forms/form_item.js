import React, {Component, PropTypes} from 'react';
import { FormControl, FormGroup, ControlLabel} from 'react-bootstrap';

class FormItem extends Component {
  render() {
    const {label, type, field} = this.props;
    const options = {};
    if (field.touched && field.error)
      options['validationState'] = 'error';
    
    return (
      <FormGroup {...options}>
        <ControlLabel>{label}</ControlLabel>
        {this.renderController(type, field)}
        {field.touched && field.error && <div>{field.error}</div>}
      </FormGroup>
    );
  }
  
  renderController(type, field){
    if(this.props.type === 'select'){
      return (
        <FormControl componentClass="select" {...field}>
          {this.props.children}
        </FormControl>
      );
    }
    else{
      return (
        <FormControl type={type} {...field} />
      );
    }
  }
}

FormItem.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  field: PropTypes.object.isRequired
};

export default FormItem;