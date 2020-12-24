import Items from "../Items/index";
export default function Order() {
  return (
    <section className='order'>
      <label className='order__label' htmlFor='order'>
        Ordenar
      </label>
      <select className='order__select select' name='order' id='order'>
        <option className='select__value' value='new'>
          Lançamento
        </option>
        <option className='select__value' value='alph'>
          Ordem Alfabética
        </option>
      </select>
    </section>
  );
}
