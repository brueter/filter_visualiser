import * as Papa from "papaparse";
import { useDataState, updateDataState } from "../../context/DataContext";

function FileUpload() {
  const { state, dispatch } = useDataState();

  function handleFileUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (file) {
      Papa.parse(file, {
        header: true,
        dynamicTyping: true,
        complete: function (
          results: Papa.ParseResult<{ time: string; data: number }>
        ) {
          const dataData: number[] = results.data.map((row) => row.data);
          updateDataState(dispatch, {
            raw: { ...state.raw, data: dataData },
          });
        },
      });
    }
  }

  return (
    <>
      <input type="file" onChange={handleFileUpload} accept=".csv" />
    </>
  );
}

export default FileUpload;
