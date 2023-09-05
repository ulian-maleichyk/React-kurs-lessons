import { Connect, connect } from "react-redux"
import * as actions from "../actions"


 const Counter = ({counter, inc, dec, rnd}) => {
    return(
        <div className="jumbotron">
            <h1>{counter}</h1>
            <button onClick={dec}  className="btn btn-primary">DEC</button>
            <button onClick={inc}  className="btn btn-primary">INC</button>
            <button onClick={rnd}  className="btn btn-primary">RND</button>
        </div> 
    )
 }

    // const mapDispatchToProps = (dispatch) => {
    //     const {inc, dec, rnd} = bindActionCreators(actions, dispatch)
    //     return {
    //         // inc: () => dispatch({type: 'INC'}),
    //         // dec: () => dispatch({type: 'DEC'}),
    //         // rnd: () => {
    //         //     const value = Math.floor(Math.random() * 10)
    //         //     dispatch(rnd(value))
    //         // },
    //         inc,
    //         dec,
    //         rnd,
    //     }
    // }
    

    // const mapDispatchToProps = (dispatch) => {
    //     return  bindActionCreators(actions, dispatch)
    // }

    const mapStateToProps = (state) => {
        return {
            counter: state.value
        }
    }
// export default connect(mapStateToProps,  mapDispatchToProps )(Counter)
 export default connect(mapStateToProps, actions)(Counter)