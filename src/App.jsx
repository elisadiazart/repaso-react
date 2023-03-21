import Title from "./components/title/Title";

const App = () => {
	return <Title text='Esto es un titulo' name='Dorian' number={23} boolean= {true} isUndefined = {undefined} isNull={null} array={[1,2,3,4,5]} object={{a: 1, b: 3 }}/>
};

export default App;
