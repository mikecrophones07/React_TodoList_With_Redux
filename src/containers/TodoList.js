import { connect } from "react-redux";
import TodoWrapper from "../components/todoWrapper"

const mapStateToProps = state => ({
    todoList: state.todoList
});

const mapDispatchToProps = dispatch => ({
    addTodoList: (value, status) =>
        dispatch({
            type: "ADDITEMS",
            payload: {content: value, status: status}
        })
});

export default connect(
mapStateToProps,
mapDispatchToProps
)(TodoWrapper);