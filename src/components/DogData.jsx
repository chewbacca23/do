import { useParams } from 'react-router-dom';
import data from './data.js';

export default function DogData(){
    const {dogName} = useParams();

    const findDog = data.find(item => item.name === dogName);
    console.log(findDog);
    return (
        <div>
            <h3>Name: {findDog.name}</h3>
            <h3>Temperament{findDog.temp}</h3>
            <h3>age: {findDog.age}</h3>
          </div>  
    )

}