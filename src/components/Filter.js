import PropTypes from 'prop-types';

export const Filter = ({ value, onChange }) => {
    return (    
    <label className='filter'>
    <p>Find contacts by name</p>
      <input
      className='filter__input'
      type="text"
      value={value}
      onChange={onChange}
      />
    </label>

    );
};
Filter.propTypes = {  
            value: PropTypes.string.isRequired,
};