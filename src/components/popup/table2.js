import { useState } from "react";
import { useContext} from 'react';
import { AppContext } from '../../context/AppContext';
import { useHistory } from 'react-router'
import axios from "axios";



export const AddProductModal2 = (props) => {
    const [image, setImage] = useState("");
    const [state, setState] = useState("");
    const idredem = props.id
    const {redeem, setRedeem} = useContext(AppContext);
    const {
		headers,
        loadingPoin,
        setLoadingPoin,
	} = useContext(AppContext);

    const onSubmity = async() => {
        // alert("kasklasklksalk")
        console.log("testets", headers)
        state.idProduct = idredem
        state.amount = state.amount/1

        const data = new FormData()
        data.append("file", image)
        data.append("upload_preset", "lw7i8fyd")
        data.append("cloud_name", "chcpyto")
        
        axios.post(`https://api.cloudinary.com/v1_1/chcpyto/image/upload`, data)
            .then(response => {
                console.log("datdatadt", response)
                state.img = response.data.url
                fetch(`http://localhost:9000/user/request`, {
                method: 'POST',
                body: JSON.stringify({idProduct: state.idProduct, amount: state.amount, img: state.img}),
                headers: headers
            })
            })
            .catch(err => console.log(err))
            console.log("statestate", state)
            

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
        <div className="modal fade mt-5" id="modalFormName" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-wrapper">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body">
                            <h5 className="label-modal edit">Add Product</h5>
                            <div>
                                <div className="form-group" >
                                    <label>Image </label>
                                    <input type="file" className="form-control form-field d-flex align-items-center" accept="image/*" onChange={(e) => setImage(e.target.files[0])}></input>
                                </div>
                                <div className="form-group">
                                    <label>Amount  </label>
                                    <input type="text" className="form-control form-field d-flex align-items-center" value={state.amount} name="amount" onChange={onChange} />
                                </div>
                                <button onClick={onSubmity} style={{ marginTop: "-20px" }} type="submit" className="btn btn-e mb-5" data-bs-dismiss="modal">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}