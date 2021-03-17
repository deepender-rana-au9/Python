import logo from "./logo.svg";
import "./App.css";

const FileList = ({ files }) => (
  <table className="file-list">
    {files.map((file) => (
      <tr className="file-list-item" key={file.id}>
        <td className="file-name">{file.name}</td>
      </tr>
    ))}
  </table>
);
export default FileList;
