import { useState } from "react";
import { useContext} from 'react';
import { AppContext } from '../../context/AppContext';
import { useHistory } from 'react-router'

export const AddProductModal = (props) => {
    const [state, setState] = useState("");
    const idproduct = props.id
    const {redeem, setRedeem} = useContext(AppContext);
    const {
		headers,
        loadingPoin,
        setLoadingPoin,
	} = useContext(AppContext);


    // console.log("loadingpoin 2", loadingPoin)
    // const history = useHistory()

    const onSubmitx = async() => {
        // alert("kasklasklksalk")
        console.log("testets", headers)
        state.idReward = idproduct
        state.amount = state.amount/1
        
        console.log("asasda", state)
		await fetch(`http://3.21.75.144:8080/user/userRedem`, {
        method: 'POST',
        body: JSON.stringify({idReward: state.idReward, amount: state.amount, nomor: state.nomor}),
        headers: headers
        
    })
        // history.go(0)
        setLoadingPoin(!loadingPoin)
	};
    

    const onChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <div className="modal fade mt-5" id={`modalFormName${props.id}`}  tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-body">
                        <h5 className="label-modal edit">Add Product</h5>
                        <div>
                            <div className="form-group">
                                <label>Number</label>
                                <input type="text" className="form-control" value={state.nomor} name="nomor" onChange={onChange} />
                            </div>
                            <div className="form-group">
                                <label>Amount</label>
                                <input type="number" className="form-control" value={state.amount} name="amount" onChange={onChange} />
                            </div>
                            <button  onClick={onSubmitx} style={{ marginTop: "-20px" }} type="button" data-bs-dismiss="modal" className="btn btn-e mb-5">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}