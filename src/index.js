import ReactDOM from 'react-dom/client';
import { Dropdown } from './components';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const Index = () => {
  return (
    <Dropdown
      {...{
        width: '100%',
        valueKey: 'id',
        onChange: (e) => console.log(e),
        getLabel: (o) => o.id,
        searchable: true,
        // disabled:false,
        options: [{ id: 'ahtsham' }],
        placeholder: 'Languages',
        // value: '',
        type: 'dropdown',
      }}
    />
  );
};

export default Index;

root.render(<Index />);
reportWebVitals();
