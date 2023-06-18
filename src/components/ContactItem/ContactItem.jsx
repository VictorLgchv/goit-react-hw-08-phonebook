import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsAndFilter/operations';
import { Item, BtnDel } from './ContactItem.styled';
import PropTypes from 'prop-types';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };
  return (
    <Item>
      <div>
        <p>
          {name}: {number}
        </p>
        <BtnDel type="button" onClick={() => handleDelete(id)}>
          Delete
        </BtnDel>
      </div>
    </Item>
  );
};

export default Contact;

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
