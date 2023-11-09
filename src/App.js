export default function App() {
  return <TipCalculator />;
}

function TipCalculator() {
  return (
    <div className="app-inner">
      <BillInput />
      <SelectPercentage />
      <Output />
      <Reset />
    </div>
  );
}

function BillInput() {
  return (
    <div>
      <label for="bill">How much was the bill?</label>
      <input type="text" placeholder="Bill Value" name="bill" />
    </div>
  );
}

function SelectPercentage() {
  return (
    <div>
      <label for="bill">How much was the bill?</label>
      <select>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was ok (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function Output() {}

function Reset() {
  return (
    <div className="reset-container">
      <button className="reset">Reset</button>
    </div>
  );
}
