import React from "react";

const FolderContents = (props) => {
  
    return (
      <ul>
        {props.files.map(file => {
          return (
            <li key={file.name}>
              name: {file.name} - type: {file.type} - added: {file.added}
            </li>
          );
        })}
      </ul>
    );
  
}

export default FolderContents;
