import { useState } from "react";
import { useContext} from 'react';
import { AppContext } from '../../context/AppContext';


export const AddProductModal = (props) => {
    const [state, setState] = useState("");
    const idproduct = props.id
    const {redeem, setRedeem} = useContext(AppContext);
    const {headers} = useContext(AppContext);

    const onSubmitx = () => {
        state.idReward = idproduct
        state.amount = state.amount/1
        console.log("jjjjjjjj", state)
		fetch(`http://localhost:9000/user/userRedem`, {
        method: 'POST',
        body: state,
        headers : headers 
  })

	};
    

    const onChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <div className="modal fade mt-5" id="modalFormName" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-body">
                        <h5 className="label-modal edit">Add Product</h5>
                        <div onClick={onSubmitx}>
                            <div className="form-group">
                                <label>Number</label>
                                <input type="text" className="form-control" value={state.number} name="number" onChange={onChange} />
                            </div>
                            <div className="form-group">
                                <label>Amount</label>
                                <input type="number" className="form-control" value={state.amount} name="amount" onChange={onChange} />
                            </div>
                            <button onClick={onSubmitx} style={{ marginTop: "-20px" }} type="submit" className="btn btn-e mb-5">
                                Submit
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}