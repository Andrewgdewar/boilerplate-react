import { createUseStyles } from "react-jss";

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

interface TableRow {
  id: string;
  name: string;
  price: number;
  description: string;
}

interface TableProps {
  data?: TableRow[];
}

export default function Table({ data = defaultTableData }: TableProps) {
  const classes = useStyles();
  return (
    <table className={classes.table}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            <td>{row.name}</td>
            <td>${row.price}</td>
            <td>{row.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const defaultTableData = [
  { id: "1", name: "Basic Plan", price: 10, description: "Core features" },
  { id: "2", name: "Pro Plan", price: 20, description: "Premium tools" },
  {
    id: "3",
    name: "Elite Plan",
    price: 30,
    description: "Full access + support",
  },
];
