import { connect } from 'react-redux';
import BarChart from "../components/BarChart/BarChart";
import { fetchStudentData } from "../actions";

function mapStateToProps(state){
    return{
        studentdata: state.studentdata,
        loading: state.loading,
        error: state.error

    }
}

function mapDispatchToProps(dispatch){
    return {
        fetchStudentData(){
            dispatch(fetchStudentData())
        }
    }
}

const BarChartContainer = connect(mapStateToProps, mapDispatchToProps)(BarChart)
export default BarChartContainer;