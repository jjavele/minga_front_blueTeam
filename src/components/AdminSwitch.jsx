import { useState } from 'react';
import { useDispatch } from 'react-redux';

export default function AdminSwitch({ author, action }) {

    const [isOn, setIsOn] = useState(author?.active);
    const dispatch = useDispatch();

    function handleSwitch() {
        let data = {
            active: !isOn,
        };
        setIsOn(!isOn);//Se actualiza el estado local isOn al valor opuesto
        dispatch(action({ id: author?.user_id, data }));
    }

    return (
        <button type="button" onClick={handleSwitch} className={`flex relative w-5 h-3 rounded-full transition-colors duration-300 ${isOn ? 'bg-[#4338CA]' : 'bg-gray-400'}`}>
            <span className={`absolute inset-0 w-[0.5rem] h-[0.5rem] mt-[1.6px] ml-[0.12rem] bg-white rounded-full transition-transform duration-300 ${isOn ? 'transform translate-x-full' : ''}`} />
        </button>
    );
}
