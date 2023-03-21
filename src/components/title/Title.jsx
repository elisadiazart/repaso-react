import { v4 } from "uuid";

const Title = ({text, name, number, boolean, isUndedfined, isNull, array, object}) => {
    return <>
    <h1>{text}</h1>
    <p>Name: {name}</p>
    <p>Number: {number}</p>
    <p>Boolean: {boolean}</p>
    <p>isUndefined: {isUndedfined}</p>
    <p>isNull: {isNull}</p>
    <div>
    {array.map(number => {
        return <p key={v4()}> {number}</p>
    })}
    </div>
    <p>object: a:{object.a} b: {object.b}</p>
    </>
};

export default Title