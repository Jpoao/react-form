import axios from "axios";
import { useState } from "react";
import ResultCard from "../../components/ResultCard";
import "./styles.css";

type FormData = {
  cep: string;
};

type Address = {
  logradouro: string;
  localidade: string;
};

const CepSearch = () => {
  const [hasError, setHasError] = useState(false);

  const [address, setAddress] = useState<Address>();

  const [formData, setFormData] = useState<FormData>({
    cep: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    axios
      .get(`https://viacep.com.br/ws/${formData.cep}/json/`)
      .then((response) => {
        setHasError(false);
        setAddress(response.data);
      })
      .catch((error) => {
        setHasError(true);
        setAddress(undefined);
      });
  };

  return (
    <div className="cep-search-container">
      <h1 className="text-primary">Busca CEP</h1>
      <div className="container search-container">
        {hasError && (
          <div className="alert alert-danger">
            Cep invalido... tente novamente com um cep valido!
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <input
              type="text"
              name="cep"
              value={formData.cep}
              className="search-input"
              placeholder="CEP (somente números)"
              onChange={handleChange}
            />
            <button type="submit" className="btn btn-primary search-button">
              Buscar
            </button>
          </div>
        </form>

        {address && (
          <>
            <ResultCard title="Logradouro" description={address.logradouro} />
            <ResultCard title="Número" description={address.localidade} />
          </>
        )}
      </div>
    </div>
  );
};

export default CepSearch;
