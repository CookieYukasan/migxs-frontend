import { useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import styles from "./styles.module.scss";

const SearchInput = () => {
  const [value, setValue] = useState<string>();
  return (
    <div className={styles.searchInput}>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Buscar por..."
        id="search"
        type="text"
      />
      <FaSearch className={styles.searchIcon} />
      <FaTimes onClick={() => setValue("")} className={styles.closeIcon} />
    </div>
  );
};

export default SearchInput;
