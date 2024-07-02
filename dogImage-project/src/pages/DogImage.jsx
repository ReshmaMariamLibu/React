import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dogImage } from '../store/dog.js';
import Button from '@mui/material/Button';

const DogImage = () => {

    const dispatch = useDispatch();
    const dogData = useSelector((state) => state.dogImage.image);
    const isStatus = useSelector((state)=> state.dogImage.status)
    console.log("dog data:",dogData)
    useEffect(() => {
        dispatch(dogImage());
    }, [dispatch]);

    return (
        <div>
        <h1>Dog Image</h1>
        <div>
           { console.log(dogData.message)   }
           {console.log(dogData.length)}
            {/* <button onClick={() => dispatch(dogImage())}>Click here</button> */}
            <Button onClick={() => dispatch(dogImage())}variant="contained">Click here!!!!</Button>
        </div>
        {isStatus === 'failed' ? (
            <div>404 error</div>
        ) : (
            isStatus === 'pending' ? (
                <div>Pending</div>
            ) : (
                <img src={dogData.message} alt="Dog" />  
            )
        )}
    </div>
    );
};

export default DogImage;
