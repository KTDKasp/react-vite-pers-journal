import './CardButton.css';

export const CardButton = ({ children, ...props }) => {
  return (
    <button {...props} className="card-button">
      {children}
    </button>
  );
};
