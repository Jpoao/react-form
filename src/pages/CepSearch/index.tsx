import ResultCard from "../../components/ResultCard"
import "./styles.css"

const CepSearch = () => {
  return (
    <div className="cep-search-container">
      <h1 className="text-primary">Busca CEP</h1>
      <div className="container search-container">
        <form>
          <div className="form-container">
            <input
              type="text"
              className="search-input"
              placeholder="CEP (somente números)"
              onChange={() => {}}
            />
            <button type="submit" className="btn btn-primary search-button">
              Buscar
            </button>
          </div>
        </form>

        <ResultCard title="Logradouro" description="teste" />
        <ResultCard title="Número" description="123" />

      </div>
    </div>
  );
};

export default CepSearch;