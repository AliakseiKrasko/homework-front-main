import './App.css';
import {HW1} from './HW/1/HW1';
import {HW2, UsersObjectType} from './HW/2/HW2';
import {HW3} from './HW/3/HW3';
import {HW4} from './HW/4/HW4';

function App() {
    const users: UsersObjectType = {
        myFriends: [
            { id: 1, name: 'John', age: 25, address: { street: '123 Main St', city: 'New York' } },
            { id: 2, name: 'Alice', age: 30, address: { street: '456 Elm St', city: 'San Francisco' } },
            // остальные друзья
        ]
    };
    return (
        <div className="App">

            <HW1/>
            <HW2 myFriends={users.myFriends}/>
            <HW3 />
            {/*<HW4 />*/}
        </div>
    );
}

export default App;
