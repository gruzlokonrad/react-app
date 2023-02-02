import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateSearch } from "../../redux/selectors";
import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";
import styles from "./SearchFrom.module.scss";

const SearchForm = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateSearch({search}));
  }

  return (
    <form onSubmit={handleSubmit} className={styles.searchForm}>
      <TextInput
        value={search}
        onChange={e => {
          setSearch(e.target.value)
        }}
        placeholder="Search.."
      />
      <Button>
        <span className="fa fa-search" />
      </Button>
    </form>
  );
};

export default SearchForm;