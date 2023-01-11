import "./css/Filtres.css";
const Filter = (props) => {
  const actualYear = new Date().getFullYear();
  const twentyLastYears = new Array(5)
    .fill("")
    .map((_, index) => actualYear - index);

  const selectHandler = (e) => {
    const year = e.target.value;
    props.setYear(year);
  };

  return (
    <div className="filterbyyear">
      <p>filtrer par années</p>
      <select onChange={selectHandler}>
        <option value="">----Choisir une Année----</option>
        {twentyLastYears.map((year) => (
          <option value={year} key={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
