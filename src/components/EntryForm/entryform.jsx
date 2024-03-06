export default function EntryForm() {
  return (
    <form>
      <h2>New Entry</h2>
      <div>
        <div>
          <label htmlFor="motto">Motto</label>
          <input type="text" name="motto" id="motto" />
        </div>
        <div>
          <label htmlFor="notes">Notes</label>
          <textarea name="notes" id="notes" rows="4" />
        </div>
        <div>
          <button type="submit">Create</button>
        </div>
      </div>
    </form>
  );
}
