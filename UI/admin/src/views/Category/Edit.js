import React, { useEffect, useState } from "react";
import Base from "../../Components/Base";
import { getCategory, updateCategory } from "../../api/helper";
/**
 * @author
 * @function UpdateCategory
 **/

const UpdateCategory = ({ match }) => {
  const [category, setCategory] = useState("");
  const [categoryToUpdate, setCategoryToUpdate] = useState("");
  useEffect(() => {
    fetchCategory(match.params.id);
  }, []);
  const fetchCategory = (id) => {
    getCategory(id)
      .then((resp) => {
        setCategory(resp);
        setCategoryToUpdate(resp);
      })
      .catch((err) => {
        console.log(err);
        setError(err);
      });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    setError("");
    setSuccess(false);

    //backend request fired
    updateCategory(match.params.categoryId, user._id, token, { name }).then(
      (data) => {
        if (data.error) {
          setError(true);
        } else {
          setError("");
          setSuccess(true);
          setName("");
          setCreatedCategory(data.name);
        }
      }
    );
  };
  const handleChange = (name) => (event) => {
    setCategoryToUpdate({ ...categoryToUpdate, name: event.target.value });
  };
  return (
    <Base title="update category" description="">
      <form>
        <div className="form-group">
          <input
            type="text"
            onChange={handleChange("name")}
            name="name"
            className="form-control"
            placeholder="Name"
            value={name}
          />
        </div>

        <button
          type="submit"
          onClick={onSubmit}
          className="btn btn-outline-success mb-3"
        >
          Update Category
        </button>
      </form>
    </Base>
  );
};

export default UpdateCategory;
