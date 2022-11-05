import { useState } from "react";

const AddTodoForms = () => {
  const [AddTodo, setAddTodo] = useState("");
  const [error, setError] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (AddTodo.length === 0) {
      setError(true);
    } else {
      console.log("user add todo  " + AddTodo);
      setError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && (
        <div className="alert alert-danger alert-dismissible fade show  fade-in-down w-100 justify-between">
          <strong>Todo Not Empty!</strong> You should check Enter Todo
          <button
            type="button"
            className="btn close"
            onClick={() => setError(false)}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      )}
      <div className="w-25 mx-auto">
        <div className="form-group ">
          <label htmlFor="exampleInputEmail1">Todo :</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Todo"
            value={AddTodo}
            onChange={(e) => {setAddTodo(e.target.value) ; setError(false)}}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your todo with anyone else.
          </small>
        </div>
        <button type="submit" className="btn btn-primary d-flex ">
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddTodoForms;
