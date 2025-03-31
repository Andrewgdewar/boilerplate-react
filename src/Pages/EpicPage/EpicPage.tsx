import { createUseStyles } from "react-jss";
import Flex from "../../Components/Flex/Flex";
import { getGameInfoWithTop5 } from "./constants";
import { useMemo, useState } from "react";

const useStyles = createUseStyles({
  table: {
    width: "80%",

    borderCollapse: "collapse",
    border: "1px solid #ddd",
    margin: "20px 0",
    "& td": {
      padding: "10px",
      textAlign: "left",
    },
    "& th": {
      border: "1px solid white",
      fontWeight: "bold",
    },
    "& tr:hover": {
      backgroundColor: "#555",
    },
  },
});

export default function EpicPage() {
  const data = useMemo(() => getGameInfoWithTop5(), []);

  const [search, setSearch] = useState<string>("");

  const filteredData = useMemo(
    () => data.filter(({ title }) => title.toLowerCase().includes(search)),
    [data, search]
  );

  const handleChange = (str: string) => setSearch(str.toLowerCase());

  const classes = useStyles();
  return (
    <Flex
      justifyContent="center"
      flexDirection="column"
      flexGrow={1}
      fullWidth
      fullHeight
      alignItems="center"
    >
      <Flex>
        <input onChange={(e) => handleChange(e.target.value)} value={search} />
      </Flex>
      <table className={classes.table}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Publish Date</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map(
            ({
              title,
              publish_date,
              isTop5,
              //   platforms,
              rating,
              //   publisher,
              //   player_count,
            }) => (
              <tr key={title}>
                <td>
                  {isTop5 ? "️‍🔥" : ""}
                  {title}
                </td>
                <td>{publish_date}</td>
                <td>{rating}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </Flex>
  );
}
