import { connect } from 'react-redux';
// import BarChart from "../components/BarChart/BarChart";
// import BarChart2 from "../components/BarChart/BarChart2";
import BarChartPage from '../components/BarChart/BarChartPage';
import { loadStudentData } from "../store/actions";

function mapStateToProps(state){
    return{
        studentdata: state.studentdata,
        loading: state.loading,
        error: state.error

    }
}

function mapDispatchToProps(dispatch){
    return {
        loadStudentData(){
            dispatch(loadStudentData())
        }
    }
}

// const BarChartContainer = connect(mapStateToProps, mapDispatchToProps)(BarChart)
// const BarChartContainer = connect(mapStateToProps, mapDispatchToProps) (BarChart2)
const BarChartContainer = connect(mapStateToProps, mapDispatchToProps) (BarChartPage)
export default BarChartContainer;