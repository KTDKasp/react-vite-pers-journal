import './Button.css';

export const Button = ({ children }) => {
  return (
    <button className='button accent'>
      {children}
    </button>
  );
};
