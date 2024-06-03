# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

This code sets up a basic React application using several hooks:

useState:    to manage state in the Home component.
useEffect:   to log a message when the count state changes.
useNavigate: to programmatically navigate to the About page.
useParams:   to access route parameters in the User component.
useContext:  and a custom hook useContextApi to manage and use context.
useCallback: to memoize the increment function.
useMemo:     to memoize the doubledCount value.
useRef:      to access the input element directly.
