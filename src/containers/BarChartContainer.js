import { connect } from 'react-redux';
import BarChart from "../components/BarChart/BarChart";
import { loadUserId, fetchStudentData } from "../actions";

function mapStateToProps(state){
    return{
        userId: state.currentUserId,
        studentdata: state.studentdata,
        loading: state.loading,
        error: state.error

    }
}

function mapDispatchToProps(dispatch){
    return {
        loadUserId(){
            dispatch(loadUserId())
        },
        fetchStudentData(){
            dispatch(fetchStudentData())
        }
        // loadStudentData(){
        //     dispatch(loadStudentData())
        // },
        // studentDataLoaded:function(studentdata){
        //     let action = studentDataLoaded(studentdata);
        //     dispatch(action);
        // }
    }
}

const BarChartContainer = connect(mapStateToProps, mapDispatchToProps)(BarChart)
export default BarChartContainer;