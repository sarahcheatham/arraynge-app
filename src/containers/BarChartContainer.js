import { connect } from 'react-redux';
// import BarChart from "../components/BarChart/BarChart";
import BarChart2 from "../components/BarChart/BarChart2";
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

// const BarChartContainer = connect(mapStateToProps, mapDispatchToProps)(BarChart)
const BarChartContainer = connect(mapStateToProps, mapDispatchToProps) (BarChart2)
export default BarChartContainer;