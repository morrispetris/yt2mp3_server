import React from "react";
import { listDownloads, deleteDownload, getDownloadUrl } from "../api/api";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DownloadIcon from "@mui/icons-material/Download";
import DeleteIcon from "@mui/icons-material/Delete";

type Props = {};
export default function AvailableDownloads(props: Props) {
  const [availableDownloads, setAvailableDownloads] = React.useState<string[]>(
    []
  );
  const [selected, setSelected] = React.useState<string[]>([]);

  const onToggle = (fileName: string) => () => {
    if (selected.includes(fileName)) {
      const newSelected = [...selected];
      newSelected.splice(selected.indexOf(fileName), 1);
      setSelected(newSelected);
    } else {
      const newSelected = [...selected];
      newSelected.push(fileName);
      setSelected(newSelected);
    }
  };

  const onDownload = (fileName: string) => () => {
    const downloadUrl = getDownloadUrl(fileName);
    // window.open(downloadUrl);
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.click();
  };

  const onDelete = (fileName: string) => async () => {
    await deleteDownload(fileName);
    listDownloads().then((downloads) => setAvailableDownloads(downloads));
  };

  const deleteAll = () => {
    selected.map((fileName) => deleteDownload(fileName));
  };

  React.useEffect(() => {
    listDownloads().then((downloads) => setAvailableDownloads(downloads));
  }, []);

  return (
    <div className="DownloadsWrapper">
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "#c1ffebbf" }}>
        {availableDownloads.map((fileName) => (
          <ListItem
            key={fileName}
            secondaryAction={
              <>
                <IconButton
                  edge="end"
                  aria-label="download"
                  onClick={onDownload(fileName)}
                >
                  <DownloadIcon />
                </IconButton>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={onDelete(fileName)}
                >
                  <DeleteIcon />
                </IconButton>
              </>
            }
            disablePadding
          >
            <ListItemButton role={undefined} onClick={onToggle(fileName)} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={selected.includes(fileName)}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": fileName }}
                />
              </ListItemIcon>
              <ListItemText id={fileName} primary={fileName} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
}
